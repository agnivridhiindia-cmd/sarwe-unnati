const fs = require('fs');

const css = fs.readFileSync('css/style.css', 'utf8');

const matches = css.match(/[^{}]*csr[^{}]*\{[^{}]*\}/gi) || [];
console.log('--- CSR rules in style.css ---');
matches.slice(0, 20).forEach(m => console.log(m.trim() + '\n'));
