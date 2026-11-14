const fs = require('fs');

const modernCss = `
/* ==========================================================================
   PAGE 1 MODERNIZATION ENGINE — SOLAR ORANGE CONTRAST & EDITORIAL ARCHITECTURE
   ========================================================================== */

/* 1. HERO OPEN METRIC RIBBON */
.hero-metric-ribbon {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: rgba(15, 23, 42, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 16px;
  padding: 1.25rem 2rem;
  margin-top: 2.25rem;
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.hero-metric-item {
  display: flex;
  flex-direction: column;
  flex: 1;
  transition: transform 0.25s ease;
}

.hero-metric-item:hover {
  transform: translateY(-2px);
}

.hero-metric-val {
  font-family: var(--font-mono);
  font-size: clamp(1.6rem, 2.4vw, 2.1rem);
  font-weight: 800;
  line-height: 1.15;
  color: #FFFFFF;
}

.hero-metric-val.emerald {
  color: #34D399;
}

.hero-metric-val.orange {
  color: #FB923C;
}

.hero-metric-val.blue {
  color: #60A5FA;
}

.hero-metric-label {
  font-size: 0.8rem;
  font-weight: 700;
  color: #E2E8F0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 0.25rem;
}

.hero-metric-sub {
  font-size: 0.72rem;
  color: #94A3B8;
  margin-top: 0.15rem;
}

.hero-metric-divider {
  width: 1px;
  height: 48px;
  background: linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.2), transparent);
}

@media (max-width: 768px) {
  .hero-metric-ribbon {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
    padding: 1.25rem;
  }
  .hero-metric-divider {
    width: 100%;
    height: 1px;
  }
}

/* 2. SOLAR ORANGE HOVER CONTRAST ENGINE */
.btn-primary-glow:hover,
.tier-btn.orange-btn:hover {
  background: linear-gradient(135deg, #F97316 0%, #EA580C 100%) !important;
  border-color: #F97316 !important;
  color: #FFFFFF !important;
  box-shadow: 0 16px 36px -6px rgba(249, 115, 22, 0.45), 0 0 25px rgba(249, 115, 22, 0.3) !important;
  transform: translateY(-3px);
}

.hero-button-group .btn-primary-glow:hover {
  background: linear-gradient(135deg, #F97316 0%, #EA580C 100%) !important;
  box-shadow: 0 16px 36px -6px rgba(249, 115, 22, 0.45) !important;
}

/* 3. MODERN CSR TIER FRAMEWORK WITH TIER 2 FEATURED */
.modern-csr-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3.5rem;
  align-items: stretch;
}

.modern-tier-card {
  background: #0F172A;
  border: 1.5px solid rgba(255, 255, 255, 0.12);
  border-radius: 20px;
  padding: 2.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 15px 35px -10px rgba(0, 0, 0, 0.4);
}

.modern-tier-card:hover {
  border-color: #F97316 !important;
  box-shadow: 0 22px 45px -10px rgba(249, 115, 22, 0.22), 0 0 20px rgba(249, 115, 22, 0.15) !important;
  transform: translateY(-6px);
}

/* Featured Tier 2 Styling */
.modern-tier-card.featured-csr-tier {
  background: linear-gradient(165deg, #131E33 0%, #0F172A 100%);
  border: 2px solid #F97316 !important;
  box-shadow: 0 25px 60px -15px rgba(249, 115, 22, 0.25), 0 0 35px rgba(249, 115, 22, 0.12);
  transform: scale(1.03);
  z-index: 2;
}

.modern-tier-card.featured-csr-tier:hover {
  box-shadow: 0 30px 70px -15px rgba(249, 115, 22, 0.35), 0 0 45px rgba(249, 115, 22, 0.25) !important;
  transform: scale(1.03) translateY(-6px);
}

.featured-tier-ribbon {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #F97316 0%, #EA580C 100%);
  color: #FFFFFF;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.35rem 1.15rem;
  border-radius: 999px;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  white-space: nowrap;
  box-shadow: 0 4px 15px rgba(249, 115, 22, 0.4);
}

.featured-tier-ribbon .star-icon {
  color: #FEF08A;
}

.tier-badge-chip {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 0.3rem 0.75rem;
  border-radius: 6px;
  background: rgba(37, 99, 235, 0.16);
  color: #93C5FD;
  border: 1px solid rgba(96, 165, 250, 0.3);
  margin-bottom: 1rem;
}

.tier-badge-chip.orange-chip {
  background: rgba(249, 115, 22, 0.18);
  color: #FDBA74;
  border-color: rgba(249, 115, 22, 0.4);
}

.csr-price.orange-price {
  color: #FB923C !important;
}

.tier-deliverables-title {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #94A3B8;
  margin: 1.5rem 0 0.85rem;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.12);
  padding-bottom: 0.4rem;
}

.tier-bullets li {
  margin-bottom: 0.85rem;
  font-size: 0.88rem;
  line-height: 1.55;
  color: #CBD5E1;
}

.tier-bullets .bullet-marker {
  color: #38BDF8;
  font-weight: 800;
}

.tier-bullets .bullet-marker.orange-marker {
  color: #F97316;
}

.tier-card-footer {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.tier-btn {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0.85rem 1.25rem;
  border-radius: 10px;
}

@media (max-width: 1024px) {
  .modern-csr-grid {
    grid-template-columns: 1fr;
    max-width: 560px;
    margin-left: auto;
    margin-right: auto;
  }
  .modern-tier-card.featured-csr-tier {
    transform: none;
  }
  .modern-tier-card.featured-csr-tier:hover {
    transform: translateY(-6px);
  }
}

/* 4. CALCULATOR 80G GUARANTEE PILL & RANGE SLIDER POLISH */
.tax-benefit-guarantee-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid rgba(52, 211, 153, 0.35);
  color: #34D399;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  padding: 0.4rem 1rem;
  border-radius: 999px;
  margin-bottom: 1.25rem;
}

.tax-benefit-guarantee-pill .pill-pulse-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #34D399;
  box-shadow: 0 0 10px #34D399;
  animation: pulseEmerald 2s infinite;
}

@keyframes pulseEmerald {
  0% { transform: scale(0.95); opacity: 0.8; }
  50% { transform: scale(1.3); opacity: 1; }
  100% { transform: scale(0.95); opacity: 0.8; }
}

.calculator-card-wrapper {
  transition: all 0.35s ease;
}

.calculator-card-wrapper:hover {
  border-color: #F97316 !important;
  box-shadow: 0 25px 60px -15px rgba(249, 115, 22, 0.22), 0 0 35px rgba(249, 115, 22, 0.1) !important;
}

.calc-preset-btn.active {
  background: rgba(249, 115, 22, 0.16) !important;
  border-color: #F97316 !important;
  color: #FB923C !important;
  font-weight: 700;
}

.calc-range-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #FFFFFF;
  border: 4px solid #F97316;
  cursor: pointer;
  box-shadow: 0 0 15px rgba(249, 115, 22, 0.85);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.calc-range-slider::-webkit-slider-thumb:hover {
  transform: scale(1.18);
  box-shadow: 0 0 22px rgba(249, 115, 22, 1);
}

/* 5. THALI EXPLORER LOOP INDICATOR PROGRESS */
.thali-nav-btn {
  position: relative;
  overflow: hidden;
}

.thali-nav-btn.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  width: 100%;
  background: linear-gradient(90deg, #F97316, #FB923C);
  border-radius: 999px;
  animation: thaliProgress 1.2s linear infinite;
}

@keyframes thaliProgress {
  0% { transform: scaleX(0); transform-origin: left; }
  100% { transform: scaleX(1); transform-origin: left; }
}

/* 6. FAQ ACCORDION ORANGE ACCENTS */
.faq-card-item {
  border-left: 3px solid transparent;
  transition: all 0.3s ease;
}

.faq-card-item:hover,
.faq-card-item.active {
  border-left-color: #F97316 !important;
  border-color: rgba(249, 115, 22, 0.4);
}

.faq-card-item.active .faq-trigger-btn span:first-child {
  color: #F97316 !important;
}

/* 7. PASSBOOK BANK TERMINAL HOVER */
.passbook-terminal-card {
  transition: all 0.35s ease;
}

.passbook-terminal-card:hover {
  border-color: #F97316 !important;
  box-shadow: 0 20px 45px -10px rgba(249, 115, 22, 0.2) !important;
}

.btn-copy-chip:hover {
  background: #F97316 !important;
  border-color: #F97316 !important;
  color: #FFFFFF !important;
  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.4) !important;
}

/* 8. NUMBERED CRISIS BULLETS ORANGE HOVER */
.numbered-bullet-item:hover .bullet-number-node {
  background: #F97316 !important;
  border-color: #F97316 !important;
  color: #FFFFFF !important;
  box-shadow: 0 0 18px rgba(249, 115, 22, 0.5) !important;
}

.numbered-bullet-item:hover {
  border-left-color: #F97316 !important;
}
`;

fs.appendFileSync('css/style.css', modernCss, 'utf8');
console.log('✓ Successfully appended Page 1 modernization & Solar Orange hover styles to css/style.css');
