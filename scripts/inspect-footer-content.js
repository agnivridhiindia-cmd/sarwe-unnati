const fs = require('fs');
const content = fs.readFileSync('about.html', 'utf8');
const footer = content.match(/<footer[\s\S]*?<\/footer>/);
if (footer) console.log(footer[0].substring(0, 500));
