/**
 * SARWE UNNATI FOUNDATION - Flagship Interactive Engine
 * Fully modular, accessible, zero-dependency vanilla JavaScript
 * Coordinates & statutory data strictly derived from pitch deck (Slide 1-21)
 */

document.addEventListener('DOMContentLoaded', () => {
  setupScrollProgress();
  setupStickyHeader();
  setupMobileDrawer();
  setupHeroSlideshow();
  setupMealCalculator();
  setupThaliExplorer();
  setupBudgetFilter();
  setupImpactSlider();
  setupFaqAccordion();
  setupClipboardCopy();
  setupScrollToTop();
  setupStatsCounters();
  setupSpotlightTracker();
  setupScrollReveal();
  setupInteractiveTilt();
  setupOperatingModelPipeline();
});

/* ==========================================================================
   1. SCROLL PROGRESS BAR & STICKY HEADER
   ========================================================================== */
function setupScrollProgress() {
  const progressBar = document.getElementById('scroll-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) return;
    const progress = (window.scrollY / totalHeight) * 100;
    progressBar.style.width = `${progress}%`;
  }, { passive: true });
}

function setupStickyHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('nav-scrolled');
    } else {
      header.classList.remove('nav-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================================
   2. MOBILE OFF-CANVAS DRAWER
   ========================================================================== */
function setupMobileDrawer() {
  const toggleBtn = document.getElementById('mobile-drawer-toggle') || document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-nav-drawer') || document.getElementById('mobile-drawer');
  const closeBtn = document.getElementById('drawer-close-btn');

  if (!toggleBtn || !drawer) return;

  function openDrawer() {
    drawer.classList.add('open');
    drawer.classList.add('active');
    toggleBtn.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    drawer.classList.remove('active');
    toggleBtn.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  drawer.querySelectorAll('.drawer-link').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && (drawer.classList.contains('open') || drawer.classList.contains('active'))) {
      closeDrawer();
    }
  });
}

/* ==========================================================================
   3. HERO IMAGE SLIDESHOW (Smooth Crossfade with Live Tagline)
   ========================================================================== */
function setupHeroSlideshow() {
  const slides = document.querySelectorAll('.hero-slide-image, .hero-slideshow-wrap .hero-slide-img');
  const captionTag = document.getElementById('hero-slide-tag') || document.getElementById('hero-caption-tag');
  const captionTitle = document.getElementById('hero-slide-title') || document.getElementById('hero-caption-title');

  if (!slides || slides.length < 2) return;

  const slideData = [
    { tag: 'FLAGSHIP RELIEF', title: 'Nutritious Meal Preparation & Hot Street Distribution' },
    { tag: 'FSSAI HYGIENE', title: 'Certified Safe Kitchens & Food Safety Regulations' },
    { tag: 'NUTRITION FIRST', title: 'Balanced Thali: Staple Grains, Lentils, Vegetables & Fruit' },
    { tag: 'COMMUNITY REACH', title: 'Daily Wage Workers, Street Dwellers & Homeless Families' },
    { tag: 'VOLUNTEER CADRE', title: '50-100 Dedicated Frontline Volunteers on the Ground' }
  ];

  let currentIdx = 0;

  function nextSlide() {
    slides[currentIdx].classList.remove('active');
    currentIdx = (currentIdx + 1) % slides.length;
    slides[currentIdx].classList.add('active');

    if (captionTag && slideData[currentIdx]) {
      captionTag.textContent = slideData[currentIdx].tag;
    }
    if (captionTitle && slideData[currentIdx]) {
      captionTitle.textContent = slideData[currentIdx].title;
    }
  }

  setInterval(nextSlide, 3500);
}

/* ==========================================================================
   4. INTERACTIVE MEAL SIMULATOR & 80G TAX CALCULATOR
   Unit economics: ₹66.67/meal (₹2 Crore / 3,00,000 meals)
   ========================================================================== */
