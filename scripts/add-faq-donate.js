const fs = require('fs');

let donateHtml = fs.readFileSync('donate.html', 'utf8');
const indexHtml = fs.readFileSync('index.html', 'utf8');
const match = indexHtml.match(/<!-- =+\s+SECTION 8B: FREQUENTLY ASKED QUESTIONS[\s\S]+?<\/section>/);

if (match && !donateHtml.includes('id="faq-section"')) {
  donateHtml = donateHtml.replace('<!-- Bank Wire Terminal & 80G Receipt Form -->', match[0] + '\n\n  <!-- Bank Wire Terminal & 80G Receipt Form -->');
  fs.writeFileSync('donate.html', donateHtml, 'utf8');
  console.log('FAQ section added to donate.html successfully!');
} else {
  console.log('Already present or not matched.');
}
