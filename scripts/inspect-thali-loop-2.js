const fs = require('fs');
const js = fs.readFileSync('js/main.js', 'utf8');
const thaliIdx = js.indexOf('function setupThaliExplorer');
if (thaliIdx !== -1) {
  console.log(js.slice(thaliIdx + 1400, thaliIdx + 2900));
}
