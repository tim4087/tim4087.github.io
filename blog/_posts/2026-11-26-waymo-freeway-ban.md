---
layout: post
title: "Robotaxi vs. the Patrol: Why Waymo Got Kicked Off California's Freeways"
date: 2026-11-26 19:10:00 +0300
lang: en
---

*Other languages: [Русский]({{ site.baseurl }}/2026/11/26/waymo-freeway-ban-ru.html) · [Español]({{ site.baseurl }}/2026/11/26/waymo-freeway-ban-es.html)*

The week's irony: Waymo conquered city streets — and tripped over freeways. California's DMV has **banned driverless Waymo vehicles from all the state's interstates**. The reason is serious: on November 6, a robotaxi... **tried to overtake two police cruisers mid-operation** on I-280. A breakdown of why the AI that's polite downtown loses its footing at speed.

<!--more-->

## What happened

**November 6, Interstate 280.** California Highway Patrol was performing a *traffic break* — the maneuver where a cruiser slowly zigzags across lanes to smoothly slow traffic ahead of a hazard. Any experienced driver knows: you don't touch the patrol car during that.

Video shows the **driverless Waymo attempting to overtake both cruisers**. For a human, that's a violation that suspends your license. For a robotaxi — a "statistical anomaly in the behavior model".

The chain's result: between October and November 2026, Waymo reported **11 incidents in construction zones** — and last week the DMV **banned its cars from every California interstate**.

## City — fine. Freeway — not. Why?

The paradox is real, and it's about how AI drivers are built:

1. **The city is slow and signal-rich.** Pedestrians, turns, cyclists — Waymo's robots filtered all of it through millions of training miles in San Francisco and Phoenix. Average speed is low; the cost of an error is a scratch.
2. **The freeway is rare exceptional situations.** A traffic break, a sudden closure, a weird detour — events a human understands from context ("police weaving = stop"). For a model, that's the **tail of the distribution**: few training examples, while the cost of an error at 100+ km/h is catastrophic.
3. **Rules vs. meaning.** Formally, passing on the right "isn't forbidden" if the lane is clear. A human reads the police's *intent*; the algorithm reads the *lane markings*. In the city that difference barely surfaces — on the freeway it decides everything.

## What it means for the robotaxi industry

- **Regulators are learning to strike precisely.** Not "ban all driverless cars" but "this environment — too early". A mature approach: permit by landscape, like aviation permits by airspace class.
- **Data is worth more than ambition.** Every such incident is a free (for us) dataset for everyone else. Expect Cruise, Zoox and Tesla to study exactly how Waymo "misunderstood" the police.
- **The PR asymmetry.** A human driver overtaking the police is local news. A robot is national. That's the automation tax: the right to have no steering wheel is paid for with a hundredfold transparency of every mistake.

My forecast: the ban is temporary. Waymo will reopen freeways in months, not years — as it reopened rainy nights and fog after the first bans. But the event itself is a marker: **AI has already learned to drive "like everyone" — driving "better than everyone" is being learned before our eyes, and the police's, and the DMV's.**

*Source: [The Verge](https://www.theverge.com/transportation/1042151/waymo-highway-ban-ai-safety-recalls) — including the I-280 incident video.*
