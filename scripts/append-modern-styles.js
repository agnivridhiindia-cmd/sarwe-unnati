const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '..', 'css', 'style.css');
let css = fs.readFileSync(cssPath, 'utf8');

const modernStyles = `
/* ==========================================================================
   FRESH 2026 MODERN NON-PROFIT UI ENHANCEMENTS
   Distribution Radar, Interactive FAQ, Enhanced Meal Presets, Scroll-to-Top
   ========================================================================== */

/* 1. Interactive Distribution Radar & Hubs */
.radar-hub-container {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 3.5rem;
  align-items: center;
  margin-top: 3.5rem;
}

.radar-hubs-nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.hub-radar-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  background: #FFFFFF;
  border: 1.5px solid var(--border-light);
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  text-align: left;
  box-shadow: var(--shadow-sm);
}

.hub-radar-btn:hover {
  transform: translateX(6px);
  border-color: #2563EB;
  box-shadow: 0 10px 25px -5px rgba(37, 99, 235, 0.12);
}

.hub-radar-btn.active {
  background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
  border-color: #0F172A;
  color: #FFFFFF;
  transform: translateX(8px);
  box-shadow: 0 15px 30px -5px rgba(15, 23, 42, 0.25);
}

.hub-radar-btn .hub-btn-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.hub-radar-btn .hub-pin {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #2563EB;
  transition: transform 0.25s ease;
}

.hub-radar-btn.active .hub-pin {
  background: #10B981;
  box-shadow: 0 0 12px #10B981;
  transform: scale(1.3);
}

.hub-radar-btn .hub-title {
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--text-dark);
}

.hub-radar-btn.active .hub-title {
  color: #FFFFFF;
}

.hub-radar-btn .hub-count-tag {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 700;
  color: #2563EB;
  background: #EFF6FF;
  padding: 0.25rem 0.65rem;
  border-radius: 999px;
}

.hub-radar-btn.active .hub-count-tag {
  color: #34D399;
  background: rgba(52, 211, 153, 0.2);
}

.hub-detail-card {
  display: none;
  background: #FFFFFF;
  border: 1.5px solid var(--border-light);
  border-radius: 24px;
  padding: 2.75rem;
  box-shadow: var(--shadow-md);
  position: relative;
  overflow: hidden;
  animation: fadeInHub 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.hub-detail-card.active {
  display: block;
}

@keyframes fadeInHub {
  from { opacity: 0; transform: translateY(12px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

.hub-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid var(--border-light);
}

.hub-badge {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 700;
  color: #047857;
  background: #D1FAE5;
  padding: 0.3rem 0.75rem;
  border-radius: 6px;
}

.hub-stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  margin: 2rem 0;
}

.hub-stat-item {
  background: #F8FAFC;
  padding: 1.25rem;
  border-radius: 14px;
  border: 1px solid #E2E8F0;
}

.hub-stat-val {
  font-family: var(--font-mono);
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--text-dark);
}

.hub-stat-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
  font-family: var(--font-mono);
  margin-top: 0.25rem;
}

/* 2. Interactive FAQ Accordion */
.faq-accordion-wrap {
  max-width: 900px;
  margin: 3.5rem auto 0;
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
}

.faq-accordion-item {
  background: #FFFFFF;
  border: 1.5px solid var(--border-light);
  border-radius: 18px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: var(--shadow-sm);
}

.faq-accordion-item:hover {
  border-color: #2563EB;
}

.faq-accordion-item.active {
  border-color: #2563EB;
  box-shadow: 0 12px 30px -8px rgba(37, 99, 235, 0.15);
}

.faq-question-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-dark);
  gap: 1.5rem;
  transition: color 0.2s ease;
}

.faq-accordion-item.active .faq-question-btn {
  color: #2563EB;
}

.faq-icon-rotator {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #F1F5F9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-dark);
  flex-shrink: 0;
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), background 0.25s ease, color 0.25s ease;
}

.faq-accordion-item.active .faq-icon-rotator {
  transform: rotate(45deg);
  background: #2563EB;
  color: #FFFFFF;
}

.faq-answer-panel {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), padding 0.3s ease;
  padding: 0 2rem;
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.7;
}

.faq-accordion-item.active .faq-answer-panel {
  max-height: 350px;
  padding: 0 2rem 1.75rem 2rem;
}

/* 3. Calculator Preset Pills */
.calc-presets-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin: 1.25rem 0 1.75rem;
  align-items: center;
}

.calc-preset-label {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: #94A3B8;
  text-transform: uppercase;
  margin-right: 0.25rem;
}

.calc-preset-pill {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #E2E8F0;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 600;
  padding: 0.4rem 0.85rem;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.calc-preset-pill:hover {
  background: rgba(255, 255, 255, 0.16);
  border-color: #34D399;
  color: #FFFFFF;
}

.calc-preset-pill.active {
  background: #10B981;
  border-color: #10B981;
  color: #FFFFFF;
  box-shadow: 0 0 14px rgba(16, 185, 129, 0.4);
}

/* 4. Floating Toast Notification */
.toast-notification {
  position: fixed;
  bottom: 24px;
  right: 24px;
  background: #0F172A;
  color: #FFFFFF;
  padding: 0.85rem 1.4rem;
  border-radius: 999px;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: var(--font-sans);
  font-size: 0.88rem;
  font-weight: 600;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
  z-index: 9999;
  transform: translateY(100px) scale(0.9);
  opacity: 0;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  pointer-events: none;
}

.toast-notification.show {
  transform: translateY(0) scale(1);
  opacity: 1;
  pointer-events: auto;
}

.toast-notification .toast-icon {
  width: 20px;
  height: 20px;
  background: #10B981;
  color: #FFFFFF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 800;
}

/* 5. Scroll to Top Floating Button */
.scroll-to-top-btn {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #FFFFFF;
  border: 1.5px solid var(--border-light);
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0F172A;
  cursor: pointer;
  z-index: 4000;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  opacity: 0;
  pointer-events: none;
  transform: scale(0.85);
}

.scroll-to-top-btn.visible {
  opacity: 1;
  pointer-events: auto;
  transform: scale(1);
}

.scroll-to-top-btn:hover {
  transform: scale(1.1) translateY(-3px);
  border-color: #2563EB;
  color: #2563EB;
  box-shadow: 0 12px 30px rgba(37, 99, 235, 0.25);
}

/* 6. Responsive Rules for New Components */
@media (max-width: 992px) {
  .radar-hub-container {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  .hub-stats-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .faq-question-btn {
    padding: 1.25rem 1.25rem;
    font-size: 1rem;
    gap: 1rem;
  }
  .faq-answer-panel {
    padding: 0 1.25rem;
  }
  .faq-accordion-item.active .faq-answer-panel {
    padding: 0 1.25rem 1.25rem 1.25rem;
  }
  .hub-detail-card {
    padding: 1.75rem;
  }
}
`;

if (!css.includes('FRESH 2026 MODERN NON-PROFIT UI ENHANCEMENTS')) {
  css += modernStyles;
  fs.writeFileSync(cssPath, css, 'utf8');
  console.log('Appended fresh modern styles to css/style.css!');
} else {
  console.log('Modern styles already present.');
}
