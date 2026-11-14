const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '../css/style.css');
let css = fs.readFileSync(cssPath, 'utf8');

// Replace the problematic has-border-beam block
const oldBeamRegex = /\/\* 1\. ANIMATED CONIC BORDER BEAM \*\/[\s\S]*?\.has-border-beam::after\s*\{[\s\S]*?\}/;

const newBeamCss = `/* 1. ANIMATED LUMINOUS BORDER BEAM & BREATHING GLOW */
@keyframes borderGlowPulse {
  0%, 100% {
    border-color: rgba(59, 130, 246, 0.5) !important;
    box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.6), 0 0 30px rgba(37, 99, 235, 0.3) !important;
  }
  50% {
    border-color: rgba(52, 211, 153, 0.75) !important;
    box-shadow: 0 28px 70px -15px rgba(0, 0, 0, 0.7), 0 0 45px rgba(16, 185, 129, 0.4) !important;
  }
}

.has-border-beam {
  position: relative;
  animation: borderGlowPulse 4s ease-in-out infinite !important;
  z-index: 1;
}`;

css = css.replace(oldBeamRegex, newBeamCss);
fs.writeFileSync(cssPath, css, 'utf8');
console.log('Successfully replaced has-border-beam with safe, vibrant border glow pulse in css/style.css!');
