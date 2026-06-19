(function () {
  var overlay = document.getElementById('search-overlay');
  var input   = document.getElementById('search-input');
  var results = document.getElementById('search-results');
  var footer  = document.querySelector('.search-footer');
  var trigger = document.getElementById('search-trigger');
  if (!overlay || !input || !results || !trigger) return;

  var index   = null;
  var store   = [];
  var current = -1;

  /* ── load index once ── */
  function loadIndex(cb) {
    if (index) { cb(); return; }
    fetch('/search.json')
      .then(function (r) { return r.json(); })
      .then(function (data) {
        store = data;
        index = lunr(function () {
          this.field('title',   { boost: 5 });
          this.field('tags',    { boost: 3 });
          this.field('series',  { boost: 2 });
          this.field('content', { boost: 1 });
          this.ref('url');
          data.forEach(function (doc) { this.add(doc); }, this);
        });
        cb();
      })
      .catch(function () {
        results.innerHTML = '<p class="search-empty">Could not load search index.</p>';
      });
  }

  /* ── footer visibility ── */
  function setFooter(visible) {
    if (footer) footer.style.display = visible ? '' : 'none';
  }

  /* ── recent articles (empty state) ── */
  function showRecent() {
    var recent = store
      .filter(function (d) { return d.type === 'article'; })
      .slice(0, 4);
    if (!recent.length) { results.innerHTML = ''; setFooter(false); return; }
    results.innerHTML = '<p class="search-recent-label">Recent articles</p>'
      + recent.map(function (doc) { return renderResult(doc, ''); }).join('');
    setFooter(false);
    results.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', close); });
  }

  /* ── highlight match in string ── */
  function highlight(str, q) {
    if (!q) return escHtml(str);
    var escaped = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return escHtml(str).replace(new RegExp('(' + escaped + ')', 'gi'), '<mark>$1</mark>');
  }

  /* ── render one result ── */
  function renderResult(doc, q) {
    var badge = doc.type === 'drill'
      ? '<span class="search-badge search-badge-drill">Drill</span>'
      : '<span class="search-badge search-badge-article">Article</span>';
    var meta = doc.series ? '<span class="search-meta">' + escHtml(doc.series) + '</span>' : '';
    var excerpt = doc.content ? doc.content.substring(0, 140) : '';
    /* find match position for better excerpt */
    if (q && doc.content) {
      var idx = doc.content.toLowerCase().indexOf(q.toLowerCase());
      if (idx > 60) excerpt = '…' + doc.content.substring(idx - 30, idx + 110);
    }
    return '<div class="search-result">'
      + '<a href="' + escHtml(doc.url) + '">'
      + '<div class="search-result-top">' + badge + meta + '</div>'
      + '<div class="search-result-title">' + highlight(doc.title, q) + '</div>'
      + (excerpt ? '<div class="search-result-excerpt">' + highlight(excerpt, q) + '…</div>' : '')
      + '</a></div>';
  }

  /* ── open / close ── */
  function open() {
    overlay.hidden = false;
    document.body.classList.add('search-open');
    setFooter(false);
    input.focus();
    loadIndex(function () {
      if (input.value) search(input.value);
      else showRecent();
    });
  }
  function close() {
    overlay.hidden = true;
    document.body.classList.remove('search-open');
    input.value = '';
    results.innerHTML = '';
    current = -1;
    setFooter(false);
  }

  trigger.addEventListener('click', open);
  overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });

  document.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); overlay.hidden ? open() : close(); }
    if (e.key === 'Escape') close();
    if (!overlay.hidden) {
      var items = results.querySelectorAll('.search-result');
      if (e.key === 'ArrowDown') { e.preventDefault(); current = Math.min(current + 1, items.length - 1); highlightItem(items); }
      if (e.key === 'ArrowUp')   { e.preventDefault(); current = Math.max(current - 1, 0);                 highlightItem(items); }
      if (e.key === 'Enter' && current >= 0 && items[current]) {
        items[current].querySelector('a').click();
      }
    }
  });

  function highlightItem(items) {
    items.forEach(function (el, i) { el.classList.toggle('is-active', i === current); });
    if (items[current]) items[current].scrollIntoView({ block: 'nearest' });
  }

  /* ── search ── */
  function search(q) {
    current = -1;
    if (!q.trim()) { showRecent(); return; }
    var hits;
    try { hits = index.search(q + '* ' + q); }
    catch (e) { try { hits = index.search(q); } catch (_) { hits = []; } }

    if (!hits.length) {
      results.innerHTML = '<p class="search-empty">No results for "<strong>' + escHtml(q) + '</strong>"</p>';
      setFooter(false);
      return;
    }

    var shown = hits.slice(0, 8);
    var countHtml = '<p class="search-count">' + shown.length
      + (hits.length > 8 ? ' of ' + hits.length : '') + ' results</p>';

    results.innerHTML = countHtml + shown.map(function (hit) {
      var doc = store.find(function (d) { return d.url === hit.ref; });
      return doc ? renderResult(doc, q) : '';
    }).join('');

    setFooter(true);
    results.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', close); });
  }

  input.addEventListener('input', function () {
    if (index) search(input.value);
    else loadIndex(function () { search(input.value); });
  });

  function escHtml(str) {
    return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }
})();
