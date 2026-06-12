(function () {
  if (!window.speechSynthesis) return;

  var playBtn  = document.getElementById('audio-play');
  var stopBtn  = document.getElementById('audio-stop');
  var speedSel = document.getElementById('audio-speed');
  var statusEl = document.getElementById('audio-status');
  var body     = document.getElementById('art-body');
  if (!playBtn || !body) return;

  var iconPlay  = playBtn.querySelector('.icon-play');
  var iconPause = playBtn.querySelector('.icon-pause');
  var btnLabel  = playBtn.querySelector('.audio-btn-label');

  var playing = false;
  var paused  = false;

  function getText() {
    var clone = body.cloneNode(true);
    clone.querySelectorAll('code, pre, figcaption, .art-bib-list, sup').forEach(function (el) {
      el.remove();
    });
    return (clone.innerText || clone.textContent || '').replace(/\s+/g, ' ').trim();
  }

  function setStatus(msg) {
    if (statusEl) statusEl.textContent = msg;
  }

  function showPause() {
    if (iconPlay)  iconPlay.style.display  = 'none';
    if (iconPause) iconPause.style.display = '';
    if (btnLabel)  btnLabel.textContent    = 'Pause';
    playBtn.setAttribute('aria-label', 'Pause');
    if (stopBtn) stopBtn.disabled = false;
  }

  function showPlay(label) {
    if (iconPlay)  iconPlay.style.display  = '';
    if (iconPause) iconPause.style.display = 'none';
    if (btnLabel)  btnLabel.textContent    = label || 'Play';
    playBtn.setAttribute('aria-label', label || 'Play');
  }

  function stop() {
    window.speechSynthesis.cancel();
    playing = false;
    paused  = false;
    showPlay('Play');
    if (stopBtn) stopBtn.disabled = true;
    setStatus('');
  }

  function startSpeaking() {
    var text = getText();
    if (!text) { setStatus('No text found'); return; }

    var utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = parseFloat(speedSel ? speedSel.value : '1');

    /* pick an English voice if available, otherwise use default */
    var voices = window.speechSynthesis.getVoices();
    var enVoice = voices.find(function (v) { return /en/i.test(v.lang); });
    if (enVoice) utterance.voice = enVoice;

    utterance.onstart = function () {
      playing = true;
      paused  = false;
      showPause();
      setStatus('Reading…');
    };
    utterance.onend = function () {
      stop();
      setStatus('Done');
      setTimeout(function () { setStatus(''); }, 3000);
    };
    utterance.onerror = function (e) {
      if (e.error !== 'interrupted') { stop(); setStatus(''); }
    };

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }

  function play() {
    /* voices may not be ready yet — wait if needed */
    var voices = window.speechSynthesis.getVoices();
    if (voices.length === 0) {
      window.speechSynthesis.addEventListener('voiceschanged', function onVoices() {
        window.speechSynthesis.removeEventListener('voiceschanged', onVoices);
        startSpeaking();
      });
    } else {
      startSpeaking();
    }
  }

  playBtn.addEventListener('click', function () {
    if (!playing && !paused) {
      play();
    } else if (playing) {
      window.speechSynthesis.pause();
      playing = false;
      paused  = true;
      showPlay('Resume');
      setStatus('Paused');
    } else {
      window.speechSynthesis.resume();
      paused  = false;
      playing = true;
      showPause();
      setStatus('Reading…');
    }
  });

  if (stopBtn) stopBtn.addEventListener('click', stop);

  if (speedSel) {
    speedSel.addEventListener('change', function () {
      if (playing || paused) { stop(); play(); }
    });
  }

  /* Chrome pauses synthesis after ~15 s — keep it alive */
  setInterval(function () {
    if (playing && window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
      window.speechSynthesis.pause();
      window.speechSynthesis.resume();
    }
  }, 10000);
})();
