(function () {
  function initCarousel() {
    var carousel = document.getElementById('liCarousel');
    var track    = document.getElementById('liTrack');
    var prev     = document.getElementById('liPrev');
    var next     = document.getElementById('liNext');
    var dotsEl   = document.getElementById('liDots');

    if (!track) return;

    var slides  = track.querySelectorAll('.li-slide');
    var dots    = dotsEl ? dotsEl.querySelectorAll('.li-dot') : [];
    var total   = slides.length;
    var current = 0;
    var timer;

    if (total <= 1) return; // nothing to carousel

    // Force each slide to exactly the carousel width
    function setSizes() {
      var w = carousel.offsetWidth;
      track.style.width = (w * total) + 'px';
      slides.forEach(function (s) {
        s.style.width = w + 'px';
        s.style.flexShrink = '0';
      });
    }

    function goTo(n) {
      current = (n + total) % total;
      var w = carousel.offsetWidth;
      track.style.transform = 'translateX(-' + (current * w) + 'px)';
      dots.forEach(function (d, i) {
        d.classList.toggle('active', i === current);
      });
    }

    function autoPlay() {
      timer = setInterval(function () { goTo(current + 1); }, 4000);
    }

    function stopAuto() { clearInterval(timer); }

    // Recalculate on resize
    window.addEventListener('resize', function () {
      setSizes();
      goTo(current);
    });

    setSizes();
    goTo(0);

    if (prev) prev.addEventListener('click', function () { stopAuto(); goTo(current - 1); autoPlay(); });
    if (next) next.addEventListener('click', function () { stopAuto(); goTo(current + 1); autoPlay(); });

    dots.forEach(function (d) {
      d.addEventListener('click', function () {
        stopAuto();
        goTo(parseInt(d.dataset.index, 10));
        autoPlay();
      });
    });

    // Touch swipe
    var startX = 0;
    track.addEventListener('touchstart', function (e) {
      startX = e.touches[0].clientX;
    }, { passive: true });
    track.addEventListener('touchend', function (e) {
      var diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) {
        stopAuto();
        goTo(current + (diff > 0 ? 1 : -1));
        autoPlay();
      }
    }, { passive: true });

    autoPlay();
  }

  // Wait for full page load so image dimensions are known
  if (document.readyState === 'complete') {
    initCarousel();
  } else {
    window.addEventListener('load', initCarousel);
  }
}());
