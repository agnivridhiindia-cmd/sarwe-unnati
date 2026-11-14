const fs = require('fs');

function inspectPage(file) {
  const content = fs.readFileSync(file, 'utf8');
  console.log(`\n============================ ${file} ============================`);
  
  // Find all sections
  const sections = content.split('<section');
  sections.slice(1).forEach((sec, i) => {
    const id = (sec.match(/id=["']([^"']+)["']/) || [])[1] || 'no-id';
    const tag = (sec.match(/class=["'][^"']*section-tag-badge[^"']*["'][^>]*>([\s\S]*?)<\//) || [])[1] || '';
    const h2 = (sec.match(/<h2[^>]*>([\s\S]*?)<\/h2>/) || [])[1] || '';
    const cards = (sec.match(/class=["'][^"']*(?:card|bento|tile)[^"']*["']/g) || []).length;
    console.log(`Section ${i+1}: #${id}`);
    if (tag) console.log(`  Tag: ${tag.replace(/<[^>]+>/g, '').trim()}`);
    if (h2) console.log(`  H2: ${h2.replace(/<[^>]+>/g, '').trim()}`);
    console.log(`  Cards/bento count: ${cards}`);
  });
}

inspectPage('index.html');
inspectPage('about.html');
