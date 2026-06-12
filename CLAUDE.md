# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Local development

```bash
bundle install
bundle exec jekyll serve
# open http://localhost:4000
```

There are no tests and no linter. Changes deploy on push to `main` via GitHub Pages.

## Architecture

This is a Jekyll static site hosted at `getunstuck.in`. All prose is UK English.

### Layout chain

```
default.html        ← master (header, nav, footer, theme, fonts)
  ├── article.html  ← full-featured publications (TL;DR, questions, stress test, bibliography, series nav)
  ├── post.html     ← simple writing page
  ├── drill.html    ← drill page with reveal toggle
  └── book.html     ← book page
```

### Content types

| Collection | Source dir | URL pattern | Layout |
|---|---|---|---|
| Drills | `_drills/` | `/drills/:name/` | `drill` |
| Articles | `_posts/` | standard Jekyll | `article` or `post` |
| Mentees | `_mentees/` | not output | — |

`_posts/` is flat for standalone posts (`YYYY-MM-DD-slug.md`) and uses per-series subdirectories for series articles (`_posts/series-h/`, `_posts/series-b/`, etc.). Drills live as individual files in `_drills/`.

### Theming

Theme and typography are set in `_config.yml`:

```yaml
unstuck_theme: emerald   # one of ~30 named themes
typography: spacious     # executive | compact | spacious
```

The `data-theme` and `data-typography` attributes on `<html>` drive CSS token switching in `assets/css/style.css` (edit design tokens at the top of that file).

### Article front matter (full form — `layout: article`)

Used for series publications in `_posts/`. Key structured fields rendered by `_layouts/article.html`:

- `series`, `series_code`, `article_code`, `series_position`, `series_total` — series metadata and breadcrumb
- `status: draft | review | published` — controls the status badge
- `reading_time` — displayed in minutes
- `tldr` — shown as a highlighted "Key Insight" box before the article body
- `questions_to_ponder` — list rendered after the body
- `stress_test` — `intro` + `points[]` (each with `challenge` and `response`)
- `bibliography` — list rendered with auto-numbering and a cite-this block
- `whats_next` — `title`, `code`, `description`, `status`, `url` — powers the "What's next" card and context nav

Series H (Horizon) has special treatment: its breadcrumb links to `/horizon/` rather than the generic publications page.

### Drill structure

```markdown
## The Drill
[visible content]

<div class="drill-toggle">Show Answer</div>
<div class="drill-answer">

## What You're Looking For
...
</div>
```

`assets/js/drill.js` toggles `.open` on `.drill-answer` and flips the button text.

### Adding content

- **New drill**: copy `examples/drill-template.md` → `_drills/week-N-day-N.md`
- **New post (simple)**: copy `examples/post-template.md` → `_posts/YYYY-MM-DD-title.md`
- **New series article (full)**: copy `examples/article-template.md` → `_posts/series-X/YYYY-MM-DD-title.md`

### Deployment

GitHub Pages serves from the `main` branch root. The `CNAME` file contains `getunstuck.in`. `baseurl` must remain `""` in `_config.yml`.

### Images

Article images live in `assets/img/articles/<series-code>/`, e.g. `assets/img/articles/series-h/` for Horizon. Match the series code when adding new images.
