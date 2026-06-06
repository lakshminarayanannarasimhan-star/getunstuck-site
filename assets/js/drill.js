// Drill toggle — reveal/hide answer
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.drill-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var answer = btn.nextElementSibling;
      if (!answer) return;
      var open = answer.classList.toggle('open');
      btn.textContent = open ? 'Hide Answer' : 'Show Answer';
    });
  });
});
