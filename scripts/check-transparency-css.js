const fs = require('fs');

const css = fs.readFileSync('css/style.css', 'utf8');

const matches = css.match(/[^{}]*transparency[^{}]*\{[^{}]*\}/gi) || [];
console.log('--- Transparency rules in style.css ---');
matches.forEach(m => console.log(m.trim() + '\n'));
