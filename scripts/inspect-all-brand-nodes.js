const fs = require('fs');

const pages = ['index.html', 'about.html', 'programs.html', 'impact.html', 'donate.html', 'volunteer.html', 'contact.html'];

pages.forEach(p => {
  const content = fs.readFileSync(p, 'utf8');
  console.log(`\n================== ${p} ==================`);
  
  // Favicon check
  const fav = content.match(/<link[^>]*rel="[^"]*icon[^"]*"[^>]*>/g);
  console.log('Favicon tags:', fav);

  // Header brand
  const headerMatch = content.match(/<header[\s\S]*?<\/header>/);
  if (headerMatch) {
    const brand = headerMatch[0].match(/<a[^>]*class="(?:brand-identity|header-brand)"[\s\S]*?<\/a>/);
    if (brand) console.log('Header Brand:', brand[0].replace(/\s+/g, ' ').substring(0, 160));
  }

  // Mobile drawer header
  const drawer = content.match(/<div[^>]*class="drawer-header"[\s\S]*?<\/div>\s*<\/div>/);
  if (drawer) {
    console.log('Drawer header snippet:', drawer[0].replace(/\s+/g, ' ').substring(0, 160));
  }

  // Footer brand
  const footer = content.match(/<footer[\s\S]*?<\/footer>/);
  if (footer) {
    const brand = footer[0].match(/<div[^>]*class="brand-identity"[\s\S]*?<\/div>\s*<\/div>/);
    if (brand) console.log('Footer Brand snippet:', brand[0].replace(/\s+/g, ' ').substring(0, 160));
  }
});
