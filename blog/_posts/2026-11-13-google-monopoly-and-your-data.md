---
layout: post
title: "Google Under Crossfire: Surveillance, Monopoly, and Your Data"
date: 2026-11-13 20:00:00 +0300
lang: en
---

*Other languages: [Русский]({{ site.baseurl }}/2026/11/13/google-monopoly-and-your-data-ru.html) · [Español]({{ site.baseurl }}/2026/11/13/google-monopoly-and-your-data-es.html)*

It's been a rough autumn for Google. On one front, the courts: the company has been **found a monopolist twice**, and is being forced to share data with competitors. On the other, its users: on October 16, Google quietly rewrote its privacy policy, and now **your Gmail, Photos and Drive can influence the ads** you see. Here's what's happening and what to do about it.

<!--more-->

## Part 1. The monopoly, proven in court. Twice.

**The search case (2020→2026).** In August 2024, Judge Amit Mehta ruled that Google **illegally maintained its search monopoly**. How? The court found the company paid **over $26 billion a year** to be the exclusive default search engine across browsers and devices — from Safari to Android phones.

The remedies (September 2025) were softer than the DOJ wanted: Chrome and Android were **not** taken away, but:
- exclusive distribution contracts for Search, Chrome, Assistant and the Gemini app are banned;
- Google must **share search data with "qualified competitors"** — for the first time, the scale of a machine that collected everyone's clicks for 20 years is going outward;
- a technical committee now oversees compliance.

**The ad-tech case.** In April 2025, Judge Leonie Brinkema found Google had unlawfully monopolized the open-web publisher ad server and ad exchange markets. On September 2, 2026, she issued remedies: she **refused** to force a sale of the AdX exchange, but ordered Prebid integrations, required AdX to submit bids to rival servers, let publishers **export their own data**, and demanded disclosure of auction mechanics. Six years of monitor oversight.

Google is appealing both rulings, and it's dragging: Judge Mehta said in November he is "increasingly concerned" about implementation delays. Telling detail: Alphabet has already booked a **$1 billion charge** for fines.

## Part 2. Surveillance 2.0: Personal Intelligence

Now for what this looks like from inside your account.

In January 2026, Google launched **Personal Intelligence**: AI Pro/Ultra subscribers can connect **Gmail and Google Photos to AI Mode** in Search — and get answers informed by their personal data ("what jacket should I pack?" — with a nod to your booking emails). It sounds convenient. The scale is impressive: **AI Mode has over 1 billion monthly users**; AI Overviews reach 2.5 billion.

The trouble started October 16, 2026, when the privacy policy was updated. Google's FAQ used to say flatly that Drive, Gmail and Photos content is **"never used for ads purposes."** Now that phrase has an exception: if you connected those services to Search or Gemini — "a subset of that data can also be used to show ads."

How it works, per Google's official explanations:
- ads are built not on "raw" email content but on **summaries and inferences** from connected apps;
- advertisers never see your data — they just get a "signal";
- sensitive categories (race, religion, sexual orientation, health) are excluded.

But there are three catches, as SEJ and Android Authority report:
1. **Turning off ad personalization is not enough** — the data keeps feeding AI features. The only full opt-out is disconnecting the apps.
2. **Disconnecting doesn't erase what's already saved**: information stored in your Search history stays.
3. A subset of AI Mode data is **reviewed by human moderators** — actual people.

Add July's story (TechCrunch): a quiet June settings update allowed Google **by default** to use images, files and audio you upload to Search for AI training. A separate "Search data" setting is on by default.

And the cherry on top: since September 28, AI Mode can **"watch the web"** for you — tracking price drops, restocks, nearby events and sending alerts. Useful? Absolutely. But it's Google officially monitoring the internet against your personal queries, continuously.

## Part 3. "Everyone is replacing it" — in both directions

The phrase "Google is being replaced" is true in two directions at once.

**Google is replacing search and the web itself.** Gemini 4 Hydrogen is now the default model in AI Mode; per a November 3 announcement, K-12 schools **cannot use Google Search without the built-in AI** — "take Gemini or leave." Chegg and publishers already sued over AI answers killing their traffic (unsuccessfully so far). The classic web of ten blue links is turning into a conversation with AI — irreversibly.

