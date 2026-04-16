/* ============================================================
   RUGANINTWALI PATRICK — script.js
   Loader · Background patterns · Slideshow · Custom cursor
   ============================================================ */

/* ---------- Imigongo SVG patterns ---------- */
const PATTERNS = [
  // 1 — Square spiral (coil)
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="60" height="60">
    <path d="M4,4 L56,4 L56,56 L4,56 L4,11 L49,11 L49,49 L11,49 L11,18 L42,18 L42,42 L18,42 L18,25 L35,25 L35,35 L25,35 L25,30 L30,30"
      fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square" stroke-linejoin="miter"/>
  </svg>`,

  // 2 — Zigzag rows
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="60" height="60">
    <polyline points="0,12 10,3 20,12 30,3 40,12 50,3 60,12"
      fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="miter"/>
    <polyline points="0,30 10,21 20,30 30,21 40,30 50,21 60,30"
      fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="miter"/>
    <polyline points="0,48 10,39 20,48 30,39 40,48 50,39 60,48"
      fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="miter"/>
  </svg>`,

  // 3 — Concentric diamonds
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="60" height="60">
    <polygon points="30,2 58,30 30,58 2,30"
      fill="none" stroke="currentColor" stroke-width="2.5"/>
    <polygon points="30,13 47,30 30,47 13,30"
      fill="none" stroke="currentColor" stroke-width="2.5"/>
    <polygon points="30,24 36,30 30,36 24,30"
      fill="none" stroke="currentColor" stroke-width="2.5"/>
  </svg>`,

  // 4 — Nested squares
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="60" height="60">
    <rect x="3" y="3" width="54" height="54" fill="none" stroke="currentColor" stroke-width="2.5"/>
    <rect x="13" y="13" width="34" height="34" fill="none" stroke="currentColor" stroke-width="2.5"/>
    <rect x="23" y="23" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"/>
  </svg>`,

  // 5 — Cross + inner square
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="60" height="60">
    <line x1="30" y1="3" x2="30" y2="57" stroke="currentColor" stroke-width="3"/>
    <line x1="3" y1="30" x2="57" y2="30" stroke="currentColor" stroke-width="3"/>
    <rect x="19" y="19" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5"/>
  </svg>`,

  // 6 — Concentric triangles
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="60" height="60">
    <polygon points="30,2 58,57 2,57"
      fill="none" stroke="currentColor" stroke-width="2.5"/>
    <polygon points="30,16 46,47 14,47"
      fill="none" stroke="currentColor" stroke-width="2.5"/>
    <polygon points="30,30 36,42 24,42"
      fill="none" stroke="currentColor" stroke-width="2.5"/>
  </svg>`,

  // 7 — Diamond cross
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="60" height="60">
    <polygon points="30,2 58,30 30,58 2,30"
      fill="none" stroke="currentColor" stroke-width="2.5"/>
    <line x1="30" y1="2" x2="30" y2="58" stroke="currentColor" stroke-width="2"/>
    <line x1="2" y1="30" x2="58" y2="30" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  // 8 — Step spiral (L-shapes)
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="60" height="60">
    <path d="M5,30 L5,5 L55,5 L55,55 L5,55 L5,38"
      fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square"/>
    <path d="M14,38 L14,14 L46,14 L46,46 L22,46"
      fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square"/>
    <path d="M22,38 L22,22 L38,22 L38,38 L30,38"
      fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square"/>
  </svg>`,
];

/* ---------- Loader ---------- */
(function initLoader() {
  const loader       = document.getElementById('loader');
  const loaderPats   = document.getElementById('loader-patterns');
  const loaderName   = document.getElementById('loader-name');
  const loaderSub    = document.getElementById('loader-sub');
  if (!loader) return;

  // Place random pattern tiles across the loader
  const TILE_COUNT = 28;
  const tiles = [];
  for (let i = 0; i < TILE_COUNT; i++) {
    const el = document.createElement('div');
    el.className = 'lp-piece';
    const size = 50 + Math.random() * 60;
    el.style.cssText = `
      left: ${Math.random() * 100}%;
      top:  ${Math.random() * 100}%;
      width:  ${size}px;
      height: ${size}px;
      --rot: ${Math.floor(Math.random() * 8) * 45}deg;
    `;
    el.innerHTML = PATTERNS[i % PATTERNS.length];
    loaderPats.appendChild(el);
    tiles.push(el);
  }

  // Stagger tiles in
  tiles.forEach((t, i) => {
    setTimeout(() => t.classList.add('show'), 60 + i * 70);
  });

  // Animate name letters
  const letters = loaderName ? loaderName.querySelectorAll('span') : [];
  letters.forEach((s, i) => {
    setTimeout(() => s.classList.add('show'), 400 + i * 60);
  });

  // Show subtitle
  if (loaderSub) setTimeout(() => loaderSub.classList.add('show'), 400 + letters.length * 60 + 200);

  // Hide loader after animation
  const totalMs = 400 + letters.length * 60 + 800;
  setTimeout(() => {
    loader.classList.add('hidden');
  }, Math.max(totalMs, 2200));
})();

/* ---------- Background Patterns — floating + cursor repulsion ---------- */
(function initBgPatterns() {
  const container = document.getElementById('bg-patterns');
  if (!container) return;

  const COUNT        = 38;
  const REPEL_RADIUS = 170;   // px — how close cursor must be to push
  const REPEL_FORCE  = 8;     // strength of push
  const WANDER       = 0.045; // random drift each frame
  const DAMPING      = 0.91;  // velocity decay (< 1 = slows down)
  const SPRING       = 0.007; // pull back toward home position

  /* Track mouse in viewport coords */
  const mouse = { x: -9999, y: -9999 };
  document.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });
  document.addEventListener('mouseleave', () => { mouse.x = -9999; mouse.y = -9999; });

  const W = window.innerWidth;
  const H = window.innerHeight;

  const particles = [];

  for (let i = 0; i < COUNT; i++) {
    const el   = document.createElement('div');
    el.className = 'bg-piece';
    const size = 42 + Math.random() * 52;
    const rot  = Math.floor(Math.random() * 8) * 45;

    /* Spread home positions across the full viewport */
    const homeX = 30 + Math.random() * (W - 60);
    const homeY = 30 + Math.random() * (H - 60);

    el.style.cssText = `
      position: absolute;
      left: 0; top: 0;
      width: ${size}px;
      height: ${size}px;
      will-change: transform;
    `;
    el.innerHTML = PATTERNS[i % PATTERNS.length];
    container.appendChild(el);

    const p = {
      el,
      x: homeX, y: homeY,
      homeX, homeY,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      rot,
    };
    particles.push(p);

    /* Set initial transform */
    el.style.transform = `translate(${homeX}px,${homeY}px) rotate(${rot}deg)`;
  }

  /* Resize: reassign home positions so pieces don't cluster at old dimensions */
  window.addEventListener('resize', () => {
    const nW = window.innerWidth;
    const nH = window.innerHeight;
    particles.forEach(p => {
      p.homeX = 30 + Math.random() * (nW - 60);
      p.homeY = 30 + Math.random() * (nH - 60);
    });
  }, { passive: true });

  /* Physics loop */
  (function loop() {
    for (const p of particles) {
      /* 1. Random wander */
      p.vx += (Math.random() - 0.5) * WANDER;
      p.vy += (Math.random() - 0.5) * WANDER;

      /* 2. Soft spring toward home */
      p.vx += (p.homeX - p.x) * SPRING;
      p.vy += (p.homeY - p.y) * SPRING;

      /* 3. Cursor repulsion */
      const dx   = p.x - mouse.x;
      const dy   = p.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < REPEL_RADIUS && dist > 1) {
        const strength = (1 - dist / REPEL_RADIUS) * REPEL_FORCE;
        p.vx += (dx / dist) * strength;
        p.vy += (dy / dist) * strength;
      }

      /* 4. Damping */
      p.vx *= DAMPING;
      p.vy *= DAMPING;

      /* 5. Integrate */
      p.x += p.vx;
      p.y += p.vy;

      /* 6. Soft boundary — wrap when well off-screen */
      const pad = 70;
      const cW  = window.innerWidth;
      const cH  = window.innerHeight;
      if (p.x < -pad)    { p.x = cW + pad; p.homeX = Math.random() * cW; }
      if (p.x > cW + pad){ p.x = -pad;     p.homeX = Math.random() * cW; }
      if (p.y < -pad)    { p.y = cH + pad; p.homeY = Math.random() * cH; }
      if (p.y > cH + pad){ p.y = -pad;     p.homeY = Math.random() * cH; }

      p.el.style.transform = `translate(${p.x}px,${p.y}px) rotate(${p.rot}deg)`;
    }
    requestAnimationFrame(loop);
  })();
})();

/* ---------- Navbar scroll ---------- */
(function initNavbar() {
  const nav    = document.getElementById('navbar');
  const burger = document.getElementById('navBurger');
  const links  = document.querySelector('.nav-links');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  if (burger && links) {
    burger.addEventListener('click', () => {
      links.classList.toggle('open');
    });
  }
})();

/* ---------- Hero Slideshow ---------- */
(function initSlideshow() {
  const slides    = document.querySelectorAll('.slide');
  const dots      = document.querySelectorAll('.dot');
  const zoneLeft  = document.getElementById('zoneLeft');
  const zoneRight = document.getElementById('zoneRight');
  const hero      = document.getElementById('hero');
  const cursor    = document.getElementById('custom-cursor');

  if (!slides.length) return;

  let current  = 0;
  let timer    = null;
  let isHero   = false;

  function goTo(index) {
    slides[current].classList.remove('active');
    slides[current].classList.add('prev');
    dots[current] && dots[current].classList.remove('active');

    setTimeout(() => slides[current < slides.length ? current : 0].classList.remove('prev'), 900);

    current = (index + slides.length) % slides.length;

    slides[current].classList.add('active');
    dots[current] && dots[current].classList.add('active');

    resetTimer();
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(next, 7500);
  }
  resetTimer();

  // Dot clicks
  dots.forEach(dot => {
    dot.addEventListener('click', () => goTo(Number(dot.dataset.index)));
  });

  // Zone clicks
  if (zoneLeft)  zoneLeft.addEventListener('click',  prev);
  if (zoneRight) zoneRight.addEventListener('click', next);

  // Custom cursor
  if (!hero || !cursor) return;

  hero.addEventListener('mouseenter', () => { isHero = true; });
  hero.addEventListener('mouseleave', () => {
    isHero = false;
    cursor.classList.remove('visible');
  });

  hero.addEventListener('mousemove', e => {
    if (!isHero) return;
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';

    const ratio = e.clientX / hero.offsetWidth;
    if (ratio < 0.35) {
      cursor.textContent = '← Prev';
      cursor.classList.add('visible');
    } else if (ratio > 0.65) {
      cursor.textContent = 'Next →';
      cursor.classList.add('visible');
    } else {
      cursor.classList.remove('visible');
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft')  prev();
    if (e.key === 'ArrowRight') next();
  });
})();

/* ---------- Gallery Filter ---------- */
(function initFilter() {
  const btns  = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.gallery-card');
  if (!btns.length) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      cards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('hidden', !match);
      });
    });
  });
})();

/* ---------- Lightbox ---------- */
(function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lbImg    = document.getElementById('lightbox-img');
  const lbTitle  = document.getElementById('lightbox-title');
  const lbTag    = document.getElementById('lightbox-tag');
  const lbClose  = document.getElementById('lightboxClose');
  if (!lightbox) return;

  document.querySelectorAll('.gallery-card').forEach(card => {
    card.addEventListener('click', () => {
      const img   = card.querySelector('img');
      const h3    = card.querySelector('h3');
      const tag   = card.querySelector('.gallery-tag');

      lbImg.src         = img ? img.src : '';
      lbImg.alt         = h3 ? h3.textContent : '';
      lbTitle.textContent = h3 ? h3.textContent : '';
      lbTag.textContent   = tag ? tag.textContent : '';
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLB() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  lbClose && lbClose.addEventListener('click', closeLB);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLB(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLB(); });
})();

/* ---------- Work Page — Piece Modal ---------- */
(function initPieceModal() {
  const modal     = document.getElementById('piece-modal');
  const backdrop  = document.getElementById('modalBackdrop');
  const closeBtn  = document.getElementById('modalClose');
  const cards     = document.querySelectorAll('.wcard');
  if (!modal || !cards.length) return;

  const imgEl     = document.getElementById('modal-img');
  const metaEl    = document.getElementById('modal-meta');
  const titleEl   = document.getElementById('modal-title');
  const dimsEl    = document.getElementById('modal-dims');
  const descEl    = document.getElementById('modal-desc');
  const priceEl   = document.getElementById('modal-price');
  const actionsEl = document.getElementById('modal-actions');
  const imgSide   = document.querySelector('.modal-img-side');

  function openModal(card) {
    const d = card.dataset;
    const isSold = d.status === 'sold';

    metaEl.textContent  = `${d.year} · ${d.medium}`;
    titleEl.textContent = d.title;
    dimsEl.textContent  = d.dims;
    descEl.textContent  = d.desc;

    if (isSold) {
      priceEl.textContent = 'Sold';
      priceEl.className   = 'modal-price sold';
    } else {
      priceEl.textContent = d.price;
      priceEl.className   = 'modal-price';
    }

    /* Image */
    imgEl.src = d.img || '';
    imgEl.alt = d.title;
    imgEl.style.display = '';
    imgSide.classList.remove('img-placeholder');
    imgEl.onerror = () => {
      imgEl.style.display = 'none';
      imgSide.classList.add('img-placeholder');
      document.querySelector('.modal-img-placeholder').textContent = d.title;
    };

    /* Action buttons */
    actionsEl.innerHTML = '';
    if (!isSold) {
      const buyBtn = document.createElement('button');
      buyBtn.className   = 'modal-buy-btn';
      buyBtn.textContent = 'Buy this piece';
      buyBtn.addEventListener('click', () => {
        const subject = encodeURIComponent(`Buying: ${d.title}`);
        const body    = encodeURIComponent(
          `Hello Patrick,\n\nI am interested in purchasing "${d.title}" (${d.year}, ${d.dims}).\n\nListed price: ${d.price}\n\nPlease let me know the next steps.\n\nBest regards,`
        );
        window.location.href = `mailto:hello@ruganintwali.art?subject=${subject}&body=${body}`;
      });
      actionsEl.appendChild(buyBtn);
    }

    const inquireBtn = document.createElement('button');
    inquireBtn.className   = 'modal-inquire-btn';
    inquireBtn.textContent = isSold ? 'Enquire about similar' : 'Ask a question';
    inquireBtn.addEventListener('click', () => {
      const subject = encodeURIComponent(isSold
        ? `Enquiry about a piece similar to: ${d.title}`
        : `Enquiry about: ${d.title}`
      );
      const body = encodeURIComponent(
        `Hello Patrick,\n\n${isSold
          ? `I noticed "${d.title}" is sold. I'd love to know if you have or can create something similar.`
          : `I'd like to know more about "${d.title}" (${d.year}).`
        }\n\nThank you,`
      );
      window.location.href = `mailto:hello@ruganintwali.art?subject=${subject}&body=${body}`;
    });
    actionsEl.appendChild(inquireBtn);

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  cards.forEach(card => card.addEventListener('click', () => openModal(card)));
  closeBtn  && closeBtn.addEventListener('click', closeModal);
  backdrop  && backdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
})();

/* ---------- Work Page — Filter ---------- */
(function initWorkFilter() {
  const btns  = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.wcard');
  if (!btns.length || !cards.length) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      cards.forEach(card => {
        const catMatch    = f === 'all' || card.dataset.category === f;
        const statusMatch = f === 'all' || f === 'available' || f === 'sold'
          ? (f === 'all' || card.dataset.status === f)
          : true;
        const show = f === 'available' || f === 'sold' ? statusMatch : catMatch;
        card.style.display = show ? '' : 'none';
      });
    });
  });
})();

/* ---------- Contact Form ---------- */
(function initContactForm() {
  const form    = document.getElementById('contact-form');
  const success = document.getElementById('form-success');
  const reset   = document.getElementById('form-reset');
  if (!form) return;

  function validate() {
    let ok = true;
    const fields = [
      { id: 'f-name',    err: 'err-name',    check: v => v.trim().length > 0 },
      { id: 'f-email',   err: 'err-email',   check: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
      { id: 'f-subject', err: 'err-subject', check: v => v !== '' },
      { id: 'f-message', err: 'err-message', check: v => v.trim().length > 10 },
    ];
    fields.forEach(({ id, err, check }) => {
      const el    = document.getElementById(id);
      const errEl = document.getElementById(err);
      const valid = check(el.value);
      el.classList.toggle('error', !valid);
      errEl.classList.toggle('show', !valid);
      if (!valid) ok = false;
    });
    return ok;
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!validate()) return;

    const name    = document.getElementById('f-name').value.trim();
    const email   = document.getElementById('f-email').value.trim();
    const subject = document.getElementById('f-subject').value;
    const message = document.getElementById('f-message').value.trim();
    const wantsCopy = document.getElementById('f-copy').checked;

    const emailSubject = encodeURIComponent(`[Website] ${subject} — from ${name}`);
    const emailBody    = encodeURIComponent(
      `From: ${name} <${email}>\n\n${message}\n\n---\nSent via ruganintwali.art`
    );

    const mailto = `mailto:hello@ruganintwali.art${wantsCopy ? `,${email}` : ''}?subject=${emailSubject}&body=${emailBody}`;
    window.location.href = mailto;

    /* Show success state */
    form.style.display = 'none';
    success.style.display = 'flex';
    success.setAttribute('aria-hidden', 'false');
  });

  reset && reset.addEventListener('click', () => {
    form.reset();
    form.style.display = '';
    success.style.display = 'none';
    success.setAttribute('aria-hidden', 'true');
    document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
    document.querySelectorAll('.form-err.show').forEach(el => el.classList.remove('show'));
  });
})();

/* ---------- Contact page — deco pattern ---------- */
(function initContactDeco() {
  const deco = document.querySelector('.contact-deco');
  if (!deco) return;
  deco.innerHTML = PATTERNS[0];
  const svg = deco.querySelector('svg');
  if (svg) { svg.setAttribute('width','100%'); svg.setAttribute('height','100%'); }
})();

/* ---------- Scroll Reveal ---------- */
(function initReveal() {
  const targets = [
    '.bio-grid',
    '.work-item',
    '.timeline-item',
    '.gallery-card',
    '.wcard',
    '.show-card',
    '.stat',
    '.cta-text',
    '.contact-info',
    '.contact-form-wrap',
  ];

  targets.forEach(sel => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add('reveal');
      el.style.transitionDelay = (i * 80) + 'ms';
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();

/* ---------- CTA pattern (exhibition page) ---------- */
(function initCtaPattern() {
  const cta = document.querySelector('.cta-pattern');
  if (!cta) return;
  cta.innerHTML = PATTERNS[0]; // large spiral in the CTA block
  cta.querySelector('svg').setAttribute('width',  '100%');
  cta.querySelector('svg').setAttribute('height', '100%');
  cta.querySelector('svg').setAttribute('viewBox', '0 0 60 60');
  cta.querySelector('svg').setAttribute('preserveAspectRatio', 'xMidYMid meet');
})();

/* ---------- Page hero pattern (exhibition page) ---------- */
(function initHeroPattern() {
  const ph = document.querySelector('.page-hero-pattern');
  if (!ph) return;
  ph.innerHTML = PATTERNS[2];
  const svg = ph.querySelector('svg');
  if (svg) {
    svg.setAttribute('width',  '100%');
    svg.setAttribute('height', '100%');
    svg.setAttribute('viewBox', '0 0 60 60');
  }
})();
