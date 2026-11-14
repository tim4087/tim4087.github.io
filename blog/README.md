# Tim4087 blog

Personal trilingual blog (EN / RU / ES) built with **Jekyll 4.4** and a customized
**Minima** theme. Static, no database, hosted free on GitHub Pages.

## Install (one-time)

Requirements: ruby / gem. The project uses a user-installed Ruby from `~/.rubies/`
(scripts find it automatically).

```
gem install bundler jekyll
bundle config set --local path vendor/bundle
bundle install
```

## Everyday commands

```bash
./serve-dev.sh                  # dev server at http://localhost:4000 (watch mode + drafts)
./new-post.sh "Заголовок" ru    # new post stub (lang: en|ru|es, default en)
./new-post.sh "Title" all       # three stubs at once: slug.md + slug-ru.md + slug-es.md
./new-post.sh "Title" ru startpozi   # optional 3rd arg = category (for future sections)
./deploy.sh "message"           # commit + push; GitHub Actions builds & publishes
```

## Deploy to GitHub Pages (one-time, not done yet)

1. Create an EMPTY repo `Tim4087.github.io` on github.com (no README).
2. `git remote add origin https://github.com/Tim4087/Tim4087.github.io.git`
3. `./deploy.sh "first publish" -u`
4. GitHub → Settings → Pages → Source: **GitHub Actions**.
5. ~2 min later the blog is live at https://tim4087.github.io

Workflow file: `.github/workflows/jekyll.yml` (Ruby 3.4, jekyll build, deploy-pages).

## How it works

- `_config.yml` — site settings (`site.*` in templates), languages, front matter
  defaults (`lang: en` for posts unless overridden), `version` (shown in footer).
- `_data/i18n.yml` — UI strings per language (`site.data.i18n[lang]`).
- `_posts/` — posts, filename `YYYY-MM-DD-slug.md`. Front matter: `layout`, `title`,
  `date` (overrides filename date & URL), `lang`, optional `categories`.
  `<!--more-->` separates the feed excerpt from the full text.
- Pipeline: `_posts/*.md` → `jekyll build` → `_site/**/slug.html` (real HTML files).
- `index.markdown`, `ru/index.md`, `es/index.md` — language home pages, each lists
  only its own posts (`where: "lang", lang`).
- `about.md`, `ru/about.md`, `es/about.md` — about pages (real bio + projects).
- `_layouts/` + `_includes/` — templates (`default` → `home`/`post`/`page`).
  `header.html` renders the language switcher and the search button.
- **Search** — no server needed: `search.json` (Liquid template → JSON index of all
  posts) + `_includes/search.html` (modal, magnifier button or **Ctrl+K**, two
  sections: matching posts + text mentions with highlighted snippets).
- `_sass/` — styles; entry `assets/css/style.scss` → `_sass/custom.scss` → minima.
- RSS: `/feed.xml` (jekyll-feed, auto-generated on every build).
- Math: MathJax 3, `$...$` inline.
- Footer shows `{{ year }} · Версия: {{ site.version }}` — bump `version` in config.
- Drafts: `_drafts/` (gitignored) — visible locally via serve-dev.sh, not published.

## Conventions

- Trilingual post = 3 files with the same slug: `slug.md` (en), `slug-ru.md`,
  `slug-es.md`; add cross-language links at the top of each.
- Post date in the future = not published. Front matter `date:` wins over filename.
- News posts: keep the "sources" list at the bottom.

## TODO / tomorrow

- [ ] Create GitHub repo `Tim4087.github.io` and push (see Deploy above)
- [ ] Maybe: archive page with tags (новости / ИИ / приватность)
- [ ] Maybe: per-language RSS feeds (`/ru/feed.xml`, `/es/feed.xml`)
- [ ] Own favicon/logo to replace the inherited minima favicons
