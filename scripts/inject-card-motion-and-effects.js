const fs = require('fs');
const path = require('path');

// 1. Add Card Motion & Effects to css/style.css
const cssPath = path.join(__dirname, '../css/style.css');
let css = fs.readFileSync(cssPath, 'utf8');

const cardMotionStyles = `
/* ==========================================================================
   ADVANCED CARD MOTION, BORDER BEAMS & 3D PARALLAX DEPTH SYSTEM
   ========================================================================== */

/* 1. ANIMATED CONIC BORDER BEAM */
@keyframes borderBeamSpin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes ambientPulseGlow {
  0%, 100% {
    box-shadow: 0 20px 50px -15px rgba(0, 0, 0, 0.5), 0 0 25px rgba(37, 99, 235, 0.2);
  }
  50% {
    box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.6), 0 0 45px rgba(37, 99, 235, 0.4);
  }
}

@keyframes cardBreathFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}

.has-border-beam {
  position: relative;
  overflow: hidden;
  z-index: 1;
  animation: ambientPulseGlow 4s ease-in-out infinite;
}

.has-border-beam::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(
    from 0deg,
    transparent 0deg,
    transparent 70deg,
    #2563EB 100deg,
    #10B981 125deg,
    #38BDF8 150deg,
    transparent 180deg,
    transparent 360deg
  );
  animation: borderBeamSpin 5s linear infinite;
  pointer-events: none;
  z-index: -2;
}

.has-border-beam::after {
  content: '';
  position: absolute;
  inset: 1.5px;
  background: inherit;
  border-radius: inherit;
  z-index: -1;
  pointer-events: none;
}

/* 2. 3D PERSPECTIVE CONTAINER & TILT ENGINE */
.perspective-stage {
  perspective: 1200px;
}

.tilt-card {
  transform-style: preserve-3d;
  will-change: transform;
  transition: transform 0.18s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease;
  position: relative;
}

.tilt-card.tilt-moving {
  transition: transform 0.05s linear;
}

.tilt-card.tilt-reset {
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
}

/* 3. LAYERED 3D DEPTH (PARALLAX ELEVATION) */
.tilt-card .bento-num,
.tilt-card .tier-badge,
.tilt-card .roadmap-phase-num,
.tilt-card .challenge-idx {
  transform: translateZ(22px);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
}

.tilt-card .bento-title,
.tilt-card .csr-title,
.tilt-card .challenge-title {
  transform: translateZ(16px);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.tilt-card .csr-price,
.tilt-card .stat-num-display,
.tilt-card .kpi-num {
  transform: translateZ(26px);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.tilt-card .bento-points-list,
.tilt-card .csr-perks-list {
  transform: translateZ(14px);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.tilt-card .btn-primary-glow,
.tilt-card .btn-secondary-outline,
.tilt-card .btn-card-action {
  transform: translateZ(28px);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, background-color 0.2s ease;
}

/* 4. SPECULAR GLASS GLARE (LIGHT TRACKING) */
.card-glare-overlay {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(
    circle 450px at var(--mouse-x, 50%) var(--mouse-y, 50%),
    rgba(255, 255, 255, 0.22),
    transparent 65%
  );
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  z-index: 2;
}

.tilt-card:hover .card-glare-overlay {
  opacity: 1;
}

.bento-card.featured-card .card-glare-overlay,
.csr-card.featured-tier .card-glare-overlay,
.transparency-banner-card .card-glare-overlay,
.passbook-terminal-card .card-glare-overlay {
  background: radial-gradient(
    circle 500px at var(--mouse-x, 50%) var(--mouse-y, 50%),
    rgba(96, 165, 250, 0.28),
    transparent 65%
  );
}

/* 5. KINETIC SHIMMER LIGHT SWEEP */
@keyframes cardLightSweep {
  0% { transform: translateX(-150%) skewX(-25deg); }
  100% { transform: translateX(350%) skewX(-25deg); }
}

.shimmer-sweep-layer {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 50%;
  height: 200%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.15) 50%,
    transparent 100%
  );
  transform: translateX(-200%) skewX(-25deg);
  pointer-events: none;
  z-index: 3;
}

.tilt-card:hover .shimmer-sweep-layer {
  animation: cardLightSweep 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* 6. CARD INTERACTION MICRO-EFFECTS */
.bento-card:hover .bento-num {
  transform: translateZ(24px) scale(1.08);
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.25);
}

.csr-card:hover .tier-badge {
  transform: translateZ(24px) scale(1.08);
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.25);
}

.csr-card:hover .csr-price {
  transform: translateZ(28px) scale(1.04);
}

.bento-points-list li span,
.csr-perks-list li span {
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.bento-card:hover .bento-points-list li span,
.csr-card:hover .csr-perks-list li span {
  transform: scale(1.22);
}

.particular-item:hover {
  transform: translateY(-4px) scale(1.015);
  border-color: #3B82F6;
  box-shadow: 0 10px 25px -6px rgba(37, 99, 235, 0.15);
}

.roadmap-step-card:hover {
  transform: translateY(-8px) scale(1.02);
  border-color: #3B82F6;
  box-shadow: 0 20px 45px -10px rgba(37, 99, 235, 0.18);
}

.challenge-row-card:hover {
  transform: translateX(10px) scale(1.01);
  border-color: #EF4444;
  box-shadow: 0 14px 32px -8px rgba(239, 68, 68, 0.15);
}
`;

css += '\n' + cardMotionStyles;
fs.writeFileSync(cssPath, css, 'utf8');
console.log('Successfully appended card motion & border beam styles to css/style.css!');

// 2. Update index.html to add has-border-beam to featured cards
const indexPath = path.join(__dirname, '../index.html');
let html = fs.readFileSync(indexPath, 'utf8');

html = html.replace(
  'class="bento-card featured-card"',
  'class="bento-card featured-card has-border-beam"'
);

html = html.replace(
  'class="csr-card featured-tier"',
  'class="csr-card featured-tier has-border-beam"'
);

html = html.replace(
  'class="transparency-banner-card spotlight-card"',
  'class="transparency-banner-card spotlight-card has-border-beam"'
);

fs.writeFileSync(indexPath, html, 'utf8');
console.log('Successfully added has-border-beam to featured cards in index.html!');
