# Get Unstuck — Improvement Backlog
*Last updated: 2026-06-17*

---

## Weekly tracker

### Week of 17 Jun 2026
- [x] Google Search Console verification + sitemap submission
- [x] Fix jekyll-sitemap / jekyll-feed not generating (missing plugins: in _config.yml)
- [x] IndexNow GitHub Action — auto-ping Bing/Yandex on new posts/drills
- [x] H3 drill pack — replaced with author's original content
- [x] H4 drill pack — created from uploaded content
- [x] Root directory reorganised — pages/ directory, _workbooks/, _case_studies/ collections
- [x] Header modernised — Playfair Display logo, no tagline, underline nav, no box-shadow
- [x] Nav hierarchy — removed Home, reordered, added Leadership OS → CTA pill
- [x] Homepage — hero stats above fold, eyebrow updated, start here badge on LOS
- [x] Homepage — publications cleaned up (Horizon only, 5 more collapsed)
- [x] Homepage — Books & Drills merged, redundant stat card removed
- [x] Article pages — author card, subscribe form, drill breadcrumbs
- [x] Buttondown email subscribe — article footer + /subscribe/ page + nav link
- [x] Removed contact FAB (redundant — LinkedIn and Subscribe in nav)
- [x] UX review — high/medium/polish improvements applied
- [x] Theme cleanup — removed ~25 unused themes; kept mono, aurora, sunrise, flamingo, sovereign, plus editorial/dark/light essentials
- [x] Added 5 new gradient themes from swatches: sunrise, flamingo, aurora, sovereign (WIP)

---

## Pending — content

- [ ] **H5 article + drill pack** — next Horizon episode when written
- [ ] **Case studies** — _case_studies/ collection ready; write first engagement write-up
- [ ] **Workbook PDF** — _workbooks/ collection ready; compile and publish PDF
- [ ] **The Invisible Backlog** book landing page — enable when book is published
- [ ] **The Series** overview page — enable when six-handbook series is defined

---

## Pending — site

### Themes (remaining cleanup)
Active theme: **mono**. Remaining themes in CSS:
- Gradient: aurora, sunrise, flamingo, sovereign (WIP)
- Signature: dojo (root default), mono, slate
- Dark: midnight, navy, plum, charcoal, forest
- Light: ivory, chalk, cloud, sky, rainbow
- Editorial: blueprint, noir, arctic
- Accent-swap: indigo, emerald, oasis, delight, ocean_breeze, evergreen

Still to decide: keep or remove slate, ivory, chalk, cloud, sky, rainbow, blueprint, noir, arctic, indigo, emerald, oasis, delight, ocean_breeze, evergreen

### Backlog
- [ ] **Content grouping** — drills page grouped by series, articles/publications grouped by series and book, books page organised by collection
- [ ] **Search UX** — empty state shows recent articles, match highlighting in excerpts, result count, hide footer until results appear
- [ ] **Mentees/coaching page refresh** — /mentees/ page hasn't been updated
- [ ] **Comments via Utterances** — GitHub Issues as comment threads; zero backend, free
- [ ] **Drill streak tracker** — localStorage counter ("You've done 7 drills this week")
- [ ] **Series progress ring** — SVG circle showing "2 of 6 episodes read" on Horizon page
- [ ] **Print / PDF styles** — deferred; @page margin box browser support inconsistent

---

## Done (all time)

### Site foundation
- [x] Open Graph / Twitter card meta tags + JSON-LD Article schema
- [x] Reading progress bar (article pages only)
- [x] Table of contents — auto-generated, sticky sidebar
- [x] Client-side search — Lunr.js modal (Ctrl+K)
- [x] Related articles — hidden until series has 2+ articles
- [x] Article share bar (LinkedIn, WhatsApp, copy link)
- [x] Audio player on articles (Web Speech API)
- [x] Back to top button
- [x] Dark mode toggle (persists via localStorage)
- [x] Mark as read (tracks 80% scroll)
- [x] Font size control A−/A+ (persists via localStorage)
- [x] Reading percentage indicator
- [x] Keyboard navigation ←/→ between series articles
- [x] Page transitions (fade in/out)
- [x] Image lightbox
- [x] Custom 404 page
- [x] Scroll-reveal animations
- [x] Custom scrollbar
- [x] Analytics — GoatCounter
- [x] About page — bento grid career timeline

### SEO & distribution
- [x] Google Search Console verified + sitemap submitted
- [x] jekyll-sitemap + jekyll-feed plugins wired correctly
- [x] IndexNow auto-ping on push (GitHub Action)
- [x] Buttondown email subscribe (article + /subscribe/ page + nav)

### Header & nav
- [x] Logo: Playfair Display, no tagline
- [x] Nav: no Home, reordered by importance, underline hover
- [x] Nav CTA: Leadership OS → gradient pill
- [x] Subscribe link in nav
- [x] Search ⌘K hint in header
- [x] Active nav link via aria-current (JS)
- [x] Removed contact FAB

### Homepage
- [x] Stats (25+/600+/$150M+) in hero above fold
- [x] LOS as primary "Start here" TOC item
- [x] Publications: Horizon only, 5 more collapsed
- [x] Books & Drills merged into one section
- [x] Removed featured article section
- [x] Removed redundant stat card

### Content & structure
- [x] pages/ directory — all pages moved out of root
- [x] _workbooks/ and _case_studies/ collections set up
- [x] Author card on article pages
- [x] Drill + drillpack breadcrumb nav
- [x] H3 and H4 drill packs published
