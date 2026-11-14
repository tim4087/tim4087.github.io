---
layout: post
title: "Gemini 4 Hydrogen — la nueva modelo de Google: qué puede hacer y por qué importa"
date: 2026-11-13 20:00:00 +0300
lang: es
---

*Otros idiomas: [Русский]({{ site.baseurl }}/2026/11/13/gemini-4-hydrogen-ru.html) · [English]({{ site.baseurl }}/2026/11/13/gemini-4-hydrogen.html)*

El 12 de noviembre de 2026, Google presentó **Gemini 4 Hydrogen**, la tercera modelo de la familia Gemini 4 en un solo mes. A diferencia de las insignia Argon y Carbon, Hydrogen estuvo disponible desde el primer día para todo el mundo, incluidos los usuarios gratuitos de la app Gemini. Y desde ese mismo día también es la modelo predeterminada en AI Mode de la Búsqueda de Google.

<!--more-->

## La familia Gemini 4: quién es quién

Entre octubre y noviembre de 2026 Google lanzó una línea entera. Así se reparten los papeles:

| Modelo | Disponible desde | Papel |
|---|---|---|
| Gemini 4 Argon | 13 oct | Insignia frontier para razonamiento profundo de largo horizonte |
| Gemini 4 Carbon | 28 oct / 10 nov | Rendimiento frontier en flujos agénticos largos: ingeniería, ciencia, ciberseguridad |
| Gemini 4 Hydrogen | 12 nov | Velocidad y eficiencia: programación y agentes para el día a día |

La idea de la línea es transparente: Argon y Carbon son la «artillería pesada» para los problemas más difíciles, mientras que Hydrogen es el caballo de batalla cotidiano. Y según Google, en el índice independiente Artificial Analysis Intelligence Index, Hydrogen en su nivel alto de razonamiento obtuvo **51 puntos frente a los 50 de Argon**: la modelo «económica» está a la altura de la insignia, y con el nuevo nivel de razonamiento **xhigh** (estrenado junto a Hydrogen) alcanza **54**.

Un detalle notable: antes de su lanzamiento, Argon pasó casi dos semanas de pruebas en el programa cerrado Fairwind (ciberseguridad), mientras que Hydrogen se saltó esa fase por completo — Google claramente acelera su ciclo de lanzamientos.

## Benchmarks

Cifras de la model card de Hydrogen (noviembre de 2026), comparadas con la competencia:

| Benchmark | Gemini 4 Hydrogen | Claude Sonnet 5.5 | GPT-6.1 Terra |
|---|---|---|---|
| SWE-sweep (código agéntico) | **13.5%** | 3.1% | 5.8% |
| Terminal-Bench 4.1 (ajustado) | 57.0% | **63.9%** | — |
| Agents' Last Exam v1.1 | **71.6%** | 60.4% | 69.8% |
| AutomationBench-AA | **76.1%** | 71.8% | 60.2% |
| Vending-Bench 2 (saldo del agente) | **$14,549** | $11,165 | $9,107 |
| OSWorld-2.1 (uso del ordenador) | 77.6% | **83.9%** | 74.2% |

El cuadro es honesto e interesante: Hydrogen **aplasta** a la competencia en código agéntico y flujos autónomos, pero aún pierde ante Claude Sonnet 5.5 en trabajo con terminal y control del escritorio. Es una modelo para quien construye agentes, no para quien espera «un clic y el ordenador lo hace todo».

Para comparar: Carbon, la «hermana mayor» de largo horizonte, logra 59 en el AA Index v5.0 (GPT-6 Astra — 57, Claude Opus 5.5 — 58) y muestra un 0% de éxito en ataques de prompt-injection en el benchmark Gray Swan IPI.

## Hydrogen llega a la Búsqueda

Junto al lanzamiento de la modelo, Google hizo algo inédito: **Hydrogen se convirtió en la modelo predeterminada en AI Mode** para todos los usuarios, y ahora también responde las preguntas más difíciles de los AI Overviews. El vicepresidente de producto de Búsqueda, Robby Stein, lo llamó «la mayor actualización de modelos en la Búsqueda hasta la fecha».

Qué cambió para el usuario:

- respuestas más matizadas en **todos los idiomas** que admite AI Mode (no solo en inglés);
- más enlaces a las fuentes en las respuestas — una reacción clara a las quejas de los editores;
- respuestas con mapas, tablas comparativas y bloques estructurados en lugar de un muro de texto.

Para los webmasters es un evento de doble filo: los rastreadores de citas de IA ahora tienen que contabilizar un cambio de modelo en pleno core update, y a los dueños de sitios solo les queda vigilar con qué frecuencia los cita Hydrogen.

## Dónde probarla

- **App de Gemini** — incluido el plan gratuito, desde el 12 de noviembre;
- **Google AI Studio y la API** — para desarrolladores: agentes, código, depuración;
- **AI Mode en la Búsqueda** — ya es el valor predeterminado para todos.

El límite de conocimiento de la modelo es marzo de 2026.

## Por qué importa

Tres conclusiones que saco de este lanzamiento:

1. **La brecha entre «insignia» y «masiva» se desploma.** Hace un año las modelos baratas perdían claramente contra las top; hoy Hydrogen iguala a Argon en un índice independiente por menos dinero. La guerra de precios continúa: la API se abarata a ojos vista.
2. **Google apuesta por los agentes.** Un SWE-sweep de 13.5% frente al 3.1% del competidor más cercano no es «algo mejor»: es otro orden de magnitud. La carrera pasó de «quién responde más listo» a «quién trabaja de forma autónoma más tiempo y con más fiabilidad».
3. **La Búsqueda se vuelve AI-first.** Una modelo predeterminada en AI Mode es la vía más rápida para llevar una nueva arquitectura a miles de millones de personas. El debate sobre si «la web muere por las respuestas de IA» ya no es teórico.

Una advertencia: casi todas las cifras de arriba las reporta el propio Google (vendor-reported). Los benchmarks independientes seguramente llegarán en un par de semanas — será interesante observarlos.

*Fuentes: [blog de Google](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/), [model card de DeepMind](https://deepmind.google/models/model-cards/gemini-4-hydrogen/), [The Verge](https://www.theverge.com/ai-artificial-intelligence/1032505/google-search-ai-mode-gemini-4-hydrogen), [Search Engine Journal](https://www.searchenginejournal.com/google-gemini-4-hydrogen-default-ai-mode/597096/), [SiliconANGLE](https://siliconangle.com/2026/11/12/google-releases-gemini-4-hydrogen-a-lower-cost-model-said-to-outscore-argon/).*
