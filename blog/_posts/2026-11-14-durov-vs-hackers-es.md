---
layout: post
title: "«¿Piensan lo contrario? Háquenme»: investigando el reto de Dúrov a los hackers"
date: 2026-11-14 21:00:00 +0300
lang: es
---

*Otros idiomas: [Русский]({{ site.baseurl }}/2026/11/14/durov-vs-hackers-ru.html) · [English]({{ site.baseurl }}/2026/11/14/durov-vs-hackers.html)*

El 13 de noviembre, Pável Dúrov hizo lo que no hacen los CEO de compañías con mil millones de usuarios: **invitó públicamente a los hackers a romper su cuenta personal**. «¿Piensan lo contrario? Vayan a hackear mi cuenta: t.me/monk 🍿». Detrás de esa frase hay una historia de cuatro días — una función nueva, una calculadora en un teléfono ajeno y una corrección que llegó **antes de que la vulnerabilidad se mostrara al público**. Reconstruí la cronología hora a hora — y encontré cinco rarezas.

<!--more-->

## La cronología de cuatro días

**9 de noviembre.** Telegram lanza los **widgets HTML** (Bot API 10.4): mini-apps dentro de un mensaje — encuestas, tickers de precios, juegos. Límite de 32 KB, ejecución en el motor aislado QuickJS, sin acceso a red.

**10 de noviembre.** Dúrov anuncia la función con una frase fatídica: *«Cualquier mensaje de Telegram puede convertirse ahora en una app»*. Ese mismo día, a las 13:16 UTC, aparece en el fork público de QuickJS de Telegram un **commit que corrige un bug de memoria** — 21 minutos antes del post de Dúrov. Apúntalo.

**11 de noviembre, 11:00 UTC.** La empresa **V12** (crea agentes de IA para buscar vulnerabilidades; fundada por Jasraj Bedi, cofundador de la auditora Zellic) publica un vídeo: un usuario abre un chat con un bot → pulsa Start → el widget muestra una cuenta atrás «3, 2, 1, BOOM» → **se abre la calculadora del sistema en el teléfono**. En seguridad, esa es la prueba clásica: código ajeno ejecutándose fuera del sandbox. El pie de V12 retorció la frase de Dúrov: *«Cualquier mensaje de Telegram puede convertirse ahora en RCE»*.

V12 no publicó detalles técnicos — solo un hash SHA-256 (así los investigadores fijan prioridad sin revelar el hallazgo).

**11 de noviembre, horas después.** Telegram despliega un **parche del lado servidor para todos** — sin necesidad de actualizar la app. El fix de cliente llega con Telegram para Android **13.2.2**.

**13 de noviembre.** El post de Dúrov: *«Sobre el supuesto RCE en los nuevos widgets: el problema no existe. Nadie pudo ser hackeado solo por recibir un mensaje. Primero había que iniciar un servicio de terceros. Pero incluso eso ya está corregido en el servidor. ¿Piensan lo contrario? Vayan a hackear mi cuenta»*.

## La parte técnica, en palabras humanas

La explicación más citada (Gram News, desde el fork de QuickJS): un **use-after-return** — el parser del motor aceptaba `await using` en la cabecera de un `for` fuera de funciones async. Una instrucción `await` acababa en una función normal; al salir, el intérprete tomaba el camino de los generadores y se saltaba el desacople de los closures de las variables. Los closures seguían apuntando a una región del stack que ya no existía. Un clásico: una entrada inválida → memoria corrupta → se ejecuta código ajeno.

El significado práctico: código con los privilegios de Telegram podía, en teoría, alcanzar los datos que **mantienen la sesión iniciada**. Un matiz que pocos mencionan: la 2FA de contraseña en la nube protege los inicios **nuevos** — no una sesión ya autorizada.

## Cinco rarezas (la parte investigativa)

1. **El commit precede a la demo.** El fix ca3594d está fechado el 10 de noviembre, 13:16 UTC — un día antes del vídeo de V12 y 21 minutos antes del anuncio de Dúrov. O sea, Telegram corregía algo que «no existe» antes de la demostración pública. El vínculo con el vídeo de V12 no está probado (solo coinciden las descripciones), pero la línea temporal obliga a preguntar: ¿cuándo se enteró Telegram exactamente?
2. **«No hay bug» y «está corregido» en un mismo post.** Dúrov escribe que el problema no existe — e inmediatamente que está «totalmente corregido en el servidor». Afirmaciones incompatibles en tres líneas. Días antes, la compañía había reconocido y corregido oficialmente «un problema en Telegram para Android».
3. **Dos bugs, un commit.** Un repositorio independiente de GitHub publicó ese día la descripción de **otro** bug del parser — señalando el mismo commit ca3594d. Dos descripciones no pueden describir a la vez por completo un commit. Nadie las ha conciliado.
4. **Desktop, al parecer, sin protección.** Según una afirmación única y sin confirmar de Security Lab, Telegram Desktop 7.4.2 (11 de noviembre) se compiló **sin el fix**. Si el 7.4.3 (12 de noviembre) lo incluye, no se sabe. Circula un repost sin verificar sobre una **segunda demo en Desktop 7.4.3**.
5. **Cabos sueltos.** Otros cinco fixes de memoria de QuickJS del 10 de noviembre, al parecer, no entraron en 13.2.2. Sin CVE asignado. Si la explotación requería cero toques (solo abrir el chat) sigue sin resolverse — la demo de V12 necesitaba al menos pulsar Start.