function setupMealCalculator() {
  const slider = document.getElementById('meal-slider');
  if (!slider) return;

  const COST_PER_MEAL = 66.67;
  const isAmountBased = parseInt(slider.getAttribute('max'), 10) > 5000;

  const countEl = document.getElementById('calc-meal-count') || document.getElementById('calc-meals-count');
  const costEl = document.getElementById('calc-total-cost') || document.getElementById('slider-val-display');
  const taxEl = document.getElementById('calc-tax-relief') || document.getElementById('calc-tax-count');
  const peopleEl = document.getElementById('calc-people-count');
  const foodEl = document.getElementById('calc-food-kg');
  const waterEl = document.getElementById('calc-water-lt');
  const donateBtn = document.getElementById('calc-donate-btn');
  const presetBtns = document.querySelectorAll('.calc-preset-btn');

  function updateByMeals(meals) {
    const totalCost = Math.round(meals * COST_PER_MEAL);
    const taxRelief = Math.round(totalCost * 0.50);
    const foodKg = Math.round(meals * 0.45);
    const waterL = Math.round(meals * 0.50);

    if (countEl) countEl.textContent = meals.toLocaleString('en-IN');
    if (costEl) costEl.textContent = '\u20B9' + totalCost.toLocaleString('en-IN');
    if (taxEl) taxEl.textContent = '\u20B9' + taxRelief.toLocaleString('en-IN');
    if (foodEl) foodEl.textContent = foodKg.toLocaleString('en-IN') + ' kg';
    if (waterEl) waterEl.textContent = waterL.toLocaleString('en-IN') + ' L';
    if (peopleEl) peopleEl.textContent = meals.toLocaleString('en-IN');

    presetBtns.forEach(btn => {
      const btnMeals = parseInt(btn.dataset.meals, 10);
      btn.classList.toggle('active', btnMeals === meals);
    });

    if (donateBtn) donateBtn.setAttribute('data-amount', totalCost);
  }

  function updateByAmount(amount) {
    const meals = Math.floor(amount / COST_PER_MEAL);
    const taxRelief = Math.round(amount * 0.50);

    if (costEl) costEl.textContent = '\u20B9' + amount.toLocaleString('en-IN');
    if (countEl) countEl.textContent = meals.toLocaleString('en-IN');
    if (peopleEl) peopleEl.textContent = meals.toLocaleString('en-IN');
    if (taxEl) taxEl.textContent = '\u20B9' + taxRelief.toLocaleString('en-IN');
  }

  function updateSliderFill(val) {
    const min = parseFloat(slider.min) || (isAmountBased ? 500 : 15);
    const max = parseFloat(slider.max) || (isAmountBased ? 300000 : 1500);
    const pct = Math.min(100, Math.max(0, ((val - min) / (max - min)) * 100));
    slider.style.background = `linear-gradient(to right, #B45309 0%, #EA580C ${pct}%, rgba(255,255,255,0.14) ${pct}%, rgba(255,255,255,0.14) 100%)`;
  }

  slider.addEventListener('input', () => {
    const val = parseInt(slider.value, 10);
    if (isAmountBased) {
      updateByAmount(val);
    } else {
      updateByMeals(val);
    }
    updateSliderFill(val);
  });
  updateSliderFill(parseInt(slider.value, 10));

  presetBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const val = parseInt(btn.dataset.val, 10);
      const meals = parseInt(btn.dataset.meals, 10);

      presetBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (!isNaN(val)) {
        slider.value = val;
        updateByAmount(val);
        updateSliderFill(val);
      } else if (!isNaN(meals)) {
        slider.value = meals;
        updateByMeals(meals);
        updateSliderFill(meals);
      }
    });
  });

  if (isAmountBased) {
    updateByAmount(parseInt(slider.value, 10) || 10000);
  } else {
    updateByMeals(parseInt(slider.value, 10) || 75);
  }
}

/* ==========================================================================
   5. INTERACTIVE BALANCED THALI EXPLORER (CONTINUOUS 1-SEC AUTO-LOOP)
   ========================================================================== */
