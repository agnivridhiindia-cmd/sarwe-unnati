const fs = require('fs');

let html = fs.readFileSync('contact.html', 'utf8');

// 1. Hero Palette
html = html.replace(
  /<div class="section-tag-badge" style="display: inline-flex; align-items: center; gap: 0\.5rem; margin-bottom: 1\.25rem;">[\s\S]*?<\/div>/,
  `<div class="section-tag-badge emerald" style="display: inline-flex; align-items: center; gap: 0.5rem; margin-bottom: 1.25rem;">
          <span class="ticker-dot">✦</span>
          EXECUTIVE ENGAGEMENT • DIRECT ACCESS
        </div>`
);

html = html.replace(
  /<span class="serif-accent" style="font-family: var\(--font-serif\); font-style: italic; color: #F59E0B; font-weight: 400;">Institutional Headquarters\.<\/span>/,
  `<span class="serif-accent" style="font-family: var(--font-serif); font-style: italic; color: #34D399; font-weight: 400;">Institutional Headquarters.</span>`
);

// 2. Section 2: Director Coordinates & Statutory Dossier (De-card into sleek .dossier-clean-grid)
const oldDossierRegex = /<section style="padding: 6rem 0; background: #0F172A;[^>]*" id="statutory-dossier"[\s\S]*?<\/section>/;
const newDossier = `<section style="padding: 6rem 0; background: #FFFFFF; border-top: 1px solid #E2E8F0; border-bottom: 1px solid #E2E8F0;" id="statutory-dossier">
    <div class="container">
      <div style="text-align: center; max-width: 820px; margin: 0 auto 4rem;">
        <span class="section-tag-badge sapphire">STATUTORY CLEARANCE • EXECUTIVE DESK</span>
        <h2 class="section-title">
          Institutional Stewardship &amp; <span class="serif-accent" style="font-family: var(--font-serif); font-style: italic; color: #2563EB; font-weight: 400;">Verification.</span>
        </h2>
        <p class="section-desc" style="margin: 0 auto;">
          Direct communication channels with the Director and verified statutory identifiers registered with the Ministry of Corporate Affairs and CBDT.
        </p>
      </div>

      <div class="dossier-clean-grid">
        <!-- Director Coordinates -->
        <div class="dossier-table-block">
          <div style="padding: 1.5rem 1.75rem; background: #0F172A; color: #FFFFFF; display: flex; justify-content: space-between; align-items: center;">
            <div>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #38BDF8; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; display: block;">FOUNDER &amp; DIRECTOR DESK</span>
              <span style="font-size: 1.35rem; font-weight: 800; color: #FFFFFF; margin-top: 0.2rem; display: block;">Priyesh Garg</span>
            </div>
            <span style="font-family: var(--font-mono); font-size: 0.72rem; color: #34D399; background: rgba(52, 211, 153, 0.15); padding: 0.25rem 0.65rem; border-radius: 999px; border: 1px solid rgba(52, 211, 153, 0.3);">ACTIVE LEADERSHIP</span>
          </div>

          <div class="dossier-row">
            <span class="dossier-row-label">Direct WhatsApp / Mobile</span>
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <a href="tel:+919997426815" class="dossier-row-val" style="color: #059669; font-weight: 800;">+91 99974 26815</a>
              <button type="button" class="btn-copy-chip" data-copy="+919997426815" aria-label="Copy phone number">Copy</button>
            </div>
          </div>

          <div class="dossier-row">
            <span class="dossier-row-label">Executive Email Desk</span>
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <a href="mailto:priyesh.chanu@gmail.com" class="dossier-row-val" style="color: #2563EB;">priyesh.chanu@gmail.com</a>
              <button type="button" class="btn-copy-chip" data-copy="priyesh.chanu@gmail.com" aria-label="Copy email">Copy</button>
            </div>
          </div>

          <div class="dossier-row" style="flex-direction: column; align-items: flex-start; gap: 0.35rem;">
            <span class="dossier-row-label">Registered Headquarters</span>
            <span style="font-size: 0.92rem; color: #334155; line-height: 1.55;">
              House No. 119, Vaishali Vihar, Near Dharia Builder, Delhi Road, Saharanpur — 247001, Uttar Pradesh
            </span>
          </div>

          <div style="padding: 1.25rem 1.75rem; background: #F8FAFC; border-top: 1px solid #E2E8F0; display: flex; gap: 0.75rem;">
            <a href="tel:+919997426815" class="btn-primary-glow btn-sm" style="flex: 1; text-align: center;">Direct Voice Call</a>
            <a href="https://wa.me/919997426815" target="_blank" rel="noopener noreferrer" class="btn-secondary-outline btn-sm" style="flex: 1; text-align: center;">WhatsApp Chat</a>
          </div>
        </div>

        <!-- Statutory Identifiers -->
        <div class="dossier-table-block">
          <div style="padding: 1.5rem 1.75rem; background: #0F172A; color: #FFFFFF; display: flex; justify-content: space-between; align-items: center;">
            <div>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #34D399; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; display: block;">STATUTORY IDENTIFIERS</span>
              <span style="font-size: 1.35rem; font-weight: 800; color: #FFFFFF; margin-top: 0.2rem; display: block;">Fiduciary Clearance</span>
            </div>
            <span style="font-family: var(--font-mono); font-size: 0.72rem; color: #38BDF8; background: rgba(56, 189, 248, 0.15); padding: 0.25rem 0.65rem; border-radius: 999px; border: 1px solid rgba(56, 189, 248, 0.3);">GOVT VERIFIED</span>
          </div>

          <div class="dossier-row">
            <div>
              <span class="dossier-row-label" style="display: block;">CIN (ROC KANPUR)</span>
              <span class="dossier-row-val">U80902UP2018NPL106959</span>
            </div>
            <button type="button" class="btn-copy-chip" data-copy="U80902UP2018NPL106959">Copy</button>
          </div>

          <div class="dossier-row">
            <div>
              <span class="dossier-row-label" style="display: block;">80G TAX EXEMPTION URN</span>
              <span class="dossier-row-val" style="color: #059669;">AAECH6219BF20261</span>
            </div>
            <button type="button" class="btn-copy-chip" data-copy="AAECH6219BF20261">Copy</button>
          </div>

          <div class="dossier-row">
            <div>
              <span class="dossier-row-label" style="display: block;">12A INSTITUTIONAL URN</span>
              <span class="dossier-row-val">AAECH6219BE20251</span>
            </div>
            <button type="button" class="btn-copy-chip" data-copy="AAECH6219BE20251">Copy</button>
          </div>

          <div class="dossier-row">
            <div>
              <span class="dossier-row-label" style="display: block;">NITI AAYOG NGO DARPAN</span>
              <span class="dossier-row-val">UP/2025/0710389</span>
            </div>
            <button type="button" class="btn-copy-chip" data-copy="UP/2025/0710389">Copy</button>
          </div>

          <div style="padding: 1.25rem 1.75rem; background: #F8FAFC; border-top: 1px solid #E2E8F0; display: flex; justify-content: space-between; align-items: center;">
            <span style="font-family: var(--font-mono); font-size: 0.78rem; color: #64748B;">Incorporated: 14 Aug 2018</span>
            <a href="about.html#governance" style="font-family: var(--font-mono); font-size: 0.78rem; color: #2563EB; font-weight: 700;">View Governance Charter &rarr;</a>
          </div>
        </div>
      </div>
    </div>
  </section>`;

html = html.replace(oldDossierRegex, newDossier);

fs.writeFileSync('contact.html', html, 'utf8');
console.log('Successfully de-carded and modernized contact.html!');
