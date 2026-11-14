---
layout: post
title: "Digesto semanal de IA (7–13 de noviembre de 2026): la OPV de Anthropic, llama.cpp 1.0 y el atraco deepfake"
date: 2026-11-13 19:10:00 +0300
lang: es
---

*Otros idiomas: [Русский]({{ site.baseurl }}/2026/11/13/ai-weekly-digest-nov-7-13-ru.html) · [English]({{ site.baseurl }}/2026/11/13/ai-weekly-digest-nov-7-13.html)*

Qué semana: Jensen Huang dejó NVIDIA (eso va en [otra entrada]({{ site.baseurl }}/2026/11/13/nvidia-jensen-huang-resigns-es.html)) — y alrededor, la OPV de Anthropic, el lanzamiento de llama.cpp 1.0, el primer modelo de 145 mil millones de parámetros para portátiles y una operación del FBI contra el fraude deepfake. Lo esencial, en corto.

<!--more-->

## 1. Anthropic sale a bolsa — la mayor OPV tecnológica de la historia

El 19 de noviembre **Anthropic** debuta en bolsa con el ticker **ANT**. Rango de precio: **70–78 dólares** por acción, con 825 millones de acciones en oferta. Las valoraciones van desde **916.000 millones hasta 1,4 billones de dólares**, según la metodología.

Cifras del prospecto (S-1 del 10 de noviembre): unos **81.000 millones de dólares de ingresos anualizados** a finales de octubre y más de **11.900 clientes** que pagan más de 100.000 dólares al año. Cada uno de los siete fundadores embolsará unos **250 millones**.

Para contexto: si la valoración se confirma en la parte alta, Anthropic entra directo al top-10 de las empresas más valiosas del mundo — apenas tres años después de Claude 3.

## 2. llama.cpp por fin llega a 1.0.0

El legendario motor de inferencia local **llama.cpp publicó la versión estable 1.0.0** — con versionado semántico y soporte de **más de 150 arquitecturas de modelos**. El proyecto ggml que Georgi Gerganov empezó como un experimento para ejecutar LLaMA en un MacBook se ha convertido en el estándar de facto de la IA local. Si ejecutas modelos en casa, casi seguro que es a través de él o de sus derivados (Ollama, LM Studio).

## 3. Edge0-145B: 145 mil millones de parámetros — todo en el dispositivo

Edge0 lanzó los modelos abiertos **Edge0-145B y Edge0-120B** — el primer modelo abierto de 145B que funciona **íntegramente en el dispositivo**, sin nube. El secreto: un diseño latent-MoE que activa solo ~10 mil millones de parámetros por paso.

Los benchmarks prometidos rozan la ciencia ficción para un modelo local: Terminal-Bench 2.1 — 86,52 (DeepSeek-V4-Flash: 82,7), GPQA Diamond — 90,4, IFBench — 80,6 (Claude-Opus-4.6: 62,5). Si los tests independientes confirman las cifras, «un modelo grande en el bolsillo» deja de ser una metáfora.

## 4. Operación FaceStealer: los deepfakes robaron 400 millones de dólares

El FBI destapó la **campaña norcoreana FaceStealer**: los atacantes grababan las webcams de las víctimas y luego usaban deepfakes de IA para hacerse pasar por conocidos en llamadas falsas de Zoom y Teams, empujando a instalar malware.

El balance: **más de 400 millones de dólares en cripto robada en 18 meses**, 677 objetivos en 58 países y más de 900 grabaciones de webcam incautadas. Lo más inquietante: iban también tras **maintainers de código abierto** — la gente de la que depende el software de todos. Hola, seguridad de la cadena de suministro.

## 5. Los tribunales y los reguladores estrechan el cerco

- Cinco organizaciones sin ánimo de lucro **demandaron a OpenAI, Anthropic, Google, Meta y SpaceX** en California para congelar el entrenamiento de modelos frontier.
- En la UE, la fecha límite es el **2 de diciembre de 2026**: todo sistema que genere texto, imágenes, audio o vídeo y estuviera en el mercado antes del 2 de agosto debe etiquetar el contenido de IA en formato legible por máquinas (AI Act, artículo 50.2). Revisa tus generadores.

## 6. La guerra de precios continúa

Gemini 4 Carbon salió en disponibilidad general a **2 dólares por millón de tokens de entrada** — frente a los 8 de Claude Fable 5.2. Mientras tanto, la tarifa piloto de Gemini 4 Argon se duplicará después del 30 de noviembre, y la generación de vídeo 720p se abarató un 30%. Los presupuestos del trimestre pasado ya están obsoletos.

## Qué vigilar

Los resultados de NVIDIA llegan el 17 de noviembre (los primeros sin Huang), Anthropic empieza a cotizar el día 19, y Microsoft Ignite va del 17 al 20. La semana promete bis.

*Fuentes: [AI Weekly](https://aiweekly.co/ai-news-today), [Skillenai](https://skillenai.com/data/news/top/2026-11-12), [AIToolsRecap](https://aitoolsrecap.com/Trending), [AIBriefs](https://aibriefs.news/ai-news-today), [Al Jazeera](https://www.aljazeera.com/news/2026/11/12/us-nonprofits-sue-tech-giants-to-halt-ai-development).*
