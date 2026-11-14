const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../index.html');
const cssPath = path.join(__dirname, '../css/style.css');

let indexHtml = fs.readFileSync(indexPath, 'utf8');
let styleCss = fs.readFileSync(cssPath, 'utf8');

// 1. TRANSFORM SECTION 2: CHARTER DOSSIER
const oldCharterRegex = /<!-- =+[\r\n\s]+SECTION 2: EXECUTIVE SUMMARY & PARTICULAR MATRIX \(SLIDE 2\)[\r\n\s]+=+\s*-->[\s\S]*?<\/section>/;

const newCharterHtml = `<!-- =========================================================================
       SECTION 2: EXECUTIVE SUMMARY & STATUTORY DOSSIER (SLIDE 2)
       ========================================================================= -->
  <section class="section-charter" id="charter-dossier">
    <div class="container">
      <div class="charter-editorial-wrapper">
        <!-- Institutional Header Bar -->
        <div class="charter-header-bar">
          <div class="charter-seal">
            <div class="seal-icon-box">🏛️</div>
            <div>
              <div class="charter-headline">SARWE UNNATI FOUNDATION</div>
              <div class="charter-sub-status">STATUTORY INCORPORATION &bull; ROC KANPUR &bull; ESTD. 14 AUG 2018</div>
            </div>
          </div>
          <div class="charter-badges-row">
            <span class="mono-stat-tag">CIN: U80902UP2018NPL106959</span>
            <span class="mono-stat-tag tag-green">80G: AAECH6219BF20261 (50% TAX EXEMPTION)</span>
            <span class="mono-stat-tag tag-blue">NGO DARPAN: UP/2025/0710389</span>
          </div>
        </div>

        <!-- 2-Column Editorial Grid: Left Narrative + Bullets, Right Financial Ledger Table -->
        <div class="charter-editorial-grid">
          <div class="charter-left-col">
            <span class="section-tag-badge">INSTITUTIONAL CHARTER • EXECUTIVE SUMMARY</span>
            <h2 class="section-title-sm" style="font-family: var(--font-display); font-size: clamp(1.8rem, 2.8vw, 2.3rem); font-weight: 800; line-height: 1.25; margin-bottom: 1rem;">
              A Structured, Fiduciary Framework for Hunger Relief.
            </h2>
            <p class="section-lead-text" style="font-size: 1.05rem; line-height: 1.75; color: var(--text-body); margin-bottom: 1.75rem;">
              SARWE UNNATI FOUNDATION was incorporated to address the acute human crisis of hunger among homeless people, street dwellers, and economically vulnerable populations. We bridge the gap between agricultural surplus and urban starvation by operating certified cooking centers, dignified mobile distribution networks, and audited financial reporting.
            </p>

            <!-- Structured Bullet Points -->
            <div class="editorial-bullets-block">
              <h4 class="bullets-subtitle">Statutory Safeguards &amp; Operating Standards</h4>
              <ul class="clean-bullet-list">
                <li>
                  <span class="bullet-marker">✦</span>
                  <div>
                    <strong>Section 8 Non-Profit Corporation:</strong> Incorporated under Section 8 of the Companies Act, 2013 (RoC Kanpur) with certified articles of fiduciary governance.
                  </div>
                </li>
                <li>
                  <span class="bullet-marker">✦</span>
                  <div>
                    <strong>Dual Tax Exemptions (12A &amp; 80G):</strong> Donors receive an immediate 50% income tax deduction backed by statutory Form 10BE documentation.
                  </div>
                </li>
                <li>
                  <span class="bullet-marker">✦</span>
                  <div>
                    <strong>FSSAI Kitchen Hygiene Certification:</strong> All meals batch-prepared in certified sanitary kitchens with temperature tracking and ingredient testing.
                  </div>
                </li>
                <li>
                  <span class="bullet-marker">✦</span>
                  <div>
                    <strong>100% Audited Rupee Deployment:</strong> Independent Chartered Accountants reconcile all wholesale purchases against physical recipient headcount logs.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="charter-right-col">
            <div class="statutory-ledger-card">
              <div class="ledger-header">
                <span class="ledger-title">OPERATIONAL &amp; FINANCIAL LEDGER</span>
                <span class="ledger-period">FY 2025–26</span>
              </div>
              <div class="ledger-table">
                <div class="ledger-row">
                  <span class="ledger-key">Director &amp; Founder</span>
                  <span class="ledger-val">Priyesh Garg</span>
                </div>
                <div class="ledger-row">
                  <span class="ledger-key">Core Operating Focus</span>
                  <span class="ledger-val">Food Relief &amp; Nutrition</span>
                </div>
                <div class="ledger-row highlight-row">
                  <span class="ledger-key">Annual Budget</span>
                  <span class="ledger-val text-orange">₹2,00,00,000 (₹2 Crore)</span>
                </div>
                <div class="ledger-row highlight-row">
                  <span class="ledger-key">Unit Economics</span>
                  <span class="ledger-val text-blue">₹66.67 Per Meal</span>
                </div>
                <div class="ledger-row">
                  <span class="ledger-key">Daily Balanced Thalis</span>
                  <span class="ledger-val">~822 Meals / Day</span>
                </div>
                <div class="ledger-row">
                  <span class="ledger-key">Operating Cadence</span>
                  <span class="ledger-val">12 Months (365 Continuous Days)</span>
                </div>
                <div class="ledger-row">
                  <span class="ledger-key">Target Beneficiaries</span>
                  <span class="ledger-val">Homeless, Labor &amp; Children</span>
                </div>
                <div class="ledger-row">
                  <span class="ledger-key">Section 12A URN</span>
                  <span class="ledger-val font-mono">AAECH6219BE20251</span>
                </div>
                <div class="ledger-row">
                  <span class="ledger-key">Section 80G URN</span>
                  <span class="ledger-val font-mono">AAECH6219BF20261</span>
                </div>
                <div class="ledger-row">
                  <span class="ledger-key">Registered Headquarters</span>
                  <span class="ledger-val">Saharanpur — 247001, UP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;

if (oldCharterRegex.test(indexHtml)) {
  indexHtml = indexHtml.replace(oldCharterRegex, newCharterHtml);
  console.log('Transformed Section 2: Charter Dossier to Editorial Layout');
} else {
  console.warn('Could not match oldCharterRegex');
}

// 2. TRANSFORM SECTION 3: THE HUNGER CRISIS (SLIDE 4)
const oldCrisisRegex = /<div class="problem-challenges-stack">[\s\S]*?<\/div>[\s\S]*?<\/div>[\s\S]*?<!-- Right: Food Relief Image/;

const newCrisisStack = `<div class="editorial-numbered-list">
            <div class="numbered-bullet-item">
              <span class="num-bullet">01</span>
              <div class="bullet-content">
                <h3 class="bullet-heading">Severe Nutritional &amp; Protein Deficit</h3>
                <p class="bullet-text">Street diets are heavily imbalanced, relying on low-cost carbohydrates with almost zero protein, dietary fiber, or vital micronutrients.</p>
              </div>
            </div>

            <div class="numbered-bullet-item">
              <span class="num-bullet">02</span>
              <div class="bullet-content">
                <h3 class="bullet-heading">Irregular Meal Cadence</h3>
                <p class="bullet-text">Homeless people and casual laborers frequently endure 24 to 48 hours without food, surviving on sporadic, unorganized charity drives.</p>
              </div>
            </div>

            <div class="numbered-bullet-item">
              <span class="num-bullet">03</span>
              <div class="bullet-content">
                <h3 class="bullet-heading">Under-Served Micro-Pockets</h3>
                <p class="bullet-text">Traditional feeding centers miss high-need labor squares, railway track dwellers, and temporary migrant construction clusters.</p>
              </div>
            </div>

            <div class="numbered-bullet-item">
              <span class="num-bullet">04</span>
              <div class="bullet-content">
                <h3 class="bullet-heading">Severe Food Wastage Paradox</h3>
                <p class="bullet-text">Tons of edible surplus food is discarded daily from commercial banquets while citizens sleep hungry just kilometers away.</p>
              </div>
            </div>

            <div class="numbered-bullet-item">
              <span class="num-bullet">05</span>
              <div class="bullet-content">
                <h3 class="bullet-heading">Vulnerable Children &amp; Destitute Seniors</h3>
                <p class="bullet-text">Street children suffer irreversible cognitive stunting, while elderly citizens face severe malnutrition without family support.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Food Relief Image`;

if (oldCrisisRegex.test(indexHtml)) {
  indexHtml = indexHtml.replace(oldCrisisRegex, newCrisisStack);
  console.log('Transformed Section 3: Crisis to Editorial Numbered List');
} else {
  console.warn('Could not match oldCrisisRegex');
}

// 3. TRANSFORM SECTION 4: 5 CORE OPERATING COMPONENTS (SLIDE 5)
const oldComponentsRegex = /<section class="section-components" id="solution">[\s\S]*?<\/section>/;

const newComponentsHtml = `<section class="section-components" id="solution">
    <div class="container">
      <div class="operating-editorial-grid">
        <!-- Left: Sticky Narrative & Execution Guarantees -->
        <div class="operating-sticky-sidebar">
          <span class="section-tag-badge emerald">OUR OPERATING MODEL • 5 PILLARS</span>
          <h2 class="section-title" style="margin-top: 0.75rem;">
            Engineered for <span class="italic-flair">Scale, Hygiene &amp; Dignity.</span>
          </h2>
          <p class="section-desc" style="margin-bottom: 2rem;">
            From wholesale procurement to doorstep distribution, every rupee is tracked with physical registers, geotagged dispatch logs, and independent CA audits.
          </p>

          <div class="execution-standards-card">
            <h4 class="standards-title">Core Execution Standards</h4>
            <ul class="standards-bullet-list">
              <li>
                <span class="check-icon">✓</span>
                <div><strong>Standardized ~650 kcal Nutrition:</strong> Balanced portions calibrated with 18g–22g protein, legumes, and fresh greens.</div>
              </li>
              <li>
                <span class="check-icon">✓</span>
                <div><strong>FSSAI Certified Commercial Kitchens:</strong> Industrial stainless cooking vessels and food-grade thermal containers.</div>
              </li>
              <li>
                <span class="check-icon">✓</span>
                <div><strong>Orderly Queuing &amp; Human Dignity:</strong> Compassionate volunteer marshaling upholding beneficiary respect.</div>
              </li>
              <li>
                <span class="check-icon">✓</span>
                <div><strong>Radical Physical Telemetry:</strong> Daily physical recipient headcount logs matched against grain procurement invoices.</div>
              </li>
              <li>
                <span class="check-icon">✓</span>
                <div><strong>Schedule VII CSR Compliance:</strong> Eligible for institutional corporate grants with instant Form 10BE tax certificates.</div>
              </li>
            </ul>
          </div>

          <div style="margin-top: 2rem;">
            <a href="programs.html" class="btn-primary-glow btn-shimmer">
              <span>Explore Programs &amp; Hygiene Standards</span>
              <span>→</span>
            </a>
          </div>
        </div>

        <!-- Right: 5 Operating Process Pillars (Editorial Process Stream) -->
        <div class="operating-process-stream">
          <!-- Pillar 1 -->
          <div class="process-stream-item">
            <div class="stream-item-header">
              <span class="stream-num-badge">PILLAR 01</span>
              <span class="stream-tag">FSSAI COMPLIANT KITCHENS</span>
            </div>
            <h3 class="stream-item-title">Nutritious Meal Preparation &amp; Certified Kitchens</h3>
            <p class="stream-item-desc">
              Meals are prepared fresh daily in commercial sanitized kitchens. Wholesale grains, fresh vegetables, and protein pulses are batch-cooked under strict temperature control.
            </p>
            <ul class="stream-nested-bullets">
              <li><span>•</span> Verified wholesale ingredient procurement with zero adulteration testing</li>
              <li><span>•</span> Stainless-steel commercial grade cooking vessels and sanitization protocols</li>
              <li><span>•</span> Standardized portion control calibrated for ~650 kcal wholesome nutrition</li>
            </ul>
          </div>

          <!-- Pillar 2 -->
          <div class="process-stream-item">
            <div class="stream-item-header">
              <span class="stream-num-badge">PILLAR 02</span>
              <span class="stream-tag">SCHEDULED LOGISTICS</span>
            </div>
            <h3 class="stream-item-title">Dignified Street &amp; Community Distribution</h3>
            <p class="stream-item-desc">
              Transported in insulated containers to 5–10 fixed distribution hubs: labor squares, night shelters, and underpasses.
            </p>
            <ul class="stream-nested-bullets">
              <li><span>•</span> Fixed daily schedules ensuring dependable community nourishment</li>
              <li><span>•</span> Orderly queues upholding human respect and safety</li>
              <li><span>•</span> Compostable leaf plates and hygienic drinking water stations</li>
            </ul>
          </div>

          <!-- Pillar 3 -->
          <div class="process-stream-item">
            <div class="stream-item-header">
              <span class="stream-num-badge">PILLAR 03</span>
              <span class="stream-tag">ZERO FOOD WASTAGE</span>
            </div>
            <h3 class="stream-item-title">Safe Surplus Recovery &amp; Sourcing</h3>
            <p class="stream-item-desc">
              Coordinating safe surplus food collection from verified institutional cafeterias and banquet partners across the district.
            </p>
            <ul class="stream-nested-bullets">
              <li><span>•</span> Organoleptic safety and temperature testing before intake</li>
              <li><span>•</span> Rapid-dispatch insulated transit fleet reaching hungry citizens in under 60 minutes</li>
              <li><span>•</span> Strict adherence to FSSAI food recovery and safety protocols</li>
            </ul>
          </div>

          <!-- Pillar 4 -->
          <div class="process-stream-item">
            <div class="stream-item-header">
              <span class="stream-num-badge">PILLAR 04</span>
              <span class="stream-tag">MICRO-NEED MAPPING</span>
            </div>
            <h3 class="stream-item-title">Beneficiary Mapping &amp; Community Outreach</h3>
            <p class="stream-item-desc">
              Actively identifying destitute elderly, disabled individuals, and daily wagers across Saharanpur &amp; Western Uttar Pradesh.
            </p>
            <ul class="stream-nested-bullets">
              <li><span>•</span> Ward-level vulnerability surveys targeting high-need pockets</li>
              <li><span>•</span> Zero public exploitation, photography profiling, or loss of dignity</li>
              <li><span>•</span> Direct doorstep meal delivery for bedridden elderly citizens</li>
            </ul>
          </div>

          <!-- Pillar 5 -->
          <div class="process-stream-item">
            <div class="stream-item-header">
              <span class="stream-num-badge">PILLAR 05</span>
              <span class="stream-tag">RADICAL AUDIT &amp; CSR</span>
            </div>
            <h3 class="stream-item-title">Reconciliation Registers &amp; CA Audits</h3>
            <p class="stream-item-desc">
              Every drive is reconciled: raw materials purchased vs. meals served vs. daily physical recipient registers.
            </p>
            <ul class="stream-nested-bullets">
              <li><span>•</span> Daily distribution headcount logs and digital photo audits</li>
              <li><span>•</span> Independent Chartered Accountant quarterly utilization certifications</li>
              <li><span>•</span> Form 10BE and statutory tax exemption receipts issued for every donor</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>`;

if (oldComponentsRegex.test(indexHtml)) {
  indexHtml = indexHtml.replace(oldComponentsRegex, newComponentsHtml);
  console.log('Transformed Section 4: Operating Model to Editorial Process Stream');
} else {
  console.warn('Could not match oldComponentsRegex');
}

// 4. TRANSFORM SECTION 6: ANNUAL SOCIAL IMPACT TARGETS (SLIDE 11 & 14)
const oldImpactRegex = /<section class="section-impact-targets" id="impact-targets">[\s\S]*?<\/section>/;

const newImpactHtml = `<section class="section-impact-targets" id="impact-targets">
    <div class="container">
      <div style="text-align: center; max-width: 800px; margin: 0 auto;">
        <span class="section-tag-badge emerald">ANNUAL PROGRAM BENCHMARKS • SLIDE 11 &amp; 14</span>
        <h2 class="section-title" style="color: #FFFFFF;">
          Measurable Goals &amp; <span class="italic-flair" style="color: var(--brand-amber);">Radical Efficiency.</span>
        </h2>
        <p class="section-desc" style="color: #CBD5E1; margin: 0 auto;">
          The ₹2 Crore annual budget is deployed with strict unit economics: ₹66.67 per meal covering bulk procurement, certified preparation, and hygienic transport.
        </p>
      </div>

      <div class="impact-editorial-container">
        <!-- Prominent Open Metrics Strip -->
        <div class="impact-metrics-strip">
          <div class="metric-strip-item">
            <div class="metric-big-num color-emerald">3,00,000</div>
            <div class="metric-strip-title">Nutritious Meals Distributed</div>
            <p class="metric-strip-desc">Annual baseline target served across 365 continuous days to homeless citizens and workers.</p>
          </div>

          <div class="metric-strip-item">
            <div class="metric-big-num color-cyan">~822 / day</div>
            <div class="metric-strip-title">Daily Operating Cadence</div>
            <p class="metric-strip-desc">Every single day of the year, rain or shine, morning and evening food relief schedules operate.</p>
          </div>

          <div class="metric-strip-item">
            <div class="metric-big-num color-orange">₹66.67</div>
            <div class="metric-strip-title">All-Inclusive Cost / Meal</div>
            <p class="metric-strip-desc">Comprehensive unit cost including wholesale grains, kitchen prep, utensils, packaging and transport.</p>
          </div>
        </div>

        <!-- 2-Column Structured Bulleted Audit Matrix -->
        <div class="impact-bullets-split-grid">
          <!-- Column 1: Field Delivery Outcomes -->
          <div class="impact-bullet-column-card">
            <h3 class="impact-column-heading">
              <span style="color: #34D399;">✦</span> Field Delivery &amp; Community Reach
            </h3>
            <ul class="impact-bullet-list">
              <li>
                <div class="bullet-icon-box green">✓</div>
                <div>
                  <strong>365 Days Uninterrupted Cadence:</strong> Zero operational pause during monsoons, summer heatwaves, or winter cold snaps.
                </div>
              </li>
              <li>
                <div class="bullet-icon-box green">✓</div>
                <div>
                  <strong>5–10 Fixed Beneficiary Hubs:</strong> Strategically mapped stations at labor chowks, hospital waiting areas, and night shelters.
                </div>
              </li>
              <li>
                <div class="bullet-icon-box green">✓</div>
                <div>
                  <strong>50–100 Trained Volunteer Cadre:</strong> Ground volunteers mobilized for hygiene enforcement, queue order, and monitoring.
                </div>
              </li>
              <li>
                <div class="bullet-icon-box green">✓</div>
                <div>
                  <strong>~30+ Tons Safe Surplus Rescued:</strong> Active coordination with banquet halls and corporate kitchens preventing organic food waste.
                </div>
              </li>
            </ul>
          </div>

          <!-- Column 2: Governance & Financial Accountability -->
          <div class="impact-bullet-column-card">
            <h3 class="impact-column-heading">
              <span style="color: #FB923C;">✦</span> Fiduciary Governance &amp; Fiscal Rigor
            </h3>
            <ul class="impact-bullet-list">
              <li>
                <div class="bullet-icon-box orange">✓</div>
                <div>
                  <strong>₹2 Crore Capital Allocation:</strong> Strict 6-head budgetary matrix ensuring maximum direct-to-cause capital deployment.
                </div>
              </li>
              <li>
                <div class="bullet-icon-box orange">✓</div>
                <div>
                  <strong>Daily Inventory Reconciliation:</strong> Bulk grain purchase invoices matched to kitchen cooking batches and distribution logs.
                </div>
              </li>
              <li>
                <div class="bullet-icon-box orange">✓</div>
                <div>
                  <strong>Quarterly Independent CA Audits:</strong> Certified utilization certificates published to ensure absolute donor transparency.
                </div>
              </li>
              <li>
                <div class="bullet-icon-box orange">✓</div>
                <div>
                  <strong>Instant 80G Tax Certificates:</strong> Automatic Form 10BE generation providing 50% tax deductions for all eligible donors.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>`;

if (oldImpactRegex.test(indexHtml)) {
  indexHtml = indexHtml.replace(oldImpactRegex, newImpactHtml);
  console.log('Transformed Section 6: Impact Benchmarks to Open Metric Strip & Bullet Matrix');
} else {
  console.warn('Could not match oldImpactRegex');
}

// 5. TRANSFORM SECTION 10: 12-MONTH IMPLEMENTATION ROADMAP (SLIDE 17)
const oldRoadmapRegex = /<section class="section-roadmap" id="roadmap">[\s\S]*?<\/section>/;

const newRoadmapHtml = `<section class="section-roadmap" id="roadmap">
    <div class="container">
      <div style="max-width: 800px;">
        <span class="section-tag-badge">12-MONTH TIMELINE • SLIDE 17</span>
        <h2 class="section-title">
          Implementation <span class="italic-flair">Roadmap.</span>
        </h2>
        <p class="section-desc">
          A phased, disciplined rollout ensuring supplier verification, pilot validation, and measured expansion across Western UP.
        </p>
      </div>

      <!-- Linear Connected Timeline with Milestone Bullets -->
      <div class="roadmap-linear-timeline">
        <!-- Phase 1 -->
        <div class="timeline-milestone-row">
          <div class="timeline-node-pin">01</div>
          <div class="timeline-milestone-content">
            <div class="milestone-meta-bar">
              <span class="milestone-time-badge">MONTH 1</span>
              <h3 class="milestone-phase-name">Foundational Setup &amp; Ground Baseline</h3>
            </div>
            <ul class="milestone-bullets-list">
              <li>Location mapping and ward-level hunger baseline surveys across Saharanpur</li>
              <li>FSSAI certified commercial kitchen agreements and equipment procurement</li>
              <li>Wholesale ingredient supplier contracts for bulk pulses, grains, and spices</li>
              <li>Ground volunteer mobilization drive and safety training onboarding</li>
            </ul>
          </div>
        </div>

        <!-- Phase 2 -->
        <div class="timeline-milestone-row">
          <div class="timeline-node-pin">02</div>
          <div class="timeline-milestone-content">
            <div class="milestone-meta-bar">
              <span class="milestone-time-badge">MONTHS 2–3</span>
              <h3 class="milestone-phase-name">Pilot Operations &amp; Portion Calibration</h3>
            </div>
            <ul class="milestone-bullets-list">
              <li>Launch pilot meal preparation batches (200–400 meals/day)</li>
              <li>Calibrate standardized portioning (~650 kcal) and nutritional balances</li>
              <li>Test thermal insulation containers and mobile transit dispatch routes</li>
              <li>Establish daily physical recipient registration protocols at pilot hubs</li>
            </ul>
          </div>
        </div>

        <!-- Phase 3 -->
        <div class="timeline-milestone-row">
          <div class="timeline-node-pin">03</div>
          <div class="timeline-milestone-content">
            <div class="milestone-meta-bar">
              <span class="milestone-time-badge">MONTHS 4–6</span>
              <h3 class="milestone-phase-name">Full-Scale 822 Meals/Day Rollout</h3>
            </div>
            <ul class="milestone-bullets-list">
              <li>Ramp operations to full annual target volume (~822 nutritious meals every day)</li>
              <li>Activate 5–10 fixed distribution hubs covering labor chowks and night shelters</li>
              <li>Initiate banquet and institutional cafeteria surplus food recovery network</li>
              <li>Publish first quarterly independent CA audit report and donor briefing</li>
            </ul>
          </div>
        </div>

        <!-- Phase 4 -->
        <div class="timeline-milestone-row">
          <div class="timeline-node-pin">04</div>
          <div class="timeline-milestone-content">
            <div class="milestone-meta-bar">
              <span class="milestone-time-badge">MONTHS 7–9</span>
              <h3 class="milestone-phase-name">Corporate CSR Alliances &amp; Logistics Optimization</h3>
            </div>
            <ul class="milestone-bullets-list">
              <li>Formalize institutional CSR grant partnerships under Schedule VII Item (i)</li>
              <li>Introduce automated route telemetry for dispatch vans to minimize idle transit</li>
              <li>Expand volunteer base to 100 active community members with specialized PPE</li>
              <li>Conduct mid-term nutritional health assessment among regular beneficiary groups</li>
            </ul>
          </div>
        </div>

        <!-- Phase 5 -->
        <div class="timeline-milestone-row">
          <div class="timeline-node-pin">05</div>
          <div class="timeline-milestone-content">
            <div class="milestone-meta-bar">
              <span class="milestone-time-badge">MONTHS 10–12</span>
              <h3 class="milestone-phase-name">Impact Consolidation &amp; Year 2 Expansion</h3>
            </div>
            <ul class="milestone-bullets-list">
              <li>Complete annual distribution milestone target of 3,00,000 wholesome meals</li>
              <li>Publish comprehensive Annual Impact Dossier and statutory Form 10BE filing</li>
              <li>Reconcile ₹2 Crore budget utilization certificate with statutory auditors</li>
              <li>Finalize expansion blueprint for Phase II regional kitchen clusters</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>`;

if (oldRoadmapRegex.test(indexHtml)) {
  indexHtml = indexHtml.replace(oldRoadmapRegex, newRoadmapHtml);
  console.log('Transformed Section 10: Roadmap to Linear Connected Timeline with Bullets');
} else {
  console.warn('Could not match oldRoadmapRegex');
}

// Write back updated index.html
fs.writeFileSync(indexPath, indexHtml, 'utf8');
console.log('Successfully saved updated index.html');
