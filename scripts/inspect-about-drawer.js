const fs = require('fs');

const content = fs.readFileSync('about.html', 'utf8');
const dMatch = content.match(/<div class="mobile-nav-drawer"[\s\S]*?<\/div>\s*<\/div>/);
if (dMatch) console.log(dMatch[0]);

const fMatch = content.match(/<footer[\s\S]*?<\/footer>/);
if (fMatch) console.log(fMatch[0]);
