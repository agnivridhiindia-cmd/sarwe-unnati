const fs = require('fs');

const files = ['index.html', 'about.html', 'programs.html', 'impact.html', 'volunteer.html', 'contact.html', 'donate.html'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  content = content.replace(/href="about\.html#governance"/g, 'href="about.html#leadership"');
  content = content.replace(/Board Oversight/g, 'Director &amp; Leadership');
  content = content.replace(/Board Governance Charter/g, 'Director &amp; Stewardship');
  content = content.replace(/View Governance Charter &rarr;/g, 'View Leadership Dossier &rarr;');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated links in:', file);
  }
});
