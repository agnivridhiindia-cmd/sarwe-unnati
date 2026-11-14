const fs = require('fs');

const about = fs.readFileSync('about.html', 'utf8');
const lines = about.split('\n');

console.log('--- About Section 3 excerpt ---');
const sec3Start = lines.findIndex(l => l.includes('ETHICAL FOUNDATION'));
if (sec3Start !== -1) {
  console.log(lines.slice(sec3Start - 2, sec3Start + 45).join('\n'));
}

console.log('--- About Section 5 excerpt ---');
const sec5Start = lines.findIndex(l => l.includes('STATUTORY GOVERNANCE'));
if (sec5Start !== -1) {
  console.log(lines.slice(sec5Start - 2, sec5Start + 45).join('\n'));
}
