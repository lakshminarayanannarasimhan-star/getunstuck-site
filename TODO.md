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

### Architecture Phase 3 (deferred — needs richer LOS page first)
- [ ] **Drills under LOS** — move `/drills/` to `/los/drills/`, update `_config.yml` permalink, update all `drill_pack_url` front matter in articles, update drills page link in nav/footer. Only when LOS page has enough content for drills to live inside it naturally.
- [ ] **LOS page uplift** — needs richer content (domains, capabilities, belt system) before Phase 3 can proceed
- [ ] **Architecture URL update: sitemap submission** — after Phase 2 went live, submit `/articles/` and `/series/*` URLs to Google Search Console URL Inspection for faster indexing

### EPIC A — Knowledge Architecture (foundational, do first)

**Governing principle:** Every artifact has one intellectual responsibility. The site is organised around the evolution of understanding, not around content or publishing format.

**Artifact taxonomy:**
- Theory → Explains (decades)
- Application → Demonstrates (years)
- Evidence → Supports (continuous)
- Laboratory → Tests (continuous)
- Distinction → Clarifies (decades)
- Law → Compresses (decades)
- Book → Integrates (years)

#### A1 — URL restructure: /series/ → /theories/
- [ ] Move `pages/series/horizon.md` → `pages/theories/horizon.md`, permalink `/theories/horizon/`
- [ ] Move `pages/series/compass.md` → `pages/theories/compass.md`, permalink `/theories/compass/`
- [ ] Move `pages/series/frontier.md` → `pages/theories/frontier.md`, permalink `/theories/frontier/`
- [ ] Move `pages/series/gravity.md` → `pages/theories/gravity.md`, permalink `/theories/gravity/`
- [ ] Move `pages/series/discovery.md` → `pages/theories/discovery.md`, permalink `/theories/discovery/`
- [ ] Add Jekyll redirects from all `/series/*` → `/theories/*` so existing links don't break
- [ ] Update all internal links referencing `/series/horizon/`, `/series/compass/` etc.
- [ ] Submit new `/theories/*` URLs to Google Search Console

#### A2 — Theory layout template
- [ ] Create `_layouts/theory.html` with six mandatory sections:
  1. Governing Question (one question, timeless)
  2. The Mechanism (model only — no industries, no anecdotes)
  3. First Principles (5–10 industry-independent rules)
  4. Distinctions (concept ≠ concept, built into the theory)
  5. Laws (compressed form, linked to Laws Library)
  6. Open Questions (what the theory does not yet answer)
- [ ] Add Evolution section: v0.1 → v0.2 → v0.3 (intellectual evolution, not version history)
- [ ] No episode cards, no audience section, no author — stripped to mechanism only
- [ ] Create `examples/theory-template.md` as starter file

#### A3 — Front matter metadata for knowledge graph
- [ ] Add `artifact_type: theory | application | evidence | laboratory | distinction | law | book` field
- [ ] Add `parent_theory: [gravity, horizon, compass]` field to applications and evidence
- [ ] Add `theory_version: 0.x` field to theory pages
- [ ] Update `_config.yml` defaults for new `_theories/` collection (if using collection rather than pages)

