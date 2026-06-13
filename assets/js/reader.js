(function () {
  /* ── keyboard navigation (series articles only) ── */
  var prevLink = document.querySelector('.art-sn-prev');
  var nextLink = document.querySelector('.art-sn-next');
  if (!prevLink && !nextLink) return;

  var toastEl   = document.getElementById('reader-toast');
  var toastTimer;

  function showToast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('visible'); }, 1800);
  }

  document.addEventListener('keydown', function (e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === 'ArrowLeft' && prevLink) {
      showToast('← ' + prevLink.textContent.replace('←', '').trim());
      setTimeout(function () { window.location.href = prevLink.href; }, 400);
    }
    if (e.key === 'ArrowRight' && nextLink) {
      showToast(nextLink.textContent.replace('→', '').trim() + ' →');
      setTimeout(function () { window.location.href = nextLink.href; }, 400);
    }
  });
})();
