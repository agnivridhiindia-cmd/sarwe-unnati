const fs = require('fs');
const glob = ['index.html', 'about.html', 'programs.html', 'impact.html', 'donate.html', 'volunteer.html', 'contact.html'];

glob.forEach(file => {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    const headerMatch = content.match(/<header[\s\S]*?<\/header>/);
    if (headerMatch) {
      console.log(`=== ${file} HEADER BRAND ===`);
      const brand = headerMatch[0].match(/<(?:a|div)[^>]*class="[^"]*brand[^"]*"[\s\S]*?<\/(?:a|div)>/);
      if (brand) console.log(brand[0].substring(0, 300));
    }
  }
});