function setupThaliExplorer() {
  const tabs = document.querySelectorAll('.thali-nav-btn');
  const badge = document.getElementById('thali-badge');
  const title = document.getElementById('thali-title');
  const desc = document.getElementById('thali-desc');
  const img = document.getElementById('thali-img');
  const macroBars = document.getElementById('thali-macro-bars');

  if (!tabs.length) return;

  const components = {
    staple: {
      badge: 'STAPLE GRAINS • ENERGY ENGINE',
      title: 'Fresh Steamed Rice & Warm Whole-Wheat Roti',
      desc: 'High-energy complex carbohydrates providing essential daily caloric foundation for daily wage earners and street dwellers. Freshly prepared in hygienic vessels.',
      img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
      macros: [
        { name: 'Carbohydrates', pct: 85, color: '#F97316' },
        { name: 'Dietary Fiber', pct: 60, color: '#10B981' },
        { name: 'Protein', pct: 30, color: '#2563EB' }
      ]
    },
    protein: {
      badge: 'PROTEIN ENGINE • TISSUE REPAIR',
      title: 'Nutrient-Dense Dal, Lentils & Legume Gravy',
      desc: 'Slow-simmered yellow arhar dal, chana, or whole black lentils seasoned with cumin and turmeric. Essential amino acids for physical strength.',
      img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80',
      macros: [
        { name: 'Plant Protein', pct: 88, color: '#F97316' },
        { name: 'Iron & Zinc', pct: 70, color: '#2563EB' },
        { name: 'Dietary Fiber', pct: 65, color: '#10B981' }
      ]
    },
    vegetable: {
      badge: 'MICRONUTRIENT DEFENSE • IMMUNITY',
      title: 'Fresh Seasonal Subzi (Greens & Roots)',
      desc: 'Cooked fresh daily with seasonal market produce—potatoes, spinach, cauliflower, carrots, and bottle gourd. Packed with Vitamins A, C, and potassium.',
      img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
      macros: [
        { name: 'Vitamins A & C', pct: 90, color: '#10B981' },
        { name: 'Minerals', pct: 75, color: '#F97316' },
        { name: 'Dietary Fiber', pct: 80, color: '#2563EB' }
      ]
    },
    supplement: {
      badge: 'VITAL FORTIFICATION • SPECIALIZED CARE',
      title: 'Seasonal Fruit, Jaggery & Nutrition Adds',
      desc: 'Fresh bananas, oranges, or jaggery blocks provided to malnourished children, nursing mothers, and destitute senior citizens.',
      img: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=800&q=80',
      macros: [
        { name: 'Micronutrients', pct: 95, color: '#10B981' },
        { name: 'Natural Sugar', pct: 70, color: '#F97316' },
        { name: 'Electrolytes', pct: 80, color: '#2563EB' }
      ]
    },
    water: {
      badge: 'HYDRATION SECURITY • POTABLE & SAFE',
      title: 'Certified Potable Drinking Water',
      desc: 'Tested, clean drinking water provided in hygienic refills to prevent severe dehydration and waterborne diseases among street populations.',
      img: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=800&q=80',
      macros: [
        { name: 'Purity Level', pct: 100, color: '#2563EB' },
        { name: 'Zero Contaminants', pct: 100, color: '#10B981' },
        { name: 'TDS Calibrated', pct: 90, color: '#F97316' }
      ]
    }
  };

  const keys = ['staple', 'protein', 'vegetable', 'supplement', 'water'];
  let currentIdx = 0;
  let loopTimer = null;

  function selectTab(key, manual = false) {
    const data = components[key];
    if (!data) return;

    currentIdx = keys.indexOf(key);

    tabs.forEach(btn => {
      const isActive = (btn.dataset.thali === key);
      btn.classList.toggle('active', isActive);
    });

    if (badge) {
      badge.textContent = data.badge;
      badge.style.color = '#EA580C';
      badge.style.borderColor = 'rgba(249, 115, 22, 0.45)';
      badge.style.background = 'rgba(249, 115, 22, 0.12)';
    }
    if (title) title.textContent = data.title;
    if (desc) desc.textContent = data.desc;

    if (img) {
      img.style.opacity = '0.4';
      img.style.transform = 'scale(1.02)';
      setTimeout(() => {
        img.src = data.img;
        img.style.opacity = '1';
        img.style.transform = 'scale(1)';
      }, 120);
    }

    if (macroBars) {
      macroBars.innerHTML = data.macros.map(m => `
        <div class="macro-bar-row">
          <span>${m.name}</span>
          <div class="macro-track">
            <div class="macro-fill" style="width: ${m.pct}%; background: ${m.color};"></div>
          </div>
          <span style="font-weight:700; color:${m.color}; text-align:right;">${m.pct}%</span>
        </div>
      `).join('');
    }

    if (manual) {
      restartLoop();
    }
  }

  function advanceNext() {
    currentIdx = (currentIdx + 1) % keys.length;
    selectTab(keys[currentIdx]);
  }

  function restartLoop() {
    clearInterval(loopTimer);
    loopTimer = setInterval(advanceNext, 1200); // Continuous ~1 second kinetic loop
  }

  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      selectTab(btn.dataset.thali, true);
    });
  });

  // Pause loop on hover so users can inspect macros, resume on leave
  const thaliContainer = document.querySelector('.thali-visual-layout');
  if (thaliContainer) {
    thaliContainer.addEventListener('mouseenter', () => clearInterval(loopTimer));
    thaliContainer.addEventListener('mouseleave', () => restartLoop());
  }

  selectTab('staple');
  restartLoop();
}

