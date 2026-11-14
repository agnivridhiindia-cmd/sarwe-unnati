const fs = require('fs');

const csrFixCss = `
/* ==========================================================================
   CSR PARTNERSHIP TIERS — HIGH CONTRAST & SOLAR ORANGE ELEVATION
   ========================================================================== */
.section-csr-tiers {
  background: #090D16 !important;
  padding: 6rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;
  z-index: 5;
}

.section-csr-tiers .section-title {
  color: #FFFFFF !important;
  font-family: var(--font-display);
  font-size: clamp(2rem, 3.6vw, 2.85rem);
  font-weight: 800;
  margin-top: 0.75rem;
}

.section-csr-tiers .section-desc {
  color: #94A3B8 !important;
  font-size: 1.05rem;
  line-height: 1.7;
}

.modern-tier-card {
  background: #0F172A !important;
  border: 1.5px solid rgba(255, 255, 255, 0.14) !important;
  border-radius: 20px;
  padding: 2.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.6);
}

.modern-tier-card:hover {
  border-color: #F97316 !important;
  box-shadow: 0 25px 60px -10px rgba(249, 115, 22, 0.28), 0 0 25px rgba(249, 115, 22, 0.15) !important;
  transform: translateY(-6px);
}

.modern-tier-card .csr-title {
  color: #FFFFFF !important;
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 800;
  margin-top: 0.5rem;
}

.modern-tier-card .csr-price {
  font-family: var(--font-mono);
  font-size: 1.85rem;
  font-weight: 800;
  color: #60A5FA !important;
  margin: 0.75rem 0;
  white-space: nowrap;
}

.modern-tier-card .csr-price.orange-price {
  color: #FB923C !important;
}

.modern-tier-card .price-cadence {
  font-size: 0.95rem;
  font-weight: 500;
  color: #94A3B8;
}

.modern-tier-card .csr-desc {
  color: #94A3B8 !important;
  font-size: 0.92rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.modern-tier-card .tier-deliverables-title {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #64748B !important;
  margin: 1.5rem 0 1rem;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.12);
  padding-bottom: 0.5rem;
}

.modern-tier-card .tier-bullets li {
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  font-size: 0.88rem;
  line-height: 1.55;
  color: #CBD5E1 !important;
  margin-bottom: 0.85rem;
}

.modern-tier-card .tier-bullets li strong {
  color: #FFFFFF !important;
}

.modern-tier-card .btn-secondary-outline.tier-btn {
  background: rgba(255, 255, 255, 0.06) !important;
  border: 1.5px solid rgba(255, 255, 255, 0.22) !important;
  color: #FFFFFF !important;
  font-weight: 600;
  transition: all 0.25s ease;
}

.modern-tier-card .btn-secondary-outline.tier-btn:hover {
  background: #F97316 !important;
  border-color: #F97316 !important;
  color: #FFFFFF !important;
  box-shadow: 0 10px 25px -5px rgba(249, 115, 22, 0.45) !important;
  transform: translateY(-2px);
}

.modern-tier-card.featured-csr-tier {
  background: linear-gradient(165deg, #131E33 0%, #0F172A 100%) !important;
  border: 2px solid #F97316 !important;
  box-shadow: 0 25px 65px -15px rgba(249, 115, 22, 0.3), 0 0 35px rgba(249, 115, 22, 0.12) !important;
  transform: scale(1.03);
  z-index: 2;
}

.modern-tier-card.featured-csr-tier:hover {
  box-shadow: 0 35px 80px -15px rgba(249, 115, 22, 0.45), 0 0 45px rgba(249, 115, 22, 0.25) !important;
  transform: scale(1.03) translateY(-6px);
}
`;

fs.appendFileSync('css/style.css', csrFixCss, 'utf8');
console.log('✓ Successfully appended CSR high-contrast styles to css/style.css');
