const fs = require('fs');

function inspectSnippet(file, patterns) {
  const content = fs.readFileSync(file, 'utf8');
  console.log(`\n============================ ${file} ============================`);
  patterns.forEach(pat => {
    const idx = content.indexOf(pat);
    if (idx !== -1) {
      console.log(`\n--- Found "${pat}" ---`);
      console.log(content.slice(idx, idx + 500));
    }
  });
}

inspectSnippet('donate.html', ['Institutional Sponsorship', 'Direct Bank Transfer']);
inspectSnippet('volunteer.html', ['Frontline Operational Tracks', 'Safety, Hygiene']);
inspectSnippet('contact.html', ['Priyesh Garg', 'Direct Executive Inquiry']);
