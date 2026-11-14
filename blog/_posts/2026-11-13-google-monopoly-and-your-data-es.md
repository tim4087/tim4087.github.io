---
layout: post
title: "Google bajo fuego cruzado: vigilancia, monopolio y tus datos"
date: 2026-11-13 20:00:00 +0300
lang: es
---

*Otros idiomas: [Русский]({{ site.baseurl }}/2026/11/13/google-monopoly-and-your-data-ru.html) · [English]({{ site.baseurl }}/2026/11/13/google-monopoly-and-your-data.html)*

Un otoño duro para Google. Por un frente, los tribunales: la empresa ha sido **declarada monopolista dos veces** y se la obliga a compartir datos con la competencia. Por otro, los usuarios: el 16 de octubre Google reescribió en silencio su política de privacidad, y ahora **tu Gmail, Fotos y Drive pueden influir en la publicidad** que ves. Analicemos qué pasa y qué hacer al respecto.

<!--more-->

## Parte 1. El monopolio, probado en los tribunales. Dos veces.

**El caso de búsqueda (2020→2026).** En agosto de 2024, el juez Amit Mehta falló que Google **mantuvo ilegalmente su monopolio de búsqueda**. ¿Cómo? El tribunal determinó que la empresa pagaba **más de 26.000 millones de dólares al año** por ser el buscador exclusivo por defecto en navegadores y dispositivos — de Safari a teléfonos Android.

Las medidas (septiembre de 2025) fueron más suaves de lo que quería el Departamento de Justicia: no le quitaron Chrome ni Android, pero:
- se prohíben los contratos exclusivos de distribución de Search, Chrome, Assistant y la app Gemini;
- Google debe **compartir datos de búsqueda con «competidores calificados»** — por primera vez, la escala de una máquina que llevaba 20 años acumulando los clics de todos sale al exterior;
- un comité técnico supervisa el cumplimiento.

**El caso de ad-tech.** En abril de 2025, la jueza Leonie Brinkema declaró que Google monopolizó ilegalmente los mercados de servidores de anuncios y bolsa publicitaria de la web abierta. El 2 de septiembre de 2026 dictó las medidas: se **negó** a forzar la venta de la bolsa AdX, pero ordenó integraciones con Prebid, exigió que AdX presente pujas a servidores rivales, permitió a los editores **exportar sus propios datos** y exigió revelar la mecánica de las subastas. Seis años bajo supervisión de un monitor.

Google apela ambas sentencias, y el proceso se arrastra: el juez Mehta dijo en noviembre estar «cada vez más preocupado» por los retrasos. Detalle revelador: Alphabet ya reservó **1.000 millones de dólares** para multas.

## Parte 2. Vigilancia 2.0: Personal Intelligence

Ahora veamos cómo se ve esto desde dentro de tu cuenta.

En enero de 2026 Google lanzó **Personal Intelligence**: los suscriptores de AI Pro/Ultra pueden conectar **Gmail y Google Fotos al AI Mode** de la búsqueda — y obtener respuestas informadas por sus datos personales («¿qué chaqueta llevo al viaje?» — con guiño a tus correos de reservas). Suena útil. La escala impresiona: **AI Mode supera los 1.000 millones de usuarios mensuales**; AI Overviews llega a 2.500 millones.

El problema empezó el 16 de octubre de 2026, con la actualización de la política de privacidad. El FAQ de Google decía sin matiz que el contenido de Drive, Gmail y Fotos **«nunca se usa con fines publicitarios»**. Ahora esa frase tiene una excepción: si conectaste esos servicios a Search o Gemini — «un subconjunto de esos datos puede usarse también para mostrar anuncios».

Cómo funciona, según las explicaciones oficiales:
- los anuncios no se construyen sobre el contenido «crudo» de los correos, sino sobre **resúmenes e inferencias** de las apps conectadas;
- los anunciantes nunca ven tus datos — solo reciben una «señal»;
- las categorías sensibles (raza, religión, orientación sexual, salud) quedan excluidas.

Pero hay tres peros, como informan SEJ y Android Authority:
1. **Apagar la personalización de anuncios no basta** — los datos siguen alimentando las funciones de IA. La única forma de excluirse del todo es desconectar las apps.
2. **Desconectar no borra lo ya guardado**: la información almacenada en tu historial de búsqueda permanece.
3. Un subconjunto de los datos de AI Mode lo **revisan moderadores humanos** — personas reales.

Súmale la historia de julio (TechCrunch): una actualización silenciosa de junio permitió a Google **por defecto** usar las imágenes, archivos y audios que subes a la búsqueda para entrenar sus modelos de IA. Una configuración aparte de «Datos de búsqueda» viene activada por defecto.

Y la guinda: desde el 28 de septiembre, AI Mode puede **«vigilar la web»** por ti — siguiendo caídas de precio, reposiciones de stock y eventos cercanos, con alertas. ¿Útil? Sin duda. Pero es Google monitorizando oficialmente internet según tus consultas personales, de forma continua.

## Parte 3. «Todos lo están reemplazando» — en ambas direcciones

La frase «están reemplazando a Google» hoy es cierta en dos sentidos a la vez.

**Google está reemplazando la búsqueda y la web misma.** Gemini 4 Hydrogen ya es el modelo por defecto en AI Mode; según el anuncio del 3 de noviembre, las escuelas K-12 **no podrán usar Google Search sin la IA integrada** — «tomen Gemini o lárguense». Chegg y los editores ya demandaron porque las respuestas de IA matan su tráfico (sin éxito por ahora). La web clásica de diez enlaces azules se convierte en una conversación con la IA — de forma irreversible.

