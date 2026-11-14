const fs = require('fs');
const files = ['index.html', 'about.html', 'programs.html', 'impact.html', 'donate.html', 'volunteer.html', 'contact.html'];

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  console.log(`\n================== ${file} ==================`);
  
  // Header emblem icon & brand text
  const headerEmblem = content.match(/<div class="brand-emblem-icon">([\s\S]*?)<\/div>/);
  if (headerEmblem) {
    console.log('Header emblem preview:', headerEmblem[0].replace(/\s+/g, ' ').substring(0, 80));
  }
  
  // Drawer close button & brand emblem
  const drawerHeader = content.match(/<div class="drawer-header">([\s\S]*?)<\/div>\s*<div class="drawer-links-list">/);
  if (drawerHeader) {
    console.log('Drawer header preview:', drawerHeader[0].replace(/\s+/g, ' ').substring(0, 100));
  }
  
  // Footer bottom bar
  const footerBottom = content.match(/<div class="footer-bottom-bar">([\s\S]*?)<\/div>/);
  if (footerBottom) {
    console.log('Footer bottom bar preview:', footerBottom[0].replace(/\s+/g, ' ').substring(0, 120));
  }
}
