const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. UPGRADE HERO TELEMETRY HUD TO MODERN OPEN METRIC RIBBON
const oldHeroTelemetry = `<!-- Glass Telemetry HUD -->
          <div class="hero-telemetry-hud">
            <div class="telemetry-card spotlight-card">
              <span class="telemetry-val emerald" data-counter="300000">3,00,000</span>
              <span class="telemetry-label">Annual Meals Target</span>
            </div>
            <div class="telemetry-card spotlight-card">
              <span class="telemetry-val" data-counter="66" data-prefix="₹" data-suffix=".67">₹66.67</span>
              <span class="telemetry-label">Unit Program Cost</span>
            </div>
            <div class="telemetry-card spotlight-card">
              <span class="telemetry-val amber" data-counter="100" data-suffix="%">100%</span>
              <span class="telemetry-label">Direct Bank Wire</span>
            </div>
          </div>`;

const newHeroTelemetry = `<!-- Open Modern Metric Ribbon (Non-Boxy, High-Impact) -->
          <div class="hero-metric-ribbon">
            <div class="hero-metric-item">
              <span class="hero-metric-val emerald" data-counter="300000">3,00,000</span>
              <span class="hero-metric-label">Annual Meals Target</span>
              <span class="hero-metric-sub">~822 Daily Balanced Thalis</span>
            </div>
            <div class="hero-metric-divider" aria-hidden="true"></div>
            <div class="hero-metric-item">
              <span class="hero-metric-val orange" data-counter="66" data-prefix="₹" data-suffix=".67">₹66.67</span>
              <span class="hero-metric-label">Unit Program Cost</span>
              <span class="hero-metric-sub">All-Inclusive Fresh Prep</span>
            </div>
            <div class="hero-metric-divider" aria-hidden="true"></div>
            <div class="hero-metric-item">
              <span class="hero-metric-val blue" data-counter="100" data-suffix="%">100%</span>
              <span class="hero-metric-label">Direct Bank Wire</span>
              <span class="hero-metric-sub">Zero Intermediary Leakage</span>
            </div>
          </div>`;

if (html.includes('hero-telemetry-hud')) {
  html = html.replace(oldHeroTelemetry, newHeroTelemetry);
  console.log('✓ Hero telemetry upgraded to open metric ribbon');
} else {
  console.log('⚠ hero-telemetry-hud pattern mismatch, skipping hero replacement');
}

// 2. UPGRADE CSR TIER CARDS TO MODERN EXECUTIVE TIER FRAMEWORK WITH TIER 2 FEATURED
const oldCsrGridRegex = /<div class="csr-tier-grid">[\s\S]*?<\/section>/;

