/* ============================================================
   Защита контента: блокировка перетаскивания и правого клика.
   Честно: от DevTools это не спасёт, но от случайного
   копирования/сохранения картинок — да.
   ============================================================ */
(function () {
  'use strict';

  // правый клик (контекстное меню)
  document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
  });

  // перетаскивание картинок и любых элементов
  document.addEventListener('dragstart', function (event) {
    event.preventDefault();
  });

  // выделение текста мышью
  document.addEventListener('selectstart', function (event) {
    var tag = event.target.tagName;
    // не мешаем выделять текст в полях ввода, если появятся
    if (tag !== 'INPUT' && tag !== 'TEXTAREA') event.preventDefault();
  });
})();

/* ============================================================
   Параллакс фона: двигается за курсором (мышь/тачпад) и
   за наклоном телефона (гироскоп). Плавный ход через lerp.
   ============================================================ */
(function () {
  'use strict';

  var bg = document.querySelector('.background-img');
  if (!bg) return;

  // уважаем настройку «уменьшить движение»
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var BASE_SHIFT = 30;  // желаемый максимальный сдвиг фона, px
  var ZOOM = 1.08;      // фон чуть увеличен — запас для сдвига (4% с каждой стороны)
  var SMOOTH = 0.08;    // плавность (0..1): меньше = ленивее

  var targetX = 0, targetY = 0, currentX = 0, currentY = 0;

  // сдвиг не должен оголять края: не больше 3.5% стороны экрана
  function maxShift(axis) {
    var size = axis === 'x' ? window.innerWidth : window.innerHeight;
    return Math.min(BASE_SHIFT, size * 0.035);
  }

  function setTarget(nx, ny) {
    // nx, ny ожидаются примерно в диапазоне -1..1
    var clamp = function (v) { return Math.max(-1, Math.min(1, v)); };
    targetX = clamp(nx) * -maxShift('x');
    targetY = clamp(ny) * -maxShift('y');
  }

  // --- мышь / тачпад ---
  window.addEventListener('mousemove', function (event) {
    setTarget(
      (event.clientX / window.innerWidth) * 2 - 1,
      (event.clientY / window.innerHeight) * 2 - 1
    );
  });

  // --- палец по экрану: работает и по HTTP, когда гироскоп заблокирован ---
  window.addEventListener('touchmove', function (event) {
    var touch = event.touches[0];
    if (!touch) return;
    setTarget(
      (touch.clientX / window.innerWidth) * 2 - 1,
      (touch.clientY / window.innerHeight) * 2 - 1
    );
  }, { passive: true });

  // палец убрали — фон плавно возвращается в центр
  window.addEventListener('touchend', function () {
    setTarget(0, 0);
  }, { passive: true });

  // --- наклон телефона (гироскоп) ---
  window.addEventListener('deviceorientation', function (event) {
    if (event.gamma == null || event.beta == null) return;
    // gamma — наклон влево/вправо, beta — вперёд/назад (40° ≈ как обычно держат)
    // /25 — полный отклик уже при 25° наклона, живее реагирует
    setTarget(event.gamma / 25, (event.beta - 40) / 25);
  });

  // iOS 13+ просит разрешение на гироскоп — запрашиваем по первому касанию
  function requestTiltPermission() {
    if (typeof DeviceOrientationEvent !== 'undefined' &&
        typeof DeviceOrientationEvent.requestPermission === 'function') {
      DeviceOrientationEvent.requestPermission().catch(function () {});
    }
    window.removeEventListener('touchstart', requestTiltPermission);
  }
  window.addEventListener('touchstart', requestTiltPermission);

  // --- пауза во время скролла: не трогаем фон, пока страница катится ---
  var scrollIdle = true, scrollTimer = null;
  window.addEventListener('scroll', function () {
    scrollIdle = false;
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(function () { scrollIdle = true; }, 160);
  }, { passive: true });

  // --- плавный цикл: пишем transform ТОЛЬКО когда значение реально меняется ---
  var lastX = null, lastY = null;
  (function loop() {
    var dx = targetX - currentX;
    var dy = targetY - currentY;
    // почти доехали — прилипаем к цели и не пишем стиль лишний раз
    if (Math.abs(dx) < 0.05) { currentX = targetX; dx = 0; }
    if (Math.abs(dy) < 0.05) { currentY = targetY; dy = 0; }
    if (dx !== 0) currentX += dx * SMOOTH;
    if (dy !== 0) currentY += dy * SMOOTH;

    var moving = dx !== 0 || dy !== 0;
    if (moving && scrollIdle &&
        (lastX !== currentX || lastY !== currentY)) {
      bg.style.transform =
        'translate3d(' + currentX.toFixed(2) + 'px,' + currentY.toFixed(2) + 'px,0) scale(' + ZOOM + ')';
      lastX = currentX;
      lastY = currentY;
    }
    requestAnimationFrame(loop);
  })();
})();

