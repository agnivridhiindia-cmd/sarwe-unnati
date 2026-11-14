const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '../css/style.css');
let css = fs.readFileSync(cssPath, 'utf8');

const orangeContrastStyles = `
/* ==========================================================================
   SOLAR ORANGE & WARM AMBER CARD HOVER CONTRAST ENGINE
   Brings out vibrant, high-contrast solar orange upon hover over all cards
   ========================================================================== */

/* 1. BENTO CARDS SOLAR ORANGE HOVER */
.bento-card:hover {
  transform: translateY(-7px);
  border-color: #F97316 !important;
  box-shadow: 0 20px 48px -10px rgba(249, 115, 22, 0.22), 0 0 20px rgba(251, 146, 60, 0.15) !important;
}

.bento-card.featured-card:hover {
  border-color: #FB923C !important;
  box-shadow: 0 30px 70px -15px rgba(0, 0, 0, 0.7), 0 0 50px rgba(249, 115, 22, 0.4) !important;
}

.bento-card:hover .bento-num {
  color: #EA580C !important;
  background: rgba(249, 115, 22, 0.12) !important;
  border-color: rgba(249, 115, 22, 0.45) !important;
  box-shadow: 0 4px 14px rgba(249, 115, 22, 0.25) !important;
}

.bento-card.featured-card:hover .bento-num {
  color: #FB923C !important;
  background: rgba(251, 146, 60, 0.22) !important;
  border-color: rgba(251, 146, 60, 0.55) !important;
}

.bento-card:hover .bento-points-list li span {
  background: rgba(249, 115, 22, 0.16) !important;
  color: #EA580C !important;
  border-color: rgba(249, 115, 22, 0.45) !important;
  transform: scale(1.22);
}

.bento-card.featured-card:hover .bento-points-list li span {
  background: rgba(251, 146, 60, 0.25) !important;
  color: #FB923C !important;
  border-color: rgba(251, 146, 60, 0.6) !important;
}

/* 2. CSR TIER CARDS SOLAR ORANGE HOVER */
.csr-card:hover {
  transform: translateY(-8px);
  border-color: #F97316 !important;
  box-shadow: 0 25px 55px -12px rgba(249, 115, 22, 0.25), 0 0 25px rgba(251, 146, 60, 0.18) !important;
}

.csr-card.featured-tier:hover {
  border-color: #FB923C !important;
  box-shadow: 0 32px 75px -15px rgba(0, 0, 0, 0.7), 0 0 55px rgba(249, 115, 22, 0.45) !important;
}

.csr-card:hover .tier-badge {
  color: #EA580C !important;
  background: rgba(249, 115, 22, 0.12) !important;
  border-color: rgba(249, 115, 22, 0.45) !important;
  box-shadow: 0 4px 14px rgba(249, 115, 22, 0.25) !important;
}

.csr-card.featured-tier:hover .tier-badge {
  color: #FB923C !important;
  background: rgba(251, 146, 60, 0.22) !important;
  border-color: rgba(251, 146, 60, 0.6) !important;
}

.csr-card:hover .csr-price {
  color: #EA580C !important;
}

.csr-card.featured-tier:hover .csr-price {
  color: #FB923C !important;
}

.csr-card:hover .csr-perks-list li span {
  color: #F97316 !important;
  transform: scale(1.22);
}

.csr-card.featured-tier:hover .csr-perks-list li span {
  color: #FB923C !important;
}

/* 3. CHARTER PARTICULARS & DATA TILES HOVER */
.particular-item:hover {
  transform: translateY(-4px) scale(1.02);
  border-color: #F97316 !important;
  box-shadow: 0 10px 25px -6px rgba(249, 115, 22, 0.2) !important;
}

.particular-item:hover .particular-label {
  color: #EA580C !important;
}

/* 4. 5-PHASE ROADMAP CARDS HOVER */
.roadmap-step-card:hover {
  transform: translateY(-8px) scale(1.02);
  border-color: #F97316 !important;
  box-shadow: 0 20px 45px -10px rgba(249, 115, 22, 0.24) !important;
}

.roadmap-step-card::before {
  background: linear-gradient(90deg, #F97316, #F59E0B) !important;
}

.roadmap-step-card:hover .roadmap-phase-num {
  color: #EA580C !important;
  background: rgba(249, 115, 22, 0.12) !important;
  border-color: rgba(249, 115, 22, 0.45) !important;
}

/* 5. FAQ CARDS HOVER & ACTIVE */
.faq-card-item:hover {
  border-color: #F97316 !important;
  box-shadow: 0 14px 32px -8px rgba(249, 115, 22, 0.18) !important;
}

.faq-card-item.active {
  border-color: #F97316 !important;
  box-shadow: 0 16px 36px -8px rgba(249, 115, 22, 0.22) !important;
}

.faq-card-item.active .faq-trigger-btn {
  color: #EA580C !important;
}

.faq-card-item.active .faq-toggle-icon {
  background: #F97316 !important;
  color: #FFFFFF !important;
}

/* 6. PASSBOOK TERMINAL CARD HOVER */
.passbook-terminal-card:hover {
  border-color: #FB923C !important;
  box-shadow: 0 30px 70px -15px rgba(0, 0, 0, 0.7), 0 0 50px rgba(249, 115, 22, 0.35) !important;
}

/* 7. TRANSPARENCY GATEWAY CARD HOVER */
.transparency-banner-card:hover {
  border-color: #FB923C !important;
  box-shadow: 0 30px 70px -15px rgba(0, 0, 0, 0.7), 0 0 45px rgba(249, 115, 22, 0.35) !important;
}

.kpi-mini-card:hover {
  border-color: #F97316 !important;
  background: rgba(39, 53, 74, 0.95) !important;
  box-shadow: 0 6px 20px -4px rgba(249, 115, 22, 0.25) !important;
}

.kpi-mini-card:hover .kpi-lbl {
  color: #FB923C !important;
}

/* 8. SOLAR ORANGE SPOTLIGHT MOUSE TRACKER */
.spotlight-card::before,
.bento-card::before,
.csr-card::before,
.csr-tier-card::before,
.stat-card::before,
.passbook-card::before,
.calculator-card-wrapper::before,
.particular-item::before {
  background: radial-gradient(
    480px circle at var(--mouse-x, -500px) var(--mouse-y, -500px),
    rgba(249, 115, 22, 0.18),
    transparent 58%
  ) !important;
}

/* 9. SOLAR ORANGE SPECULAR GLARE OVERLAY */
.card-glare-overlay {
  background: radial-gradient(
    circle 450px at var(--mouse-x, 50%) var(--mouse-y, 50%),
    rgba(249, 115, 22, 0.24),
    transparent 65%
  ) !important;
}

.bento-card.featured-card .card-glare-overlay,
.csr-card.featured-tier .card-glare-overlay,
.transparency-banner-card .card-glare-overlay,
.passbook-terminal-card .card-glare-overlay {
  background: radial-gradient(
    circle 500px at var(--mouse-x, 50%) var(--mouse-y, 50%),
    rgba(251, 146, 60, 0.32),
    transparent 65%
  ) !important;
}

/* 10. SOLAR ORANGE KINETIC SHIMMER RAY */
.shimmer-sweep-layer {
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(249, 115, 22, 0.18) 35%,
    rgba(255, 255, 255, 0.4) 50%,
    rgba(249, 115, 22, 0.18) 65%,
    transparent 100%
  ) !important;
}

/* 11. BORDER BEAM WITH SOLAR ORANGE PULSE */
@keyframes borderGlowPulse {
  0%, 100% {
    border-color: rgba(249, 115, 22, 0.6) !important;
    box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.6), 0 0 35px rgba(249, 115, 22, 0.35) !important;
  }
  50% {
    border-color: rgba(52, 211, 153, 0.75) !important;
    box-shadow: 0 28px 70px -15px rgba(0, 0, 0, 0.7), 0 0 45px rgba(16, 185, 129, 0.4) !important;
  }
}
`;

css += '\n' + orangeContrastStyles;
fs.writeFileSync(cssPath, css, 'utf8');
console.log('Successfully added Solar Orange card hover contrast engine to css/style.css!');
