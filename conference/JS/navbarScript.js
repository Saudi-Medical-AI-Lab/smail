// ── Inject Language Toggle Button into every navbar ──────────
(function injectLangToggle() {
  const navCollapse = document.getElementById('navbarNav');
  const anchor = document.getElementById('navLangAnchor');
  if (!navCollapse || !anchor) return;

  const btn = document.createElement('button');
  btn.id = 'lang-toggle-btn';
  btn.className = 'lang-toggle-btn';
  btn.type = 'button';
  btn.setAttribute('aria-label', 'Switch language');
  btn.textContent = 'AR'; // default; i18n.js updates this on load
  btn.addEventListener('click', toggleLanguage);

  anchor.appendChild(btn);
})();

// ── Close navbar when clicking outside (mobile) ──────────────
document.addEventListener('click', function (e) {
  const navbar = document.querySelector('.custom-navbar');
  const navbarCollapse = document.getElementById('navbarNav');
  if (!navbar || !navbarCollapse || !navbarCollapse.classList.contains('show')) return;
  if (!navbar.contains(e.target)) {
    const bsCollapse = window.bootstrap && bootstrap.Collapse.getInstance(navbarCollapse);
    if (bsCollapse) bsCollapse.hide();
  }
});

// ── Close navbar on close-button click (mobile) ──────────────
(function () {
  const closeBtn = document.querySelector('.close-navbar');
  const navbarCollapse = document.getElementById('navbarNav');
  if (!closeBtn || !navbarCollapse) return;

  closeBtn.addEventListener('click', function () {
    const bsCollapse = window.bootstrap && bootstrap.Collapse.getInstance(navbarCollapse);
    if (bsCollapse) bsCollapse.hide();
  });
})();
