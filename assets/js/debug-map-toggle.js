(function () {
  if (window.__jmDebugMapToggleInit) return;
  window.__jmDebugMapToggleInit = true;

  var storageKey = 'jm-debug-map-enabled';
  var body = document.body;
  if (!body) return;

  var button = document.createElement('button');
  button.type = 'button';
  button.className = 'jm-debug-map-toggle';
  button.setAttribute('aria-label', 'Toggle debug map mode');
  button.setAttribute('title', 'Toggle debug map mode');
  button.textContent = 'Map';

  function setState(enabled) {
    body.classList.toggle('jm-debug-map', enabled);
    button.setAttribute('aria-pressed', enabled ? 'true' : 'false');
    if (enabled) {
      localStorage.setItem(storageKey, '1');
      button.classList.add('is-active');
    } else {
      localStorage.removeItem(storageKey);
      button.classList.remove('is-active');
    }
  }

  var enabledByDefault = localStorage.getItem(storageKey) === '1';
  setState(enabledByDefault);

  button.addEventListener('click', function () {
    setState(!body.classList.contains('jm-debug-map'));
  });

  body.appendChild(button);
})();
