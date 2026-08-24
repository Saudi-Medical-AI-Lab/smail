document.addEventListener('DOMContentLoaded', function () {
  // Inject shared footer, then re-apply the current language: elements added via
  // innerHTML after the initial i18n pass never get translated otherwise (a <script>
  // tag inside fetched HTML does not execute when inserted through innerHTML).
  const placeholder = document.getElementById('footer-placeholder');
  if (placeholder) {
    fetch('footer.html')
      .then(function (r) { return r.text(); })
      .then(function (html) {
        placeholder.innerHTML = html;
        if (typeof applyLanguage === 'function') {
          applyLanguage(localStorage.getItem('smail_lang') || 'en');
        }
      })
      .catch(function (e) { console.error('Error loading footer:', e); });
  }

  // FAQ-style accordion (bypasses Bootstrap's Collapse JS; .accordion-collapse is
  // display:none by default in styles.css so it never flashes open before JS runs)
  document.querySelectorAll('.accordion-custom .accordion-button').forEach(function (button) {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(button.getAttribute('data-bs-target'));
      if (!target) return;
      const isOpen = target.classList.contains('show');
      const accordion = button.closest('.accordion');
      if (accordion) {
        accordion.querySelectorAll('.accordion-collapse').forEach(function (c) { c.classList.remove('show'); });
        accordion.querySelectorAll('.accordion-button').forEach(function (b) { b.classList.add('collapsed'); });
      }
      if (!isOpen) { target.classList.add('show'); button.classList.remove('collapsed'); }
    });
  });
});
