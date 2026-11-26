---
layout: post
title: "The Biggest Password Manager Got Hacked: What Was Stolen from 1Password — and What Wasn't"
date: 2026-11-26 18:40:00 +0300
lang: en
---

*Other languages: [Русский]({{ site.baseurl }}/2026/11/26/1password-breach-ru.html) · [Español]({{ site.baseurl }}/2026/11/26/1password-breach-es.html)*

On November 25, 1Password — one of the world's largest password managers — published a confession: **an attacker broke into their internal systems**. For a service whose product is "reliable secret storage", that's "a virus broke out in a hospital" level news. A breakdown from the primary source (the company's blog): what happened, what was actually stolen, why the vaults survived — and what Denuvo has to do with it.

<!--more-->

## What happened

**On November 19**, 1Password began investigating: an attacker gained access to an **employee's corporate GitHub account**. Then a classic escalation chain:

1. through the account — **access to source code** from private repositories;
2. **pushing malicious code into backend services**;
3. the malicious code **downloaded administrative customer data**;
4. as a bonus — access to the **CI/CD system** (build and deploy tooling holding infrastructure secrets).

## What was stolen (and what it means)

Per the company's list, for **a subset of users**:

- **names and email addresses**;
- account and user identifiers, **creation and last sign-in times**;
- public keys (public by design — no threat);
- SRP protocol parameters (useless for access on their own);
- **tokens from emailed links**: invitations, provisioning, account recovery;
- internal metadata (version and file identifiers and the like).

## What was NOT stolen — and why that's the main thing

- **vaults and their contents** — no;
- **the keys that encrypt the vaults** — no;
- master passwords and Secret Keys — no (1Password **doesn't store them** — zero-knowledge architecture);
- recovery keys, apps and extensions — unaffected.

This is where design beat the incident: even **an attacker inside the servers** can't read the vaults, because 1Password doesn't have them in readable form. That's exactly the architecture I champion in every [breakdown]({{ site.baseurl }}/2026/11/14/kim-treasure-lazarus.html): not "trust us" but "there's nothing to steal, because the data doesn't exist".

## But there's a trap: tokens + email = phishing

The most underrated item is the link tokens. The company honestly explains: a token **by itself** doesn't open an account — you also need an SSO sign-in or a code sent to email. But the combination of "stolen emails + knowing which users are mid-invitation/recovery" is a ready-made **target list for spear phishing**. 1Password reacted correctly: codes lengthened from 6 digits to **10 characters** (brute force now practically impossible) plus a direct warning about fake emails.

So the real threat to users isn't "the safe was cracked" — it's the **fake-bank call**: expect emails about 1Password that you never asked for.

## A familiar signature

Note the vector: **one developer's corporate account** → source code → malicious code in production. It's the same supply-chain weakness as in the Bybit story (a Safe{Wallet} employee infected at a "job interview") and Telegram (GitHub accounts compromised via phishing). The industry re-learned: **the security perimeter runs through every contractor's laptop and every repository token**.

By the way, about other people's laptops: per Lenta, the hacker behind it is **voices38** — the same one who on November 23 cracked **Denuvo** in Phantom Blade Zero by S-GAME Studio. The protection held about three weeks. Gaming Denuvo and a corporate GitHub are different universes narratively — but the signature is one: a patient pro against something "unbreakable".

## What you should do

1. **Nothing to update** — vaults are safe, services work.
2. **Careful with email about 1Password**: invitations, recovery, "urgent verification" — only if you initiated them. 1Password will never ask for your password or Secret Key by email.
3. Enter secrets **only in the official app** or a hand-typed address.
4. The week's (and month's) general lesson: a password manager must be zero-knowledge. If yours is "we store everything on a server and promise to guard it" — you don't have a password manager, you have someone else's safe holding your valuables.

*Sources: [1Password blog](https://1password.com/blog/update-on-nov-2026-security-incident) (primary source, Nov 25, 2026), [Lenta.ru](https://lenta.ru/news/2026/11/26/krupneyshiy-menedzher-paroley-podvergsya-vzlomu/) (in Russian).*
