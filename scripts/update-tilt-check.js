const fs = require('fs');
const path = require('path');

const jsPath = path.join(__dirname, '../js/main.js');
let js = fs.readFileSync(jsPath, 'utf8');

js = js.replace(
  "if (!window.matchMedia('(hover: hover)').matches) return;",
  "if (window.innerWidth < 768) return;"
);

fs.writeFileSync(jsPath, js, 'utf8');
console.log('Updated setupInteractiveTilt in js/main.js to work on all desktop viewports!');
