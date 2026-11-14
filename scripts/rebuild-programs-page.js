const fs = require('fs');

const programsHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Food Relief Model & Operating Architecture | Sarwe Unnati Foundation</title>
  <meta name="description" content="Explore Sarwe Unnati Foundation's systematic food relief model: target beneficiary demographics, FSSAI kitchen hygiene standards, and 3-phase distribution architecture.">
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
        <a href="programs.html" class="nav-item active">Food Relief</a>
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
      <a href="about.html" class="drawer-link">Institutional Charter</a>
      <a href="programs.html" class="drawer-link active">Food Relief Model</a>
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

  <!-- Section 1: Programs Page Hero -->
  <section class="page-hero-banner" id="hero-section">
    <div class="page-hero-grid-pattern"></div>
    <div class="page-hero-ambient-glow"></div>

    <div class="container" style="position: relative; z-index: 2; width: 100%;">
      <div style="max-width: 880px; margin: 0 auto; text-align: center;">
        <div class="section-tag-badge" style="display: inline-flex; align-items: center; gap: 0.5rem; margin-bottom: 1.25rem;">
          <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #F59E0B;"></span>
          OPERATIONAL BLUEPRINT • FOOD RELIEF MODEL
        </div>

        <h1 class="hero-title" style="color: #FFFFFF; font-size: clamp(2.35rem, 4.5vw, 3.85rem); line-height: 1.12; font-weight: 800; margin-bottom: 1.25rem;">
          Food Relief Model &amp; <span class="serif-accent" style="font-family: var(--font-serif); font-style: italic; color: #F59E0B; font-weight: 400;">Operating Architecture.</span>
        </h1>

        <p class="hero-desc" style="color: #CBD5E1; font-size: clamp(1.05rem, 1.8vw, 1.2rem); line-height: 1.65; max-width: 760px; margin: 0 auto 2.25rem;">
          A dignified, hygienic, and scalable decentralized feeding network engineered to eliminate urban hunger across vulnerable demographic pockets with clinical precision.
        </p>

        <div class="hero-button-group" style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <a href="#beneficiaries" class="btn-primary-glow">
            Explore Beneficiary Cadre ↓
          </a>
          <a href="#kitchen-standards" class="btn-secondary-outline">
            FSSAI Kitchen Standards &rarr;
          </a>
        </div>

        <!-- Metric Telemetry Ribbon -->
        <div class="hero-metric-ribbon">
          <div class="hero-metric-item">
            <span class="hero-metric-val emerald">822 Meals</span>
            <span class="hero-metric-label">Daily Capacity</span>
            <span class="hero-metric-sub">Hot Thalis Cooked Daily</span>
          </div>
          <div class="hero-metric-divider"></div>
          <div class="hero-metric-item">
            <span class="hero-metric-val orange">&gt;65&deg;C</span>
            <span class="hero-metric-label">Hot-Holding Transit</span>
            <span class="hero-metric-sub">Bacterial Inhibition Standard</span>
          </div>
          <div class="hero-metric-divider"></div>
          <div class="hero-metric-item">
            <span class="hero-metric-val blue">2 Hours</span>
            <span class="hero-metric-label">Dispatch Window</span>
            <span class="hero-metric-sub">Kettle to Hands Window</span>
          </div>
          <div class="hero-metric-divider"></div>
          <div class="hero-metric-item">
            <span class="hero-metric-val">100%</span>
            <span class="hero-metric-label">Eco Packaging</span>
            <span class="hero-metric-sub">Biodegradable Compostable</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 2: Target Beneficiaries (Slide 6) -->
  <section class="section-problem" id="beneficiaries" style="padding: 6rem 0; background: #FAFAF9;">
    <div class="container">
      <div style="text-align: center; max-width: 820px; margin: 0 auto 3.5rem;">
        <span class="section-tag-badge">PRIORITY GROUPS • SLIDE 6</span>
        <h2 class="section-title">
          Target <span class="serif-accent" style="font-family: var(--font-serif); font-style: italic; color: #EA580C; font-weight: 400;">Beneficiaries.</span>
        </h2>
        <p class="section-desc" style="margin: 0 auto;">
          The foundation prioritizes individuals and communities facing extreme food insecurity while protecting human dignity, privacy, and nutritional adequacy.
        </p>
      </div>

      <div class="beneficiary-bento">
        <div class="beneficiary-card">
          <div>
            <span class="beneficiary-index">GROUP 01</span>
            <h3 class="beneficiary-title">Homeless &amp; Street Dwellers</h3>
            <p class="beneficiary-desc">
              Individuals residing on pavements, railway platforms, flyover underpasses, and municipal night shelters with zero cooking facilities or dependable income.
            </p>
          </div>
          <div style="margin-top: 1.5rem; font-family: var(--font-mono); font-size: 0.78rem; color: #B45309; font-weight: 700;">
            Immediate Daily Hot Meal Support
          </div>
        </div>

        <div class="beneficiary-card">
          <div>
            <span class="beneficiary-index">GROUP 02</span>
            <h3 class="beneficiary-title">Daily Wage Workers</h3>
            <p class="beneficiary-desc">
              Casual laborers, rickshaw pullers, and construction workers who frequently face dry spells without employment and cannot afford nutritious grain portions.
            </p>
          </div>
          <div style="margin-top: 1.5rem; font-family: var(--font-mono); font-size: 0.78rem; color: #B45309; font-weight: 700;">
            High-Calorie Morning Sustenance
          </div>
        </div>

        <div class="beneficiary-card">
          <div>
            <span class="beneficiary-index">GROUP 03</span>
            <h3 class="beneficiary-title">Vulnerable Children</h3>
            <p class="beneficiary-desc">
              Children in impoverished urban settlements at severe risk of developmental stunting, prioritized for high-protein pulses, fresh fruit, and iron-rich vegetables.
            </p>
          </div>
          <div style="margin-top: 1.5rem; font-family: var(--font-mono); font-size: 0.78rem; color: #B45309; font-weight: 700;">
            Protein &amp; Micronutrient Defense
          </div>
        </div>

        <div class="beneficiary-card">
          <div>
            <span class="beneficiary-index">GROUP 04</span>
            <h3 class="beneficiary-title">Destitute &amp; Abandoned Elderly</h3>
            <p class="beneficiary-desc">
              Abandoned senior citizens lacking familial support or physical mobility, provided with soft, easily digestible, and nutrient-dense meal preparations.
            </p>
          </div>
          <div style="margin-top: 1.5rem; font-family: var(--font-mono); font-size: 0.78rem; color: #B45309; font-weight: 700;">
            Gentle Dignified Nutrition
          </div>
        </div>

        <div class="beneficiary-card span-2">
          <div>
            <span class="beneficiary-index">GROUP 05 • DISASTER &amp; CRISIS</span>
            <h3 class="beneficiary-title" style="font-size: 1.55rem;">Economically Distressed Families</h3>
            <p class="beneficiary-desc">
              Families facing acute sudden economic hardship, medical crises, breadwinner loss, or localized displacement. We provide recurring dignified food packets directly to households, preventing familial destitution until wage stability is re-established.
            </p>
          </div>
          <div style="margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px solid rgba(255, 255, 255, 0.12); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
            <span style="font-family: var(--font-mono); font-size: 0.8rem; color: #FDE68A;">Confidential &amp; Non-Judgmental Delivery Protocol</span>
            <span style="font-family: var(--font-mono); font-size: 0.8rem; color: #4ADE80; font-weight: 700;">Verified Field Sampling</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 3: Food Preparation & Quality Standards (Slide 8) -->
  <section class="section-components" id="kitchen-standards" style="padding: 6rem 0; background: #FFFFFF; border-top: 1px solid var(--border-subtle); border-bottom: 1px solid var(--border-subtle);">
    <div class="container">
      <div class="problem-split-grid">
        <div>
          <span class="section-tag-badge emerald">FSSAI COMPLIANCE • HYGIENE FRAMEWORK</span>
          <h2 class="section-title">
            Rigorous Kitchen &amp; <span class="serif-accent" style="font-family: var(--font-serif); font-style: italic; color: #16A34A; font-weight: 400;">Safety Standards.</span>
          </h2>
          <p class="section-desc" style="margin-bottom: 2rem;">
            Food safety and clinical hygiene are non-negotiable across every phase of our central kitchen and dispatch network.
          </p>

          <div style="display: flex; flex-direction: column; gap: 1.15rem;">
            <div class="challenge-row-card">
              <span class="challenge-idx" style="color: #16A34A; background: rgba(22, 163, 74, 0.12); border-color: rgba(22, 163, 74, 0.25);">✓</span>
              <div>
                <h4 class="challenge-title">Verified Wholesale Procurement</h4>
                <p class="challenge-desc">All grains, lentils, cold-pressed oils, and fresh produce are sourced exclusively from vetted wholesale mandis adhering to stringent moisture and pest-free criteria.</p>
              </div>
            </div>

            <div class="challenge-row-card">
              <span class="challenge-idx" style="color: #16A34A; background: rgba(22, 163, 74, 0.12); border-color: rgba(22, 163, 74, 0.25);">✓</span>
              <div>
                <h4 class="challenge-title">FSSAI Regulatory Water &amp; Food Testing</h4>
                <p class="challenge-desc">Kitchen facilities operate strictly under Food Safety and Standards Authority of India (FSSAI) guidelines, including RO water microbiology audits and certified NABL lab sampling.</p>
              </div>
            </div>

            <div class="challenge-row-card">
              <span class="challenge-idx" style="color: #16A34A; background: rgba(22, 163, 74, 0.12); border-color: rgba(22, 163, 74, 0.25);">✓</span>
              <div>
                <h4 class="challenge-title">Sanitized Cauldrons &amp; Thermal Vessels</h4>
                <p class="challenge-desc">Heavy-gauge food-grade 304 stainless steel cauldrons, high-pressure steam boiling, and vacuum-insulated drums keep food safe and hot at &gt;65°C throughout transit.</p>
              </div>
            </div>

            <div class="challenge-row-card">
              <span class="challenge-idx" style="color: #16A34A; background: rgba(22, 163, 74, 0.12); border-color: rgba(22, 163, 74, 0.25);">✓</span>
              <div>
                <h4 class="challenge-title">100% Biodegradable Compostable Packaging</h4>
                <p class="challenge-desc">Zero single-use plastics. Meals are dispatched in biodegradable bagasse fiber plates and unbleached paper sleeves, preventing ecological contamination.</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="problem-image-box" style="position: sticky; top: 110px;">
            <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=85" alt="Hygienic industrial food preparation adhering to FSSAI standards" class="problem-img" style="height: 520px; object-fit: cover; border-radius: 20px;">
            <div class="problem-solution-card" style="background: rgba(28, 25, 23, 0.92); backdrop-filter: blur(12px); border: 1.5px solid rgba(255, 255, 255, 0.15); border-radius: 16px; padding: 1.5rem; color: #FFFFFF;">
              <span class="solution-badge" style="background: #16A34A; color: #FFFFFF; font-family: var(--font-mono); font-size: 0.72rem; padding: 0.25rem 0.65rem; border-radius: 6px;">CLINICAL SAFETY FIRST</span>
              <h4 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 800; margin: 0.6rem 0 0.35rem; color: #FFFFFF;">Daily Batch Quality Sampling</h4>
              <p style="font-size: 0.88rem; color: #CBD5E1; line-height: 1.6;">
                Every single cooking cycle undergoes strict temperature verification (&gt;65&deg;C) and organoleptic taste testing before leaving the central facility dispatch bay.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 4: 3-Phase Distribution Strategy (Slide 10) -->
  <section class="section-problem" id="distribution-strategy" style="padding: 6rem 0; background: #0F172A; color: #FFFFFF; border-bottom: 1px solid rgba(255, 255, 255, 0.08);">
    <div class="container">
      <div style="max-width: 820px; margin-bottom: 3.5rem;">
        <span class="section-tag-badge">LOGISTICAL STRATEGY • SLIDE 10</span>
        <h2 class="section-title" style="color: #FFFFFF;">
          Three-Phase <span class="serif-accent" style="font-family: var(--font-serif); font-style: italic; color: #F59E0B; font-weight: 400;">Distribution Blueprint.</span>
        </h2>
        <p class="section-desc" style="color: #94A3B8;">
          The foundation executes a phased logistical roadmap to maximize field outreach while systematically minimizing kitchen operating overhead.
        </p>
      </div>

      <div class="pipeline-roadmap-grid">
        <div class="pipeline-card" style="background: #1C1917; border-color: rgba(255, 255, 255, 0.12); color: #FFFFFF;">
          <div>
            <span class="pipeline-phase-pill" style="background: rgba(180, 83, 9, 0.25); color: #FDBA74; border-color: rgba(245, 158, 11, 0.35);">PHASE 01 • PILOT</span>
            <h3 class="pipeline-title" style="color: #FFFFFF;">Pilot Distribution Network</h3>
            <p class="pipeline-desc" style="color: #CBD5E1;">
              Stress-test batch portion calibration, temperature stability, and transit routes across 2 to 3 high-need urban clusters in Saharanpur.
            </p>
          </div>
          <ul class="pipeline-metrics-list" style="border-top-color: rgba(255, 255, 255, 0.1);">
            <li style="color: #E2E8F0;"><strong style="color: #FDBA74;">150–300</strong> Meals Cooked Daily</li>
            <li style="color: #E2E8F0;"><strong style="color: #FDBA74;">2–3</strong> Dedicated Daily Dispatch Hubs</li>
            <li style="color: #E2E8F0;"><strong style="color: #FDBA74;">100%</strong> Baseline Recipe Calibration</li>
          </ul>
        </div>

        <div class="pipeline-card" style="background: #1C1917; border: 2px solid #EA580C; box-shadow: 0 20px 50px -10px rgba(234, 88, 12, 0.25); color: #FFFFFF;">
          <div>
            <span class="pipeline-phase-pill" style="background: linear-gradient(135deg, #B45309, #EA580C); color: #FFFFFF; border-color: #EA580C;">PHASE 02 • SCALE &amp; EXPANSION</span>
            <h3 class="pipeline-title" style="color: #FFFFFF;">Full Operational Scale</h3>
            <p class="pipeline-desc" style="color: #CBD5E1;">
              Transition to the permanent ₹2 Crore target run-rate of 822 nutritious hot meals daily, utilizing customized insulated delivery vans and standardized route registries.
            </p>
          </div>
          <ul class="pipeline-metrics-list" style="border-top-color: rgba(255, 255, 255, 0.15);">
            <li style="color: #FFFFFF;"><strong style="color: #4ADE80;">822 Meals</strong> / Day (3,00,000 / Year)</li>
            <li style="color: #FFFFFF;"><strong style="color: #4ADE80;">5–10</strong> Fixed Daily Distribution Points</li>
            <li style="color: #FFFFFF;"><strong style="color: #4ADE80;">Dedicated</strong> Insulated Mobile Van Fleet</li>
          </ul>
        </div>

        <div class="pipeline-card" style="background: #1C1917; border-color: rgba(255, 255, 255, 0.12); color: #FFFFFF;">
          <div>
            <span class="pipeline-phase-pill" style="background: rgba(37, 99, 235, 0.25); color: #93C5FD; border-color: rgba(96, 165, 250, 0.35);">PHASE 03 • SUSTAINABILITY</span>
            <h3 class="pipeline-title" style="color: #FFFFFF;">Regional Network Ecosystem</h3>
            <p class="pipeline-desc" style="color: #CBD5E1;">
              Establish permanent multi-year institutional alliances with municipal welfare bodies, regional mandis, commercial food rescue donors, and corporate CSR committees.
            </p>
          </div>
          <ul class="pipeline-metrics-list" style="border-top-color: rgba(255, 255, 255, 0.1);">
            <li style="color: #E2E8F0;"><strong style="color: #93C5FD;">100+</strong> Trained Volunteer Cadre</li>
            <li style="color: #E2E8F0;"><strong style="color: #93C5FD;">30+ MT</strong> Food Surplus Diverted / Year</li>
            <li style="color: #E2E8F0;"><strong style="color: #93C5FD;">Section 135</strong> Corporate Multi-Year CSR</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 5: Call to Action Banner -->
  <section style="padding: 5rem 0; background: radial-gradient(circle at 50% 50%, rgba(180, 83, 9, 0.25) 0%, rgba(28, 25, 23, 0.98) 75%), #1C1917; border-top: 1px solid rgba(255, 255, 255, 0.1);">
    <div class="container" style="text-align: center; max-width: 780px;">
      <span class="section-tag-badge" style="background: rgba(245, 158, 11, 0.2); color: #FDE68A; border-color: rgba(245, 158, 11, 0.35);">
        JOIN THE MOVEMENT • FEED WITH DIGNITY
      </span>
      <h2 style="font-family: var(--font-heading); font-size: clamp(2rem, 3.2vw, 2.75rem); font-weight: 800; color: #FFFFFF; margin-top: 1rem; margin-bottom: 1rem;">
        Support Our Clinical Hunger Relief Operations
      </h2>
      <p style="color: #CBD5E1; font-size: 1.05rem; line-height: 1.65; margin-bottom: 2rem;">
        Whether you are a company seeking certified Section 135 CSR impact or an individual seeking to sponsor a day of 822 fresh meals with 80G tax benefits, your support matters.
      </p>
      <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
        <a href="donate.html" class="btn-primary-glow">
          Sponsor Daily Meals [80G] &rarr;
        </a>
        <a href="volunteer.html" class="btn-secondary-outline">
          Join Volunteer Field Cadre
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

fs.writeFileSync('programs.html', programsHtml, 'utf8');
console.log('Successfully reconstructed programs.html with complete operating architecture!');
