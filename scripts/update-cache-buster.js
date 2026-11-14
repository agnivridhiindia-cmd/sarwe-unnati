const fs = require('fs');
const files = ['index.html', 'about.html', 'programs.html', 'impact.html', 'donate.html', 'volunteer.html', 'contact.html'];
for (const f of files) {
  let content = fs.readFileSync(f, 'utf8');
  content = content.replace(/href="css\/style\.css[^"]*"/g, 'href="css/style.css?v=20261114_vibrant"');
  fs.writeFileSync(f, content, 'utf8');
}
console.log('Updated cache busters in 7 files');
