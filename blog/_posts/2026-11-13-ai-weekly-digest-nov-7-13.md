---
layout: post
title: "AI Weekly Digest (Nov 7–13, 2026): Anthropic's IPO, llama.cpp 1.0, and a Deepfake Heist"
date: 2026-11-13 19:10:00 +0300
lang: en
---

*Other languages: [Русский]({{ site.baseurl }}/2026/11/13/ai-weekly-digest-nov-7-13-ru.html) · [Español]({{ site.baseurl }}/2026/11/13/ai-weekly-digest-nov-7-13-es.html)*

What a week: Jensen Huang left NVIDIA (that's a separate [post]({{ site.baseurl }}/2026/11/13/nvidia-jensen-huang-resigns.html)) — and around it, Anthropic's IPO, the llama.cpp 1.0 release, the first 145B-parameter laptop model, and an FBI operation against deepfake fraud. The short version.

<!--more-->

## 1. Anthropic goes public — the largest tech IPO in history

On November 19, **Anthropic** hits the exchange under the ticker **ANT**. Price range: **$70–78** per share, with 825 million shares offered. Valuation estimates range from **$916 billion to $1.4 trillion** depending on methodology.

Numbers from the prospectus (S-1 dated November 10): roughly **$81 billion in run-rate revenue** as of end of October, and more than **11,900 customers** paying $100K+ per year. Each of the company's seven founders stands to pocket around **$250 million**.

For context: if the valuation holds at the top of the range, Anthropic immediately enters the world's top-10 most valuable companies — just three years after Claude 3.

## 2. llama.cpp finally hits 1.0.0

The legendary local-inference engine **llama.cpp shipped stable v1.0.0** — with semantic versioning and support for **150+ model architectures**. The ggml project Georgi Gerganov once started as a side hack to run LLaMA on a MacBook has become the de facto standard for local AI. If you run models at home, you're almost certainly doing it through it — or its derivatives (Ollama, LM Studio).

## 3. Edge0-145B: 145 billion parameters — entirely on-device

Edge0 released the open-weight **Edge0-145B and Edge0-120B** — the first open-source 145B model running **fully on-device**, with no cloud. The secret: a latent-MoE design that activates only ~10 billion parameters per step.

The claimed benchmarks border on sci-fi for a local model: Terminal-Bench 2.1 — 86.52 (DeepSeek-V4-Flash gets 82.7), GPQA Diamond — 90.4, IFBench — 80.6 (Claude-Opus-4.6 gets 62.5). If independent tests confirm the numbers, "a big model in your pocket" stops being a metaphor.

## 4. Operation FaceStealer: deepfakes stole $400 million

The FBI disclosed **the North Korean FaceStealer campaign**: attackers recorded victims' webcams, then used AI deepfakes to impersonate acquaintances in fake Zoom and Teams calls, tricking targets into installing malware.

The tally: **$400M+ in stolen crypto over 18 months**, 677 targets across 58 countries, 900+ seized webcam recordings. Especially alarming: they went after **open-source maintainers** — the people the rest of the software world depends on. Hello, supply-chain security.

## 5. Courts and regulators close in

- Five nonprofits **sued OpenAI, Anthropic, Google, Meta and SpaceX** in California, demanding a freeze on frontier training runs.
- In the EU, the deadline is **December 2, 2026**: every system generating text, images, audio or video that was on the market before August 2 must label AI content in machine-readable form (AI Act, Article 50(2)). Audit your generators.

## 6. The price war continues

Gemini 4 Carbon went GA at **$2 per million input tokens** — versus $8 for Claude Fable 5.2. Meanwhile, Gemini 4 Argon's early-bird rate doubles after November 30, and 720p video generation got ~30% cheaper. Budgets calculated last quarter are already obsolete.

## What to watch next

NVIDIA's earnings land November 17 (the first without Huang), Anthropic starts trading on the 19th, Microsoft Ignite runs the 17th–20th. The week promises an encore.

*Sources: [AI Weekly](https://aiweekly.co/ai-news-today), [Skillenai](https://skillenai.com/data/news/top/2026-11-12), [AIToolsRecap](https://aitoolsrecap.com/Trending), [AIBriefs](https://aibriefs.news/ai-news-today), [Al Jazeera](https://www.aljazeera.com/news/2026/11/12/us-nonprofits-sue-tech-giants-to-halt-ai-development).*
