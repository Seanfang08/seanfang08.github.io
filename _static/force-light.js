(function () {
  try {
    document.documentElement.setAttribute('data-theme', 'light');
    // Persist preference across page loads and devices that auto-set dark
    window.localStorage.setItem('mode', 'light');
    window.localStorage.setItem('theme', 'light');
  } catch (e) {
    /* storage not available; ignore */
  }
})();