## Reacción del mercado: sin pánico, con desconfianza

- **Bybit** pidió oficialmente el 13 de noviembre actualizar Telegram en Android de inmediato: «un dispositivo comprometido también pone en riesgo a otras apps» — y evitar bots desconocidos.
- El fundador de SlowMist, **Cosine**, había advertido un día antes que las «apps en mensajes» no tenían sandbox y que la búsqueda de vulnerabilidades con IA había avanzado mucho — y recomendaba **no apresurarse a actualizar** (consejo que solo sirve en versiones anteriores a los widgets, que ni siquiera los ejecutan).
- En el mismo ciclo: Kaspersky reportó ataques del troyano **WebRAT** a través de Telegram.

## Dúrov ya había lanzado retos. Y perdió una vez

No es su primer «háquenos». En **diciembre de 2013** ofreció 200.000 dólares en Bitcoin por romper el cifrado MTProto de Telegram. Dos días después, un investigador de Habr con el nick **x7mz** encontró una debilidad en el manejo de nonces de los chats secretos — y cobró **100.000 dólares**. Un segundo concurso de 300.000 (2014–2015) terminó **sin ganadores**. El bug bounty corre desde 2014: de 100 a más de 100.000 dólares por reporte.

Pero el reto actual se diferencia en tres ausencias: **sin premio, sin alcance, sin fecha límite**. No es un concurso — es una apuesta pública. CryptoBriefing lo resumió mejor: Dúrov ha anunciado en la práctica un **stress test público**. La cuenta resiste — un punto silencioso para Telegram. No resiste — la compañía tendrá un problema mucho más ruidoso que un reporte disputado.

## Lo que de verdad protege (mi opinión)

Lo más importante de esta historia no son las palabras de Dúrov, sino la ingeniería del 13.2.2. Telegram no solo parcheó el parser: **movieron los widgets a un proceso aislado aparte** `:widgets` — sin permisos de Android, sin red, sin acceso a archivos, cuentas ni claves, bajo filtro seccomp. ~96 archivos y 6.800 líneas en un par de días. Si aparece otro bug de memoria en QuickJS, la ejecución de código caerá en un proceso que **no tiene ni la cuenta ni los chats**.

Esa es la lección correcta para toda la industria (y muy familiar para quien construye navegadores): parchear un bug concreto es táctica; aislar clases enteras de ataques es estrategia. La ironía: los ingenieros de Telegram lo hicieron en silencio — y el público recibió la frase del palomitas.

El riesgo del propio reto: convierte la cuenta de Dúrov en **el objetivo más atractivo del mundo**. Cualquier cosa — phishing a su entorno, SIM-swap, un 0day en otra parte — ahora tiene un precio extra: publicidad. Marketing inteligente o diana gigante, el tiempo lo dirá.

## Qué hacer tú

1. Actualiza **Telegram para Android a 13.2.2+** (el fix de servidor llegó a todos, pero el de cliente solo va en la versión nueva).
2. Actualiza también **Desktop e iOS** — su estatus en esta historia nunca se aclaró; la última versión es la única garantía.
3. No inicies **bots desconocidos** ni abras chats llenos de widgets de remitentes ajenos.
4. No entres en pánico por los **mensajes ya recibidos**: no hay ataques confirmados en la naturaleza. La disputa es sobre precondiciones, no sobre una ola de hackeos.
5. Y lo eterno: activa la **contraseña en la nube** y no amarres tu vida a una sola cuenta.

*Fuentes: [Lenta.ru](https://lenta.ru/news/2026/11/13/durov-brosil-vyzov-hakeram/) (en ruso), [análisis en dev.to](https://dev.to/hacktheplanet/telegrams-widget-flaw-the-fix-and-durovs-dare-go-hack-my-account-3j7j), [post de Dúrov en X](https://x.com/durov/status/2121274027285307903), Forklog (WebRAT), Gram News, CryptoBriefing.*
