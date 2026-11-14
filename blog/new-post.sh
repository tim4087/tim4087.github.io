#!/bin/bash
# Create a new post.
# Usage:
#   ./new-post.sh "Post title" [ru|en|es|all] [category]
#
# lang defaults to "en". "all" creates three linked versions at once:
#   slug.md (en), slug-ru.md (ru), slug-es.md (es).
# category (optional) — e.g. "startpozi" puts the post into /startpozi/ section.

set -euo pipefail

TITLE="${1:?Usage: ./new-post.sh \"Post title\" [en|ru|es|all] [category]}"
LANG_="${2:-en}"
CATEGORY_="${3:-}"

DATE="$(date +%Y-%m-%d)"
STAMP="$(date +"%Y-%m-%d %H:%M:%S %z")"
TITLE_ESCAPED="${TITLE//\"/\\\"}"

# Build a URL slug: lowercase, transliterate RU/ES letters, keep a-z0-9 and dashes
SLUG="$(echo "$TITLE" | tr '[:upper:]' '[:lower:]' | sed -e '
    s/а/a/g; s/б/b/g; s/в/v/g; s/г/g/g; s/д/d/g; s/е/e/g; s/ё/e/g;
    s/ж/zh/g; s/з/z/g; s/и/i/g; s/й/y/g; s/к/k/g; s/л/l/g; s/м/m/g;
    s/н/n/g; s/о/o/g; s/п/p/g; s/р/r/g; s/с/s/g; s/т/t/g; s/у/u/g;
    s/ф/f/g; s/х/h/g; s/ц/ts/g; s/ч/ch/g; s/ш/sh/g; s/щ/sch/g;
    s/ъ//g; s/ь//g; s/ы/y/g; s/э/e/g; s/ю/yu/g; s/я/ya/g;
    s/А/A/g; s/Б/B/g; s/В/V/g; s/Г/G/g; s/Д/D/g; s/Е/E/g; s/Ё/E/g;
    s/Ж/Zh/g; s/З/Z/g; s/И/I/g; s/Й/Y/g; s/К/K/g; s/Л/L/g; s/М/M/g;
    s/Н/N/g; s/О/O/g; s/П/P/g; s/Р/R/g; s/С/S/g; s/Т/T/g; s/У/U/g;
    s/Ф/F/g; s/Х/H/g; s/Ц/Ts/g; s/Ч/Ch/g; s/Ш/Sh/g; s/Щ/Sch/g;
    s/Ъ//g; s/Ь//g; s/Ы/Y/g; s/Э/E/g; s/Ю/Yu/g; s/Я/Ya/g;
    s/á/a/g; s/é/e/g; s/í/i/g; s/ó/o/g; s/ú/u/g; s/ü/u/g; s/ñ/n/g;
    s/[^a-zA-Z0-9]\+/-/g; s/-\+/-/g; s/^-*//; s/-*$//' | tr '[:upper:]' '[:lower:]')"

[ -z "$SLUG" ] && SLUG="post"

CATEGORY_LINE=""
[ -n "$CATEGORY_" ] && CATEGORY_LINE="categories: ${CATEGORY_}"

write_post() {
    local l="$1" suffix="$2"
    local file="_posts/${DATE}-${SLUG}${suffix}.md"

    if [ -e "$file" ]; then
        echo "Already exists: $file (skipped)" >&2
        return
    fi

    cat > "$file" <<EOF
---
layout: post
title: "${TITLE_ESCAPED}"
date: ${STAMP}
lang: ${l}
${CATEGORY_LINE}
---

Анонс: пара предложений, которые появятся в ленте на главной.
An intro: a couple of sentences shown in the home feed.

<!--more-->

Полный текст поста — ниже этого маркера.
The full text goes below this marker.
EOF
    echo "Created: $file (lang: ${l}${CATEGORY_:+, category: ${CATEGORY_}})"
}

case "$LANG_" in
    all)
        write_post en ""
        write_post ru "-ru"
        write_post es "-es"
        echo "Now translate each file and add cross-language links at the top, e.g.:"
        echo "  *Другие языки: [English](URL) · [Español](URL)*"
        ;;
    en|ru|es)
        write_post "$LANG_" ""
        echo "Open it, write, save — the post appears on the '${LANG_}' home page automatically."
        ;;
    *)
        echo "Unknown lang: $LANG_ (use en, ru, es or all)" >&2
        exit 1
        ;;
esac
