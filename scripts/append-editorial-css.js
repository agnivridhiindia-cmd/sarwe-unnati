const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '../css/style.css');
let styleCss = fs.readFileSync(cssPath, 'utf8');

const editorialStyles = `
/* =========================================================================
   EDITORIAL, BULLET-POINT & PROCESS STREAM ARCHITECTURE
   (Replacing generic AI card grids with rich editorial layouts)
   ========================================================================= */

/* 1. SECTION 2: CHARTER EDITORIAL DOSSIER & STATUTORY LEDGER */
.charter-editorial-wrapper {
  background: #FFFFFF;
  border: 1.5px solid var(--border-subtle);
  border-radius: 24px;
  padding: 3.5rem;
  box-shadow: 0 10px 30px -10px rgba(15, 23, 42, 0.05);
}

.charter-badges-row {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.mono-stat-tag {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 600;
  background: rgba(15, 23, 42, 0.04);
  border: 1px solid rgba(15, 23, 42, 0.1);
  color: var(--text-heading);
  padding: 0.4rem 0.85rem;
  border-radius: 8px;
}

.mono-stat-tag.tag-green {
  background: rgba(16, 185, 129, 0.1);
  border-color: rgba(16, 185, 129, 0.3);
  color: #059669;
}

.mono-stat-tag.tag-blue {
  background: rgba(37, 99, 235, 0.1);
  border-color: rgba(37, 99, 235, 0.3);
  color: #2563EB;
}

.charter-editorial-grid {
  display: grid;
  grid-template-columns: 1.35fr 1fr;
  gap: 3.5rem;
  margin-top: 2.5rem;
  align-items: start;
}

.editorial-bullets-block {
  margin-top: 2rem;
  padding-top: 1.75rem;
  border-top: 1px solid var(--border-subtle);
}

.bullets-subtitle {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 800;
  color: var(--text-heading);
  margin-bottom: 1.25rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.clean-bullet-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.clean-bullet-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
  font-size: 0.98rem;
  line-height: 1.6;
  color: var(--text-body);
}

.clean-bullet-list li strong {
  color: var(--text-heading);
}

.clean-bullet-list li .bullet-marker {
  color: #F97316;
  font-size: 1.15rem;
  line-height: 1.4;
  flex-shrink: 0;
  font-weight: 800;
}

.statutory-ledger-card {
  background: #F8FAFC;
  border: 1.5px solid #E2E8F0;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
}

.ledger-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.1rem 1.5rem;
  background: #0F172A;
  color: #FFFFFF;
}

.ledger-title {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #93C5FD;
}

.ledger-period {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  background: rgba(249, 115, 22, 0.25);
  color: #FB923C;
  border: 1px solid rgba(249, 115, 22, 0.5);
  padding: 0.2rem 0.55rem;
  border-radius: 6px;
  font-weight: 700;
}

.ledger-table {
  display: flex;
  flex-direction: column;
}

.ledger-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.95rem 1.5rem;
  border-bottom: 1px solid #E2E8F0;
  font-size: 0.92rem;
  transition: background 0.2s ease;
}

.ledger-row:last-child {
  border-bottom: none;
}

.ledger-row:hover {
  background: #FFFFFF;
}

.ledger-row.highlight-row {
  background: #FFF7ED;
}

.ledger-key {
  color: #64748B;
  font-weight: 500;
}

.ledger-val {
  color: #0F172A;
  font-weight: 700;
  text-align: right;
}

.ledger-val.text-orange {
  color: #EA580C;
  font-size: 1.05rem;
}

.ledger-val.text-blue {
  color: #2563EB;
  font-size: 1.05rem;
}

/* 2. SECTION 3: EDITORIAL NUMBERED BULLET LIST */
.editorial-numbered-list {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
}

.numbered-bullet-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 1.4rem 0;
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);
  transition: transform 0.25s ease, border-color 0.25s ease;
}

.numbered-bullet-item:last-child {
  border-bottom: none;
}

.numbered-bullet-item:hover {
  transform: translateX(6px);
}

.num-bullet {
  font-family: var(--font-mono);
  font-size: 1rem;
  font-weight: 800;
  color: #EA580C;
  background: rgba(249, 115, 22, 0.1);
  border: 1px solid rgba(249, 115, 22, 0.25);
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  flex-shrink: 0;
  transition: all 0.25s ease;
}

.numbered-bullet-item:hover .num-bullet {
  background: #F97316;
  color: #FFFFFF;
  border-color: #F97316;
  box-shadow: 0 4px 14px rgba(249, 115, 22, 0.35);
}

.bullet-content {
  flex: 1;
}

.bullet-heading {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-heading);
  margin-bottom: 0.35rem;
  line-height: 1.35;
}

.bullet-text {
  font-size: 0.95rem;
  color: var(--text-body);
  line-height: 1.6;
  margin: 0;
}

/* 3. SECTION 4: ASYMMETRIC OPERATING PROCESS STREAM */
.operating-editorial-grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 4rem;
  align-items: start;
  margin-top: 3.5rem;
}

.operating-sticky-sidebar {
  position: sticky;
  top: 120px;
}

.execution-standards-card {
  margin-top: 2rem;
  padding: 2rem;
  background: #F8FAFC;
  border: 1.5px solid #E2E8F0;
  border-radius: 18px;
}

.standards-title {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #0F172A;
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.standards-title::before {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  background: #10B981;
  border-radius: 50%;
  box-shadow: 0 0 8px #10B981;
}

.standards-bullet-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

.standards-bullet-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.92rem;
  line-height: 1.55;
  color: #334155;
}

.standards-bullet-list li strong {
  color: #0F172A;
}

.standards-bullet-list li span.check-icon {
  background: rgba(16, 185, 129, 0.15);
  color: #059669;
  width: 22px;
  height: 22px;
  border-radius: 6px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 800;
  flex-shrink: 0;
  margin-top: 2px;
}

.operating-process-stream {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.process-stream-item {
  position: relative;
  padding: 2rem 2.25rem;
  background: #FFFFFF;
  border: 1.5px solid #E2E8F0;
  border-radius: 18px;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.process-stream-item:hover {
  border-color: #F97316;
  box-shadow: 0 12px 35px -10px rgba(249, 115, 22, 0.18);
  transform: translateY(-3px);
}

.stream-item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.85rem;
}

.stream-num-badge {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 800;
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  background: rgba(37, 99, 235, 0.08);
  color: #2563EB;
  border: 1px solid rgba(37, 99, 235, 0.2);
  transition: all 0.2s ease;
}

.process-stream-item:hover .stream-num-badge {
  background: rgba(249, 115, 22, 0.12);
  color: #EA580C;
  border-color: rgba(249, 115, 22, 0.3);
}

.stream-tag {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 700;
  color: #64748B;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.stream-item-title {
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--text-heading);
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.stream-item-desc {
  font-size: 0.98rem;
  color: var(--text-body);
  line-height: 1.65;
  margin-bottom: 1.25rem;
}

.stream-nested-bullets {
  list-style: none;
  padding: 1.1rem 0 0;
  margin: 0;
  border-top: 1px solid #E2E8F0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.stream-nested-bullets li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;
  color: #475569;
}

.stream-nested-bullets li span {
  color: #EA580C;
  font-weight: 700;
  font-size: 0.95rem;
}

/* 4. SECTION 6: IMPACT METRICS STRIP & 2-COLUMN BULLETED MATRIX */
.impact-editorial-container {
  margin-top: 3.5rem;
}

.impact-metrics-strip {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 2.75rem 3rem;
  background: linear-gradient(135deg, #0F172A 0%, #162032 100%);
  border: 1.5px solid rgba(59, 130, 246, 0.45);
  border-radius: 20px;
  box-shadow: 0 20px 50px -15px rgba(0, 0, 0, 0.6);
  margin-bottom: 3.5rem;
}

.metric-strip-item {
  display: flex;
  flex-direction: column;
  position: relative;
}

.metric-strip-item:not(:last-child)::after {
  content: '';
  position: absolute;
  right: -1rem;
  top: 15%;
  height: 70%;
  width: 1px;
  background: rgba(255, 255, 255, 0.12);
}

.metric-big-num {
  font-family: var(--font-mono);
  font-size: clamp(2.4rem, 4vw, 3.25rem);
  font-weight: 800;
  line-height: 1.1;
  color: #FFFFFF;
}

.metric-big-num.color-emerald {
  color: #34D399;
}

.metric-big-num.color-orange {
  color: #FB923C;
}

.metric-big-num.color-cyan {
  color: #38BDF8;
}

.metric-strip-title {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
  color: #FFFFFF;
  margin: 0.65rem 0 0.25rem;
}

.metric-strip-desc {
  font-size: 0.88rem;
  color: #94A3B8;
  line-height: 1.5;
  margin: 0;
}

.impact-bullets-split-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.impact-bullet-column-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 20px;
  padding: 2.5rem;
  backdrop-filter: blur(12px);
  transition: border-color 0.3s ease;
}

.impact-bullet-column-card:hover {
  border-color: rgba(249, 115, 22, 0.5);
}

.impact-column-heading {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 800;
  color: #FFFFFF;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.impact-bullet-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.impact-bullet-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.95rem;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #CBD5E1;
}

.impact-bullet-list li strong {
  color: #FFFFFF;
}

.impact-bullet-list li .bullet-icon-box {
  width: 26px;
  height: 26px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 0.85rem;
  font-weight: 800;
  margin-top: 2px;
}

.impact-bullet-list li .bullet-icon-box.green {
  background: rgba(52, 211, 153, 0.18);
  color: #34D399;
  border: 1px solid rgba(52, 211, 153, 0.35);
}

.impact-bullet-list li .bullet-icon-box.orange {
  background: rgba(249, 115, 22, 0.2);
  color: #FB923C;
  border: 1px solid rgba(249, 115, 22, 0.4);
}

/* 5. SECTION 10: LINEAR CONNECTED TIMELINE WITH BULLETS */
.roadmap-linear-timeline {
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
  position: relative;
}

.roadmap-linear-timeline::before {
  content: '';
  position: absolute;
  top: 30px;
  bottom: 30px;
  left: 28px;
  width: 3px;
  background: linear-gradient(180deg, #F97316 0%, #2563EB 50%, #10B981 100%);
  border-radius: 999px;
}

.timeline-milestone-row {
  display: flex;
  align-items: flex-start;
  gap: 2.5rem;
  position: relative;
  padding-bottom: 2.5rem;
}

.timeline-milestone-row:last-child {
  padding-bottom: 0;
}

.timeline-node-pin {
  width: 58px;
  height: 58px;
  border-radius: 16px;
  background: #FFFFFF;
  border: 3px solid #F97316;
  box-shadow: 0 0 0 6px rgba(249, 115, 22, 0.15), 0 8px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-mono);
  font-size: 1.1rem;
  font-weight: 800;
  color: #EA580C;
  flex-shrink: 0;
  z-index: 2;
  transition: all 0.3s ease;
}

.timeline-milestone-row:hover .timeline-node-pin {
  background: #F97316;
  color: #FFFFFF;
  transform: scale(1.12);
  box-shadow: 0 0 0 8px rgba(249, 115, 22, 0.25), 0 10px 25px rgba(249, 115, 22, 0.4);
}

.timeline-milestone-content {
  flex: 1;
  background: #FFFFFF;
  border: 1.5px solid #E2E8F0;
  border-radius: 18px;
  padding: 1.75rem 2.25rem;
  transition: all 0.3s ease;
}

.timeline-milestone-row:hover .timeline-milestone-content {
  border-color: #F97316;
  box-shadow: 0 12px 35px -8px rgba(249, 115, 22, 0.15);
  transform: translateX(4px);
}

.milestone-meta-bar {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.65rem;
}

.milestone-time-badge {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 700;
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  background: rgba(37, 99, 235, 0.08);
  color: #2563EB;
  border: 1px solid rgba(37, 99, 235, 0.2);
  transition: all 0.2s ease;
}

.timeline-milestone-row:hover .milestone-time-badge {
  background: rgba(249, 115, 22, 0.12);
  color: #EA580C;
  border-color: rgba(249, 115, 22, 0.3);
}

.milestone-phase-name {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--text-heading);
  margin: 0;
}

.milestone-bullets-list {
  list-style: none;
  padding: 0;
  margin: 1rem 0 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.milestone-bullets-list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.94rem;
  color: #475569;
}

.milestone-bullets-list li::before {
  content: '•';
  color: #F97316;
  font-size: 1.3rem;
  line-height: 1;
}

/* 6. RESPONSIVE BREAKPOINTS FOR EDITORIAL ARCHITECTURE */
@media (max-width: 991px) {
  .charter-editorial-grid,
  .operating-editorial-grid,
  .impact-bullets-split-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  .operating-sticky-sidebar {
    position: static;
  }
  .impact-metrics-strip {
    grid-template-columns: 1fr;
    padding: 2rem;
    gap: 2.5rem;
  }
  .metric-strip-item:not(:last-child)::after {
    display: none;
  }
  .metric-strip-item:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    padding-bottom: 1.75rem;
  }
  .charter-editorial-wrapper {
    padding: 2rem;
  }
}

@media (max-width: 640px) {
  .timeline-milestone-row {
    gap: 1.25rem;
  }
  .timeline-node-pin {
    width: 44px;
    height: 44px;
    font-size: 0.95rem;
  }
  .roadmap-linear-timeline::before {
    left: 21px;
  }
  .timeline-milestone-content {
    padding: 1.25rem 1.5rem;
  }
  .milestone-meta-bar {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.35rem;
  }
  .process-stream-item {
    padding: 1.5rem;
  }
  .numbered-bullet-item {
    gap: 1rem;
  }
  .num-bullet {
    width: 36px;
    height: 36px;
    font-size: 0.85rem;
  }
}
`;

fs.writeFileSync(cssPath, styleCss + '\n' + editorialStyles, 'utf8');
console.log('Successfully appended editorial styles to style.css');
