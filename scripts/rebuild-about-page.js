const fs = require('fs');

const aboutHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Institutional Charter & Governance | Sarwe Unnati Foundation</title>
  <meta name="description" content="Read the statutory charter, Section 8 incorporation credentials, 5 core values, and governance architecture of Sarwe Unnati Foundation.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,400;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,600;0,9..40,700;0,9..40,800;1,9..40,400;1,9..40,700&family=IBM+Plex+Mono:wght@400;500;600;700&family=Instrument+Serif:ital@1&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css?v=20261113_v7">
</head>
<body class="bg-warm-surface text-warm-charcoal antialiased selection:bg-brand-amber selection:text-white">

  <!-- Scroll Progress Indicator -->
  <div class="scroll-progress-container" aria-hidden="true">
    <div class="scroll-progress-bar" id="scroll-progress-bar"></div>
  </div>

  <!-- Floating Frosted Navigation Header -->
  <header class="site-header" id="site-header">
    <div class="header-inner container">
      <a href="index.html" class="header-brand" aria-label="Sarwe Unnati Foundation Home">
        <span class="brand-emblem-seal">
          <svg viewBox="0 0 40 40" width="28" height="28" aria-hidden="true">
            <circle cx="20" cy="20" r="18" fill="none" stroke="#F59E0B" stroke-width="1.75"/>
            <circle cx="20" cy="20" r="14" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
            <path d="M20 5 C24 14, 31 16, 35 20 C31 24, 24 26, 20 35 C16 26, 9 24, 5 20 C9 16, 16 14, 20 5 Z" fill="url(#headerSunGlow)"/>
            <circle cx="20" cy="20" r="4.5" fill="#FFFFFF"/>
            <defs>
              <linearGradient id="headerSunGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#EA580C"/>
                <stop offset="100%" stop-color="#F59E0B"/>
              </linearGradient>
            </defs>
          </svg>
        </span>
        <div class="brand-text-col">
          <span class="brand-main-title">SARWE UNNATI</span>
          <span class="brand-sub-tag">FOUNDATION • SECTION 8 NGO</span>
        </div>
      </a>

      <nav class="nav-desktop-links" aria-label="Primary Navigation">
        <a href="index.html" class="nav-item">Flagship Home</a>
        <a href="about.html" class="nav-item active">Charter</a>
        <a href="programs.html" class="nav-item">Food Relief</a>
        <a href="impact.html" class="nav-item">Impact &amp; Budget</a>
        <a href="volunteer.html" class="nav-item">Volunteers</a>
        <a href="contact.html" class="nav-item">Contact</a>
      </nav>

      <div class="header-cta-group">
        <a href="donate.html" class="btn-primary-glow btn-sm">Donate &amp; CSR</a>
        <button type="button" class="hamburger-btn" id="mobile-menu-btn" aria-label="Toggle navigation drawer" aria-expanded="false" aria-controls="mobile-drawer">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>
    </div>
  </header>

  <!-- Mobile Off-Canvas Drawer -->
  <div class="mobile-nav-drawer" id="mobile-drawer" aria-hidden="true">
    <div class="drawer-header">
      <div class="brand-text-col">
        <span class="brand-main-title" style="color: #FFFFFF;">SARWE UNNATI</span>
        <span class="brand-sub-tag" style="color: #F59E0B;">GOVERNMENT CERTIFIED SECTION 8</span>
      </div>
      <button type="button" class="drawer-close-btn" id="drawer-close-btn" aria-label="Close navigation drawer">
        &times;
      </button>
    </div>

    <div class="drawer-links-list">
      <a href="index.html" class="drawer-link">Flagship Overview</a>
      <a href="about.html" class="drawer-link active">Institutional Charter</a>
      <a href="programs.html" class="drawer-link">Food Relief Model</a>
      <a href="impact.html" class="drawer-link">Impact &amp; Budget</a>
      <a href="donate.html" class="drawer-link">CSR Alliances &amp; 80G Donate</a>
      <a href="volunteer.html" class="drawer-link">Volunteer Ground Cadre</a>
      <a href="contact.html" class="drawer-link">Founder &amp; Headquarters</a>
    </div>

    <div>
      <a href="donate.html#bank-wire" class="btn-primary-glow" style="width: 100%;">
        Direct Canara Bank Wire [80G]
      </a>
      <div style="font-family: var(--font-mono); font-size: 0.72rem; color: #A8A29E; text-align: center; margin-top: 1rem;">
        CIN: U80902UP2018NPL106959 | 80G URN: AAECH6219BF20261
      </div>
    </div>
  </div>

  <!-- Section 1: About Page Hero -->
  <section class="page-hero-banner" id="hero-section">
    <div class="page-hero-grid-pattern"></div>
    <div class="page-hero-ambient-glow"></div>

    <div class="container" style="position: relative; z-index: 2; width: 100%;">
      <div style="max-width: 880px; margin: 0 auto; text-align: center;">
        <div class="section-tag-badge" style="display: inline-flex; align-items: center; gap: 0.5rem; margin-bottom: 1.25rem;">
          <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #F59E0B;"></span>
          LEGAL CHARTER • SECTION 8 INCORPORATION
        </div>

        <h1 class="hero-title" style="color: #FFFFFF; font-size: clamp(2.35rem, 4.5vw, 3.85rem); line-height: 1.12; font-weight: 800; margin-bottom: 1.25rem;">
          Institutional Charter &amp; <span class="serif-accent" style="font-family: var(--font-serif); font-style: italic; color: #F59E0B; font-weight: 400;">Fiduciary Governance.</span>
        </h1>

        <p class="hero-desc" style="color: #CBD5E1; font-size: clamp(1.05rem, 1.8vw, 1.2rem); line-height: 1.65; max-width: 760px; margin: 0 auto 2.25rem;">
          Incorporated under Section 8 of the Companies Act, 2013 at RoC Kanpur. Dedicated to hunger alleviation with legal transparency, fiduciary discipline, and zero private profit.
        </p>

        <div class="hero-button-group" style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <a href="#principles" class="btn-primary-glow">
            Explore 5 Core Principles ↓
          </a>
          <a href="#governance" class="btn-secondary-outline">
            Statutory Governance Matrix &rarr;
          </a>
        </div>

        <!-- Metric Telemetry Ribbon -->
        <div class="hero-metric-ribbon">
          <div class="hero-metric-item">
            <span class="hero-metric-val emerald">14 Aug 2018</span>
            <span class="hero-metric-label">Incorporation Date</span>
            <span class="hero-metric-sub">RoC Kanpur Certified</span>
          </div>
          <div class="hero-metric-divider"></div>
          <div class="hero-metric-item">
            <span class="hero-metric-val orange">Section 8</span>
            <span class="hero-metric-label">Corporate Status</span>
            <span class="hero-metric-sub">Zero Private Profit Entity</span>
          </div>
          <div class="hero-metric-divider"></div>
          <div class="hero-metric-item">
            <span class="hero-metric-val blue">80G &amp; 12A</span>
            <span class="hero-metric-label">Tax Exemption</span>
            <span class="hero-metric-sub">CBDT Income Tax Exemption</span>
          </div>
          <div class="hero-metric-divider"></div>
          <div class="hero-metric-item">
            <span class="hero-metric-val">100%</span>
            <span class="hero-metric-label">Audit Compliance</span>
            <span class="hero-metric-sub">Annual MCA &amp; ROC Filings</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 2: 5 Core Ethical Principles (Slide 3) -->
  <section class="section-components" id="principles" style="padding: 6rem 0; background: #FAFAF9;">
    <div class="container">
      <div style="text-align: center; max-width: 820px; margin: 0 auto 3.5rem;">
        <span class="section-tag-badge emerald">ETHICAL FOUNDATION • 5 CORE VALUES</span>
        <h2 class="section-title">
          Guiding Principles of <span class="serif-accent" style="font-family: var(--font-serif); font-style: italic; color: #EA580C; font-weight: 400;">Our Relief Cadre.</span>
        </h2>
        <p class="section-desc" style="margin: 0 auto;">
          The foundation operates under five foundational values ensuring every meal is served with unconditional human dignity, strict hygiene, and full fiduciary accountability.
        </p>
      </div>

      <div class="beneficiary-bento">
        <div class="beneficiary-card">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
              <span class="beneficiary-index">VALUE 01</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B45309" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            </div>
            <h3 class="beneficiary-title">Compassion with Dignity</h3>
            <p class="beneficiary-desc">
              Treating every beneficiary with unconditional respect. No cameras thrust in faces, no poverty theater—only dignified, warm, and respectful food service.
            </p>
          </div>
          <div style="margin-top: 1.5rem; font-family: var(--font-mono); font-size: 0.78rem; color: #B45309; font-weight: 700;">
            Non-Judgmental Community Service
          </div>
        </div>

        <div class="beneficiary-card">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
              <span class="beneficiary-index">VALUE 02</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B45309" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </div>
            <h3 class="beneficiary-title">Radical Transparency</h3>
            <p class="beneficiary-desc">
              Maintaining clear, immutable records of all donor contributions, APMC wholesale procurement invoices, batch cooking manifests, and daily distribution logs.
            </p>
          </div>
          <div style="margin-top: 1.5rem; font-family: var(--font-mono); font-size: 0.78rem; color: #B45309; font-weight: 700;">
            Open Procurement Ledgers
          </div>
        </div>

        <div class="beneficiary-card">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
              <span class="beneficiary-index">VALUE 03</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B45309" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>
            </div>
            <h3 class="beneficiary-title">Fiduciary Accountability</h3>
            <p class="beneficiary-desc">
              Ensuring donated capital reaches vulnerable citizens with zero leakage, backed by internal multi-tier signoffs and independent Chartered Accountant statutory audits.
            </p>
          </div>
          <div style="margin-top: 1.5rem; font-family: var(--font-mono); font-size: 0.78rem; color: #B45309; font-weight: 700;">
            Zero Leakage Governance
          </div>
        </div>

        <div class="beneficiary-card">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
              <span class="beneficiary-index">VALUE 04</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B45309" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h3 class="beneficiary-title">Universal Inclusion</h3>
            <p class="beneficiary-desc">
              Supporting food-insecure families without discrimination based on caste, creed, gender, or religion. Hunger is universal, and our feeding mission is equally universal.
            </p>
          </div>
          <div style="margin-top: 1.5rem; font-family: var(--font-mono); font-size: 0.78rem; color: #B45309; font-weight: 700;">
            Non-Discriminatory Service
          </div>
        </div>

        <div class="beneficiary-card span-2">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
              <span class="beneficiary-index">VALUE 05 • LONG-TERM RESILIENCE</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FDE68A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <h3 class="beneficiary-title" style="font-size: 1.55rem;">Operational &amp; Financial Sustainability</h3>
            <p class="beneficiary-desc">
              Building enduring multi-year institutional alliances with wholesale agricultural mandis, corporate CSR committees under Section 135 Schedule VII, and an active volunteer network to guarantee uninterrupted daily relief across 365 days a year.
            </p>
          </div>
          <div style="margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px solid rgba(255, 255, 255, 0.12); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
            <span style="font-family: var(--font-mono); font-size: 0.8rem; color: #FDE68A;">365-Day Unbroken Operations</span>
            <span style="font-family: var(--font-mono); font-size: 0.8rem; color: #4ADE80; font-weight: 700;">Section 135 CSR Ready</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 3: Leadership & Founder Profile (Slide 1 & 2) -->
  <section style="padding: 6rem 0; background: #FFFFFF; border-top: 1px solid var(--border-subtle); border-bottom: 1px solid var(--border-subtle);">
    <div class="container">
      <div class="problem-split-grid">
        <div>
          <span class="section-tag-badge">LEADERSHIP &amp; STEWARDSHIP</span>
          <h2 class="section-title">
            Founded by <span class="serif-accent" style="font-family: var(--font-serif); font-style: italic; color: #EA580C; font-weight: 400;">Priyesh Garg.</span>
          </h2>
          <p style="font-size: 1.05rem; line-height: 1.75; color: var(--text-body); margin-bottom: 1.5rem;">
            Priyesh Garg founded <strong>SARWE UNNATI FOUNDATION</strong> with the conviction that no citizen in a civilized society should endure involuntary starvation. Under his guidance, the organization was formally incorporated under Section 8 of the Companies Act on 14 August 2018 at RoC Kanpur.
          </p>
          <p style="font-size: 1rem; line-height: 1.7; color: var(--text-muted); margin-bottom: 2rem;">
            He personally oversees the foundation's wholesale procurement contracts, kitchen food safety protocols, and daily ground dispatches from the registered headquarters in Saharanpur, Uttar Pradesh.
          </p>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="contact.html" class="btn-primary-glow">Connect with Director &rarr;</a>
            <a href="donate.html#csr-tiers" class="btn-secondary-outline">Corporate CSR Alliances</a>
          </div>
        </div>

        <div>
          <div class="passbook-terminal-card" style="background: #1C1917; border: 1.5px solid rgba(255, 255, 255, 0.14); border-radius: 20px; padding: 2.5rem; color: #FFFFFF; box-shadow: 0 20px 45px -10px rgba(0, 0, 0, 0.5);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; border-bottom: 1px dashed rgba(255, 255, 255, 0.15); padding-bottom: 1rem;">
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #F59E0B; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em;">EXECUTIVE COORDINATES</span>
              <span style="font-family: var(--font-mono); font-size: 0.72rem; color: #4ADE80; background: rgba(74, 222, 128, 0.15); padding: 0.2rem 0.6rem; border-radius: 999px;">ACTIVE DIRECTOR</span>
            </div>

            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div>
                <span style="font-family: var(--font-mono); font-size: 0.72rem; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 0.2rem;">DIRECTOR &amp; FOUNDER</span>
                <span style="font-size: 1.25rem; font-weight: 800; color: #FFFFFF;">Priyesh Garg</span>
              </div>

              <div>
                <span style="font-family: var(--font-mono); font-size: 0.72rem; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 0.2rem;">DIRECT EMAIL DESK</span>
                <a href="mailto:priyesh.chanu@gmail.com" style="font-family: var(--font-mono); font-size: 1.05rem; color: #FDBA74; font-weight: 700; text-decoration: underline;">priyesh.chanu@gmail.com</a>
              </div>

              <div>
                <span style="font-family: var(--font-mono); font-size: 0.72rem; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 0.2rem;">DIRECT PHONE &amp; WHATSAPP</span>
                <a href="tel:+919997426815" style="font-family: var(--font-mono); font-size: 1.15rem; color: #4ADE80; font-weight: 800;">+91 99974 26815</a>
              </div>

              <div>
                <span style="font-family: var(--font-mono); font-size: 0.72rem; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 0.2rem;">HEADQUARTERS LOCATION</span>
                <span style="font-size: 0.92rem; color: #E2E8F0; line-height: 1.55;">
                  House No. 119, Vaishali Vihar, Near Dharia Builder, Delhi Road, Saharanpur — 247001, UP
                </span>
              </div>
            </div>

            <div style="margin-top: 1.75rem; padding-top: 1.25rem; border-top: 1px dashed rgba(255, 255, 255, 0.12); display: flex; gap: 0.75rem;">
              <a href="tel:+919997426815" class="btn-primary-glow btn-sm" style="flex: 1; text-align: center;">Call Director</a>
              <a href="mailto:priyesh.chanu@gmail.com" class="btn-secondary-outline btn-sm" style="flex: 1; text-align: center;">Send Email</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 4: Governance & Accountability (Slide 18) -->
  <section class="section-components" id="governance" style="padding: 6rem 0; background: #0F172A; color: #FFFFFF;">
    <div class="container">
      <div style="max-width: 820px; margin-bottom: 3.5rem;">
        <span class="section-tag-badge">STATUTORY GOVERNANCE • SLIDE 18</span>
        <h2 class="section-title" style="color: #FFFFFF;">
          Governance, Transparency &amp; <span class="serif-accent" style="font-family: var(--font-serif); font-style: italic; color: #F59E0B; font-weight: 400;">Accountability.</span>
        </h2>
        <p class="section-desc" style="color: #94A3B8;">
          Appropriate governance mechanisms guarantee that donated funds are used responsibly, ethically, and in strict statutory compliance under Section 8.
        </p>
      </div>

      <div class="beneficiary-bento" style="margin-top: 0;">
        <div class="pipeline-card">
          <div>
            <span class="pipeline-phase-pill" style="background: rgba(180, 83, 9, 0.25); color: #FDBA74; border-color: rgba(245, 158, 11, 0.35);">OVERSIGHT 01</span>
            <h3 class="pipeline-title">Board Oversight</h3>
            <p class="pipeline-desc">Governing body oversight actively reviewing operational targets, route expansion, and capital expenditure allocations.</p>
          </div>
          <div style="font-family: var(--font-mono); font-size: 0.78rem; color: #FDBA74;">Quarterly Formal Reviews</div>
        </div>

        <div class="pipeline-card">
          <div>
            <span class="pipeline-phase-pill" style="background: rgba(180, 83, 9, 0.25); color: #FDBA74; border-color: rgba(245, 158, 11, 0.35);">OVERSIGHT 02</span>
            <h3 class="pipeline-title">Multi-Tier Approvals</h3>
            <p class="pipeline-desc">Dual financial authorization required for any procurement expenditure exceeding defined institutional thresholds.</p>
          </div>
          <div style="font-family: var(--font-mono); font-size: 0.78rem; color: #FDBA74;">Strict Anti-Leakage Protocol</div>
        </div>

        <div class="pipeline-card">
          <div>
            <span class="pipeline-phase-pill" style="background: rgba(180, 83, 9, 0.25); color: #FDBA74; border-color: rgba(245, 158, 11, 0.35);">OVERSIGHT 03</span>
            <h3 class="pipeline-title">Dedicated Accounting</h3>
            <p class="pipeline-desc">Segregated expenditure ledgers maintaining line-by-line traceability and banking vouchers for every rupee donated.</p>
          </div>
          <div style="font-family: var(--font-mono); font-size: 0.78rem; color: #FDBA74;">Canara Bank Dedicated Account</div>
        </div>

        <div class="pipeline-card">
          <div>
            <span class="pipeline-phase-pill" style="background: rgba(180, 83, 9, 0.25); color: #FDBA74; border-color: rgba(245, 158, 11, 0.35);">OVERSIGHT 04</span>
            <h3 class="pipeline-title">Vetted Wholesale Vendors</h3>
            <p class="pipeline-desc">Wholesale grain and ingredient suppliers verified for GST registration, FSSAI compliance, and fair APMC pricing.</p>
          </div>
          <div style="font-family: var(--font-mono); font-size: 0.78rem; color: #FDBA74;">Mandatory Tax Invoicing</div>
        </div>

        <div class="pipeline-card">
          <div>
            <span class="pipeline-phase-pill" style="background: rgba(180, 83, 9, 0.25); color: #FDBA74; border-color: rgba(245, 158, 11, 0.35);">OVERSIGHT 05</span>
            <h3 class="pipeline-title">Batch Reconciliation</h3>
            <p class="pipeline-desc">Daily physical cross-checking of raw grains purchased against meal batches cooked and distribution headcounts.</p>
          </div>
          <div style="font-family: var(--font-mono); font-size: 0.78rem; color: #FDBA74;">Geotagged Dispatch Logs</div>
        </div>

        <div class="pipeline-card featured-phase">
          <div>
            <span class="pipeline-phase-pill" style="background: linear-gradient(135deg, #B45309, #EA580C); color: #FFFFFF; border-color: #EA580C;">OVERSIGHT 06 • STATUTORY</span>
            <h3 class="pipeline-title">Independent CA Audit</h3>
            <p class="pipeline-desc">Periodic external Chartered Accountant audits, annual MCA ROC filings, and Form 10BD electronic certificate submissions.</p>
          </div>
          <div style="font-family: var(--font-mono); font-size: 0.78rem; color: #4ADE80; font-weight: 700;">100% Statutory MCA Compliance</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 5: Institutional Call to Action Banner -->
  <section style="padding: 5rem 0; background: radial-gradient(circle at 50% 50%, rgba(180, 83, 9, 0.25) 0%, rgba(28, 25, 23, 0.98) 75%), #1C1917; border-top: 1px solid rgba(255, 255, 255, 0.1);">
    <div class="container" style="text-align: center; max-width: 780px;">
      <span class="section-tag-badge" style="background: rgba(245, 158, 11, 0.2); color: #FDE68A; border-color: rgba(245, 158, 11, 0.35);">
        FIDUCIARY INTEGRITY • DIGNIFIED RELIEF
      </span>
      <h2 style="font-family: var(--font-heading); font-size: clamp(2rem, 3.2vw, 2.75rem); font-weight: 800; color: #FFFFFF; margin-top: 1rem; margin-bottom: 1rem;">
        Partner with a Certified Section 8 Foundation
      </h2>
      <p style="color: #CBD5E1; font-size: 1.05rem; line-height: 1.65; margin-bottom: 2rem;">
        Support verified hunger relief under full statutory oversight. Claim 50% tax deductions on your donation under Section 80G.
      </p>
      <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
        <a href="donate.html" class="btn-primary-glow">
          Donate Online with 80G Receipt &rarr;
        </a>
        <a href="donate.html#bank-wire" class="btn-secondary-outline">
          Canara Bank Direct Wire
        </a>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-top-grid">
        <div>
          <span class="brand-main-name" style="color: #FFFFFF; font-size: 1.2rem;">SARWE UNNATI FOUNDATION</span>
          <p class="footer-brand-summary">
            A government-certified Section 8 non-profit company dedicated to providing and distributing food to people facing hunger with dignity, transparency, and clinical FSSAI standards.
          </p>
          <span class="footer-legal-badge-pill">CIN: U80902UP2018NPL106959</span>
        </div>
        <div>
          <div class="footer-col-title">Navigation</div>
          <ul class="footer-links-col">
            <li><a href="index.html">Flagship Home</a></li>
            <li><a href="about.html">About Foundation</a></li>
            <li><a href="programs.html">Food Relief Model</a></li>
            <li><a href="impact.html">Impact &amp; Budget</a></li>
            <li><a href="volunteer.html">Volunteer Cadre</a></li>
            <li><a href="contact.html">Contact Founder</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-col-title">Governance</div>
          <ul class="footer-links-col">
            <li><a href="about.html#governance">Board Oversight</a></li>
            <li><a href="impact.html#budget-allocation">Itemized Allocation</a></li>
            <li><a href="donate.html#csr-tiers">CSR Schedule VII</a></li>
            <li><a href="donate.html#bank-wire">Canara Bank Wire</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-col-title">Headquarters</div>
          <p style="font-size: 0.9rem; color: #94A3B8; line-height: 1.6;">
            House No. 119, Vaishali Vihar, Near Dharia Builder, Delhi Road, Saharanpur — 247001, UP
          </p>
          <div style="font-family: var(--font-mono); font-size: 0.82rem; color: #E2E8F0; margin-top: 0.75rem;">
            Director: Priyesh Garg<br>
            Phone: +91 99974 26815
          </div>
        </div>
      </div>
      <div class="footer-bottom-bar">
        <div>&copy; 2018–2026 SARWE UNNATI FOUNDATION. All Rights Reserved.</div>
        <div style="font-family: var(--font-mono); font-size: 0.75rem;">12A: AAECH6219BE20251 | 80G: AAECH6219BF20261</div>
      </div>
    </div>
  </footer>

  <div class="toast-notification" id="global-toast"></div>
  <button type="button" class="scroll-to-top-btn" id="scroll-to-top" aria-label="Scroll to top">&uarr;</button>
  <script src="js/main.js?v=20261113_v7"></script>
</body>
</html>
`;

fs.writeFileSync('about.html', aboutHtml, 'utf8');
console.log('Successfully reconstructed about.html!');
