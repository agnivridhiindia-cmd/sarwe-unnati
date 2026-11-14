const fs = require('fs');

const files = ['index.html', 'about.html', 'programs.html', 'impact.html', 'volunteer.html', 'contact.html', 'donate.html'];

files.forEach(file => {
  const c = fs.readFileSync(file, 'utf8');
  const match = c.match(/<header class="site-header"[\s\S]*?<\/header>/);
  if (match) {
    console.log('=== ' + file + ' ===');
    console.log(match[0]);
  }
});
