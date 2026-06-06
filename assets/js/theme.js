// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('menu-toggle');
  var nav    = document.getElementById('nav');
  var overlay = document.getElementById('nav-overlay');

  function openNav()  { nav.classList.add('open'); overlay.classList.add('open'); }
  function closeNav() { nav.classList.remove('open'); overlay.classList.remove('open'); }

  if (toggle) toggle.addEventListener('click', function () {
    nav.classList.contains('open') ? closeNav() : openNav();
  });
  if (overlay) overlay.addEventListener('click', closeNav);

  // Mobile dropdown tap
  document.querySelectorAll('.has-dropdown').forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        link.closest('.nav-item').classList.toggle('open');
      }
    });
  });
});
