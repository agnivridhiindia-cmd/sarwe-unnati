const fs = require('fs');
const path = require('path');

// 1. Remove Section 8 (CAPITAL DEPLOYMENT) from index.html
const indexPath = path.join(__dirname, '../index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf8');

// Find and remove SECTION 8: CAPITAL DEPLOYMENT
const section8StartRegex = /<!-- =+\s+SECTION 8: CAPITAL DEPLOYMENT[\s\S]*?id="budget-allocation"[\s\S]*?<\/section>/;

if (!section8StartRegex.test(indexHtml)) {
  console.error('Could not find section 8 regex match in index.html!');
} else {
  // Replace section 8 with an animated marquee ribbon and an elegant CSR transparency gateway card
  const replacementContent = `  <!-- =========================================================================
       INFINITE TICKER MARQUEE & STATUTORY TRANSPARENCY STRIP
       ========================================================================= -->
  <section class="section-marquee-ticker" data-reveal>
    <div class="marquee-track-container">
      <div class="marquee-flow-track">
        <div class="marquee-item"><span class="ticker-dot">✦</span> 3,00,000 ANNUAL MEALS TARGET</div>
        <div class="marquee-item"><span class="ticker-dot">✦</span> ₹66.67 PRECISION UNIT COST</div>
        <div class="marquee-item"><span class="ticker-dot">✦</span> FSSAI HYGIENE CERTIFIED</div>
        <div class="marquee-item"><span class="ticker-dot">✦</span> SECTION 80G 50% TAX EXEMPTION</div>
        <div class="marquee-item"><span class="ticker-dot">✦</span> CANARA BANK DIRECT SETTLEMENT</div>
        <div class="marquee-item"><span class="ticker-dot">✦</span> 50–100 ACTIVE GROUND CADRE</div>
        <div class="marquee-item"><span class="ticker-dot">✦</span> 100% STATUTORY COMPLIANCE</div>
        <div class="marquee-item"><span class="ticker-dot">✦</span> 30+ TONS FOOD WASTE RESCUED</div>
        <!-- Duplicated for seamless infinite loop -->
        <div class="marquee-item"><span class="ticker-dot">✦</span> 3,00,000 ANNUAL MEALS TARGET</div>
        <div class="marquee-item"><span class="ticker-dot">✦</span> ₹66.67 PRECISION UNIT COST</div>
        <div class="marquee-item"><span class="ticker-dot">✦</span> FSSAI HYGIENE CERTIFIED</div>
        <div class="marquee-item"><span class="ticker-dot">✦</span> SECTION 80G 50% TAX EXEMPTION</div>
        <div class="marquee-item"><span class="ticker-dot">✦</span> CANARA BANK DIRECT SETTLEMENT</div>
        <div class="marquee-item"><span class="ticker-dot">✦</span> 50–100 ACTIVE GROUND CADRE</div>
        <div class="marquee-item"><span class="ticker-dot">✦</span> 100% STATUTORY COMPLIANCE</div>
        <div class="marquee-item"><span class="ticker-dot">✦</span> 30+ TONS FOOD WASTE RESCUED</div>
      </div>
    </div>
  </section>

  <!-- Interactive Transparency Gateway Card -->
  <section class="section-transparency-gateway" data-reveal>
    <div class="container">
      <div class="transparency-banner-card spotlight-card">
        <div class="transparency-grid-split">
          <div>
            <div class="hero-eyebrow-pill float-slow">
              <span class="eyebrow-pulse-dot"></span>
              <span class="eyebrow-text">FIDUCIARY GOVERNANCE • ITEM (I) SCHEDULE VII</span>
            </div>
            <h3 class="transparency-title">100% Audited Rupee-for-Rupee Deployment</h3>
            <p class="transparency-desc">
              Every single rupee contributed to Sarwe Unnati Foundation is deployed under certified Section 8 governance. View our comprehensive 6-head capital allocation matrix, unit economics telemetry, and independent CA audit reports.
            </p>
            <div class="transparency-actions">
              <a href="impact.html#budget-allocation" class="btn-primary-glow btn-shimmer">
                <span>Explore Full ₹2 Cr Itemized Audit Matrix</span>
                <span>→</span>
              </a>
              <a href="about.html#governance" class="btn-secondary-outline">
                <span>Board Governance Charter</span>
              </a>
            </div>
          </div>
          <div class="transparency-kpi-column">
            <div class="kpi-mini-card">
              <div class="kpi-num" data-counter="66" data-prefix="₹" data-suffix=".67">₹66.67</div>
              <div class="kpi-lbl">All-Inclusive Cost / Meal</div>
            </div>
            <div class="kpi-mini-card">
              <div class="kpi-num" data-counter="822" data-suffix="/day">822/day</div>
              <div class="kpi-lbl">Daily Balanced Thalis</div>
            </div>
            <div class="kpi-mini-card">
              <div class="kpi-num" data-counter="50" data-suffix="%">50%</div>
              <div class="kpi-lbl">Section 80G Tax Exemption</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;

  indexHtml = indexHtml.replace(section8StartRegex, replacementContent);
  fs.writeFileSync(indexPath, indexHtml, 'utf8');
  console.log('Successfully removed Section 8 from index.html and replaced with Marquee + Transparency Card!');
}
