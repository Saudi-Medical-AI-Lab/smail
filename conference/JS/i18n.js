// ============================================================
//  SMAIL Conference – Internationalization (EN / AR)
//  Usage: add data-i18n="key" to any element.
//  Reads the saved lang from localStorage (shared key with smail.org.sa so the
//  preference carries over between the two sites), applies translations, and
//  flips dir="rtl" on <html>.
// ============================================================

const translations = {
  en: {
    // ── Nav ─────────────────────────────────────────────────
    nav_home: 'Home',
    nav_cfp: 'Calls',
    nav_program: 'Program',
    nav_attend: 'Attend',
    nav_registration: 'Registration',
    nav_participants: 'Participants Info',
    nav_venue: 'Venue & Travel',
    nav_organizers: 'Organizers',
    nav_sponsors: 'Sponsors',
    nav_scholarships: 'Scholarships',
    nav_more: 'More',
    nav_ethics: 'Ethics',
    nav_news: 'News',
    nav_faq: 'FAQ',

    // ── Footer ──────────────────────────────────────────────
    footer_tagline: 'A SMAIL (Saudi Medical AI Lab) initiative, under the supervision of the Saudi Data and AI Authority (SDAIA).',
    footer_explore: 'Explore',
    footer_attend: 'Attend',
    footer_more: 'More',
    footer_contact: 'Contact',
    footer_main_site: 'SMAIL main site →',
    footer_copyright: '© 2026 Specialized Medical AI Lab. All Rights Reserved.',

    // ── Shared components ───────────────────────────────────
    tba: 'TBA',
    tba_full: 'To Be Announced',
    coming_soon: 'Coming Soon',
    lang_toggle_label: 'AR',

    // ── Home: Hero ──────────────────────────────────────────
    hero_eyebrow: 'SMAIL First Conference, Proposed Feb 1–2, 2027',
    hero_title_pre: 'MEDICAL AI RESEARCH',
    hero_title_accent: 'IN SAUDI ARABIA',
    hero_subtitle: 'A two-day, peer-reviewed medical AI research conference, under the supervision of SDAIA.',
    hero_chip_capacity: 'Up to 200 participants',
    hero_chip_sdaia: 'Under SDAIA supervision',
    hero_countdown_label: 'Countdown to the proposed opening',
    btn_submit_paper: 'Submit a Paper',
    btn_read_cfp: 'Read the Call for Papers',
    countdown_days: 'Days',
    countdown_hours: 'Hours',
    countdown_minutes: 'Min',
    countdown_seconds: 'Sec',

    // ── Home: At a glance ────────────────────────────────────
    glance_days_label: 'Conference days',
    glance_tracks_label: 'Research tracks',
    glance_capacity_label: 'Target participants',
    glance_types_label: 'Paper formats',

    // ── Home: Important dates ────────────────────────────────
    dates_eyebrow: 'Schedule',
    dates_heading: 'Important Dates',
    dates_description: "The committee's planning timeline. Exact deadlines are TBA.",
    dates_col_milestone: 'Milestone',
    dates_col_window: 'Window',
    dates_col_status: 'Status',
    toc_heading: 'On this page',
    prog_col_time: 'Time',
    prog_col_session: 'Session',
    dates_m3: 'Call for Papers opens',
    dates_m3_sub: 'Promotion, registration and sponsorship outreach begin',
    dates_m4: 'Paper submission deadline',
    dates_m4_sub: 'Exact date to be announced once confirmed',
    dates_m5: 'Review, decisions & rebuttals',
    dates_m5_sub: 'Double-blind review by ≥3 reviewers per full paper',
    dates_m6: 'Camera-ready & final program',
    dates_m6_sub: 'Final materials prepared',
    dates_m7: 'Conference',
    dates_m7_sub: 'Proposed, pending final committee approval',
    dates_window_3: 'Oct – Dec 2026',
    dates_window_4: 'TBA',
    dates_window_5: 'Dec 2026 – Jan 2027',
    dates_window_6: 'Dec 2026 – Jan 2027',
    dates_window_7: 'Feb 1–2, 2027',
    dates_status_planned: 'Planned',
    dates_status_tba: 'TBA',
    dates_status_proposed: 'Proposed',

    // ── Home: Overview ───────────────────────────────────────
    about_eyebrow: 'About the Conference',
    about_heading: 'Medical AI research, given a rigorous stage',
    about_p1: 'The conference invites research papers from students and researchers in medical AI, reviewed in multiple stages before the strongest work is presented over two days. It aims to become a leading Saudi venue for researchers from the Kingdom and the wider MENA region.',
    about_p2: "For the Kingdom, it's a chance to strengthen the medical-AI research ecosystem from the ground up.",
    sdaia_panel_caption: 'Under the supervision of the Saudi Data and AI Authority (SDAIA)',

    // ── Home: Expected impact ────────────────────────────────
    impact_eyebrow: 'Expected Impact',
    impact_heading: 'Why this conference matters',
    impact_description: 'Four ways the conference aims to move the needle for Saudi medical AI research.',
    impact1_title: 'A Real Publication Platform',
    impact1_body: 'Genuine peer review and publication experience for early-career researchers and students.',
    impact2_title: 'Bridges Academia & Healthcare',
    impact2_body: 'Connects universities with the Ministry of Health, hospitals, and Saudi health-tech companies.',
    impact3_title: 'Aligned with Vision 2030',
    impact3_body: "Supports the Kingdom's digital health transformation and the localization of AI capabilities.",
    impact4_title: 'Regional Research Leadership',
    impact4_body: 'Aims to make the Kingdom a regional hub for specialized scientific events, and opens collaboration with Gulf and Arab academic institutions.',

    // ── Home: Tracks preview ─────────────────────────────────
    tracks_eyebrow: 'Scientific Scope',
    tracks_heading: 'Seven research tracks',
    tracks_description: 'Full submission details on the Call for Papers page.',
    track1_title: 'Clinical ML & Risk Prediction',
    track1_scope: 'Automated diagnosis, disease-course prognosis, clinical decision support, risk-sharing models.',
    track2_title: 'AI in Medical Imaging',
    track2_scope: 'Radiology, neuroimaging, cardiac and retinal imaging, multimodal imaging.',
    track3_title: 'Generative & Foundation Models, Medical NLP',
    track3_scope: 'Large medical language models, multimodal vision models, healthcare AI agents, Arabic and English clinical text.',
    track4_title: 'Multimodal Digital Health',
    track4_scope: 'Electronic health records, wearables, remote monitoring, digital mental health.',
    track5_title: 'Trustworthy & Responsible Medical AI',
    track5_scope: 'Fairness, bias, interpretability, privacy, governance.',
    track6_title: 'Translational & Real-World Applications',
    track6_scope: 'External validation, real-world deployment, health economics.',
    track7_title: 'Genomics, Drug Discovery & Computational Biology',
    track7_scope: 'Genome analysis, molecular property prediction, drug discovery and repurposing, multi-omics models.',
    btn_view_cfp: 'View full Call for Papers',

    // ── Home: Program snapshot ───────────────────────────────
    program_eyebrow: 'Two Days',
    program_heading: 'How the program is shaped',
    program_description: 'A working structure, pending the venue and speakers. Full detail on the Program page.',
    program_day1_label: 'Day 1',
    program_day1_theme: 'Methodologies & New Horizons',
    program_day1_desc: 'Opening, keynote, Track sessions 1–3, an invited clinical perspective, and a poster & demo session.',
    program_day2_label: 'Day 2',
    program_day2_theme: 'Clinical Translation & Impact',
    program_day2_desc: 'Keynote, Track sessions 4–7, real-world deployment case studies, a governance & trust panel, and the closing awards.',
    btn_view_program: 'View the full program',

    // ── Home: Speakers ────────────────────────────────────────
    speakers_eyebrow: 'Invited Speakers',
    speakers_heading: 'Speakers to be announced',
    speakers_description: 'Names will be published as they are confirmed.',
    speaker_tba_label: 'Speaker: To Be Announced',

    // ── Home: Sponsors preview ───────────────────────────────
    sponsors_home_eyebrow: 'Partner With Us',
    sponsors_home_heading: 'Sponsorship',
    sponsors_home_description: 'Three tiers are proposed. See the Sponsors page for detail.',
    btn_view_sponsors: 'View sponsorship tiers',

    // ── Home: News teaser ─────────────────────────────────────
    news_home_eyebrow: 'News',
    news_home_heading: 'Latest updates',
    btn_view_news: 'View all news',
    news1_date: 'August 2026',
    news1_title: 'Conference website published',
    news1_body: 'This site goes live with the proposed dates, scientific tracks, and organizing structure.',
    news2_date: 'TBA',
    news2_title: 'Call for Papers opens',
    news2_body: 'Submission portal, exact deadlines, and formatting templates will be announced once the committee finalizes them.',

    // ── Home: Final CTA ───────────────────────────────────────
    final_cta_heading: 'Have a question before the Call for Papers opens?',
    final_cta_body: 'Reach the organizing team directly, and we\'ll route it to the right volunteer track.',
    btn_contact_us: 'Contact the organizers',

    // ── Shared: interior page kicker ─────────────────────────
    page_kicker: 'SMAIL Conference, First Edition 2027',

    // ── Call for Papers ───────────────────────────────────────
    cfp_h1: 'Call for Papers',
    cfp_intro: 'Seven research tracks, four paper formats, and a double-blind review process built for clinically meaningful, reproducible medical AI research.',
    cfp_formats_eyebrow: 'Paper Formats',
    cfp_formats_heading: 'Four ways to submit',
    cfp_formats_description: 'Full papers are the primary submission track; the other formats broaden participation.',
    cfp_full_title: 'Full Paper',
    cfp_full_desc: 'The primary track. Accepted papers require a print-ready camera-ready copy.',
    cfp_short_title: 'Short Paper',
    cfp_short_desc: '4–6 pages, for a more compact contribution.',
    cfp_short_tba_note: 'Optional category, pending committee decision.',
    cfp_poster_title: 'Poster',
    cfp_poster_desc: 'A juried track for applied or early-stage work, presented in the poster session.',
    cfp_demo_title: 'Demo',
    cfp_demo_desc: 'Live or recorded demonstrations of deployed or deployable medical AI systems.',
    cfp_award_title: 'Best Paper Award for Saudi & MENA Data',
    cfp_award_body: 'A dedicated award for the strongest accepted paper built on Saudi or wider MENA regional data.',
    cfp_review_eyebrow: 'Review Process',
    cfp_review_heading: 'How papers are reviewed',
    cfp_review_intro: 'Submissions go through OpenReview.',
    cfp_review_item1: 'Double-blind review by at least three reviewers per full paper.',
    cfp_review_item2: 'Reviewers assess novelty, methodological rigor, clinical significance, and evaluation & reproducibility.',
    cfp_review_item3: 'Authors must disclose ethics approvals and data governance for any clinical or health data used.',
    cfp_review_item4: 'Accepted papers are scheduled for an oral slot or the poster & demo session.',
    cfp_pub_eyebrow: 'Publication',
    cfp_pub_heading: 'Published with a permanent DOI',
    cfp_pub_body: 'Accepted papers are published as open-access proceedings on smail.org.sa, with a permanent, citable DOI for every paper, registered through Crossref.',
    cfp_pub_item1: 'Every accepted paper gets its own page on smail.org.sa and a permanent DOI.',
    cfp_pub_item2: 'Indexed with major research databases, including Google Scholar and Semantic Scholar.',
    cfp_pub_item3: 'Proceedings become publicly available within 30 days of the conference.',
    cfp_pub_item4: 'Accepted full papers are prepared in a unified LaTeX format for the camera-ready version.',
    cfp_dates_heading: 'Key dates for authors',
    cfp_dates_body: 'The full planning timeline, including the submission window, lives on the homepage.',
    btn_view_dates: 'View Important Dates',
    btn_submit_openreview: 'Submit via OpenReview',

    // ── Program ────────────────────────────────────────────────
    program_h1: 'Program',
    program_intro: 'A two-day structure the committee is finalizing around the confirmed venue and speakers.',
    program_schedule_tba: 'Exact session times will be set once the venue and speakers are confirmed. The running order below is fixed; the clock is not.',
    prog_tab_day1: 'Day 1',
    prog_tab_day2: 'Day 2',
    prog_s1_1: 'Opening & Welcome',
    prog_s1_2: 'Keynote',
    prog_s1_3: 'Track Sessions 1–3',
    prog_s1_3_sub: 'Parallel sessions across the first three research tracks',
    prog_s1_4: 'Invited Clinical Perspective',
    prog_s1_5: 'Poster & Demo Session',
    prog_s1_6: 'Industry Panel',
    prog_s2_1: 'Keynote',
    prog_s2_2: 'Track Sessions 4–7',
    prog_s2_2_sub: 'Parallel sessions across the remaining four research tracks',
    prog_s2_3: 'Real-World Deployment Case Studies',
    prog_s2_4: 'Governance & Trust Panel',
    prog_s2_5: 'Best Paper, Poster & Regional Paper Awards',
    prog_s2_6: 'Closing: Saudi Medical AI Research Agenda 2028',
    prog_speaker_sub: 'Speaker: To Be Announced',
    prog_tag_opening: 'Opening',
    prog_tag_keynote: 'Keynote',
    prog_tag_track: 'Track Sessions',
    prog_tag_clinical: 'Invited Talk',
    prog_tag_posters: 'Posters & Demos',
    prog_tag_panel: 'Panel',
    prog_tag_case: 'Case Studies',
    prog_tag_awards: 'Awards',
    prog_tag_closing: 'Closing',
    program_speakers_cta: 'See Invited Speakers',

    // ── Registration ───────────────────────────────────────────
    reg_h1: 'Registration',
    reg_intro: 'Registration opens once the Call for Papers and program are finalized.',
    reg_body: 'Capacity for up to 200 participants on-site. Whether virtual attendance will be offered is TBA.',
    reg_cost_note: 'Registration cost and the exact sign-up process have not been defined yet.',
    btn_register: 'Register',

    // ── Participants Info ────────────────────────────────────────
    pi_h1: 'Participants Info',
    pi_intro: 'Practical information for attendees, expanded as logistics are confirmed.',
    pi_attendance_heading: 'Attendance mode',
    pi_attendance_body: 'Capacity for up to 200 participants on-site.',
    pi_attendance_tba: 'Whether virtual attendance will be offered: TBA.',
    pi_conduct_heading: 'Code of conduct',
    pi_conduct_body: 'A respectful, inclusive environment is expected of every attendee, speaker, and volunteer.',
    pi_conduct_tba: 'Full written policy to be published.',
    pi_language_heading: 'Language',
    pi_language_body: 'Conference materials and this website are maintained in both English and Arabic.',
    pi_visa_heading: 'Visa & what to bring',
    pi_visa_tba: 'Not yet defined. Depends on the confirmed venue and city.',
    pi_contact_heading: 'Logistics questions',
    pi_contact_body: 'Reach the organizing team directly for anything not covered here.',

    // ── Venue & Travel ────────────────────────────────────────
    vt_h1: 'Venue & Travel',
    vt_intro: 'The organizing committee has not finalized a venue or city yet.',
    vt_main_tba: 'Venue and city: TBA.',
    vt_requirements_eyebrow: 'Requirements',
    vt_requirements_heading: 'What the committee is looking for',
    vt_req1: 'Capacity for up to 200 attendees',
    vt_req2: 'A dedicated poster and demo area',
    vt_req3: 'An on-site registration desk',
    vt_req4: 'Audio/visual systems for keynotes and panels',
    vt_req5: 'Catering for two full conference days',
    vt_travel_heading: 'Travel & hotel guidance',
    vt_travel_tba: 'Will be published once the venue and city are confirmed.',

    // ── Organizers ─────────────────────────────────────────────
    org_h1: 'Organizers',
    org_intro: 'A SMAIL (Saudi Medical AI Lab) initiative, volunteer-run and under the supervision of the Saudi Data and AI Authority (SDAIA).',
    org_roles_heading: 'Five volunteer tracks',
    org_roles_body: 'Five ownership areas, each with one accountable owner.',
    role1_label: 'Volunteer Track',
    role1_title: 'Submissions Operations',
    role1_desc: 'OpenReview setup and configuration, and communication with authors.',
    role2_title: 'Review Operations',
    role2_desc: 'The reviewer pool, conflict-of-interest management, and reviewer assignment.',
    role3_title: 'Proceedings & Publication',
    role3_desc: 'Publishing papers on smail.org.sa and registering DOIs through Crossref.',
    role4_title: 'Program & Posters',
    role4_desc: 'Scheduling and the award process.',
    role5_title: 'Quality & Records',
    role5_desc: 'Templates, permissions, and archiving.',
    org_named_tba: 'Program chairs and named committee members will be announced here.',
    org_contact_cta: 'Contact the organizing team',

    // ── Sponsors ───────────────────────────────────────────────
    sp_h1: 'Sponsors',
    sp_intro: 'Three sponsorship tiers.',
    sp_gold_eyebrow: 'Tier',
    sp_gold_title: 'Gold',
    sp_gold_item1: 'Prominent logo across all promotional materials',
    sp_gold_item2: 'A dedicated exhibition booth',
    sp_gold_item3: 'Mention in the opening remarks',
    sp_gold_item4: 'A timed speaking slot',
    sp_silver_title: 'Silver',
    sp_silver_item1: 'Logo on promotional materials',
    sp_silver_item2: 'An exhibition booth',
    sp_silver_item3: 'Mention during the main sessions',
    sp_bronze_title: 'Bronze',
    sp_bronze_item1: 'Logo on the conference website and printed program',
    sp_mechanism_tba: 'Payment process: TBA.',
    sp_cta: 'Become a sponsor',
    btn_become_sponsor: 'Become a Sponsor',

    // ── Scholarships ───────────────────────────────────────────
    sch_h1: 'Student Scholarships',
    sch_body: 'SMAIL is considering support for student attendance. Amounts, eligibility, and process are TBA.',
    sch_related: "See SMAIL's existing student research program",
    sch_news_cta: 'Watch the News page for updates',

    // ── Ethics ─────────────────────────────────────────────────
    eth_h1: 'Ethics',
    eth_intro: 'The standards the review process and the conference itself are held to.',
    eth_review_heading: 'Review integrity',
    eth_review_body: 'Double-blind peer review by at least three reviewers per full paper, with conflict-of-interest management built into reviewer assignment.',
    eth_data_heading: 'Data governance & disclosure',
    eth_data_body: 'Authors must disclose ethics approvals and data governance for any clinical or health data used in their submission.',
    eth_pub_heading: 'Responsible publication',
    eth_pub_body: 'Priority is given to reproducibility and clinically meaningful evaluation over benchmark performance alone.',
    eth_misconduct_heading: 'Misconduct & dual submission',
    eth_misconduct_body: 'The conference follows standard academic norms on plagiarism and dual submission.',
    eth_misconduct_tba: 'A fully detailed policy will be published.',

    // ── News page ──────────────────────────────────────────────
    news_h1: 'News',
    news_intro: 'Updates from the organizing committee as the conference comes together.',

    // ── FAQ ────────────────────────────────────────────────────
    faq_h1: 'FAQ',
    faq_intro: 'Answers to common questions about the conference.',
    faqc_q1: 'Who can submit a paper?',
    faqc_a1: 'Students and researchers working on medical AI. Submissions need a clear, specific focus on medical or clinical applications of AI.',
    faqc_q2: 'What paper types are accepted?',
    faqc_a2: 'Full papers, an optional short-paper category, posters, and demos. See the Call for Papers page for full detail.',
    faqc_q4: 'Is attendance in-person only?',
    faqc_a4: 'Not yet decided. Capacity is up to 200 on-site; whether virtual attendance will also be offered is TBA.',
    faqc_q5: "What's the review process?",
    faqc_a5: 'Submission via OpenReview, double-blind review, with at least three reviewers per full paper.',
    faqc_q6: 'Where and when is the conference?',
    faqc_a6: 'Proposed for February 1–2, 2027, pending final committee approval. The venue and city have not been finalized yet; see the Venue & Travel page.',
    faqc_q7: 'How can my organization sponsor the conference?',
    faqc_a7: 'See the Sponsors page for the proposed tiers, or contact the organizing team directly by email.',
    faqc_q8: 'I have another question. Who do I contact?',
    faqc_a8: "Email the organizing team and we'll route it to the right volunteer track.",
  },

  ar: {
    // ── Nav ─────────────────────────────────────────────────
    nav_home: 'الرئيسية',
    nav_cfp: 'الدعوات',
    nav_program: 'البرنامج',
    nav_attend: 'الحضور',
    nav_registration: 'التسجيل',
    nav_participants: 'معلومات المشاركين',
    nav_venue: 'المكان والسفر',
    nav_organizers: 'المنظمون',
    nav_sponsors: 'الرعاة',
    nav_scholarships: 'المنح',
    nav_more: 'المزيد',
    nav_ethics: 'الأخلاقيات',
    nav_news: 'الأخبار',
    nav_faq: 'الأسئلة الشائعة',

    // ── Footer ──────────────────────────────────────────────
    footer_tagline: 'مبادرة من مختبر الذكاء الاصطناعي الطبي المتخصص (SMAIL)، برعاية هيئة البيانات والذكاء الاصطناعي (SDAIA).',
    footer_explore: 'استكشف',
    footer_attend: 'الحضور',
    footer_more: 'المزيد',
    footer_contact: 'تواصل معنا',
    footer_main_site: '← الموقع الرئيسي لسمايل',
    footer_copyright: '© 2026 مختبر الذكاء الاصطناعي الطبي المتخصص. جميع الحقوق محفوظة.',

    // ── Shared components ───────────────────────────────────
    tba: 'لم يُحدد بعد',
    tba_full: 'سيُعلن لاحقًا',
    coming_soon: 'قريبًا',
    lang_toggle_label: 'EN',

    // ── Home: Hero ──────────────────────────────────────────
    hero_eyebrow: 'مؤتمر سمايل الأول، مقترح ١–٢ فبراير ٢٠٢٧',
    hero_title_pre: 'أبحاث الذكاء الاصطناعي الطبي',
    hero_title_accent: 'في السعودية',
    hero_subtitle: 'مؤتمر علمي مدته يومان لأبحاث الذكاء الاصطناعي الطبي، محكّم علميًا، وينعقد برعاية SDAIA.',
    hero_chip_capacity: 'حتى ٢٠٠ مشارك',
    hero_chip_sdaia: 'برعاية هيئة SDAIA',
    hero_countdown_label: 'العد التنازلي للموعد المقترح',
    btn_submit_paper: 'إرسال بحث',
    btn_read_cfp: 'قراءة الدعوة لتقديم الأبحاث',
    countdown_days: 'يوم',
    countdown_hours: 'ساعة',
    countdown_minutes: 'دقيقة',
    countdown_seconds: 'ثانية',

    // ── Home: At a glance ────────────────────────────────────
    glance_days_label: 'أيام المؤتمر',
    glance_tracks_label: 'المحاور العلمية',
    glance_capacity_label: 'المشاركون المستهدفون',
    glance_types_label: 'أنواع الأوراق',

    // ── Home: Important dates ────────────────────────────────
    dates_eyebrow: 'الجدول الزمني',
    dates_heading: 'المواعيد المهمة',
    dates_description: 'الجدول الزمني الاسترشادي للجنة. المواعيد النهائية الدقيقة لم تُحدد بعد.',
    dates_col_milestone: 'المرحلة',
    dates_col_window: 'الإطار الزمني',
    dates_col_status: 'الحالة',
    toc_heading: 'في هذه الصفحة',
    prog_col_time: 'الوقت',
    prog_col_session: 'الجلسة',
    dates_m3: 'فتح باب الدعوة لتقديم الأبحاث',
    dates_m3_sub: 'بدء الترويج والتسجيل والتواصل مع الرعاة',
    dates_m4: 'الموعد النهائي لتقديم الأوراق',
    dates_m4_sub: 'سيُعلن الموعد الدقيق فور اعتماده',
    dates_m5: 'التحكيم واتخاذ القرارات وفترة الرد',
    dates_m5_sub: 'تحكيم مزدوج التعمية من ثلاثة محكّمين على الأقل لكل بحث كامل',
    dates_m6: 'النسخ النهائية والبرنامج النهائي',
    dates_m6_sub: 'تجهيز المواد النهائية',
    dates_m7: 'انعقاد المؤتمر',
    dates_m7_sub: 'تاريخ مقترح، بانتظار الاعتماد النهائي من اللجنة',
    dates_window_3: 'أكتوبر – ديسمبر ٢٠٢٦',
    dates_window_4: 'لم يُحدد بعد',
    dates_window_5: 'ديسمبر ٢٠٢٦ – يناير ٢٠٢٧',
    dates_window_6: 'ديسمبر ٢٠٢٦ – يناير ٢٠٢٧',
    dates_window_7: '١–٢ فبراير ٢٠٢٧',
    dates_status_planned: 'مخطط',
    dates_status_tba: 'لم يُحدد',
    dates_status_proposed: 'مقترح',

    // ── Home: Overview ───────────────────────────────────────
    about_eyebrow: 'عن المؤتمر',
    about_heading: 'أبحاث الذكاء الاصطناعي الطبي، على منصة علمية صارمة',
    about_p1: 'يستقطب المؤتمر أوراقًا بحثية من الطلاب والباحثين في الذكاء الاصطناعي الطبي، تخضع لمراجعة علمية متعددة المراحل قبل عرض أفضلها على مدار يومين. يهدف إلى أن يكون محطة سعودية رائدة للباحثين من المملكة ومنطقة الشرق الأوسط وشمال أفريقيا.',
    about_p2: 'يمثّل المؤتمر بالنسبة للمملكة فرصة لتعزيز منظومة البحث العلمي في الذكاء الاصطناعي الطبي من الأساس.',
    sdaia_panel_caption: 'برعاية هيئة البيانات والذكاء الاصطناعي (SDAIA)',

    // ── Home: Expected impact ────────────────────────────────
    impact_eyebrow: 'الأثر المتوقع',
    impact_heading: 'لماذا يهم هذا المؤتمر',
    impact_description: 'أربع طرق يسعى بها المؤتمر لإحداث أثر في بحوث الذكاء الاصطناعي الطبي السعودي.',
    impact1_title: 'منصة نشر حقيقية',
    impact1_body: 'تجربة مراجعة ونشر علمي حقيقية للباحثين الناشئين والطلاب.',
    impact2_title: 'جسر بين الأكاديميا والقطاع الصحي',
    impact2_body: 'يربط الجامعات بوزارة الصحة والمستشفيات وشركات التقنية الصحية السعودية.',
    impact3_title: 'منسجم مع رؤية ٢٠٣٠',
    impact3_body: 'يدعم التحول الرقمي الصحي في المملكة وتوطين قدرات الذكاء الاصطناعي.',
    impact4_title: 'ريادة بحثية إقليمية',
    impact4_body: 'يرسّخ مكانة المملكة كمركز إقليمي رائد للفعاليات العلمية المتخصصة، ويفتح قنوات تعاون مع مؤسسات أكاديمية خليجية وعربية.',

    // ── Home: Tracks preview ─────────────────────────────────
    tracks_eyebrow: 'النطاق العلمي',
    tracks_heading: 'سبعة محاور بحثية',
    tracks_description: 'تفاصيل التقديم الكاملة في صفحة الدعوة لتقديم الأبحاث.',
    track1_title: 'تعلّم الآلة السريري والتنبؤ بالمخاطر',
    track1_scope: 'التشخيص الآلي، التنبؤ بمآل المرض، دعم القرار السريري، نماذج تبادل المخاطر.',
    track2_title: 'الذكاء الاصطناعي في التصوير الطبي',
    track2_scope: 'الأشعة، التصوير العصبي، تصوير القلب والشبكية، التصوير متعدد الوسائط.',
    track3_title: 'النماذج التوليدية والأساسية ومعالجة اللغة الطبية',
    track3_scope: 'النماذج اللغوية الطبية الكبيرة، النماذج البصرية متعددة الوسائط، الوكلاء الذكيون، النصوص السريرية بالعربية والإنجليزية.',
    track4_title: 'الصحة الرقمية متعددة الوسائط',
    track4_scope: 'السجلات الإلكترونية، الأجهزة القابلة للارتداء، المراقبة عن بُعد، الصحة النفسية الرقمية.',
    track5_title: 'الذكاء الاصطناعي الطبي الموثوق والمسؤول',
    track5_scope: 'العدالة، التحيّز، التفسير، الخصوصية، الحوكمة.',
    track6_title: 'التطبيقات الانتقالية والواقعية',
    track6_scope: 'التحقق الخارجي، النشر الفعلي، اقتصاديات الصحة.',
    track7_title: 'الجينوميات واكتشاف الأدوية والبيولوجيا الحسابية',
    track7_scope: 'تحليل الجينوم، نماذج التنبؤ بخصائص الجزيئات، اكتشاف الأدوية وإعادة توظيفها، نماذج البيولوجيا الجزيئية متعددة الوسائط.',
    btn_view_cfp: 'عرض الدعوة الكاملة لتقديم الأبحاث',

    // ── Home: Program snapshot ───────────────────────────────
    program_eyebrow: 'يومان',
    program_heading: 'كيف يُبنى البرنامج',
    program_description: 'هيكل عمل مبدئي، بانتظار تأكيد المكان والمتحدثين. التفاصيل في صفحة البرنامج.',
    program_day1_label: 'اليوم الأول',
    program_day1_theme: 'المنهجيات والآفاق الجديدة',
    program_day1_desc: 'الافتتاح، كلمة رئيسية، جلسات المحاور ١–٣، منظور سريري مدعو، وجلسة ملصقات وعروض تطبيقية.',
    program_day2_label: 'اليوم الثاني',
    program_day2_theme: 'النقل السريري والأثر',
    program_day2_desc: 'كلمة رئيسية، جلسات المحاور ٤–٧، دراسات حالة للنشر الفعلي، حلقة نقاش حول الحوكمة والثقة، وحفل الختام والجوائز.',
    btn_view_program: 'عرض البرنامج الكامل',

    // ── Home: Speakers ────────────────────────────────────────
    speakers_eyebrow: 'المتحدثون المدعوون',
    speakers_heading: 'سيُعلن عن المتحدثين لاحقًا',
    speakers_description: 'ستُنشر الأسماء فور تأكيدها.',
    speaker_tba_label: 'متحدث: سيُعلن لاحقًا',

    // ── Home: Sponsors preview ───────────────────────────────
    sponsors_home_eyebrow: 'كن شريكًا',
    sponsors_home_heading: 'الرعاية',
    sponsors_home_description: 'ثلاث فئات مقترحة. التفاصيل في صفحة الرعاة.',
    btn_view_sponsors: 'عرض فئات الرعاية',

    // ── Home: News teaser ─────────────────────────────────────
    news_home_eyebrow: 'الأخبار',
    news_home_heading: 'آخر التحديثات',
    btn_view_news: 'عرض كل الأخبار',
    news1_date: 'أغسطس ٢٠٢٦',
    news1_title: 'إطلاق الموقع الإلكتروني للمؤتمر',
    news1_body: 'يُطلق هذا الموقع بالمواعيد المقترحة والمحاور العلمية والهيكل التنظيمي.',
    news2_date: 'لم يُحدد بعد',
    news2_title: 'فتح باب الدعوة لتقديم الأبحاث',
    news2_body: 'سيُعلن عن منصة التقديم والمواعيد النهائية الدقيقة وقوالب التنسيق فور اعتمادها من اللجنة.',

    // ── Home: Final CTA ───────────────────────────────────────
    final_cta_heading: 'لديك سؤال قبل فتح باب الدعوة لتقديم الأبحاث؟',
    final_cta_body: 'تواصل مباشرة مع فريق التنظيم، وسنوجّه رسالتك إلى الفريق التطوعي المختص.',
    btn_contact_us: 'تواصل مع المنظمين',

    // ── Shared: interior page kicker ─────────────────────────
    page_kicker: 'مؤتمر سمايل، الدورة الأولى ٢٠٢٧',

    // ── Call for Papers ───────────────────────────────────────
    cfp_h1: 'الدعوة لتقديم الأبحاث',
    cfp_intro: 'سبعة محاور بحثية، وأربعة أنواع للأوراق العلمية، ومنظومة مراجعة مزدوجة التعمية مصممة لأبحاث ذكاء اصطناعي طبي ذات دلالة سريرية وقابلة لإعادة الإنتاج.',
    cfp_formats_eyebrow: 'أنواع الأوراق',
    cfp_formats_heading: 'أربع طرق للتقديم',
    cfp_formats_description: 'الأبحاث الكاملة هي المسار الأساسي للتقديم؛ بقية الأنواع توسّع المشاركة.',
    cfp_full_title: 'بحث كامل',
    cfp_full_desc: 'المسار الأساسي. يتطلب من الأوراق المقبولة نسخة نهائية جاهزة للطباعة.',
    cfp_short_title: 'بحث مختصر',
    cfp_short_desc: 'من ٤ إلى ٦ صفحات، لمساهمة أكثر إيجازًا.',
    cfp_short_tba_note: 'فئة اختيارية، بانتظار قرار اللجنة.',
    cfp_poster_title: 'ملصق علمي',
    cfp_poster_desc: 'فئة محكّمة للأعمال التطبيقية أو المبكرة، تُعرض في جلسة الملصقات.',
    cfp_demo_title: 'عرض تطبيقي',
    cfp_demo_desc: 'عروض حية أو مسجّلة لأنظمة ذكاء اصطناعي طبي منشورة أو قابلة للنشر.',
    cfp_award_title: 'جائزة أفضل بحث معتمد على بيانات سعودية وإقليمية',
    cfp_award_body: 'جائزة مخصصة لأقوى بحث مقبول يعتمد على بيانات سعودية أو من منطقة الشرق الأوسط وشمال أفريقيا.',
    cfp_review_eyebrow: 'عملية المراجعة',
    cfp_review_heading: 'كيف تُراجع الأوراق',
    cfp_review_intro: 'يتم التقديم عبر منصة OpenReview.',
    cfp_review_item1: 'تحكيم مزدوج التعمية من ثلاثة محكّمين على الأقل لكل بحث كامل.',
    cfp_review_item2: 'يقيّم المحكّمون الجدة والصرامة المنهجية والدلالة السريرية والتقييم وقابلية إعادة الإنتاج.',
    cfp_review_item3: 'يجب على المؤلفين الإفصاح عن الموافقات الأخلاقية وحوكمة البيانات لأي بيانات سريرية أو صحية مستخدمة.',
    cfp_review_item4: 'تُجدول الأوراق المقبولة إما ضمن عرض شفهي أو جلسة الملصقات والعروض التطبيقية.',
    cfp_pub_eyebrow: 'النشر',
    cfp_pub_heading: 'نشر بمعرّف DOI دائم',
    cfp_pub_body: 'تُنشر الأوراق المقبولة كوقائع مفتوحة الوصول على smail.org.sa، مع معرّف DOI دائم وقابل للاستشهاد لكل ورقة، مسجَّل عبر Crossref.',
    cfp_pub_item1: 'تحصل كل ورقة مقبولة على صفحة مستقلة على smail.org.sa ومعرّف DOI دائم.',
    cfp_pub_item2: 'مفهرسة في قواعد البيانات البحثية الكبرى، بما في ذلك Google Scholar وSemantic Scholar.',
    cfp_pub_item3: 'تُتاح الوقائع للعموم في غضون 30 يومًا من انتهاء المؤتمر.',
    cfp_pub_item4: 'تُجهَّز الأوراق الكاملة المقبولة بصيغة LaTeX موحدة للنسخة النهائية.',
    cfp_dates_heading: 'المواعيد المهمة للمؤلفين',
    cfp_dates_body: 'الجدول الزمني الكامل، بما في ذلك فترة التقديم، متاح في الصفحة الرئيسية.',
    btn_view_dates: 'عرض المواعيد المهمة',
    btn_submit_openreview: 'التقديم عبر OpenReview',

    // ── Program ────────────────────────────────────────────────
    program_h1: 'البرنامج',
    program_intro: 'هيكل عمل لمدة يومين تعمل اللجنة على تثبيته حول المكان والمتحدثين بعد تأكيدهما.',
    program_schedule_tba: 'ستُحدَّد أوقات الجلسات الدقيقة فور تأكيد المكان والمتحدثين. ترتيب الجلسات أدناه ثابت، أما التوقيت فلم يُحدد بعد.',
    prog_tab_day1: 'اليوم الأول',
    prog_tab_day2: 'اليوم الثاني',
    prog_s1_1: 'الافتتاح والترحيب',
    prog_s1_2: 'كلمة رئيسية',
    prog_s1_3: 'جلسات المحاور ١–٣',
    prog_s1_3_sub: 'جلسات متوازية عبر المحاور البحثية الثلاثة الأولى',
    prog_s1_4: 'منظور سريري مدعو',
    prog_s1_5: 'جلسة الملصقات والعروض التطبيقية',
    prog_s1_6: 'حلقة نقاش صناعية',
    prog_s2_1: 'كلمة رئيسية',
    prog_s2_2: 'جلسات المحاور ٤–٧',
    prog_s2_2_sub: 'جلسات متوازية عبر المحاور البحثية الأربعة المتبقية',
    prog_s2_3: 'دراسات حالة للنشر الفعلي',
    prog_s2_4: 'حلقة نقاش حول الحوكمة والثقة',
    prog_s2_5: 'جوائز أفضل بحث وملصق وأفضل بحث إقليمي',
    prog_s2_6: 'الختام: أجندة البحث السعودي في الذكاء الاصطناعي الطبي ٢٠٢٨',
    prog_speaker_sub: 'متحدث: سيُعلن لاحقًا',
    prog_tag_opening: 'افتتاح',
    prog_tag_keynote: 'كلمة رئيسية',
    prog_tag_track: 'جلسات المحاور',
    prog_tag_clinical: 'محاضرة مدعوة',
    prog_tag_posters: 'ملصقات وعروض',
    prog_tag_panel: 'حلقة نقاش',
    prog_tag_case: 'دراسات حالة',
    prog_tag_awards: 'جوائز',
    prog_tag_closing: 'ختام',
    program_speakers_cta: 'عرض المتحدثين المدعوين',

    // ── Registration ───────────────────────────────────────────
    reg_h1: 'التسجيل',
    reg_intro: 'يُفتح باب التسجيل فور اعتماد الدعوة لتقديم الأبحاث والبرنامج بشكل نهائي.',
    reg_body: 'سعة تصل إلى ٢٠٠ مشارك حضوريًا. إتاحة الحضور الافتراضي من عدمها لم تُحدد بعد.',
    reg_cost_note: 'لم تُحدَّد بعد تكلفة التسجيل ولا آلية التسجيل الدقيقة.',
    btn_register: 'سجّل الآن',

    // ── Participants Info ────────────────────────────────────────
    pi_h1: 'معلومات المشاركين',
    pi_intro: 'معلومات عملية للحضور، ستُستكمل فور تأكيد التفاصيل اللوجستية.',
    pi_attendance_heading: 'نمط الحضور',
    pi_attendance_body: 'سعة تصل إلى ٢٠٠ مشارك حضوريًا.',
    pi_attendance_tba: 'إتاحة الحضور الافتراضي من عدمها: لم تُحدد بعد.',
    pi_conduct_heading: 'مدونة السلوك',
    pi_conduct_body: 'يُتوقع من كل حاضر ومتحدث ومتطوع الالتزام ببيئة تحترم الجميع وتشمل الجميع.',
    pi_conduct_tba: 'ستُنشر السياسة الكاملة لاحقًا.',
    pi_language_heading: 'اللغة',
    pi_language_body: 'تُعتمد مواد المؤتمر وهذا الموقع باللغتين العربية والإنجليزية.',
    pi_visa_heading: 'التأشيرة وما يجب إحضاره',
    pi_visa_tba: 'لم تُحدد بعد. تعتمد على المكان والمدينة بعد تأكيدهما.',
    pi_contact_heading: 'استفسارات لوجستية',
    pi_contact_body: 'تواصل مباشرة مع فريق التنظيم لأي أمر غير مذكور هنا.',

    // ── Venue & Travel ────────────────────────────────────────
    vt_h1: 'المكان والسفر',
    vt_intro: 'لم تُحدد اللجنة المنظمة بعد مكانًا أو مدينة للمؤتمر.',
    vt_main_tba: 'المكان والمدينة: لم يُحددا بعد.',
    vt_requirements_eyebrow: 'المتطلبات',
    vt_requirements_heading: 'ما تبحث عنه اللجنة',
    vt_req1: 'سعة تصل إلى ٢٠٠ مشارك',
    vt_req2: 'منطقة مخصصة للملصقات والعروض التطبيقية',
    vt_req3: 'مكتب تسجيل في الموقع',
    vt_req4: 'أنظمة صوتية ومرئية للكلمات الرئيسية وحلقات النقاش',
    vt_req5: 'تموين لمدة يومي المؤتمر الكاملين',
    vt_travel_heading: 'إرشادات السفر والفنادق',
    vt_travel_tba: 'ستُنشر فور تأكيد المكان والمدينة.',

    // ── Organizers ─────────────────────────────────────────────
    org_h1: 'المنظمون',
    org_intro: 'مبادرة من مختبر الذكاء الاصطناعي الطبي المتخصص (SMAIL)، تطوعية بالكامل، وتنعقد برعاية هيئة البيانات والذكاء الاصطناعي (SDAIA).',
    org_roles_heading: 'خمسة فرق تطوعية',
    org_roles_body: 'خمس مجالات مسؤولية، لكل منها مالك واحد.',
    role1_label: 'فريق تطوعي',
    role1_title: 'عمليات التقديم',
    role1_desc: 'إعداد وتهيئة منصة OpenReview، والتواصل مع المؤلفين.',
    role2_title: 'عمليات التحكيم',
    role2_desc: 'قاعدة المحكّمين، وإدارة تضارب المصالح، وإسناد الأوراق.',
    role3_title: 'الوقائع والنشر',
    role3_desc: 'نشر الأوراق على smail.org.sa وتسجيل معرّفات DOI عبر Crossref.',
    role4_title: 'البرنامج والملصقات',
    role4_desc: 'الجدولة وعملية الجوائز.',
    role5_title: 'الجودة والسجلات',
    role5_desc: 'القوالب والأذونات والأرشفة.',
    org_named_tba: 'سيُعلن هنا عن رؤساء البرنامج العلمي وأعضاء اللجنة المسمّين.',
    org_contact_cta: 'تواصل مع فريق التنظيم',

    // ── Sponsors ───────────────────────────────────────────────
    sp_h1: 'الرعاة',
    sp_intro: 'ثلاث فئات للرعاية.',
    sp_gold_eyebrow: 'الفئة',
    sp_gold_title: 'ذهبية',
    sp_gold_item1: 'شعار بارز في جميع المواد الإعلانية',
    sp_gold_item2: 'جناح عرض خاص',
    sp_gold_item3: 'ذكر في كلمة الافتتاح',
    sp_gold_item4: 'منصة للتحدث لمدة محددة',
    sp_silver_title: 'فضية',
    sp_silver_item1: 'شعار على المواد الإعلانية',
    sp_silver_item2: 'جناح عرض',
    sp_silver_item3: 'ذكر خلال الجلسات الرئيسية',
    sp_bronze_title: 'برونزية',
    sp_bronze_item1: 'شعار على موقع المؤتمر والبرنامج المطبوع',
    sp_mechanism_tba: 'آلية الدفع: لم تُحدد بعد.',
    sp_cta: 'كن راعيًا',
    btn_become_sponsor: 'كن راعيًا',

    // ── Scholarships ───────────────────────────────────────────
    sch_h1: 'منح الطلاب',
    sch_body: 'تدرس سمايل تقديم دعم لحضور الطلاب. القيمة والأهلية والآلية لم تُحدد بعد.',
    sch_related: 'طالع برنامج سمايل البحثي الحالي للطلاب',
    sch_news_cta: 'تابع صفحة الأخبار لمعرفة آخر التحديثات',

    // ── Ethics ─────────────────────────────────────────────────
    eth_h1: 'الأخلاقيات',
    eth_intro: 'المعايير التي تلتزم بها عملية المراجعة والمؤتمر نفسه.',
    eth_review_heading: 'نزاهة المراجعة',
    eth_review_body: 'تحكيم مزدوج التعمية من ثلاثة محكّمين على الأقل لكل بحث كامل، مع إدارة تضارب المصالح ضمن عملية إسناد المراجعين.',
    eth_data_heading: 'حوكمة البيانات والإفصاح',
    eth_data_body: 'يجب على المؤلفين الإفصاح عن الموافقات الأخلاقية وحوكمة البيانات لأي بيانات سريرية أو صحية مستخدمة في بحثهم.',
    eth_pub_heading: 'النشر المسؤول',
    eth_pub_body: 'تُعطى الأولوية لقابلية إعادة الإنتاج والتقييم ذي الدلالة السريرية، وليس لأداء المعايير القياسية وحده.',
    eth_misconduct_heading: 'سوء السلوك العلمي والتقديم المزدوج',
    eth_misconduct_body: 'يتبع المؤتمر المعايير الأكاديمية المعتادة بشأن الانتحال العلمي والتقديم المزدوج.',
    eth_misconduct_tba: 'ستُنشر سياسة مفصّلة لاحقًا.',

    // ── News page ──────────────────────────────────────────────
    news_h1: 'الأخبار',
    news_intro: 'مستجدات من اللجنة المنظمة مع تقدم العمل على المؤتمر.',

    // ── FAQ ────────────────────────────────────────────────────
    faq_h1: 'الأسئلة الشائعة',
    faq_intro: 'إجابات عن الأسئلة الشائعة حول المؤتمر.',
    faqc_q1: 'من يمكنه تقديم بحث؟',
    faqc_a1: 'الطلاب والباحثون العاملون في مجال الذكاء الاصطناعي الطبي. يجب أن يكون للورقة تركيز واضح ومحدد على تطبيقات طبية أو سريرية للذكاء الاصطناعي.',
    faqc_q2: 'ما أنواع الأوراق المقبولة؟',
    faqc_a2: 'الأبحاث الكاملة، وفئة اختيارية للأبحاث المختصرة، والملصقات، والعروض التطبيقية. التفاصيل الكاملة في صفحة الدعوة لتقديم الأبحاث.',
    faqc_q4: 'هل الحضور حضوري فقط؟',
    faqc_a4: 'لم يُحدد بعد. السعة حتى ٢٠٠ مشارك حضوريًا؛ إتاحة الحضور الافتراضي لم تُحدد بعد.',
    faqc_q5: 'ما هي عملية المراجعة؟',
    faqc_a5: 'التقديم عبر OpenReview، بتحكيم مزدوج التعمية، من ثلاثة محكّمين على الأقل لكل بحث كامل.',
    faqc_q6: 'أين ومتى يُعقد المؤتمر؟',
    faqc_a6: 'مقترح ١–٢ فبراير ٢٠٢٧، بانتظار الاعتماد النهائي من اللجنة. لم يُحدد المكان والمدينة بعد؛ انظر صفحة المكان والسفر.',
    faqc_q7: 'كيف يمكن لمؤسستنا رعاية المؤتمر؟',
    faqc_a7: 'طالع صفحة الرعاة للاطلاع على الفئات المقترحة، أو تواصل مباشرة مع فريق التنظيم عبر البريد الإلكتروني.',
    faqc_q8: 'لدي سؤال آخر، بمن أتواصل؟',
    faqc_a8: 'راسل فريق التنظيم عبر البريد الإلكتروني وسنوجّه رسالتك إلى الفريق التطوعي المختص.',
  }
};

// ── Core apply function ──────────────────────────────────────
function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  const btn = document.getElementById('lang-toggle-btn');
  if (btn) btn.textContent = t.lang_toggle_label;

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
