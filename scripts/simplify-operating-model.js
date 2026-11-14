const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf8');

const simplifiedOperatingHtml = `  <!-- =========================================================================
       SECTION 4: 5 CORE OPERATING PILLARS (SLIDE 5)
       ========================================================================= -->
  <section class="section-components" id="solution">
    <div class="container">
      <!-- Section Header (Clean & Minimal) -->
      <div class="operating-header-block" style="margin-bottom: 2.25rem;">
        <span class="section-tag-badge emerald">OUR OPERATING MODEL • 5 PILLARS</span>
        <h2 class="section-title" style="margin: 0.75rem 0 0 0;">
          Engineered for <span class="italic-flair">Scale, Hygiene &amp; Dignity.</span>
        </h2>
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

      <!-- Unified Pillar Showcase Stage (Clean & Simple) -->
      <div class="pillars-stage-wrapper">
        <!-- Panel 1: Certified Kitchens -->
        <div class="pillar-panel-view active" id="pillar-panel-1" role="tabpanel" aria-labelledby="pillar-tab-1">
          <div class="pillar-showcase-grid">
            <div class="pillar-left-content">
              <div>
                <div class="pillar-eyebrow-row">
                  <span class="pillar-phase-pill">PILLAR 01</span>
                  <span class="pillar-status-tag tag-green">FSSAI COMPLIANT</span>
                </div>
                <h3 class="pillar-headline">Nutritious Meal Preparation</h3>
                <p class="pillar-narrative">
                  Meals are cooked fresh daily in commercial sanitized kitchens using wholesale grains, fresh vegetables, and protein pulses under strict thermal control.
                </p>

                <div class="pillar-bullets-group">
                  <ul class="pillar-execution-list">
                    <li>
                      <span class="bullet-accent">✦</span>
                      <div><strong>Wholesale Mandi Procurement:</strong> Direct grain and pulse sourcing with batch testing.</div>
                    </li>
                    <li>
                      <span class="bullet-accent">✦</span>
                      <div><strong>Calibrated ~650 kcal Nutrition:</strong> 18g–22g protein, dietary fiber, and seasonal vegetables.</div>
                    </li>
                    <li>
                      <span class="bullet-accent">✦</span>
                      <div><strong>FSSAI Food Hygiene:</strong> Food-grade SS 304 steam kettles, hairnets, and &ge; 75&deg;C cooking logs.</div>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="pillar-actions-bar">
                <a href="programs.html#kitchen-hygiene" class="btn-primary-glow btn-shimmer">
                  <span>Kitchen Protocols</span>
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
                    <span class="chip-label">CAPACITY</span>
                    <span class="chip-value">1,500 Meals/Day</span>
                  </div>
                  <div class="telemetry-chip">
                    <span class="chip-label">COOKING TEMP</span>
                    <span class="chip-value">&ge; 75&deg;C Holding</span>
                  </div>
                  <div class="telemetry-chip">
                    <span class="chip-label">VESSELS</span>
                    <span class="chip-value">SS 304 Food-Grade</span>
                  </div>
                  <div class="telemetry-chip">
                    <span class="chip-label">SAFETY</span>
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
              <div>
                <div class="pillar-eyebrow-row">
                  <span class="pillar-phase-pill">PILLAR 02</span>
                  <span class="pillar-status-tag tag-blue">SCHEDULED TRANSIT</span>
                </div>
                <h3 class="pillar-headline">Street &amp; Community Logistics</h3>
                <p class="pillar-narrative">
                  Fresh meals are dispatched in double-walled insulated containers across 5&ndash;10 fixed relief hubs, providing dependable nourishment for daily wagers and night shelters.
                </p>

                <div class="pillar-bullets-group">
                  <ul class="pillar-execution-list">
                    <li>
                      <span class="bullet-accent">✦</span>
                      <div><strong>Fixed Daily Cadence:</strong> Morning and evening food dispatches 365 days a year without pause.</div>
                    </li>
                    <li>
                      <span class="bullet-accent">✦</span>
                      <div><strong>Insulated Thermal Transit:</strong> Food-grade containers keeping meals above 65&deg;C for over 3 hours.</div>
                    </li>
                    <li>
                      <span class="bullet-accent">✦</span>
                      <div><strong>Orderly Queues &amp; Dignity:</strong> Volunteer marshals and 100% biodegradable leaf plates.</div>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="pillar-actions-bar">
                <a href="programs.html#distribution-model" class="btn-primary-glow btn-shimmer">
                  <span>Distribution Model</span>
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
                    <span class="chip-value">5–10 Points</span>
                  </div>
                  <div class="telemetry-chip">
                    <span class="chip-label">TRANSIT TIME</span>
                    <span class="chip-value">&lt; 45 Minutes</span>
                  </div>
                  <div class="telemetry-chip">
                    <span class="chip-label">PLATES</span>
                    <span class="chip-value">100% Compostable</span>
                  </div>
                  <div class="telemetry-chip">
                    <span class="chip-label">CADENCE</span>
                    <span class="chip-value highlight-blue">~822 Meals/Day</span>
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
              <div>
                <div class="pillar-eyebrow-row">
                  <span class="pillar-phase-pill">PILLAR 03</span>
                  <span class="pillar-status-tag tag-orange">ZERO FOOD WASTE</span>
                </div>
                <h3 class="pillar-headline">Safe Surplus Food Recovery</h3>
                <p class="pillar-narrative">
                  An on-call rapid response rescue network collecting untouched, safe surplus food from banquet halls, corporate cafeterias, and institutional partners.
                </p>

                <div class="pillar-bullets-group">
                  <ul class="pillar-execution-list">
                    <li>
                      <span class="bullet-accent">✦</span>
                      <div><strong>Organoleptic Safety Checks:</strong> Aroma, texture, and temperature testing prior to collection.</div>
                    </li>
                    <li>
                      <span class="bullet-accent">✦</span>
                      <div><strong>Rapid 60-Minute Dispatch:</strong> Dedicated transit fleet reaching hungry citizens in under an hour.</div>
                    </li>
                    <li>
                      <span class="bullet-accent">✦</span>
                      <div><strong>~30+ Tons Rescued Yearly:</strong> Diverting edible food from landfills directly to vulnerable families.</div>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="pillar-actions-bar">
                <a href="contact.html?type=food-partner" class="btn-primary-glow btn-shimmer">
                  <span>Partner With Us</span>
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
                    <span class="chip-value highlight-orange">~30+ Tons/Year</span>
                  </div>
                  <div class="telemetry-chip">
                    <span class="chip-label">SPEED</span>
                    <span class="chip-value">&lt; 60 Minutes</span>
                  </div>
                  <div class="telemetry-chip">
                    <span class="chip-label">CHECKS</span>
                    <span class="chip-value">Organoleptic</span>
                  </div>
                  <div class="telemetry-chip">
                    <span class="chip-label">ALLIANCES</span>
                    <span class="chip-value">10–15 Partners</span>
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
              <div>
                <div class="pillar-eyebrow-row">
                  <span class="pillar-phase-pill">PILLAR 04</span>
                  <span class="pillar-status-tag tag-purple">DOORSTEP OUTREACH</span>
                </div>
                <h3 class="pillar-headline">Need Mapping &amp; Doorstep Aid</h3>
                <p class="pillar-narrative">
                  Conducting ward-level demographic surveys across Saharanpur to identify bedridden seniors, disabled individuals, and street children who cannot reach distribution points.
                </p>

                <div class="pillar-bullets-group">
                  <ul class="pillar-execution-list">
                    <li>
                      <span class="bullet-accent">✦</span>
                      <div><strong>Doorstep Delivery:</strong> Direct volunteer foot delivery to bedridden elderly and disabled citizens.</div>
                    </li>
                    <li>
                      <span class="bullet-accent">✦</span>
                      <div><strong>Zero Public Profiling:</strong> Strict foundation policy protecting recipient dignity and privacy.</div>
                    </li>
                    <li>
                      <span class="bullet-accent">✦</span>
                      <div><strong>50–100 Volunteer Force:</strong> Trained community cadre managing equitable distribution on the ground.</div>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="pillar-actions-bar">
                <a href="volunteer.html" class="btn-primary-glow btn-shimmer">
                  <span>Join Volunteers</span>
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
                    <span class="chip-value">Homeless &amp; Labor</span>
                  </div>
                  <div class="telemetry-chip">
                    <span class="chip-label">DOORSTEP AID</span>
                    <span class="chip-value">Bedridden Seniors</span>
                  </div>
                  <div class="telemetry-chip">
                    <span class="chip-label">DIGNITY</span>
                    <span class="chip-value">Zero Profiling</span>
                  </div>
                  <div class="telemetry-chip">
                    <span class="chip-label">VOLUNTEERS</span>
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
              <div>
                <div class="pillar-eyebrow-row">
                  <span class="pillar-phase-pill">PILLAR 05</span>
                  <span class="pillar-status-tag tag-emerald">100% AUDITED</span>
                </div>
                <h3 class="pillar-headline">Physical Registers &amp; CA Auditing</h3>
                <p class="pillar-narrative">
                  Radical fiduciary accountability: wholesale raw material purchases are daily reconciled against the exact weight cooked and verified against physical recipient headcount logs.
                </p>

                <div class="pillar-bullets-group">
                  <ul class="pillar-execution-list">
                    <li>
                      <span class="bullet-accent">✦</span>
                      <div><strong>Daily Physical Registers:</strong> Stock consumption reconciled against on-site distribution counts.</div>
                    </li>
                    <li>
                      <span class="bullet-accent">✦</span>
                      <div><strong>Independent CA Audits:</strong> Quarterly statutory audits certifying 100% legitimate capital deployment.</div>
                    </li>
                    <li>
                      <span class="bullet-accent">✦</span>
                      <div><strong>Instant 80G Form 10BE:</strong> Direct tax certificates granting donors 50% income tax deductions.</div>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="pillar-actions-bar">
                <a href="impact.html#budget-allocation" class="btn-primary-glow btn-shimmer">
                  <span>View Budget Matrix</span>
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
                    <span class="chip-value">₹2 Cr Deployed</span>
                  </div>
                  <div class="telemetry-chip">
                    <span class="chip-label">UNIT COST</span>
                    <span class="chip-value highlight-emerald">₹66.67 / Meal</span>
                  </div>
                  <div class="telemetry-chip">
                    <span class="chip-label">AUDITS</span>
                    <span class="chip-value">Quarterly CA</span>
                  </div>
                  <div class="telemetry-chip">
                    <span class="chip-label">TAX RELIEF</span>
                    <span class="chip-value">80G Form 10BE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;

const secRegex = /<section class="section-components" id="solution">[\s\S]*?<\/section>/;
if (secRegex.test(indexHtml)) {
  indexHtml = indexHtml.replace(secRegex, simplifiedOperatingHtml);
  fs.writeFileSync(indexPath, indexHtml, 'utf8');
  console.log('Successfully simplified Section 4 in index.html');
} else {
  console.error('Could not find Section 4 in index.html');
}
