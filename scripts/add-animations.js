const fs = require('fs');
const path = require('path');

// 1. Append Animation & Effect Styles to css/style.css
const cssPath = path.join(__dirname, '../css/style.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

const animationStyles = `
/* ==========================================================================
   DYNAMIC EFFECTS, ANIMATIONS & MODERN VISUAL SUITE
   ========================================================================== */

/* 1. KEYFRAME ANIMATIONS */
@keyframes marqueeFlow {
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-50%, 0, 0); }
}

@keyframes floatSlow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-7px); }
}

@keyframes floatReverse {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(7px); }
}

@keyframes shimmerPass {
  0% { transform: translateX(-100%) rotate(25deg); }
  100% { transform: translateX(250%) rotate(25deg); }
}

@keyframes pulseBeaconRing {
  0% {
    transform: scale(0.95);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.6);
    opacity: 0.3;
  }
  100% {
    transform: scale(2.4);
    opacity: 0;
  }
}

@keyframes auroraDrift {
  0% { transform: translate(0, 0) scale(1) rotate(0deg); }
  33% { transform: translate(30px, -40px) scale(1.1) rotate(10deg); }
  66% { transform: translate(-25px, 20px) scale(0.95) rotate(-5deg); }
  100% { transform: translate(0, 0) scale(1) rotate(0deg); }
}

@keyframes textGradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* 2. INFINITE MARQUEE TICKER */
.section-marquee-ticker {
  background: #090D16;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding: 1.1rem 0;
  overflow: hidden;
  position: relative;
  user-select: none;
}

.section-marquee-ticker::before,
.section-marquee-ticker::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 120px;
  z-index: 2;
  pointer-events: none;
}

.section-marquee-ticker::before {
  left: 0;
  background: linear-gradient(90deg, #090D16 0%, transparent 100%);
}

.section-marquee-ticker::after {
  right: 0;
  background: linear-gradient(-90deg, #090D16 0%, transparent 100%);
}

.marquee-track-container {
  display: flex;
  width: 100%;
  overflow: hidden;
}

.marquee-flow-track {
  display: flex;
  align-items: center;
  gap: 2.75rem;
  width: max-content;
  animation: marqueeFlow 32s linear infinite;
  will-change: transform;
}

.marquee-track-container:hover .marquee-flow-track {
  animation-play-state: paused;
}

.marquee-item {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  font-weight: 600;
  color: #CBD5E1;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
}

.marquee-item .ticker-dot {
  color: #10B981;
  font-size: 0.95rem;
  text-shadow: 0 0 8px rgba(16, 185, 129, 0.6);
}

/* 3. TRANSPARENCY GATEWAY CARD */
.section-transparency-gateway {
  padding: 4.5rem 0;
  background: linear-gradient(180deg, #090D16 0%, var(--bg-surface-1) 100%);
}

.transparency-banner-card {
  background: var(--bg-surface-2);
  border: 1px solid rgba(37, 99, 235, 0.25);
  border-radius: var(--radius-lg);
  padding: 3rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.transparency-grid-split {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 3.5rem;
  align-items: center;
  position: relative;
  z-index: 2;
}

.transparency-title {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3.5vw, 2.4rem);
  font-weight: 800;
  color: #FFFFFF;
  line-height: 1.25;
  margin: 1.25rem 0 1rem;
}

.transparency-desc {
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.7;
  max-width: 640px;
  margin-bottom: 2rem;
}

.transparency-actions {
  display: flex;
  gap: 1.25rem;
  align-items: center;
  flex-wrap: wrap;
}

.transparency-kpi-column {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.kpi-mini-card {
  background: rgba(15, 23, 42, 0.65);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-md);
  padding: 1.25rem 1.75rem;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s;
}

.kpi-mini-card:hover {
  transform: translateX(6px);
  border-color: var(--primary-royal);
}

.kpi-num {
  font-family: var(--font-mono);
  font-size: 1.85rem;
  font-weight: 800;
  color: #FFFFFF;
}

.kpi-lbl {
  font-size: 0.82rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 0.25rem;
}

/* 4. SCROLL REVEAL UTILITIES */
[data-reveal] {
  opacity: 0;
  transform: translateY(32px) scale(0.985);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
}

[data-reveal].revealed {
  opacity: 1;
  transform: translateY(0) scale(1);
}

[data-reveal-delay="100"] { transition-delay: 100ms; }
[data-reveal-delay="200"] { transition-delay: 200ms; }
[data-reveal-delay="300"] { transition-delay: 300ms; }
[data-reveal-delay="400"] { transition-delay: 400ms; }
[data-reveal-delay="500"] { transition-delay: 500ms; }

/* 5. INTERACTIVE SPOTLIGHT MOUSE-TRACKER ON CARDS */
.spotlight-card,
.bento-card,
.csr-tier-card,
.stat-card,
.passbook-card,
.calculator-card-wrapper {
  position: relative;
  overflow: hidden;
}

.spotlight-card::before,
.bento-card::before,
.csr-tier-card::before,
.stat-card::before,
.passbook-card::before,
.calculator-card-wrapper::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(
    500px circle at var(--mouse-x, -500px) var(--mouse-y, -500px),
    rgba(37, 99, 235, 0.16),
    transparent 55%
  );
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s ease;
  z-index: 1;
}

.spotlight-card:hover::before,
.bento-card:hover::before,
.csr-tier-card:hover::before,
.stat-card:hover::before,
.passbook-card:hover::before,
.calculator-card-wrapper:hover::before {
  opacity: 1;
}

/* 6. BUTTON SHIMMER & SHEEN EFFECT */
.btn-shimmer {
  position: relative;
  overflow: hidden;
}

.btn-shimmer::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    60deg,
    transparent 35%,
    rgba(255, 255, 255, 0.3) 50%,
    transparent 65%
  );
  transform: translateX(-100%) rotate(25deg);
  pointer-events: none;
}

.btn-shimmer:hover::after {
  animation: shimmerPass 1.2s ease forwards;
}

/* 7. LIVE RADAR HALO EXPANSION */
.eyebrow-pulse-dot {
  position: relative;
}

.eyebrow-pulse-dot::after {
  content: '';
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  border: 1.5px solid #10B981;
  animation: pulseBeaconRing 2s cubic-bezier(0.24, 0, 0.38, 1) infinite;
}

/* 8. FLOATING ACCENTS */
.float-slow {
  animation: floatSlow 4.5s ease-in-out infinite;
}

.float-reverse {
  animation: floatReverse 4.8s ease-in-out infinite;
}

/* 9. CARD HOVER 3D PERSPECTIVE */
.perspective-container {
  perspective: 1200px;
}

.tilt-card {
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s;
  transform-style: preserve-3d;
}

.tilt-card:hover {
  transform: translateY(-5px) scale(1.015);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 20px rgba(37, 99, 235, 0.2);
}

@media (max-width: 900px) {
  .transparency-grid-split {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
`;

// Append styles if not already present
if (!cssContent.includes('section-marquee-ticker')) {
  cssContent += animationStyles;
  fs.writeFileSync(cssPath, cssContent, 'utf8');
  console.log('Appended dynamic animation and effect styles to css/style.css!');
} else {
  console.log('Animation styles already present in css/style.css');
}
