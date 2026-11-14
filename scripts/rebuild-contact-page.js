const fs = require('fs');

const contactHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Founder Desk & Headquarters | Sarwe Unnati Foundation</title>
  <meta name="description" content="Connect directly with Founder & Director Priyesh Garg, access the statutory Section 8 legal dossier, or schedule an on-site kitchen inspection in Saharanpur.">
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
        <a href="volunteer.html" class="nav-item">Volunteers</a>
        <a href="contact.html" class="nav-item active">Contact</a>
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
      <a href="volunteer.html" class="drawer-link">Volunteer Ground Cadre</a>
      <a href="contact.html" class="drawer-link active">Founder &amp; Headquarters</a>
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

  <!-- Section 1: Contact Page Hero -->
  <section class="page-hero-banner" id="hero-section">
    <div class="page-hero-grid-pattern"></div>
    <div class="page-hero-ambient-glow"></div>

    <div class="container" style="position: relative; z-index: 2; width: 100%;">
      <div style="max-width: 880px; margin: 0 auto; text-align: center;">
        <div class="section-tag-badge" style="display: inline-flex; align-items: center; gap: 0.5rem; margin-bottom: 1.25rem;">
          <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #F59E0B;"></span>
          FOUNDER DESK • DIRECT ACCESS
        </div>

        <h1 class="hero-title" style="color: #FFFFFF; font-size: clamp(2.35rem, 4.5vw, 3.85rem); line-height: 1.12; font-weight: 800; margin-bottom: 1.25rem;">
          Headquarters &amp; <span class="serif-accent" style="font-family: var(--font-serif); font-style: italic; color: #F59E0B; font-weight: 400;">Executive Communication.</span>
        </h1>

        <p class="hero-desc" style="color: #CBD5E1; font-size: clamp(1.05rem, 1.8vw, 1.2rem); line-height: 1.65; max-width: 760px; margin: 0 auto 2.25rem;">
          Direct communication line to Founder &amp; Director Priyesh Garg, verified Section 8 statutory repository, and headquarters in Saharanpur, Uttar Pradesh.
        </p>

        <div class="hero-button-group" style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <a href="#inquiry-form" class="btn-primary-glow">
            Transmit Executive Inquiry ↓
          </a>
          <a href="#statutory-dossier" class="btn-secondary-outline">
            Statutory Legal Dossier &rarr;
          </a>
        </div>

        <!-- Metric Telemetry Ribbon -->
        <div class="hero-metric-ribbon">
          <div class="hero-metric-item">
            <span class="hero-metric-val emerald">Priyesh Garg</span>
            <span class="hero-metric-label">Founder &amp; Director</span>
            <span class="hero-metric-sub">Personal Oversight</span>
          </div>
          <div class="hero-metric-divider"></div>
          <div class="hero-metric-item">
            <span class="hero-metric-val orange">+91 99974</span>
            <span class="hero-metric-label">Direct Mobile / WhatsApp</span>
            <span class="hero-metric-sub">+91 99974 26815</span>
          </div>
          <div class="hero-metric-divider"></div>
          <div class="hero-metric-item">
            <span class="hero-metric-val blue">247001</span>
            <span class="hero-metric-label">Headquarters PIN</span>
            <span class="hero-metric-sub">Delhi Road, Saharanpur</span>
          </div>
          <div class="hero-metric-divider"></div>
          <div class="hero-metric-item">
            <span class="hero-metric-val">&lt;24 Hours</span>
            <span class="hero-metric-label">Response Cadence</span>
            <span class="hero-metric-sub">Executive Fiduciary SLA</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 2: Director Coordinates & Statutory Dossier Split Grid -->
  <section style="padding: 6rem 0; background: #0F172A; border-top: 1px solid rgba(255, 255, 255, 0.08); border-bottom: 1px solid rgba(255, 255, 255, 0.08);" id="statutory-dossier">
    <div class="container">
      <div class="problem-split-grid" style="align-items: stretch; gap: 2.5rem;">
        
        <!-- Director Coordinates Card -->
        <div class="passbook-terminal-card" style="background: #1C1917; border: 1.5px solid rgba(255, 255, 255, 0.14); border-radius: 20px; padding: 2.75rem; color: #FFFFFF; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; border-bottom: 1px dashed rgba(255, 255, 255, 0.15); padding-bottom: 1rem;">
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #F59E0B; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em;">PRIMARY STEWARDSHIP</span>
              <span style="font-family: var(--font-mono); font-size: 0.72rem; color: #4ADE80; background: rgba(74, 222, 128, 0.15); padding: 0.2rem 0.6rem; border-radius: 999px;">DIRECTOR DESK</span>
            </div>

            <h3 style="font-family: var(--font-display); font-size: 1.75rem; font-weight: 800; color: #FFFFFF; margin-bottom: 0.5rem;">
              Priyesh Garg
            </h3>
            <p style="color: #94A3B8; font-size: 0.92rem; line-height: 1.6; margin-bottom: 1.75rem;">
              Founder &amp; Director overseeing frontline food relief operations, APMC grain procurement, and compliance under Section 8.
            </p>

            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="padding: 1rem 1.25rem; background: #24201D; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.08);">
                <span style="font-family: var(--font-mono); font-size: 0.72rem; color: #A8A29E; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 0.25rem;">DIRECT PHONE &amp; WHATSAPP</span>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <a href="tel:+919997426815" style="font-family: var(--font-mono); font-size: 1.15rem; color: #4ADE80; font-weight: 800;">+91 99974 26815</a>
                  <button type="button" class="btn-copy-chip" data-copy="+919997426815" aria-label="Copy phone number">Copy</button>
                </div>
              </div>

              <div style="padding: 1rem 1.25rem; background: #24201D; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.08);">
                <span style="font-family: var(--font-mono); font-size: 0.72rem; color: #A8A29E; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 0.25rem;">OFFICIAL DIRECTOR EMAIL</span>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <a href="mailto:priyesh.chanu@gmail.com" style="font-family: var(--font-mono); font-size: 0.95rem; color: #FDBA74; font-weight: 700;">priyesh.chanu@gmail.com</a>
                  <button type="button" class="btn-copy-chip" data-copy="priyesh.chanu@gmail.com" aria-label="Copy email">Copy</button>
                </div>
              </div>

              <div style="padding: 1rem 1.25rem; background: #24201D; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.08);">
                <span style="font-family: var(--font-mono); font-size: 0.72rem; color: #A8A29E; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 0.25rem;">REGISTERED HEADQUARTERS</span>
                <span style="font-size: 0.92rem; color: #E2E8F0; line-height: 1.55; display: block;">
                  House No. 119, Vaishali Vihar, Near Dharia Builder, Delhi Road, Saharanpur — 247001, Uttar Pradesh
                </span>
              </div>
            </div>
          </div>

          <div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px dashed rgba(255, 255, 255, 0.12); display: flex; gap: 0.85rem;">
            <a href="tel:+919997426815" class="btn-primary-glow btn-sm" style="flex: 1; text-align: center;">Direct Voice Call</a>
            <a href="https://wa.me/919997426815" target="_blank" rel="noopener noreferrer" class="btn-secondary-outline btn-sm" style="flex: 1; text-align: center;">WhatsApp Chat</a>
          </div>
        </div>

        <!-- Statutory Identifiers Dossier -->
        <div class="passbook-terminal-card" style="background: #1C1917; border: 1.5px solid rgba(255, 255, 255, 0.14); border-radius: 20px; padding: 2.75rem; color: #FFFFFF; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; border-bottom: 1px dashed rgba(255, 255, 255, 0.15); padding-bottom: 1rem;">
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #60A5FA; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em;">STATUTORY REPOSITORY</span>
              <span style="font-family: var(--font-mono); font-size: 0.72rem; color: #93C5FD; background: rgba(59, 130, 246, 0.15); padding: 0.2rem 0.6rem; border-radius: 999px;">GOVT VERIFIED</span>
            </div>

            <h3 style="font-family: var(--font-display); font-size: 1.75rem; font-weight: 800; color: #FFFFFF; margin-bottom: 0.5rem;">
              Statutory Dossier
            </h3>
            <p style="color: #94A3B8; font-size: 0.92rem; line-height: 1.6; margin-bottom: 1.75rem;">
              Incorporated under Section 8 of the Companies Act, 2013 on August 14, 2018. Fiduciary records authenticated by CBDT and RoC Kanpur.
            </p>

            <div style="display: flex; flex-direction: column; gap: 0.85rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.85rem 1rem; background: #24201D; border-radius: 10px; border: 1px solid rgba(255, 255, 255, 0.06);">
                <div>
                  <span style="font-size: 0.75rem; color: #94A3B8; display: block; font-family: var(--font-mono);">CORPORATE IDENTITY NUMBER (CIN)</span>
                  <span style="font-family: var(--font-mono); font-size: 0.9rem; font-weight: 700; color: #FFFFFF;">U80902UP2018NPL106959</span>
                </div>
                <button type="button" class="btn-copy-chip" data-copy="U80902UP2018NPL106959">Copy</button>
              </div>

              <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.85rem 1rem; background: #24201D; border-radius: 10px; border: 1px solid rgba(255, 255, 255, 0.06);">
                <div>
                  <span style="font-size: 0.75rem; color: #94A3B8; display: block; font-family: var(--font-mono);">80G TAX EXEMPTION URN</span>
                  <span style="font-family: var(--font-mono); font-size: 0.9rem; font-weight: 700; color: #4ADE80;">AAECH6219BF20261</span>
                </div>
                <button type="button" class="btn-copy-chip" data-copy="AAECH6219BF20261">Copy</button>
              </div>

              <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.85rem 1rem; background: #24201D; border-radius: 10px; border: 1px solid rgba(255, 255, 255, 0.06);">
                <div>
                  <span style="font-size: 0.75rem; color: #94A3B8; display: block; font-family: var(--font-mono);">12A INSTITUTIONAL URN</span>
                  <span style="font-family: var(--font-mono); font-size: 0.9rem; font-weight: 700; color: #FFFFFF;">AAECH6219BE20251</span>
                </div>
                <button type="button" class="btn-copy-chip" data-copy="AAECH6219BE20251">Copy</button>
              </div>

              <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.85rem 1rem; background: #24201D; border-radius: 10px; border: 1px solid rgba(255, 255, 255, 0.06);">
                <div>
                  <span style="font-size: 0.75rem; color: #94A3B8; display: block; font-family: var(--font-mono);">NITI AAYOG NGO DARPAN</span>
                  <span style="font-family: var(--font-mono); font-size: 0.9rem; font-weight: 700; color: #FFFFFF;">UP/2025/0710389</span>
                </div>
                <button type="button" class="btn-copy-chip" data-copy="UP/2025/0710389">Copy</button>
              </div>

              <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.85rem 1rem; background: #24201D; border-radius: 10px; border: 1px solid rgba(255, 255, 255, 0.06);">
                <div>
                  <span style="font-size: 0.75rem; color: #94A3B8; display: block; font-family: var(--font-mono);">CANARA BANK DIRECT WIRE A/C</span>
                  <span style="font-family: var(--font-mono); font-size: 0.9rem; font-weight: 700; color: #FDBA74;">2201201002013 (CNRB0002201)</span>
                </div>
                <button type="button" class="btn-copy-chip" data-copy="2201201002013">Copy</button>
              </div>
            </div>
          </div>

          <div style="margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px dashed rgba(255, 255, 255, 0.12); font-family: var(--font-mono); font-size: 0.75rem; color: #A8A29E; text-align: center;">
            Official Section 8 Seal &bull; Non-Profit Public Charity
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Section 3: Direct Executive Inquiry Form -->
  <section id="inquiry-form" style="padding: 6rem 0; background: #0B1120; color: #FFFFFF;">
    <div class="container">
      <div style="max-width: 820px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 3.5rem;">
          <span class="section-tag-badge">COMMUNICATION DESK • EXECUTIVE INQUIRY</span>
          <h2 class="section-title" style="color: #FFFFFF;">
            Direct Executive <span class="serif-accent" style="font-family: var(--font-serif); font-style: italic; color: #F59E0B; font-weight: 400;">Inquiry Form.</span>
          </h2>
          <p class="section-desc" style="color: #94A3B8; margin: 0 auto;">
            Whether inquiring about Section 135 CSR tie-ups, scheduling an on-site kitchen food inspection, or requesting audited financial ledgers, submit your details below.
          </p>
        </div>

        <div class="modern-budget-card" style="margin-top: 0; padding: 2.75rem;">
          <form id="contact-form" onsubmit="event.preventDefault(); showToast('Inquiry transmitted! Director Priyesh Garg will respond within 24 hours.'); this.reset();">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem;">
              <div>
                <label style="display: block; font-family: var(--font-mono); font-size: 0.75rem; text-transform: uppercase; color: #A8A29E; margin-bottom: 0.5rem; letter-spacing: 0.05em;">YOUR NAME *</label>
                <input type="text" required placeholder="e.g. Vikram Malhotra" style="width: 100%; padding: 0.85rem 1.15rem; background: #24201D; border: 1.5px solid rgba(255, 255, 255, 0.12); border-radius: 12px; color: #FFFFFF; font-size: 0.95rem;">
              </div>

              <div>
                <label style="display: block; font-family: var(--font-mono); font-size: 0.75rem; text-transform: uppercase; color: #A8A29E; margin-bottom: 0.5rem; letter-spacing: 0.05em;">COMPANY / ENTITY NAME</label>
                <input type="text" placeholder="e.g. Tata Steel CSR / Philanthropic Trust" style="width: 100%; padding: 0.85rem 1.15rem; background: #24201D; border: 1.5px solid rgba(255, 255, 255, 0.12); border-radius: 12px; color: #FFFFFF; font-size: 0.95rem;">
              </div>

              <div>
                <label style="display: block; font-family: var(--font-mono); font-size: 0.75rem; text-transform: uppercase; color: #A8A29E; margin-bottom: 0.5rem; letter-spacing: 0.05em;">OFFICIAL EMAIL ADDRESS *</label>
                <input type="email" required placeholder="vikram@company.com" style="width: 100%; padding: 0.85rem 1.15rem; background: #24201D; border: 1.5px solid rgba(255, 255, 255, 0.12); border-radius: 12px; color: #FFFFFF; font-size: 0.95rem;">
              </div>

              <div>
                <label style="display: block; font-family: var(--font-mono); font-size: 0.75rem; text-transform: uppercase; color: #A8A29E; margin-bottom: 0.5rem; letter-spacing: 0.05em;">PHONE / WHATSAPP *</label>
                <input type="tel" required placeholder="+91 98765 43210" style="width: 100%; padding: 0.85rem 1.15rem; background: #24201D; border: 1.5px solid rgba(255, 255, 255, 0.12); border-radius: 12px; color: #FFFFFF; font-size: 0.95rem;">
              </div>

              <div style="grid-column: 1 / -1;">
                <label style="display: block; font-family: var(--font-mono); font-size: 0.75rem; text-transform: uppercase; color: #A8A29E; margin-bottom: 0.5rem; letter-spacing: 0.05em;">INQUIRY CLASSIFICATION *</label>
                <select required style="width: 100%; padding: 0.85rem 1.15rem; background: #24201D; border: 1.5px solid rgba(255, 255, 255, 0.12); border-radius: 12px; color: #FFFFFF; font-size: 0.95rem;">
                  <option value="">Select purpose...</option>
                  <option value="csr">Corporate CSR Partnership (Schedule VII Mandate)</option>
                  <option value="kitchen-audit">Schedule Physical Kitchen Inspection / Food Safety Audit</option>
                  <option value="philanthropy">Individual High-Value Donorship (80G Tax Exemption)</option>
                  <option value="surplus-food">Commercial Banquet / Hotel Surplus Food Recovery</option>
                  <option value="media">Media, Press &amp; Academic Research Inquiry</option>
                  <option value="general">General Foundation Inquiry</option>
                </select>
              </div>

              <div style="grid-column: 1 / -1;">
                <label style="display: block; font-family: var(--font-mono); font-size: 0.75rem; text-transform: uppercase; color: #A8A29E; margin-bottom: 0.5rem; letter-spacing: 0.05em;">DETAILED MESSAGE *</label>
                <textarea rows="4" required placeholder="Please outline your proposed alliance, timeline, or query..." style="width: 100%; padding: 0.85rem 1.15rem; background: #24201D; border: 1.5px solid rgba(255, 255, 255, 0.12); border-radius: 12px; color: #FFFFFF; font-size: 0.95rem;"></textarea>
              </div>
            </div>

            <div style="margin-top: 2rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; border-top: 1px dashed rgba(255, 255, 255, 0.12); padding-top: 1.75rem;">
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #94A3B8;">
                Direct delivery to Director Priyesh Garg &bull; Confidential
              </span>
              <button type="submit" class="btn-primary-glow" style="padding: 0.85rem 2.25rem;">
                Transmit Inquiry Directly to Director &rarr;
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

fs.writeFileSync('contact.html', contactHtml, 'utf8');
console.log('Successfully reconstructed contact.html!');
