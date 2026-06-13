# Get Unstuck — Improvement Backlog

## Done
- [x] Redesign all 30 themes with distinct tinted canvases
- [x] Editorial header (clean surface + accent top stripe)
- [x] Article share bar (LinkedIn, WhatsApp, copy link)
- [x] Audio player on articles (Web Speech API, gated via enable_audio in _config.yml)
- [x] Open Graph / Twitter card meta tags
- [x] Reading progress bar (article pages only, replaces static header accent line while reading)
- [x] Table of contents — auto-generated from headings, sticky sidebar for long articles
- [x] Pull quotes / callout blocks — accent left border blockquote style, two examples in H1
- [x] Client-side search — Lunr.js modal (Ctrl+K), covers articles + drills, keyboard navigable
- [x] Related articles — implemented; hidden until series has 2+ articles. Test when H2 is published.

---

## Done (quick wins)
- [x] Back to top button — fixed bottom-left, appears after 400px scroll
- [x] Dark mode toggle — moon/sun icon in header, persists via localStorage
- [x] Mark as read — tracks 80% scroll, shows ✓ Read badge on publications page

## Done (reader experience)
- [x] Font size control — A−/A+ in article header, persists via localStorage
- [x] Reading percentage — fixed top-right, appears after 3% scroll
- [x] Keyboard navigation — ←/→ arrows move between series articles with toast

## Done (polish)
- [x] Page transitions — fade in/out between pages (transitions.js, CSS @keyframes page-in/page-out)
- [x] Image lightbox — click article images to view full size (lightbox.js, overlay in default.html)
- [x] Custom 404 page — improved with 6 navigation cards covering all major sections

## Done (reach & distribution)
- [x] Analytics — GoatCounter (getunstuck.goatcounter.com, script in default.html)
- [x] OG / Twitter card meta tags — default image + per-article overrides

## Done (site cleanup)
- [x] Remove stub pages (stories, start-here, personal_branding)
- [x] Exclude unfinished pages from build (workbook, case_studies, the-invisible-backlog, the-series)
- [x] Remove unused articles collection from _config.yml
- [x] Exclude examples/ directory from build
- [x] Series-B test post set to draft
- [x] Horizon episode cards — visual depth hierarchy (live → next → working → distant → reserve)

## Pages excluded from build (enable when content is ready)
- [ ] **workbook.md** → `/workbook/` — PDF of all drills; exclude until PDF exists
- [ ] **case_studies.md** → `/case_studies/` — real engagement write-ups; exclude until first case is written
- [ ] **the-invisible-backlog.md** → `/the-invisible-backlog/` — book landing page; exclude until book is published
- [ ] **the-series.md** → `/the-series/` — six-handbook series overview; exclude until series is defined
- To re-enable: remove the entry from `exclude:` in `_config.yml`

## Backlog
- [ ] **Email subscribe** — Buttondown (free up to 100, $9/mo after; embed form in article footer and /subscribe/ page)
- [ ] **Print / PDF styles** — deferred; @page margin box browser support inconsistent
- [ ] **Series landing pages** — create when series has a plan or first article ready (template at examples/series-landing-template.md)
