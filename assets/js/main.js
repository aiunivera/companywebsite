/* ===================================
   유니베라 기업홈페이지 main.js

   MODULE 01: DOMContentLoaded 진입점
   MODULE 02: GNB — 모바일 햄버거 메뉴
   MODULE 03: GNB — 모바일 아코디언 서브메뉴
   MODULE 04: GNB — 스크롤 scrolled 상태
   MODULE 05: GNB — 현재 페이지 is-active 표시
   MODULE 06: GNB — body padding-top 보정
   MODULE 07: 카운터 애니메이션 (메인 전용)
   MODULE 08: 스크롤 To Top 버튼
   MODULE 09: 스무스 앵커 스크롤 (오프셋 보정)
   MODULE 10: 섹션 페이드인 (IntersectionObserver)
=================================== */

document.addEventListener('DOMContentLoaded', function () {
  initMobileMenu();
  initMobileAccordion();
  initScrollState();
  initActiveNav();
  initBodyPadding();
  initCounters();
  initScrollTop();
  initSmoothAnchor();
  initFadeIn();
  initFaqAccordion();
});

/* ===================================
   MODULE 02: GNB 햄버거 메뉴
=================================== */
function initMobileMenu() {
  var hamburger = document.getElementById('gnbHamburger');
  var nav       = document.getElementById('gnbNav');
  var overlay   = document.getElementById('gnbOverlay');

  if (!hamburger || !nav) return;

  function openMenu() {
    nav.classList.add('is-open');
    if (overlay) overlay.classList.add('is-active');
    document.body.classList.add('menu-open');
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', window.UNIVERA_T ? window.UNIVERA_T('gnb.menu_close') : '메뉴 닫기');
  }

  function closeMenu() {
    nav.classList.remove('is-open');
    if (overlay) overlay.classList.remove('is-active');
    document.body.classList.remove('menu-open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', window.UNIVERA_T ? window.UNIVERA_T('gnb.menu_open') : '메뉴 열기');
    document.querySelectorAll('.gnb__item.is-open').forEach(function (el) {
      el.classList.remove('is-open');
    });
  }

  hamburger.addEventListener('click', function () {
    if (hamburger.getAttribute('aria-expanded') === 'true') {
      closeMenu();
    } else {
      openMenu();
    }
  });

  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  /* 리사이즈 시 데스크탑 너비로 가면 메뉴 닫기 */
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) closeMenu();
  });
}

/* ===================================
   MODULE 03: 모바일 아코디언 서브메뉴
=================================== */
function initMobileAccordion() {
  document.querySelectorAll('.gnb__item').forEach(function (item) {
    var link     = item.querySelector('.gnb__link');
    var dropdown = item.querySelector('.gnb__dropdown');

    if (!dropdown || !link) return;

    link.addEventListener('click', function (e) {
      if (window.innerWidth > 768) return;
      e.preventDefault();

      var isOpen = item.classList.contains('is-open');
      document.querySelectorAll('.gnb__item.is-open').forEach(function (el) {
        el.classList.remove('is-open');
      });

      if (!isOpen) {
        item.classList.add('is-open');
      }
    });
  });
}

