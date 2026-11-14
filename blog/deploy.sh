#!/bin/bash
# Publish the blog: commit everything and push to GitHub.
# The repo root is the parent of this blog/ folder (bio site lives there).
# GitHub Actions builds blog + bio together and deploys to GitHub Pages:
#   https://tim4087.github.io/        — визитка
#   https://tim4087.github.io/blog/   — этот блог
#
# Usage: ./deploy.sh "commit message"

set -euo pipefail

cd "$(dirname "$0")/.."   # repo root (tim4087.github.io)

MSG="${1:-blog update $(date +%F)}"

git add -A
if git diff --cached --quiet; then
    echo "Nothing to commit."
    exit 0
fi
git commit -m "$MSG"
git push

echo "Pushed. GitHub Actions is building — check https://github.com/Tim4087/Tim4087.github.io/actions"
