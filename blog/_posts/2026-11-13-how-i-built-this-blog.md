---
layout: post
title: "How I Built This Blog: Jekyll, Three Languages, and Serverless Search"
date: 2026-11-13 12:00:00 +0300
lang: en
---

*Other languages: [Русский]({{ site.baseurl }}/2026/11/13/how-i-built-this-blog-ru.html) · [Español]({{ site.baseurl }}/2026/11/13/how-i-built-this-blog-es.html)*

I wanted a trilingual blog — no WordPress, no database, no monthly hosting bill. Here's how it works under the hood: the Jekyll static generator, interface translations via a single YAML file, and post search that runs entirely in the browser.

<!--more-->

## Why static

A typical WordPress site is a server that rebuilds every page on every visit: a script queries the database, glues HTML together, serves it. A static blog works differently: **all pages are built once** (at publish time), and readers get ready-made files. The advantages:

- hosting is free (GitHub Pages), and there's nothing to hack — no database, no server-side code;
- speed: it just serves files, physically impossible to get faster;
- your texts live in git — the full history of every post's changes is preserved.

The thing that builds it all is **Jekyll**, a static site generator written in Ruby — the same one that powers GitHub Pages.

## The pipeline: how .md becomes .html

The most common misconception: "I thought these were md files, but the URL points to html." Both are true! You write **Markdown**; Jekyll produces **HTML** at build time:

```
_posts/2026-11-13-hello-world.md    ← you write this
        ↓  jekyll build
_site/2026/11/13/hello-world.html   ← readers get this
```

Inside every `.md` is a "front matter" header between two `---` lines:

```yaml
---
layout: post
title: "Hello, world!"
lang: en
---
```

Below that — plain Markdown. Jekyll runs it through a converter (kramdown), wraps it in a layout and drops the result into `_site/` in date folders. You never write HTML by hand — only Markdown, and occasionally a bit of Liquid.

## Three languages, zero plugins

No third-party plugins were needed for multilingual support. The scheme:

1. **Every page and post knows its language** — the `lang` field in front matter. For the forgetful, `_config.yml` has defaults: everything in `_posts/` counts as English unless stated otherwise.
2. **Interface translations live in one file**, `_data/i18n.yml`:

```yaml
ru:
  about: "обо мне"
  recent_posts: "НОВЫЕ ЗАПИСИ"
es:
  about: "sobre mí"
```

3. **Templates read translations by current language**: `{% assign t = site.data.i18n[lang] %}` → `{{ t.about }}`.
4. **Each home page shows only its own posts**: `{% assign lang_posts = site.posts | where: "lang", lang %}`. A Russian post never drowns in the English feed — it simply never enters it.
5. The **en / ru / es** switcher in the header is just three links to `/`, `/ru/` and `/es/` with the active one highlighted.

A trilingual post is three files: `slug.md` (EN), `slug-ru.md`, `slug-es.md`. I was too lazy to do that by hand, so a `new-post.sh "Title" all` script creates all three stubs at once.

## Search without a server

On a static site there's nowhere to "query a database" — and you don't need one. The scheme, in four steps:

1. At build time Jekyll generates **`/search.json`** — a file with every post (title, URL, language, full text). One Liquid template, zero server code.
2. In the header — a magnifier button (plus **Ctrl+K** as a bonus).
3. On Enter, JavaScript **downloads `search.json` once** and searches in the browser: first title matches, below — full-text matches with the found word highlighted.
4. The window is a modal, centered, with a dimmed backdrop. Everything feels 2026 — except the page weight: it doesn't gain a single byte until you open the search.

## Project structure

| Path | What's inside |
|---|---|
| `_posts/` | posts (Markdown) |
| `_layouts/` | page skeletons: default → home / post / page |
| `_includes/` | building blocks: header, footer, search, figures |
| `_data/i18n.yml` | interface translations |
| `_sass/` | styles (Sass → one CSS file) |
| `search.json` | the search index |
| `ru/`, `es/` | home and about pages of other languages |
| `.github/workflows/` | auto-build and deploy to GitHub Pages |

## Deployment

Push to GitHub → Actions builds the site with the same Jekyll and publishes to GitHub Pages. From "saved the file" to "visible on the internet" — about two minutes.

## The result

The whole blog is a folder of text files: Markdown, YAML, a little Liquid and JavaScript. No admin panel, no database, zero rubles of hosting. Want one like it? All the code is open in [this blog's repository](https://github.com/Tim4087/Tim4087.github.io). Clone it and change the name.
