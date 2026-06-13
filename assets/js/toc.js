(function () {
  var body    = document.getElementById('art-body');
  var sidebar = document.getElementById('art-toc-sidebar');
  var nav     = document.getElementById('art-toc');
  if (!body || !sidebar || !nav) return;

  /* collect h2 and h3 headings */
  var headings = Array.prototype.slice.call(body.querySelectorAll('h2, h3'));
  var h2count  = headings.filter(function (h) { return h.tagName === 'H2'; }).length;
  if (h2count < 2) return; /* not enough headings — hide sidebar */

  /* assign IDs */
  var usedIds = {};
  headings.forEach(function (h) {
    if (!h.id) {
      var base = h.textContent.trim()
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
      var id = base;
      var n  = 2;
      while (usedIds[id]) { id = base + '-' + n++; }
      h.id = id;
    }
    usedIds[h.id] = true;
  });

  /* build nav list */
  var html = '<ul class="art-toc-list">';
  headings.forEach(function (h) {
    var cls = h.tagName === 'H3' ? 'art-toc-item art-toc-h3' : 'art-toc-item art-toc-h2';
    html += '<li class="' + cls + '">'
      + '<a class="art-toc-link" href="#' + h.id + '">' + h.textContent.trim() + '</a>'
      + '</li>';
  });
  html += '</ul>';
  nav.innerHTML = html;
  sidebar.hidden = false;

  /* scroll-spy via IntersectionObserver */
  var links   = nav.querySelectorAll('.art-toc-link');
  var active  = null;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var id  = entry.target.id;
        var lnk = nav.querySelector('.art-toc-link[href="#' + id + '"]');
        if (lnk && lnk !== active) {
          if (active) active.classList.remove('is-active');
          active = lnk;
          active.classList.add('is-active');
        }
      }
    });
  }, { rootMargin: '-10% 0px -80% 0px', threshold: 0 });

  headings.forEach(function (h) { observer.observe(h); });

  /* smooth scroll */
  links.forEach(function (lnk) {
    lnk.addEventListener('click', function (e) {
      e.preventDefault();
      var target = document.getElementById(lnk.getAttribute('href').slice(1));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();
