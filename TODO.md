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

## Backlog
- [ ] **Analytics** — GoatCounter (free, needs account at goatcounter.com)
- [ ] **Print / PDF styles** — deferred; @page margin box browser support inconsistent
- [ ] **Audio: pre-generated MP3s** — ElevenLabs/OpenAI TTS per article for higher voice quality
- [ ] **Email subscribe** — Buttondown (free up to 100, $9/mo after; embed form in article footer and /subscribe/ page)
- [ ] **Series landing pages** — auto-generated index for each series
