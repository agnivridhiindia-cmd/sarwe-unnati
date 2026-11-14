const fs = require('fs');

['about.html', 'programs.html', 'impact.html', 'volunteer.html', 'contact.html'].forEach(p => {
  const content = fs.readFileSync(p, 'utf8');
  const footer = content.match(/<footer[\s\S]*?<\/footer>/);
  if (footer) {
    const brand = footer[0].match(/<(?:div|a)[^>]*class="[^"]*(?:brand|logo|identity)[^"]*"[\s\S]*?<\/(?:div|a)>/);
    console.log(`${p} footer brand:`, brand ? brand[0].replace(/\s+/g, ' ').substring(0, 160) : 'none');
  }
});
