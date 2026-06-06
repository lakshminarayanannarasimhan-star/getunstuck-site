(function () {

  function initCarousel() {
    var carousel = document.getElementById('liCarousel');
    var track    = document.getElementById('liTrack');
    var prev     = document.getElementById('liPrev');
    var next     = document.getElementById('liNext');
    var dotsEl   = document.getElementById('liDots');

    if (!carousel || !track) return;

    var slides  = track.querySelectorAll('.li-slide');
    var dots    = dotsEl ? dotsEl.querySelectorAll('.li-dot') : [];
    var total   = slides.length;
    var current = 0;
    var timer;
    var ready   = false;

    if (total < 1) return;

    function setSizes() {
      var w = carousel.getBoundingClientRect().width;
      if (!w) return false;           // not painted yet
      track.style.width     = (w * total) + 'px';
      track.style.transform = 'translateX(-' + (current * w) + 'px)';
      slides.forEach(function (s) {
        s.style.width      = w + 'px';
        s.style.flexShrink = '0';
      });
      return true;
    }

    function goTo(n) {
      current = (n + total) % total;
      var w = carousel.getBoundingClientRect().width;
      track.style.transform = 'translateX(-' + (current * w) + 'px)';
      dots.forEach(function (d, i) {
        d.classList.toggle('active', i === current);
      });
    }

    function startAuto() {
      clearInterval(timer);
      if (total > 1) timer = setInterval(function () { goTo(current + 1); }, 4000);
    }

    function stopAuto() { clearInterval(timer); }

    function activate() {
      if (ready) return;
      if (!setSizes()) return;
      ready = true;

      if (prev) prev.addEventListener('click', function () { stopAuto(); goTo(current - 1); startAuto(); });
      if (next) next.addEventListener('click', function () { stopAuto(); goTo(current + 1); startAuto(); });

      dots.forEach(function (d) {
        d.addEventListener('click', function () {
          stopAuto();
          goTo(parseInt(d.dataset.index, 10));
          startAuto();
        });
      });

      // Touch / swipe
      var startX = 0;
      track.addEventListener('touchstart', function (e) {
        startX = e.touches[0].clientX;
      }, { passive: true });
      track.addEventListener('touchend', function (e) {
        var diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) { stopAuto(); goTo(current + (diff > 0 ? 1 : -1)); startAuto(); }
      }, { passive: true });

      window.addEventListener('resize', function () { setSizes(); goTo(current); });

      startAuto();
    }

    // Primary: ResizeObserver fires as soon as element has a real width
    if (window.ResizeObserver) {
      var ro = new ResizeObserver(function (entries) {
        if (entries[0].contentRect.width > 0) {
          activate();
          if (ready) ro.disconnect();
        }
      });
      ro.observe(carousel);
    }

    // Fallback: try after load + next frame + 100ms grace period
    function tryActivate() {
      requestAnimationFrame(function () {
        setTimeout(activate, 100);
      });
    }

    if (document.readyState === 'complete') {
      tryActivate();
    } else {
      window.addEventListener('load', tryActivate);
    }
  }

  // Kick off after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCarousel);
  } else {
    initCarousel();
  }

}());
