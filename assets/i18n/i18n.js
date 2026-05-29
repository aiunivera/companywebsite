/* =========================================================
 * UNIVERA i18n — 다국어 지원 (KO / EN / ZH / JA)
 * data-i18n       → textContent 교체
 * data-i18n-html  → innerHTML 교체 (태그 포함)
 * data-i18n-label → aria-label 교체
 * ========================================================= */
(function () {
  'use strict';

  /* ─── Translation data ─────────────────────────────────── */
  var T = {

    /* ── KOREAN (기본 언어) ─────────────────────────── */
    ko: {
      gnb: {
        buy_btn: '멤버스몰 구매',
        menu_open: '메뉴 열기',
        menu_close: '메뉴 닫기',
        about: '유니베라 소개',
        about_philosophy: '기업 철학 & 비전',
        about_story: '창립 스토리',
        about_history: '주요 연혁',
        about_global: '글로벌 현황',
        about_certifications: '인증 & 수상',
        about_directions: '오시는 길',
        aloe: '알로에 전문성',
        aloe_econet: '에코넷 시스템',
        aloe_what: '알로에란?',
        aloe_ingredients: '원료 & 재배',
        aloe_rnd: '연구개발 & 특허',
        aloe_quality: '품질 & 인증',
        products: '제품 & 브랜드',
        products_by_function: '인체 기능별 분류',
        products_all: '전체 제품 목록',
        products_brands: '브랜드 소개',
        sustainability: '지속가능경영',
        sustainability_intro: '지속가능경영 소개',
        sustainability_social: '사회성과',
        sustainability_environment: '환경성과',
        sustainability_csv: '공유가치창출(CSV)',
        newsroom: '뉴스룸',
        newsroom_press: '보도자료',
        newsroom_news: '기업 소식',
        newsroom_videos: '영상 자료실',
        support: '고객지원',
        support_faq: 'FAQ',
        support_notice: '공지사항',
        support_contact: '고객센터 안내'
      },
      footer: {
        tagline: '알로에 전문 기업, 1976년부터 50년',
        family_label: '패밀리 사이트',
        col_about: '유니베라 소개',
        col_aloe: '알로에 전문성',
        col_products: '제품 & 브랜드',
        col_sustainability: '지속가능경영',
        col_newsroom: '뉴스룸',
        col_support: '고객지원',
        copyright: '© 2026 UNIVERA Co., Ltd. All rights reserved.'
      },
      common: {
        home: '홈',
        scroll_top: '페이지 맨 위로 이동',
        lang_label: '언어 선택'
      },
      index: {
        hero_eyebrow: '창립 50주년 · 1976–2026',
        hero_title: '알로에 전문 기업<br><span class="hero__title-accent">유니베라</span>가<br>50년 동안 연구한 것',
        hero_desc: '건강에 대한 확신은 근거에서 옵니다.<br>유니베라는 원료 재배부터 생산까지 직접 관리하며<br>50년간 알로에의 과학적 가능성을 연구해왔습니다.',
        hero_cta1: '알로에 퀵가이드 보기',
        hero_cta2: '유니베라 스토리',
        aloe_label: '알로에 전문성 · 알로에 퀵가이드',
        aloe_title: '왜 알로에인가,<br>왜 유니베라인가',
        aloe_desc: '알로에베라에는 200여 종의 생리활성 물질이 있습니다. 그러나 원료의 품질과 가공 방식에 따라 효과는 크게 달라집니다. 유니베라는 세계 4개국에서 직접 재배하고, 50년간 축적한 연구로 알로에의 핵심 성분을 최대한 보존합니다.',
        aloe_cta: '알로에 퀵가이드 전체 보기',
        trust_label: '수치로 보는 유니베라',
        trust_title: '50년 역사가 만든<br>신뢰의 근거',
        stat1_label: '창립연도',
        stat1_unit: '년',
        stat1_desc: '50년 한결같이 알로에 하나에 집중해온 전문성',
        stat2_label: '글로벌 농장',
        stat2_unit: '개국',
        stat2_desc: '멕시코·도미니카·미국·한국, 최적 기후에서 직접 재배',
        stat3_label: '농장 규모',
        stat3_unit: '만㎡',
        stat3_desc: '여의도 면적의 약 12배, 세계 최대 규모 알로에 농장',
        stat4_label: '알로에 연구',
        stat4_unit: '년+',
        stat4_desc: '국내외 특허와 논문으로 입증된 연구개발 역량',
        products_label: '제품 & 브랜드',
        products_title: '당신의 건강 고민,<br>어디에 해당하시나요?',
        products_desc: '50년 알로에 연구를 바탕으로 만든 기능별 건강기능식품. 눈·구강·면역·소화 등 9가지 기능에서 찾아보세요.',
        products_cta: '전체 제품 기능별로 보기',
        hub_label: '더 알아보기',
        hub_title: '유니베라를 더 깊이 탐색하세요',
        hub_story_label: '유니베라 소개',
        hub_story_title: '창립 스토리 &amp;<br>기업 철학',
        hub_story_desc: '1976년 창립부터 50년, 한결같이 알로에를 연구해온 이유',
        hub_story_btn: '브랜드 스토리 보기 →',
        hub_aloe_label: '알로에 전문성',
        hub_aloe_title: '알로에 퀵가이드',
        hub_aloe_desc: '알로에베라 성분부터 에코넷 재배 시스템까지, 쉽게 설명합니다',
        hub_aloe_btn: '알로에 퀵가이드 보기 →',
        hub_quality_label: '연구개발 & 품질',
        hub_quality_title: '품질 &amp; 인증',
        hub_quality_desc: 'GMP, FDA GRAS 등 국내외 공인 인증으로 확인하는 유니베라의 기준',
        hub_quality_btn: '품질·인증 보기 →',
        view_detail: '자세히 보기 →',
        aloe_card1_title: '에코넷 시스템',
        aloe_card1_desc: '농장에서 제품까지, 원료·재배·생산을 유니베라가 직접 관리합니다. 중간 공정 없이 원료 품질을 지킵니다.',
        aloe_card2_title: '알로에란?',
        aloe_card2_desc: '50년 연구가 밝혀낸 알로에베라의 과학적 근거. 어떤 성분이, 어떻게 우리 몸에 작용하는지 알기 쉽게 설명합니다.',
        aloe_card3_title: '품질 & 인증',
        aloe_card3_desc: 'GMP, FDA GRAS, Global GAP 등 국내외 품질 인증. 객관적인 검증이 유니베라의 신뢰 기준입니다.',
        cat_eye: '눈·두뇌',
        cat_oral: '구강',
        cat_immune: '면역·혈행',
        cat_fatigue: '피로개선',
        cat_liver: '간·영양',
        cat_blood: '혈당·체지방',
        cat_gut: '장·소화',
        cat_womens: '여성건강',
        cat_muscle: '근육·관절'
      },
      p: {
        about_index:  { title: '유니베라 소개', desc: '1976년 창립부터 50년, 알로에 하나에 집중해온 전문 기업 유니베라를 소개합니다.' },
        philosophy:   { title: '50년을 이어온 하나의 약속', desc: '알로에 하나에 집중하며 고객의 건강 곁에 있겠다는 유니베라의 변하지 않는 철학' },
        story:        { title: '1976년, 유니베라의 시작', desc: '알로에 전문 기업이 되기까지, 창립자의 신념과 50년의 여정' },
        history:      { title: '유니베라 50년 역사', desc: '1976년 창립부터 2026년 창립 50주년까지 주요 이정표' },
        global:       { title: '세계 4개국에서 키운 알로에', desc: '멕시코·도미니카·미국·한국, 최적의 기후 환경에서 직접 재배하는 3,733만㎡ 글로벌 농장' },
        certifications: { title: '객관적 검증이 신뢰입니다', desc: 'GMP, FDA GRAS, 세계일류상품 23년 연속 수상 등 국내외 공인 기관이 검증한 유니베라의 품질 근거' },
        directions:   { title: '유니베라 찾아오시는 길', desc: '본사 및 주요 시설 위치 안내' },
        aloe_index:   { label: '알로에 퀵가이드', title: '알로에 퀵가이드', desc: '원료부터 품질까지, 유니베라 알로에 전문성을 한눈에 확인하세요.' },
        econet:       { title: '에코넷 시스템', desc: '농장에서 제품까지, 유니베라가 직접 관리하는 수직계열화 통합 품질 관리 체계' },
        what_aloe:    { title: '알로에란 무엇인가', desc: '50년 연구가 밝혀낸 알로에베라의 과학적 사실' },
        ingredients:  { title: '원료 & 재배', desc: '3,733만㎡ 직영 농장에서 시작하는 품질 관리' },
        rnd:          { title: '연구개발 & 특허', desc: '50년간 축적한 연구개발 성과와 국내외 특허' },
        quality:      { title: '품질 & 인증', desc: '국내외 공인 기관이 검증한 유니베라의 품질 기준' },
        products_index: { title: '제품 & 브랜드', desc: '50년 알로에 연구를 담은 유니베라의 건강기능식품. 기능별로 찾거나 전체를 둘러보세요.' },
        by_function:  { title: '건강 고민별로 찾는 유니베라 제품', desc: '9가지 기능별로 분류된 알로에 건강기능식품' },
        all_products: { title: '전체 제품 목록', desc: '유니베라 건강기능식품 전체 목록을 확인하세요' },
        brands:       { title: '브랜드 소개', desc: '유니베라의 각 브랜드가 가진 철학과 특징' },
        sus_index:    { title: '오래 가는 기업이 되겠습니다', desc: '사람과 환경을 함께 생각하는 유니베라의 지속가능경영' },
        social:       { title: '사회성과', desc: '지역사회와 함께 성장하는 유니베라의 사회공헌 활동' },
        environment:  { title: '환경성과', desc: '자연에서 시작해 자연으로 돌아가는 유니베라의 환경 경영' },
        csv:          { title: '공유가치창출(CSV)', desc: '기업 성장과 사회 가치를 함께 만들어가는 공유가치창출' },
        newsroom:     { title: '보도자료', desc: '유니베라의 최신 보도자료와 뉴스를 확인하세요' },
        news:         { title: '기업 소식', desc: '유니베라의 최신 기업 소식을 전합니다' },
        videos:       { title: '영상 자료실', desc: '유니베라 관련 영상 자료를 모았습니다' },
        support_index: { title: '고객지원', desc: '유니베라 제품과 서비스에 관한 모든 문의를 도와드립니다' },
        faq:          { title: '자주 묻는 질문', desc: '제품·구매·배송 등 고객이 가장 많이 묻는 질문' },
        notice:       { title: '공지사항', desc: '유니베라의 공지사항을 확인하세요' },
        contact:      { title: '고객센터 안내', desc: '문의 유형에 따라 알맞은 채널로 빠르게 연결해 드립니다' }
      }
    },

    /* ── ENGLISH ────────────────────────────────────── */
    en: {
      gnb: {
        buy_btn: 'Buy at Members Mall',
        menu_open: 'Open Menu',
        menu_close: 'Close Menu',
        about: 'About UNIVERA',
        about_philosophy: 'Philosophy & Vision',
        about_story: 'Founding Story',
        about_history: 'History',
        about_global: 'Global Presence',
        about_certifications: 'Certifications & Awards',
        about_directions: 'Directions',
        aloe: 'Aloe Expertise',
        aloe_econet: 'ECONET System',
        aloe_what: 'What is Aloe?',
        aloe_ingredients: 'Ingredients & Farming',
        aloe_rnd: 'R&D & Patents',
        aloe_quality: 'Quality & Certification',
        products: 'Products & Brands',
        products_by_function: 'By Health Function',
        products_all: 'All Products',
        products_brands: 'Brand Overview',
        sustainability: 'Sustainability',
        sustainability_intro: 'Sustainability Overview',
        sustainability_social: 'Social Impact',
        sustainability_environment: 'Environmental Impact',
        sustainability_csv: 'Creating Shared Value',
        newsroom: 'Newsroom',
        newsroom_press: 'Press Releases',
        newsroom_news: 'Corporate News',
        newsroom_videos: 'Video Archive',
        support: 'Customer Support',
        support_faq: 'FAQ',
        support_notice: 'Notices',
        support_contact: 'Contact Us'
      },
      footer: {
        tagline: 'Aloe specialist since 1976',
        family_label: 'Family Sites',
        col_about: 'About UNIVERA',
        col_aloe: 'Aloe Expertise',
        col_products: 'Products & Brands',
        col_sustainability: 'Sustainability',
        col_newsroom: 'Newsroom',
        col_support: 'Customer Support',
        copyright: '© 2026 UNIVERA Co., Ltd. All rights reserved.'
      },
      common: {
        home: 'Home',
        scroll_top: 'Back to top',
        lang_label: 'Select Language'
      },
      index: {
        hero_eyebrow: '50th Anniversary · 1976–2026',
        hero_title: 'What UNIVERA,<br><span class="hero__title-accent">the Aloe Specialist</span>,<br>has researched for 50 years',
        hero_desc: 'Conviction in health comes from evidence.<br>Controlling every step from farming to production,<br>we have studied the scientific potential of aloe for 50 years.',
        hero_cta1: 'Aloe Quick Guide',
        hero_cta2: 'Our Story',
        aloe_label: 'Aloe Expertise · Aloe Quick Guide',
        aloe_title: 'Why Aloe?<br>Why UNIVERA?',
        aloe_desc: 'Aloe vera contains over 200 bioactive compounds. But effectiveness varies greatly depending on raw material quality and processing. UNIVERA grows aloe directly in 4 countries, preserving key compounds through 50 years of research.',
        aloe_cta: 'View Full Aloe Quick Guide',
        trust_label: 'UNIVERA by the Numbers',
        trust_title: 'The evidence behind<br>50 years of trust',
        stat1_label: 'Founded',
        stat1_unit: '',
        stat1_desc: 'Focused on aloe alone for half a century',
        stat2_label: 'Global Farms',
        stat2_unit: ' countries',
        stat2_desc: 'Mexico · Dominican Republic · USA · Korea — direct cultivation',
        stat3_label: 'Farm Area',
        stat3_unit: '万㎡',
        stat3_desc: '37.3M m² total — about 12× Yeouido Island, all company-owned',
        stat4_label: 'Aloe Research',
        stat4_unit: '+ years',
        stat4_desc: 'Proven through patents and papers at home and abroad',
        products_label: 'Products & Brands',
        products_title: 'Which health concern<br>matters most to you?',
        products_desc: 'Functional health foods built on 50 years of aloe research. Find what you need across 9 categories.',
        products_cta: 'Browse All Products by Function',
        hub_label: 'Learn More',
        hub_title: 'Explore UNIVERA in depth',
        hub_story_label: 'About UNIVERA',
        hub_story_title: 'Founding Story &amp;<br>Philosophy',
        hub_story_desc: '50 years of single-minded aloe research since 1976',
        hub_story_btn: 'Read Our Story →',
        hub_aloe_label: 'Aloe Expertise',
        hub_aloe_title: 'Aloe Quick Guide',
        hub_aloe_desc: 'From aloe compounds to the ECONET farming system, explained simply',
        hub_aloe_btn: 'View Aloe Guide →',
        hub_quality_label: 'R&D & Quality',
        hub_quality_title: 'Quality &amp; Certification',
        hub_quality_desc: 'GMP, FDA GRAS and more — our standards, independently verified',
        hub_quality_btn: 'View Quality & Certs →',
        view_detail: 'Learn more →',
        aloe_card1_title: 'ECONET System',
        aloe_card1_desc: 'From farm to product, UNIVERA manages every step — farming, processing, and production. Raw material quality is protected without intermediaries.',
        aloe_card2_title: 'What is Aloe?',
        aloe_card2_desc: 'The science behind aloe vera, revealed through 50 years of research. A clear explanation of which compounds work — and how.',
        aloe_card3_title: 'Quality & Certification',
        aloe_card3_desc: 'GMP, FDA GRAS, Global GAP and more — independent certifications that define the UNIVERA quality standard.',
        cat_eye: 'Eyes & Brain',
        cat_oral: 'Oral',
        cat_immune: 'Immune & Circulation',
        cat_fatigue: 'Fatigue Relief',
        cat_liver: 'Liver & Nutrition',
        cat_blood: 'Blood Sugar & Body Fat',
        cat_gut: 'Gut & Digestion',
        cat_womens: "Women's Health",
        cat_muscle: 'Muscle & Joints'
      },
      p: {
        about_index:  { title: 'About UNIVERA', desc: 'UNIVERA — the aloe specialist founded in 1976, dedicated to a single raw material for 50 years.' },
        philosophy:   { title: 'One Promise, Kept for 50 Years', desc: "UNIVERA's unchanging philosophy: focused on aloe alone, always beside our customers' health" },
        story:        { title: 'UNIVERA, 1976', desc: 'The founding belief and 50-year journey to becoming the aloe specialist' },
        history:      { title: '50 Years of UNIVERA', desc: 'Key milestones from founding in 1976 to the 50th anniversary in 2026' },
        global:       { title: 'Aloe Grown in 4 Countries', desc: 'Mexico · Dominican Republic · USA · Korea — 37.33M m² of company-owned farms in optimal climates' },
        certifications: { title: 'Objective Verification Is Trust', desc: 'GMP, FDA GRAS, 23 consecutive World-Class Product selections — quality verified by independent bodies' },
        directions:   { title: 'Getting to UNIVERA', desc: 'Location guide for our headquarters and key facilities' },
        aloe_index:   { label: 'Aloe Quick Guide', title: 'Aloe Quick Guide', desc: "From raw materials to quality — UNIVERA's aloe expertise at a glance." },
        econet:       { title: 'ECONET System', desc: 'From farm to product — a vertically integrated quality management system, managed entirely by UNIVERA' },
        what_aloe:    { title: 'What Is Aloe?', desc: 'The science behind aloe vera, revealed through 50 years of research' },
        ingredients:  { title: 'Ingredients & Farming', desc: 'Quality management starting at 37.33M m² of directly managed farms' },
        rnd:          { title: 'R&D & Patents', desc: '50 years of accumulated R&D — domestic and international patents' },
        quality:      { title: 'Quality & Certification', desc: "UNIVERA's quality standards verified by certified bodies at home and abroad" },
        products_index: { title: 'Products & Brands', desc: "UNIVERA's functional health foods built on 50 years of aloe research. Browse by function or view all." },
        by_function:  { title: 'Find UNIVERA Products by Health Concern', desc: 'Aloe functional health foods classified across 9 categories' },
        all_products: { title: 'All Products', desc: 'Browse the complete UNIVERA health food lineup' },
        brands:       { title: 'Brand Overview', desc: 'The philosophy and characteristics of the UNIVERA brand' },
        sus_index:    { title: 'Built to Last', desc: "UNIVERA's sustainability management — balancing people and the planet" },
        social:       { title: 'Social Impact', desc: "Social contribution activities — growing together with local communities" },
        environment:  { title: 'Environmental Impact', desc: "Starting from nature, returning to nature — UNIVERA's environmental management" },
        csv:          { title: 'Creating Shared Value (CSV)', desc: 'Creating shared value where business growth and social value grow together' },
        newsroom:     { title: 'Press Releases', desc: 'Read the latest UNIVERA press releases and news' },
        news:         { title: 'Corporate News', desc: 'The latest news from UNIVERA' },
        videos:       { title: 'Video Archive', desc: 'A collection of UNIVERA video content' },
        support_index: { title: 'Customer Support', desc: 'We are here to help with all inquiries about UNIVERA products and services' },
        faq:          { title: 'Frequently Asked Questions', desc: 'Our most-asked questions on products, purchasing, and delivery' },
        notice:       { title: 'Notices', desc: 'Read official notices from UNIVERA' },
        contact:      { title: 'Contact Us', desc: 'Guidance on product, purchase, and general inquiry channels' }
      }
    },

    /* ── CHINESE SIMPLIFIED ─────────────────────────── */
    zh: {
      gnb: {
        buy_btn: '在会员商城购买',
        menu_open: '打开菜单',
        menu_close: '关闭菜单',
        about: '关于UNIVERA',
        about_philosophy: '企业理念 & 愿景',
        about_story: '创立故事',
        about_history: '发展历程',
        about_global: '全球布局',
        about_certifications: '认证 & 荣誉',
        about_directions: '交通指南',
        aloe: '芦荟专业性',
        aloe_econet: 'ECONET系统',
        aloe_what: '什么是芦荟？',
        aloe_ingredients: '原料 & 种植',
        aloe_rnd: '研发 & 专利',
        aloe_quality: '品质 & 认证',
        products: '产品 & 品牌',
        products_by_function: '按功能分类',
        products_all: '全部产品',
        products_brands: '品牌介绍',
        sustainability: '可持续经营',
        sustainability_intro: '可持续经营介绍',
        sustainability_social: '社会成果',
        sustainability_environment: '环境成果',
        sustainability_csv: '共享价值创造',
        newsroom: '新闻室',
        newsroom_press: '新闻稿',
        newsroom_news: '企业动态',
        newsroom_videos: '视频资料',
        support: '客户支持',
        support_faq: '常见问题',
        support_notice: '公告',
        support_contact: '联系我们'
      },
      footer: {
        tagline: '芦荟专业企业，自1976年起50年',
        family_label: '关联网站',
        col_about: '关于UNIVERA',
        col_aloe: '芦荟专业性',
        col_products: '产品 & 品牌',
        col_sustainability: '可持续经营',
        col_newsroom: '新闻室',
        col_support: '客户支持',
        copyright: '© 2026 UNIVERA Co., Ltd. 保留所有权利。'
      },
      common: {
        home: '首页',
        scroll_top: '返回顶部',
        lang_label: '选择语言'
      },
      index: {
        hero_eyebrow: '创立50周年 · 1976–2026',
        hero_title: '芦荟专业企业<br><span class="hero__title-accent">UNIVERA</span><br>50年的研究成果',
        hero_desc: '健康的信心来自于科学依据。<br>从原料种植到生产全程自主管控，<br>50年来持续研究芦荟的科学潜力。',
        hero_cta1: '芦荟快速指南',
        hero_cta2: 'UNIVERA的故事',
        aloe_label: '芦荟专业性 · 芦荟快速指南',
        aloe_title: '为何选择芦荟？<br>为何选择UNIVERA？',
        aloe_desc: '芦荟含有200余种生理活性物质。然而功效因原料品质和加工方式不同而有很大差异。UNIVERA在全球4个国家直营种植，通过50年积累的研究，最大程度保留芦荟核心成分。',
        aloe_cta: '查看完整芦荟指南',
        trust_label: '用数据看UNIVERA',
        trust_title: '50年历史铸就的<br>信赖基石',
        stat1_label: '创立年份',
        stat1_unit: '年',
        stat1_desc: '半个世纪专注于芦荟研究',
        stat2_label: '全球农场',
        stat2_unit: '个国家',
        stat2_desc: '墨西哥·多米尼加·美国·韩国直营种植',
        stat3_label: '农场规模',
        stat3_unit: '万㎡',
        stat3_desc: '约为汝矣岛的12倍，全球最大规模芦荟农场',
        stat4_label: '芦荟研究',
        stat4_unit: '年+',
        stat4_desc: '通过国内外专利和论文证明的研发实力',
        products_label: '产品 & 品牌',
        products_title: '您最关心哪方面<br>的健康？',
        products_desc: '基于50年芦荟研究打造的功能性健康食品，涵盖眼睛、口腔、免疫、消化等9大功能领域。',
        products_cta: '按功能浏览全部产品',
        hub_label: '深入了解',
        hub_title: '深入探索UNIVERA',
        hub_story_label: '关于UNIVERA',
        hub_story_title: '创立故事 &amp;<br>企业理念',
        hub_story_desc: '自1976年创立以来50年，一心专注芦荟研究的初心',
        hub_story_btn: '查看品牌故事 →',
        hub_aloe_label: '芦荟专业性',
        hub_aloe_title: '芦荟快速指南',
        hub_aloe_desc: '从芦荟成分到ECONET种植系统，一目了然',
        hub_aloe_btn: '查看芦荟指南 →',
        hub_quality_label: '研发 & 品质',
        hub_quality_title: '品质 &amp; 认证',
        hub_quality_desc: 'GMP、FDA GRAS等国内外权威认证，客观验证UNIVERA的标准',
        hub_quality_btn: '查看品质认证 →',
        view_detail: '了解更多 →',
        aloe_card1_title: 'ECONET系统',
        aloe_card1_desc: '从农场到产品，UNIVERA直接管理原料·种植·生产的每个环节。无中间工序，守护原料品质。',
        aloe_card2_title: '什么是芦荟？',
        aloe_card2_desc: '50年研究揭示的芦荟科学依据。通俗易懂地解析芦荟中哪些成分如何作用于人体。',
        aloe_card3_title: '品质 & 认证',
        aloe_card3_desc: 'GMP、FDA GRAS、Global GAP等国内外品质认证。客观验证是UNIVERA信赖的基准。',
        cat_eye: '眼睛·大脑',
        cat_oral: '口腔',
        cat_immune: '免疫·血行',
        cat_fatigue: '改善疲劳',
        cat_liver: '肝脏·营养',
        cat_blood: '血糖·体脂肪',
        cat_gut: '肠道·消化',
        cat_womens: '女性健康',
        cat_muscle: '肌肉·关节'
      },
      p: {
        about_index:  { title: '关于UNIVERA', desc: '自1976年创立以来，专注芦荟50年的专业企业UNIVERA。' },
        philosophy:   { title: '50年坚守的一个承诺', desc: 'UNIVERA始终如一的企业哲学：专注芦荟，守护客户健康' },
        story:        { title: 'UNIVERA，1976年的起点', desc: '成为芦荟专业企业的历程——创始人的信念与50年的旅程' },
        history:      { title: 'UNIVERA 50年历史', desc: '从1976年创立到2026年创立50周年的重要里程碑' },
        global:       { title: '在四个国家培育的芦荟', desc: '墨西哥·多米尼加·美国·韩国，在最佳气候环境下直营种植的3,733万㎡全球农场' },
        certifications: { title: '客观认证即是信赖', desc: 'GMP、FDA GRAS、连续23年世界一流商品——国内外权威机构认证的质量依据' },
        directions:   { title: '前往UNIVERA', desc: '总部及主要设施位置指南' },
        aloe_index:   { label: '芦荟快速指南', title: '芦荟快速指南', desc: '从原料到品质，一目了然了解UNIVERA的芦荟专业性。' },
        econet:       { title: 'ECONET系统', desc: '从农场到产品，UNIVERA直接管理的垂直整合品质管理体系' },
        what_aloe:    { title: '什么是芦荟？', desc: '50年研究揭示的芦荟科学真相' },
        ingredients:  { title: '原料 & 种植', desc: '从3,733万㎡直营农场开始的品质管理' },
        rnd:          { title: '研发 & 专利', desc: '50年积累的研发成果与国内外专利' },
        quality:      { title: '品质 & 认证', desc: 'UNIVERA品质标准由国内外权威机构认证' },
        products_index: { title: '产品 & 品牌', desc: '基于50年芦荟研究的UNIVERA功能性健康食品。按功能查找或浏览全部。' },
        by_function:  { title: '按健康需求查找UNIVERA产品', desc: '按9大功能分类的芦荟功能性健康食品' },
        all_products: { title: '全部产品', desc: '查看UNIVERA健康食品完整目录' },
        brands:       { title: '品牌介绍', desc: 'UNIVERA品牌的理念与特色' },
        sus_index:    { title: '成为长久发展的企业', desc: 'UNIVERA可持续经营——兼顾人与自然' },
        social:       { title: '社会成果', desc: 'UNIVERA社会贡献活动——与地区社区共同成长' },
        environment:  { title: '环境成果', desc: '源于自然，回归自然——UNIVERA环境经营' },
        csv:          { title: '共享价值创造（CSV）', desc: '企业成长与社会价值共同创造的共享价值模式' },
        newsroom:     { title: '新闻稿', desc: '查看UNIVERA最新新闻稿和资讯' },
        news:         { title: '企业动态', desc: 'UNIVERA最新企业动态' },
        videos:       { title: '视频资料', desc: 'UNIVERA相关视频资料汇总' },
        support_index: { title: '客户支持', desc: '欢迎就UNIVERA产品和服务的所有问题与我们联系' },
        faq:          { title: '常见问题', desc: '关于产品、购买、配送等最常见问题解答' },
        notice:       { title: '公告', desc: '查看UNIVERA官方公告' },
        contact:      { title: '联系我们', desc: '产品咨询、购买咨询及一般咨询渠道指南' }
      }
    },

    /* ── JAPANESE ───────────────────────────────────── */
    ja: {
      gnb: {
        buy_btn: 'メンバーズモールで購入',
        menu_open: 'メニューを開く',
        menu_close: 'メニューを閉じる',
        about: 'UNIVERAについて',
        about_philosophy: '企業理念 & ビジョン',
        about_story: '創立ストーリー',
        about_history: '主な沿革',
        about_global: 'グローバル展開',
        about_certifications: '認証 & 受賞',
        about_directions: 'アクセス',
        aloe: 'アロエの専門性',
        aloe_econet: 'ECONETシステム',
        aloe_what: 'アロエとは？',
        aloe_ingredients: '原料 & 栽培',
        aloe_rnd: '研究開発 & 特許',
        aloe_quality: '品質 & 認証',
        products: '製品 & ブランド',
        products_by_function: '機能別分類',
        products_all: '全製品一覧',
        products_brands: 'ブランド紹介',
        sustainability: 'サステナビリティ',
        sustainability_intro: 'サステナビリティ概要',
        sustainability_social: '社会成果',
        sustainability_environment: '環境成果',
        sustainability_csv: '共有価値創造（CSV）',
        newsroom: 'ニュースルーム',
        newsroom_press: 'プレスリリース',
        newsroom_news: '企業ニュース',
        newsroom_videos: '動画アーカイブ',
        support: 'カスタマーサポート',
        support_faq: 'よくある質問',
        support_notice: 'お知らせ',
        support_contact: 'お問い合わせ'
      },
      footer: {
        tagline: 'アロエ専門企業、1976年から50年',
        family_label: 'ファミリーサイト',
        col_about: 'UNIVERAについて',
        col_aloe: 'アロエの専門性',
        col_products: '製品 & ブランド',
        col_sustainability: 'サステナビリティ',
        col_newsroom: 'ニュースルーム',
        col_support: 'カスタマーサポート',
        copyright: '© 2026 UNIVERA Co., Ltd. All rights reserved.'
      },
      common: {
        home: 'ホーム',
        scroll_top: 'ページトップへ',
        lang_label: '言語選択'
      },
      index: {
        hero_eyebrow: '創立50周年 · 1976–2026',
        hero_title: 'アロエ専門企業<br><span class="hero__title-accent">UNIVERA</span>が<br>50年間研究してきたこと',
        hero_desc: '健康への確信は根拠から生まれます。<br>原料栽培から生産まで自社管理のもと、<br>50年にわたりアロエの科学的可能性を研究しています。',
        hero_cta1: 'アロエクイックガイドを見る',
        hero_cta2: 'UNIVERAのストーリー',
        aloe_label: 'アロエの専門性 · アロエクイックガイド',
        aloe_title: 'なぜアロエなのか、<br>なぜUNIVERAなのか',
        aloe_desc: 'アロエベラには200種以上の生理活性物質が含まれています。しかし原料の品質や加工方法によって効果は大きく異なります。UNIVERAは4カ国で直営栽培し、50年間の研究でアロエの核心成分を最大限に保存しています。',
        aloe_cta: 'アロエクイックガイド全体を見る',
        trust_label: '数字で見るUNIVERA',
        trust_title: '50年の歴史が築いた<br>信頼の根拠',
        stat1_label: '創立年',
        stat1_unit: '年',
        stat1_desc: '半世紀にわたり、アロエ一筋で歩んできました',
        stat2_label: 'グローバル農場',
        stat2_unit: 'カ国',
        stat2_desc: 'メキシコ・ドミニカ・米国・韓国で直営栽培',
        stat3_label: '農場規模',
        stat3_unit: '万㎡',
        stat3_desc: '汝矣島の約12倍、世界最大規模のアロエ農場',
        stat4_label: 'アロエ研究',
        stat4_unit: '年+',
        stat4_desc: '国内外の特許・論文で実証された研究開発力',
        products_label: '製品 & ブランド',
        products_title: 'あなたの健康のお悩みは、<br>どれですか？',
        products_desc: '50年のアロエ研究に基づく機能別健康機能食品。目・口腔・免疫・消化など9つの機能からお探しください。',
        products_cta: '全製品を機能別に見る',
        hub_label: 'もっと詳しく',
        hub_title: 'UNIVERAをもっと深く探索する',
        hub_story_label: 'UNIVERAについて',
        hub_story_title: '創立ストーリー &amp;<br>企業理念',
        hub_story_desc: '1976年創立から50年、一貫してアロエを研究してきた理由',
        hub_story_btn: 'ブランドストーリーを見る →',
        hub_aloe_label: 'アロエの専門性',
        hub_aloe_title: 'アロエクイックガイド',
        hub_aloe_desc: 'アロエ成分からECONET栽培システムまで、わかりやすく解説',
        hub_aloe_btn: 'アロエガイドを見る →',
        hub_quality_label: '研究開発 & 品質',
        hub_quality_title: '品質 &amp; 認証',
        hub_quality_desc: 'GMP、FDA GRASなど国内外の公認認証でUNIVERAの基準を確認',
        hub_quality_btn: '品質・認証を見る →',
        view_detail: 'もっと見る →',
        aloe_card1_title: 'ECONETシステム',
        aloe_card1_desc: '農場から製品まで、原料・栽培・生産をUNIVERAが直接管理。中間工程なしに原料の品質を守ります。',
        aloe_card2_title: 'アロエとは？',
        aloe_card2_desc: '50年の研究が明らかにしたアロエベラの科学的根拠。どの成分がどのように体に作用するかをわかりやすく解説。',
        aloe_card3_title: '品質 & 認証',
        aloe_card3_desc: 'GMP、FDA GRAS、Global GAPなど国内外の品質認証。客観的な検証がUNIVERAの信頼基準です。',
        cat_eye: '目・脳',
        cat_oral: '口腔',
        cat_immune: '免疫・血行',
        cat_fatigue: '疲労改善',
        cat_liver: '肝臓・栄養',
        cat_blood: '血糖・体脂肪',
        cat_gut: '腸・消化',
        cat_womens: '女性の健康',
        cat_muscle: '筋肉・関節'
      },
      p: {
        about_index:  { title: 'UNIVERAについて', desc: '1976年創立、アロエ一筋50年の専門企業UNIVERAをご紹介します。' },
        philosophy:   { title: '50年続く、ひとつの約束', desc: 'アロエ一筋にこだわり、お客様の健康のそばに寄り添うUNIVERAの変わらぬ企業哲学' },
        story:        { title: 'UNIVERA、1976年の始まり', desc: 'アロエ専門企業になるまでの道のり——創業者の信念と50年の歩み' },
        history:      { title: 'UNIVERA 50年の歴史', desc: '1976年の創立から2026年の創立50周年まで、主要なマイルストーン' },
        global:       { title: '4カ国で育てたアロエ', desc: 'メキシコ・ドミニカ・米国・韓国、最適な気候環境で直接栽培する3,733万㎡のグローバル農場' },
        certifications: { title: '客観的な検証が信頼です', desc: 'GMP、FDA GRAS、世界一流商品23年連続受賞——国内外の公認機関が検証したUNIVERAの品質根拠' },
        directions:   { title: 'UNIVERAへのアクセス', desc: '本社および主要施設の所在地・アクセス案内' },
        aloe_index:   { label: 'アロエクイックガイド', title: 'アロエクイックガイド', desc: '原料から品質まで、UNIVERAのアロエ専門性を一目でご確認ください。' },
        econet:       { title: 'ECONETシステム', desc: '農場から製品まで、UNIVERAが直接管理する垂直統合型品質管理体制' },
        what_aloe:    { title: 'アロエとは何か？', desc: '50年の研究が明らかにしたアロエベラの科学的事実' },
        ingredients:  { title: '原料 & 栽培', desc: '3,733万㎡の直営農場から始まる品質管理' },
        rnd:          { title: '研究開発 & 特許', desc: '50年間蓄積された研究開発の成果と国内外の特許' },
        quality:      { title: '品質 & 認証', desc: 'UNIVERAの品質基準を国内外の公認機関が検証' },
        products_index: { title: '製品 & ブランド', desc: '50年のアロエ研究を込めたUNIVERAの機能性健康食品。機能別に探すか、全体をご覧ください。' },
        by_function:  { title: '健康のお悩み別UNIVERA製品', desc: '9つの機能別に分類されたアロエ機能性健康食品' },
        all_products: { title: '全製品一覧', desc: 'UNIVERA健康食品の全ラインナップをご確認ください' },
        brands:       { title: 'ブランド紹介', desc: 'UNIVERAブランドの理念と特長' },
        sus_index:    { title: '永続する企業を目指して', desc: '人と環境をともに考えるUNIVERAのサステナビリティ経営' },
        social:       { title: '社会成果', desc: '地域社会とともに成長するUNIVERAの社会貢献活動' },
        environment:  { title: '環境成果', desc: '自然から始まり、自然に還るUNIVERAの環境経営' },
        csv:          { title: '共有価値創造（CSV）', desc: '企業の成長と社会価値をともに創り出す共有価値創造' },
        newsroom:     { title: 'プレスリリース', desc: 'UNIVERAの最新プレスリリースとニュースをご覧ください' },
        news:         { title: '企業ニュース', desc: 'UNIVERAからの最新企業ニュース' },
        videos:       { title: '動画アーカイブ', desc: 'UNIVERAの動画コンテンツをまとめました' },
        support_index: { title: 'カスタマーサポート', desc: 'UNIVERA製品・サービスに関するすべてのお問い合わせをサポートします' },
        faq:          { title: 'よくある質問', desc: '製品・購入・配送などに関してよく寄せられるご質問' },
        notice:       { title: 'お知らせ', desc: 'UNIVERAからの公式お知らせをご確認ください' },
        contact:      { title: 'お問い合わせ', desc: '製品・購入・一般的なお問い合わせ窓口のご案内' }
      }
    }
  };

  /* ─── Engine ───────────────────────────────────────── */
  var lang = localStorage.getItem('univera_lang') || 'ko';

  function get(key) {
    var parts = key.split('.');
    var obj = T[lang] || T.ko;
    for (var i = 0; i < parts.length; i++) {
      if (obj == null) break;
      obj = obj[parts[i]];
    }
    if (obj == null || obj === undefined) {
      obj = T.ko;
      for (var j = 0; j < parts.length; j++) {
        if (obj == null) return key;
        obj = obj[parts[j]];
      }
    }
    return (obj != null && obj !== undefined) ? obj : key;
  }

  function apply() {
    /* textContent */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = get(el.getAttribute('data-i18n'));
      if (v) el.textContent = v;
    });
    /* innerHTML (HTML 포함 콘텐츠) */
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var v = get(el.getAttribute('data-i18n-html'));
      if (v) el.innerHTML = v;
    });
    /* aria-label */
    document.querySelectorAll('[data-i18n-label]').forEach(function (el) {
      var v = get(el.getAttribute('data-i18n-label'));
      if (v) el.setAttribute('aria-label', v);
    });
    /* html[lang] 갱신 */
    document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : lang);
    /* 활성 버튼 표시 */
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.dataset.lang === lang);
    });
  }

  function setLang(newLang) {
    if (!T[newLang]) return;
    lang = newLang;
    localStorage.setItem('univera_lang', lang);
    apply();
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () { setLang(this.dataset.lang); });
    });
    apply();
  });

  /* 외부 공개 API */
  window.UNIVERA_T = get;
  window.UNIVERA_setLang = setLang;
})();