/* ==========================================================================
   6. BUDGET CATEGORY FILTER TABS
   ========================================================================== */
function setupBudgetFilter() {
  const filterBtns = document.querySelectorAll('.budget-filter-btn, .budget-tab-btn, .budget-tab-pill');
  const items = document.querySelectorAll('.budget-row, table.budget-table tbody tr[data-category], .budget-floating-card[data-category]');

  if (!filterBtns.length || !items.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      items.forEach(item => {
        const isMatch = (filter === 'all' || item.dataset.category === filter);
        if (item.tagName === 'TR') {
          item.style.display = isMatch ? 'table-row' : 'none';
        } else if (item.classList.contains('budget-floating-card')) {
          item.style.display = isMatch ? 'flex' : 'none';
        } else {
          item.style.display = isMatch ? 'grid' : 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   6B. 6-POINT IMPACT SCROLL ANIMATION ARROW SLIDER
   ========================================================================== */
function setupImpactSlider() {
  const track = document.getElementById('impact-slider-track');
  const prevBtn = document.querySelector('.slider-arrow-btn.prev-btn');
  const nextBtn = document.querySelector('.slider-arrow-btn.next-btn');
  const counterPill = document.getElementById('impact-slider-counter');
  const dotsContainer = document.getElementById('impact-slider-dots');

  if (!track || !prevBtn || !nextBtn) return;

  const slides = track.querySelectorAll('.impact-slide-card');
  if (!slides.length) return;

  const updateControls = () => {
    const scrollLeft = track.scrollLeft;
    const maxScroll = track.scrollWidth - track.clientWidth;
    prevBtn.disabled = scrollLeft <= 8;
    nextBtn.disabled = scrollLeft >= maxScroll - 8;

    const slideWidth = slides[0].offsetWidth + 24; // card width + track gap
    const activeIndex = Math.min(Math.max(0, Math.round(scrollLeft / slideWidth)), slides.length - 1);

    if (counterPill) {
      counterPill.textContent = `${activeIndex + 1} / ${slides.length}`;
    }

    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.impact-slider-dot');
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === activeIndex);
      });
    }
  };

  prevBtn.addEventListener('click', () => {
    const slideWidth = slides[0].offsetWidth + 24;
    track.scrollBy({ left: -slideWidth, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    const slideWidth = slides[0].offsetWidth + 24;
    track.scrollBy({ left: slideWidth, behavior: 'smooth' });
  });

  track.addEventListener('scroll', updateControls, { passive: true });

  // Generate dots dynamically if dotsContainer is empty
  if (dotsContainer && !dotsContainer.children.length) {
    slides.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = `impact-slider-dot ${idx === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Slide ${idx + 1}`);
      dot.addEventListener('click', () => {
        const slideWidth = slides[0].offsetWidth + 24;
        track.scrollTo({ left: idx * slideWidth, behavior: 'smooth' });
      });
      dotsContainer.appendChild(dot);
    });
  }

  // Initial state check
  setTimeout(updateControls, 100);
}

/* ==========================================================================
   7. INTERACTIVE FAQ ACCORDION
   ========================================================================== */
function setupFaqAccordion() {
  const items = document.querySelectorAll('.faq-card-item, .faq-item');
  if (!items.length) return;

  function closeAll() {
    items.forEach(it => {
      it.classList.remove('active');
      const b = it.querySelector('.faq-trigger-btn, .faq-question');
      if (b) b.setAttribute('aria-expanded', 'false');
    });
  }

  function openItem(targetItem) {
    items.forEach(other => {
      if (other !== targetItem) {
        other.classList.remove('active');
        const otherBtn = other.querySelector('.faq-trigger-btn, .faq-question');
        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
      }
    });
    targetItem.classList.add('active');
    const btn = targetItem.querySelector('.faq-trigger-btn, .faq-question');
    if (btn) btn.setAttribute('aria-expanded', 'true');
  }

  // Ensure all items are closed at startup
  closeAll();

  items.forEach(item => {
    const btn = item.querySelector('.faq-trigger-btn, .faq-question');
    if (!btn) return;

    // Hover to open
    item.addEventListener('mouseenter', () => {
      openItem(item);
    });

    // Click toggle (supports touch / mobile)
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = item.classList.contains('active');
      if (isOpen) {
        item.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
      } else {
        openItem(item);
      }
    });
  });

  // When mouse leaves the entire FAQ container, collapse
  const containers = document.querySelectorAll('.faq-wrap-box, .faq-grid');
  containers.forEach(container => {
    container.addEventListener('mouseleave', () => {
      closeAll();
    });
  });
}

