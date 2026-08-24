// Live countdown to the conference's PROPOSED date (not yet committee-final — see
// venue-travel.html / the homepage note). Reads the target from the element's
// data-target attribute (ISO 8601) so the date lives in markup, not duplicated in JS.
(function () {
  function pad(n) { return String(n).padStart(2, '0'); }

  function tick(el, targetTime) {
    const now = Date.now();
    const diff = targetTime - now;

    const daysEl = el.querySelector('[data-unit="days"]');
    const hoursEl = el.querySelector('[data-unit="hours"]');
    const minsEl = el.querySelector('[data-unit="minutes"]');
    const secsEl = el.querySelector('[data-unit="seconds"]');

    if (diff <= 0) {
      if (daysEl) daysEl.textContent = '00';
      if (hoursEl) hoursEl.textContent = '00';
      if (minsEl) minsEl.textContent = '00';
      if (secsEl) secsEl.textContent = '00';
      return;
    }

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);

    if (daysEl) daysEl.textContent = pad(days);
    if (hoursEl) hoursEl.textContent = pad(hours);
    if (minsEl) minsEl.textContent = pad(mins);
    if (secsEl) secsEl.textContent = pad(secs);
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-countdown]').forEach(function (el) {
      const target = Date.parse(el.getAttribute('data-target'));
      if (Number.isNaN(target)) return;
      tick(el, target);
      setInterval(function () { tick(el, target); }, 1000);
    });
  });
})();
