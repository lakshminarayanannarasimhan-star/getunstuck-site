# Get Unstuck — getunstuck.in

Jekyll site for the **Get Unstuck · Leadership Handbooks**.
Hosted on GitHub Pages. UK English throughout.

> You were never broken. You were stuck.

---

## Quick start (local preview)

```bash
gem install bundler
bundle install
bundle exec jekyll serve
# open http://localhost:4000
```

---

## File map

```
getunstuck-jekyll/
├── _config.yml              Site settings — change theme, title, URL here
├── _layouts/
│   ├── default.html         Master layout (header, nav, footer)
│   ├── drill.html           Individual drill page
│   ├── post.html            Article / writing page
│   └── book.html            Book page layout
├── _drills/                 One .md per drill  →  /drills/:name/
├── _posts/                  One .md per article (YYYY-MM-DD-title.md)
├── assets/
│   ├── css/style.css        ALL design — edit tokens at the top
│   ├── js/drill.js          Drill reveal toggle
│   ├── js/theme.js          Mobile nav
│   └── img/sitemap.svg      Pictorial sitemap (editable)
├── examples/                Copy-paste templates for drills and posts
├── index.md                 Home
├── start-here.md            Orientation
├── the-invisible-backlog.md Handbook #1
├── drills.md                Drills hub
├── workbook.md              Free PDF download
├── stories.md               What Became Possible
├── the-series.md            Six handbooks
├── writing.md               Articles index
├── about.md                 About + philosophy
├── sitemap.md               Human-readable sitemap
├── 404.html                 Not-found page
├── CNAME                    Custom domain: getunstuck.in
└── Gemfile                  Ruby dependencies
```

---

## Change the theme

Edit one line in `_config.yml`:

```yaml
unstuck_theme: dojo       # warm paper (default)
# unstuck_theme: midnight # dark focus mode
# unstuck_theme: slate    # executive minimal
# unstuck_theme: mono     # stripped back
```

---

## Add a drill

1. Copy `examples/drill-template.md` to `_drills/week-N-day-N.md`
2. Fill in the front matter and content
3. Push — Jekyll auto-generates `/drills/week-N-day-N/`

---

## Add a post / article

1. Copy `examples/post-template.md` to `_posts/YYYY-MM-DD-title.md`
2. Fill in front matter and content
3. Push — appears automatically in `/writing/`

---

## GitHub Pages setup (one time)

1. Create public repo on GitHub
2. Push this folder: `git init && git add . && git commit -m "init" && git push`
3. Settings → Pages → Source: main branch, / (root) → Save
4. Custom domain: confirm `getunstuck.in` in Settings → Pages

### DNS (at your .in registrar)

```
A    @    185.199.108.153
A    @    185.199.109.153
A    @    185.199.110.153
A    @    185.199.111.153
CNAME  www  <your-github-username>.github.io
```

Then tick **Enforce HTTPS** once DNS propagates.

---

## Philosophy baked in

- Drills and workbook are free — no gate, no email, always
- Pages arrive when ready — no countdowns, no hype
- Dignity first in every line of copy
