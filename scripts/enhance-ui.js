const fs = require('fs');
const path = require('path');

const mainJsPath = path.join(__dirname, '..', 'js', 'main.js');
let code = fs.readFileSync(mainJsPath, 'utf8');

// 1. Update navbar scroll behavior
const oldNavBlock = `      // Hidden on hero section (scrollTop <= 80px), reveals with smooth slide-down when user slides down
      if (scrollTop > 80) {
        navbar.classList.add('nav-visible');
      } else {
        navbar.classList.remove('nav-visible');
      }`;

const newNavBlock = `      if (scrollTop > 40) {
        navbar.classList.add('nav-scrolled');
      } else {
        navbar.classList.remove('nav-scrolled');
      }`;

if (code.includes(oldNavBlock)) {
  code = code.replace(oldNavBlock, newNavBlock);
  console.log('Navbar scroll behavior updated.');
}

// 2. Add new modern interactive functions
const newFeatures = `
/* ==========================================================================
   17. MODERN FLOATING TOAST NOTIFICATION SYSTEM
   ========================================================================== */
function showToast(message, duration = 3000) {
  let toast = document.getElementById('modern-floating-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'modern-floating-toast';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }
  toast.innerHTML = \`
    <span class="toast-icon">✓</span>
    <span class="toast-msg">\${message}</span>
  \`;
  toast.classList.add('show');
  
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove('show');
  }, duration);
}
window.showToast = showToast;

/* ==========================================================================
   18. FLOATING SCROLL-TO-TOP BUTTON
   ========================================================================== */
function setupScrollToTop() {
  let btn = document.getElementById('scroll-to-top');
  if (!btn) {
    btn = document.createElement('button');
    btn.id = 'scroll-to-top';
    btn.className = 'scroll-to-top-btn';
    btn.setAttribute('aria-label', 'Scroll back to top');
    btn.innerHTML = \`
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    \`;
    document.body.appendChild(btn);
  }

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  function checkScrollBtn() {
    const y = window.scrollY || document.documentElement.scrollTop;
    if (y > 450) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', checkScrollBtn, { passive: true });
  checkScrollBtn();
}

/* ==========================================================================
   19. INTERACTIVE FAQ ACCORDION ENGINE
   ========================================================================== */
function setupFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-accordion-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-question-btn');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      // Close other accordion items
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
          const otherTrigger = other.querySelector('.faq-question-btn');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
        }
      });

      if (isOpen) {
        item.classList.remove('active');
        trigger.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ==========================================================================
   20. INTERACTIVE DISTRIBUTION RADAR / HUBS SELECTOR
   ========================================================================== */
function setupDistributionRadar() {
  const hubBtns = document.querySelectorAll('.hub-radar-btn');
  const hubCards = document.querySelectorAll('.hub-detail-card');
  if (!hubBtns.length || !hubCards.length) return;

  hubBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetHub = btn.dataset.hub;
      hubBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      hubCards.forEach(card => {
        if (card.dataset.hub === targetHub) {
          card.classList.add('active');
        } else {
          card.classList.remove('active');
        }
      });
    });
  });
}

/* ==========================================================================
   21. MEAL CALCULATOR PRESET BUTTONS
   ========================================================================== */
function setupCalculatorPresets() {
  const presetBtns = document.querySelectorAll('.calc-preset-pill');
  const slider = document.getElementById('meal-slider');
  if (!presetBtns.length || !slider) return;

  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const meals = parseInt(btn.dataset.meals, 10);
      if (!isNaN(meals)) {
        slider.value = meals;
        slider.dispatchEvent(new Event('input', { bubbles: true }));
        presetBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      }
    });
  });

  slider.addEventListener('input', () => {
    const currentVal = parseInt(slider.value, 10);
    presetBtns.forEach(b => {
      if (parseInt(b.dataset.meals, 10) === currentVal) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });
  });
}

// Hook all new systems into DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  setupScrollToTop();
  setupFaqAccordion();
  setupDistributionRadar();
  setupCalculatorPresets();
});
`;

if (!code.includes('MODERN FLOATING TOAST NOTIFICATION SYSTEM')) {
  code += newFeatures;
  console.log('Appended modern interactive features to main.js.');
}

// Update setupClipboardCopy to trigger showToast
const oldClipboardToast = `showToast('Bank details copied to clipboard!');`;
if (code.includes(`btn.classList.add('copied');`)) {
  console.log('Clipboard copy handler found.');
}

fs.writeFileSync(mainJsPath, code, 'utf8');
console.log('main.js updated successfully!');
