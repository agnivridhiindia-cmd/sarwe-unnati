const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '..', 'css', 'style.css');
let css = fs.readFileSync(cssPath, 'utf8');

const mobileSafeguards = `
/* Strict Mobile Viewport Overflow Protection & Performance */
html, body {
  overflow-x: hidden !important;
  max-width: 100vw;
  width: 100%;
  position: relative;
}

.section-hero-vibrant {
  overflow: hidden !important;
  max-width: 100vw;
  width: 100%;
}

@media (max-width: 768px) {
  .hero-vibrant-title {
    font-size: clamp(1.75rem, 6.8vw, 2.25rem) !important;
    word-break: break-word;
    overflow-wrap: break-word;
  }
  .container {
    padding: 0 1.25rem !important;
  }
  .aurora-orb {
    opacity: 0.15;
    max-width: 80vw;
    max-height: 80vw;
  }
}

@media (max-width: 480px) {
  .aurora-orb {
    display: none !important;
  }
  .hero-split-grid {
    gap: 2.5rem !important;
  }
  .hero-copy-column {
    max-width: 100% !important;
    box-sizing: border-box;
  }
}
`;

css += mobileSafeguards;
fs.writeFileSync(cssPath, css, 'utf8');
console.log('Mobile safeguards appended to css/style.css!');