/* ===================================
   MODULE 04: GNB 스크롤 scrolled 상태
=================================== */
function initScrollState() {
  var gnb = document.getElementById('gnb');
  if (!gnb) return;

  function onScroll() {
    if (window.scrollY > 60) {
      gnb.classList.add('is-scrolled');
    } else {
      gnb.classList.remove('is-scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ===================================
   MODULE 05: GNB 현재 페이지 is-active
=================================== */
function initActiveNav() {
  var path = window.location.pathname;

  /* 섹션 접두사로 매칭 */
  var sectionMap = {
    '/about':          '[data-menu="about"]',
    '/aloe':           '[data-menu="aloe"]',
    '/products':       '[data-menu="products"]',
    '/sustainability':  '[data-menu="sustainability"]',
    '/newsroom':       '[data-menu="newsroom"]',
    '/support':        '[data-menu="support"]',
  };

  Object.keys(sectionMap).forEach(function (prefix) {
    if (path.indexOf(prefix) === 0) {
      var item = document.querySelector(sectionMap[prefix]);
      if (item) item.classList.add('is-active');
    }
  });
}

/* ===================================
   MODULE 06: body padding-top 보정
=================================== */
function initBodyPadding() {
  var gnb = document.getElementById('gnb');
  if (!gnb) return;

  function adjust() {
    document.body.style.paddingTop = gnb.offsetHeight + 'px';
  }

  adjust();
  window.addEventListener('resize', adjust);
}

/* ===================================
   MODULE 07: 카운터 애니메이션
=================================== */
function initCounters() {
  var counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;

      var el       = entry.target;
      var target   = parseInt(el.getAttribute('data-count'), 10);
      var suffix   = el.getAttribute('data-suffix') || '';
      var duration = 2000;

      if (prefersReduced) {
        el.textContent = target.toLocaleString('ko-KR') + suffix;
        observer.unobserve(el);
        return;
      }

      var start = null;

      function step(timestamp) {
        if (!start) start = timestamp;
        var progress = Math.min((timestamp - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3); /* easeOutCubic */
        el.textContent = Math.floor(eased * target).toLocaleString('ko-KR') + suffix;
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = target.toLocaleString('ko-KR') + suffix;
        }
      }

      requestAnimationFrame(step);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(function (el) {
    observer.observe(el);
  });
}

/* ===================================
   MODULE 08: 스크롤 To Top 버튼
=================================== */
function initScrollTop() {
  var btn = document.getElementById('scrollTop');
  if (!btn) return;

  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      btn.classList.add('is-visible');
    } else {
      btn.classList.remove('is-visible');
    }
  }, { passive: true });

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ===================================
   MODULE 09: 스무스 앵커 스크롤 (GNB 오프셋)
=================================== */
function initSmoothAnchor() {
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var id = link.getAttribute('href').slice(1);
      if (!id) return;

      var target = document.getElementById(id);
      if (!target) return;

      e.preventDefault();

      var gnb    = document.getElementById('gnb');
      var offset = gnb ? gnb.offsetHeight : 72;
      var top    = target.getBoundingClientRect().top + window.scrollY - offset - 16;

      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });
}

/* ===================================
   MODULE 10: 섹션 페이드인
=================================== */
function initFadeIn() {
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var elements = document.querySelectorAll('.fade-in');

  if (!elements.length) return;

  if (prefersReduced) {
    elements.forEach(function (el) {
      el.classList.add('is-visible');
    });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  elements.forEach(function (el) {
    observer.observe(el);
  });
}

/* ===================================
   MODULE 11: FAQ 아코디언 & 카테고리 탭
=================================== */
function initFaqAccordion() {
  var tabs  = document.querySelectorAll('.faq-tab');
  var items = document.querySelectorAll('.faq-item');
  var empty = document.querySelector('.faq-empty');

  if (!tabs.length && !items.length) return;

  /* 카테고리 탭 필터 */
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) {
        t.classList.remove('is-active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('is-active');
      tab.setAttribute('aria-selected', 'true');

      var category = tab.getAttribute('data-category');
      var visible  = 0;

      items.forEach(function (item) {
        var match = category === 'all' || item.getAttribute('data-category') === category;
        item.style.display = match ? '' : 'none';
        if (match) visible++;
      });

      if (empty) {
        if (visible === 0) {
          empty.classList.add('is-visible');
        } else {
          empty.classList.remove('is-visible');
        }
      }
    });
  });

  /* 아코디언 열기/닫기 */
  items.forEach(function (item) {
    var btn = item.querySelector('.faq-item__btn');
    if (!btn) return;

    btn.addEventListener('click', function () {
      var isOpen = item.classList.contains('is-open');

      /* 다른 항목 모두 닫기 */
      items.forEach(function (other) {
        other.classList.remove('is-open');
        var otherBtn = other.querySelector('.faq-item__btn');
        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
      });

      /* 클릭한 항목 토글 */
      if (!isOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}
