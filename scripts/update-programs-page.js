const fs = require('fs');

let html = fs.readFileSync('programs.html', 'utf8');

// 1. Hero Palette
html = html.replace(
  /<div class="section-tag-badge" style="display: inline-flex; align-items: center; gap: 0\.5rem; margin-bottom: 1\.25rem;">[\s\S]*?<\/div>/,
  `<div class="section-tag-badge emerald" style="display: inline-flex; align-items: center; gap: 0.5rem; margin-bottom: 1.25rem;">
          <span class="ticker-dot">✦</span>
          OPERATIONAL BLUEPRINT • FOOD RELIEF MODEL
        </div>`
);

html = html.replace(
  /<span class="serif-accent" style="font-family: var\(--font-serif\); font-style: italic; color: #F59E0B; font-weight: 400;">Operating Architecture\.<\/span>/,
  `<span class="serif-accent" style="font-family: var(--font-serif); font-style: italic; color: #34D399; font-weight: 400;">Operating Architecture.</span>`
);

// 2. Section 2: Beneficiaries (De-card into .editorial-divided-list)
const oldBeneficiariesRegex = /<section class="section-problem" id="beneficiaries"[\s\S]*?<\/section>/;
const newBeneficiaries = `<section class="section-problem" id="beneficiaries" style="padding: 6rem 0; background: #FFFFFF; border-bottom: 1px solid #E2E8F0;">
    <div class="container">
      <div style="text-align: center; max-width: 820px; margin: 0 auto 4rem;">
        <span class="section-tag-badge saffron">PRIORITY CADRE • SLIDE 6</span>
        <h2 class="section-title">
          Target Beneficiary <span class="serif-accent" style="font-family: var(--font-serif); font-style: italic; color: #FF6422; font-weight: 400;">Demographics.</span>
        </h2>
        <p class="section-desc" style="margin: 0 auto;">
          The foundation prioritizes individuals and families facing extreme, chronic food insecurity while upholding unconditional human dignity, confidentiality, and balanced nutritional intake.
        </p>
      </div>

      <div class="editorial-divided-list">
        <div class="editorial-list-item">
          <div class="editorial-item-num saffron">G-01</div>
          <div class="editorial-item-header">
            <h3 class="editorial-item-title">Homeless &amp; Street Dwellers</h3>
            <span class="editorial-item-tag">Immediate Daily Hot Meal Support</span>
          </div>
          <div class="editorial-item-body">
            Individuals residing on pavements, railway platforms, flyover underpasses, and municipal night shelters with zero cooking facilities or dependable income sources.
          </div>
        </div>

        <div class="editorial-list-item">
          <div class="editorial-item-num sapphire">G-02</div>
          <div class="editorial-item-header">
            <h3 class="editorial-item-title">Daily Wage Casual Workers</h3>
            <span class="editorial-item-tag">High-Calorie Morning Sustenance</span>
          </div>
          <div class="editorial-item-body">
            Laborers, rickshaw pullers, and construction workers who frequently face dry spells without employment and cannot afford balanced, nutritious grain portions.
          </div>
        </div>

        <div class="editorial-list-item">
          <div class="editorial-item-num emerald">G-03</div>
          <div class="editorial-item-header">
            <h3 class="editorial-item-title">Vulnerable Children</h3>
            <span class="editorial-item-tag">Protein &amp; Micronutrient Defense</span>
          </div>
          <div class="editorial-item-body">
            Children in impoverished urban settlements at severe risk of developmental stunting, prioritized for high-protein pulses, fresh fruit, and iron-rich green vegetables.
          </div>
        </div>

        <div class="editorial-list-item">
          <div class="editorial-item-num amber">G-04</div>
          <div class="editorial-item-header">
            <h3 class="editorial-item-title">Destitute &amp; Abandoned Elderly</h3>
            <span class="editorial-item-tag">Gentle Dignified Nutrition</span>
          </div>
          <div class="editorial-item-body">
            Abandoned senior citizens lacking familial support or physical mobility, provided with soft, easily digestible, and nutrient-dense meal preparations delivered respectfully.
          </div>
        </div>

        <div class="editorial-list-item">
          <div class="editorial-item-num sapphire">G-05</div>
          <div class="editorial-item-header">
            <h3 class="editorial-item-title">Economically Distressed Families</h3>
            <span class="editorial-item-tag">Confidential Household Relief</span>
          </div>
          <div class="editorial-item-body">
            Households facing acute sudden crises, breadwinner loss, or localized medical displacement. We provide recurring dignified meal rations directly to doorsteps, preventing familial starvation.
          </div>
        </div>
      </div>
    </div>
  </section>`;

