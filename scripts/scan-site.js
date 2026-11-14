const fs = require('fs');

const files = ['index.html', 'about.html', 'programs.html', 'impact.html', 'donate.html', 'volunteer.html', 'contact.html'];

files.forEach(f => {
  if (!fs.existsSync(f)) return;
  const content = fs.readFileSync(f, 'utf8');
  const sections = (content.match(/<section[\s\S]*?<\/section>/gi) || []);
  console.log(`\n================== ${f} (${sections.length} sections) ==================`);
  sections.forEach((s, idx) => {
    const idMatch = s.match(/id=["']([^"']+)["']/i);
    const id = idMatch ? idMatch[1] : `section-${idx+1}`;
    const h2Match = s.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
    const h2 = h2Match ? h2Match[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim().slice(0, 70) : '(No H2)';
    const cardMatches = (s.match(/class=["'][^"']*(?:card|bento|tile|box)[^"']*["']/gi) || []);
    const ulMatches = (s.match(/<ul[\s\S]*?<\/ul>/gi) || []);
    console.log(`  Section ${idx+1} [#${id}]: "${h2}"`);
    console.log(`     -> Card/Bento classes: ${cardMatches.length} | UL lists: ${ulMatches.length}`);
  });
});
