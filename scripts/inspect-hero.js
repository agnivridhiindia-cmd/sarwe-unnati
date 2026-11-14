const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf8');

const heroStart = index.indexOf('id="hero"');
const heroEnd = index.indexOf('</section>', heroStart);
console.log(index.slice(heroStart, heroEnd + 10));
