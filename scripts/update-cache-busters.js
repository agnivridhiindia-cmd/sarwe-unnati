const fs = require('fs');
const files = ['index.html', 'about.html', 'programs.html', 'impact.html', 'donate.html', 'volunteer.html', 'contact.html'];
const ver = '20261113_v6';

files.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    content = content.replace(/href=["']css\/style\.css(\?[^"']*)?["']/g, `href="css/style.css?v=${ver}"`);
    content = content.replace(/src=["']js\/main\.js(\?[^"']*)?["']/g, `src="js/main.js?v=${ver}"`);
    fs.writeFileSync(f, content, 'utf8');
    console.log('Updated cache busters in ' + f);
  }
});
