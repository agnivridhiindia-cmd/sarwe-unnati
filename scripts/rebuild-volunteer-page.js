const fs = require('fs');

const volunteerHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Volunteer Ground Cadre & Service Tracks | Sarwe Unnati Foundation</title>
  <meta name="description" content="Join Sarwe Unnati Foundation's disciplined volunteer ground cadre. Serve in central kitchen prep, route distribution, surplus food rescue, and community surveys.">
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
        <a href="impact.html" class="nav-item">Impact &amp; Budget</a>
        <a href="volunteer.html" class="nav-item active">Volunteers</a>
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
      <a href="impact.html" class="drawer-link">Impact &amp; Budget</a>
      <a href="donate.html" class="drawer-link">CSR Alliances &amp; 80G Donate</a>
      <a href="volunteer.html" class="drawer-link active">Volunteer Ground Cadre</a>
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

  <!-- Section 1: Volunteer Page Hero -->
  <section class="page-hero-banner" id="hero-section">
    <div class="page-hero-grid-pattern"></div>
    <div class="page-hero-ambient-glow"></div>

    <div class="container" style="position: relative; z-index: 2; width: 100%;">
      <div style="max-width: 880px; margin: 0 auto; text-align: center;">
        <div class="section-tag-badge" style="display: inline-flex; align-items: center; gap: 0.5rem; margin-bottom: 1.25rem;">
          <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #F59E0B;"></span>
          COMMUNITY MOBILIZATION • FIELD CADRE
        </div>

        <h1 class="hero-title" style="color: #FFFFFF; font-size: clamp(2.35rem, 4.5vw, 3.85rem); line-height: 1.12; font-weight: 800; margin-bottom: 1.25rem;">
          Volunteer Ground Cadre &amp; <span class="serif-accent" style="font-family: var(--font-serif); font-style: italic; color: #F59E0B; font-weight: 400;">Field Opportunities.</span>
        </h1>

        <p class="hero-desc" style="color: #CBD5E1; font-size: clamp(1.05rem, 1.8vw, 1.2rem); line-height: 1.65; max-width: 760px; margin: 0 auto 2.25rem;">
          Join a disciplined, trained humanitarian network delivering hot nourishing meals, cold-chain food rescue, and dignified care directly to vulnerable families across Saharanpur.
        </p>

        <div class="hero-button-group" style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <a href="#volunteer-form-section" class="btn-primary-glow">
            Apply for Field Cadre ↓
          </a>
          <a href="#tracks" class="btn-secondary-outline">
            Explore 4 Service Tracks &rarr;
          </a>
        </div>

        <!-- Metric Telemetry Ribbon -->
        <div class="hero-metric-ribbon">
          <div class="hero-metric-item">
            <span class="hero-metric-val emerald">50–100</span>
            <span class="hero-metric-label">Active Cadre</span>
            <span class="hero-metric-sub">Trained Field Volunteers</span>
          </div>
          <div class="hero-metric-divider"></div>
          <div class="hero-metric-item">
            <span class="hero-metric-val orange">4 Tracks</span>
            <span class="hero-metric-label">Specializations</span>
            <span class="hero-metric-sub">Kitchen, Routes, Rescue, Surveys</span>
          </div>
          <div class="hero-metric-divider"></div>
          <div class="hero-metric-item">
            <span class="hero-metric-val blue">100%</span>
            <span class="hero-metric-label">Safety PPE Provided</span>
            <span class="hero-metric-sub">FSSAI Sanitized Uniforms</span>
          </div>
          <div class="hero-metric-divider"></div>
          <div class="hero-metric-item">
            <span class="hero-metric-val">40 Hours</span>
            <span class="hero-metric-label">Commendation Seal</span>
            <span class="hero-metric-sub">Section 8 Verified Certificate</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 2: 4 Volunteer Service Tracks -->
  <section id="tracks" style="padding: 6rem 0; background: #0F172A; color: #FFFFFF; border-top: 1px solid rgba(255, 255, 255, 0.08); border-bottom: 1px solid rgba(255, 255, 255, 0.08);">
    <div class="container">
      <div style="max-width: 820px; margin-bottom: 3.5rem;">
        <span class="section-tag-badge">OPERATIONAL ROLES • 4 FIELD TRACKS</span>
        <h2 class="section-title" style="color: #FFFFFF;">
          Four Strategic <span class="serif-accent" style="font-family: var(--font-serif); font-style: italic; color: #F59E0B; font-weight: 400;">Service Tracks.</span>
        </h2>
        <p class="section-desc" style="color: #94A3B8;">
          Whether preparing early morning steam-kettles or mapping underserved settlements, our structured tracks provide safety, direction, and tangible community impact.
        </p>
      </div>

      <div class="beneficiary-bento" style="margin-top: 0;">
        <div class="pipeline-card">
          <div>
            <span class="pipeline-phase-pill" style="background: rgba(180, 83, 9, 0.25); color: #FDBA74; border-color: rgba(245, 158, 11, 0.35);">TRACK 01 • MORNING</span>
            <h3 class="pipeline-title">Central Kitchen Preparation</h3>
            <p class="pipeline-desc">
              Assist professional chefs in grain sorting, washing fresh vegetables, steam-cauldron boiling, and assembling compostable meal boxes at our central Saharanpur facility.
            </p>
          </div>
          <ul class="pipeline-metrics-list" style="border-top-color: rgba(255, 255, 255, 0.1);">
            <li style="color: #E2E8F0;"><strong style="color: #FDBA74;">Shift:</strong> 06:00 AM — 10:30 AM</li>
            <li style="color: #E2E8F0;"><strong style="color: #FDBA74;">Scope:</strong> Hygiene &amp; Batch Assembly</li>
            <li style="color: #E2E8F0;"><strong style="color: #FDBA74;">Skill:</strong> Attention to Cleanliness</li>
          </ul>
        </div>

        <div class="pipeline-card featured-phase">
          <div>
            <span class="pipeline-phase-pill" style="background: linear-gradient(135deg, #B45309, #EA580C); color: #FFFFFF; border-color: #EA580C;">TRACK 02 • MIDDAY FIELD</span>
            <h3 class="pipeline-title">Route Distribution Cadre</h3>
            <p class="pipeline-desc">
              Accompany insulated delivery vans along mapped urban routes. Ensure orderly, respectful, and dignified meal distribution to laborers, night shelter residents, and seniors.
            </p>
          </div>
          <ul class="pipeline-metrics-list" style="border-top-color: rgba(255, 255, 255, 0.15);">
            <li style="color: #FFFFFF;"><strong style="color: #4ADE80;">Shift:</strong> 11:30 AM — 03:00 PM</li>
            <li style="color: #FFFFFF;"><strong style="color: #4ADE80;">Scope:</strong> Frontline Field Service</li>
            <li style="color: #FFFFFF;"><strong style="color: #4ADE80;">Skill:</strong> Empathy &amp; Organization</li>
          </ul>
        </div>

        <div class="pipeline-card">
          <div>
            <span class="pipeline-phase-pill" style="background: rgba(37, 99, 235, 0.25); color: #93C5FD; border-color: rgba(96, 165, 250, 0.35);">TRACK 03 • NIGHT CADRE</span>
            <h3 class="pipeline-title">Surplus Food Rescue</h3>
            <p class="pipeline-desc">
              Respond to late-evening notifications from vetted banquets, marriage halls, and commercial catering partners. Test temperature, log weights, and transport safe surplus food.
            </p>
          </div>
          <ul class="pipeline-metrics-list" style="border-top-color: rgba(255, 255, 255, 0.1);">
            <li style="color: #E2E8F0;"><strong style="color: #93C5FD;">Shift:</strong> 08:30 PM — 11:30 PM</li>
            <li style="color: #E2E8F0;"><strong style="color: #93C5FD;">Scope:</strong> Rapid Food Rescue</li>
            <li style="color: #E2E8F0;"><strong style="color: #93C5FD;">Skill:</strong> Temperature Quality Check</li>
          </ul>
        </div>

        <div class="pipeline-card span-2" style="grid-column: span 3; background: linear-gradient(135deg, #1C1917 0%, #292524 60%, #332F2C 100%);">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem; align-items: center;">
            <div>
              <span class="pipeline-phase-pill" style="background: rgba(16, 185, 129, 0.2); color: #86EFAC; border-color: rgba(34, 197, 94, 0.35);">TRACK 04 • COMMUNITY RESEARCH</span>
              <h3 class="pipeline-title" style="font-size: 1.55rem; color: #FFFFFF;">Demographic Surveys &amp; GPS Geo-Mapping</h3>
              <p class="pipeline-desc" style="color: #D6D3D1;">
                Conduct dignified field surveys across informal settlements, construction laborer colonies, and railway perimeter clusters. Identify emerging hunger hotspots, assess child malnutrition risks, and record verified route data for executive governance review.
              </p>
            </div>
            <div style="background: #24201D; padding: 1.75rem; border-radius: 14px; border: 1px solid rgba(255, 255, 255, 0.1);">
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #FDE68A; text-transform: uppercase;">SPECIALIZED SKILLS WELCOME</span>
              <div style="margin-top: 0.75rem; font-size: 0.9rem; color: #CBD5E1; line-height: 1.6;">
                Social work graduates, nutritionists, data volunteers, and community organizers are encouraged to contribute analytical leadership.
              </div>
              <div style="margin-top: 1.25rem; font-family: var(--font-mono); font-size: 0.8rem; color: #4ADE80; font-weight: 700;">
                Flexible Hours &bull; Field Supervision Provided
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 3: Volunteer Standards, Safety & Code of Conduct -->
  <section style="padding: 6rem 0; background: #FAFAF9; border-bottom: 1px solid var(--border-subtle);">
    <div class="container">
      <div style="max-width: 820px; margin-bottom: 3.5rem;">
        <span class="section-tag-badge">CADRE PROTOCOLS • ETHICAL SERVICE</span>
        <h2 class="section-title">
          Safety, Hygiene &amp; <span class="serif-accent" style="font-family: var(--font-serif); font-style: italic; color: #16A34A; font-weight: 400;">Dignity Standards.</span>
        </h2>
        <p class="section-desc">
          Every volunteer represents the institutional reputation and moral covenant of Sarwe Unnati Foundation.
        </p>
      </div>

      <div class="beneficiary-bento" style="margin-top: 0;">
        <div class="beneficiary-card">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
              <span class="beneficiary-index">PROTOCOL 01</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16A34A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3 class="beneficiary-title">Mandatory PPE &amp; Sanitation</h3>
            <p class="beneficiary-desc">
              All volunteers in food handling are provided sanitized hairnets, disposable gloves, clean aprons, and thermal probes. Hand sanitization is enforced before every meal dispatch.
            </p>
          </div>
          <div style="margin-top: 1.5rem; font-family: var(--font-mono); font-size: 0.78rem; color: #16A34A; font-weight: 700;">
            100% FSSAI Hygiene Compliant
          </div>
        </div>

        <div class="beneficiary-card">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
              <span class="beneficiary-index">PROTOCOL 02</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EA580C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
            </div>
            <h3 class="beneficiary-title">Radical Dignity &amp; Respect</h3>
            <p class="beneficiary-desc">
              Zero public shaming. Beneficiaries must never be photographed without consent. Meals are handed over with two hands and courteous words, affirming their inherent human worth.
            </p>
          </div>
          <div style="margin-top: 1.5rem; font-family: var(--font-mono); font-size: 0.78rem; color: #EA580C; font-weight: 700;">
            Zero Exploitation Policy
          </div>
        </div>

        <div class="beneficiary-card">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
              <span class="beneficiary-index">PROTOCOL 03</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B45309" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
            </div>
            <h3 class="beneficiary-title">Certificate of Social Service</h3>
            <p class="beneficiary-desc">
              Volunteers completing 40+ verified field hours receive an institutional Certificate of Commendation authenticated by Founder Priyesh Garg under our Section 8 corporate seal.
            </p>
          </div>
          <div style="margin-top: 1.5rem; font-family: var(--font-mono); font-size: 0.78rem; color: #B45309; font-weight: 700;">
            Academic &amp; Professional Credential
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 4: Volunteer Onboarding Form -->
  <section id="volunteer-form-section" style="padding: 6rem 0; background: #0B1120; color: #FFFFFF;">
    <div class="container">
      <div style="max-width: 820px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 3.5rem;">
          <span class="section-tag-badge">JOIN THE CADRE • REGISTRATION</span>
          <h2 class="section-title" style="color: #FFFFFF;">
            Volunteer <span class="serif-accent" style="font-family: var(--font-serif); font-style: italic; color: #F59E0B; font-weight: 400;">Application Form.</span>
          </h2>
          <p class="section-desc" style="color: #94A3B8; margin: 0 auto;">
            Submit your details below to schedule an orientation session at our Saharanpur operations center. We welcome students, working professionals, and community elders.
          </p>
        </div>

        <div class="modern-budget-card" style="margin-top: 0; padding: 2.75rem;">
          <form id="volunteer-form" onsubmit="event.preventDefault(); showToast('Volunteer application submitted! Director Priyesh Garg will contact you for orientation.'); this.reset();">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem;">
              <div>
                <label style="display: block; font-family: var(--font-mono); font-size: 0.75rem; text-transform: uppercase; color: #A8A29E; margin-bottom: 0.5rem; letter-spacing: 0.05em;">FULL NAME *</label>
                <input type="text" required placeholder="e.g. Rahul Sharma" style="width: 100%; padding: 0.85rem 1.15rem; background: #24201D; border: 1.5px solid rgba(255, 255, 255, 0.12); border-radius: 12px; color: #FFFFFF; font-size: 0.95rem;">
              </div>

              <div>
                <label style="display: block; font-family: var(--font-mono); font-size: 0.75rem; text-transform: uppercase; color: #A8A29E; margin-bottom: 0.5rem; letter-spacing: 0.05em;">PHONE / WHATSAPP *</label>
                <input type="tel" required placeholder="+91 99974 26815" style="width: 100%; padding: 0.85rem 1.15rem; background: #24201D; border: 1.5px solid rgba(255, 255, 255, 0.12); border-radius: 12px; color: #FFFFFF; font-size: 0.95rem;">
              </div>

              <div>
                <label style="display: block; font-family: var(--font-mono); font-size: 0.75rem; text-transform: uppercase; color: #A8A29E; margin-bottom: 0.5rem; letter-spacing: 0.05em;">EMAIL ADDRESS *</label>
                <input type="email" required placeholder="name@example.com" style="width: 100%; padding: 0.85rem 1.15rem; background: #24201D; border: 1.5px solid rgba(255, 255, 255, 0.12); border-radius: 12px; color: #FFFFFF; font-size: 0.95rem;">
              </div>

              <div>
                <label style="display: block; font-family: var(--font-mono); font-size: 0.75rem; text-transform: uppercase; color: #A8A29E; margin-bottom: 0.5rem; letter-spacing: 0.05em;">LOCALITY / CITY *</label>
                <input type="text" required placeholder="e.g. Saharanpur / Delhi Road" style="width: 100%; padding: 0.85rem 1.15rem; background: #24201D; border: 1.5px solid rgba(255, 255, 255, 0.12); border-radius: 12px; color: #FFFFFF; font-size: 0.95rem;">
              </div>

              <div>
                <label style="display: block; font-family: var(--font-mono); font-size: 0.75rem; text-transform: uppercase; color: #A8A29E; margin-bottom: 0.5rem; letter-spacing: 0.05em;">PREFERRED SERVICE TRACK *</label>
                <select required style="width: 100%; padding: 0.85rem 1.15rem; background: #24201D; border: 1.5px solid rgba(255, 255, 255, 0.12); border-radius: 12px; color: #FFFFFF; font-size: 0.95rem;">
                  <option value="">Select track...</option>
                  <option value="kitchen">Track 01: Central Kitchen Prep (06:00 – 10:30 AM)</option>
                  <option value="distribution">Track 02: Route Distribution (11:30 AM – 03:00 PM)</option>
                  <option value="recovery">Track 03: Commercial Surplus Food Rescue (08:30 – 11:30 PM)</option>
                  <option value="surveys">Track 04: Community Needs Surveys &amp; Mapping</option>
                  <option value="any">Flexible / Wherever Most Needed</option>
                </select>
              </div>

              <div>
                <label style="display: block; font-family: var(--font-mono); font-size: 0.75rem; text-transform: uppercase; color: #A8A29E; margin-bottom: 0.5rem; letter-spacing: 0.05em;">WEEKLY AVAILABILITY *</label>
                <select required style="width: 100%; padding: 0.85rem 1.15rem; background: #24201D; border: 1.5px solid rgba(255, 255, 255, 0.12); border-radius: 12px; color: #FFFFFF; font-size: 0.95rem;">
                  <option value="">Select availability...</option>
                  <option value="weekends">Weekends Only (Sat &amp; Sun)</option>
                  <option value="weekdays">Weekday Mornings (Mon – Fri)</option>
                  <option value="evenings">Evenings / Night Rescue</option>
                  <option value="fulltime">Full-Time Community Fellowship (3+ Months)</option>
                </select>
              </div>

              <div style="grid-column: 1 / -1;">
                <label style="display: block; font-family: var(--font-mono); font-size: 0.75rem; text-transform: uppercase; color: #A8A29E; margin-bottom: 0.5rem; letter-spacing: 0.05em;">OPTIONAL NOTE / PRIOR EXPERIENCE</label>
                <textarea rows="3" placeholder="Tell us about yourself, previous volunteer work, or specific skills (driver, chef, first-aider, photographer)..." style="width: 100%; padding: 0.85rem 1.15rem; background: #24201D; border: 1.5px solid rgba(255, 255, 255, 0.12); border-radius: 12px; color: #FFFFFF; font-size: 0.95rem;"></textarea>
              </div>
            </div>

            <div style="margin-top: 2rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; border-top: 1px dashed rgba(255, 255, 255, 0.12); padding-top: 1.75rem;">
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #94A3B8;">
                Safety gear &amp; field training provided free of cost.
              </span>
              <button type="submit" class="btn-primary-glow" style="padding: 0.85rem 2rem;">
                Submit Volunteer Application &rarr;
              </button>
            </div>
          </form>
        </div>
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

fs.writeFileSync('volunteer.html', volunteerHtml, 'utf8');
console.log('Successfully reconstructed volunteer.html!');
