const fs = require('fs');
const css = fs.readFileSync('css/style.css', 'utf8');

const orangeMatches = css.match(/#f97316|#ea580c|--color-orange/gi) || [];
console.log('Orange references in style.css:', orangeMatches.length);

const hoverMatches = css.match(/:\s*hover[\s\S]*?\{[\s\S]*?\}/gi) || [];
console.log('Hover rules:', hoverMatches.length);

// Check card hover rules
const cardHovers = hoverMatches.filter(h => h.includes('card') || h.includes('bento'));
console.log('Card hover rules count:', cardHovers.length);
console.log('Sample card hover rule:');
if (cardHovers.length > 0) {
  console.log(cardHovers[0].slice(0, 300));
}