html = html.replace(oldBeneficiariesRegex, newBeneficiaries);

// 3. Section 4: 3-Phase Distribution Strategy (Replace 3 bulky boxed cards with .open-timeline-track)
const oldDistRegex = /<!-- Section 4: 3-Phase Distribution Strategy[\s\S]*?<!-- Section 5: Call to Action/;
const newDist = `<!-- Section 4: 3-Phase Distribution Strategy (Slide 10) -->
  <section class="section-problem" id="distribution-strategy" style="padding: 6rem 0; background: #0B0F19; color: #FFFFFF; border-bottom: 1px solid rgba(255, 255, 255, 0.08);">
    <div class="container">
      <div style="max-width: 820px; margin-bottom: 2rem;">
        <span class="section-tag-badge sapphire">LOGISTICAL ROADMAP • SLIDE 10</span>
        <h2 class="section-title" style="color: #FFFFFF;">
          Three-Phase <span class="serif-accent" style="font-family: var(--font-serif); font-style: italic; color: #38BDF8; font-weight: 400;">Distribution Blueprint.</span>
        </h2>
        <p class="section-desc" style="color: #94A3B8;">
          The foundation executes a phased logistical roadmap to maximize field outreach while systematically minimizing kitchen operating overhead.
        </p>
      </div>

      <div class="open-timeline-track">
        <div class="timeline-step-col">
          <div class="timeline-step-marker">01</div>
          <span class="timeline-step-phase" style="color: #60A5FA;">PHASE 01 • PILOT</span>
          <h3 class="timeline-step-title">Pilot Field Network</h3>
          <p class="timeline-step-desc">
            Stress-test batch portion calibration, temperature stability, and transit routes across 2 to 3 high-need urban clusters in Saharanpur.
          </p>
          <ul class="timeline-step-deliverables">
            <li><strong>150–300</strong> Meals Cooked Daily</li>
            <li><strong>2–3</strong> Dedicated Daily Dispatch Hubs</li>
            <li><strong>100%</strong> Baseline Recipe Calibration</li>
          </ul>
        </div>

        <div class="timeline-step-col">
          <div class="timeline-step-marker">02</div>
          <span class="timeline-step-phase" style="color: #34D399;">PHASE 02 • SCALE &amp; EXPANSION</span>
          <h3 class="timeline-step-title">Full Operational Scale</h3>
          <p class="timeline-step-desc">
            Transition to the permanent ₹2 Crore target run-rate of 822 nutritious hot meals daily, utilizing customized insulated delivery vans and standardized route registries.
          </p>
          <ul class="timeline-step-deliverables">
            <li><strong style="color: #34D399;">822 Meals</strong> / Day (3,00,000 / Year)</li>
            <li><strong style="color: #34D399;">5–10</strong> Fixed Daily Distribution Points</li>
            <li><strong style="color: #34D399;">Dedicated</strong> Insulated Mobile Van Fleet</li>
          </ul>
        </div>

        <div class="timeline-step-col">
          <div class="timeline-step-marker">03</div>
          <span class="timeline-step-phase" style="color: #FB923C;">PHASE 03 • SUSTAINABILITY</span>
          <h3 class="timeline-step-title">Regional Ecosystem</h3>
          <p class="timeline-step-desc">
            Establish permanent multi-year institutional alliances with municipal welfare bodies, regional mandis, commercial food rescue donors, and corporate CSR committees.
          </p>
          <ul class="timeline-step-deliverables">
            <li><strong style="color: #FB923C;">100+</strong> Trained Volunteer Cadre</li>
            <li><strong style="color: #FB923C;">30+ MT</strong> Food Surplus Diverted / Year</li>
            <li><strong style="color: #FB923C;">Section 135</strong> Corporate Multi-Year CSR</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 5: Call to Action`;

html = html.replace(oldDistRegex, newDist);

fs.writeFileSync('programs.html', html, 'utf8');
console.log('Successfully de-carded and modernized programs.html!');
