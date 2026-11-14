const fs = require('fs');
const path = require('path');

// 1. Update js/main.js
const jsPath = path.join(__dirname, '../js/main.js');
let js = fs.readFileSync(jsPath, 'utf8');

const oldThaliRegex = /\/\* =+\s+5\. INTERACTIVE BALANCED THALI EXPLORER[\s\S]*?selectTab\('staple'\);\s*\}/;

const newThaliCode = `/* ==========================================================================
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
      img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
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
      macroBars.innerHTML = data.macros.map(m => \`
        <div class="macro-bar-row">
          <span>\${m.name}</span>
          <div class="macro-track">
            <div class="macro-fill" style="width: \${m.pct}%; background: \${m.color};"></div>
          </div>
          <span style="font-weight:700; color:\${m.color}; text-align:right;">\${m.pct}%</span>
        </div>
      \`).join('');
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

  selectTab('staple');
  restartLoop();
}`;

js = js.replace(oldThaliRegex, newThaliCode);
fs.writeFileSync(jsPath, js, 'utf8');
console.log('Successfully updated setupThaliExplorer with continuous ~1s loop in js/main.js!');

// 2. Add Thali loop transitions and Solar Orange active state in css/style.css
const cssPath = path.join(__dirname, '../css/style.css');
let css = fs.readFileSync(cssPath, 'utf8');

const thaliLoopStyles = `
/* ==========================================================================
   THALI CONTINUOUS LOOP TRANSITIONS & SOLAR ORANGE ACTIVE STATE
   ========================================================================== */
.thali-img-preview {
  transition: opacity 0.2s ease-out, transform 0.25s ease-out;
}

.macro-fill {
  transition: width 0.35s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s;
}

.thali-nav-btn {
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.thali-nav-btn.active {
  background: #FFFFFF !important;
  border-color: #F97316 !important;
  transform: translateX(10px) !important;
  box-shadow: 0 12px 28px -6px rgba(249, 115, 22, 0.28), 0 0 15px rgba(251, 146, 60, 0.18) !important;
}

.thali-nav-btn.active .thali-btn-title {
  color: #EA580C !important;
}

.thali-nav-btn.active .thali-btn-portion {
  color: #EA580C !important;
  background: rgba(249, 115, 22, 0.14) !important;
  border: 1px solid rgba(249, 115, 22, 0.45) !important;
}
`;

css += '\n' + thaliLoopStyles;
fs.writeFileSync(cssPath, css, 'utf8');
console.log('Successfully added Thali loop transitions & active styles to css/style.css!');
