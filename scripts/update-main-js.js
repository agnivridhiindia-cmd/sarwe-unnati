const fs = require('fs');

let js = fs.readFileSync('js/main.js', 'utf8');

// 1. Replace the vegetable photo URL with reliable Unsplash asset
const oldVegUrl = 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80';
const newVegUrl = 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80';

if (js.includes(oldVegUrl)) {
  js = js.replace(oldVegUrl, newVegUrl);
  console.log('✓ Replaced unreliable vegetable photo URL in js/main.js');
}

// 2. Add hover pause/resume to setupThaliExplorer
const thaliTarget = `  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      selectTab(btn.dataset.thali, true);
    });
  });

  selectTab('staple');
  restartLoop();
}`;

const thaliReplacement = `  tabs.forEach(btn => {
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
}`;

if (js.includes(thaliTarget)) {
  js = js.replace(thaliTarget, thaliReplacement);
  console.log('✓ Added hover pause/resume to setupThaliExplorer');
}

// 3. Update slider track styling dynamically in setupMealCalculator
const calcSliderTarget = `mealSlider.addEventListener('input', () => {
    updateByMeals(parseInt(mealSlider.value, 10));
  });`;

const calcSliderReplacement = `function updateSliderFill(val) {
    const min = parseFloat(mealSlider.min) || 15;
    const max = parseFloat(mealSlider.max) || 1500;
    const pct = ((val - min) / (max - min)) * 100;
    mealSlider.style.background = \`linear-gradient(to right, #F97316 0%, #EA580C \${pct}%, rgba(255,255,255,0.15) \${pct}%, rgba(255,255,255,0.15) 100%)\`;
  }

  mealSlider.addEventListener('input', () => {
    const val = parseInt(mealSlider.value, 10);
    updateByMeals(val);
    updateSliderFill(val);
  });
  updateSliderFill(parseInt(mealSlider.value, 10));`;

if (js.includes(calcSliderTarget)) {
  js = js.replace(calcSliderTarget, calcSliderReplacement);
  console.log('✓ Added dynamic Solar Orange slider fill to setupMealCalculator');
}

fs.writeFileSync('js/main.js', js, 'utf8');
console.log('✓ js/main.js successfully updated');
