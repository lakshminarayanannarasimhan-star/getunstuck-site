(function () {
  /* mark current article as read when 80% scrolled */
  var artBody = document.getElementById('art-body');
  if (artBody) {
    var marked = false;
    window.addEventListener('scroll', function () {
      if (marked) return;
      var rect   = artBody.getBoundingClientRect();
      var scrolled = -rect.top + window.innerHeight;
      if (scrolled / artBody.offsetHeight >= 0.8) {
        marked = true;
        localStorage.setItem('read:' + window.location.pathname, '1');
      }
    }, { passive: true });
  }

  /* mark cards on any page that lists articles */
  document.querySelectorAll('[data-read-url]').forEach(function (card) {
    if (localStorage.getItem('read:' + card.getAttribute('data-read-url'))) {
      card.classList.add('is-read');
    }
  });
})();
