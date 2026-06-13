(function () {
  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.body.classList.add('js-sr');

  var targets = document.querySelectorAll(
    '.hp-domain-card, .hp-pub-row, .section-ink, .cb-card, .hz-ep-card, .bk-vol, .hp-domain-row'
  );

  // Stagger siblings within the same parent
  var parentCounters = new Map();
  targets.forEach(function (el) {
    var key = el.parentNode;
    var n = (parentCounters.get(key) || 0);
    parentCounters.set(key, n + 1);
    el.classList.add('sr');
    if (n > 0 && n <= 4) el.classList.add('sr-d' + n);
  });

  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('sr-visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.07 });

  targets.forEach(function (el) { obs.observe(el); });
})();
