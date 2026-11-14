const fs = require('fs');

let html = fs.readFileSync('impact.html', 'utf8');

// Replace Section 2 precisely
const oldEconomicsRegex = /<!-- Section 2: Unit Economics & Financial Sustainability[\s\S]*?<!-- Section 3: Itemized Budget Allocation Matrix/;
const newEconomics = `<!-- Section 2: Unit Economics & Financial Sustainability (Slide 14) -->
  <section style="padding: 6rem 0; background: #0B0F19; border-top: 1px solid rgba(255, 255, 255, 0.08); border-bottom: 1px solid rgba(255, 255, 255, 0.08);">
    <div class="container">
      <div style="max-width: 820px;">
        <span class="section-tag-badge sapphire">UNIT ECONOMICS • SLIDE 14</span>
        <h2 class="section-title" style="color: #FFFFFF;">
          Precision Efficiency: <span style="font-family: var(--font-serif); font-style: italic; color: #38BDF8; font-weight: 400;">₹66.67 Per Complete Meal.</span>
        </h2>
        <p class="section-desc" style="color: #94A3B8;">
          Unlike ad-hoc feeding drives, our central wholesale procurement, batch steam-kettle prep, and volunteer field dispatch drive industry-leading capital efficiency.
        </p>
      </div>

      <!-- Open Economics Strip (De-Carded) -->
      <div class="open-economics-strip">
        <div class="economics-metric-block">
          <span class="economics-metric-tag saffron">UNIT BENCHMARK</span>
          <div class="economics-metric-num" style="color: #FB923C;">₹66.67</div>
          <div class="economics-metric-label">All-Inclusive Cost / Meal</div>
          <p class="economics-metric-desc">
            Covers wholesale grains &amp; lentils (₹38.00), fresh seasonal vegetables &amp; spices (₹12.00), biodegradable compostable packaging (₹7.00), and kitchen labor &amp; logistics (₹9.67).
          </p>
        </div>

        <div class="economics-metric-block">
          <span class="economics-metric-tag emerald">DAILY DISPATCH</span>
          <div class="economics-metric-num" style="color: #34D399;">₹54,795</div>
          <div class="economics-metric-label">Daily Operating Outlay</div>
          <p class="economics-metric-desc">
            Funds the end-to-end cooking, hot insulated transport, and dignified distribution of ~822 fresh nutritious thalis across 365 consecutive days without pause.
          </p>
        </div>

        <div class="economics-metric-block">
          <span class="economics-metric-tag blue">MONTHLY CADENCE</span>
          <div class="economics-metric-num" style="color: #60A5FA;">₹16.67 L</div>
          <div class="economics-metric-label">Monthly Operating Capital</div>
          <p class="economics-metric-desc">
            Full-cycle overhead covering 25,000 monthly meals, centralized kitchen utility expenses, fleet maintenance, supervisor stipends, and continuous laboratory quality audits.
          </p>
        </div>
      </div>

      <!-- Funding Mix Breakdown (De-Carded into Sleek Progress Stack) -->
      <div style="margin-top: 5rem;">
        <div style="max-width: 760px;">
          <span class="section-tag-badge emerald">CAPITAL DIVERSIFICATION • 5 STREAMS</span>
          <h3 style="font-family: var(--font-heading); font-size: 1.65rem; font-weight: 800; color: #FFFFFF; margin: 0.75rem 0 0.5rem;">
            Sustainable Multi-Stream Capital Model
          </h3>
          <p style="color: #94A3B8; font-size: 0.95rem; line-height: 1.6;">
            To safeguard against funding shortfalls and operational interruption, our ₹2 Crore target is structurally diversified across five distinct capital streams:
          </p>
        </div>

        <!-- Sleek Stacked Bar -->
        <div class="funding-progress-stack">
          <div class="funding-bar-segment csr" title="CSR Mandates: 40%">40% CSR</div>
          <div class="funding-bar-segment individual" title="Individual Donors: 25%">25% Indiv</div>
          <div class="funding-bar-segment grants" title="Institutional Grants: 20%">20% Grants</div>
          <div class="funding-bar-segment govt" title="Government Co-Funding: 10%">10% Govt</div>
          <div class="funding-bar-segment community" title="Community: 5%">5%</div>
        </div>

        <!-- Sleek Legend Grid -->
        <div class="funding-legend-grid">
          <div class="funding-legend-item">
            <div class="funding-legend-dot csr"></div>
            <div>
              <div class="funding-legend-title">CSR Partnerships (40%)</div>
              <div class="funding-legend-meta">₹80,00,000 • Section 135 Mandates</div>
            </div>
          </div>

          <div class="funding-legend-item">
            <div class="funding-legend-dot individual"></div>
            <div>
              <div class="funding-legend-title">Individual Donors (25%)</div>
              <div class="funding-legend-meta">₹50,00,000 • 80G Tax Deductions</div>
            </div>
          </div>

          <div class="funding-legend-item">
            <div class="funding-legend-dot grants"></div>
            <div>
              <div class="funding-legend-title">Institutional Grants (20%)</div>
              <div class="funding-legend-meta">₹40,00,000 • Philanthropic Trusts</div>
            </div>
          </div>

          <div class="funding-legend-item">
            <div class="funding-legend-dot govt"></div>
            <div>
              <div class="funding-legend-title">Govt Schemes (10%)</div>
              <div class="funding-legend-meta">₹20,00,000 • FCI Subsidized Grain</div>
            </div>
          </div>

          <div class="funding-legend-item">
            <div class="funding-legend-dot community"></div>
            <div>
              <div class="funding-legend-title">Community Support (5%)</div>
              <div class="funding-legend-meta">₹10,00,000 • Local Drives &amp; Mandis</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 3: Itemized Budget Allocation Matrix`;

html = html.replace(oldEconomicsRegex, newEconomics);

fs.writeFileSync('impact.html', html, 'utf8');
console.log('Successfully updated Section 2 in impact.html!');
