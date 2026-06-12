(function () {
  var bar = document.querySelector('.art-share');
  if (!bar) return;

  var url   = bar.dataset.shareUrl;
  var title = bar.dataset.shareTitle;
  if (!url) return;

  var li = bar.querySelector('.art-share-linkedin');
  if (li) li.href = 'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(url);

  var wa = bar.querySelector('.art-share-whatsapp');
  if (wa) wa.href = 'https://wa.me/?text=' + encodeURIComponent(title + ' ' + url);

  var cp = bar.querySelector('.art-share-copy');
  if (cp) {
    cp.addEventListener('click', function () {
      navigator.clipboard.writeText(url).then(function () {
        cp.textContent = 'Copied!';
        setTimeout(function () { cp.innerHTML = '🔗 Copy link'; }, 2000);
      }).catch(function () {
        /* fallback for older browsers */
        var ta = document.createElement('textarea');
        ta.value = url;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        cp.textContent = 'Copied!';
        setTimeout(function () { cp.innerHTML = '🔗 Copy link'; }, 2000);
      });
    });
  }
})();
