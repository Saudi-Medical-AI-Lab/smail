// ============================================================
//  SMAIL – Internationalization (EN / AR)
//  Usage: add data-i18n="key" to any element.
//  The script reads the saved lang from localStorage,
//  applies translations, and flips dir="rtl" on <html>.
// ============================================================

const translations = {
  en: {
    // ── Navbar ──────────────────────────────────────────────
    nav_home:         'Home',
    nav_about:        'About',
    nav_program:      'Program',
    nav_community:    'Community',
    nav_students:     'Students',
    nav_mentors:      'Mentors',
    nav_staff:        'Staff',
    nav_publications: 'Publications',
    nav_faq:          'FAQ',

    // ── Footer ──────────────────────────────────────────────
    footer_tagline:   'Empowering tomorrow\'s innovators to reshape healthcare through AI-driven research.',
    footer_contact:   'Contact Us',
    footer_copyright: '© 2026 Specialized Medical AI Lab. All Rights Reserved.',
    footer_license:   'Licence No. 1100542400.',

    // ── index.html ──────────────────────────────────────────
    hero_title:       'BRIDGING MINDS IN<br><span class="accent-red">SAUDI HEALTHCARE</span>',
    hero_subtitle:    'Connecting Saudi talent with global expertise to transform healthcare with AI.',
    btn_apply:        'Apply for Research',
    btn_mentor:       'Join as a Mentor',
    btn_staff:        'Join as Staff',

    about_badge:      'ABOUT US',
    about_heading:    'Empowering Innovation in <span class="accent-red">Medical AI</span>',
    about_desc:       'The Saudi Medical AI Research Lab (SMAIL) is an open, volunteer-driven research program that supports students in Saudi universities to conduct AI for health research with experienced mentors worldwide.',

    stat_mentors:     'Mentors',
    stat_students:    'Students',
    stat_publication: 'Publication',

    program_badge:    'PROGRAM HIGHLIGHTS',
    program_heading:  'Program at a <span class="accent-red">Glance</span>',
    prog_duration_title: '6 Months Duration',
    prog_duration_desc:  'Structured research program.',
    prog_remote_title:   'Fully remote',
    prog_remote_desc:    'Join from anywhere.',
    prog_who_title:      'Who Can Join',
    prog_who_desc:       'Saudi university students & global mentors.',
    prog_fields_title:   'Key Research Fields',
    prog_fields_desc:    'Medical Imaging, Bioinformatics, Genomics, and more.',

    community_heading:   'Saudi <span class="accent-red">Community Network</span>',
    community_desc:      'Explore each region to learn more about the student participation across Saudi Arabia\'s regions.',

    tooltip_students: "Students",
    tooltip_percentage: "Percentage",

    region_riyadh: "Riyadh Region",
    region_makkah: "Makkah Region",
    region_madinah: "Madinah Region",
    region_eastern: "Eastern Region",
    region_qassim: "Qassim Region",
    region_hail: "Hail Region",
    region_asir: "Asir Region",
    region_tabuk: "Tabuk Region",
    region_northern_borders: "Northern Borders Region",
    region_jazan: "Jazan Region",
    region_najran: "Najran Region",
    region_al_baha: "Al Baha Region",
    region_al_jouf: "Al Jouf Region",

    unis_heading: 'Mentors from <span class="accent-red">Top Universities & Institutions</span>',

    app_badge:'APPLICATION',
    app_heading: 'Ready to Shape The <span class="accent-red">Future of Medicine?</span>',

    badge_students: "For Students",
    student_heading: "Join as a Talented Researcher",
    student_description: "Join us as a researcher and receive personalized guidance for contributing to leading medical research.",
    student_feat_1: "Personalized Guidance",
    student_feat_2: "Flexible Remote Supervision",
    student_feat_3: "Global Academic Network",
    student_app_label: "Students Application Period",
    student_date: "From July 7 to July 31, 2026",
    
    badge_mentors: "For Mentors",
    mentor_heading: "Share Your Expertise and Create Impact",
    mentor_description: "Join as a mentor and guide the next generation of medical researchers in advancing AI-driven healthcare solutions.",
    mentor_feat_1: "Leading Medical Research",
    mentor_feat_2: "Expanding Global Collaboration",
    mentor_feat_3: "Inspiring and Guiding Talented Students",
    mentor_app_label: "Mentor Application Period",
    mentor_date: "From June 21 to July 31, 2026",
    
    cohort_title: "3rd Cohort",
    opening_soon: "Registration is Opening Soon",

    sponsor_badge: "SPONSORSHIP",
    sponsor_heading: "Invest in the Next Generation of Researchers",
    sponsor_description: "Join us as an official sponsor to empower young national talents and accelerate pioneering AI-driven medical research.",
    sponsor_btn: "Become an Official Sponsor",

    faq_cta_heading:     'Still have questions?',
    faq_cta_desc:        'Visit our <a href="./FAQ.html" class="faq-inline-link">FAQ page</a> to find the answers you\'re looking for.',

    // ── FAQ.html ─────────────────────────────────────────────
    faq_heading:       'Frequently Asked <span class="accent-red">Questions</span>',
    faq_q1:  'How long is the program?',
    faq_a1:  'The program is officially 6 months but can be extended depending on the project and mentor.',
    faq_q2:  'What is the time commitment?',
    faq_a2:  'We expect students to commit on average 15 hours a week for the program, as good research requires a lot of commitment. This is on average, we understand that students are busy and will commit less during exam and holiday weeks.',
    faq_q3:  'I am a Saudi studying at an international university, am I eligible for the program?',
    faq_a3:  'Currently, we only focus on students in Saudi universities due to the limited access for research opportunities in those universities.',
    faq_q4:  'Will I get a research paper from this?',
    faq_a4:  'Our goal is that all of our students end up with a first author paper. However, that depends a lot on the project, the mentor, and your commitment.',

    // ── papers.html ──────────────────────────────────────────
    pub_heading:       'Our <span class="accent-red">Publications</span>',
    pub_desc:          'Accepted and published papers from our program\'s cohorts.',
    pub_authors_label: 'Authors:',

    // ── mentors.html ─────────────────────────────────────────
    mentors_heading:   'Our <span class="accent-red">Mentors</span>',
    cohort_1_tab:      'Cohort 1',
    cohort_2_tab:      'Cohort 2',

    // ── students.html ────────────────────────────────────────
    students_heading:  'Our <span class="accent-red">Students</span>',

    // ── staff.html ───────────────────────────────────────────
    staff_heading:     'Our <span class="accent-red">Staff</span>',
    staff_alumni_heading: 'Staff <span class="accent-red">Alumni</span>',

    // ── Lang switcher label ──────────────────────────────────
    lang_toggle_label: 'AR',
  },

  ar: {
    // ── Navbar ──────────────────────────────────────────────
    nav_home:         'الرئيسية',
    nav_about:        'من نحن',
    nav_program:      'البرنامج',
    nav_community:    'المجتمع',
    nav_students:     'الطلاب',
    nav_mentors:      'المرشدون',
    nav_staff:        'الفريق',
    nav_publications: 'المنشورات',
    nav_faq:          'الأسئلة الشائعة',

    // ── Footer ──────────────────────────────────────────────
    footer_tagline:   'نُمكّن مبتكري الغد لإعادة تشكيل الرعاية الصحية من خلال البحث المدعوم بالذكاء الاصطناعي.',
    footer_license:   'رقم الترخيص: 1100542400.',
    footer_contact:   'تواصل معنا',
    footer_copyright: '© 2026 Specialized Medical AI Lab. All Rights Reserved.',

    // ── index.html ──────────────────────────────────────────
    hero_title:       'تمكين الابتكار في<br><span class="accent-red">الرعاية الصحية السعودية</span>',
    hero_subtitle:    'نُمكّن المواهب السعودية من المساهمة في تطوير مستقبل الذكاء الاصطناعي الطبي',
    btn_apply:        'انضم إلى البرنامج',
    btn_mentor:       'انضم كمرشد',
    btn_staff:        'انضم كمتطوع',

    about_badge:      'من نحن',
    about_heading:    'تعزيز الابتكار في <span class="accent-red">الذكاء الاصطناعي الطبي</span>',
    about_desc:       'مختبر الذكاء الاصطناعي الطبي السعودي (SMAIL) هو برنامج بحثي مفتوح قائم على العمل التطوعي، يهدف إلى تمكين طلاب الجامعات السعودية من المشاركة في أبحاث الذكاء الاصطناعي الطبي تحت إشراف نخبة من الخبراء والمرشدين',

    stat_mentors:     'مرشد',
    stat_students:    'طالب',
    stat_publication: 'منشور بحثي',

    program_badge:    'تفاصيل البرنامج',
    program_heading:  'نظرة عامة على <span class="accent-red">البرنامج</span>',
    prog_duration_title: ' المدة و المنهجية',
    prog_duration_desc:  "برنامج بحثي يمتد لمدة 6 أشهر",
    prog_remote_title:   'المرونة و الوصول',
    prog_remote_desc:    'يُعقد البرنامج عن بُعد بالكامل',
    prog_who_title:      'من يمكنه الانضمام؟',
    prog_who_desc:       'طلاب الجامعات السعودية والخبراء من مختلف أنحاء العالم',
    prog_fields_title:   'مجالات البحث الرئيسية',
    prog_fields_desc:    'التصوير الطبي، المعلوماتية الحيوية، علم الجينوم، وغيرها',

    community_heading:   'المجتمع <span class="accent-red">الطلابي السعودي</span>',
    community_desc:     'استكشف مناطق المملكة وتعرّف على مشاركة الطلاب في كل منطقة',  

    tooltip_students: "الطلاب",
    tooltip_percentage: "نسبة المشاركة",

    region_riyadh: "منطقة الرياض",
    region_makkah: "منطقة مكة المكرمة",
    region_madinah: "منطقة المدينة المنورة",
    region_eastern: "المنطقة الشرقية",
    region_qassim: "منطقة القصيم",
    region_hail: "منطقة حائل",
    region_asir: "منطقة عسير",
    region_tabuk: "منطقة تبوك",
    region_northern_borders: "منطقة الحدود الشمالية",
    region_jazan: "منطقة جازان",
    region_najran: "منطقة نجران",
    region_al_baha: "منطقة الباحة",
    region_al_jouf: "منطقة الجوف",

    unis_heading:        'خبرائنا من <span class="accent-red">أفضل الجامعات</span>',

    app_badge:           'التسجيل',
    app_heading:         'هل أنت مستعد للمساهمة <span class="accent-red">في مستقبل الطب؟</span>',
  
    badge_students: "للطلاب",
    student_heading: "انضم كباحث متميز",
    student_description: "انضم إلينا كباحث، واحصل على توجيه مخصص للمساهمة في نشر أبحاث طبية رائدة عبر تقنيات الذكاء الاصطناعي.",
    student_feat_1: "توجيه مخصص خطوة بخطوة",
    student_feat_2: "إشراف مرن عن بُعد",
    student_feat_3: "شبكة أكاديمية عالمية",
    student_app_label: "فترة استقبال طلبات الطلاب",
    student_date: "من 7 يوليو إلى 31 يوليو 2026",
    
    badge_mentors: "للمرشدين",
    mentor_heading: "شارك خبرتك واصنع الأثر",
    mentor_description: "انضم كمرشد وموجه عالمي للمساهمة في قيادة أبحاث الذكاء الاصطناعي وصياغة حلول الرعاية الصحية الذكية للجيل القادم.",
    mentor_feat_1: "قيادة وتوجيه أبحاث طبية رائدة",
    mentor_feat_2: "توسيع شبكة التعاون مع خبراء دوليين",
    mentor_feat_3: "إلهام المواهب الطلابية الواعدة وتوجيهها",
    mentor_app_label: "فترة تسجيل المرشدين",
    mentor_date: "من 21 يونيو إلى 31 يوليو 2026",
    
    cohort_title: "الدفعة الثالثة",
    opening_soon: "التسجيل يُتاح قريبًا",

    sponsor_badge: "رعاية البرنامج",
    sponsor_heading: "استثمر في الجيل القادم من الباحثين",
    sponsor_description: "ندعوكم للانضمام كراعي رسمي لتمكين الكفاءات الوطنية الشابة وتسريع عجلة الأبحاث الطبية الرائدة المدعومة بالذكاء الاصطناعي.",
    sponsor_btn: "انضم كراعي رسمي  ",

    faq_cta_heading:     'هل لديك أسئلة أخرى؟',
    faq_cta_desc:        'قم بزيارة <a href="./FAQ.html" class="faq-inline-link">صفحة الأسئلة الشائعة</a> للعثور على الإجابات',

    // ── FAQ.html ─────────────────────────────────────────────
    faq_heading:       'الأسئلة <span class="accent-red">الشائعة</span>',
    faq_q1:  'ما مدة البرنامج؟',
    faq_a1:  'البرنامج رسمياً 6 أشهر، غير أنه قابل للتمديد حسب المشروع والمرشد.',
    faq_q2:  'ما مقدار الوقت المطلوب؟',
    faq_a2:  'نتوقع من الطلاب تخصيص 15 ساعة أسبوعياً في المتوسط، إذ يستلزم البحث الجيد التزاماً حقيقياً. نحن ندرك أن الطلاب مشغولون وقد يُخصصون وقتاً أقل خلال أسابيع الاختبارات والإجازات.',
    faq_q3:  'أنا طالب سعودي في جامعة دولية، هل أستطيع الانضمام؟',
    faq_a3:  'نركّز حالياً على طلاب الجامعات السعودية نظراً لمحدودية فرص البحث المتاحة فيها.',
    faq_q4:  'هل سأحصل على ورقة بحثية من خلال هذا البرنامج؟',
    faq_a4:  'هدفنا أن ينتهي كل طالب بورقة بحثية كمؤلف أول، غير أن ذلك يعتمد على المشروع والمرشد ومدى التزامك.',

    // ── papers.html ──────────────────────────────────────────
    pub_heading:       'منشوراتنا <span class="accent-red">البحثية</span>',
    pub_desc:          'الأوراق البحثية المقبولة والمنشورة من طلاب البرنامج.',
    pub_authors_label: 'المؤلفون:',

    // ── mentors.html ─────────────────────────────────────────
    mentors_heading:   'مرشدونا <span class="accent-red">المتميزون</span>',
    cohort_1_tab:      'الدفعة الأولى',
    cohort_2_tab:      'الدفعة الثانية',

    // ── students.html ────────────────────────────────────────
    students_heading:  'طلابنا <span class="accent-red">المتميزون</span>',

    // ── staff.html ───────────────────────────────────────────
    staff_heading:     'فريق <span class="accent-red">العمل</span>',
    staff_alumni_heading: 'خريجو <span class="accent-red">الفريق</span>',

    // ── Lang switcher label ──────────────────────────────────
    lang_toggle_label: 'EN',
  }
};

// ── Core apply function ──────────────────────────────────────
function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  // Set dir and lang on <html>
  document.documentElement.lang = lang;
  document.documentElement.dir  = lang === 'ar' ? 'rtl' : 'ltr';

  // Translate all tagged elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Update toggle button text
  const btn = document.getElementById('lang-toggle-btn');
  if (btn) btn.textContent = t.lang_toggle_label;

  // Persist
  localStorage.setItem('smail_lang', lang);
}

// ── Toggle helper ────────────────────────────────────────────
function toggleLanguage() {
  const current = localStorage.getItem('smail_lang') || 'en';
  applyLanguage(current === 'en' ? 'ar' : 'en');
}

// ── Auto-init on DOMContentLoaded ────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  const saved = localStorage.getItem('smail_lang') || 'en';
  applyLanguage(saved);
});
