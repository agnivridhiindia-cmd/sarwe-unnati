/**
 * SARWE UNNATI FOUNDATION (सर्व उन्नति फाउंडेशन)
 * Interactive Script - Bright, Vibrant & Modern Non-Profit
 * Scroll Progress, Kinetic Scrub, Dynamic Metrics, Modal & Clipboard
 */

document.addEventListener('DOMContentLoaded', () => {
  setupScrollProgress();
  setupKineticScrub();
  setupMobileDrawer();
  setupAnimatedMetrics();
  setupModals();
  setupClipboardCopy();
  setupNewsletter();
  setupHeroVideoPlayback();
  setupHeroSlideshow();
});

/* ==========================================================================
   1. SCROLL PROGRESS INDICATOR & NAVBAR SHADOW
   ========================================================================== */
function setupScrollProgress() {
  const progressBar = document.getElementById('scroll-progress');
  const navbar = document.getElementById('site-header');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (progressBar) {
      progressBar.style.width = `${scrollPercent}%`;
    }

    if (navbar) {
      if (scrollTop > 30) {
        navbar.style.boxShadow = '0 10px 25px -5px rgba(15, 23, 42, 0.08), 0 4px 10px -2px rgba(124, 58, 237, 0.04)';
        navbar.style.borderBottomColor = '#CBD5E1';
      } else {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.03)';
        navbar.style.borderBottomColor = '#E2E8F0';
      }
    }
  }, { passive: true });
}

/* ==========================================================================
   2. KINETIC SCROLL SCRUB (Get To Know Us Section)
   Splits paragraph into words and dynamically illuminates them on scroll
   ========================================================================== */
function setupKineticScrub() {
  const scrubTarget = document.querySelector('.kinetic-lead-paragraph');
  if (!scrubTarget) return;

  const rawText = scrubTarget.textContent.trim();
  const words = rawText.split(/\s+/);
  scrubTarget.innerHTML = words.map(w => `<span class="scrub-word">${w}</span>`).join(' ');

  const scrubWords = scrubTarget.querySelectorAll('.scrub-word');
  const totalWords = scrubWords.length;

  function updateScrub() {
    const rect = scrubTarget.getBoundingClientRect();
    const windowH = window.innerHeight;
    
    // When the top enters lower 85% to when bottom reaches upper 25%
    const start = windowH * 0.85;
    const end = windowH * 0.25;
    const current = rect.top;

    let progress = (start - current) / (start - end);
    progress = Math.max(0, Math.min(1, progress));

    const wordsToLight = Math.floor(progress * totalWords);

    scrubWords.forEach((wordSpan, index) => {
      if (index <= wordsToLight) {
        wordSpan.classList.add('active');
      } else {
        wordSpan.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', updateScrub, { passive: true });
  updateScrub();
}

/* ==========================================================================
   3. MOBILE NAVIGATION DRAWER
   ========================================================================== */
function setupMobileDrawer() {
  const toggleBtn = document.querySelector('.mobile-menu-btn');
  const drawer = document.getElementById('mobile-drawer');
  const closeBtn = document.getElementById('drawer-close');

  if (!drawer) return;

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      drawer.classList.add('open');
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  }

  // Close on link click
  drawer.querySelectorAll('.drawer-link').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  });
}

/* ==========================================================================
   4. ANIMATED METRICS COUNTER
   ========================================================================== */
function setupAnimatedMetrics() {
  const metricElements = document.querySelectorAll('.counter-figure');
  if (!metricElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'), 10);
        animateCounter(el, 0, target, 2000);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  metricElements.forEach(el => observer.observe(el));

  function animateCounter(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(ease * (end - start) + start);
      obj.textContent = current.toLocaleString('en-IN');
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        obj.textContent = end.toLocaleString('en-IN');
      }
    };
    window.requestAnimationFrame(step);
  }
}

/* ==========================================================================
   5. MODALS & SERVICE DIALOGS
   ========================================================================== */
function setupModals() {
  const modal = document.getElementById('giving-modal');
  const closeTriggers = document.querySelectorAll('.close-modal-trigger');

  if (!modal) return;

  closeTriggers.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      modal.classList.remove('active');
    }
  });

  document.querySelectorAll('.open-giving-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
    });
  });
}

/* ==========================================================================
   6. CLIPBOARD COPY UTILITIES
   ========================================================================== */
function setupClipboardCopy() {
  document.querySelectorAll('[data-copy-target]').forEach(button => {
    button.addEventListener('click', () => {
      const text = button.getAttribute('data-copy-target');
      if (!text) return;

      navigator.clipboard.writeText(text).then(() => {
        showToast(`COPIED: ${text}`);
        const originalText = button.innerHTML;
        button.innerHTML = `✓ COPIED`;
        button.style.backgroundColor = 'var(--vibrant-purple)';
        button.style.color = '#FFFFFF';
        setTimeout(() => {
          button.innerHTML = originalText;
          button.style.backgroundColor = '';
          button.style.color = '';
        }, 2200);
      }).catch(() => {
        showToast(`Selected: ${text}`);
      });
    });
  });
}

/* ==========================================================================
   7. TOAST NOTIFICATIONS
   ========================================================================== */
