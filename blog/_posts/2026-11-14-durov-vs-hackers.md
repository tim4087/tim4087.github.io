---
layout: post
title: "'Think Otherwise? Hack Me': Investigating Durov's Dare to Hackers"
date: 2026-11-14 21:00:00 +0300
lang: en
---

*Other languages: [Русский]({{ site.baseurl }}/2026/11/14/durov-vs-hackers-ru.html) · [Español]({{ site.baseurl }}/2026/11/14/durov-vs-hackers-es.html)*

On November 13, Pavel Durov did what CEOs of billion-user companies don't do: **publicly invited hackers to break into his personal account**. "Think otherwise? Go hack my account: t.me/monk 🍿". Behind that line lies a four-day story — a new feature, a calculator on a stranger's phone, and a fix that landed **before the vulnerability was shown to the public**. I assembled the timeline hour by hour — and found five oddities.

<!--more-->

## The four-day timeline

**November 9.** Telegram ships **HTML widgets** (Bot API 10.4): tiny apps inside a message — polls, price tickers, games. Capped at 32 KB, executed in the isolated QuickJS engine, no network access.

**November 10.** Durov announces the feature with a fateful line: *"Any Telegram message can now become an app."* That same day, at 13:16 UTC, a **memory-bug fix commit** appears in Telegram's public QuickJS fork — 21 minutes before Durov's post. Remember this.

**November 11, 11:00 UTC.** The company **V12** (builds AI agents for vulnerability discovery; founded by Jasraj Bedi, co-founder of the Zellic audit firm) posts a video: a user opens a bot chat → taps Start → the widget shows a "3, 2, 1, BOOM" countdown → **the system Calculator opens on the phone**. In security, that's the classic proof: attacker code running outside the sandbox. V12's caption twisted Durov's line: *"Any Telegram message can now become RCE."*

V12 published no technical details — only a SHA-256 hash (how researchers pin priority without revealing the finding).

**November 11, hours later.** Telegram rolls out a **server-side patch to all users** — no app update needed. The client fix arrives with Telegram for Android **13.2.2**.

**November 13.** Durov's post: *"Re alleged RCE in new TG Android/Windows widgets: The issue doesn't exist. No one could be hacked just by receiving a message. You had to start a 3rd party service first. Even that is fully patched server-side. Think otherwise? Go hack my account."*

## The technical bit, in human terms

The most-cited explanation (Gram News, from the QuickJS fork): a **use-after-return** — the engine parser accepted `await using` in a `for` head outside async functions. An `await` instruction landed in an ordinary function; on exit the interpreter took the generator path and skipped detaching closures from the function's variables. The closures kept pointing at a stack region that no longer existed. Classic: one invalid input → corrupted memory → attacker code runs.

The practical meaning: code with Telegram's privileges could, in theory, reach the data that **keeps an account logged in**. A nuance few mention: cloud-password 2FA protects **new** logins — not an already-authorised session.

## Five oddities (the investigative part)

1. **The commit predates the demo.** Fix ca3594d is dated November 10, 13:16 UTC — a day before V12's video and 21 minutes before Durov's announcement. So Telegram was patching something that "doesn't exist" before the public demonstration. The link to V12's video isn't proven (descriptions merely match), but the timeline raises a question: when exactly did Telegram learn about the problem?
2. **"No flaw" and "patched" in one post.** Durov writes the issue doesn't exist — and immediately that it's "fully patched server-side". Incompatible claims within three lines. Days earlier the company had officially acknowledged and fixed "an issue in Telegram for Android".
3. **Two bugs, one commit.** A separate independent GitHub repo published a description of a **different** parser bug that same day — pointing at the same commit ca3594d. Two descriptions cannot both fully describe one commit. Nobody has reconciled them.
4. **Desktop seemingly left unprotected.** Per a single, unconfirmed claim by Security Lab, Telegram Desktop 7.4.2 (November 11) was built **without the fix**. Whether 7.4.3 (November 12) contains it is unknown. An unverified repost claims a **second demo on Desktop 7.4.3**.
5. **Loose ends.** Five more QuickJS memory fixes from November 10 reportedly didn't make it into 13.2.2. No CVE assigned. Whether exploitation required zero taps (just opening the chat) is unresolved — V12's demo needed at least a Start tap.

## Market reaction: no panic, plenty of doubt

- **Bybit** officially asked users on November 13 to update Telegram on Android immediately: "a compromised device could also put other apps at risk" — and to avoid unknown bots.
- SlowMist founder **Cosine** had warned a day earlier that the message-apps lacked sandboxing and AI-assisted vulnerability discovery had leapt forward — advising users to **delay updating** (advice that only works on versions older than widgets, which can't run them at all).
- Same news cycle: Kaspersky Lab reported **WebRAT** trojan attacks via Telegram.

## Durov has dared before. And lost once

Not his first "hack us" challenge. In **December 2013** he offered $200,000 in Bitcoin for breaking Telegram's MTProto encryption. Two days later, a Habr researcher under the handle **x7mz** found a weakness in secret-chat nonce handling — and collected **$100,000**. A second contest, $300,000 (2014–2015), ended **with no winners**. The bug bounty has run since 2014: $100 to $100,000+ per report.

But the current dare differs in three absences: **no prize, no scope, no deadline**. It's not a contest — it's a public bet. CryptoBriefing put it best: Durov has effectively announced a **public stress test**. The account holds — a quiet point for Telegram. It doesn't — the company has a problem far louder than a disputed bug report.

## What actually protects you (my take)

The most important thing in this story isn't Durov's wording — it's the engineering in 13.2.2. Telegram didn't just patch the parser: they **moved widgets into a separate isolated process** `:widgets` — no Android permissions, no network, no access to files, accounts or keys, under a seccomp filter. ~96 files and 6,800 lines in a couple of days. If another QuickJS memory bug turns up, code execution lands in a process that holds **neither the account nor the chats**.

That's the right lesson for the whole industry (and familiar to anyone who builds browsers): patching a specific bug is tactics; isolating entire attack classes is strategy. The irony is that Telegram's engineers did it silently — while the public got the popcorn line.

The dare's own risk: it turns Durov's account into **the world's most attractive target**. Anything — phishing of his circle, SIM-swap, a 0day somewhere else — now carries an extra price: publicity. Smart marketing or a giant bullseye, time will tell.

## What you should do

1. Update **Telegram for Android to 13.2.2+** (the server fix reached everyone, but the client fix is only in the new version).
2. Update **Desktop and iOS** too — their status in this story was never clearly addressed; the latest version is the only guarantee.
3. Don't start **unknown bots** or open widget-heavy chats from unfamiliar senders.
4. Don't panic over **messages already received**: no in-the-wild attacks confirmed. The dispute is about preconditions, not a wave of hacks.
5. And the eternal: enable the **cloud password**, and don't tie your life to a single account.

*Sources: [Lenta.ru](https://lenta.ru/news/2026/11/13/durov-brosil-vyzov-hakeram/) (in Russian), [dev.to breakdown](https://dev.to/hacktheplanet/telegrams-widget-flaw-the-fix-and-durovs-dare-go-hack-my-account-3j7j), [Durov's X post](https://x.com/durov/status/2121274027285307903), Forklog (WebRAT), Gram News, CryptoBriefing.*
