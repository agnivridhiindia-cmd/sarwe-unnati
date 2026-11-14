const fs = require('fs');

const index = fs.readFileSync('index.html', 'utf8');

function printSnippet(name, startPattern, endPattern) {
  const start = index.indexOf(startPattern);
  if (start === -1) {
    console.log(`[${name}] NOT FOUND`);
    return;
  }
  const end = index.indexOf(endPattern, start);
  console.log(`\n=================== [${name}] ===================`);
  if (end === -1) {
    console.log(index.slice(start, start + 1200));
  } else {
    console.log(index.slice(start, end + endPattern.length));
  }
}

printSnippet('Hero Telemetry', 'class="hero-telemetry-row', '</div>\n          </div>\n\n          <!-- Right: Field Photography');
printSnippet('Calculator', 'id="meal-calculator"', '</section>');
printSnippet('CSR Partnerships', 'id="csr-partnerships"', '</section>');
printSnippet('Bank Wire', 'id="bank-wire"', '</section>');