function showToast(message) {
  let toast = document.getElementById('site-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'site-toast';
    toast.className = 'toast-terminal';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span style="color: var(--pastel-pink-candy); font-weight: 700; margin-right: 6px;">✓</span> ${message}`;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

/* ==========================================================================
   8. FORMS & FEEDBACK (Newsletter, Volunteer, CSR, Receipt, Contact)
   ========================================================================== */
function setupNewsletter() {
  const form = document.getElementById('newsletter-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && input.value) {
        showToast('SUBSCRIBED TO FOUNDATION TELEMETRY');
        input.value = '';
      }
    });
  }

  // Volunteer form
  const volForm = document.getElementById('volunteer-form');
  if (volForm) {
    volForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('APPLICATION RECEIVED. OUR GROUND DESK WILL CONTACT YOU.');
      volForm.reset();
    });
  }

  // CSR form
  const csrForm = document.getElementById('csr-form');
  if (csrForm) {
    csrForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('CSR PROPOSAL INQUIRY TRANSMITTED TO DIRECTORS.');
      csrForm.reset();
    });
  }

  // Receipt form
  const receiptForm = document.getElementById('receipt-form');
  if (receiptForm) {
    receiptForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('PAYMENT DETAILS RECEIVED. 80G RECEIPT ISSUED WITHIN 24 HRS.');
      receiptForm.reset();
    });
  }

  // Contact form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('MESSAGE TRANSMITTED TO FOUNDATION LEADERSHIP.');
      contactForm.reset();
    });
  }
}

/* ==========================================================================
   9. HERO BACKGROUND VIDEO (AUTOPLAY ON VIEW, AUTO-PAUSE ON SCROLL DOWN)
   ========================================================================== */
function setupHeroVideoPlayback() {
  const video = document.getElementById('hero-bg-video');
  const heroSection = document.getElementById('hero-section');
  const toggleBtn = document.getElementById('hero-video-toggle');
  const label = toggleBtn ? toggleBtn.querySelector('.video-toggle-label') : null;

  if (!video || !heroSection) return;

  let isManualPaused = false;

  function playVideo() {
    if (isManualPaused) return;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        if (toggleBtn) {
          toggleBtn.classList.remove('paused');
          if (label) label.textContent = 'PLAYING';
        }
      }).catch(() => {
        // Autoplay policy fallback: muted allows play
      });
    }
  }

  function pauseVideo(reason) {
    video.pause();
    if (toggleBtn) {
      toggleBtn.classList.add('paused');
      if (label) label.textContent = reason === 'scroll' ? 'PAUSED' : 'PAUSED';
    }
  }

  // 1. IntersectionObserver: Monitors when hero section enters or leaves viewport
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // If hero section is visible by at least 10%
        if (entry.isIntersecting && entry.intersectionRatio > 0.08) {
          playVideo();
        } else {
          // As soon as hero scrolls out of view: pause immediately
          pauseVideo('scroll');
        }
      });
    }, {
      root: null,
      threshold: [0, 0.08, 0.25, 0.5, 0.75, 1.0]
    });

    observer.observe(heroSection);
  } else {
    // Fallback scroll listener for browsers without IntersectionObserver
    window.addEventListener('scroll', () => {
      const heroRect = heroSection.getBoundingClientRect();
      if (heroRect.bottom > 100 && heroRect.top < window.innerHeight) {
        playVideo();
      } else {
        pauseVideo('scroll');
      }
    }, { passive: true });
  }

  // 2. Pause when switching tab / window to save CPU
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      pauseVideo('hidden');
    } else {
      const heroRect = heroSection.getBoundingClientRect();
      if (heroRect.bottom > 100 && heroRect.top < window.innerHeight) {
        playVideo();
      }
    }
  });

  // 3. User toggle button click handler
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      if (video.paused) {
        isManualPaused = false;
        playVideo();
      } else {
        isManualPaused = true;
        pauseVideo('manual');
      }
    });
  }
}

/* ==========================================================================
   9. HERO IMAGE SLIDESHOW (Cycles Pictures Smoothly Every 1.5 Seconds)
   ========================================================================== */
function setupHeroSlideshow() {
  const slideshowBox = document.getElementById('hero-slideshow-box');
  if (!slideshowBox) return;

  const slides = slideshowBox.querySelectorAll('.hero-slide');
  const dotsContainer = document.getElementById('hero-slideshow-dots');
  const counterSpan = document.getElementById('hero-slide-counter');
  if (!slides || slides.length === 0) return;

  let currentIndex = 0;
  const totalSlides = slides.length;
  const intervalMs = 1500; // Exact 1.5 seconds per user specification
  let slideTimer = null;

  // Render clickable pagination dots
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    slides.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.className = `slideshow-dot ${idx === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `View slide ${idx + 1}`);
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        goToSlide(idx);
        restartTimer();
      });
      dotsContainer.appendChild(dot);
    });
  }

  function updateSlide(newIndex) {
    slides.forEach((slide, idx) => {
      if (idx === newIndex) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.slideshow-dot');
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === newIndex);
      });
    }

    if (counterSpan) {
      counterSpan.textContent = `${String(newIndex + 1).padStart(2, '0')} / ${String(totalSlides).padStart(2, '0')}`;
    }

    currentIndex = newIndex;
  }

  function nextSlide() {
    const nextIdx = (currentIndex + 1) % totalSlides;
    updateSlide(nextIdx);
  }

  function goToSlide(idx) {
    updateSlide(idx);
  }

  function startTimer() {
    if (!slideTimer) {
      slideTimer = setInterval(nextSlide, intervalMs);
    }
  }

  function stopTimer() {
    if (slideTimer) {
      clearInterval(slideTimer);
      slideTimer = null;
    }
  }

  function restartTimer() {
    stopTimer();
    startTimer();
  }

  // Start auto-cycling every 1.5 seconds
  startTimer();

  // Resource optimization: Pause timer when user leaves the browser tab
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopTimer();
    } else {
      startTimer();
    }
  });
}
