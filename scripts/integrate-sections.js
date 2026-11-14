const fs = require('fs');
const path = require('path');

// 1. Fix Rupee symbol in js/main.js
const mainJsPath = path.join(__dirname, '..', 'js', 'main.js');
let mainCode = fs.readFileSync(mainJsPath, 'utf8');

mainCode = mainCode.replace(
  "if (totalCostDisplay) totalCostDisplay.textContent = '?' + totalCost.toLocaleString('en-IN');",
  "if (totalCostDisplay) totalCostDisplay.textContent = '\\u20B9' + totalCost.toLocaleString('en-IN');"
);
mainCode = mainCode.replace(
  "if (taxReliefDisplay) taxReliefDisplay.textContent = '?' + taxRelief.toLocaleString('en-IN');",
  "if (taxReliefDisplay) taxReliefDisplay.textContent = '\\u20B9' + taxRelief.toLocaleString('en-IN');"
);

fs.writeFileSync(mainJsPath, mainCode, 'utf8');
console.log('Rupee symbols fixed in js/main.js.');

// 2. Add Ground Operations Radar and FAQ Accordion to index.html
const indexHtmlPath = path.join(__dirname, '..', 'index.html');
let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

const radarSectionHtml = `
  <!-- =========================================================================
       SECTION 4B: INTERACTIVE GROUND OPERATIONS RADAR & DISTRIBUTION HUBS
       ========================================================================= -->
  <section class="section-tint-mint" id="ground-radar" style="padding: 6rem 0;">
    <div class="container">
      <div style="text-align: center; max-width: 820px; margin: 0 auto 3rem;">
        <span class="section-tag-vibrant">// FRONTLINE LOGISTICS &bull; REAL-TIME DEPLOYMENT</span>
        <h2 style="font-family: var(--font-display); font-size: clamp(2.2rem, 3.6vw, 3.2rem); font-weight: 800; line-height: 1.15; margin-top: 0.35rem;">
          Ground Relief Radar &amp; Fixed Hubs.
        </h2>
        <p style="font-size: 1rem; color: var(--text-muted); line-height: 1.7;">
          To ensure consistent, dignity-centered meal relief, SARWE UNNATI FOUNDATION establishes disciplined daily distribution nodes across high-vulnerability urban pockets in Western Uttar Pradesh.
        </p>
      </div>

      <div class="radar-hub-container">
        <!-- Left: Hub Selector Nav -->
        <div class="radar-hubs-nav">
          <button type="button" class="hub-radar-btn active" data-hub="hub-court-road">
            <div class="hub-btn-left">
              <span class="hub-pin"></span>
              <div>
                <div class="hub-title">Court Road &amp; Labor Chowk</div>
                <div style="font-size: 0.8rem; color: var(--text-muted);">Central Saharanpur</div>
              </div>
            </div>
            <span class="hub-count-tag">250 Meals/Day</span>
          </button>

          <button type="button" class="hub-radar-btn" data-hub="hub-railway">
            <div class="hub-btn-left">
              <span class="hub-pin"></span>
              <div>
                <div class="hub-title">Saharanpur Junction &amp; Shelters</div>
                <div style="font-size: 0.8rem; color: var(--text-muted);">Railway Road &amp; Rain Basera</div>
              </div>
            </div>
            <span class="hub-count-tag">200 Meals/Day</span>
          </button>

          <button type="button" class="hub-radar-btn" data-hub="hub-industrial">
            <div class="hub-btn-left">
              <span class="hub-pin"></span>
              <div>
                <div class="hub-title">Delhi Road &amp; Industrial Corridor</div>
                <div style="font-size: 0.8rem; color: var(--text-muted);">Construction &amp; Migrant Clusters</div>
              </div>
            </div>
            <span class="hub-count-tag">175 Meals/Day</span>
          </button>

          <button type="button" class="hub-radar-btn" data-hub="hub-slums">
            <div class="hub-btn-left">
              <span class="hub-pin"></span>
              <div>
                <div class="hub-title">Old City Vulnerable Settlements</div>
                <div style="font-size: 0.8rem; color: var(--text-muted);">Chilkana Road &amp; Slum Wards</div>
              </div>
            </div>
            <span class="hub-count-tag">125 Meals/Day</span>
          </button>

          <button type="button" class="hub-radar-btn" data-hub="hub-hospital">
            <div class="hub-btn-left">
              <span class="hub-pin"></span>
              <div>
                <div class="hub-title">District Civil Hospital Outside Line</div>
                <div style="font-size: 0.8rem; color: var(--text-muted);">Indigent Patient Attendants</div>
              </div>
            </div>
            <span class="hub-count-tag">72 Meals/Day</span>
          </button>
        </div>

        <!-- Right: Hub Detail Card Views -->
        <div>
          <!-- Card 1 -->
          <div class="hub-detail-card active" data-hub="hub-court-road">
            <div class="hub-card-header">
              <div>
                <span class="hub-badge">PRIMARY LABOR HUB</span>
                <h3 style="font-family: var(--font-display); font-size: 1.6rem; font-weight: 800; margin-top: 0.5rem; color: var(--text-dark);">
                  Court Road &amp; Daily Labor Chowk
                </h3>
              </div>
              <span style="font-family: var(--font-mono); font-size: 1.25rem; font-weight: 800; color: #2563EB;">HUB #01</span>
            </div>
            <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.7;">
              Every morning from 7:00 AM, hundreds of unorganized daily wagers, rickshaw pullers, and casual laborers gather hoping for construction work. Our mobile relief van serves hot, protein-rich breakfast thalis directly at the chowk before their shifts begin.
            </p>
            <div class="hub-stats-grid">
              <div class="hub-stat-item">
                <div class="hub-stat-val">250</div>
                <div class="hub-stat-label">Daily Capacity</div>
              </div>
              <div class="hub-stat-item">
                <div class="hub-stat-val">07:30 AM</div>
                <div class="hub-stat-label">Dispatch Schedule</div>
              </div>
              <div class="hub-stat-item">
                <div class="hub-stat-val">100%</div>
                <div class="hub-stat-label">Hot Insulated Pots</div>
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: 0.75rem; font-size: 0.88rem; color: #047857; background: #ECFDF5; padding: 0.85rem 1.25rem; border-radius: 10px;">
              <span>✓</span>
              <span>Orderly queue system deployed with compostable food-grade leaf trays and drinking water refills.</span>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="hub-detail-card" data-hub="hub-railway">
            <div class="hub-card-header">
              <div>
                <span class="hub-badge" style="background:#FEF3C7; color:#B45309;">NIGHT SHELTER HUB</span>
                <h3 style="font-family: var(--font-display); font-size: 1.6rem; font-weight: 800; margin-top: 0.5rem; color: var(--text-dark);">
                  Saharanpur Junction &amp; Rain Basera
                </h3>
              </div>
              <span style="font-family: var(--font-mono); font-size: 1.25rem; font-weight: 800; color: #F59E0B;">HUB #02</span>
            </div>
            <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.7;">
              Station platforms, underpasses, and municipal night shelters host abandoned elderly individuals, runaway children, and destitute travelers with zero economic support. Warm evening meals are distributed with dignified seating.
            </p>
            <div class="hub-stats-grid">
              <div class="hub-stat-item">
                <div class="hub-stat-val">200</div>
                <div class="hub-stat-label">Daily Capacity</div>
              </div>
              <div class="hub-stat-item">
                <div class="hub-stat-val">07:00 PM</div>
                <div class="hub-stat-label">Evening Service</div>
              </div>
              <div class="hub-stat-item">
                <div class="hub-stat-val">FSSAI</div>
                <div class="hub-stat-label">Hygiene Audited</div>
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: 0.75rem; font-size: 0.88rem; color: #B45309; background: #FFFBEB; padding: 0.85rem 1.25rem; border-radius: 10px;">
              <span>✓</span>
              <span>Specialized soft food portions prepared for destitute senior citizens and toothless elderly.</span>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="hub-detail-card" data-hub="hub-industrial">
            <div class="hub-card-header">
              <div>
                <span class="hub-badge" style="background:#EDE9FE; color:#7C3AED;">MIGRANT FAMILY HUB</span>
                <h3 style="font-family: var(--font-display); font-size: 1.6rem; font-weight: 800; margin-top: 0.5rem; color: var(--text-dark);">
                  Delhi Road &amp; Industrial Corridor
                </h3>
              </div>
              <span style="font-family: var(--font-mono); font-size: 1.25rem; font-weight: 800; color: #7C3AED;">HUB #03</span>
            </div>
            <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.7;">
              Temporary settlements of interstate migrant families working in wood carving, brick kilns, and industrial packaging. Children and nursing mothers in these settlements are prioritized for milk, eggs, and fortified lentils.
            </p>
            <div class="hub-stats-grid">
              <div class="hub-stat-item">
                <div class="hub-stat-val">175</div>
                <div class="hub-stat-label">Daily Capacity</div>
              </div>
              <div class="hub-stat-item">
                <div class="hub-stat-val">01:00 PM</div>
                <div class="hub-stat-label">Mid-day Lunch</div>
              </div>
              <div class="hub-stat-item">
                <div class="hub-stat-val">~650 kcal</div>
                <div class="hub-stat-label">Caloric Target</div>
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: 0.75rem; font-size: 0.88rem; color: #7C3AED; background: #FAF5FF; padding: 0.85rem 1.25rem; border-radius: 10px;">
              <span>✓</span>
              <span>Fortified with seasonal fruits and iron-rich jaggery for growing children.</span>
            </div>
          </div>

          <!-- Card 4 -->
          <div class="hub-detail-card" data-hub="hub-slums">
            <div class="hub-card-header">
              <div>
                <span class="hub-badge" style="background:#FEE2E2; color:#B91C1C;">DESTITUTE CARE HUB</span>
                <h3 style="font-family: var(--font-display); font-size: 1.6rem; font-weight: 800; margin-top: 0.5rem; color: var(--text-dark);">
                  Old City Vulnerable Settlements
                </h3>
              </div>
              <span style="font-family: var(--font-mono); font-size: 1.25rem; font-weight: 800; color: #EF4444;">HUB #04</span>
            </div>
            <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.7;">
              Narrow alleys and underserved municipal wards where marginalized families face extreme food insecurity. Ground volunteers identify bedridden and disabled residents for direct doorstep delivery.
            </p>
            <div class="hub-stats-grid">
              <div class="hub-stat-item">
                <div class="hub-stat-val">125</div>
                <div class="hub-stat-label">Daily Capacity</div>
              </div>
              <div class="hub-stat-item">
                <div class="hub-stat-val">12:30 PM</div>
                <div class="hub-stat-label">Doorstep Delivery</div>
              </div>
              <div class="hub-stat-item">
                <div class="hub-stat-val">Zero Waste</div>
                <div class="hub-stat-label">Clean Utensils</div>
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: 0.75rem; font-size: 0.88rem; color: #B91C1C; background: #FEF2F2; padding: 0.85rem 1.25rem; border-radius: 10px;">
              <span>✓</span>
              <span>Confidentiality and human dignity maintained with zero public display of poverty.</span>
            </div>
          </div>

          <!-- Card 5 -->
          <div class="hub-detail-card" data-hub="hub-hospital">
            <div class="hub-card-header">
              <div>
                <span class="hub-badge" style="background:#E0F2FE; color:#0369A1;">HOSPITAL RELIEF HUB</span>
                <h3 style="font-family: var(--font-display); font-size: 1.6rem; font-weight: 800; margin-top: 0.5rem; color: var(--text-dark);">
                  District Civil Hospital Outside Line
                </h3>
              </div>
              <span style="font-family: var(--font-mono); font-size: 1.25rem; font-weight: 800; color: #0284C7;">HUB #05</span>
            </div>
            <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.7;">
              Impoverished families traveling from rural villages spend their entire savings on patient medicine, frequently going hungry for days outside emergency wards. Nutritious warm meals are distributed to patient caretakers.
            </p>
            <div class="hub-stats-grid">
              <div class="hub-stat-item">
                <div class="hub-stat-val">72</div>
                <div class="hub-stat-label">Daily Capacity</div>
              </div>
              <div class="hub-stat-item">
                <div class="hub-stat-val">08:00 PM</div>
                <div class="hub-stat-label">Night Meal Service</div>
              </div>
              <div class="hub-stat-item">
                <div class="hub-stat-val">100%</div>
                <div class="hub-stat-label">Fresh Prepared</div>
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: 0.75rem; font-size: 0.88rem; color: #0369A1; background: #F0F9FF; padding: 0.85rem 1.25rem; border-radius: 10px;">
              <span>✓</span>
              <span>Ensuring caretakers have the physical strength to tend to their hospitalized family members.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

const faqSectionHtml = `
  <!-- =========================================================================
       SECTION 8B: FREQUENTLY ASKED QUESTIONS & DONOR CONFIDENCE MATRIX
       ========================================================================= -->
  <section class="section-white-intro" id="faq-section" style="padding: 6rem 0;">
    <div class="container">
      <div style="text-align: center; max-width: 800px; margin: 0 auto 3rem;">
        <span class="section-tag-vibrant">// DONOR ASSURANCE &bull; STATUTORY FAQ</span>
        <h2 style="font-family: var(--font-display); font-size: clamp(2.2rem, 3.6vw, 3.2rem); font-weight: 800; line-height: 1.15; margin-top: 0.35rem;">
          Frequently Asked Questions.
        </h2>
        <p style="font-size: 1rem; color: var(--text-muted); line-height: 1.7;">
          Everything you need to know about our 80G tax benefits, FSSAI kitchen audits, Schedule VII CSR compliance, and how your donation feeds hungry citizens.
        </p>
      </div>

      <div class="faq-accordion-wrap">
        <!-- FAQ 1 -->
        <div class="faq-accordion-item active">
          <button type="button" class="faq-question-btn" aria-expanded="true">
            <span>How does the Section 80G 50% tax deduction work for donors?</span>
            <span class="faq-icon-rotator">+</span>
          </button>
          <div class="faq-answer-panel">
            SARWE UNNATI FOUNDATION holds valid Section 80G registration from the Income Tax Department (URN: <strong>AAECH6219BF20261</strong>). Both individual Indian tax filers and corporate entities are legally entitled to claim a <strong>50% deduction</strong> on their qualifying contribution under Section 80G of the Income Tax Act. Upon confirming your wire transfer, our finance team issues the official Form 10BE tax certificate with digital seal.
          </div>
        </div>

        <!-- FAQ 2 -->
        <div class="faq-accordion-item">
          <button type="button" class="faq-question-btn" aria-expanded="false">
            <span>What standards ensure food safety and preparation hygiene?</span>
            <span class="faq-icon-rotator">+</span>
          </button>
          <div class="faq-answer-panel">
            All relief meals are cooked in commercial-grade, sanitized kitchens adhering strictly to FSSAI (Food Safety and Standards Authority of India) food handling regulations. Cooks and volunteers wear food-grade aprons, hairnets, and gloves. High-grade stainless steel cooking vessels and certified pure drinking water are used for every batch.
          </div>
        </div>

        <!-- FAQ 3 -->
        <div class="faq-accordion-item">
          <button type="button" class="faq-question-btn" aria-expanded="false">
            <span>Can corporate CSR committees inspect kitchens and audit field drives?</span>
            <span class="faq-icon-rotator">+</span>
          </button>
          <div class="faq-answer-panel">
            Yes, absolutely. We operate a 100% open-door policy for corporate CSR delegates, institutional donors, and philanthropic evaluators. You are welcome to inspect our preparation centers, review raw material purchase ledgers, and accompany our teams during scheduled field meal distribution drives in Saharanpur and Western UP.
          </div>
        </div>

        <!-- FAQ 4 -->
        <div class="faq-accordion-item">
          <button type="button" class="faq-question-btn" aria-expanded="false">
            <span>How is the unit economics of ₹66.67 per meal calculated?</span>
            <span class="faq-icon-rotator">+</span>
          </button>
          <div class="faq-answer-panel">
            Our ₹2.00 Crore annual budget feeds 3,00,000 wholesome meals over 365 days (~822 meals daily). At ₹66.67 per meal, approximately <strong>55% (₹36.67)</strong> covers wholesale grains, lentils, fresh seasonal vegetables, and spices; <strong>20% (₹13.33)</strong> covers compostable leaf packaging and transport logistics; <strong>16% (₹10.67)</strong> covers kitchen staff wages and utilities; and <strong>9% (₹6.00)</strong> covers statutory audit, insurance, and emergency buffer.
          </div>
        </div>

        <!-- FAQ 5 -->
        <div class="faq-accordion-item">
          <button type="button" class="faq-question-btn" aria-expanded="false">
            <span>Can I sponsor a full day of food relief across the foundation?</span>
            <span class="faq-icon-rotator">+</span>
          </button>
          <div class="faq-answer-panel">
            Yes. Our popular <strong>"Sponsor a Day"</strong> initiative allows donors to fund an entire day of operations (822 meals) for <strong>₹54,795</strong>. Many donors sponsor a day to commemorate birthdays, anniversaries, or corporate milestones. You receive dedicated photographic documentation and an audited daily distribution summary report.
          </div>
        </div>

        <!-- FAQ 6 -->
        <div class="faq-accordion-item">
          <button type="button" class="faq-question-btn" aria-expanded="false">
            <span>What statutory non-profit registrations does Sarwe Unnati Foundation hold?</span>
            <span class="faq-icon-rotator">+</span>
          </button>
          <div class="faq-answer-panel">
            Sarwe Unnati Foundation is incorporated under Section 8 of the Companies Act, 2013 (CIN: <strong>U80902UP2018NPL106959</strong>, RoC Kanpur, Estd. Aug 14, 2018). We hold NGO Darpan registration (<strong>UP/2025/0710389</strong>), Section 12A tax exemption (URN: <strong>AAECH6219BE20251</strong>), Section 80G approval (URN: <strong>AAECH6219BF20261</strong>), and a verified Current Account with Canara Bank (IFSC: <strong>CNRB0002201</strong>).
          </div>
        </div>
      </div>
    </div>
  </section>
`;

// Insert Radar section right before SECTION 5
if (!indexHtml.includes('id="ground-radar"')) {
  indexHtml = indexHtml.replace(
    '<!-- =========================================================================\n       SECTION 5: ANNUAL IMPACT TARGETS',
    radarSectionHtml + '\n  <!-- =========================================================================\n       SECTION 5: ANNUAL IMPACT TARGETS'
  );
  console.log('Ground Radar section inserted into index.html.');
}

// Insert FAQ section right before SECTION 9
if (!indexHtml.includes('id="faq-section"')) {
  indexHtml = indexHtml.replace(
    '<!-- =========================================================================\n       SECTION 9: DIRECT CANARA BANK WIRE',
    faqSectionHtml + '\n  <!-- =========================================================================\n       SECTION 9: DIRECT CANARA BANK WIRE'
  );
  console.log('FAQ section inserted into index.html.');
}

fs.writeFileSync(indexHtmlPath, indexHtml, 'utf8');
console.log('index.html updated successfully!');
