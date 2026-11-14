#!/bin/bash

set -eux

# Use user-installed ruby from ~/.rubies (see README), if present.
for d in "$HOME"/.rubies/ruby-*; do
    if [ -x "$d/bin/ruby" ]; then
        export PATH="$d/bin:$PATH"
    fi
done

rm -rf _site
bundle exec jekyll serve --drafts
