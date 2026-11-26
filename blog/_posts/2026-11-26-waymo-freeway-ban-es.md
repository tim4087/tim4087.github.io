---
layout: post
title: "Robotaxi contra la patrulla: por qué echaron a Waymo de las autopistas de California"
date: 2026-11-26 19:10:00 +0300
lang: es
---

*Otros idiomas: [Русский]({{ site.baseurl }}/2026/11/26/waymo-freeway-ban-ru.html) · [English]({{ site.baseurl }}/2026/11/26/waymo-freeway-ban.html)*

La ironía de la semana: Waymo conquistó las calles urbanas — y tropezó en las autopistas. El DMV de California **ha prohibido a los Waymo sin conductor todas las interestatales del estado**. El motivo es serio: el 6 de noviembre, un robotaxi... **intentó adelantar a dos patrullas de policía en plena maniobra** en la I-280. Análisis de por qué la IA que es amable en la ciudad pierde el pie a alta velocidad.

<!--more-->

## Qué pasó

**6 de noviembre, Interestatal 280.** La patrulla de California ejecutaba un *traffic break* — la maniobra en la que una patrulla avanza en zigzag por los carriles para frenar suavemente el tráfico antes de un peligro. Cualquier conductor con experiencia lo sabe: a la patrulla en ese momento no se la toca.

El vídeo muestra al **Waymo sin conductor intentando adelantar a ambos cruceros**. Para un humano, es una infracción que cuesta el carnet. Para un robotaxi, «una anomalía estadística del modelo de comportamiento».

El resultado de la cadena: entre octubre y noviembre de 2026, Waymo reportó **11 incidentes en zonas de obras** — y la semana pasada el DMV **vetó a sus coches todas las interestatales de California**.

## Ciudad — bien. Autopista — no. ¿Por qué?

La paradoja es real, y va de cómo se construyen los conductores de IA:

1. **La ciudad es lenta y rica en señales.** Peatones, giros, ciclistas — los robots de Waymo lo filtraron todo con millones de millas de entrenamiento en San Francisco y Phoenix. Velocidad media baja; el coste de un error, un rasguño.
2. **La autopista son situaciones excepcionales poco frecuentes.** Un traffic break, un cierre repentino, un desvío raro — eventos que un humano entiende por contexto («la policía zigzaguea = pararse»). Para el modelo son la **cola de la distribución**: pocos ejemplos de entrenamiento, y el coste de un error a 100+ km/h es catastrófico.
3. **Reglas vs. sentido.** Formalmente, adelantar por la derecha «no está prohibido» si el carril está libre. El humano lee la *intención* de la policía; el algoritmo lee la *señalización*. En la ciudad esa diferencia casi no aflora — en la autopista lo decide todo.

## Qué significa para la industria del robotaxi

- **Los reguladores aprenden a golpear con puntería.** No «prohibir todos los coches sin conductor», sino «este entorno — todavía pronto». Un enfoque maduro: permisos por paisaje, como la aviación por clases de espacio aéreo.
- **Los datos valen más que las ambiciones.** Cada incidente así es un dataset gratis (para nosotros) para todos los demás. Esperad que Cruise, Zoox y Tesla estudien exactamente cómo Waymo «no entendió» a la policía.
- **La asimetría de PR.** Un humano adelantando a la policía es noticia local. Un robot, nacional. Es el impuesto de la automatización: el derecho a no tener volante se paga con una transparencia centuplicada de cada metedura de pata.

Mi pronóstico: la prohibición es temporal. Waymo reabrirá las autopistas en meses, no años — como reabrió las noches lluviosas y la niebla tras las primeras vetas. Pero el evento en sí es un marcador: **la IA ya aprendió a conducir «como todos»; conducir «mejor que todos» se aprende ante nuestros ojos — y ante los de la policía y el DMV.**

*Fuente: [The Verge](https://www.theverge.com/transportation/1042151/waymo-highway-ban-ai-safety-recalls) — con el vídeo del incidente en la I-280 incluido.*
