(function () {
  /* ── scroll-reveal header ── */
  var header = document.querySelector('.header');
  if (header) {
    function updateHeader() {
      header.classList.toggle('scrolled', window.scrollY > 8);
    }
    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();
  }

  /* ── reading progress bar (article pages only) ── */
  var fill = document.getElementById('reading-progress-fill');
  var bar  = document.getElementById('reading-progress');
  if (fill) {
    function updateProgress() {
      var scrollTop  = window.scrollY;
      var docHeight  = document.documentElement.scrollHeight - window.innerHeight;
      var pct        = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;
      fill.style.width = pct + '%';
      if (bar) bar.setAttribute('aria-valuenow', Math.round(pct));
    }
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }
  /* ── back to top button ── */
  var backBtn = document.getElementById('back-to-top');
  if (backBtn) {
    function updateBackTop() {
      backBtn.classList.toggle('visible', window.scrollY > 400);
    }
    window.addEventListener('scroll', updateBackTop, { passive: true });
    backBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    updateBackTop();
  }
})();
