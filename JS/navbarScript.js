// ── Inject Language Toggle Button into every navbar ──────────
(function injectLangToggle() {
  const navCollapse = document.getElementById('navbarNav');
  if (!navCollapse) return;

  const btn = document.createElement('button');
  btn.id = 'lang-toggle-btn';
  btn.className = 'lang-toggle-btn';
  btn.setAttribute('aria-label', 'Switch language');
  btn.textContent = 'AR'; // default; i18n.js will update on load
  btn.addEventListener('click', toggleLanguage);

  // Insert right before the SDAIA logo links (last children of navCollapse)
  navCollapse.insertBefore(btn, navCollapse.querySelector('a[href*="sdaia"]'));
})();

// ── Close navbar when clicking outside (mobile) ──────────────
document.addEventListener('click', function (e) {
  const navbar = document.querySelector('.custom-navbar');
  const navbarCollapse = document.getElementById('navbarNav');
  if (!navbarCollapse || !navbarCollapse.classList.contains('show')) return;
  if (!navbar.contains(e.target)) {
    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
    if (bsCollapse) bsCollapse.hide();
  }
});

// ── Close navbar on close-button click (mobile) ──────────────
const closeBtn = document.querySelector('.close-navbar');
const navbarCollapse = document.getElementById('navbarNav');

if (closeBtn && navbarCollapse) {
  closeBtn.addEventListener('click', () => {
    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
    if (bsCollapse) bsCollapse.hide();
  });
}
