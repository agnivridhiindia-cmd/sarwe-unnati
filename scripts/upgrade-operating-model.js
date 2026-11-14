const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../index.html');
const cssPath = path.join(__dirname, '../css/style.css');
const jsPath = path.join(__dirname, '../js/main.js');

let indexHtml = fs.readFileSync(indexPath, 'utf8');
let styleCss = fs.readFileSync(cssPath, 'utf8');
let mainJs = fs.readFileSync(jsPath, 'utf8');

// 1. NEW HTML FOR SECTION 4: 5 CORE OPERATING PILLARS
const newOperatingHtml = `  <!-- =========================================================================
       SECTION 4: 5 CORE OPERATING PILLARS (SLIDE 5)
       ========================================================================= -->
  <section class="section-components" id="solution">
    <div class="container">
      <!-- Section Header -->
      <div class="operating-header-block">
        <span class="section-tag-badge emerald">OUR OPERATING MODEL • 5 PILLARS</span>
        <h2 class="section-title">
          Engineered for <span class="italic-flair">Scale, Hygiene &amp; Dignity.</span>
        </h2>
        <p class="section-desc">
          A disciplined, end-to-end hunger relief architecture: bridging bulk agricultural procurement with certified central cooking, thermal transit logistics, dignified community queues, and independent CA fiduciary auditing.
        </p>
      </div>

      <!-- 5-Pillar Pipeline Navigation Strip -->
      <div class="pillars-pipeline-nav" role="tablist" aria-label="Operating Model 5 Pillars">
        <button class="pipeline-nav-btn active" data-pillar="1" role="tab" aria-selected="true" aria-controls="pillar-panel-1" id="pillar-tab-1">
          <span class="nav-step-num">01</span>
          <div class="nav-btn-text">
            <span class="nav-btn-title">Certified Kitchens</span>
            <span class="nav-btn-sub">Fresh Batch Prep</span>
          </div>
        </button>

        <button class="pipeline-nav-btn" data-pillar="2" role="tab" aria-selected="false" aria-controls="pillar-panel-2" id="pillar-tab-2">
          <span class="nav-step-num">02</span>
          <div class="nav-btn-text">
            <span class="nav-btn-title">Street Logistics</span>
            <span class="nav-btn-sub">5–10 Fixed Hubs</span>
          </div>
        </button>

        <button class="pipeline-nav-btn" data-pillar="3" role="tab" aria-selected="false" aria-controls="pillar-panel-3" id="pillar-tab-3">
          <span class="nav-step-num">03</span>
          <div class="nav-btn-text">
            <span class="nav-btn-title">Surplus Recovery</span>
            <span class="nav-btn-sub">Zero Waste Fleet</span>
          </div>
        </button>

        <button class="pipeline-nav-btn" data-pillar="4" role="tab" aria-selected="false" aria-controls="pillar-panel-4" id="pillar-tab-4">
          <span class="nav-step-num">04</span>
          <div class="nav-btn-text">
            <span class="nav-btn-title">Need Mapping</span>
            <span class="nav-btn-sub">Doorstep Outreach</span>
          </div>
        </button>

        <button class="pipeline-nav-btn" data-pillar="5" role="tab" aria-selected="false" aria-controls="pillar-panel-5" id="pillar-tab-5">
          <span class="nav-step-num">05</span>
          <div class="nav-btn-text">
            <span class="nav-btn-title">CA Auditing</span>
            <span class="nav-btn-sub">100% Telemetry</span>
          </div>
        </button>
      </div>

      <!-- Unified Pillar Showcase Stage (Tab Panels) -->
      <div class="pillars-stage-wrapper">
        <!-- Panel 1: Certified Kitchens -->
        <div class="pillar-panel-view active" id="pillar-panel-1" role="tabpanel" aria-labelledby="pillar-tab-1">
          <div class="pillar-showcase-grid">
            <div class="pillar-left-content">
              <div class="pillar-eyebrow-row">
                <span class="pillar-phase-pill">PILLAR 01 // OPERATIONAL STAGE</span>
                <span class="pillar-status-tag tag-green">FSSAI COMPLIANT KITCHENS</span>
              </div>
              <h3 class="pillar-headline">Nutritious Meal Preparation &amp; Industrial Cooking Centers</h3>
              <p class="pillar-narrative">
                Every single meal is prepared fresh daily in commercial sanitized cooking centers. Bulk whole grains, fresh vegetables, and protein pulses are batch-cooked under strict thermal controls to guarantee safe, wholesome nourishment for vulnerable citizens.
              </p>

              <div class="pillar-bullets-group">
                <h4 class="pillar-bullets-title">Standard Operating Protocols &amp; Guarantees</h4>
                <ul class="pillar-execution-list">
                  <li>
                    <span class="bullet-accent">✦</span>
                    <div>
                      <strong>Wholesale Mandi Procurement:</strong> Raw grains, lentils, and seasonal vegetables sourced directly from regional mandis with zero chemical adulteration testing.
                    </div>
                  </li>
                  <li>
                    <span class="bullet-accent">✦</span>
                    <div>
                      <strong>Stainless-Steel Infrastructure:</strong> Food-grade SS 304 commercial steam kettles, motorized stirrers, and mechanized sanitization bays.
                    </div>
                  </li>
                  <li>
                    <span class="bullet-accent">✦</span>
                    <div>
                      <strong>Calibrated ~650 kcal Portioning:</strong> Formulated by nutritionists to deliver 18g–22g plant protein, complex carbohydrates, and essential micronutrients.
                    </div>
                  </li>
                  <li>
                    <span class="bullet-accent">✦</span>
                    <div>
                      <strong>Thermal Cooking Safety:</strong> Strict cooking temperature enforcement (&ge; 75&deg;C) with mandatory kitchen aprons, hairnets, and daily batch logs.
                    </div>
                  </li>
                </ul>
              </div>

              <div class="pillar-actions-bar">
                <a href="programs.html#kitchen-hygiene" class="btn-primary-glow btn-shimmer">
                  <span>Explore Kitchen Hygiene Protocols</span>
                  <span>&rarr;</span>
                </a>
                <div class="pillar-controls">
                  <button class="pillar-arrow-btn prev-btn" aria-label="Previous Pillar" data-target="5">&#8592;</button>
                  <span class="pillar-counter-indicator">01 / 05</span>
                  <button class="pillar-arrow-btn next-btn" aria-label="Next Pillar" data-target="2">&#8594;</button>
                </div>
              </div>
            </div>

            <div class="pillar-right-visual">
              <div class="pillar-photo-container">
                <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=85" alt="Hygienic industrial kitchen food preparation adhering to FSSAI standards" class="pillar-visual-img">
                <div class="pillar-telemetry-overlay">
                  <div class="telemetry-chip">
                    <span class="chip-label">DAILY CAPACITY</span>
                    <span class="chip-value">1,500 Meals / Shift</span>
                  </div>
                  <div class="telemetry-chip">
                    <span class="chip-label">COOKING TEMP</span>
                    <span class="chip-value">&ge; 75&deg;C Holding</span>
                  </div>
                  <div class="telemetry-chip">
                    <span class="chip-label">VESSEL MATERIAL</span>
                    <span class="chip-value">Food-Grade SS 304</span>
                  </div>
                  <div class="telemetry-chip">
                    <span class="chip-label">COMPLIANCE</span>
                    <span class="chip-value highlight-green">FSSAI Certified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Panel 2: Street Logistics -->
        <div class="pillar-panel-view" id="pillar-panel-2" role="tabpanel" aria-labelledby="pillar-tab-2">
          <div class="pillar-showcase-grid">
            <div class="pillar-left-content">
              <div class="pillar-eyebrow-row">
                <span class="pillar-phase-pill">PILLAR 02 // OPERATIONAL STAGE</span>
                <span class="pillar-status-tag tag-blue">SCHEDULED MOBILE LOGISTICS</span>
              </div>
              <h3 class="pillar-headline">Dignified Street &amp; Community Distribution Fleet</h3>
              <p class="pillar-narrative">
                Freshly cooked meals are transferred immediately into double-walled insulated containers and dispatched via scheduled mobile routes to 5&ndash;10 fixed relief hubs, ensuring reliable, dependable sustenance for labor squares and night shelters.
              </p>

              <div class="pillar-bullets-group">
                <h4 class="pillar-bullets-title">Standard Operating Protocols &amp; Guarantees</h4>
                <ul class="pillar-execution-list">
                  <li>
                    <span class="bullet-accent">✦</span>
                    <div>
                      <strong>Fixed Schedule Cadence:</strong> Dependable daily morning (11:30 AM) and evening (7:00 PM) distribution runs operating 365 days a year without fail.
                    </div>
                  </li>
                  <li>
                    <span class="bullet-accent">✦</span>
                    <div>
                      <strong>Insulated Thermal Transport:</strong> Heavy-duty food-grade insulated transit barrels retaining heat above 65&deg;C for over 3 hours.
                    </div>
                  </li>
                  <li>
                    <span class="bullet-accent">✦</span>
                    <div>
                      <strong>Dignified Queuing Systems:</strong> Roped corridors and volunteer marshals upholding human respect, calm order, and safety.
                    </div>
                  </li>
                  <li>
                    <span class="bullet-accent">✦</span>
                    <div>
                      <strong>Eco-Friendly Leaf Plates:</strong> Biodegradable sal leaf thalis and clean drinking water stations eliminating environmental litter.
                    </div>
                  </li>
                </ul>
              </div>

              <div class="pillar-actions-bar">
                <a href="programs.html#distribution-model" class="btn-primary-glow btn-shimmer">
                  <span>View 3-Phase Distribution Model</span>
                  <span>&rarr;</span>
                </a>
                <div class="pillar-controls">
                  <button class="pillar-arrow-btn prev-btn" aria-label="Previous Pillar" data-target="1">&#8592;</button>
                  <span class="pillar-counter-indicator">02 / 05</span>
                  <button class="pillar-arrow-btn next-btn" aria-label="Next Pillar" data-target="3">&#8594;</button>
                </div>
              </div>
            </div>

            <div class="pillar-right-visual">
              <div class="pillar-photo-container">
                <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=85" alt="Orderly and dignified food distribution at community hunger relief hubs" class="pillar-visual-img">
                <div class="pillar-telemetry-overlay">
                  <div class="telemetry-chip">
                    <span class="chip-label">FIXED HUBS</span>
                    <span class="chip-value">5–10 Verified Points</span>
                  </div>
                  <div class="telemetry-chip">
                    <span class="chip-label">TRANSIT WINDOW</span>
                    <span class="chip-value">&lt; 45 Minutes</span>
                  </div>
                  <div class="telemetry-chip">
                    <span class="chip-label">SERVING WARE</span>
                    <span class="chip-value">100% Compostable</span>
                  </div>
                  <div class="telemetry-chip">
                    <span class="chip-label">DAILY CADENCE</span>
                    <span class="chip-value highlight-blue">~822 Meals / Day</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Panel 3: Surplus Recovery -->
        <div class="pillar-panel-view" id="pillar-panel-3" role="tabpanel" aria-labelledby="pillar-tab-3">
          <div class="pillar-showcase-grid">
            <div class="pillar-left-content">
              <div class="pillar-eyebrow-row">
                <span class="pillar-phase-pill">PILLAR 03 // OPERATIONAL STAGE</span>
                <span class="pillar-status-tag tag-orange">ZERO FOOD WASTAGE FLEET</span>
              </div>
              <h3 class="pillar-headline">Safe Commercial Surplus Recovery &amp; Rapid Rescue</h3>
              <p class="pillar-narrative">
                Bridging the tragic paradox between banquet surplus and street starvation. We operate an on-call rapid response rescue network that collects untouched, safe surplus food from banquet halls, corporate cafeterias, and institutional kitchens.
              </p>

              <div class="pillar-bullets-group">
                <h4 class="pillar-bullets-title">Standard Operating Protocols &amp; Guarantees</h4>
                <ul class="pillar-execution-list">
                  <li>
                    <span class="bullet-accent">✦</span>
                    <div>
                      <strong>Organoleptic Safety Testing:</strong> Dedicated volunteer food safety leads inspect aroma, texture, acidity, and temperature prior to intake.
                    </div>
                  </li>
                  <li>
                    <span class="bullet-accent">✦</span>
                    <div>
                      <strong>Rapid 60-Minute Transit Fleet:</strong> Dedicated rescue vehicles reaching verified hunger pockets in under an hour from collection.
                    </div>
                  </li>
                  <li>
                    <span class="bullet-accent">✦</span>
                    <div>
                      <strong>Strict Cold-Chain &amp; Re-heating:</strong> Temperature verification ensuring complete microbiological safety before meal distribution.
                    </div>
                  </li>
                  <li>
                    <span class="bullet-accent">✦</span>
                    <div>
                      <strong>~30+ Tons Annual Waste Prevention:</strong> Diverting pristine edible nutrition from municipal landfills directly to hungry citizens.
                    </div>
                  </li>
                </ul>
              </div>

              <div class="pillar-actions-bar">
                <a href="contact.html?type=food-partner" class="btn-primary-glow btn-shimmer">
                  <span>Register as Food Donor Partner</span>
                  <span>&rarr;</span>
                </a>
                <div class="pillar-controls">
                  <button class="pillar-arrow-btn prev-btn" aria-label="Previous Pillar" data-target="2">&#8592;</button>
                  <span class="pillar-counter-indicator">03 / 05</span>
                  <button class="pillar-arrow-btn next-btn" aria-label="Next Pillar" data-target="4">&#8594;</button>
                </div>
              </div>
            </div>

            <div class="pillar-right-visual">
              <div class="pillar-photo-container">
                <img src="https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?auto=format&fit=crop&w=1200&q=85" alt="Safe packaging and rapid rescue of surplus food from institutional partners" class="pillar-visual-img">
                <div class="pillar-telemetry-overlay">
                  <div class="telemetry-chip">
                    <span class="chip-label">SURPLUS RESCUED</span>
                    <span class="chip-value highlight-orange">~30+ Tons / Year</span>
                  </div>
                  <div class="telemetry-chip">
                    <span class="chip-label">DISPATCH SPEED</span>
                    <span class="chip-value">&lt; 60 Minutes</span>
                  </div>
                  <div class="telemetry-chip">
                    <span class="chip-label">SAFETY CHECK</span>
                    <span class="chip-value">Dual Organoleptic</span>
                  </div>
                  <div class="telemetry-chip">
                    <span class="chip-label">PARTNER NETWORK</span>
                    <span class="chip-value">10–15 Alliances</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Panel 4: Outreach Mapping -->
        <div class="pillar-panel-view" id="pillar-panel-4" role="tabpanel" aria-labelledby="pillar-tab-4">
          <div class="pillar-showcase-grid">
            <div class="pillar-left-content">
              <div class="pillar-eyebrow-row">
                <span class="pillar-phase-pill">PILLAR 04 // OPERATIONAL STAGE</span>
                <span class="pillar-status-tag tag-purple">MICRO-NEED GEOMAPPING</span>
              </div>
              <h3 class="pillar-headline">Beneficiary Mapping &amp; Dignified Doorstep Outreach</h3>
              <p class="pillar-narrative">
                Traditional feeding drives often miss the most vulnerable who cannot walk to central distribution points. We conduct ward-level demographic surveys across Saharanpur and Western UP to identify bedridden seniors, disabled individuals, and street children.
              </p>

              <div class="pillar-bullets-group">
                <h4 class="pillar-bullets-title">Standard Operating Protocols &amp; Guarantees</h4>
                <ul class="pillar-execution-list">
                  <li>
                    <span class="bullet-accent">✦</span>
                    <div>
                      <strong>Ward-Level Vulnerability Audits:</strong> Periodic on-ground mapping covering informal labor settlements, brick kilns, and railway underpasses.
                    </div>
                  </li>
                  <li>
                    <span class="bullet-accent">✦</span>
                    <div>
                      <strong>Doorstep Delivery for Bedridden Citizens:</strong> Direct foot delivery by trained volunteers to elderly and disabled individuals unable to queue.
                    </div>
                  </li>
                  <li>
                    <span class="bullet-accent">✦</span>
                    <div>
                      <strong>Zero Public Exploitation or Profiling:</strong> Strict foundation policy banning intrusive photography or profiling of recipients.
                    </div>
                  </li>
                  <li>
                    <span class="bullet-accent">✦</span>
                    <div>
                      <strong>50–100 Mobilized Local Cadre:</strong> Dedicated community volunteers trained in compassion, first aid, and equitable portioning.
                    </div>
                  </li>
                </ul>
              </div>

              <div class="pillar-actions-bar">
                <a href="volunteer.html" class="btn-primary-glow btn-shimmer">
                  <span>Join the Ground Volunteer Cadre</span>
                  <span>&rarr;</span>
                </a>
                <div class="pillar-controls">
                  <button class="pillar-arrow-btn prev-btn" aria-label="Previous Pillar" data-target="3">&#8592;</button>
                  <span class="pillar-counter-indicator">04 / 05</span>
                  <button class="pillar-arrow-btn next-btn" aria-label="Next Pillar" data-target="5">&#8594;</button>
                </div>
              </div>
            </div>

            <div class="pillar-right-visual">
              <div class="pillar-photo-container">
                <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=85" alt="Compassionate community outreach supporting children and vulnerable families" class="pillar-visual-img">
                <div class="pillar-telemetry-overlay">
                  <div class="telemetry-chip">
                    <span class="chip-label">TARGET POPULATION</span>
                    <span class="chip-value">Destitute &amp; Labor</span>
                  </div>
                  <div class="telemetry-chip">
                    <span class="chip-label">DOORSTEP SERVICE</span>
                    <span class="chip-value">Elderly &amp; Disabled</span>
                  </div>
                  <div class="telemetry-chip">
                    <span class="chip-label">BENEFICIARY RESPECT</span>
                    <span class="chip-value">100% Zero Profiling</span>
                  </div>
                  <div class="telemetry-chip">
                    <span class="chip-label">VOLUNTEER FORCE</span>
                    <span class="chip-value highlight-purple">50–100 Cadre</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Panel 5: CA Auditing -->
        <div class="pillar-panel-view" id="pillar-panel-5" role="tabpanel" aria-labelledby="pillar-tab-5">
          <div class="pillar-showcase-grid">
            <div class="pillar-left-content">
              <div class="pillar-eyebrow-row">
                <span class="pillar-phase-pill">PILLAR 05 // OPERATIONAL STAGE</span>
                <span class="pillar-status-tag tag-emerald">SECTION 8 RADICAL AUDIT</span>
              </div>
              <h3 class="pillar-headline">Physical Reconciliation Registers &amp; Independent CA Audits</h3>
              <p class="pillar-narrative">
                Radical accountability is engineered into every distribution drive. Wholesale raw materials purchased are daily reconciled against the exact weight batch-cooked and matched with physical recipient headcount registers.
              </p>

              <div class="pillar-bullets-group">
                <h4 class="pillar-bullets-title">Standard Operating Protocols &amp; Guarantees</h4>
                <ul class="pillar-execution-list">
                  <li>
                    <span class="bullet-accent">✦</span>
                    <div>
                      <strong>Daily Headcount &amp; Stock Registers:</strong> Physical on-site registers recording raw grain consumption against verified meal distribution counts.
                    </div>
                  </li>
                  <li>
                    <span class="bullet-accent">✦</span>
                    <div>
                      <strong>Independent Chartered Accountant Audits:</strong> Quarterly statutory financial audits verifying 100% legitimate rupee-for-rupee capital deployment.
                    </div>
                  </li>
                  <li>
                    <span class="bullet-accent">✦</span>
                    <div>
                      <strong>Statutory Form 10BE Tax Certificates:</strong> Instant generation of Section 80G tax certificates granting donors 50% income tax deductions.
                    </div>
                  </li>
                  <li>
                    <span class="bullet-accent">✦</span>
                    <div>
                      <strong>Schedule VII Item (i) CSR Compliance:</strong> Pre-cleared corporate CSR reporting complete with utilization certificates and CA signatures.
                    </div>
                  </li>
                </ul>
              </div>

              <div class="pillar-actions-bar">
                <a href="impact.html#budget-allocation" class="btn-primary-glow btn-shimmer">
                  <span>Explore Itemized ₹2 Cr Budget Matrix</span>
                  <span>&rarr;</span>
                </a>
                <div class="pillar-controls">
                  <button class="pillar-arrow-btn prev-btn" aria-label="Previous Pillar" data-target="4">&#8592;</button>
                  <span class="pillar-counter-indicator">05 / 05</span>
                  <button class="pillar-arrow-btn next-btn" aria-label="Next Pillar" data-target="1">&#8594;</button>
                </div>
              </div>
            </div>

            <div class="pillar-right-visual">
              <div class="pillar-photo-container">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85" alt="Audited accounting registers, statutory balance sheets, and fiduciary documentation" class="pillar-visual-img">
                <div class="pillar-telemetry-overlay">
                  <div class="telemetry-chip">
                    <span class="chip-label">ANNUAL BUDGET</span>
                    <span class="chip-value">₹2,00,00,000 (₹2 Cr)</span>
                  </div>
                  <div class="telemetry-chip">
                    <span class="chip-label">UNIT COST</span>
                    <span class="chip-value highlight-emerald">₹66.67 / Meal</span>
                  </div>
                  <div class="telemetry-chip">
                    <span class="chip-label">AUDIT FREQUENCY</span>
                    <span class="chip-value">Quarterly Independent</span>
                  </div>
                  <div class="telemetry-chip">
                    <span class="chip-label">TAX EXEMPTION</span>
                    <span class="chip-value">80G Form 10BE (50%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Supply Chain Flow Ribbon at Bottom -->
      <div class="supply-chain-ribbon">
        <div class="ribbon-title-tag">END-TO-END SUPPLY CHAIN ENGINE</div>
        <div class="ribbon-steps-row">
          <div class="ribbon-step">
            <span class="r-dot"></span>
            <span class="r-txt">Wholesale Mandi Procurement</span>
          </div>
          <span class="ribbon-arrow">&rarr;</span>
          <div class="ribbon-step">
            <span class="r-dot"></span>
            <span class="r-txt">FSSAI Industrial Cooking</span>
          </div>
          <span class="ribbon-arrow">&rarr;</span>
          <div class="ribbon-step">
            <span class="r-dot"></span>
            <span class="r-txt">Thermal Insulated Transit</span>
          </div>
          <span class="ribbon-arrow">&rarr;</span>
          <div class="ribbon-step">
            <span class="r-dot"></span>
            <span class="r-txt">Dignified Street Queuing</span>
          </div>
          <span class="ribbon-arrow">&rarr;</span>
          <div class="ribbon-step">
            <span class="r-dot"></span>
            <span class="r-txt">Daily Physical CA Audit</span>
          </div>
        </div>
      </div>
    </div>
  </section>`;

// Replace old Section 4 with new HTML
const oldSecRegex = /<section class="section-components" id="solution">[\s\S]*?<\/section>/;
if (oldSecRegex.test(indexHtml)) {
  indexHtml = indexHtml.replace(oldSecRegex, newOperatingHtml);
  fs.writeFileSync(indexPath, indexHtml, 'utf8');
  console.log('Successfully replaced Section 4 in index.html');
} else {
  console.error('Could not find old Section 4 in index.html');
}
