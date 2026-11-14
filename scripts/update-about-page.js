const fs = require('fs');

let html = fs.readFileSync('about.html', 'utf8');

// 1. Hero Title Accent & Badge
html = html.replace(
  /<div class="section-tag-badge" style="display: inline-flex; align-items: center; gap: 0\.5rem; margin-bottom: 1\.25rem;">[\s\S]*?<\/div>/,
  `<div class="section-tag-badge sapphire" style="display: inline-flex; align-items: center; gap: 0.5rem; margin-bottom: 1.25rem;">
          <span class="ticker-dot">✦</span>
          LEGAL CHARTER • SECTION 8 INCORPORATION
        </div>`
);

html = html.replace(
  /<span class="serif-accent" style="font-family: var\(--font-serif\); font-style: italic; color: #F59E0B; font-weight: 400;">Fiduciary Governance\.<\/span>/,
  `<span class="serif-accent" style="font-family: var(--font-serif); font-style: italic; color: #38BDF8; font-weight: 400;">Fiduciary Governance.</span>`
);

// 2. Section 2: Replace 5 bulky cards with .editorial-divided-list
const oldPrinciplesRegex = /<section class="section-components" id="principles"[\s\S]*?<\/section>/;
const newPrinciples = `<section class="section-components" id="principles" style="padding: 6rem 0; background: #FFFFFF; border-bottom: 1px solid #E2E8F0;">
    <div class="container">
      <div style="text-align: center; max-width: 820px; margin: 0 auto 4rem;">
        <span class="section-tag-badge emerald">ETHICAL FOUNDATION • 5 CORE VALUES</span>
        <h2 class="section-title">
          Guiding Principles of <span class="serif-accent" style="font-family: var(--font-serif); font-style: italic; color: #2563EB; font-weight: 400;">Our Relief Cadre.</span>
        </h2>
        <p class="section-desc" style="margin: 0 auto;">
          The foundation operates under five foundational values ensuring every meal is served with unconditional human dignity, strict hygiene, and full fiduciary accountability.
        </p>
      </div>

      <div class="editorial-divided-list">
        <div class="editorial-list-item">
          <div class="editorial-item-num sapphire">01</div>
          <div class="editorial-item-header">
            <h3 class="editorial-item-title">Compassion with Dignity</h3>
            <span class="editorial-item-tag">Non-Judgmental Community Service</span>
          </div>
          <div class="editorial-item-body">
            Treating every beneficiary with unconditional respect. No cameras thrust in faces, no poverty theater—only dignified, warm, and respectful food service to hungry human beings.
          </div>
        </div>

        <div class="editorial-list-item">
          <div class="editorial-item-num emerald">02</div>
          <div class="editorial-item-header">
            <h3 class="editorial-item-title">Radical Transparency</h3>
            <span class="editorial-item-tag">Open Procurement Ledgers</span>
          </div>
          <div class="editorial-item-body">
            Maintaining clear, immutable records of all donor contributions, APMC wholesale procurement invoices, batch cooking manifests, and daily distribution logs available for verification.
          </div>
        </div>

        <div class="editorial-list-item">
          <div class="editorial-item-num saffron">03</div>
          <div class="editorial-item-header">
            <h3 class="editorial-item-title">Fiduciary Accountability</h3>
            <span class="editorial-item-tag">Zero Leakage Governance</span>
          </div>
          <div class="editorial-item-body">
            Ensuring donated capital reaches vulnerable citizens with zero leakage, backed by internal multi-tier signoffs, direct bank settlements, and independent Chartered Accountant statutory audits.
          </div>
        </div>

        <div class="editorial-list-item">
          <div class="editorial-item-num sapphire">04</div>
          <div class="editorial-item-header">
            <h3 class="editorial-item-title">Universal Inclusion</h3>
            <span class="editorial-item-tag">Non-Discriminatory Service</span>
          </div>
          <div class="editorial-item-body">
            Supporting food-insecure families without discrimination based on caste, creed, gender, or religion. Hunger is universal, and our feeding mission is equally universal across all communities.
          </div>
        </div>

        <div class="editorial-list-item">
          <div class="editorial-item-num amber">05</div>
          <div class="editorial-item-header">
            <h3 class="editorial-item-title">Operational Sustainability</h3>
            <span class="editorial-item-tag">365-Day Unbroken Operations</span>
          </div>
          <div class="editorial-item-body">
            Building enduring multi-year institutional alliances with wholesale agricultural mandis, corporate CSR committees under Section 135 Schedule VII, and an active volunteer network to guarantee uninterrupted daily relief.
          </div>
        </div>
      </div>
    </div>
  </section>`;

html = html.replace(oldPrinciplesRegex, newPrinciples);

