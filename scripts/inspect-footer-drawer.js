const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');

const footer = content.match(/<footer[\s\S]*?<\/footer>/);
if (footer) {
  const brand = footer[0].match(/<(?:a|div)[^>]*class="[^"]*(?:brand|logo|seal|emblem)[^"]*"[\s\S]*?<\/(?:a|div)>/);
  if (brand) console.log('INDEX FOOTER BRAND:\n', brand[0].substring(0, 400));
}

const drawer = content.match(/id="mobile-nav-drawer"[\s\S]*?<\/div>/);
if (drawer) {
  console.log('INDEX DRAWER:\n', drawer[0].substring(0, 400));
}