/* ============================================================
   Мультиязычность: RU (по умолчанию) / EN / ES.
   Автоопределение: сохранённый выбор → язык браузера →
   часовой пояс. Выбор запоминается в localStorage.
   ============================================================ */
(function () {
  'use strict';

  var SUPPORTED = ['ru', 'en', 'es'];

  var I18N = {
    ru: {
      'meta.title': 'Tim4087_ — Full-Stack разработчик | сайты, боты, приложения',
      'meta.description': 'Tim4087_ — Full-Stack разработчик. Создаю веб-продукты с нуля.',
      'socials.aria': 'Социальные сети',
      'bio': 'Привет! Full-Stack разработчик: создаю современные веб-приложения, сервисы и собственные проекты с нуля — от идеи до готового продукта. Люблю Linux и Open Source, интересуюсь кибербезопасностью и приватностью.',
      'projects.h2': 'над чем работаю // что создал',
      'proj.startpozi': '(приватная мета поисковая система с браузером)',
      'proj.omni': '(защита безопасности)',
      'badge.dev': 'в разработке',
      'proj.netlogic': '(движок игр)',
      'badge.soon': 'скоро',
      'projects.note': '// На самом деле у меня больше проектов, но их очень много и недоделаных и из других сфер.',
      'langs.h2': 'на чём пишу // чаще всего',
      'lang.other': 'другое',
      'services.aria': 'Услуги',
      'services.intro': 'Могу разработать под ключ:',
      'services.1': 'тг/дс ботов',
      'services.2': 'мини-апку',
      'services.3': 'сайт',
      'services.4': 'приложение',
      'services.5': 'лендинг',
      'services.6': 'любой другой проект',
      'services.cta': 'связаться',
      'footer': '© 2026 Tim4087_ · версия 1.0'
    },
    en: {
      'meta.title': 'Tim4087_ — Full-Stack Developer | websites, bots, apps',
      'meta.description': 'Tim4087_ — Full-Stack developer. Building web products from scratch.',
      'socials.aria': 'Social networks',
      'bio': "Hi! Full-Stack developer: I build modern web apps, services and my own projects from scratch — from idea to finished product. I love Linux and Open Source, interested in cybersecurity and privacy.",
      'projects.h2': "what i'm working on // what i've built",
      'proj.startpozi': '(private meta search engine with a browser)',
      'proj.omni': '(security protection)',
      'badge.dev': 'in development',
      'proj.netlogic': '(game engine)',
      'badge.soon': 'soon',
      'projects.note': '// Actually I have more projects, but there are many — some unfinished and from other areas.',
      'langs.h2': 'what i write in // most often',
      'lang.other': 'other',
      'services.aria': 'Services',
      'services.intro': 'I can build end-to-end:',
      'services.1': 'tg/ds bots',
      'services.2': 'mini app',
      'services.3': 'website',
      'services.4': 'application',
      'services.5': 'landing page',
      'services.6': 'any other project',
      'services.cta': 'contact me',
      'footer': '© 2026 Tim4087_ · version 1.0'
    },
    es: {
      'meta.title': 'Tim4087_ — Desarrollador Full-Stack | web, bots, apps',
      'meta.description': 'Tim4087_ — Desarrollador Full-Stack. Creo productos web desde cero.',
      'socials.aria': 'Redes sociales',
      'bio': '¡Hola! Desarrollador Full-Stack: creo aplicaciones web modernas, servicios y proyectos propios desde cero — de la idea al producto terminado. Me encanta Linux y el Open Source, me interesan la ciberseguridad y la privacidad.',
      'projects.h2': 'en qué trabajo // lo que he creado',
      'proj.startpozi': '(metabuscador privado con navegador)',
      'proj.omni': '(protección de seguridad)',
      'badge.dev': 'en desarrollo',
      'proj.netlogic': '(motor de juegos)',
      'badge.soon': 'pronto',
      'projects.note': '// En realidad tengo más proyectos, pero son muchos — algunos sin terminar y de otras áreas.',
      'langs.h2': 'en qué escribo // más a menudo',
      'lang.other': 'otro',
      'services.aria': 'Servicios',
      'services.intro': 'Puedo desarrollar llave en mano:',
      'services.1': 'bots de tg/ds',
      'services.2': 'mini app',
      'services.3': 'sitio web',
      'services.4': 'aplicación',
      'services.5': 'landing',
      'services.6': 'cualquier otro proyecto',
      'services.cta': 'contactar',
      'footer': '© 2026 Tim4087_ · versión 1.0'
    }
  };

  function detectLang() {
    // 1. сохранённый выбор
    try {
      var saved = localStorage.getItem('lang');
      if (SUPPORTED.indexOf(saved) !== -1) return saved;
    } catch (err) { /* localStorage может быть недоступен */ }

    // 2. язык браузера
    var list = (navigator.languages && navigator.languages.length)
      ? navigator.languages
      : [navigator.language || ''];
    for (var i = 0; i < list.length; i++) {
      var prefix = String(list[i]).toLowerCase().split('-')[0];
      if (SUPPORTED.indexOf(prefix) !== -1) return prefix;
    }

    // 3. часовой пояс: российские пояса → ru, иначе en
    try {
      var tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
      var ruZones = /Moscow|Kaliningrad|Samara|Yekaterinburg|Omsk|Novosibirsk|Krasnoyarsk|Irkutsk|Yakutsk|Vladivostok|Magadan|Kamchatka/;
      if (tz) return ruZones.test(tz) ? 'ru' : 'en';
    } catch (err) { /* Intl недоступен */ }

    // RU по умолчанию
    return 'ru';
  }

  function applyLang(lang) {
    var dict = I18N[lang] || I18N.ru;

    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var value = dict[el.getAttribute('data-i18n')];
      if (value != null) el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var value = dict[el.getAttribute('data-i18n-aria')];
      if (value != null) el.setAttribute('aria-label', value);
    });

    var description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', dict['meta.description']);

    if (dict['meta.title']) document.title = dict['meta.title'];

    document.querySelectorAll('.lang-switch button').forEach(function (button) {
      button.classList.toggle('is-active', button.getAttribute('data-lang') === lang);
      button.setAttribute('aria-pressed', button.getAttribute('data-lang') === lang ? 'true' : 'false');
    });
  }

  // переключатель
  document.querySelectorAll('.lang-switch button').forEach(function (button) {
    button.addEventListener('click', function () {
      var lang = button.getAttribute('data-lang');
      try { localStorage.setItem('lang', lang); } catch (err) {}
      applyLang(lang);
    });
  });

  applyLang(detectLang());
})();

/* ============================================================
   Счётчики процентов в карточке языков: отсчитываются от 0
   до значения синхронно с заполнением полос.
   ============================================================ */
(function () {
  'use strict';

  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var DURATION = 900;   // мс, как у полос
  var BASE_DELAY = 460; // мс, старт как у первой полосы
  var STEP = 80;        // мс между строками

  document.querySelectorAll('.lang-row').forEach(function (row, index) {
    var el = row.querySelector('.lang-percent');
    if (!el) return;

    var target = parseInt(el.textContent, 10) || 0;
    el.textContent = '0%';

    setTimeout(function () {
      var startedAt = null;
      function tick(now) {
        if (startedAt === null) startedAt = now;
        var progress = Math.min(1, (now - startedAt) / DURATION);
        var eased = 1 - Math.pow(1 - progress, 3); // ease-out, как у полос
        el.textContent = Math.round(eased * target) + '%';
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }, BASE_DELAY + index * STEP);
  });
})();
