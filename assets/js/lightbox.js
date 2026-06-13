(function () {
  var artBody = document.getElementById('art-body');
  if (!artBody) return;
  var imgs = artBody.querySelectorAll('img');
  if (!imgs.length) return;

  var lb    = document.getElementById('lightbox');
  var lbImg = document.getElementById('lightbox-img');
  var lbCap = document.getElementById('lightbox-caption');
  if (!lb || !lbImg) return;

  function open(src, alt, caption) {
    lbImg.src = src;
    lbImg.alt = alt || '';
    if (lbCap) lbCap.textContent = caption || '';
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
    lb.focus();
  }

  function close() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
    lbImg.src = '';
  }

  imgs.forEach(function (img) {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', function () {
      var fig     = img.closest('figure');
      var capEl   = fig ? fig.querySelector('figcaption') : null;
      open(img.src, img.alt, capEl ? capEl.textContent : '');
    });
  });

  lb.addEventListener('click', function (e) {
    if (e.target === lb || e.target.id === 'lightbox-close') close();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lb.classList.contains('open')) close();
  });
})();
