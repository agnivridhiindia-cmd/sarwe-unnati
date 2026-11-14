const fs = require('fs');

const phase5Css = `
/* ==========================================================================
   PHASE 5: IMPACT TELEMETRY & PROGRAMS OPERATING ARCHITECTURE
   ========================================================================== */

/* 1. SECTION HERO & PAGE BANNERS */
.page-hero-banner {
  min-height: 68vh;
  padding-top: 130px;
  padding-bottom: 4.5rem;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: radial-gradient(circle at 50% 12%, rgba(180, 83, 9, 0.22) 0%, rgba(28, 25, 23, 0.98) 72%), #1C1917;
  color: #FFFFFF;
}

.page-hero-grid-pattern {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 52px 52px;
  pointer-events: none;
  opacity: 0.65;
}

.page-hero-ambient-glow {
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  width: 700px;
  height: 380px;
  background: radial-gradient(ellipse at center, rgba(234, 88, 12, 0.28) 0%, rgba(180, 83, 9, 0.12) 50%, transparent 75%);
  filter: blur(60px);
  pointer-events: none;
  z-index: 1;
}

/* 2. UNIT ECONOMICS & METRIC TILES */
.unit-economics-card {
  background: #1C1917;
  border: 1.5px solid rgba(255, 255, 255, 0.12);
  border-radius: 20px;
  padding: 2.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 16px 36px -10px rgba(0, 0, 0, 0.5);
}

.unit-economics-card:hover {
  transform: translateY(-5px);
  border-color: rgba(245, 158, 11, 0.45);
  box-shadow: 0 22px 50px -10px rgba(180, 83, 9, 0.25);
}

.unit-economics-card.highlight {
  background: linear-gradient(145deg, #1C1917 0%, #292524 60%, #332F2C 100%);
  border: 2px solid #EA580C;
  box-shadow: 0 20px 50px -10px rgba(234, 88, 12, 0.3);
}

.unit-card-tag {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.3rem 0.75rem;
  border-radius: 6px;
  display: inline-block;
  margin-bottom: 0.75rem;
}

.unit-card-tag.saffron {
  background: rgba(180, 83, 9, 0.25);
  color: #FDBA74;
  border: 1px solid rgba(245, 158, 11, 0.35);
}

.unit-card-tag.emerald {
  background: rgba(22, 163, 74, 0.2);
  color: #86EFAC;
  border: 1px solid rgba(34, 197, 94, 0.35);
}

.unit-card-tag.amber {
  background: rgba(217, 119, 6, 0.2);
  color: #FDE68A;
  border: 1px solid rgba(245, 158, 11, 0.35);
}

.unit-cost-val {
  font-family: var(--font-mono);
  font-size: clamp(2.4rem, 3.5vw, 3.2rem);
  font-weight: 800;
  line-height: 1.1;
  color: #FFFFFF;
  margin-bottom: 0.6rem;
}

/* 3. FUNDING MIX CARDS */
.funding-stream-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 1.25rem;
  margin-top: 2rem;
}

.funding-stream-card {
  background: #24201D;
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 16px;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.25s ease;
}

.funding-stream-card:hover {
  transform: translateY(-3px);
  border-color: rgba(255, 255, 255, 0.2);
  background: #2A2623;
}

.funding-stream-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 4px;
}

.funding-stream-card.csr::before { background: #EA580C; }
.funding-stream-card.individual::before { background: #16A34A; }
.funding-stream-card.grants::before { background: #B45309; }
.funding-stream-card.govt::before { background: #D97706; }
.funding-stream-card.community::before { background: #8B5CF6; }

/* 4. BUDGET MATRIX & AUDIT TABLE ENHANCEMENTS */
.modern-budget-card {
  background: #1C1917;
  border: 1.5px solid rgba(255, 255, 255, 0.12);
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.6);
  margin-top: 3.5rem;
}

.modern-budget-tabs {
  display: flex;
  gap: 0.65rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.budget-tab-pill {
  background: #292524;
  border: 1.5px solid rgba(255, 255, 255, 0.1);
  color: #D6D3D1;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 700;
  padding: 0.55rem 1.15rem;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.budget-tab-pill:hover {
  border-color: #EA580C;
  color: #FFFFFF;
}

.budget-tab-pill.active {
  background: linear-gradient(135deg, #B45309 0%, #EA580C 100%);
  border-color: #EA580C;
  color: #FFFFFF;
  box-shadow: 0 4px 15px rgba(234, 88, 12, 0.35);
}

.budget-table-responsive {
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.modern-budget-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  text-align: left;
}

.modern-budget-table th {
  background: #24201D;
  color: #A8A29E;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 1rem 1.25rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.12);
}

.modern-budget-table th:first-child { border-top-left-radius: 12px; }
.modern-budget-table th:last-child { border-top-right-radius: 12px; }

.modern-budget-table td {
  padding: 1.25rem 1.25rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 0.92rem;
  color: #E7E5E4;
  vertical-align: middle;
}

.modern-budget-table tr:hover td {
  background: rgba(255, 255, 255, 0.02);
}

.modern-budget-table .total-row td {
  background: #292524;
  border-top: 2px solid rgba(245, 158, 11, 0.5);
  border-bottom: none;
  font-weight: 700;
  color: #FFFFFF;
}

.modern-budget-table .amount-num {
  font-family: var(--font-mono);
  font-weight: 800;
  font-size: 1.05rem;
  color: #FFFFFF;
}

.modern-budget-table .total-row .amount-num {
  color: #4ADE80;
  font-size: 1.25rem;
}

.budget-bar-track {
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 999px;
  overflow: hidden;
  margin-top: 0.35rem;
}

.budget-bar-fill {
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, #B45309 0%, #EA580C 100%);
}

/* 5. 6-POINT RISK & CONTINGENCY CARDS */
.risk-matrix-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.75rem;
  margin-top: 3.5rem;
}

.risk-protocol-card {
  background: #1C1917;
  border: 1px solid rgba(255, 255, 255, 0.11);
  border-radius: 18px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease;
  position: relative;
}

.risk-protocol-card:hover {
  transform: translateY(-4px);
  border-color: rgba(234, 88, 12, 0.4);
  box-shadow: 0 16px 36px -10px rgba(0, 0, 0, 0.5);
}

.risk-badge-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.risk-level-tag {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  padding: 0.25rem 0.65rem;
  border-radius: 6px;
  text-transform: uppercase;
}

.risk-level-tag.red {
  background: rgba(239, 68, 68, 0.16);
  color: #FCA5A5;
  border: 1px solid rgba(239, 68, 68, 0.3);
}

.risk-level-tag.amber {
  background: rgba(245, 158, 11, 0.16);
  color: #FDE68A;
  border: 1px solid rgba(245, 158, 11, 0.3);
}

.risk-mitigation-box {
  margin-top: 1.25rem;
  padding: 1rem 1.15rem;
  background: #24201D;
  border-left: 3px solid #16A34A;
  border-radius: 0 10px 10px 0;
  font-size: 0.88rem;
  line-height: 1.6;
  color: #D6D3D1;
}

.risk-mitigation-box strong {
  color: #4ADE80;
  display: block;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  text-transform: uppercase;
  margin-bottom: 0.25rem;
}

/* 6. PROGRAMS BENEFICIARY BENTO */
.beneficiary-bento {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 3.5rem;
}

.beneficiary-card {
  background: #FFFFFF;
  border: 1.5px solid var(--border-subtle);
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s var(--ease-spring);
  position: relative;
  box-shadow: var(--shadow-sm);
}

.beneficiary-card:hover {
  transform: translateY(-5px);
  border-color: rgba(180, 83, 9, 0.35);
  box-shadow: 0 16px 36px -6px rgba(180, 83, 9, 0.12);
}

.beneficiary-card.span-2 {
  grid-column: span 2;
  background: linear-gradient(135deg, #1C1917 0%, #292524 60%, #332F2C 100%);
  color: #FFFFFF;
  border: 1.5px solid rgba(255, 255, 255, 0.14);
}

.beneficiary-card.span-2 .beneficiary-title {
  color: #FFFFFF;
}

.beneficiary-card.span-2 .beneficiary-desc {
  color: #D6D3D1;
}

.beneficiary-card.span-2:hover {
  border-color: rgba(245, 158, 11, 0.45);
  box-shadow: 0 20px 45px -10px rgba(180, 83, 9, 0.25);
}

.beneficiary-index {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 800;
  color: #92400E;
  background: #FEF3C7;
  border: 1px solid #FDE68A;
  padding: 0.25rem 0.65rem;
  border-radius: 6px;
  display: inline-block;
  margin-bottom: 1rem;
}

.beneficiary-card.span-2 .beneficiary-index {
  color: #FDE68A;
  background: rgba(180, 83, 9, 0.3);
  border-color: rgba(245, 158, 11, 0.45);
}

.beneficiary-title {
  font-family: var(--font-heading);
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--text-heading);
  margin-bottom: 0.6rem;
}

.beneficiary-desc {
  font-size: 0.92rem;
  line-height: 1.65;
  color: var(--text-muted);
}

@media (max-width: 900px) {
  .beneficiary-bento {
    grid-template-columns: 1fr;
  }
  .beneficiary-card.span-2 {
    grid-column: span 1;
  }
}

/* 7. PROGRAMS 3-PHASE PIPELINE ROADMAP */
.pipeline-roadmap-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.75rem;
  margin-top: 3.5rem;
}

.pipeline-card {
  background: #FFFFFF;
  border: 1.5px solid var(--border-subtle);
  border-radius: 20px;
  padding: 2.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease;
  position: relative;
  box-shadow: var(--shadow-sm);
}

.pipeline-card:hover {
  transform: translateY(-5px);
  border-color: #EA580C;
  box-shadow: 0 16px 36px -6px rgba(234, 88, 12, 0.15);
}

.pipeline-phase-pill {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #B45309;
  background: #FEF3C7;
  border: 1px solid #FDE68A;
  padding: 0.3rem 0.75rem;
  border-radius: 6px;
  display: inline-block;
  margin-bottom: 1.25rem;
}

.pipeline-title {
  font-family: var(--font-heading);
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--text-heading);
  margin-bottom: 0.75rem;
}

.pipeline-desc {
  font-size: 0.92rem;
  line-height: 1.65;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}

.pipeline-metrics-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  border-top: 1px dashed var(--border-subtle);
  padding-top: 1.25rem;
}

.pipeline-metrics-list li {
  font-size: 0.85rem;
  color: var(--text-body);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.pipeline-metrics-list li strong {
  font-family: var(--font-mono);
  color: #B45309;
}

@media (max-width: 900px) {
  .pipeline-roadmap-grid {
    grid-template-columns: 1fr;
  }
}
`;

fs.appendFileSync('css/style.css', phase5Css, 'utf8');
console.log('Successfully appended Phase 5 CSS rules to css/style.css');
