const fs = require('fs');

function inspectSnippet(file, patterns) {
  const content = fs.readFileSync(file, 'utf8');
  console.log(`\n============================ ${file} ============================`);
  patterns.forEach(pat => {
    const idx = content.indexOf(pat);
    if (idx !== -1) {
      console.log(`\n--- Found "${pat}" ---`);
      console.log(content.slice(idx, idx + 600));
    }
  });
}

inspectSnippet('programs.html', ['Five Core Operational Components', 'Target Beneficiaries', 'Three-Phase Distribution']);
inspectSnippet('impact.html', ['Verified Targets', 'Precision Efficiency', 'Operational Risk']);
