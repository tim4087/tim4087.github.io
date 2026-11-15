---
layout: post
title: "Weekend Digest: Meta Fined €805M for Secret Surveillance, Huang Accused of Inflating the Bubble — and Preparing a Comeback"
date: 2026-11-16 00:30:00 +0300
lang: en
---

*Other languages: [Русский]({{ site.baseurl }}/2026/11/16/meta-fine-huang-comeback-ru.html) · [Español]({{ site.baseurl }}/2026/11/16/meta-fine-huang-comeback-es.html)*

Two weekend stories mirror each other: one company got punished in cash for quietly peering into people's phones; another's founder quietly spun up the market — and is now being accused of exactly that. Italy fined Meta **€805 million** for hidden surveillance, while Jensen Huang is being blamed for the AI bubble — against the backdrop of a campaign for his return to NVIDIA. Both, dissected.

<!--more-->

## Part 1. Meta: €805M for "suggestions from your gallery"

Italy's privacy regulator (the Garante) fined Meta **805 million euros** — ANSA reports. The reason is surprisingly mundane:

- Facebook for Android had a **"Get suggestions from your gallery"** feature — it offered your photos and videos as post ideas.
- Meta **never asked for separate consent** to access the gallery — it leaned on the general app consent.
- Worse: the device's photo/video access setting was **enabled by default** — you had to switch it off manually. Yes, the same dark pattern we blasted Google for in a [previous post]({{ site.baseurl }}/2026/11/13/google-monopoly-and-your-data.html).

Now Meta must: request **separate consent** from Italian users for the feature, **explain** how it works, and keep it **off by default**.

Context: this is the second hit in a month — in October a New Mexico court ordered Meta to pay **$25 billion** in a user-data privacy case.

**My take.** Let's do the math: Meta makes roughly $20 million an hour. An €805M fine is about **two days of the company's work**. For comparison: the Garante's earlier fines on Google and Apple were smaller — and those companies changed settings for all of Europe. The Italians (and the EU broadly) executed a textbook play: not "ban the feature" but **break the dark pattern itself** — opt-in must mean "no" by default, not "yes". Should we expect other EU regulators to demand the same terms after Italy? Almost certainly — that's what has happened after Garante rulings before.

## Part 2. Huang: "the most dangerous Jacket on the planet"

While Meta pays for the past, Huang is being buried for an entire construction. The accusation scheme (dubbed the "money round-trip"):

1. **NVIDIA poured money into AI startups** that were already its customers.
2. The startups used that money to **buy chips from NVIDIA itself**.
3. A perfect circle: revenue grows → **stocks fly to space**.
4. Growing turnover attracted investors → they piled into data centers → more chip purchases.
5. Result: **an unnaturally fast-growing AI market**, a brutal hardware shortage and bubble risk.

Economists know this tune: classic **vendor financing** — "the seller lends the buyer money to buy from the seller". That's how Lucent and Nortel burst in 2000: they financed telecom operators, operators bought equipment, revenue grew... until it didn't. Skeptics have spent a whole year calling AI infrastructure a bubble; now the ones who used to stay silent have joined the choir. Recall the figure from my [previous post]({{ site.baseurl }}/2026/11/13/nvidia-jensen-huang-resigns.html): NVIDIA lost **~$1.27 trillion in market cap before the resignation** — the market, it turns out, started doubting before the journalists did.

**An important caveat (my favorite part).** A money round-trip is not yet proof of a bubble. NVIDIA really does ship a product nearly every giant now depends on; demand is confirmed by the capex of Oracle, Nebius and SpaceX. A bubble is defined not by "expensive" but by **whether the built data centers ever pay off**. That becomes clear in 2–3 years, when electricity bills meet inference revenue. The accusation against Huang in spirit is closer to "the market grew faster than it should have" — an economic opinion, not a criminal case. But combined with the resignation it reads as a maximum: every old decision of the founder is now being re-examined.

## Part 3. The Return of the Jacket?

And now the twist: a **powerful support group** has formed around Huang, planning to lobby for his return — per media reports, all the way to the US government:

- an **open letter** for pardoning/returning him has gathered **156 thousand signatures**;
- among the signatories: **Tim Sweeney** (Epic Games) and **Elon Musk** (who, recall, was already offering Huang a spot at his companies on Nov 12, per insiders);
- Huang himself is **discussing a possible return with trusted people**.

Is it realistic? Recall the mechanics: the "immediate, from all posts" resignation was the board's response to the Wachtell, Lipton investigation (Joon H. Kim), which **is still running**. A return requires that: (a) the investigation finds no violations or only minor ones, (b) the board's composition changes, (c) major investors want back the man with a quarter of the cap in losses hanging on him. The petition campaign reads logically as **step one of that plan** — reputation management in its purest form. It has worked for others. But here's the nuance marketing loves to forget: it's been four days since the resignation. Even in 2026, comebacks don't happen faster than investigations.

## Takeaways

1. **Privacy punished in cash again** — and again with European precision: not "fine and forget" but a changed default for millions of users. Italy just made dark patterns harder across the whole EU.
2. **The "money round-trip" is a question of market architecture, not guilt.** If NVIDIA really handed money to customers for purchases from itself — that was visible in filings; it becomes a bubble only in hindsight.
3. **Huang didn't leave — he went into lobbying.** The 2000 bubble buried CEOs quietly; in 2026 a fallen founder has Twitter, Musk and 156 thousand signatures. A return is unlikely — but the story isn't over. Watch the November 17 earnings report: it will become either the tombstone or the first step of the comeback.

*Sources: [Lenta.ru / ANSA](https://lenta.ru/news/2026/11/15/meta-krupno-oshtrafovali-za-skrytuyu-slezhku/) (in Russian), Garante rulings; on Huang — aggregated media reports and the author's observations; see my [previous NVIDIA breakdown]({{ site.baseurl }}/2026/11/13/nvidia-jensen-huang-resigns.html) for the resignation details.*