// 3. Section 3: Leadership & Founder Coordinates (Unbox from heavy dark card)
const oldLeadershipRegex = /<!-- Section 3: Leadership & Founder Profile[\s\S]*?<!-- Section 4: Governance/;
const newLeadership = `<!-- Section 3: Leadership & Founder Profile (Slide 1 & 2) -->
  <section style="padding: 6rem 0; background: #F8FAFC; border-bottom: 1px solid #E2E8F0;">
    <div class="container">
      <div class="dossier-clean-grid">
        <div class="dossier-clean-info">
          <div>
            <span class="section-tag-badge emerald">LEADERSHIP &amp; STEWARDSHIP</span>
            <h2 class="section-title" style="margin-top: 0.75rem;">
              Founded by <span class="serif-accent" style="font-family: var(--font-serif); font-style: italic; color: #2563EB; font-weight: 400;">Priyesh Garg.</span>
            </h2>
          </div>
          <p style="font-size: 1.05rem; line-height: 1.75; color: var(--text-body); margin: 0;">
            Priyesh Garg founded <strong>SARWE UNNATI FOUNDATION</strong> with the conviction that no citizen in a civilized society should endure involuntary starvation. Under his guidance, the organization was formally incorporated under Section 8 of the Companies Act on 14 August 2018 at RoC Kanpur.
          </p>
          <p style="font-size: 0.98rem; line-height: 1.7; color: #64748B; margin: 0;">
            He personally oversees the foundation's wholesale procurement contracts, kitchen food safety protocols, and daily ground dispatches from the registered headquarters in Saharanpur, Uttar Pradesh.
          </p>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 0.5rem;">
            <a href="contact.html" class="btn-primary-glow">Connect with Director &rarr;</a>
            <a href="donate.html#csr-tiers" class="btn-secondary-outline">Corporate CSR Alliances</a>
          </div>
        </div>

        <div>
          <div class="dossier-table-block">
            <div style="padding: 1.5rem 1.75rem; background: #0F172A; color: #FFFFFF; display: flex; justify-content: space-between; align-items: center;">
              <div>
                <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #38BDF8; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; display: block;">EXECUTIVE STEWARDSHIP</span>
                <span style="font-size: 1.25rem; font-weight: 800; color: #FFFFFF; margin-top: 0.2rem; display: block;">Priyesh Garg</span>
              </div>
              <span style="font-family: var(--font-mono); font-size: 0.72rem; color: #34D399; background: rgba(52, 211, 153, 0.15); padding: 0.25rem 0.65rem; border-radius: 999px; border: 1px solid rgba(52, 211, 153, 0.3);">ACTIVE DIRECTOR</span>
            </div>

            <div class="dossier-row">
              <span class="dossier-row-label">Corporate Designation</span>
              <span class="dossier-row-val">Director &amp; Founder</span>
            </div>

            <div class="dossier-row">
              <span class="dossier-row-label">Direct Email</span>
              <a href="mailto:priyesh.chanu@gmail.com" class="dossier-row-val" style="color: #2563EB; text-decoration: underline;">priyesh.chanu@gmail.com</a>
            </div>

            <div class="dossier-row">
              <span class="dossier-row-label">Direct WhatsApp / Phone</span>
              <a href="tel:+919997426815" class="dossier-row-val" style="color: #059669; font-weight: 800;">+91 99974 26815</a>
            </div>

            <div class="dossier-row" style="flex-direction: column; align-items: flex-start; gap: 0.35rem;">
              <span class="dossier-row-label">Registered Headquarters</span>
              <span style="font-size: 0.92rem; color: #334155; line-height: 1.5;">
                House No. 119, Vaishali Vihar, Near Dharia Builder, Delhi Road, Saharanpur — 247001, UP
              </span>
            </div>

            <div style="padding: 1.25rem 1.75rem; background: #F8FAFC; border-top: 1px solid #E2E8F0; display: flex; gap: 0.75rem;">
              <a href="tel:+919997426815" class="btn-primary-glow btn-sm" style="flex: 1; text-align: center;">Direct Voice Call</a>
              <a href="https://wa.me/919997426815" target="_blank" rel="noopener noreferrer" class="btn-secondary-outline btn-sm" style="flex: 1; text-align: center;">WhatsApp Chat</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 4: Governance`;

html = html.replace(oldLeadershipRegex, newLeadership);