**Regulators are forcing Google's doors open.** The remedies in both cases amount to the first-ever forced handover of a monopolist's assets: search data goes to "qualified competitors" (DuckDuckGo, Perplexity and AI startups are already lining up), ad data goes to publishers. In its cross-appeal, the DOJ wants more: extend the restrictions to Google's GenAI products, so the "anticompetitive playbook" doesn't repeat with Gemini. Google resists: "search remedies can't apply to companies without a search engine."

The D.C. Circuit will decide — no argument date set. Nothing will change in 2026.

## What you can do (practical)

If you want to rein in Google's appetite, a checklist:

1. **Check connected apps**: Google Account → Search personalization → Connected Content Apps → disconnect Gmail/Photos if you don't want to feed AI Mode.
2. **My Ad Center** — turn off ad personalization (remember: this does NOT disable AI features, only ads).
3. **History settings**: set auto-delete (3/18/36 months) for Web & App Activity and the new "Search data" setting — it's on by default.
4. **Separately**: watch what media you upload to Search if you don't want it training models.
5. Understand the trade-off: Personal Intelligence is genuinely convenient. The question isn't "good or evil" but informed consent — now you know the price.

## Takeaways

1. **The monopoly was defeated legally, not structurally.** Chrome and AdX stayed with Google; instead of a breakup — six years of oversight and data sharing. The precedent matters more than the immediate effect.
2. **Privacy became a subscription to convenience.** Google is the first giant to legalize using your mail and photos content for ads — "with your consent." Expect Apple and Microsoft to follow with similar schemes.
3. **Search as we knew it is over.** 2.5 billion people get AI answers instead of links, schools must accept Gemini, publishers sue. The question is no longer "will AI replace search" but "who will own AI search." The court battle over data is exactly the battle over the answer.

## A note from the author: why I'm building StartPOZI

Full disclosure: [StartPOZI](https://startpozi.com/) is my own project, and I don't pretend to be neutral about it. But the news in this post — a monopoly on clicks, your inbox as an ad signal, "take Gemini or leave" — is exactly why it exists at all.

StartPOZI is a private meta-search engine: free, independent, and funded by donations rather than ads. Three principles on its [About](https://startpozi.com/about) page: **we record nothing, we don't track you, just open it and search**.

What's there as of November 2026:

- **[Trust Center](https://startpozi.com/trust)** — an open threat model instead of promises: what we protect, what we don't, what we record and what we never do — and how to verify our claims yourself. Checkable facts instead of marketing.
- **[StartPOZI Browser](https://startpozi.com/apps)** — our own browser for Windows, macOS and Linux. Three pillars: Security, Privacy, and **Sovereignty** — the user's sovereignty over their own data.
- **A lite version** (lite.startpozi.com) — works entirely without JavaScript.
- Interface in 6 languages including Russian and Spanish; themes, safe search, and it never sends referrers.

A small project won't beat Google in court or take away its $26 billion in contracts. But every time regulators open the data doors to "qualified competitors" and users think about the price of Personal Intelligence — alternatives stop being exotic. The monopoly's fate is being decided in an appeals court. Alternatives are being built right now — in the open.

*Sources: [Thank You Robot](https://www.thankyourobot.com/2026/11/googles-search-antitrust-case-what.html), [Goodwin](https://www.goodwinlaw.com/en/insights/publications/2026/10/insights-technology-antc-antitrust-competition-technology-3q-2026), [Courthouse News](https://www.courthousenews.com/monopolist-google-gets-behavioral-guardrails-and-a-monitoring-plan), [DOJ brief](https://www.justice.gov/atr/media/1454586/dl), [Techwire](https://www.techwire.co.il/en/article/google-search-remedies-judge-concerned-delays), [Search Engine Journal](https://www.searchenginejournal.com/google-privacy-policy-connected-apps-ai-mode-ads/594546), [TechCrunch](https://techcrunch.com/2026/07/06/if-you-use-google-youre-training-its-ai-heres-how-to-opt-out), [exchange4media](https://www.exchange4media.com/digital-news/ahead-of-q3-google-redraws-another-line-between-personal-context-and-ads-159476.html), [FindLaw](https://www.findlaw.com/legalblogs/technologist/can-google-make-schools-accept-ai-to-keep-using-search), [StartPOZI](https://startpozi.com/).*
