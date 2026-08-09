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

// ── Scroll to homepage sections without ever showing a # in the URL ──
(function anchorScrollNoHash() {
  const SCROLL_KEY = 'smail-scroll-target';

  function isHomePath(pathname) {
    return pathname === '/' || pathname.endsWith('/index.html');
  }

  function scrollToId(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'auto', block: 'start' });
  }

  document.querySelectorAll('a[href]').forEach(function (link) {
    const href = link.getAttribute('href');
    let targetId = null;

    if (href.startsWith('#') && href.length > 1) {
      targetId = href.slice(1);
    } else if (href.startsWith('/#')) {
      targetId = href.slice(2);
    } else {
      return;
    }

    link.addEventListener('click', function (e) {
      e.preventDefault();
      if (isHomePath(location.pathname)) {
        scrollToId(targetId);
      } else {
        sessionStorage.setItem(SCROLL_KEY, targetId);
        window.location.href = '/';
      }
    });
  });

  if (isHomePath(location.pathname)) {
    const pending = sessionStorage.getItem(SCROLL_KEY);
    if (pending) {
      sessionStorage.removeItem(SCROLL_KEY);
      setTimeout(function () { scrollToId(pending); }, 100);
    }
  }
})();
