---
layout: post
title: "Kim Jong Un's Treasure: How North Korean Hackers Stole $6.36 Billion from Binance"
date: 2026-11-14 20:15:00 +0300
lang: en
---

*Other languages: [Русский]({{ site.baseurl }}/2026/11/14/kim-treasure-lazarus-ru.html) · [Español]({{ site.baseurl }}/2026/11/14/kim-treasure-lazarus-es.html)*

On the evening of October 29, 2026, billions in cryptocurrency began leaving the wallets of Binance — the world's largest exchange. Most of the **$6.36 billion** was moved in just **20 minutes**. It's the biggest crypto heist in history, and per TRM Labs and Chainalysis, it was carried out by the elite **TraderTraitor** unit — part of the legendary **Lazarus Group** from North Korea. This is the story of how the world's most closed country raised the world's best cybercriminals.

<!--more-->

## The heist of the century: twenty minutes

The TRM Labs timeline reads like a movie script:

- **Preparation began at least 36 hours** before the strike — accounts and infrastructure were ready in advance.
- Binance wallets in **XRP Ledger, Ethereum, Bitcoin, Tron, Solana and four more networks** simultaneously sent their balances to addresses controlled by a single attacker.
- A second wave hit wallets in **Avalanche and Polygon**.
- Most of the funds were gone **in 20 minutes** — the exchange physically couldn't react.

The clue pointing to North Korea: the signature. Long preparation, lightning strike, laundering through the **Tornado Cash** mixer — an exact repeat of the Bybit hack of February 2025. Chainalysis CEO Jonathan Levin publicly confirmed North Korean hackers were behind it.

## From mockery to superstardom: twenty years of evolution

A decade and a half ago, "North Korean hackers" made specialists laugh. The first report came in **2004**: South Korea's defense ministry claimed the North had trained over **500 cyber warriors** to break into Southern, Japanese and American networks. It sounded like propaganda.

What changed is the results. The heist ladder grows like a good TV series:

| Year | Target | Stolen |
|---|---|---|
| 2024 | WazirX (India) | $235M |
| 2025 | Bybit | $1.4B |
| 2025 | all hackers worldwide | $3.4B (~$2B — North Korea's share) |
| 2026 | **Binance** | **$6.36B** |

From a quarter billion to six and a half in two years. If this is Seoul's propaganda, it's very expensive propaganda.

## How they do it: the "infectious interview"

The Bybit post-mortem revealed the mechanism — far more elegant than brute force.

On the evening of February 21, 2025, Bybit chief **Ben Zhou** routinely approved several operations before bed. Just as he was drifting off — a late call: "Ben, we have a problem... we may have been hacked... All the Ethereum is gone." Thus began the biggest robbery in history at that point.

Technically:

1. The exchange's funds sat in **multisig wallets** — withdrawals required several executives' approval.
2. The hackers **compromised a software vendor** — Safe{Wallet}, whose security interface Bybit used.
3. A Safe{Wallet} employee's device was infected... **during a job interview**. He was interviewing for a new job — and infected his current employer.
4. Before approving operations, Bybit managers saw a **swapped interface**: familiar page, correct recipient address — but the "confirm" button handed the hackers control over the wallets.

The group's arsenal (per F6's Threat Intelligence) has two main scenarios:

- **Fake recruiters.** Targets: blockchain, fintech and crypto employees. A vacancy chat → "take a skills test on this day-old website and record a video about yourself" → malware or a remote-access tool lands on the device. Security folks call it the "infectious interview". Global Ledger's Carlos Yanez: "It happens to me constantly. The quality of North Koreans' masquerade has improved tremendously in a year. It's terrifying how far they've come."
- **Insiders.** Thousands of skilled North Korean IT specialists get hired at companies worldwide, pass interviews honestly, take on hard tasks and overtime — their real mission: **get inside the security perimeter**. Per the US State Department, this income finances **WMD and ballistic missile programs**.

And it's not just Lazarus: **Kimsuky** specializes in phishing (recent campaigns sent QR codes to malicious pages; loves Android), while **APT37** runs pure espionage against Windows users.

## My addition: deepfakes are already here

Let me add what surfaced **after** the Binance attack — on November 12 the FBI disclosed **Operation FaceStealer**: North Korean operators recorded victims' webcams, then used **AI deepfakes to impersonate acquaintances in fake Zoom and Teams calls**, tricking targets into installing malware. The tally: $400M+ over 18 months, 677 targets across 58 countries — and, importantly, among the targets were **open-source maintainers**. They attack not just wallets but the software supply chain we all depend on.

The vector is obvious: phishing used to rely on text and a gullible victim; now it relies on a video forgery of a trusted person. The "infectious interview" is upgrading into the "infectious video call".

## The inconvenient question: whom to believe

For fairness — this story has an uncomfortable side, which Lenta.ru also highlights. Almost everything we know about North Korean hackers comes from two sources: **South Korean intelligence** (a country in an information war with the North) and **defectors**.

Konstantin Asmolov (Center for Korean Studies, RAS) flatly calls such narrators unreliable: they're incentivized to tell maximally shocking stories for benefits in their new home. A telling example: the star witness of the UN human rights report on the DPRK and author of the bestseller "Escape from Camp 14", Shin Dong-hyuk, **admitted he invented much of his story**.

Meanwhile, the key source on the North's "cyber army" for years was one man — defector Kim Heung-kwan, who calls himself a computer science lecturer from Pyongyang. It's his line that named this post: *"North Korean hackers are a true treasure for Kim Jong Un... who else runs as many successful hacking operations as North Korea?"* Beautiful? Very. Verifiable? Barely.

But here's what matters: skepticism about sources doesn't cancel **blockchain data**. The transactions themselves, the attack signatures and independent analysts' reports (TRM, Chainalysis) are not defectors' tales. So the picture is probably right in the main thing: a group — whether it started in 1998 on young Kim Jong Un's initiative (as ex-ambassador Thae Yong-ho claims) or otherwise — became real, and a real threat.

## What follows from this (my attempt at conclusions)

1. **Crypto is the perfect target for a sanctioned state.** No banking intermediaries, borders are blurry, laundering is automated. $6.36B is more than many countries earn from exports in a year. The DPRK effectively found its "digital natural resources".
2. **The weakest link isn't cryptography — it's people and the supply chain.** No multisig algorithm saves you if the approval interface is swapped and a contractor's laptop is infected at an interview. Security in 2026 is the security of every vendor.
3. **AI is lowering the barrier to trust.** A deepfake call from a "colleague" costs less than a week of chatting. The rule of the decade: critical confirmations — only via a second, independent channel.
4. **Attribution is also a weapon.** Until we can look inside Pyongyang, "North Korean hackers" will remain both a fact and a convenient label. Every major breach will now be easiest to pin on Lazarus — and it won't always be true.

The practical minimum for an ordinary person: seed phrases — not in notes or screenshots; serious sums — on a hardware wallet; an "interview" with an unknown site — on a separate device; and transaction confirmation — always with the address checked **on the device itself**, not just in a web UI. Ben Zhou can confirm.

*Sources: [Lenta.ru — "Kim Jong Un's Treasure"](https://lenta.ru/articles/2026/10/30/lazarus/) (in Russian), TRM Labs and Chainalysis reports, FBI statement on Bybit, F6 Threat Intelligence, FBI disclosure of Operation FaceStealer (November 2026).*
