(function () {
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href]');
    if (!link) return;
    var href = link.getAttribute('href');
    if (!href) return;
    if (link.target === '_blank') return;
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
    if (href.charAt(0) === '#') return;
    if (href.indexOf('mailto:') === 0 || href.indexOf('tel:') === 0) return;
    if (href.indexOf('http') === 0 && href.indexOf(window.location.origin) !== 0) return;
    e.preventDefault();
    document.body.classList.add('page-exit');
    setTimeout(function () { window.location.href = href; }, 220);
  });
})();
