const fs = require('fs');

const index = fs.readFileSync('index.html', 'utf8');
const headerMatch = index.match(/<header[\s\S]*?<\/header>/);
if (headerMatch) {
  console.log('--- HEADER ---');
  console.log(headerMatch[0]);
}

const footerMatch = index.match(/<footer[\s\S]*?<\/footer>/);
if (footerMatch) {
  console.log('--- FOOTER (snippet) ---');
  console.log(footerMatch[0].slice(0, 1000));
}