const newCsrSection = `<div class="csr-tier-grid modern-csr-grid">
        <!-- Tier 1: Grassroots -->
        <div class="csr-card modern-tier-card">
          <div class="tier-card-header">
            <span class="tier-badge-chip">GRASSROOTS CSR</span>
            <h3 class="csr-title">Sponsor a Meal Batch</h3>
            <div class="csr-price">₹5,000 – ₹50,000</div>
            <p class="csr-desc">Support ongoing daily steam-kettle preparation and nutritious field distribution batches.</p>
          </div>
          <div class="tier-card-body">
            <div class="tier-deliverables-title">Verified Inclusions:</div>
            <ul class="clean-bullet-list tier-bullets">
              <li>
                <span class="bullet-marker">✓</span>
                <div><strong>Flexible Batches:</strong> 75 to 750 hot, balanced thalis deployed in verified distribution queues.</div>
              </li>
              <li>
                <span class="bullet-marker">✓</span>
                <div><strong>Statutory 80G Tax Deduction:</strong> Immediate 50% tax exemption certificate with Form 10BE filing.</div>
              </li>
              <li>
                <span class="bullet-marker">✓</span>
                <div><strong>Photographic Proof:</strong> Digital verification summary of food preparation and dignified service.</div>
              </li>
            </ul>
          </div>
          <div class="tier-card-footer">
            <a href="donate.html?tier=meal" class="btn-secondary-outline tier-btn">Sponsor Meal Batch →</a>
          </div>
        </div>

        <!-- Tier 2: FEATURED CORPORATE BENCHMARK -->
        <div class="csr-card modern-tier-card featured-csr-tier">
          <div class="featured-tier-ribbon">
            <span class="star-icon">★</span>
            <span>MOST POPULAR • CORPORATE BENCHMARK</span>
          </div>
          <div class="tier-card-header">
            <span class="tier-badge-chip orange-chip">SILVER ANNADAAN</span>
            <h3 class="csr-title">Day-of-Service Sponsorship</h3>
            <div class="csr-price orange-price">₹54,795 – ₹1,00,000</div>
            <p class="csr-desc">Sponsor a full day of foundation operations (822 meals) or dedicate 1,500 thalis to commemorate corporate milestones.</p>
          </div>
          <div class="tier-card-body">
            <div class="tier-deliverables-title">Comprehensive CSR Deliverables:</div>
            <ul class="clean-bullet-list tier-bullets">
              <li>
                <span class="bullet-marker orange-marker">✓</span>
                <div><strong>Entire Daily Run (822 Thalis):</strong> Direct capital coverage of morning procurement, kitchen prep, and field logistics.</div>
              </li>
              <li>
                <span class="bullet-marker orange-marker">✓</span>
                <div><strong>Dedicated Distribution Drive:</strong> Field photo and video documentation honoring company sponsorship.</div>
              </li>
              <li>
                <span class="bullet-marker orange-marker">✓</span>
                <div><strong>CA Utilization Certificate:</strong> Signed audit document ready for corporate CSR Schedule VII compliance.</div>
              </li>
            </ul>
          </div>
          <div class="tier-card-footer">
            <a href="donate.html?tier=day" class="btn-primary-glow tier-btn orange-btn">
              <span>Sponsor Full Day Operations</span>
              <span>→</span>
            </a>
          </div>
        </div>

        <!-- Tier 3: Strategic Community Adoption -->
        <div class="csr-card modern-tier-card">
          <div class="tier-card-header">
            <span class="tier-badge-chip">COMMUNITY ADOPTION</span>
            <h3 class="csr-title">Adopt a Relief Sector</h3>
            <div class="csr-price">₹1L – ₹5L <span class="price-cadence">/ Month</span></div>
            <p class="csr-desc">Adopt an identified high-vulnerability slum cluster, night shelter, or construction corridor with recurring food security.</p>
          </div>
          <div class="tier-card-body">
            <div class="tier-deliverables-title">Strategic Institutional Support:</div>
            <ul class="clean-bullet-list tier-bullets">
              <li>
                <span class="bullet-marker">✓</span>
                <div><strong>Sustained Monthly Cadence:</strong> Continuous food relief ensuring zero hunger dropouts across target clusters.</div>
              </li>
              <li>
                <span class="bullet-marker">✓</span>
                <div><strong>Co-Branded Distribution:</strong> On-site signage acknowledging corporate philanthropic partnership.</div>
              </li>
              <li>
                <span class="bullet-marker">✓</span>
                <div><strong>Board Impact Dossier:</strong> Quarterly ESG impact report with demographic tracking and CA sign-off.</div>
              </li>
            </ul>
          </div>
          <div class="tier-card-footer">
            <a href="contact.html?type=adopt-community" class="btn-secondary-outline tier-btn">Inquire for CSR Adoption →</a>
          </div>
        </div>
      </div>
    </div>
  </section>`;

if (oldCsrGridRegex.test(html)) {
  html = html.replace(oldCsrGridRegex, newCsrSection);
  console.log('✓ CSR tier cards upgraded with Tier 2 Featured ribbon & clean bullet deliverables');
} else {
  console.log('⚠ CSR tier grid regex match failed');
}

// 3. UPGRADE CALCULATOR CARD WITH 80G TAX PILL AND CLEAR READOUTS
const oldCalcHeader = `<div class="calculator-card-wrapper">
        <div style="text-align: center; max-width: 780px; margin: 0 auto;">
          <span class="section-tag-badge emerald">INTERACTIVE IMPACT SIMULATOR • 80G RELIEF</span>
          <h2 style="font-family: var(--font-display); font-size: clamp(2rem, 3.4vw, 3rem); font-weight: 800; margin-bottom: 0.75rem; color: #FFFFFF;">
            Calculate Your Contribution &amp; Tax Deduction.
          </h2>
          <p style="font-size: 1rem; color: #CBD5E1; line-height: 1.65;">
            Use the slider below to see how many nutritious meals your support funds, the food weight deployed, and your 50% income tax deduction under Section 80G.
          </p>
        </div>`;

const newCalcHeader = `<div class="calculator-card-wrapper modern-calc-wrapper">
        <div style="text-align: center; max-width: 780px; margin: 0 auto;">
          <div class="tax-benefit-guarantee-pill">
            <span class="pill-pulse-dot"></span>
            <span>SECTION 80G TAX EXEMPTION ACTIVE • 50% IMMEDIATE DEDUCTION</span>
          </div>
          <h2 style="font-family: var(--font-display); font-size: clamp(2rem, 3.4vw, 3rem); font-weight: 800; margin-bottom: 0.75rem; color: #FFFFFF;">
            Calculate Your Contribution &amp; Tax Deduction.
          </h2>
          <p style="font-size: 1.05rem; color: #CBD5E1; line-height: 1.65; max-width: 680px; margin: 0 auto;">
            Adjust the slider below to see how many balanced thalis your contribution delivers, total nutritious food weight, and your statutory tax deduction under Section 80G.
          </p>
        </div>`;

if (html.includes('calculator-card-wrapper')) {
  html = html.replace(oldCalcHeader, newCalcHeader);
  console.log('✓ Calculator header upgraded with 80G tax benefit guarantee pill');
}

// 4. WRITE BACK UPDATED HTML
fs.writeFileSync('index.html', html, 'utf8');
console.log('✓ index.html successfully updated');
