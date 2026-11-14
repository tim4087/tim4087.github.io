---
layout: post
title: "El tesoro de Kim Jong Un: cómo los hackers norcoreanos robaron 6.360 millones a Binance"
date: 2026-11-14 20:15:00 +0300
lang: es
---

*Otros idiomas: [Русский]({{ site.baseurl }}/2026/11/14/kim-treasure-lazarus-ru.html) · [English]({{ site.baseurl }}/2026/11/14/kim-treasure-lazarus.html)*

En la noche del 29 de octubre de 2026, miles de millones en criptomonedas empezaron a abandonar los monederos de Binance — el mayor exchange del mundo. La mayor parte de los **6.360 millones de dólares** se movió en apenas **20 minutos**. Es el mayor robo cripto de la historia y, según TRM Labs y Chainalysis, lo perpetró la élite de **TraderTraitor** — una unidad de la legendaria **Lazarus Group** de Corea del Norte. Esta es la historia de cómo el país más cerrado del mundo crió a los mejores ciberdelincuentes del planeta.

<!--more-->

## El robo del siglo: veinte minutos

La cronología de TRM Labs suena a guion de película:

- **La preparación empezó al menos 36 horas** antes del golpe — cuentas e infraestructura listas de antemano.
- Los monederos de Binance en **XRP Ledger, Ethereum, Bitcoin, Tron, Solana y otras cuatro redes** enviaron a la vez sus saldos a direcciones controladas por un solo atacante.
- Una segunda ola golpeó los monederos en **Avalanche y Polygon**.
- La mayor parte de los fondos desapareció **en 20 minutos** — el exchange físicamente no pudo reaccionar.

La pista que apunta a Corea del Norte: la firma. Preparación larga, golpe relámpago, blanqueo con el mixer **Tornado Cash** — una repetición exacta del hack a Bybit de febrero de 2025. El CEO de Chainalysis, Jonathan Levin, lo confirmó públicamente.

## De la burla al estrellato: veinte años de evolución

Hace un decenio y medio, «hackers norcoreanos» hacía reír a los especialistas. El primer informe apareció en **2004**: el Ministerio de Defensa de Corea del Sur afirmó que el Norte había entrenado a más de **500 ciberguerreros** para atacar redes surcoreanas, japonesas y estadounidenses. Sonaba a propaganda.

Lo que cambió son los resultados. La escalera de robos crece como una buena serie:

| Año | Objetivo | Robado |
|---|---|---|
| 2024 | WazirX (India) | 235M $ |
| 2025 | Bybit | 1.400M $ |
| 2025 | todos los hackers del mundo | 3.400M $ (~2.000M — cuota norcoreana) |
| 2026 | **Binance** | **6.360M $** |

De un cuarto de mil millones a seis mil quinientos en dos años. Si esto es propaganda de Seúl, es propaganda carísima.

## Cómo lo hacen: la «entrevista contagiosa»

La autopsia de Bybit reveló el mecanismo — mucho más elegante que la fuerza bruta.

La noche del 21 de febrero de 2025, el jefe de Bybit, **Ben Zhou**, aprobó rutinariamente varias operaciones antes de dormir. Apenas se dormía — llamada tardía: «Ben, tenemos un problema... puede que nos hayan hackeado... Todo el Ethereum desapareció». Así empezó el mayor robo de la historia hasta entonces.

Técnicamente:

1. Los fondos del exchange estaban en **monederos multifirma** — los retiros exigían la aprobación de varios ejecutivos.
2. Los hackers **comprometieron a un proveedor de software** — Safe{Wallet}, cuya interfaz de seguridad usaba Bybit.
3. El dispositivo de un empleado de Safe{Wallet} fue infectado... **durante una entrevista de trabajo**. Entrevistaba para un puesto nuevo — e infectó a su empleador actual.
4. Antes de aprobar operaciones, los gerentes de Bybit veían una **interfaz suplantada**: página familiar, dirección correcta — pero el botón «confirmar» entregaba a los hackers el control de los monederos.

El arsenal del grupo (según la inteligencia de amenazas de F6) tiene dos escenarios principales:

- **Reclutadores falsos.** Objetivos: empleados de blockchain, fintech y cripto. Un chat sobre una vacante → «haz una prueba en esta web recién creada y graba un vídeo presentándote» → el malware o una herramienta de acceso remoto aterriza en el dispositivo. Los de seguridad lo llaman la «entrevista contagiosa». Carlos Yanez (Global Ledger): «Me pasa constantemente. La calidad del disfraz norcoreano ha mejorado enormemente en un año. Da miedo lo lejos que han llegado».
- **Gente dentro.** Miles de especialistas IT norcoreanos cualificados se contratan en empresas de todo el mundo, pasan entrevistas con honestidad, toman tareas difíciles y horas extra — su misión real: **entrar dentro del perímetro de seguridad**. Según el Departamento de Estado de EE. UU., esos ingresos financian **programas de armas de destrucción masiva y misiles balísticos**.

