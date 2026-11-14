const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '../css/style.css');
let css = fs.readFileSync(cssPath, 'utf8');

// 1. Add aliases to :root
const rootAdditions = `
  /* Token Aliases for Cross-Template Compatibility */
  --primary-royal: #2563EB;
  --primary-emerald: #10B981;
  --accent-amber: #F59E0B;
  --bg-surface-1: #0B1120;
  --bg-surface-2: #111827;
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-xl: 28px;
`;

if (!css.includes('--primary-royal:')) {
  css = css.replace(':root {', ':root {' + rootAdditions);
}

// 2. Replace the transparency gateway CSS section
const oldTransparencyRegex = /\/\* 3\. TRANSPARENCY GATEWAY CARD \*\/[\s\S]*?\.kpi-lbl\s*\{[\s\S]*?\}/;

const newTransparencyCss = `/* 3. TRANSPARENCY GATEWAY CARD (HIGH CONTRAST & VISIBILITY) */
.section-transparency-gateway {
  padding: 5rem 0;
  background: #090D16 !important;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;
  z-index: 5;
}

.transparency-banner-card {
  background: linear-gradient(135deg, #0F172A 0%, #162032 100%) !important;
  border: 1.5px solid rgba(59, 130, 246, 0.45) !important;
  border-radius: 24px;
  padding: 3.5rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 35px rgba(37, 99, 235, 0.2);
}

.transparency-grid-split {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 3.5rem;
  align-items: center;
  position: relative;
  z-index: 2;
}

.transparency-banner-card .hero-eyebrow-pill {
  background: rgba(37, 99, 235, 0.18) !important;
  border: 1px solid rgba(96, 165, 250, 0.5) !important;
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.45rem 1rem;
  border-radius: 999px;
  margin-bottom: 1.25rem;
}

.transparency-banner-card .eyebrow-text {
  color: #93C5FD !important;
  font-family: var(--font-mono);
  font-size: 0.8rem !important;
  font-weight: 700 !important;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.transparency-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 3.8vw, 2.75rem);
  font-weight: 800;
  color: #FFFFFF !important;
  line-height: 1.25;
  margin: 1.25rem 0 1rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.transparency-desc {
  font-size: 1.05rem;
  color: #CBD5E1 !important;
  line-height: 1.7;
  max-width: 640px;
  margin-bottom: 2.25rem;
}

.transparency-actions {
  display: flex;
  gap: 1.25rem;
  align-items: center;
  flex-wrap: wrap;
}

.transparency-actions .btn-secondary-outline {
  border: 1.5px solid rgba(255, 255, 255, 0.3) !important;
  color: #FFFFFF !important;
  background: rgba(255, 255, 255, 0.06) !important;
  border-radius: 12px;
  padding: 0.85rem 1.65rem;
  font-weight: 600;
  transition: all 0.25s ease;
}

.transparency-actions .btn-secondary-outline:hover {
  background: rgba(255, 255, 255, 0.15) !important;
  border-color: #FFFFFF !important;
  transform: translateY(-2px);
}

.transparency-kpi-column {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.kpi-mini-card {
  background: #1E293B !important;
  border: 1px solid rgba(255, 255, 255, 0.14) !important;
  border-radius: 14px;
  padding: 1.35rem 1.75rem;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s, background 0.3s;
}

.kpi-mini-card:hover {
  transform: translateX(6px);
  border-color: #3B82F6 !important;
  background: #27354A !important;
}

.kpi-num {
  font-family: var(--font-mono);
  font-size: 2.1rem;
  font-weight: 800;
  color: #FFFFFF !important;
}

.kpi-lbl {
  font-size: 0.82rem;
  color: #38BDF8 !important;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-top: 0.35rem;
}`;

css = css.replace(oldTransparencyRegex, newTransparencyCss);
fs.writeFileSync(cssPath, css, 'utf8');
console.log('Successfully updated transparency styles in css/style.css!');