// 4. Section 4: Governance (Unbox into clean open statutory ledger)
const oldGovRegex = /<!-- Section 4: Governance & Accountability[\s\S]*?<!-- Section 5: Institutional Call to Action/;
const newGov = `<!-- Section 4: Governance & Accountability (Slide 18) -->
  <section class="section-components" id="governance" style="padding: 6rem 0; background: #0B0F19; color: #FFFFFF; border-bottom: 1px solid rgba(255, 255, 255, 0.08);">
    <div class="container">
      <div style="max-width: 820px; margin-bottom: 3.5rem;">
        <span class="section-tag-badge sapphire">STATUTORY GOVERNANCE • SLIDE 18</span>
        <h2 class="section-title" style="color: #FFFFFF;">
          Governance, Transparency &amp; <span class="serif-accent" style="font-family: var(--font-serif); font-style: italic; color: #38BDF8; font-weight: 400;">Accountability.</span>
        </h2>
        <p class="section-desc" style="color: #94A3B8;">
          Appropriate governance mechanisms guarantee that donated funds are used responsibly, ethically, and in strict statutory compliance under Section 8.
        </p>
      </div>

      <div class="editorial-divided-list" style="border-top-color: rgba(255, 255, 255, 0.12);">
        <div class="editorial-list-item" style="border-bottom-color: rgba(255, 255, 255, 0.12);">
          <div class="editorial-item-num sapphire">O-01</div>
          <div class="editorial-item-header">
            <h3 class="editorial-item-title" style="color: #FFFFFF;">Board Oversight</h3>
            <span class="editorial-item-tag" style="color: #38BDF8;">Quarterly Formal Reviews</span>
          </div>
          <div class="editorial-item-body" style="color: #CBD5E1;">
            Governing body oversight actively reviewing operational meal targets, delivery van routes, and capital expenditure allocations on a quarterly cadence.
          </div>
        </div>

        <div class="editorial-list-item" style="border-bottom-color: rgba(255, 255, 255, 0.12);">
          <div class="editorial-item-num emerald">O-02</div>
          <div class="editorial-item-header">
            <h3 class="editorial-item-title" style="color: #FFFFFF;">Multi-Tier Approvals</h3>
            <span class="editorial-item-tag" style="color: #34D399;">Strict Anti-Leakage Protocol</span>
          </div>
          <div class="editorial-item-body" style="color: #CBD5E1;">
            Dual financial authorization required for any procurement expenditure exceeding defined institutional thresholds, preventing fiscal leakage.
          </div>
        </div>

        <div class="editorial-list-item" style="border-bottom-color: rgba(255, 255, 255, 0.12);">
          <div class="editorial-item-num sapphire">O-03</div>
          <div class="editorial-item-header">
            <h3 class="editorial-item-title" style="color: #FFFFFF;">Dedicated Accounting</h3>
            <span class="editorial-item-tag" style="color: #38BDF8;">Canara Bank Dedicated Account</span>
          </div>
          <div class="editorial-item-body" style="color: #CBD5E1;">
            Segregated expenditure ledgers maintaining line-by-line traceability and banking vouchers for every single rupee donated to the foundation.
          </div>
        </div>

        <div class="editorial-list-item" style="border-bottom-color: rgba(255, 255, 255, 0.12);">
          <div class="editorial-item-num emerald">O-04</div>
          <div class="editorial-item-header">
            <h3 class="editorial-item-title" style="color: #FFFFFF;">Vetted Wholesale Vendors</h3>
            <span class="editorial-item-tag" style="color: #34D399;">Mandatory Tax Invoicing</span>
          </div>
          <div class="editorial-item-body" style="color: #CBD5E1;">
            Wholesale grain and ingredient suppliers verified for GST registration, FSSAI compliance, and fair APMC wholesale pricing standards.
          </div>
        </div>

        <div class="editorial-list-item" style="border-bottom-color: rgba(255, 255, 255, 0.12);">
          <div class="editorial-item-num saffron">O-05</div>
          <div class="editorial-item-header">
            <h3 class="editorial-item-title" style="color: #FFFFFF;">Batch Reconciliation</h3>
            <span class="editorial-item-tag" style="color: #FB923C;">Geotagged Dispatch Logs</span>
          </div>
          <div class="editorial-item-body" style="color: #CBD5E1;">
            Daily physical cross-checking of raw grains purchased against meal batches cooked, steam cauldron portions, and field distribution headcounts.
          </div>
        </div>

        <div class="editorial-list-item" style="border-bottom-color: rgba(255, 255, 255, 0.12);">
          <div class="editorial-item-num amber">O-06</div>
          <div class="editorial-item-header">
            <h3 class="editorial-item-title" style="color: #FFFFFF;">Independent CA Audit</h3>
            <span class="editorial-item-tag" style="color: #FCD34D;">100% Statutory MCA Compliance</span>
          </div>
          <div class="editorial-item-body" style="color: #CBD5E1;">
            Periodic external Chartered Accountant audits, annual MCA ROC filings, and statutory Form 10BD electronic certificate submissions.
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 5: Institutional Call to Action`;

html = html.replace(oldGovRegex, newGov);

fs.writeFileSync('about.html', html, 'utf8');
console.log('Successfully de-carded and modernized about.html!');
