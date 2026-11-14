const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '../css/style.css');
let css = fs.readFileSync(cssPath, 'utf8');

// Replacement Card Styles CSS
const modernCardStyles = `
/* ==========================================================================
   HOMEPAGE CARD UI & STYLING OVERHAUL (MODERN LUXURY SYSTEM)
   ========================================================================== */

/* 1. BENTO OPERATING CARDS */
.components-bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3.5rem;
}

.bento-card {
  background: #FFFFFF;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.04), 0 12px 32px -8px rgba(15, 23, 42, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.9);
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
}

.bento-card:hover {
  transform: translateY(-7px);
  border-color: rgba(37, 99, 235, 0.35);
  box-shadow: 0 20px 45px -10px rgba(37, 99, 235, 0.14), 0 4px 12px rgba(15, 23, 42, 0.04);
}

.bento-card.featured-card {
  grid-column: span 2;
  background: linear-gradient(145deg, #0B1120 0%, #151F33 100%) !important;
  color: #FFFFFF;
  border: 1.5px solid rgba(59, 130, 246, 0.4) !important;
  box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.5), 0 0 30px rgba(37, 99, 235, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.bento-card.featured-card:hover {
  transform: translateY(-7px);
  border-color: rgba(96, 165, 250, 0.7) !important;
  box-shadow: 0 30px 70px -15px rgba(0, 0, 0, 0.6), 0 0 45px rgba(37, 99, 235, 0.3);
}

.bento-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.bento-num {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 800;
  color: #2563EB;
  background: rgba(37, 99, 235, 0.08);
  border: 1px solid rgba(37, 99, 235, 0.2);
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  letter-spacing: 0.04em;
}

.bento-card.featured-card .bento-num {
  color: #34D399;
  background: rgba(52, 211, 153, 0.15);
  border-color: rgba(52, 211, 153, 0.35);
}

.bento-title {
  font-family: var(--font-display);
  font-size: 1.45rem;
  font-weight: 800;
  color: #0F172A;
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.bento-card.featured-card .bento-title {
  color: #FFFFFF;
}

.bento-desc {
  font-size: 0.95rem;
  color: #64748B;
  line-height: 1.65;
  margin-bottom: 1.5rem;
}

.bento-card.featured-card .bento-desc {
  color: #CBD5E1;
}

.bento-points-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  font-size: 0.9rem;
  color: #334155;
  margin-top: auto;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(226, 232, 240, 0.8);
}

.bento-card.featured-card .bento-points-list {
  color: #E2E8F0;
  border-top-color: rgba(255, 255, 255, 0.12);
}

.bento-points-list li {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.bento-points-list li span {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: rgba(16, 185, 129, 0.12);
  color: #059669;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.72rem;
  font-weight: 800;
  border: 1px solid rgba(16, 185, 129, 0.3);
  flex-shrink: 0;
}

.bento-card.featured-card .bento-points-list li span {
  background: rgba(52, 211, 153, 0.2);
  color: #34D399;
  border-color: rgba(52, 211, 153, 0.4);
}

/* 2. CSR TIER CARDS */
.csr-tier-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.25rem;
  margin-top: 3.5rem;
}

.csr-card {
  background: #FFFFFF;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 26px;
  padding: 2.75rem;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.04), 0 16px 36px -10px rgba(15, 23, 42, 0.07), inset 0 1px 0 rgba(255, 255, 255, 0.95);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
}

.csr-card:hover {
  transform: translateY(-8px);
  border-color: rgba(37, 99, 235, 0.35);
  box-shadow: 0 25px 55px -12px rgba(37, 99, 235, 0.16);
}

.csr-card.featured-tier {
  background: linear-gradient(145deg, #0B1120 0%, #151F33 100%) !important;
  color: #FFFFFF;
  border: 1.5px solid rgba(59, 130, 246, 0.5) !important;
  box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.5), 0 0 35px rgba(37, 99, 235, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.csr-card.featured-tier:hover {
  transform: translateY(-8px);
  border-color: rgba(96, 165, 250, 0.75) !important;
  box-shadow: 0 32px 75px -15px rgba(0, 0, 0, 0.65), 0 0 50px rgba(37, 99, 235, 0.35);
}

.tier-badge {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 800;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  width: fit-content;
  margin-bottom: 1.25rem;
  letter-spacing: 0.05em;
  background: rgba(37, 99, 235, 0.08);
  color: #2563EB;
  border: 1px solid rgba(37, 99, 235, 0.2);
}

.csr-card.featured-tier .tier-badge {
  background: rgba(52, 211, 153, 0.15);
  color: #34D399;
  border-color: rgba(52, 211, 153, 0.4);
}

.csr-title {
  font-family: var(--font-display);
  font-size: 1.55rem;
  font-weight: 800;
  color: #0F172A;
}

.csr-card.featured-tier .csr-title {
  color: #FFFFFF;
}

.csr-price {
  font-family: var(--font-mono);
  font-size: 2.35rem;
  font-weight: 800;
  color: #2563EB;
  margin: 0.75rem 0 1.25rem;
  display: flex;
  align-items: baseline;
  gap: 0.35rem;
}

.csr-card.featured-tier .csr-price {
  color: #34D399;
}

.csr-desc {
  font-size: 0.94rem;
  color: #64748B;
  line-height: 1.65;
  margin-bottom: 1.75rem;
}

.csr-card.featured-tier .csr-desc {
  color: #CBD5E1;
}

.csr-perks-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  font-size: 0.9rem;
  color: #334155;
  margin-bottom: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(226, 232, 240, 0.8);
}

.csr-card.featured-tier .csr-perks-list {
  color: #E2E8F0;
  border-top-color: rgba(255, 255, 255, 0.12);
}

.csr-perks-list li {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.csr-perks-list li span {
  color: #10B981;
  font-weight: 800;
}

/* 3. GROUND REALITY CHALLENGE TILES */
.challenge-row-card {
  display: flex;
  align-items: flex-start;
  gap: 1.35rem;
  padding: 1.35rem 1.65rem;
  background: #FFFFFF;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 18px;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.03), 0 8px 24px -6px rgba(15, 23, 42, 0.05);
  transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
}

.challenge-row-card:hover {
  transform: translateX(8px);
  border-color: rgba(239, 68, 68, 0.3);
  box-shadow: 0 12px 30px -8px rgba(239, 68, 68, 0.12);
}

.challenge-idx {
  font-family: var(--font-mono);
  font-weight: 800;
  font-size: 0.85rem;
  color: #DC2626;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.25);
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.challenge-title {
  font-family: var(--font-display);
  font-size: 1.08rem;
  font-weight: 700;
  color: #0F172A;
}

.challenge-desc {
  font-size: 0.92rem;
  color: #64748B;
  margin-top: 0.25rem;
  line-height: 1.6;
}

/* 4. CHARTER DOSSIER & FINTECH PARTICULARS TILES */
.charter-dossier-card {
  background: #FFFFFF;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 28px;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.04), 0 20px 48px -12px rgba(15, 23, 42, 0.08);
  overflow: hidden;
}

.particular-item {
  background: #F8FAFC;
  border: 1px solid #E2E8F0;
  border-radius: 14px;
  padding: 1.1rem 1.35rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  transition: all 0.25s ease;
}

.particular-item:hover {
  transform: translateY(-3px);
  background: #FFFFFF;
  border-color: #93C5FD;
  box-shadow: 0 8px 20px -6px rgba(37, 99, 235, 0.12);
}

.particular-label {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 700;
  color: #64748B;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.particular-value {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
  color: #0F172A;
}

.particular-value.highlight-green {
  color: #059669;
}

.particular-value.highlight-blue {
  color: #2563EB;
}

/* 5. 5-PHASE ROADMAP MILESTONE CARDS */
.roadmap-timeline-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
  margin-top: 3.5rem;
}

.roadmap-step-card {
  background: #FFFFFF;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 22px;
  padding: 2rem 1.65rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.04), 0 10px 28px -8px rgba(15, 23, 42, 0.06);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
}

.roadmap-step-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 20%;
  right: 20%;
  height: 3px;
  background: linear-gradient(90deg, #2563EB, #10B981);
  border-radius: 999px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.roadmap-step-card:hover {
  transform: translateY(-6px);
  border-color: rgba(37, 99, 235, 0.35);
  box-shadow: 0 18px 40px -10px rgba(37, 99, 235, 0.14);
}

.roadmap-step-card:hover::before {
  opacity: 1;
}

.roadmap-phase-num {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 800;
  color: #2563EB;
  background: rgba(37, 99, 235, 0.08);
  border: 1px solid rgba(37, 99, 235, 0.2);
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  width: fit-content;
  margin-bottom: 0.85rem;
  letter-spacing: 0.04em;
}

/* 6. FAQ ACCORDION CARDS */
.faq-card-item {
  background: #FFFFFF;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.03), 0 8px 24px -6px rgba(15, 23, 42, 0.05);
  transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
}

.faq-card-item:hover {
  border-color: rgba(37, 99, 235, 0.3);
  box-shadow: 0 14px 32px -8px rgba(37, 99, 235, 0.1);
}

.faq-card-item.active {
  border-color: #2563EB;
  box-shadow: 0 16px 36px -8px rgba(37, 99, 235, 0.16);
}

/* 7. PASSBOOK CYBER TERMINAL CARD */
.passbook-terminal-card {
  background: linear-gradient(145deg, #0B1120 0%, #151F33 100%) !important;
  color: #FFFFFF;
  border-radius: 28px;
  border: 1.5px solid rgba(59, 130, 246, 0.4) !important;
  box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.6), 0 0 35px rgba(37, 99, 235, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15);
  padding: 3rem;
}
`;

// Replace the sections in css/style.css
css += '\n' + modernCardStyles;
fs.writeFileSync(cssPath, css, 'utf8');
console.log('Successfully appended modern card styles to css/style.css!');