#### A4 — Rewrite Gravity as first complete Theory page
- [ ] Governing question: "Why does value command a premium?"
- [ ] Mechanism: Creation → Perception → Capture (the canonical law as the model)
- [ ] First principles: Scarcity creates premium. Premium migrates when scarcity migrates. etc.
- [ ] Distinctions: Effort ≠ Value, Importance ≠ Scarcity, etc.
- [ ] Laws: Link to Gravity-derived laws (#1–#9 from Laws Library)
- [ ] Open Questions: Can value be created from zero? Does dark matter have a half-life?
- [ ] Evolution: v0.1 value = scarcity → v0.2 premium follows scarcity → v0.3 three states
- [ ] No articles. No episode cards. Timeless only.

#### A5 — Rewrite Horizon as Theory page
- [ ] Governing question: "How does the basis of competition change over time?"
- [ ] Mechanism: Abundance → Scarcity Migration → Evaluation Criteria Shift → Premium Migration → Competitive Reordering
- [ ] First principles: Execution becomes abundant before executives notice. Evaluation changes before financials reflect it. etc.
- [ ] Distinctions: Execution ≠ Differentiation, Current Value ≠ Future Value
- [ ] Laws: Link to Horizon-derived laws (#10–#12)
- [ ] Open Questions: Can value migrate backwards? Can two scarcities coexist?
- [ ] Evolution: v0.1 execution → trust → v0.2 trust ceiling → v0.3 indispensability arc
- [ ] Maturity badge: Emerging Theory

#### A6 — Rewrite Compass, Frontier, Discovery as Theory pages
- [ ] Compass: Governing question "How should executives choose under uncertainty?" — Emerging Theory
- [ ] Frontier: Governing question "How do entirely new strategic positions emerge?" — Emerging Theory
- [ ] Discovery: Governing question "Why do organisations fail to see reality?" — Theory (already minimal, update to six-section template)

#### A7 — Applications layer
- [ ] Add `artifact_type: application` and `parent_theory: horizon` to H1–H4 front matter
- [ ] Update Horizon theory page to link to "Applications of Horizon" section (not embed episode cards)
- [ ] Build `pages/theories/horizon/applications.md` or section listing applications

#### A8 — Navigation restructure
- [ ] Replace "Articles" in nav with "Theories" (linking to `/theories/` index page)
- [ ] Create `/theories/` index page listing all five theories with maturity badges
- [ ] Update homepage hero right panel to reflect Theories taxonomy
- [ ] Update articles page to reflect Theories vs Applications distinction

---

### EPIC B — New Pages (Phase 1 of identity strengthening)

#### B1 — Distinctions page
- [ ] Create `pages/distinctions.md` at `/distinctions/`
- [ ] Initial set: Great Product ≠ Customer Relevance, Operational Health ≠ Strategic Health, Effort ≠ Value, Execution ≠ Differentiation, Current Value ≠ Future Value, Series ≠ Theory, Application ≠ Article
- [ ] Each distinction links to the theory that generated it
- [ ] Add to nav or accessible from Theories index

#### B2 — The Standard page
- [ ] Create `pages/standard.md` at `/standard/`
- [ ] Content: intellectual operating rules — We separate observations from interpretations. We test theories across industries. We distinguish evidence from opinion. We prefer mechanisms over anecdotes. We revise our theories when reality changes.
- [ ] Not a manifesto. Not an about page. The intellectual contract.
- [ ] Link from footer and About page

#### B3 — Start Here page
- [ ] Create `pages/start-here.md` at `/start-here/`
- [ ] Content: Why Get Unstuck exists · The five theories · The taxonomy (Theory/Application/Lab/Law/Book) · Reading order · Expected transformation
- [ ] Add to nav or homepage
- [ ] One page. Onboarding only.

---

### EPIC C — Theory content (write in order of maturity)

#### C1 — Write Theory: Gravity (first, most mature)
As per A4 above — full six-section theory page.

#### C2 — Write Theory: Horizon
As per A5 above — full six-section theory page.

#### C3 — Write Theories: Compass, Frontier, Discovery
As per A6 above.

---

### EPIC D — Laboratory (deferred — needs experiments before building)
- [ ] Rename drills to "Experiments" in the Laboratory context
- [ ] Each experiment knows: `tests_theory:`, `prediction:`, `what_to_observe:`
- [ ] Build Laboratory section under each theory: `/theories/horizon/laboratory/`
- [ ] Prerequisite: at least 10 polished experiments per theory before surfacing

---

### Laws Library — write and publish one by one
- [ ] **Law #1** — The Law of Constraint Migration
- [ ] **Law #2** — The Law of Scarcity Premium
- [ ] **Law #3** — The Law of Value Migration
- [ ] **Law #4** — The Law of Abundance
- [ ] **Law #5** — The Law of Capability Diffusion
- [ ] **Law #6** — The Law of Scale Consumption
- [ ] **Law #7** — The Law of Strategic Position
- [ ] **Law #8** — The Law of Future Constraints
- [ ] **Law #9** — The Law of Constraint Removal
- [ ] **Law #10** — The Reliability Law
- [ ] **Law #11** — The Trust Ceiling
- [ ] **Law #12** — The Law of Compression

### Backlog
- [x] **Publications left panel manifesto** — editorial philosophy installed: LOS installation protocol + governing principle on the dark left panel.
- [x] **Surface editorial standard site-wide** — added to About page, LOS page, and Articles left panel (publications manifesto).
- [ ] **Publications left panel: accordion for 2+ live series** — when a second series publishes, wrap each in a `pub-acc-item`, re-add 4-line accordion JS, default open = newest. Pipeline series never appear here.
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