Y no es solo Lazarus: **Kimsuky** se especializa en phishing (campañas recientes con códigos QR a páginas maliciosas; adora Android), mientras **APT37** hace espionaje puro contra usuarios de Windows.

## Mi añadido: los deepfakes ya están aquí

Añado lo que salió a la luz **después** del ataque a Binance — el 12 de noviembre el FBI destapó la **operación FaceStealer**: operadores norcoreanos grababan las webcams de las víctimas y luego usaban **deepfakes de IA para hacerse pasar por conocidos en llamadas falsas de Zoom y Teams**, empujando a instalar malware. Balance: 400M+ $ en 18 meses, 677 objetivos en 58 países — y, lo importante, entre los objetivos había **maintainers de código abierto**. Atacan no solo monederos, sino la cadena de suministro de software de la que dependemos todos.

El vector es obvio: el phishing antes dependía del texto y de una víctima crédula; ahora depende de un vídeo falso de alguien de confianza. La «entrevista contagiosa» se convierte en la «videollamada contagiosa».

## La pregunta incómoda: a quién creer

Por honestidad — esta historia tiene un lado incómodo, que también señala Lenta.ru. Casi todo lo que sabemos de los hackers norcoreanos viene de dos fuentes: **los servicios secretos surcoreanos** (un país en guerra informativa con el Norte) y los **desertores**.

Konstantin Asmolov (Centro de Estudios Coreanos, RAN) llama directamente a estos narradores poco fiables: están incentivados a contar historias lo más chocantes posible para conseguir ventajas en su nueva casa. Ejemplo revelador: el testigo estrella del informe de la ONU sobre derechos humanos en la RPDC y autor del superventas «Escape from Camp 14», Shin Dong-hyuk, **admitió que se inventó buena parte de su historia**.

Y la fuente clave sobre el «ciberejército» del Norte fue durante años un solo hombre — el desertor Kim Heung-kwan, que dice haber sido profesor de informática en Pyongyang. Es suya la frase que da título a esta entrada: *«Los hackers norcoreanos son un verdadero tesoro para Kim Jong Un... ¿quiénes más realizan tantas operaciones exitosas como Corea del Norte?»* ¿Bonito? Mucho. ¿Verificable? Apenas.

Pero esto es lo importante: el escepticismo sobre las fuentes no cancela **los datos de blockchain**. Las transacciones mismas, la firma de los ataques y los informes de analistas independientes (TRM, Chainalysis) no son relatos de desertores. Así que la imagen probablemente es correcta en lo esencial: un grupo — empezara en 1998 por iniciativa del joven Kim Jong Un (como afirma el exembajador Thae Yong-ho) o de otro modo — se hizo real, y una amenaza real.

## Qué se deduce (mi intento de conclusiones)

1. **La cripto es el objetivo perfecto para un Estado sancionado.** Sin intermediarios bancarios, fronteras difusas, blanqueo automatizado. 6.360M $ es más de lo que muchos países ganan con exportaciones en un año. La RPDC encontró sus «recursos naturales digitales».
2. **El eslabón más débil no es la criptografía — son las personas y la cadena de suministro.** Ningún algoritmo multifirma te salva si la interfaz de aprobación está suplantada y el portátil de un proveedor se infectó en una entrevista. La seguridad en 2026 es la seguridad de cada contratista.
3. **La IA baja el listón de la confianza.** Una llamada deepfake de un «colega» cuesta menos que una semana de chat. La regla del decenio: confirmaciones críticas — solo por un segundo canal independiente.
4. **La atribución también es un arma.** Hasta que podamos mirar dentro de Pyongyang, «hackers norcoreanos» seguirá siendo a la vez un hecho y una etiqueta cómoda. A cada gran hack ahora le será más fácil colgárselo a Lazarus — y no siempre será verdad.

El mínimo práctico para cualquiera: la frase semilla — ni en notas ni en capturas; sumas serias — en monedero hardware; una «entrevista» con una web desconocida — en un dispositivo aparte; y la confirmación de transferencias — siempre verificando la dirección **en el propio dispositivo**, no solo en la web. Ben Zhou lo confirma.

*Fuentes: [Lenta.ru — «El tesoro de Kim Jong Un»](https://lenta.ru/articles/2026/10/30/lazarus/) (en ruso), informes de TRM Labs y Chainalysis, declaración del FBI sobre Bybit, F6 Threat Intelligence, revelación del FBI sobre la operación FaceStealer (noviembre de 2026).*
