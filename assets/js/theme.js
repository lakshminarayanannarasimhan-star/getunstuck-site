/* ── Dark mode toggle ── */
(function () {
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;
  var defaultTheme = btn.getAttribute('data-default-theme') || 'dojo';
  var isDark = localStorage.getItem('unstuck_dark') === '1';
  function apply(dark) {
    document.documentElement.setAttribute('data-theme', dark ? 'midnight' : defaultTheme);
    btn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    btn.setAttribute('title',      dark ? 'Switch to light mode' : 'Switch to dark mode');
    btn.classList.toggle('is-dark', dark);
  }
  apply(isDark);
  btn.addEventListener('click', function () {
    isDark = !isDark;
    localStorage.setItem('unstuck_dark', isDark ? '1' : '0');
    apply(isDark);
  });
})();

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('menu-toggle');
  var nav    = document.getElementById('nav');
  var overlay = document.getElementById('nav-overlay');

  function openNav()  { nav.classList.add('open'); overlay.classList.add('open'); toggle.setAttribute('aria-expanded', 'true'); toggle.setAttribute('aria-label', 'Close menu'); }
  function closeNav() { nav.classList.remove('open'); overlay.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Open menu'); }

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