/* ==========================================================================
   8. 1-CLICK CLIPBOARD COPY WITH FLOATING TOAST
   ========================================================================== */
function showToast(message, duration = 3000) {
  let toast = document.getElementById('global-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span style="color:#10B981; font-weight:800;">✓</span> <span>${message}</span>`;
  toast.classList.add('show');

  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove('show');
  }, duration);
}
window.showToast = showToast;

function setupClipboardCopy() {
  document.querySelectorAll('[data-copy-target], [data-copy]').forEach(button => {
    button.addEventListener('click', () => {
      const text = button.getAttribute('data-copy-target') || button.getAttribute('data-copy');
      if (!text) return;

      navigator.clipboard.writeText(text).then(() => {
        showToast(`Copied ${text} to clipboard!`);
        const originalText = button.innerHTML;
        button.innerHTML = 'COPIED!';
        button.style.backgroundColor = '#10B981';
        button.style.borderColor = '#10B981';
        setTimeout(() => {
          button.innerHTML = originalText;
          button.style.backgroundColor = '';
          button.style.borderColor = '';
        }, 2200);
      }).catch(() => {
        showToast(`Selected: ${text}`);
      });
    });
  });
}

/* ==========================================================================
   9. SCROLL TO TOP BUTTON
   ========================================================================== */
function setupScrollToTop() {
  let btn = document.getElementById('scroll-to-top');
  if (!btn) {
    btn = document.createElement('button');
    btn.id = 'scroll-to-top';
    btn.className = 'scroll-to-top-btn';
    btn.setAttribute('aria-label', 'Scroll back to top');
    btn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    `;
    document.body.appendChild(btn);
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ==========================================================================
   10. STATS NUMERICAL COUNTERS ANIMATION (60fps Eased RequestAnimationFrame)
   ========================================================================== */
function setupStatsCounters() {
  const counterEls = document.querySelectorAll('[data-counter]');
  if (!counterEls.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-counter'), 10);
      const prefix = el.getAttribute('data-prefix') || '';
      const suffix = el.getAttribute('data-suffix') || '';
      if (isNaN(target)) return;

      const duration = 1400; // ms
      const startTime = performance.now();

      function updateCounter(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const val = Math.round(target * easeOut);
        el.textContent = `${prefix}${val.toLocaleString('en-IN')}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          el.textContent = `${prefix}${target.toLocaleString('en-IN')}${suffix}`;
        }
      }

      requestAnimationFrame(updateCounter);
      obs.unobserve(el);
    });
  }, { threshold: 0.12 });

  counterEls.forEach(el => observer.observe(el));
}

/* ==========================================================================
   11. INTERACTIVE MOUSE-FOLLOWING SPOTLIGHT ON CARDS
   ========================================================================== */
