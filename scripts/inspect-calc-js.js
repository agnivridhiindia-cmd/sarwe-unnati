const fs = require('fs');

const js = fs.readFileSync('js/main.js', 'utf8');
const calcIdx = js.indexOf('function setupMealCalculator');
if (calcIdx !== -1) {
  console.log(js.slice(calcIdx, calcIdx + 1200));
}
