const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '..', 'css', 'style.css');
let css = fs.readFileSync(cssPath, 'utf8');

const heroMobileFix = `
/* Hero Mobile Fluid Scaling & Viewport Perfection */
@media (max-width: 640px) {
  .hero-glass-telemetry {
    grid-template-columns: 1fr !important;
    gap: 0.85rem !important;
    padding: 1.15rem !important;
    margin: 1.25rem 0 !important;
  }
  .hero-actions-row {
    flex-direction: column !important;
    align-items: stretch !important;
    gap: 0.75rem !important;
  }
  .btn-vibrant-cta, .btn-vibrant-outline {
    width: 100% !important;
    justify-content: center !important;
  }
  .hero-video-bg-wrap {
    clip-path: inset(0 0 0 0) !important;
  }
  .hero-bg-video {
    max-width: 100% !important;
  }
}
`;

css += heroMobileFix;
fs.writeFileSync(cssPath, css, 'utf8');
console.log('Hero mobile fixes applied to css/style.css!');
