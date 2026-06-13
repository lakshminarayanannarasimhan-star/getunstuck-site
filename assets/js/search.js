(function () {
  var overlay   = document.getElementById('search-overlay');
  var input     = document.getElementById('search-input');
  var results   = document.getElementById('search-results');
  var trigger   = document.getElementById('search-trigger');
  if (!overlay || !input || !results || !trigger) return;

  var index     = null;
  var store     = [];
  var current   = -1;

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
      .catch(function () { results.innerHTML = '<p class="search-empty">Could not load search index.</p>'; });
  }

  /* ── open / close ── */
  function open() {
    overlay.hidden = false;
    document.body.classList.add('search-open');
    input.focus();
    loadIndex(function () { if (input.value) search(input.value); });
  }
  function close() {
    overlay.hidden = true;
    document.body.classList.remove('search-open');
    input.value = '';
    results.innerHTML = '';
    current = -1;
  }

  trigger.addEventListener('click', open);
  overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });

  document.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); overlay.hidden ? open() : close(); }
    if (e.key === 'Escape') close();
    if (!overlay.hidden) {
      var items = results.querySelectorAll('.search-result');
      if (e.key === 'ArrowDown') { e.preventDefault(); current = Math.min(current + 1, items.length - 1); highlight(items); }
      if (e.key === 'ArrowUp')   { e.preventDefault(); current = Math.max(current - 1, 0);                 highlight(items); }
      if (e.key === 'Enter' && current >= 0 && items[current]) {
        items[current].querySelector('a').click();
      }
    }
  });

  function highlight(items) {
    items.forEach(function (el, i) { el.classList.toggle('is-active', i === current); });
    if (items[current]) items[current].scrollIntoView({ block: 'nearest' });
  }

  /* ── search ── */
  function search(q) {
    current = -1;
    if (!q.trim()) { results.innerHTML = ''; return; }
    var hits;
    try {
      hits = index.search(q + '* ' + q); /* wildcard + exact */
    } catch (e) {
      try { hits = index.search(q); } catch (_) { hits = []; }
    }
    if (!hits.length) {
      results.innerHTML = '<p class="search-empty">No results for "<strong>' + escHtml(q) + '</strong>"</p>';
      return;
    }
    results.innerHTML = hits.slice(0, 8).map(function (hit) {
      var doc = store.find(function (d) { return d.url === hit.ref; });
      if (!doc) return '';
      var badge = doc.type === 'drill'
        ? '<span class="search-badge search-badge-drill">Drill</span>'
        : '<span class="search-badge search-badge-article">Article</span>';
      var meta = doc.series ? '<span class="search-meta">' + escHtml(doc.series) + '</span>' : '';
      return '<div class="search-result">'
        + '<a href="' + escHtml(doc.url) + '" onclick="close()">'
        + '<div class="search-result-top">' + badge + meta + '</div>'
        + '<div class="search-result-title">' + escHtml(doc.title) + '</div>'
        + (doc.content ? '<div class="search-result-excerpt">' + escHtml(doc.content.substring(0, 140)) + '…</div>' : '')
        + '</a></div>';
    }).join('');

    /* close on result click */
    results.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', close);
    });
  }

  input.addEventListener('input', function () {
    if (index) search(input.value);
    else loadIndex(function () { search(input.value); });
  });

  function escHtml(str) {
    return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }
})();