**Obligan a Google a abrir sus puertas.** Las medidas de ambos casos equivalen a la primera entrega forzosa de los activos de un monopolista: los datos de búsqueda van a «competidores calificados» (DuckDuckGo, Perplexity y los startups de IA ya hacen cola), los datos publicitarios a los editores. En su apelación cruzada, el Departamento de Justicia quiere más: extender las restricciones a los productos GenAI de Google, para que el «manual anticompetitivo» no se repita con Gemini. Google se resiste: «las medidas de búsqueda no pueden aplicarse a empresas sin buscador».

Lo decidirá el Tribunal de Apelaciones del Circuito de D.C. — sin fecha de vista. En 2026 nada cambiará.

## Qué puedes hacer (práctico)

Si quieres poner coto al apetito de Google, una lista:

1. **Revisa las apps conectadas**: Cuenta de Google → Personalización de búsqueda → Connected Content Apps → desconecta Gmail/Fotos si no quieres alimentar a AI Mode.
2. **My Ad Center** — apaga la personalización de anuncios (ojo: esto NO desactiva las funciones de IA, solo los anuncios).
3. **Historial**: configura el borrado automático (3/18/36 meses) para Web & App Activity y la nueva opción «Datos de búsqueda» — está activada por defecto.
4. **Aparte**: cuida qué medios subes a la búsqueda si no quieres que entrenen modelos.
5. Entiende el trato: Personal Intelligence es genuinamente cómoda. La pregunta no es «bien o mal», sino el consentimiento informado — ahora conoces el precio.

## Conclusiones

1. **El monopolio se venció jurídicamente, no estructuralmente.** Chrome y AdX se quedaron en Google; en vez de una ruptura — seis años de supervisión e intercambio de datos. El precedente pesa más que el efecto inmediato.
2. **La privacidad se volvió una suscripción a la comodidad.** Google es el primer gigante en legalizar el uso del contenido de tu correo y tus fotos para publicidad — «con tu consentimiento». Espera que Apple y Microsoft copien el esquema.
3. **La búsqueda tal como la conocíamos terminó.** 2.500 millones de personas reciben respuestas de IA en vez de enlaces, las escuelas deben aceptar Gemini, los editores demandan. La pregunta ya no es «si la IA reemplazará la búsqueda», sino «de quién será la búsqueda con IA». La batalla judicial por los datos es exactamente la batalla por esa respuesta.

## Nota del autor: por eso construyo StartPOZI

Confesión completa: [StartPOZI](https://startpozi.com/) es mi propio proyecto, y no pretendo ser neutral al respecto. Pero las noticias de esta entrada — un monopolio sobre los clics, tu correo como señal publicitaria, «tomen Gemini o lárguense» — son exactamente la razón de que exista.

StartPOZI es un metabuscador privado: gratuito, independiente y financiado con donaciones en vez de publicidad. Tres principios en su página [About](https://startpozi.com/about): **no registramos nada, no te vigilamos, solo abre y busca**.

Qué hay a noviembre de 2026:

- **[Trust Center](https://startpozi.com/trust)** — un modelo de amenazas abierto en vez de promesas: qué protegemos, qué no, qué registramos y qué nunca — y cómo verificar nuestras afirmaciones por ti mismo. Datos comprobables en lugar de marketing.
- **[StartPOZI Browser](https://startpozi.com/apps)** — navegador propio para Windows, macOS y Linux. Tres pilares: Seguridad, Privacidad y **Soberanía** — la soberanía del usuario sobre sus propios datos.
- **Versión lite** (lite.startpozi.com) — funciona totalmente sin JavaScript.
- Interfaz en 6 idiomas, incluidos ruso y español; temas, búsqueda segura, y nunca envía referrers.

Un proyecto pequeño no vencerá a Google en los tribunales ni le quitará sus 26.000 millones en contratos. Pero cada vez que los reguladores abren las puertas de los datos a los «competidores calificados» y los usuarios piensan en el precio de Personal Intelligence — las alternativas dejan de ser exóticas. El destino del monopolio se decide en un tribunal de apelaciones. Las alternativas se construyen ahora mismo — a la vista de todos.

*Fuentes: [Thank You Robot](https://www.thankyourobot.com/2026/11/googles-search-antitrust-case-what.html), [Goodwin](https://www.goodwinlaw.com/en/insights/publications/2026/10/insights-technology-antc-antitrust-competition-technology-3q-2026), [Courthouse News](https://www.courthousenews.com/monopolist-google-gets-behavioral-guardrails-and-a-monitoring-plan), [DOJ brief](https://www.justice.gov/atr/media/1454586/dl), [Techwire](https://www.techwire.co.il/en/article/google-search-remedies-judge-concerned-delays), [Search Engine Journal](https://www.searchenginejournal.com/google-privacy-policy-connected-apps-ai-mode-ads/594546), [TechCrunch](https://techcrunch.com/2026/07/06/if-you-use-google-youre-training-its-ai-heres-how-to-opt-out), [exchange4media](https://www.exchange4media.com/digital-news/ahead-of-q3-google-redraws-another-line-between-personal-context-and-ads-159476.html), [FindLaw](https://www.findlaw.com/legalblogs/technologist/can-google-make-schools-accept-ai-to-keep-using-search), [StartPOZI](https://startpozi.com/).*
