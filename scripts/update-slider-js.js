const fs = require('fs');

let js = fs.readFileSync('js/main.js', 'utf8');

const targetCode = `  slider.addEventListener('input', () => {
    const val = parseInt(slider.value, 10);
    if (isAmountBased) {
      updateByAmount(val);
    } else {
      updateByMeals(val);
    }
  });`;

const replacementCode = `  function updateSliderFill(val) {
    const min = parseFloat(slider.min) || (isAmountBased ? 500 : 15);
    const max = parseFloat(slider.max) || (isAmountBased ? 100000 : 1500);
    const pct = Math.min(100, Math.max(0, ((val - min) / (max - min)) * 100));
    slider.style.background = \`linear-gradient(to right, #F97316 0%, #EA580C \${pct}%, rgba(255,255,255,0.18) \${pct}%, rgba(255,255,255,0.18) 100%)\`;
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
  updateSliderFill(parseInt(slider.value, 10));`;

if (js.includes(targetCode)) {
  js = js.replace(targetCode, replacementCode);
  fs.writeFileSync('js/main.js', js, 'utf8');
  console.log('✓ Successfully attached dynamic Solar Orange fill to slider in js/main.js');
} else {
  console.log('⚠ targetCode not matched');
}
