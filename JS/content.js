// Renders people lists (board, staff, mentors, students) from data/*.json.
// Add or edit people in data/people.json and cohorts in data/cohorts.json.
(function () {
  const lang = () => localStorage.getItem('smail_lang') || 'en';
  const tr = key => {
    const t = (typeof translations !== 'undefined' && translations[lang()]) || {};
    return t[key] || key;
  };
  const loc = o => (o ? o[lang()] || o.en || '' : '');
  const get = name => fetch('data/' + name + '.json', { cache: 'no-cache' }).then(r => {
    if (!r.ok) throw new Error(name + ' ' + r.status);
    return r.json();
  });

  function make(tag, cls, text) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  }

  function nameBlock(p, headingClass) {
    const h5 = make('h5', headingClass || 'mt-3', p.name);
    if (!p.link) return h5;
    if (/linkedin\.com/i.test(p.link)) {
      h5.append(' ');
      h5.appendChild(make('i', 'bi bi-linkedin linkedin-icon'));
    }
    const a = make('a', 'mentor-profile-link h5');
    a.href = p.link;
    a.appendChild(h5);
    return a;
  }

  function card(p, group, i) {
    const wide = group === 'board';
    const col = make('div', (wide ? 'col-md-6' : 'col-md-4') + ' text-center mb-4');
    col.setAttribute('data-aos', 'fade-up');
    if (i % 3) col.setAttribute('data-aos-delay', String((i % 3) * 100));
    const img = make('img', (/-icon\.png$/i.test(p.image) ? 'circle-padding ' : '') + 'rounded-circle mentor-img');
    img.src = p.image;
    img.alt = p.name;
    col.append(img, nameBlock(p));
    if (group === 'mentor') {
      col.appendChild(make('p', '', loc(p.title)));
      const s = make('p'); s.appendChild(make('small', '', loc(p.affiliation))); col.appendChild(s);
    } else if (group === 'student') {
      col.appendChild(make('p', '', loc(p.affiliation)));
      if (p.mentor) {
        const m = make('p', 'student-mentor');
        m.appendChild(make('small', '', tr('person_mentor_label') + ' ' + p.mentor));
        col.appendChild(m);
      }
    } else if (group === 'board') {
      col.appendChild(make('p', 'text-muted mb-0', loc(p.title)));
      if (loc(p.affiliation)) col.appendChild(make('p', 'text-muted small mb-0', loc(p.affiliation)));
    }
    return col;
  }

  function row(people, group) {
    const r = make('div', 'row justify-content-center');
    people.forEach((p, i) => r.appendChild(card(p, group, i)));
    return r;
  }

  const byOrder = (a, b) => (a.order || 0) - (b.order || 0);
  let activeCohort = Number(new URLSearchParams(location.search).get('cohort')) || null; // ?cohort=3 opens that tab

  function renderCohorts(host, people, cohorts, group) {
    const list = cohorts.filter(c => c.published !== false);
    if (!list.length) return;
    if (!list.some(c => c.id === activeCohort)) activeCohort = list[0].id;
    host.textContent = '';
    const tabs = make('ul', 'nav nav-tabs cohort-tabs justify-content-center mb-4');
    tabs.setAttribute('role', 'tablist');
    const content = make('div', 'tab-content cohort-content');
    list.forEach(c => {
      const on = c.id === activeCohort;
      const li = make('li', 'nav-item'); li.setAttribute('role', 'presentation');
      const b = make('button', 'nav-link' + (on ? ' active' : ''), loc(c.label));
      b.type = 'button'; b.setAttribute('role', 'tab'); b.setAttribute('aria-selected', String(on));
      b.addEventListener('click', () => { activeCohort = c.id; renderCohorts(host, people, cohorts, group); });
      li.appendChild(b); tabs.appendChild(li);

      const pane = make('div', 'tab-pane fade' + (on ? ' show active' : ''));
      pane.setAttribute('role', 'tabpanel');
      const members = people.filter(p => p.group === group && p.cohort === c.id).sort(byOrder);
      if (!members.length) { // a cohort marked coming soon still shows its people once some are added
        pane.appendChild(make('p', 'text-center text-muted h4 py-5', tr('coming_soon')));
      } else {
        pane.appendChild(row(members, group));
      }
      content.appendChild(pane);
    });
    host.append(tabs, content);
  }

  function render(people, cohorts) {
    document.querySelectorAll('[data-people]').forEach(host => {
      const group = host.getAttribute('data-people');
      if (host.hasAttribute('data-by-cohort')) {
        renderCohorts(host, people, cohorts, group);
      } else {
        host.textContent = '';
        host.appendChild(row(people.filter(p => p.group === group).sort(byOrder), group));
      }
    });
    if (window.AOS) (AOS.refreshHard || AOS.refresh)();
  }

  function fail() {
    document.querySelectorAll('[data-people]').forEach(h => {
      h.textContent = '';
      h.appendChild(make('p', 'text-center text-muted py-5', tr('content_error')));
    });
  }

  // ── News and banner ────────────────────────────────────────
  function fmtDate(d, long) {
    const [y, m] = String(d).split('-').map(Number);
    if (!m) return String(y);
    const l = lang() === 'ar' ? 'ar-u-ca-gregory-nu-latn' : 'en';
    const s = new Intl.DateTimeFormat(l, { month: long ? 'long' : 'short', year: 'numeric', timeZone: 'UTC' })
      .format(new Date(Date.UTC(y, m - 1, 1)));
    return s;
  }
  function newsLink(n, cls) {
    const a = make('a', cls);
    a.href = n.link;
    if (n.external) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
    return a;
  }
  function newsCard(n, text, i) {
    const a = newsLink(n, 'news-card' + (n.tag === 'event' ? ' news-card-event' : ''));
    a.setAttribute('data-aos', 'fade-up');
    if (i) a.setAttribute('data-aos-delay', String(Math.min(i, 4) * 50));
    const top = make('div', 'news-card-top');
    top.appendChild(make('span', 'news-tag news-tag-' + n.tag, tr('news_tag_' + n.tag)));
    if (n.logo) {
      const img = make('img', 'news-partner-logo news-partner-logo-sm');
      img.src = n.logo; img.alt = loc(n.title);
      top.appendChild(img);
    } else {
      top.appendChild(make('span', 'news-date', fmtDate(n.date)));
    }
    a.append(top, make('h3', '', loc(n.title)), make('p', '', text));
    return a;
  }
  function featuredCard(n) {
    const a = newsLink(n, 'news-featured');
    a.setAttribute('data-aos', 'fade-up');
    const date = make('div', 'news-featured-date');
    const [y, m] = String(n.date).split('-');
    date.append(
      make('span', 'news-dateline', m ? fmtDate(n.date, lang() === 'ar').split(' ')[0].replace(/\.$/, '').toUpperCase() : ''),
      make('span', 'news-dateline-year', y));
    const body = make('div', 'news-featured-body');
    const top = make('div', 'news-featured-top');
    top.appendChild(make('span', 'news-tag news-tag-' + n.tag, tr('news_tag_' + n.tag)));
    body.append(top, make('h2', '', loc(n.title)), make('p', '', loc(n.body) || loc(n.summary)));
    a.append(date, body);
    return a;
  }
  function renderNews(items) {
    items = items.filter(n => n.published !== false).sort(byOrder);
    document.querySelectorAll('[data-news]').forEach(host => {
      const kind = host.getAttribute('data-news');
      host.textContent = '';
      if (kind === 'featured') {
        const f = items.find(n => n.featured);
        if (f) host.appendChild(featuredCard(f));
      } else if (kind === 'grid') {
        items.filter(n => !n.featured).forEach((n, i) => host.appendChild(newsCard(n, loc(n.body) || loc(n.summary), i)));
      } else if (kind === 'teaser') {
        items.slice(0, 3).forEach((n, i) => host.appendChild(newsCard(n, loc(n.summary) || loc(n.body), i)));
      }
    });
    if (window.AOS) (AOS.refreshHard || AOS.refresh)();
  }
  function renderBanner(site) {
    const bar = document.getElementById('announcementBar');
    const p = bar && bar.querySelector('[data-banner]');
    if (!p) return;
    const b = site.banner;
    if (!b || b.published === false) { bar.style.display = 'none'; return; }
    p.textContent = loc(b.text) + ' ';
    if (b.link && loc(b.linkText)) {
      const a = make('a', '', loc(b.linkText));
      a.href = b.link;
      a.style.color = '#920e0e'; a.style.textDecoration = 'underline';
      p.appendChild(a);
    }
  }

  // ── Start: each module loads only where the page has a slot for it ──
  const has = sel => document.querySelector(sel);
  if (has('[data-people]')) {
    Promise.all([get('people'), get('cohorts')]).then(([people, cohorts]) => {
      people = people.filter(p => p.published !== false);
      const go = () => render(people, cohorts);
      go();
      document.addEventListener('smail:langchange', go);
    }).catch(fail);
  }
  if (has('[data-stat]')) {
    // Homepage counters follow the data (static text stays as the fallback). Shown as "N+".
    get('people').then(people => {
      document.querySelectorAll('[data-stat]').forEach(el => {
        const n = people.filter(p => p.published !== false && p.group === el.getAttribute('data-stat')).length;
        if (n) el.textContent = n + '+';
      });
    }).catch(() => {});
  }
  if (has('[data-news]')) {
    get('news').then(items => {
      const go = () => renderNews(items);
      go();
      document.addEventListener('smail:langchange', go);
    }).catch(() => {});
  }
  if (has('[data-banner]')) {
    get('site').then(site => {
      const go = () => renderBanner(site);
      go();
      document.addEventListener('smail:langchange', go);
    }).catch(() => {});
  }
})();
