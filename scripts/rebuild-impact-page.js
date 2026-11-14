const fs = require('fs');

const impactHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Impact Telemetry & ₹2 Cr Capital Budget | Sarwe Unnati Foundation</title>
  <meta name="description" content="Audited telemetry, unit economics (₹66.67/meal), and the comprehensive ₹2,00,00,000 capital expenditure plan of Sarwe Unnati Foundation under Section 8.">
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
        <a href="about.html" class="nav-item">Charter</a>
        <a href="programs.html" class="nav-item">Food Relief</a>
        <a href="impact.html" class="nav-item active">Impact &amp; Budget</a>
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
      <a href="about.html" class="drawer-link">Institutional Charter</a>
      <a href="programs.html" class="drawer-link">Food Relief Model</a>
      <a href="impact.html" class="drawer-link active">Impact &amp; Budget</a>
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

  <!-- Section 1: Impact Page Hero -->
  <section class="page-hero-banner" id="hero-section">
    <div class="page-hero-grid-pattern"></div>
    <div class="page-hero-ambient-glow"></div>

    <div class="container" style="position: relative; z-index: 2; width: 100%;">
      <div style="max-width: 880px; margin: 0 auto; text-align: center;">
        <div class="section-tag-badge" style="display: inline-flex; align-items: center; gap: 0.5rem; margin-bottom: 1.25rem;">
          <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #F59E0B;"></span>
          AUDITED TELEMETRY • SECTION 8 GOVERNANCE
        </div>

        <h1 class="hero-title" style="color: #FFFFFF; font-size: clamp(2.35rem, 4.5vw, 3.85rem); line-height: 1.12; font-weight: 800; margin-bottom: 1.25rem;">
          Impact Telemetry &amp; <span class="serif-accent" style="font-family: var(--font-serif); font-style: italic; color: #F59E0B; font-weight: 400;">₹2 Crore Budget.</span>
        </h1>

        <p class="hero-desc" style="color: #CBD5E1; font-size: clamp(1.05rem, 1.8vw, 1.2rem); line-height: 1.65; max-width: 760px; margin: 0 auto 2.25rem;">
          Every single rupee tracked, verified, and audited across 3,00,000 hot meals, central wholesale procurement, and continuous FSSAI laboratory sampling.
        </p>

        <div class="hero-button-group" style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <a href="#budget-allocation" class="btn-primary-glow">
            Inspect ₹2 Cr Itemized Budget ↓
          </a>
          <a href="donate.html#csr-tiers" class="btn-secondary-outline">
            Section 135 CSR Alliances &rarr;
          </a>
        </div>

        <!-- Metric Telemetry Ribbon -->
        <div class="hero-metric-ribbon">
          <div class="hero-metric-item">
            <span class="hero-metric-val emerald">3,00,000</span>
            <span class="hero-metric-label">Annual Hot Meals</span>
            <span class="hero-metric-sub">822 Nourishing Thalis / Day</span>
          </div>
          <div class="hero-metric-divider"></div>
          <div class="hero-metric-item">
            <span class="hero-metric-val orange">₹66.67</span>
            <span class="hero-metric-label">Unit Cost / Meal</span>
            <span class="hero-metric-sub">Wholesale Steam-Kettle Prep</span>
          </div>
          <div class="hero-metric-divider"></div>
          <div class="hero-metric-item">
            <span class="hero-metric-val blue">100%</span>
            <span class="hero-metric-label">FSSAI Compliance</span>
            <span class="hero-metric-sub">NABL Lab Tested Integrity</span>
          </div>
          <div class="hero-metric-divider"></div>
          <div class="hero-metric-item">
            <span class="hero-metric-val">₹2.00 Cr</span>
            <span class="hero-metric-label">Annual Capital Goal</span>
            <span class="hero-metric-sub">Statutory ROC Itemized</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 2: Unit Economics & Financial Sustainability (Slide 14) -->
  <section style="padding: 6rem 0; background: #0F172A; border-top: 1px solid rgba(255, 255, 255, 0.08); border-bottom: 1px solid rgba(255, 255, 255, 0.08);">
    <div class="container">
      <div style="max-width: 820px;">
        <span class="section-tag-badge">UNIT ECONOMICS • SLIDE 14</span>
        <h2 class="section-title" style="color: #FFFFFF;">
          Precision Efficiency: <span style="font-family: var(--font-serif); font-style: italic; color: #F59E0B; font-weight: 400;">₹66.67 Per Complete Meal.</span>
        </h2>
        <p class="section-desc" style="color: #94A3B8;">
          Unlike ad-hoc feeding drives, our central wholesale procurement, batch steam-kettle prep, and volunteer field dispatch drive industry-leading capital efficiency.
        </p>
      </div>

      <div class="modern-csr-grid" style="margin-top: 3.5rem;">
        <div class="unit-economics-card highlight">
          <div>
            <span class="unit-card-tag saffron">UNIT BENCHMARK</span>
            <div class="unit-cost-val" style="color: #FDBA74;">₹66.67</div>
            <h3 style="font-family: var(--font-heading); font-size: 1.3rem; font-weight: 700; color: #FFFFFF; margin-bottom: 0.5rem;">All-Inclusive Per-Meal Cost</h3>
            <p style="color: #D6D3D1; font-size: 0.9rem; line-height: 1.6;">
              Covers wholesale grains &amp; lentils (₹38.00), fresh seasonal vegetables &amp; spices (₹12.00), biodegradable compostable packaging (₹7.00), and kitchen labor &amp; logistics (₹9.67).
            </p>
          </div>
          <div style="margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px dashed rgba(255, 255, 255, 0.15); font-family: var(--font-mono); font-size: 0.78rem; color: #FDE68A;">
            100% Tax Deductible under Section 80G
          </div>
        </div>

        <div class="unit-economics-card">
          <div>
            <span class="unit-card-tag emerald">DAILY DISPATCH</span>
            <div class="unit-cost-val" style="color: #86EFAC;">₹54,795</div>
            <h3 style="font-family: var(--font-heading); font-size: 1.3rem; font-weight: 700; color: #FFFFFF; margin-bottom: 0.5rem;">Daily Operating Outlay</h3>
            <p style="color: #A8A29E; font-size: 0.9rem; line-height: 1.6;">
              Funds the end-to-end cooking, hot insulated transport, and dignified distribution of ~822 fresh nutritious thalis across 365 consecutive days without pause.
            </p>
          </div>
          <div style="margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px dashed rgba(255, 255, 255, 0.15); font-family: var(--font-mono); font-size: 0.78rem; color: #CBD5E1;">
            Direct Day-Sponsorship Available
          </div>
        </div>

        <div class="unit-economics-card">
          <div>
            <span class="unit-card-tag amber">MONTHLY CADENCE</span>
            <div class="unit-cost-val" style="color: #FDE68A;">₹16.67 L</div>
            <h3 style="font-family: var(--font-heading); font-size: 1.3rem; font-weight: 700; color: #FFFFFF; margin-bottom: 0.5rem;">Monthly Operating Capital</h3>
            <p style="color: #A8A29E; font-size: 0.9rem; line-height: 1.6;">
              Full-cycle overhead covering 25,000 monthly meals, centralized kitchen utility expenses, fleet maintenance, supervisor stipends, and continuous laboratory quality audits.
            </p>
          </div>
          <div style="margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px dashed rgba(255, 255, 255, 0.15); font-family: var(--font-mono); font-size: 0.78rem; color: #CBD5E1;">
            Audited Monthly Reconciliations
          </div>
        </div>
      </div>

      <!-- Funding Mix Breakdown -->
      <div style="margin-top: 4.5rem; padding: 2.5rem; background: #1C1917; border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 20px;">
        <div style="max-width: 760px;">
          <h3 style="font-family: var(--font-heading); font-size: 1.45rem; font-weight: 800; color: #FFFFFF; margin-bottom: 0.5rem;">
            Sustainable Multi-Stream Capital Model
          </h3>
          <p style="color: #94A3B8; font-size: 0.95rem; line-height: 1.6;">
            To safeguard against funding shortfalls and operational interruption, our ₹2 Crore target is structurally diversified across five distinct capital streams:
          </p>
        </div>

        <div class="funding-stream-grid">
          <div class="funding-stream-card csr">
            <div style="font-size: 1.75rem; font-weight: 800; color: #FB923C; font-family: var(--font-mono);">40%</div>
            <div style="font-weight: 700; color: #FFFFFF; margin-top: 0.35rem; font-size: 1.05rem;">CSR Partnerships</div>
            <div style="font-size: 0.9rem; color: #FDBA74; font-family: var(--font-mono); margin-top: 0.25rem;">₹80,00,000</div>
            <p style="font-size: 0.82rem; color: #A8A29E; margin-top: 0.6rem; line-height: 1.5;">Corporate mandates under Section 135 Schedule VII hunger relief.</p>
          </div>

          <div class="funding-stream-card individual">
            <div style="font-size: 1.75rem; font-weight: 800; color: #4ADE80; font-family: var(--font-mono);">25%</div>
            <div style="font-weight: 700; color: #FFFFFF; margin-top: 0.35rem; font-size: 1.05rem;">Individual Donors</div>
            <div style="font-size: 0.9rem; color: #86EFAC; font-family: var(--font-mono); margin-top: 0.25rem;">₹50,00,000</div>
            <p style="font-size: 0.82rem; color: #A8A29E; margin-top: 0.6rem; line-height: 1.5;">Recurring citizens &amp; philanthropists seeking 80G tax certificates.</p>
          </div>

          <div class="funding-stream-card grants">
            <div style="font-size: 1.75rem; font-weight: 800; color: #F59E0B; font-family: var(--font-mono);">20%</div>
            <div style="font-weight: 700; color: #FFFFFF; margin-top: 0.35rem; font-size: 1.05rem;">Institutional Grants</div>
            <div style="font-size: 0.9rem; color: #FDE68A; font-family: var(--font-mono); margin-top: 0.25rem;">₹40,00,000</div>
            <p style="font-size: 0.82rem; color: #A8A29E; margin-top: 0.6rem; line-height: 1.5;">Philanthropic trusts supporting food security &amp; child development.</p>
          </div>

          <div class="funding-stream-card govt">
            <div style="font-size: 1.75rem; font-weight: 800; color: #F97316; font-family: var(--font-mono);">10%</div>
            <div style="font-weight: 700; color: #FFFFFF; margin-top: 0.35rem; font-size: 1.05rem;">Govt Schemes</div>
            <div style="font-size: 0.9rem; color: #FDBA74; font-family: var(--font-mono); margin-top: 0.25rem;">₹20,00,000</div>
            <p style="font-size: 0.82rem; color: #A8A29E; margin-top: 0.6rem; line-height: 1.5;">Co-funded welfare schemes &amp; subsidized FCI grain allocations.</p>
          </div>

          <div class="funding-stream-card community">
            <div style="font-size: 1.75rem; font-weight: 800; color: #C084FC; font-family: var(--font-mono);">5%</div>
            <div style="font-weight: 700; color: #FFFFFF; margin-top: 0.35rem; font-size: 1.05rem;">Community Support</div>
            <div style="font-size: 0.9rem; color: #E9D5FF; font-family: var(--font-mono); margin-top: 0.25rem;">₹10,00,000</div>
            <p style="font-size: 0.82rem; color: #A8A29E; margin-top: 0.6rem; line-height: 1.5;">Local merchant guilds, resident associations &amp; in-kind food grain.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 3: Itemized Budget Allocation Matrix (Slide 13) -->
  <section id="budget-allocation" style="padding: 6rem 0; background: #0B1120;">
    <div class="container">
      <div style="max-width: 840px;">
        <span class="section-tag-badge">BUDGET ALLOCATION • SLIDE 13</span>
        <h2 class="section-title" style="color: #FFFFFF;">
          Itemized ₹2,00,00,000 (2 Crore) <span style="font-family: var(--font-serif); font-style: italic; color: #EA580C; font-weight: 400;">Annual Capital Plan.</span>
        </h2>
        <p class="section-desc" style="color: #94A3B8;">
          Every rupee itemized with exact deliverables, vendor categories, and operational timelines for statutory inspection and CSR governance committees.
        </p>
      </div>

      <div class="modern-budget-card">
        <div class="modern-budget-tabs">
          <button type="button" class="budget-tab-pill active" data-filter="all">All Heads (100%)</button>
          <button type="button" class="budget-tab-pill" data-filter="food-kitchen">Food &amp; Kitchen (56%)</button>
          <button type="button" class="budget-tab-pill" data-filter="logistics">Logistics (17%)</button>
          <button type="button" class="budget-tab-pill" data-filter="support-infra">Infrastructure (12%)</button>
          <button type="button" class="budget-tab-pill" data-filter="compliance-admin">Admin &amp; Audits (15%)</button>
        </div>

        <div class="budget-table-responsive">
          <table class="modern-budget-table budget-table">
            <thead>
              <tr>
                <th style="width: 26%;">Budget Category</th>
                <th style="width: 17%;">Allocation (₹)</th>
                <th style="width: 10%;">Share</th>
                <th style="width: 17%;">Capital Progress</th>
                <th style="width: 30%;">Operational Scope &amp; Deliverables</th>
              </tr>
            </thead>
            <tbody>
              <tr data-category="food-kitchen">
                <td>
                  <strong style="color: #FFFFFF; font-size: 1rem;">Food &amp; Kitchen Operations</strong><br>
                  <span style="font-size: 0.78rem; color: #94A3B8; font-family: var(--font-mono);">Core Direct Program Expense</span>
                </td>
                <td class="amount-cell amount-num">₹1,12,00,000</td>
                <td><span class="pct-badge" style="background: rgba(234, 88, 12, 0.2); color: #FB923C;">56.0%</span></td>
                <td>
                  <div class="budget-bar-track"><div class="budget-bar-fill" style="width: 56%;"></div></div>
                </td>
                <td style="font-size: 0.88rem; color: #CBD5E1; line-height: 1.55;">
                  Wholesale grains, pulses, fresh vegetables, cooking oil, spices, professional chefs, kitchen helpers, and biodegradable packing for 3,00,000 meals.
                </td>
              </tr>

              <tr data-category="logistics">
                <td>
                  <strong style="color: #FFFFFF; font-size: 1rem;">Logistics &amp; Distribution</strong><br>
                  <span style="font-size: 0.78rem; color: #94A3B8; font-family: var(--font-mono);">Fleet &amp; Field Delivery</span>
                </td>
                <td class="amount-cell amount-num">₹34,00,000</td>
                <td><span class="pct-badge" style="background: rgba(37, 99, 235, 0.2); color: #93C5FD;">17.0%</span></td>
                <td>
                  <div class="budget-bar-track"><div class="budget-bar-fill" style="width: 17%; background: linear-gradient(90deg, #2563EB, #60A5FA);"></div></div>
                </td>
                <td style="font-size: 0.88rem; color: #CBD5E1; line-height: 1.55;">
                  Lease/operation of custom insulated delivery vans, fuel, driver wages, vehicle maintenance, and transit temperature control.
                </td>
              </tr>

              <tr data-category="support-infra">
                <td>
                  <strong style="color: #FFFFFF; font-size: 1rem;">Infrastructure &amp; Setup</strong><br>
                  <span style="font-size: 0.78rem; color: #94A3B8; font-family: var(--font-mono);">Kitchen Capital Expenditure</span>
                </td>
                <td class="amount-cell amount-num">₹24,00,000</td>
                <td><span class="pct-badge" style="background: rgba(245, 158, 11, 0.2); color: #FDE68A;">12.0%</span></td>
                <td>
                  <div class="budget-bar-track"><div class="budget-bar-fill" style="width: 12%; background: linear-gradient(90deg, #D97706, #F59E0B);"></div></div>
                </td>
                <td style="font-size: 0.88rem; color: #CBD5E1; line-height: 1.55;">
                  Commercial stainless steel steam kettles, industrial burners, cold room refrigeration, dry grain storage racks, and FSSAI sanitation gear.
                </td>
              </tr>

              <tr data-category="compliance-admin">
                <td>
                  <strong style="color: #FFFFFF; font-size: 1rem;">Program Admin &amp; Governance</strong><br>
                  <span style="font-size: 0.78rem; color: #94A3B8; font-family: var(--font-mono);">Executive Management</span>
                </td>
                <td class="amount-cell amount-num">₹18,00,000</td>
                <td><span class="pct-badge" style="background: rgba(147, 51, 234, 0.2); color: #D8B4FE;">9.0%</span></td>
                <td>
                  <div class="budget-bar-track"><div class="budget-bar-fill" style="width: 9%; background: linear-gradient(90deg, #7C3AED, #A855F7);"></div></div>
                </td>
                <td style="font-size: 0.88rem; color: #CBD5E1; line-height: 1.55;">
                  Project coordinator, field supervisors, legal &amp; financial compliance, ROC annual filings, and administrative utilities.
                </td>
              </tr>

              <tr data-category="compliance-admin">
                <td>
                  <strong style="color: #FFFFFF; font-size: 1rem;">Community &amp; Volunteer Training</strong><br>
                  <span style="font-size: 0.78rem; color: #94A3B8; font-family: var(--font-mono);">Human Capacity Building</span>
                </td>
                <td class="amount-cell amount-num">₹7,00,000</td>
                <td><span class="pct-badge" style="background: rgba(16, 185, 129, 0.2); color: #6EE7B7;">3.5%</span></td>
                <td>
                  <div class="budget-bar-track"><div class="budget-bar-fill" style="width: 3.5%; background: linear-gradient(90deg, #059669, #10B981);"></div></div>
                </td>
                <td style="font-size: 0.88rem; color: #CBD5E1; line-height: 1.55;">
                  Safety gear, health screenings, food handling certification for 50-100 volunteers, and beneficiary awareness materials.
                </td>
              </tr>

              <tr data-category="compliance-admin">
                <td>
                  <strong style="color: #FFFFFF; font-size: 1rem;">Monitoring, Evaluation &amp; Audits</strong><br>
                  <span style="font-size: 0.78rem; color: #94A3B8; font-family: var(--font-mono);">Third-Party Quality Assurance</span>
                </td>
                <td class="amount-cell amount-num">₹5,00,000</td>
                <td><span class="pct-badge" style="background: rgba(14, 165, 233, 0.2); color: #7DD3FC;">2.5%</span></td>
                <td>
                  <div class="budget-bar-track"><div class="budget-bar-fill" style="width: 2.5%; background: linear-gradient(90deg, #0284C7, #38BDF8);"></div></div>
                </td>
                <td style="font-size: 0.88rem; color: #CBD5E1; line-height: 1.55;">
                  Independent third-party financial audits, FSSAI nutritional food testing in NABL labs, tracking software, and impact publishing.
                </td>
              </tr>

              <tr class="total-row">
                <td>
                  <strong style="color: #FFFFFF; font-size: 1.05rem;">TOTAL ANNUAL OPERATING BUDGET</strong><br>
                  <span style="font-size: 0.8rem; color: #4ADE80; font-family: var(--font-mono);">3,00,000 Complete Meals @ ₹66.67 / Meal</span>
                </td>
                <td class="amount-cell amount-num">₹2,00,00,000</td>
                <td><span class="pct-badge" style="background: rgba(34, 197, 94, 0.25); color: #86EFAC;">100%</span></td>
                <td>
                  <div class="budget-bar-track"><div class="budget-bar-fill" style="width: 100%; background: #4ADE80;"></div></div>
                </td>
                <td style="color: #FFFFFF; font-weight: 600; font-size: 0.92rem;">
                  Full 365-Day Feeding Campaign Across Western Uttar Pradesh
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 4: Impact Measurement Framework (Slide 12) -->
  <section style="padding: 6rem 0; background: #0F172A; border-top: 1px solid rgba(255, 255, 255, 0.08); border-bottom: 1px solid rgba(255, 255, 255, 0.08);">
    <div class="container">
      <div style="max-width: 820px;">
        <span class="section-tag-badge">VERIFICATION ARCHITECTURE • SLIDE 12</span>
        <h2 class="section-title" style="color: #FFFFFF;">
          6-Point Impact <span style="font-family: var(--font-serif); font-style: italic; color: #F59E0B; font-weight: 400;">Measurement Framework.</span>
        </h2>
        <p class="section-subtitle" style="color: #94A3B8;">
          Strict auditability guidelines applied to verify output volume, nutritional integrity, and beneficiary welfare.
        </p>
      </div>

      <div class="modern-budget-card" style="margin-top: 3.5rem;">
        <div class="budget-table-responsive">
          <table class="modern-budget-table">
            <thead>
              <tr>
                <th style="width: 22%;">Impact Indicator</th>
                <th style="width: 22%;">Annual Target</th>
                <th style="width: 28%;">Measurement Methodology</th>
                <th style="width: 28%;">Verification &amp; Audit Trail</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong style="color: #FFFFFF;">Meals Distributed</strong></td>
                <td><span class="pct-badge" style="background: rgba(234, 88, 12, 0.2); color: #FB923C;">3,00,000 / Year (822/day)</span></td>
                <td style="font-size: 0.9rem; color: #CBD5E1;">Daily kitchen raw material consumption and dispatch manifests.</td>
                <td style="font-size: 0.9rem; color: #A8A29E;">GPS-tagged geotagged distribution photos &amp; supervisor counter-signatures.</td>
              </tr>
              <tr>
                <td><strong style="color: #FFFFFF;">Individuals Reached</strong></td>
                <td><span class="pct-badge" style="background: rgba(37, 99, 235, 0.2); color: #93C5FD;">10,000+ Unique Beneficiaries</span></td>
                <td style="font-size: 0.9rem; color: #CBD5E1;">Community center registrations &amp; statistical field sampling.</td>
                <td style="font-size: 0.9rem; color: #A8A29E;">Quarterly demographic audits and route beneficiary registers.</td>
              </tr>
              <tr>
                <td><strong style="color: #FFFFFF;">Nutritional Quality</strong></td>
                <td><span class="pct-badge" style="background: rgba(34, 197, 94, 0.2); color: #86EFAC;">100% FSSAI Compliant</span></td>
                <td style="font-size: 0.9rem; color: #CBD5E1;">Weekly menu composition tracking (calories, protein, micronutrients).</td>
                <td style="font-size: 0.9rem; color: #A8A29E;">Periodic independent testing by certified NABL food labs.</td>
              </tr>
              <tr>
                <td><strong style="color: #FFFFFF;">Food Waste Diverted</strong></td>
                <td><span class="pct-badge" style="background: rgba(245, 158, 11, 0.2); color: #FDE68A;">30+ Metric Tons</span></td>
                <td style="font-size: 0.9rem; color: #CBD5E1;">Weigh-scale digital logs at banquet, hotel &amp; caterer pickup points.</td>
                <td style="font-size: 0.9rem; color: #A8A29E;">Monthly waste recovery reconciliation reports shared with donors.</td>
              </tr>
              <tr>
                <td><strong style="color: #FFFFFF;">Volunteer Cadre</strong></td>
                <td><span class="pct-badge" style="background: rgba(147, 51, 234, 0.2); color: #D8B4FE;">50–100 Active Cadre</span></td>
                <td style="font-size: 0.9rem; color: #CBD5E1;">Digital attendance tracking via volunteer management system.</td>
                <td style="font-size: 0.9rem; color: #A8A29E;">Timesheet logs, safety training certificates &amp; shift logs.</td>
              </tr>
              <tr>
                <td><strong style="color: #FFFFFF;">Community Satisfaction</strong></td>
                <td><span class="pct-badge" style="background: rgba(14, 165, 233, 0.2); color: #7DD3FC;">80%+ Positive Rating</span></td>
                <td style="font-size: 0.9rem; color: #CBD5E1;">Monthly beneficiary feedback interviews &amp; community survey forms.</td>
                <td style="font-size: 0.9rem; color: #A8A29E;">Independent third-party surveyor reports &amp; video testimonials.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 5: Risk Assessment & Mitigation Strategy (Slide 19) -->
  <section style="padding: 6rem 0; background: #0B1120;">
    <div class="container">
      <div style="max-width: 820px;">
        <span class="section-tag-badge">GOVERNANCE &amp; RESILIENCE • SLIDE 19</span>
        <h2 class="section-title" style="color: #FFFFFF;">
          Operational Risk Assessment &amp; <span style="font-family: var(--font-serif); font-style: italic; color: #EA580C; font-weight: 400;">Mitigation Protocols.</span>
        </h2>
        <p class="section-desc" style="color: #94A3B8;">
          Proactive contingency protocols engineered into our daily supply chain and financial management to guarantee unbroken relief.
        </p>
      </div>

      <div class="risk-matrix-grid">
        <div class="risk-protocol-card">
          <div>
            <div class="risk-badge-header">
              <span class="risk-level-tag red">HIGH PRIORITY • RISK 01</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #94A3B8;">SUPPLY CHAIN</span>
            </div>
            <h3 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; color: #FFFFFF; margin-bottom: 0.5rem;">Supply Chain Disruption &amp; Inflation</h3>
            <p style="color: #A8A29E; font-size: 0.9rem; line-height: 1.6;">
              Surges in commodity grain, pulse, or fuel pricing threatening budget ceilings.
            </p>
          </div>
          <div class="risk-mitigation-box">
            <strong>Mitigation Protocol</strong>
            Long-term forward contracts with regional APMC wholesale suppliers; 15-day dry grain buffer stock maintained in central Saharanpur facility.
          </div>
        </div>

        <div class="risk-protocol-card">
          <div>
            <div class="risk-badge-header">
              <span class="risk-level-tag red">HIGH PRIORITY • RISK 02</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #94A3B8;">FOOD SAFETY</span>
            </div>
            <h3 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; color: #FFFFFF; margin-bottom: 0.5rem;">Food Safety &amp; Temperature Spoilage</h3>
            <p style="color: #A8A29E; font-size: 0.9rem; line-height: 1.6;">
              Risk of bacterial proliferation during summer transit and high humidity seasons.
            </p>
          </div>
          <div class="risk-mitigation-box">
            <strong>Mitigation Protocol</strong>
            Strict adherence to FSSAI protocols, hot-holding at &gt;65°C in insulated containers, 2-hour distribution window post-cooking, and daily batch retention samples.
          </div>
        </div>

        <div class="risk-protocol-card">
          <div>
            <div class="risk-badge-header">
              <span class="risk-level-tag red">HIGH PRIORITY • RISK 03</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #94A3B8;">CAPITAL FLOW</span>
            </div>
            <h3 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; color: #FFFFFF; margin-bottom: 0.5rem;">Funding Shortfall &amp; Cash Flow Delays</h3>
            <p style="color: #A8A29E; font-size: 0.9rem; line-height: 1.6;">
              CSR grant disbursement lag times or donor attrition during economic slowdowns.
            </p>
          </div>
          <div class="risk-mitigation-box">
            <strong>Mitigation Protocol</strong>
            Multi-stream revenue portfolio across CSR grants, individual giving, and foundations. A 3-month operational reserve fund is systematically built.
          </div>
        </div>

        <div class="risk-protocol-card">
          <div>
            <div class="risk-badge-header">
              <span class="risk-level-tag amber">MODERATE • RISK 04</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #94A3B8;">STATUTORY</span>
            </div>
            <h3 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; color: #FFFFFF; margin-bottom: 0.5rem;">Regulatory &amp; Statutory Compliance</h3>
            <p style="color: #A8A29E; font-size: 0.9rem; line-height: 1.6;">
              Evolving MCA, Income Tax Form 10BD, and Section 8 governance requirements.
            </p>
          </div>
          <div class="risk-mitigation-box" style="border-left-color: #F59E0B;">
            <strong style="color: #FBBF24;">Mitigation Protocol</strong>
            Retained Chartered Accountants and legal counsel ensuring timely Form 10BD filings, MCA returns, 80G renewal certificates, and Section 8 compliance.
          </div>
        </div>

        <div class="risk-protocol-card">
          <div>
            <div class="risk-badge-header">
              <span class="risk-level-tag amber">MODERATE • RISK 05</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #94A3B8;">HUMAN CADRE</span>
            </div>
            <h3 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; color: #FFFFFF; margin-bottom: 0.5rem;">Volunteer Attrition &amp; Field Fatigue</h3>
            <p style="color: #A8A29E; font-size: 0.9rem; line-height: 1.6;">
              High volunteer turnover leading to dispatch inconsistencies or field delays.
            </p>
          </div>
          <div class="risk-mitigation-box" style="border-left-color: #F59E0B;">
            <strong style="color: #FBBF24;">Mitigation Protocol</strong>
            Rotating shifts, structured onboarding curriculum, formal recognition ceremonies, and certified community service accreditations.
          </div>
        </div>

        <div class="risk-protocol-card">
          <div>
            <div class="risk-badge-header">
              <span class="risk-level-tag amber">MODERATE • RISK 06</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #94A3B8;">OPERATIONS</span>
            </div>
            <h3 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; color: #FFFFFF; margin-bottom: 0.5rem;">Fleet Breakdown &amp; Weather Extremes</h3>
            <p style="color: #A8A29E; font-size: 0.9rem; line-height: 1.6;">
              Monsoon inundation or vehicular mechanical failure disrupting morning dispatches.
            </p>
          </div>
          <div class="risk-mitigation-box" style="border-left-color: #F59E0B;">
            <strong style="color: #FBBF24;">Mitigation Protocol</strong>
            Annual vehicle maintenance contracts (AMC), backup transport tie-ups with regional logistics operators, and rainproof insulated packaging.
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 6: Institutional Call to Action Banner -->
  <section style="padding: 5rem 0; background: radial-gradient(circle at 50% 50%, rgba(180, 83, 9, 0.25) 0%, rgba(28, 25, 23, 0.98) 75%), #1C1917; border-top: 1px solid rgba(255, 255, 255, 0.1);">
    <div class="container" style="text-align: center; max-width: 780px;">
      <span class="section-tag-badge" style="background: rgba(245, 158, 11, 0.2); color: #FDE68A; border-color: rgba(245, 158, 11, 0.35);">
        CORPORATE ALLIANCES &amp; TAX EXEMPTION
      </span>
      <h2 style="font-family: var(--font-heading); font-size: clamp(2rem, 3.2vw, 2.75rem); font-weight: 800; color: #FFFFFF; margin-top: 1rem; margin-bottom: 1rem;">
        Partner with Our Audited Feeding Network
      </h2>
      <p style="color: #CBD5E1; font-size: 1.05rem; line-height: 1.65; margin-bottom: 2rem;">
        Whether co-funding an entire delivery hub or claiming Section 80G tax deductions for individual giving, your capital directly fuels daily hot meals.
      </p>
      <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
        <a href="donate.html" class="btn-primary-glow">
          Explore CSR Partnership Tiers &rarr;
        </a>
        <a href="donate.html#bank-wire" class="btn-secondary-outline">
          Direct Canara Bank Wire [80G]
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

fs.writeFileSync('impact.html', impactHtml, 'utf8');
console.log('Successfully reconstructed impact.html with full modern telemetry architecture!');
