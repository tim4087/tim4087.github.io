---
layout: post
title: "La mayor caída de 2026: cómo Microsoft tumbó Outlook, Teams y Copilot en 74 países"
date: 2026-11-14 16:00:00 +0300
lang: es
---

*Otros idiomas: [Русский]({{ site.baseurl }}/2026/11/14/microsoft-global-outage-ru.html) · [English]({{ site.baseurl }}/2026/11/14/microsoft-global-outage.html)*

Mientras la industria descansaba de las noticias de IA, ocurrió algo a la antigua pero igual de ruidoso: una **caída global de Microsoft**. Según DownDetector — **la mayor caída de 2026 con diferencia**. Outlook, Teams, SharePoint, los archivos en la nube y hasta Copilot se cayeron para usuarios de 74 países. Esto es lo que pasó.

<!--more-->

## Cronología

**Jueves 12 de noviembre, ~18:00 UTC.** Primeros problemas: Outlook y Exchange Online empiezan a degradarse. Parece un incidente rutinario — Microsoft tiene decenas al año.

**Viernes 13 de noviembre.** La caída del correo se convierte en crisis en la nube a gran escala: fallan Teams, SharePoint, el acceso a archivos y documentos — para consumidores y empresas. **74 países** afectados. Microsoft dice algo críptico sobre servidores que se volvieron *«inesperadamente disponibles»* — y empieza a **reiniciarlos**. Como precaución, la empresa **congela todos los despliegues y cambios de configuración** mientras revisa las actualizaciones recientes.

**Sábado 14 de noviembre, por la mañana.** «Recuperación amplia» y un «lo sentimos profundamente» oficial. Para el sábado por la mañana el servicio está restaurado para todos los clientes restantes.

## Qué fue, técnicamente

Según Microsoft — **no fue un ciberataque** (la empresa descartó expresamente los rumores de hackeo). La causa es más prosaica y más aterradora: una sobrecarga en cascada de servidores — el mecanismo de failover que debía rescatarte durante los fallos se envenenó a sí mismo. Los servidores que volvían «inesperadamente» absorbían el tráfico y volvían a caer.

La fórmula de toda catástrofe en la nube: un bug × automatización × escala. A la escala de Microsoft, «escala» son cientos de millones de buzones.

## Por qué importa

1. **Copilot ya es infraestructura crítica.** La cita más reveladora de los afectados vino de un auditor: «Lo peor fue que Copilot no funcionaba. Y Outlook, por supuesto». Hace un año o dos un asistente de IA era un bono agradable; hoy su ausencia detiene el trabajo de la gente. La dependencia de la IA se volvió cotidiana — e instantánea.
2. **El mundo corre sobre un puñado de nubes.** Un bug de configuración — y el correo, las llamadas y los documentos se paran en 74 países. Es la segunda alarma tras el legendario incidente de CrowdStrike de 2024 (cuando cayeron máquinas Windows en todo el mundo): concentrar los servicios críticos en manos de pocos proveedores es un riesgo sistémico, no mala suerte.
3. **La ironía del momento.** La semana que viene es Microsoft Ignite, la conferencia insignia de la empresa, donde hablará de la fiabilidad de su nube con IA. Las diapositivas serán un poco incómodas.

## Lecciones

- **Para empresas:** un solo proveedor = un solo punto de fallo. Un canal de comunicación de respaldo y copias locales de los documentos críticos son más baratas que un día de inactividad.
- **Para usuarios:** el correo de 2026 no es «un sitio con cartas» — es la puerta a tus documentos, calendario, llamadas y asistente de IA. Cuando la puerta se cierra, se cierra todo a la vez.
- **Para la industria:** cuanta más automatización e IA en la gestión de infraestructura, más crítico es probar los propios mecanismos de fallo. El failover también puede ser un bug.

*Fuentes: [Al Jazeera](https://aljazeera.com/news/2026/11/13/microsoft-hit-by-global-outages-what-happened-and-why), [TechCrunch](https://techcrunch.com/2026/11/13/microsoft-latest-email-outage-turned-into-a-full-blown-global-cloud-crisis), [The Guardian](https://theguardian.com/technology/2026/nov/13/microsoft-outage-outlook-teams-word-excel-reports), [Mashable](https://mashable.com/tech/microsoft-outage-largest-of-2026-report), [USA Today](https://usatoday.com/story/tech/2026/11/13/microsoft-dismisses-cyberattack-speculation-amid-outage/92759759007), [ABC](https://abc.net.au/news/2026-11-14/microsoft-says-sorry-for-global-outage-and-details-recovery/107385540).*
