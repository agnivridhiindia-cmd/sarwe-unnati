const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '../css/style.css');
let styleCss = fs.readFileSync(cssPath, 'utf8');

const pillarCss = `
/* =========================================================================
   INTERACTIVE 5-PILLAR OPERATING ARCHITECTURE & BLUEPRINT ENGINE
   ========================================================================= */

.operating-header-block {
  text-align: center;
  max-width: 820px;
  margin: 0 auto 3rem auto;
}

/* Horizontal 5-Pillar Pipeline Navigation Strip */
.pillars-pipeline-nav {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
  background: #F8FAFC;
  padding: 0.75rem;
  border: 1.5px solid #E2E8F0;
  border-radius: 20px;
}

.pipeline-nav-btn {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.95rem 1.15rem;
  border-radius: 14px;
  background: transparent;
  border: 1.5px solid transparent;
  cursor: pointer;
  text-align: left;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  outline: none;
}

.pipeline-nav-btn:hover {
  background: #FFFFFF;
  border-color: rgba(249, 115, 22, 0.3);
  transform: translateY(-2px);
}

.pipeline-nav-btn.active {
  background: #FFFFFF;
  border-color: #F97316;
  box-shadow: 0 8px 24px -4px rgba(249, 115, 22, 0.2), 0 2px 6px rgba(0, 0, 0, 0.04);
}

.nav-step-num {
  font-family: var(--font-mono);
  font-size: 0.9rem;
  font-weight: 800;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: #E2E8F0;
  color: #475569;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.25s ease;
}

.pipeline-nav-btn.active .nav-step-num {
  background: #F97316;
  color: #FFFFFF;
  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.35);
}

.nav-btn-text {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.nav-btn-title {
  font-family: var(--font-display);
  font-size: 0.92rem;
  font-weight: 800;
  color: #0F172A;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.nav-btn-sub {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: #64748B;
  font-weight: 600;
  white-space: nowrap;
}

.pipeline-nav-btn.active .nav-btn-sub {
  color: #EA580C;
}

/* Unified Pillar Showcase Stage (Panels) */
.pillars-stage-wrapper {
  background: #FFFFFF;
  border: 1.5px solid #E2E8F0;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 45px -10px rgba(15, 23, 42, 0.07);
}

.pillar-panel-view {
  display: none;
  opacity: 0;
  transition: opacity 0.35s ease;
}

.pillar-panel-view.active {
  display: block;
  opacity: 1;
  animation: pillarFadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes pillarFadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.pillar-showcase-grid {
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  min-height: 540px;
}

.pillar-left-content {
  padding: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.pillar-eyebrow-row {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  flex-wrap: wrap;
  margin-bottom: 1.25rem;
}

.pillar-phase-pill {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 800;
  background: rgba(15, 23, 42, 0.06);
  color: #0F172A;
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  letter-spacing: 0.06em;
}

.pillar-status-tag {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.pillar-status-tag.tag-green {
  background: rgba(16, 185, 129, 0.12);
  color: #047857;
  border: 1px solid rgba(16, 185, 129, 0.25);
}

.pillar-status-tag.tag-blue {
  background: rgba(37, 99, 235, 0.1);
  color: #1D4ED8;
  border: 1px solid rgba(37, 99, 235, 0.25);
}

.pillar-status-tag.tag-orange {
  background: rgba(249, 115, 22, 0.12);
  color: #C2410C;
  border: 1px solid rgba(249, 115, 22, 0.25);
}

.pillar-status-tag.tag-purple {
  background: rgba(139, 92, 246, 0.12);
  color: #6D28D9;
  border: 1px solid rgba(139, 92, 246, 0.25);
}

.pillar-status-tag.tag-emerald {
  background: rgba(5, 150, 105, 0.12);
  color: #065F46;
  border: 1px solid rgba(5, 150, 105, 0.25);
}

.pillar-headline {
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 2.4vw, 2.1rem);
  font-weight: 800;
  color: #0F172A;
  line-height: 1.25;
  margin-bottom: 1rem;
}

.pillar-narrative {
  font-size: 1.02rem;
  line-height: 1.7;
  color: #475569;
  margin-bottom: 2rem;
}

/* Pillar Bulleted Execution Checklist */
.pillar-bullets-group {
  margin-bottom: 2.25rem;
  padding-top: 1.5rem;
  border-top: 1px solid #E2E8F0;
}

.pillar-bullets-title {
  font-family: var(--font-display);
  font-size: 0.92rem;
  font-weight: 800;
  color: #0F172A;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 1.15rem;
}

.pillar-execution-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.95rem;
}

.pillar-execution-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
  font-size: 0.94rem;
  line-height: 1.55;
  color: #334155;
}

.pillar-execution-list li strong {
  color: #0F172A;
}

.bullet-accent {
  color: #F97316;
  font-size: 1.1rem;
  line-height: 1.35;
  flex-shrink: 0;
  font-weight: 800;
}

/* Pillar Actions & Stepper Controls */
.pillar-actions-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
  padding-top: 1.75rem;
  border-top: 1px solid #E2E8F0;
}

.pillar-controls {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.pillar-arrow-btn {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #F1F5F9;
  border: 1px solid #CBD5E1;
  color: #0F172A;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.pillar-arrow-btn:hover {
  background: #F97316;
  color: #FFFFFF;
  border-color: #F97316;
  transform: scale(1.08);
}

.pillar-counter-indicator {
  font-family: var(--font-mono);
  font-size: 0.82rem;
  font-weight: 700;
  color: #64748B;
  min-width: 52px;
  text-align: center;
}

/* Right Visual Area with Ground Photo & Floating Telemetry Overlay */
.pillar-right-visual {
  position: relative;
  background: #0F172A;
  min-height: 420px;
}

.pillar-photo-container {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.pillar-visual-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.pillar-showcase-grid:hover .pillar-visual-img {
  transform: scale(1.03);
}

.pillar-photo-container::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.15) 0%, rgba(15, 23, 42, 0.75) 100%);
  pointer-events: none;
}

.pillar-telemetry-overlay {
  position: absolute;
  bottom: 1.75rem;
  left: 1.75rem;
  right: 1.75rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.85rem;
  z-index: 2;
}

.telemetry-chip {
  background: rgba(15, 23, 42, 0.82);
  border: 1px solid rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(12px);
  padding: 0.75rem 1rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
}

.chip-label {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  font-weight: 700;
  color: #94A3B8;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.chip-value {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 800;
  color: #FFFFFF;
  margin-top: 0.15rem;
}

.chip-value.highlight-green {
  color: #34D399;
}

.chip-value.highlight-blue {
  color: #60A5FA;
}

.chip-value.highlight-orange {
  color: #FB923C;
}

.chip-value.highlight-purple {
  color: #C084FC;
}

.chip-value.highlight-emerald {
  color: #10B981;
}

/* Bottom Supply Chain Ribbon */
.supply-chain-ribbon {
  margin-top: 2.5rem;
  padding: 1.5rem 2rem;
  background: #F8FAFC;
  border: 1.5px solid #E2E8F0;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.ribbon-title-tag {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 800;
  color: #F97316;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.ribbon-steps-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.ribbon-step {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.ribbon-step .r-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #F97316;
  box-shadow: 0 0 8px rgba(249, 115, 22, 0.6);
}

.ribbon-step .r-txt {
  font-family: var(--font-display);
  font-size: 0.88rem;
  font-weight: 700;
  color: #0F172A;
}

.ribbon-arrow {
  color: #94A3B8;
  font-weight: 800;
  font-size: 1.1rem;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .pillars-pipeline-nav {
    grid-template-columns: repeat(3, 1fr);
  }
  .pillar-showcase-grid {
    grid-template-columns: 1fr;
  }
  .pillar-right-visual {
    min-height: 340px;
  }
}

@media (max-width: 640px) {
  .pillars-pipeline-nav {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
  .pillar-left-content {
    padding: 2rem 1.5rem;
  }
  .pillar-telemetry-overlay {
    grid-template-columns: 1fr;
    left: 1rem;
    right: 1rem;
    bottom: 1rem;
  }
  .ribbon-steps-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
  .ribbon-arrow {
    display: none;
  }
}
`;

fs.writeFileSync(cssPath, styleCss + '\n' + pillarCss, 'utf8');
console.log('Successfully appended pillarCss to style.css');
