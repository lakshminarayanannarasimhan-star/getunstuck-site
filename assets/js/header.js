(function () {
  var header = document.querySelector('.header');
  if (!header) return;
  function update() {
    header.classList.toggle('scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
})();
