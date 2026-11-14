const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../index.html');
const cssPath = path.join(__dirname, '../css/style.css');

let indexHtml = fs.readFileSync(indexPath, 'utf8');
let styleCss = fs.readFileSync(cssPath, 'utf8');

console.log('Read index.html (' + indexHtml.length + ' chars) and style.css (' + styleCss.length + ' chars)');