function setupSpotlightTracker() {
  const cards = document.querySelectorAll(
    '.spotlight-card, .bento-card, .csr-card, .csr-tier-card, .stat-card, .passbook-card, .passbook-terminal-card, .calculator-card-wrapper, .kpi-mini-card, .challenge-row-card, .particular-item, .roadmap-step-card'
  );

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/* ==========================================================================
   12. SCROLL-DRIVEN ENTRANCE CHOREOGRAPHY (REVEAL)
   ========================================================================== */
function setupScrollReveal() {
  const autoRevealSelectors = [
    'section > .container',
    '.bento-card',
    '.csr-card',
    '.stat-card',
    '.problem-stat-box',
    '.charter-card',
    '.timeline-card',
    '.challenge-row-card',
    '.roadmap-step-card',
    '.passbook-terminal-card'
  ];

  document.querySelectorAll(autoRevealSelectors.join(', ')).forEach((el, index) => {
    if (!el.hasAttribute('data-reveal')) {
      el.setAttribute('data-reveal', '');
      const delay = (index % 4) * 100;
      if (delay > 0) el.setAttribute('data-reveal-delay', delay.toString());
    }
  });

  const revealEls = document.querySelectorAll('[data-reveal]');
  if (!revealEls.length) return;

  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  revealEls.forEach(el => revealObserver.observe(el));
}

/* ==========================================================================
   13. 3D CARD TILT & SPECULAR GLARE MOTION ENGINE
   ========================================================================== */
function setupInteractiveTilt() {
  if (window.innerWidth < 768) return;

  const cardSelectors = [
    '.bento-card',
    '.csr-card',
    '.challenge-row-card',
    '.roadmap-step-card',
    '.particular-item',
    '.transparency-banner-card',
    '.passbook-terminal-card',
    '.hero-visual-card'
  ];

  const tiltCards = document.querySelectorAll(cardSelectors.join(', '));

  tiltCards.forEach(card => {
    card.classList.add('tilt-card');

    // Add specular glare and shimmer layer if not present
    if (!card.querySelector('.card-glare-overlay')) {
      const glare = document.createElement('div');
      glare.className = 'card-glare-overlay';
      card.appendChild(glare);
    }
    if (!card.querySelector('.shimmer-sweep-layer')) {
      const shimmer = document.createElement('div');
      shimmer.className = 'shimmer-sweep-layer';
      card.appendChild(shimmer);
    }

    let isHovered = false;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let animFrame = null;

    function renderTilt() {
      if (!isHovered) return;
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;

      card.style.transform = `perspective(1000px) rotateX(${currentX.toFixed(2)}deg) rotateY(${currentY.toFixed(2)}deg) scale3d(1.025, 1.025, 1.025)`;
      animFrame = requestAnimationFrame(renderTilt);
    }

    card.addEventListener('mouseenter', () => {
      isHovered = true;
      card.classList.remove('tilt-reset');
      card.classList.add('tilt-moving');
      animFrame = requestAnimationFrame(renderTilt);
    });

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate tilt angles (max 6 deg)
      targetX = ((y - centerY) / centerY) * -5.5;
      targetY = ((x - centerX) / centerX) * 5.5;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });

    card.addEventListener('mouseleave', () => {
      isHovered = false;
      cancelAnimationFrame(animFrame);
      card.classList.remove('tilt-moving');
      card.classList.add('tilt-reset');
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });
}


/**
 * 5-PILLAR OPERATING ARCHITECTURE PIPELINE
 * Provides interactive tab navigation, keyboard controls, and arrow stepper
 */
function setupOperatingModelPipeline() {
  const navButtons = document.querySelectorAll('.pipeline-nav-btn');
  const panels = document.querySelectorAll('.pillar-panel-view');
  if (!panels.length) return;

  function switchPillar(targetIndex) {
    if (navButtons.length) {
      navButtons.forEach(btn => {
        const idx = parseInt(btn.getAttribute('data-pillar'), 10);
        const isMatch = idx === targetIndex;
        btn.classList.toggle('active', isMatch);
        btn.setAttribute('aria-selected', isMatch ? 'true' : 'false');
      });
    }

    panels.forEach(panel => {
      const panelId = panel.id;
      const isMatch = panelId === `pillar-panel-${targetIndex}`;
      panel.classList.toggle('active', isMatch);
    });
  }

  // Click on pipeline nav buttons (if present)
  if (navButtons.length) {
    navButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = parseInt(btn.getAttribute('data-pillar'), 10);
        switchPillar(target);
      });

      // Keyboard support
      btn.addEventListener('keydown', (e) => {
        const current = parseInt(btn.getAttribute('data-pillar'), 10);
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          const next = current === panels.length ? 1 : current + 1;
          switchPillar(next);
          const nextBtn = document.querySelector(`.pipeline-nav-btn[data-pillar="${next}"]`);
          if (nextBtn) nextBtn.focus();
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          const prev = current === 1 ? panels.length : current - 1;
          switchPillar(prev);
          const prevBtn = document.querySelector(`.pipeline-nav-btn[data-pillar="${prev}"]`);
          if (prevBtn) prevBtn.focus();
        }
      });
    });
  }

  // Next and Prev stepper arrows inside each panel
  document.querySelectorAll('.pillar-arrow-btn').forEach(arrowBtn => {
    arrowBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = parseInt(arrowBtn.getAttribute('data-target'), 10);
      if (target >= 1 && target <= panels.length) {
        switchPillar(target);
      }
    });
  });
}
