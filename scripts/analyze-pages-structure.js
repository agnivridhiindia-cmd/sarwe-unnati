const fs = require('fs');

const pages = ['about.html', 'programs.html', 'impact.html', 'donate.html', 'volunteer.html', 'contact.html'];

pages.forEach(p => {
  const html = fs.readFileSync(p, 'utf8');
  const sections = [];
  const secRegex = /<section[^>]*class="([^"]*)"[^>]*(?:id="([^"]*)")?[^>]*>/g;
  let match;
  while ((match = secRegex.exec(html)) !== null) {
    sections.push({ class: match[1], id: match[2] || 'none' });
  }
  const cardsCount = (html.match(/class="[^"]*(?:card|tile|box|badge-card)[^"]*"/g) || []).length;
  console.log(`\n=== ${p} (Card references: ${cardsCount}) ===`);
  sections.forEach((s, i) => console.log(`  Section ${i+1}: class="${s.class}" id="${s.id}"`));
});
