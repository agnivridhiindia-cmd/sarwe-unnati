const fs = require('fs');
const path = require('path');

// Helper to get standard header
function getHeader(activePage, pageBadge) {
  return `  <!-- Scroll Progress Indicator -->
  <div class="scroll-progress-bar" id="scroll-progress"></div>

  <!-- Header -->
  <header class="site-header" id="site-header">
    <div class="header-inner">
      <a href="index.html" class="brand-identity" aria-label="Sarwe Unnati Foundation Home">
        <div class="brand-emblem-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3">
            <polygon points="12 2 2 7 12 12 22 7 12 2"/>
            <polyline points="2 17 12 22 22 17"/>
            <polyline points="2 12 12 17 22 12"/>
          </svg>
        </div>
        <div class="brand-text-block">
          <span class="brand-main-name">SARWE UNNATI</span>
          <span class="brand-sub-badge">${pageBadge}</span>
        </div>
      </a>

      <nav class="nav-links-desktop">
        <a href="index.html" class="nav-item-link ${activePage === 'home' ? 'active' : ''}">Home</a>
        <a href="about.html" class="nav-item-link ${activePage === 'about' ? 'active' : ''}">About Us</a>
        <a href="programs.html" class="nav-item-link ${activePage === 'programs' ? 'active' : ''}">Relief Model</a>
        <a href="impact.html" class="nav-item-link ${activePage === 'impact' ? 'active' : ''}">Impact &amp; Budget</a>
        <a href="volunteer.html" class="nav-item-link ${activePage === 'volunteer' ? 'active' : ''}">Volunteer</a>
        <a href="contact.html" class="nav-item-link ${activePage === 'contact' ? 'active' : ''}">Contact</a>
      </nav>

      <div class="header-actions">
        <a href="donate.html" class="btn-header-donate ${activePage === 'donate' ? 'active-donate-btn' : ''}">
          <span>CSR [80G] Donate</span>
          <span>→</span>
        </a>
        <button type="button" class="mobile-menu-toggle" id="mobile-drawer-toggle" aria-label="Toggle menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  </header>

  <!-- Mobile Off-Canvas Drawer -->
  <div class="mobile-nav-drawer" id="mobile-nav-drawer">
    <div class="drawer-header">
      <div class="brand-identity">
        <div class="brand-emblem-icon">🍱</div>
        <div class="brand-text-block">
          <span class="brand-main-name">SARWE UNNATI</span>
          <span class="brand-sub-badge">FOOD RELIEF ARCHITECTURE</span>
        </div>
      </div>
      <button type="button" class="drawer-close-btn" id="drawer-close-btn">✕</button>
    </div>
    <div class="drawer-links-list">
      <a href="index.html" class="drawer-link ${activePage === 'home' ? 'active' : ''}">01 // Flagship Overview</a>
      <a href="about.html" class="drawer-link ${activePage === 'about' ? 'active' : ''}">02 // Institutional Charter</a>
      <a href="programs.html" class="drawer-link ${activePage === 'programs' ? 'active' : ''}">03 // Food Relief Model</a>
      <a href="impact.html" class="drawer-link ${activePage === 'impact' ? 'active' : ''}">04 // Impact Telemetry &amp; Budget</a>
      <a href="donate.html" class="drawer-link ${activePage === 'donate' ? 'active' : ''}">05 // CSR Alliances &amp; 80G Donate</a>
      <a href="volunteer.html" class="drawer-link ${activePage === 'volunteer' ? 'active' : ''}">06 // Volunteer Ground Cadre</a>
      <a href="contact.html" class="drawer-link ${activePage === 'contact' ? 'active' : ''}">07 // Founder &amp; Headquarters</a>
    </div>
    <a href="donate.html#bank-wire" class="btn-primary-glow" style="width: 100%;">Direct Wire [80G]</a>
  </div>`;
}

// Standard footer
const FOOTER_HTML = `  <!-- Footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-top-grid">
        <div>
          <span class="brand-main-name" style="color: #FFFFFF; font-size: 1.2rem;">SARWE UNNATI FOUNDATION</span>
          <p class="footer-brand-summary">
            A government-certified Section 8 non-profit company dedicated to providing and distributing food to people facing hunger.
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
        <div>© 2018–2026 SARWE UNNATI FOUNDATION. All Rights Reserved.</div>
        <div style="font-family: var(--font-mono); font-size: 0.75rem;">12A: AAECH6219BE20251 | 80G: AAECH6219BF20261</div>
      </div>
    </div>
  </footer>

  <div class="toast-notification" id="global-toast"></div>
  <button type="button" class="scroll-to-top-btn" id="scroll-to-top" aria-label="Scroll to top">↑</button>
  <script src="js/main.js"></script>`;

// -----------------------------------------------------------------------------
// 1. IMPACT.HTML
// -----------------------------------------------------------------------------
const impactHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Impact Telemetry &amp; \u20B92 Crore Budget | Sarwe Unnati Foundation</title>
  <meta name="description" content="Audited impact targets, itemized \u20B92 Cr operational budget, \u20B966.67 unit economics, and 6-point verification framework of Sarwe Unnati Foundation.">
  <link rel="icon" type="image/svg+xml" href="assets/images/logo.svg">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

${getHeader('impact', 'IMPACT &amp; BUDGET')}

  <!-- Hero Section -->
  <section class="section-hero" style="min-height: 60vh; padding: 9rem 0 5rem;">
    <div class="container">
      <div style="max-width: 820px;">
        <div class="hero-eyebrow-pill">
          <span class="eyebrow-pulse-dot"></span>
          <span class="eyebrow-text">ACCOUNTABILITY &amp; UNIT ECONOMICS • SLIDES 11-14</span>
        </div>
        <h1 class="hero-headline">
          Quantifiable Impact. <span class="serif-accent">100% Financial Transparency.</span>
        </h1>
        <p class="hero-lead-text">
          Every rupee deployed is tracked against real human outcomes. Explore our audited annual targets, itemized \u20B92 Crore annual operating allocation, \u20B966.67 meal unit economics, and verification framework.
        </p>
      </div>
    </div>
  </section>

  <!-- Section 1: Annual Impact Targets (Slide 11) -->
  <section style="padding: 5rem 0; border-top: 1px solid var(--border-subtle); background: var(--bg-surface-1);">
    <div class="container">
      <div class="section-badge">ANNUAL TARGETS</div>
      <h2 class="section-title">Verified Targets for the 12-Month Operating Cycle</h2>
      <p class="section-subtitle">
        Calibrated metrics serving urban slums, transit laborers, railway clusters, and under-resourced hospital attendants.
      </p>

      <div class="stats-row" style="margin-top: 3rem;">
        <div class="stat-card">
          <div class="stat-num" data-counter="300000" data-suffix=" meals">3,00,000</div>
          <div class="stat-label">Meals Distributed / Year</div>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.5rem;">
            Serving ~822 fresh, hot, balanced meals every single day across 365 calendar days.
          </p>
        </div>

        <div class="stat-card">
          <div class="stat-num" data-counter="10000" data-suffix="+">10,000+</div>
          <div class="stat-label">Unique Individuals Reached</div>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.5rem;">
            Direct beneficiaries mapped across marginalized informal settlements and transit hubs.
          </p>
        </div>

        <div class="stat-card">
          <div class="stat-num" data-counter="100" data-prefix="50–">50–100</div>
          <div class="stat-label">Regular Volunteers Engaged</div>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.5rem;">
            Trained field cadre managing prep, distribution, crowd safety, and surveys.
          </p>
        </div>

        <div class="stat-card">
          <div class="stat-num" data-counter="30" data-suffix="+ Tons">30+ Tons</div>
          <div class="stat-label">Food Waste Diverted</div>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.5rem;">
            Safe surplus recovered from partner caterers, corporate cafeterias, and wedding banquets.
          </p>
        </div>

        <div class="stat-card">
          <div class="stat-num" data-counter="15" data-suffix="+">15+</div>
          <div class="stat-label">Community Partnerships</div>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.5rem;">
            Alliances with shelter homes, community centers, hospitals, and local welfare groups.
          </p>
        </div>

        <div class="stat-card">
          <div class="stat-num" data-counter="80" data-suffix="%+">80%+</div>
          <div class="stat-label">Positive Well-being Reports</div>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.5rem;">
            Recipients reporting measurable improvements in energy, attendance, and household relief.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 2: Unit Economics & Financial Sustainability (Slide 14) -->
  <section style="padding: 6rem 0; border-top: 1px solid var(--border-subtle);">
    <div class="container">
      <div class="section-badge">UNIT ECONOMICS • SLIDE 14</div>
      <h2 class="section-title">Precision Efficiency: \u20B966.67 Per Complete Meal</h2>
      <p class="section-subtitle">
        Unlike ad-hoc feeding drives, our central wholesale procurement, batch steam-kettle prep, and volunteer field dispatch drive industry-leading capital efficiency.
      </p>

      <div class="bento-grid" style="margin-top: 3.5rem;">
        <div class="bento-card bento-span-4" style="background: linear-gradient(135deg, rgba(37,99,235,0.08), rgba(16,185,129,0.06));">
          <span class="bento-num">UNIT COST</span>
          <div style="font-size: 2.8rem; font-weight: 800; color: #FFFFFF; font-family: var(--font-mono); margin: 0.5rem 0;">\u20B966.67</div>
          <h3 class="bento-title">All-Inclusive Per-Meal Cost</h3>
          <p class="bento-desc">
            Covers wholesale grain &amp; pulses, fresh seasonal vegetables, FSSAI biodegradable packaging, chef wages, delivery logistics, fuel, and regulatory compliance.
          </p>
        </div>

        <div class="bento-card bento-span-4">
          <span class="bento-num">DAILY BURN</span>
          <div style="font-size: 2.8rem; font-weight: 800; color: #FFFFFF; font-family: var(--font-mono); margin: 0.5rem 0;">\u20B954,795</div>
          <h3 class="bento-title">Daily Operating Outlay</h3>
          <p class="bento-desc">
            Funds the production and dignified distribution of ~822 fresh nutritious thalis across 365 consecutive days without interruption.
          </p>
        </div>

        <div class="bento-card bento-span-4">
          <span class="bento-num">MONTHLY CAPITAL</span>
          <div style="font-size: 2.8rem; font-weight: 800; color: #FFFFFF; font-family: var(--font-mono); margin: 0.5rem 0;">\u20B916.67 L</div>
          <h3 class="bento-title">Monthly Operating Expense</h3>
          <p class="bento-desc">
            Full-cycle overhead covering ingredients, centralized kitchen utilities, fleet logistics, supervisor stipends, and continuous quality audits.
          </p>
        </div>
      </div>

      <!-- Funding Mix Breakdown -->
      <div style="margin-top: 4rem; padding: 2.5rem; background: var(--bg-surface-1); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg);">
        <h3 style="font-size: 1.4rem; color: #FFFFFF; margin-bottom: 0.5rem;">Sustainable Multi-Stream Capital Model</h3>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 2rem;">
          To safeguard against funding shortfalls and operational interruption, our \u20B92 Crore target is structurally diversified across five capital channels:
        </p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem;">
          <div style="padding: 1.25rem; background: var(--bg-surface-2); border-radius: var(--radius-md); border-left: 4px solid var(--primary-royal);">
            <div style="font-size: 1.6rem; font-weight: 800; color: #FFFFFF; font-family: var(--font-mono);">40%</div>
            <div style="font-weight: 600; color: #FFFFFF; margin-top: 0.25rem;">CSR Partnerships</div>
            <div style="font-size: 0.85rem; color: var(--text-muted); font-family: var(--font-mono); margin-top: 0.25rem;">\u20B980,00,000</div>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.5rem;">Corporate mandates under Section 135 Schedule VII.</div>
          </div>

          <div style="padding: 1.25rem; background: var(--bg-surface-2); border-radius: var(--radius-md); border-left: 4px solid var(--primary-emerald);">
            <div style="font-size: 1.6rem; font-weight: 800; color: #FFFFFF; font-family: var(--font-mono);">25%</div>
            <div style="font-weight: 600; color: #FFFFFF; margin-top: 0.25rem;">Individual Donors</div>
            <div style="font-size: 0.85rem; color: var(--text-muted); font-family: var(--font-mono); margin-top: 0.25rem;">\u20B950,00,000</div>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.5rem;">Recurring citizens &amp; philanthropists seeking 80G tax benefit.</div>
          </div>

          <div style="padding: 1.25rem; background: var(--bg-surface-2); border-radius: var(--radius-md); border-left: 4px solid var(--accent-amber);">
            <div style="font-size: 1.6rem; font-weight: 800; color: #FFFFFF; font-family: var(--font-mono);">20%</div>
            <div style="font-weight: 600; color: #FFFFFF; margin-top: 0.25rem;">Institutional Grants</div>
            <div style="font-size: 0.85rem; color: var(--text-muted); font-family: var(--font-mono); margin-top: 0.25rem;">\u20B940,00,000</div>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.5rem;">Philanthropic trusts supporting food security &amp; nutrition.</div>
          </div>

          <div style="padding: 1.25rem; background: var(--bg-surface-2); border-radius: var(--radius-md); border-left: 4px solid #A855F7;">
            <div style="font-size: 1.6rem; font-weight: 800; color: #FFFFFF; font-family: var(--font-mono);">10%</div>
            <div style="font-weight: 600; color: #FFFFFF; margin-top: 0.25rem;">Govt Schemes</div>
            <div style="font-size: 0.85rem; color: var(--text-muted); font-family: var(--font-mono); margin-top: 0.25rem;">\u20B920,00,000</div>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.5rem;">Co-funded welfare schemes &amp; subsidized grain allocations.</div>
          </div>

          <div style="padding: 1.25rem; background: var(--bg-surface-2); border-radius: var(--radius-md); border-left: 4px solid #06B6D4;">
            <div style="font-size: 1.6rem; font-weight: 800; color: #FFFFFF; font-family: var(--font-mono);">5%</div>
            <div style="font-weight: 600; color: #FFFFFF; margin-top: 0.25rem;">Community Support</div>
            <div style="font-size: 0.85rem; color: var(--text-muted); font-family: var(--font-mono); margin-top: 0.25rem;">\u20B910,00,000</div>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.5rem;">Local merchant guilds, resident associations &amp; in-kind grain.</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 3: Itemized Budget Allocation Matrix (Slide 13) -->
  <section id="budget-allocation" style="padding: 6rem 0; border-top: 1px solid var(--border-subtle); background: var(--bg-surface-1);">
    <div class="container">
      <div class="section-badge">BUDGET ALLOCATION • SLIDE 13</div>
      <h2 class="section-title">Itemized \u20B92,00,00,000 (2 Crore) Annual Capital Plan</h2>
      <p class="section-subtitle">
        Every rupee itemized with exact deliverables, vendor categories, and operational timelines for statutory inspection.
      </p>

      <div class="budget-filter-tabs" style="margin-top: 3rem;">
        <button type="button" class="budget-tab-btn active" data-filter="all">All Heads (100%)</button>
        <button type="button" class="budget-tab-btn" data-filter="food-kitchen">Food &amp; Kitchen (56%)</button>
        <button type="button" class="budget-tab-btn" data-filter="logistics">Logistics (17%)</button>
        <button type="button" class="budget-tab-btn" data-filter="support-infra">Infrastructure (12%)</button>
        <button type="button" class="budget-tab-btn" data-filter="compliance-admin">Admin &amp; Audits (15%)</button>
      </div>

      <div class="budget-table-wrap">
        <table class="budget-table">
          <thead>
            <tr>
              <th style="width: 25%;">Budget Category</th>
              <th style="width: 15%;">Allocation (\u20B9)</th>
              <th style="width: 10%;">Share</th>
              <th style="width: 20%;">Capital Progress</th>
              <th style="width: 30%;">Operational Scope &amp; Deliverables</th>
            </tr>
          </thead>
          <tbody>
            <tr data-category="food-kitchen">
              <td>
                <strong style="color: #FFFFFF;">Food &amp; Kitchen Operations</strong><br>
                <span style="font-size: 0.8rem; color: var(--text-muted);">Core Direct Program Expense</span>
              </td>
              <td class="amount-cell">\u20B91,12,00,000</td>
              <td><span class="pct-badge">56.0%</span></td>
              <td>
                <div class="budget-progress-bar"><div class="progress-fill" style="width: 56%;"></div></div>
              </td>
              <td style="font-size: 0.88rem; color: var(--text-muted);">
                Wholesale grains, pulses, fresh vegetables, cooking oil, spices, professional chefs, kitchen helpers, and biodegradable packing for 3,00,000 meals.
              </td>
            </tr>

            <tr data-category="logistics">
              <td>
                <strong style="color: #FFFFFF;">Logistics &amp; Distribution</strong><br>
                <span style="font-size: 0.8rem; color: var(--text-muted);">Fleet &amp; Field Delivery</span>
              </td>
              <td class="amount-cell">\u20B934,00,000</td>
              <td><span class="pct-badge">17.0%</span></td>
              <td>
                <div class="budget-progress-bar"><div class="progress-fill" style="width: 17%;"></div></div>
              </td>
              <td style="font-size: 0.88rem; color: var(--text-muted);">
                Lease/operation of custom insulated delivery vans, fuel, driver wages, vehicle maintenance, and transit temperature control.
              </td>
            </tr>

            <tr data-category="support-infra">
              <td>
                <strong style="color: #FFFFFF;">Infrastructure &amp; Setup</strong><br>
                <span style="font-size: 0.8rem; color: var(--text-muted);">Kitchen Capital Expenditure</span>
              </td>
              <td class="amount-cell">\u20B924,00,000</td>
              <td><span class="pct-badge">12.0%</span></td>
              <td>
                <div class="budget-progress-bar"><div class="progress-fill" style="width: 12%;"></div></div>
              </td>
              <td style="font-size: 0.88rem; color: var(--text-muted);">
                Commercial stainless steel steam kettles, industrial burners, cold room refrigeration, dry grain storage racks, and FSSAI sanitation gear.
              </td>
            </tr>

            <tr data-category="compliance-admin">
              <td>
                <strong style="color: #FFFFFF;">Program Admin &amp; Governance</strong><br>
                <span style="font-size: 0.8rem; color: var(--text-muted);">Executive Management</span>
              </td>
              <td class="amount-cell">\u20B918,00,000</td>
              <td><span class="pct-badge">9.0%</span></td>
              <td>
                <div class="budget-progress-bar"><div class="progress-fill" style="width: 9%;"></div></div>
              </td>
              <td style="font-size: 0.88rem; color: var(--text-muted);">
                Project coordinator, field supervisors, legal &amp; financial compliance, ROC annual filings, and administrative utilities.
              </td>
            </tr>

            <tr data-category="compliance-admin">
              <td>
                <strong style="color: #FFFFFF;">Community &amp; Volunteer Training</strong><br>
                <span style="font-size: 0.8rem; color: var(--text-muted);">Human Capacity Building</span>
              </td>
              <td class="amount-cell">\u20B97,00,000</td>
              <td><span class="pct-badge">3.5%</span></td>
              <td>
                <div class="budget-progress-bar"><div class="progress-fill" style="width: 3.5%;"></div></div>
              </td>
              <td style="font-size: 0.88rem; color: var(--text-muted);">
                Safety gear, health screenings, food handling certification for 50-100 volunteers, and beneficiary awareness materials.
              </td>
            </tr>

            <tr data-category="compliance-admin">
              <td>
                <strong style="color: #FFFFFF;">Monitoring, Evaluation &amp; Audits</strong><br>
                <span style="font-size: 0.8rem; color: var(--text-muted);">Third-Party Quality Assurance</span>
              </td>
              <td class="amount-cell">\u20B95,00,000</td>
              <td><span class="pct-badge">2.5%</span></td>
              <td>
                <div class="budget-progress-bar"><div class="progress-fill" style="width: 2.5%;"></div></div>
              </td>
              <td style="font-size: 0.88rem; color: var(--text-muted);">
                Independent third-party financial audits, FSSAI nutritional food testing in NABL labs, tracking software, and impact publishing.
              </td>
            </tr>

            <tr style="background: rgba(37,99,235,0.06); font-weight: 700;">
              <td style="color: #FFFFFF;">TOTAL ANNUAL OPERATING BUDGET</td>
              <td class="amount-cell" style="color: var(--primary-emerald); font-size: 1.15rem;">\u20B92,00,00,000</td>
              <td><span class="pct-badge" style="background: rgba(16,185,129,0.15); color: var(--primary-emerald);">100%</span></td>
              <td>
                <div class="budget-progress-bar"><div class="progress-fill" style="width: 100%; background: var(--primary-emerald);"></div></div>
              </td>
              <td style="color: #FFFFFF;">3,00,000 Meals @ \u20B966.67 / Meal Across 365 Days</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- Section 4: Impact Measurement Framework (Slide 12) -->
  <section style="padding: 6rem 0; border-top: 1px solid var(--border-subtle);">
    <div class="container">
      <div class="section-badge">VERIFICATION ARCHITECTURE • SLIDE 12</div>
      <h2 class="section-title">6-Point Impact Measurement Framework</h2>
      <p class="section-subtitle">
        Strict auditability guidelines applied to verify output volume, nutritional integrity, and beneficiary welfare.
      </p>

      <div class="budget-table-wrap" style="margin-top: 3.5rem;">
        <table class="budget-table">
          <thead>
            <tr>
              <th style="width: 22%;">Impact Indicator</th>
              <th style="width: 18%;">Annual Target</th>
              <th style="width: 30%;">Measurement Methodology</th>
              <th style="width: 30%;">Verification &amp; Audit Trail</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong style="color: #FFFFFF;">Meals Distributed</strong></td>
              <td><span class="pct-badge">3,00,000 / Year (822/day)</span></td>
              <td style="font-size: 0.9rem; color: var(--text-muted);">Daily kitchen raw material consumption and dispatch manifests.</td>
              <td style="font-size: 0.9rem; color: var(--text-muted);">GPS-tagged geotagged distribution photos &amp; supervisor counter-signatures.</td>
            </tr>
            <tr>
              <td><strong style="color: #FFFFFF;">Individuals Reached</strong></td>
              <td><span class="pct-badge">10,000+ Unique Beneficiaries</span></td>
              <td style="font-size: 0.9rem; color: var(--text-muted);">Community center registrations &amp; statistical field sampling.</td>
              <td style="font-size: 0.9rem; color: var(--text-muted);">Quarterly demographic audits and route beneficiary registers.</td>
            </tr>
            <tr>
              <td><strong style="color: #FFFFFF;">Nutritional Quality</strong></td>
              <td><span class="pct-badge">100% FSSAI Compliant</span></td>
              <td style="font-size: 0.9rem; color: var(--text-muted);">Weekly menu composition tracking (calories, protein, micronutrients).</td>
              <td style="font-size: 0.9rem; color: var(--text-muted);">Periodic independent testing by certified NABL food labs.</td>
            </tr>
            <tr>
              <td><strong style="color: #FFFFFF;">Food Waste Diverted</strong></td>
              <td><span class="pct-badge">30+ Metric Tons</span></td>
              <td style="font-size: 0.9rem; color: var(--text-muted);">Weigh-scale digital logs at banquet, hotel &amp; caterer pickup points.</td>
              <td style="font-size: 0.9rem; color: var(--text-muted);">Monthly waste recovery reconciliation reports shared with donors.</td>
            </tr>
            <tr>
              <td><strong style="color: #FFFFFF;">Volunteer Cadre</strong></td>
              <td><span class="pct-badge">50–100 Active Cadre</span></td>
              <td style="font-size: 0.9rem; color: var(--text-muted);">Digital attendance tracking via volunteer management system.</td>
              <td style="font-size: 0.9rem; color: var(--text-muted);">Timesheet logs, safety training certificates &amp; shift logs.</td>
            </tr>
            <tr>
              <td><strong style="color: #FFFFFF;">Community Satisfaction</strong></td>
              <td><span class="pct-badge">80%+ Positive Rating</span></td>
              <td style="font-size: 0.9rem; color: var(--text-muted);">Monthly beneficiary feedback interviews &amp; community survey forms.</td>
              <td style="font-size: 0.9rem; color: var(--text-muted);">Independent third-party surveyor reports &amp; video testimonials.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- Section 5: Risk Assessment & Mitigation Strategy (Slide 19) -->
  <section style="padding: 6rem 0; border-top: 1px solid var(--border-subtle); background: var(--bg-surface-1);">
    <div class="container">
      <div class="section-badge">GOVERNANCE &amp; RESILIENCE • SLIDE 19</div>
      <h2 class="section-title">Operational Risk Assessment &amp; Mitigation Strategy</h2>
      <p class="section-subtitle">
        Proactive contingency protocols engineered into our daily supply chain and financial management.
      </p>

      <div class="bento-grid" style="margin-top: 3.5rem;">
        <div class="bento-card bento-span-4">
          <span class="bento-num" style="color: #EF4444;">RISK 01</span>
          <h3 class="bento-title" style="margin-top: 0.75rem;">Supply Chain Disruption &amp; Inflation</h3>
          <p class="bento-desc">
            <strong>Mitigation:</strong> Long-term forward contracts with regional APMC wholesale suppliers; 15-day dry grain buffer stock maintained in central Saharanpur facility.
          </p>
        </div>

        <div class="bento-card bento-span-4">
          <span class="bento-num" style="color: #EF4444;">RISK 02</span>
          <h3 class="bento-title" style="margin-top: 0.75rem;">Food Safety &amp; Temperature Spoilage</h3>
          <p class="bento-desc">
            <strong>Mitigation:</strong> Strict adherence to FSSAI protocols, hot-holding at &gt;65\u00B0C in insulated containers, 2-hour distribution window post-cooking, and daily batch retention samples.
          </p>
        </div>

        <div class="bento-card bento-span-4">
          <span class="bento-num" style="color: #EF4444;">RISK 03</span>
          <h3 class="bento-title" style="margin-top: 0.75rem;">Funding Shortfall &amp; Cash Flow Delays</h3>
          <p class="bento-desc">
            <strong>Mitigation:</strong> Multi-stream revenue portfolio across CSR grants, individual giving, and foundations. A 3-month operational reserve fund is systematically built.
          </p>
        </div>

        <div class="bento-card bento-span-4">
          <span class="bento-num" style="color: #F59E0B;">RISK 04</span>
          <h3 class="bento-title" style="margin-top: 0.75rem;">Regulatory &amp; Statutory Compliance</h3>
          <p class="bento-desc">
            <strong>Mitigation:</strong> Retained Chartered Accountants and legal counsel ensuring timely Form 10BD filings, MCA returns, 80G renewal certificates, and Section 8 compliance.
          </p>
        </div>

        <div class="bento-card bento-span-4">
          <span class="bento-num" style="color: #F59E0B;">RISK 05</span>
          <h3 class="bento-title" style="margin-top: 0.75rem;">Volunteer Attrition &amp; Field Fatigue</h3>
          <p class="bento-desc">
            <strong>Mitigation:</strong> Rotating shifts, structured onboarding curriculum, formal recognition ceremonies, and certified community service accreditations.
          </p>
        </div>

        <div class="bento-card bento-span-4">
          <span class="bento-num" style="color: #F59E0B;">RISK 06</span>
          <h3 class="bento-title" style="margin-top: 0.75rem;">Fleet Breakdown &amp; Weather Extremes</h3>
          <p class="bento-desc">
            <strong>Mitigation:</strong> Annual vehicle maintenance contracts (AMC), backup transport tie-ups with regional logistics operators, and rainproof insulated packaging.
          </p>
        </div>
      </div>
    </div>
  </section>

${FOOTER_HTML}
</body>
</html>`;

// -----------------------------------------------------------------------------
// 2. DONATE.HTML
// -----------------------------------------------------------------------------
const donateHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSR Alliances &amp; 80G Tax Exempt Giving | Sarwe Unnati Foundation</title>
  <meta name="description" content="Partner with Sarwe Unnati Foundation under Section 135 CSR Schedule VII. Direct bank transfer via Canara Bank, 50% tax deduction under Section 80G.">
  <link rel="icon" type="image/svg+xml" href="assets/images/logo.svg">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

${getHeader('donate', 'CSR &amp; 80G GIVING')}

  <!-- Hero Section -->
  <section class="section-hero" style="min-height: 55vh; padding: 8.5rem 0 4.5rem;">
    <div class="container">
      <div style="max-width: 820px;">
        <div class="hero-eyebrow-pill">
          <span class="eyebrow-pulse-dot"></span>
          <span class="eyebrow-text">50% TAX EXEMPTION • 80G URN: AAECH6219BF20261</span>
        </div>
        <h1 class="hero-headline">
          Fuel Zero Hunger. <span class="serif-accent">Invest with Fiduciary Certainty.</span>
        </h1>
        <p class="hero-lead-text">
          Whether fulfilling corporate CSR mandates under Section 135 (Schedule VII) or making an individual contribution, your support directly feeds individuals facing acute hunger at \u20B966.67 per meal.
        </p>
      </div>
    </div>
  </section>

  <!-- Section 1: CSR Partnership Tiers (Slide 16) -->
  <section id="csr-tiers" style="padding: 5rem 0; border-top: 1px solid var(--border-subtle); background: var(--bg-surface-1);">
    <div class="container">
      <div class="section-badge">PARTNERSHIP TIERS • SLIDE 16</div>
      <h2 class="section-title">Institutional Sponsorship &amp; CSR Framework</h2>
      <p class="section-subtitle">
        Structured sponsorship packages with verifiable beneficiary documentation, quarterly impact audits, and board-level reporting.
      </p>

      <div class="bento-grid" style="margin-top: 3.5rem;">
        <div class="bento-card bento-span-4">
          <span class="bento-num">TIER 01</span>
          <div style="font-size: 2.2rem; font-weight: 800; color: #FFFFFF; font-family: var(--font-mono); margin: 0.5rem 0;">\u20B967</div>
          <h3 class="bento-title">Sponsor a Meal</h3>
          <p class="bento-desc">
            Provides one complete 750g balanced thali (dal, rice, rotis, subzi, pickle) with safe biodegradable packaging to an individual in need.
          </p>
          <a href="#bank-wire" class="btn-primary-glow" style="margin-top: 1.5rem; display: inline-flex; width: 100%; justify-content: center;">Donate Single Meal</a>
        </div>

        <div class="bento-card bento-span-4" style="border: 2px solid var(--primary-royal); background: rgba(37,99,235,0.06);">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span class="bento-num" style="color: var(--primary-royal);">TIER 02 // MOST POPULAR</span>
          </div>
          <div style="font-size: 2.2rem; font-weight: 800; color: #FFFFFF; font-family: var(--font-mono); margin: 0.5rem 0;">\u20B954,795</div>
          <h3 class="bento-title">Sponsor a Full Day</h3>
          <p class="bento-desc">
            Funds the entire day's centralized cooking, fuel, and distribution fleet to feed ~822 hungry individuals across multiple distribution points.
          </p>
          <a href="#bank-wire" class="btn-primary-glow" style="margin-top: 1.5rem; display: inline-flex; width: 100%; justify-content: center;">Sponsor Full Day</a>
        </div>

        <div class="bento-card bento-span-4">
          <span class="bento-num">TIER 03</span>
          <div style="font-size: 2.2rem; font-weight: 800; color: #FFFFFF; font-family: var(--font-mono); margin: 0.5rem 0;">\u20B91,50,000<span style="font-size: 1rem; color: var(--text-muted); font-weight: 400;">/mo</span></div>
          <h3 class="bento-title">Adopt a Community</h3>
          <p class="bento-desc">
            Guarantees consistent, dignified daily meals for an entire urban slum cluster or hospital attendant community for 30 consecutive days.
          </p>
          <a href="#bank-wire" class="btn-secondary-outline" style="margin-top: 1.5rem; display: inline-flex; width: 100%; justify-content: center;">Adopt Cluster</a>
        </div>

        <div class="bento-card bento-span-6">
          <span class="bento-num">TIER 04 // INFRASTRUCTURE</span>
          <div style="font-size: 2.2rem; font-weight: 800; color: #FFFFFF; font-family: var(--font-mono); margin: 0.5rem 0;">\u20B924,00,000</div>
          <h3 class="bento-title">Sponsor Kitchen Infrastructure</h3>
          <p class="bento-desc">
            Directly funds the procurement of industrial stainless steam boilers, automated roti-makers, cold storage refrigeration, and FSSAI sanitation gear. Dedicated facility naming rights included.
          </p>
          <a href="contact.html?type=csr-kitchen" class="btn-secondary-outline" style="margin-top: 1.5rem; display: inline-flex;">Initiate Kitchen Discussion →</a>
        </div>

        <div class="bento-card bento-span-6">
          <span class="bento-num">TIER 05 // STRATEGIC ALLIANCE</span>
          <div style="font-size: 2.2rem; font-weight: 800; color: #FFFFFF; font-family: var(--font-mono); margin: 0.5rem 0;">\u20B950,00,000+</div>
          <h3 class="bento-title">Annual Program Anchor Partner</h3>
          <p class="bento-desc">
            Co-brand an entire fleet corridor, receive independent third-party monitoring reports, employee volunteer mobilization days, and comprehensive MCA CSR compliance dossier.
          </p>
          <a href="contact.html?type=csr-annual" class="btn-primary-glow" style="margin-top: 1.5rem; display: inline-flex;">Partner with Founder →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 2: Interactive Meal & Tax Calculator -->
  <section style="padding: 6rem 0; border-top: 1px solid var(--border-subtle);">
    <div class="container">
      <div style="max-width: 800px; margin: 0 auto; text-align: center;">
        <div class="section-badge">INTERACTIVE IMPACT SIMULATOR</div>
        <h2 class="section-title">Calculate Your Human Impact &amp; 80G Tax Savings</h2>
        <p class="section-subtitle">
          See the direct volume of meals prepared and your approximate Section 80G tax benefit (50% deduction on taxable income).
        </p>

        <div class="simulator-card" style="margin-top: 3rem; text-align: left;">
          <label for="meal-slider" style="display: flex; justify-content: space-between; font-weight: 600; color: #FFFFFF; margin-bottom: 0.75rem;">
            <span>Contribution Amount:</span>
            <span id="slider-val-display" style="font-family: var(--font-mono); color: var(--primary-royal); font-size: 1.3rem; font-weight: 800;">\u20B910,000</span>
          </label>
          <input type="range" id="meal-slider" class="range-slider" min="500" max="500000" step="500" value="10000">

          <div style="display: flex; gap: 0.5rem; margin-top: 1rem; flex-wrap: wrap;">
            <button type="button" class="chip-copy-btn" onclick="document.getElementById('meal-slider').value=2000; document.getElementById('meal-slider').dispatchEvent(new Event('input'));">\u20B92,000 (30 Meals)</button>
            <button type="button" class="chip-copy-btn" onclick="document.getElementById('meal-slider').value=10000; document.getElementById('meal-slider').dispatchEvent(new Event('input'));">\u20B910,000 (150 Meals)</button>
            <button type="button" class="chip-copy-btn" onclick="document.getElementById('meal-slider').value=54795; document.getElementById('meal-slider').dispatchEvent(new Event('input'));">\u20B954,795 (Full Day / 822 Meals)</button>
            <button type="button" class="chip-copy-btn" onclick="document.getElementById('meal-slider').value=150000; document.getElementById('meal-slider').dispatchEvent(new Event('input'));">\u20B91.5 Lakh (Adopt Community)</button>
          </div>

          <div class="simulator-results-grid" style="margin-top: 2rem;">
            <div class="calc-res-box">
              <div class="res-num" id="calc-meals-count">150</div>
              <div class="res-label">Meals Provided</div>
            </div>
            <div class="calc-res-box">
              <div class="res-num" id="calc-people-count">150</div>
              <div class="res-label">Individuals Fed</div>
            </div>
            <div class="calc-res-box">
              <div class="res-num" id="calc-tax-count">\u20B95,000</div>
              <div class="res-label">80G Tax Deduction (50%)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 3: Verified Canara Bank Wire Passbook (Slide 20 & 21) -->
  <section id="bank-wire" style="padding: 6rem 0; border-top: 1px solid var(--border-subtle); background: var(--bg-surface-1);">
    <div class="container">
      <div style="max-width: 900px; margin: 0 auto;">
        <div class="section-badge">STATUTORY WIRE DETAILS • SLIDE 20</div>
        <h2 class="section-title">Direct Bank Transfer (NEFT / RTGS / IMPS)</h2>
        <p class="section-subtitle">
          Direct wire into the foundation's official Canara Bank account. Zero intermediary commissions ensure 100% of capital reaches the kitchen.
        </p>

        <div class="passbook-card" style="margin-top: 3.5rem;">
          <div class="passbook-header">
            <div>
              <div style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted);">OFFICIAL BENEFICIARY ACCOUNT</div>
              <div style="font-size: 1.5rem; font-weight: 800; color: #FFFFFF; margin-top: 0.25rem;">SARWE UNNATI FOUNDATION</div>
            </div>
            <span class="passbook-status">VERIFIED SECTION 8 A/C</span>
          </div>

          <div class="passbook-details-grid">
            <div class="passbook-field">
              <div class="p-label">Bank Name</div>
              <div class="p-val">CANARA BANK</div>
            </div>

            <div class="passbook-field">
              <div class="p-label">Branch</div>
              <div class="p-val">Court Road, Saharanpur (02201)</div>
            </div>

            <div class="passbook-field">
              <div class="p-label">Account Number</div>
              <div class="p-val">
                2201201002013
                <button type="button" class="chip-copy-btn" data-copy="2201201002013">Copy A/C</button>
              </div>
            </div>

            <div class="passbook-field">
              <div class="p-label">IFSC Code</div>
              <div class="p-val">
                CNRB0002201
                <button type="button" class="chip-copy-btn" data-copy="CNRB0002201">Copy IFSC</button>
              </div>
            </div>

            <div class="passbook-field">
              <div class="p-label">Account Type</div>
              <div class="p-val">Current Account (Non-Profit)</div>
            </div>

            <div class="passbook-field">
              <div class="p-label">80G Tax Exemption URN</div>
              <div class="p-val">
                AAECH6219BF20261
                <button type="button" class="chip-copy-btn" data-copy="AAECH6219BF20261">Copy 80G</button>
              </div>
            </div>

            <div class="passbook-field">
              <div class="p-label">12A Registration URN</div>
              <div class="p-val">AAECH6219BE20251</div>
            </div>

            <div class="passbook-field">
              <div class="p-label">Corporate Identity No. (CIN)</div>
              <div class="p-val">U80902UP2018NPL106959</div>
            </div>
          </div>
        </div>

        <!-- 80G Claim Form Card -->
        <div style="margin-top: 3rem; padding: 2.5rem; background: var(--bg-surface-2); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg);">
          <h3 style="font-size: 1.35rem; color: #FFFFFF;">Claim Your 80G Form 10BE Tax Exemption Certificate</h3>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.5rem; margin-bottom: 2rem;">
            After completing your bank wire, submit your transfer transaction reference (UTR) below to receive your statutory Form 10BE donation certificate for tax filing.
          </p>

          <form id="donation-claim-form" onsubmit="event.preventDefault(); showToast('Donation reference submitted! Form 10BE will be emailed within 24h.'); this.reset();">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.25rem;">
              <div>
                <label style="display: block; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.4rem;">Bank Reference / UTR Number *</label>
                <input type="text" required placeholder="e.g. CNRBN24012345678" style="width: 100%; padding: 0.75rem 1rem; background: var(--bg-surface-1); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); color: #FFF; font-family: var(--font-mono);">
              </div>
              <div>
                <label style="display: block; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.4rem;">Amount Transferred (\u20B9) *</label>
                <input type="number" required placeholder="e.g. 54795" style="width: 100%; padding: 0.75rem 1rem; background: var(--bg-surface-1); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); color: #FFF; font-family: var(--font-mono);">
              </div>
              <div>
                <label style="display: block; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.4rem;">Donor / Entity Name *</label>
                <input type="text" required placeholder="As shown on PAN card" style="width: 100%; padding: 0.75rem 1rem; background: var(--bg-surface-1); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); color: #FFF;">
              </div>
              <div>
                <label style="display: block; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.4rem;">PAN Number (Mandatory for 80G) *</label>
                <input type="text" required pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}" placeholder="ABCDE1234F" style="width: 100%; padding: 0.75rem 1rem; background: var(--bg-surface-1); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); color: #FFF; text-transform: uppercase; font-family: var(--font-mono);">
              </div>
              <div>
                <label style="display: block; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.4rem;">Email Address *</label>
                <input type="email" required placeholder="name@example.com" style="width: 100%; padding: 0.75rem 1rem; background: var(--bg-surface-1); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); color: #FFF;">
              </div>
              <div>
                <label style="display: block; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.4rem;">Phone / WhatsApp *</label>
                <input type="tel" required placeholder="+91 98765 43210" style="width: 100%; padding: 0.75rem 1rem; background: var(--bg-surface-1); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); color: #FFF;">
              </div>
            </div>

            <div style="margin-top: 1.5rem; text-align: right;">
              <button type="submit" class="btn-primary-glow" style="padding: 0.85rem 2rem;">Submit Wire Notification &amp; Claim 80G Receipt</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 4: FAQ Accordion -->
  <section style="padding: 6rem 0; border-top: 1px solid var(--border-subtle);">
    <div class="container">
      <div style="max-width: 800px; margin: 0 auto;">
        <div class="section-badge">FREQUENTLY ASKED QUESTIONS</div>
        <h2 class="section-title">Giving &amp; Statutory Compliance FAQ</h2>

        <div class="faq-list" style="margin-top: 3rem;">
          <div class="faq-item">
            <button type="button" class="faq-question">
              <span>Is my donation eligible for Section 80G tax deductions?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
              <p>Yes. Sarwe Unnati Foundation holds provisional registration under Section 80G (Unique Registration Number: AAECH6219BF20261) issued by the Income Tax Department of India. Indian tax-paying entities and individuals are eligible for a 50% tax deduction on qualifying donations.</p>
            </div>
          </div>

          <div class="faq-item">
            <button type="button" class="faq-question">
              <span>Are contributions eligible for Corporate CSR under Section 135?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
              <p>Yes. Providing relief from hunger, eradicating malnutrition, and promoting food security are explicitly eligible CSR activities covered under Item (i) of Schedule VII of the Companies Act, 2013. We are registered on the Ministry of Corporate Affairs NGO Darpan portal under ID: UP/2025/0710389.</p>
            </div>
          </div>

          <div class="faq-item">
            <button type="button" class="faq-question">
              <span>When and how do I receive my Form 10BE certificate?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
              <p>Upon verifying your bank wire transfer against the UTR submitted in our notification form, an immediate stamped digital acknowledgement receipt is issued within 24 hours. Formal Form 10BE certificates are generated as part of our annual ROC and Income Tax Department compliance filings.</p>
            </div>
          </div>

          <div class="faq-item">
            <button type="button" class="faq-question">
              <span>Can our CSR committee conduct an in-person kitchen audit?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
              <p>We welcome institutional partners and CSR committees for unannounced physical kitchen inspections, hygiene audits, temperature monitoring checks, and route distribution shadowing. Reach out to Director Priyesh Garg directly at priyesh.chanu@gmail.com.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

${FOOTER_HTML}
</body>
</html>`;

// -----------------------------------------------------------------------------
// 3. VOLUNTEER.HTML
// -----------------------------------------------------------------------------
const volunteerHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Volunteer Ground Cadre | Sarwe Unnati Foundation</title>
  <meta name="description" content="Join Sarwe Unnati Foundation's 50-100 volunteer cadre. Frontline roles in kitchen prep, route distribution, surplus recovery, and community need mapping.">
  <link rel="icon" type="image/svg+xml" href="assets/images/logo.svg">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

${getHeader('volunteer', 'GROUND CADRE')}

  <!-- Hero Section -->
  <section class="section-hero" style="min-height: 55vh; padding: 8.5rem 0 4.5rem;">
    <div class="container">
      <div style="max-width: 820px;">
        <div class="hero-eyebrow-pill">
          <span class="eyebrow-pulse-dot"></span>
          <span class="eyebrow-text">50–100 ACTIVE CADRE TARGET • SLIDE 11 &amp; 14</span>
        </div>
        <h1 class="hero-headline">
          Be the Hands That <span class="serif-accent">Feed Dignity.</span>
        </h1>
        <p class="hero-lead-text">
          Our food relief ecosystem runs on trained, compassionate community volunteers. From early morning kitchen preparation to night-time surplus food recovery, your time creates immediate human relief.
        </p>
      </div>
    </div>
  </section>

  <!-- Section 1: Frontline Volunteer Roles -->
  <section style="padding: 5rem 0; border-top: 1px solid var(--border-subtle); background: var(--bg-surface-1);">
    <div class="container">
      <div class="section-badge">CADRE SPECIALIZATIONS</div>
      <h2 class="section-title">4 Strategic Frontline Operational Tracks</h2>
      <p class="section-subtitle">
        Structured volunteer shifts designed around safety, hygiene protocols, and dignity of service.
      </p>

      <div class="bento-grid" style="margin-top: 3.5rem;">
        <div class="bento-card bento-span-6">
          <span class="bento-num">ROLE 01 // KITCHEN OPS</span>
          <h3 class="bento-title" style="margin-top: 0.75rem;">Central Kitchen Prep &amp; Packaging</h3>
          <p class="bento-desc">
            Support professional chefs during morning cooking shifts. Responsibilities include grain sorting, vegetable chopping, portion-controlled container packaging, and sealing hot thalis in biodegradable containers.
          </p>
          <div style="margin-top: 1.25rem; font-family: var(--font-mono); font-size: 0.85rem; color: var(--primary-royal);">
            Timing: 06:00 AM – 10:30 AM | Base: Central Kitchen, Saharanpur
          </div>
        </div>

        <div class="bento-card bento-span-6">
          <span class="bento-num">ROLE 02 // FIELD DELIVERY</span>
          <h3 class="bento-title" style="margin-top: 0.75rem;">Route Dispatch &amp; Dignified Distribution</h3>
          <p class="bento-desc">
            Ride aboard our insulated delivery vans to designated informal settlement clusters, hospital attendant shelters, and labor points. Facilitate orderly, respectful meal distribution and maintain queue safety.
          </p>
          <div style="margin-top: 1.25rem; font-family: var(--font-mono); font-size: 0.85rem; color: var(--primary-royal);">
            Timing: 11:30 AM – 03:00 PM | Base: Field Distribution Routes
          </div>
        </div>

        <div class="bento-card bento-span-6">
          <span class="bento-num">ROLE 03 // SURPLUS RESCUE</span>
          <h3 class="bento-title" style="margin-top: 0.75rem;">Food Surplus Recovery Squad</h3>
          <p class="bento-desc">
            On-call evening mobile squad responding to surplus food alerts from partner banquet halls, corporate cafeterias, and wedding caterers. Perform sensory temperature checks and rapid evening delivery.
          </p>
          <div style="margin-top: 1.25rem; font-family: var(--font-mono); font-size: 0.85rem; color: var(--primary-royal);">
            Timing: 08:00 PM – 11:30 PM | Base: Mobile Van Fleet
          </div>
        </div>

        <div class="bento-card bento-span-6">
          <span class="bento-num">ROLE 04 // DEMOGRAPHIC AUDIT</span>
          <h3 class="bento-title" style="margin-top: 0.75rem;">Community Need Survey &amp; Geo-Mapping</h3>
          <p class="bento-desc">
            Conduct door-to-door slum household surveys, interview migrant daily wage earners, map changing transit hotspots, and gather direct recipient feedback for our monthly impact reports.
          </p>
          <div style="margin-top: 1.25rem; font-family: var(--font-mono); font-size: 0.85rem; color: var(--primary-royal);">
            Timing: Weekend Shifts | Base: Field Clusters
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 2: Volunteer Standards & Ethics -->
  <section style="padding: 6rem 0; border-top: 1px solid var(--border-subtle);">
    <div class="container">
      <div class="section-badge">CADRE PROTOCOLS</div>
      <h2 class="section-title">Safety, Hygiene &amp; Dignity Standards</h2>
      <p class="section-subtitle">
        Every volunteer represents the institutional integrity of Sarwe Unnati Foundation.
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 3.5rem;">
        <div style="padding: 2rem; background: var(--bg-surface-1); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg);">
          <div style="font-size: 1.5rem; margin-bottom: 0.75rem;">🧤</div>
          <h3 style="font-size: 1.15rem; color: #FFFFFF;">Mandatory PPE &amp; Sanitation</h3>
          <p style="color: var(--text-muted); font-size: 0.9rem; line-height: 1.6; margin-top: 0.5rem;">
            All kitchen and distribution volunteers are provided hairnets, face masks, food-grade gloves, and sanitized aprons in strict accordance with FSSAI guidelines.
          </p>
        </div>

        <div style="padding: 2rem; background: var(--bg-surface-1); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg);">
          <div style="font-size: 1.5rem; margin-bottom: 0.75rem;">🤝</div>
          <h3 style="font-size: 1.15rem; color: #FFFFFF;">Radical Empathy &amp; Respect</h3>
          <p style="color: var(--text-muted); font-size: 0.9rem; line-height: 1.6; margin-top: 0.5rem;">
            No beneficiary is ever photographed without informed consent or made to feel patronized. Food relief is served with two hands and respectful greetings.
          </p>
        </div>

        <div style="padding: 2rem; background: var(--bg-surface-1); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg);">
          <div style="font-size: 1.5rem; margin-bottom: 0.75rem;">📜</div>
          <h3 style="font-size: 1.15rem; color: #FFFFFF;">Certificate of Social Service</h3>
          <p style="color: var(--text-muted); font-size: 0.9rem; line-height: 1.6; margin-top: 0.5rem;">
            Volunteers completing 40+ verified service hours receive an institutional Certificate of Commendation authenticated by Founder Priyesh Garg under our Section 8 seal.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 3: Volunteer Onboarding Form -->
  <section style="padding: 6rem 0; border-top: 1px solid var(--border-subtle); background: var(--bg-surface-1);">
    <div class="container">
      <div style="max-width: 800px; margin: 0 auto;">
        <div class="section-badge">JOIN THE CADRE</div>
        <h2 class="section-title">Volunteer Application Form</h2>
        <p class="section-subtitle">
          Submit your availability to schedule a 30-minute orientation session at our Saharanpur operations center.
        </p>

        <div style="margin-top: 3.5rem; padding: 2.5rem; background: var(--bg-surface-2); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg);">
          <form id="volunteer-form" onsubmit="event.preventDefault(); showToast('Volunteer application received! Our team will contact you for orientation.'); this.reset();">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.25rem;">
              <div>
                <label style="display: block; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.4rem;">Full Name *</label>
                <input type="text" required placeholder="e.g. Rahul Sharma" style="width: 100%; padding: 0.75rem 1rem; background: var(--bg-surface-1); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); color: #FFF;">
              </div>
              <div>
                <label style="display: block; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.4rem;">Phone / WhatsApp *</label>
                <input type="tel" required placeholder="+91 99974 26815" style="width: 100%; padding: 0.75rem 1rem; background: var(--bg-surface-1); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); color: #FFF;">
              </div>
              <div>
                <label style="display: block; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.4rem;">Email Address *</label>
                <input type="email" required placeholder="name@example.com" style="width: 100%; padding: 0.75rem 1rem; background: var(--bg-surface-1); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); color: #FFF;">
              </div>
              <div>
                <label style="display: block; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.4rem;">City / Locality *</label>
                <input type="text" required placeholder="e.g. Saharanpur / Delhi Road" style="width: 100%; padding: 0.75rem 1rem; background: var(--bg-surface-1); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); color: #FFF;">
              </div>
              <div>
                <label style="display: block; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.4rem;">Preferred Track *</label>
                <select required style="width: 100%; padding: 0.75rem 1rem; background: var(--bg-surface-1); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); color: #FFF;">
                  <option value="">Select track...</option>
                  <option value="kitchen">Central Kitchen Prep (06:00 - 10:30 AM)</option>
                  <option value="distribution">Route Distribution (11:30 AM - 03:00 PM)</option>
                  <option value="recovery">Surplus Food Rescue (08:00 - 11:30 PM)</option>
                  <option value="surveys">Community Need Survey &amp; Geo-Mapping</option>
                  <option value="any">Flexible / Wherever Most Needed</option>
                </select>
              </div>
              <div>
                <label style="display: block; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.4rem;">Availability *</label>
                <select required style="width: 100%; padding: 0.75rem 1rem; background: var(--bg-surface-1); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); color: #FFF;">
                  <option value="">Select availability...</option>
                  <option value="weekends">Weekends Only (Sat / Sun)</option>
                  <option value="weekdays">Weekday Mornings</option>
                  <option value="evenings">Evenings / Nights</option>
                  <option value="fulltime">Full-time Fellowship (3+ months)</option>
                </select>
              </div>
            </div>

            <div style="margin-top: 1.25rem;">
              <label style="display: block; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.4rem;">Brief Note on Experience or Motivation</label>
              <textarea rows="3" placeholder="Tell us why you want to serve with Sarwe Unnati Foundation..." style="width: 100%; padding: 0.75rem 1rem; background: var(--bg-surface-1); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); color: #FFF;"></textarea>
            </div>

            <div style="margin-top: 1.5rem; text-align: right;">
              <button type="submit" class="btn-primary-glow" style="padding: 0.85rem 2rem;">Submit Cadre Application</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

${FOOTER_HTML}
</body>
</html>`;

// -----------------------------------------------------------------------------
// 4. CONTACT.HTML
// -----------------------------------------------------------------------------
const contactHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact &amp; Headquarters | Sarwe Unnati Foundation</title>
  <meta name="description" content="Direct coordinates for Sarwe Unnati Foundation and Director Priyesh Garg. Headquarters in Saharanpur, UP. Reach out for CSR, donations, or audits.">
  <link rel="icon" type="image/svg+xml" href="assets/images/logo.svg">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

${getHeader('contact', 'HEADQUARTERS')}

  <!-- Hero Section -->
  <section class="section-hero" style="min-height: 55vh; padding: 8.5rem 0 4.5rem;">
    <div class="container">
      <div style="max-width: 820px;">
        <div class="hero-eyebrow-pill">
          <span class="eyebrow-pulse-dot"></span>
          <span class="eyebrow-text">DIRECT EXECUTIVE ACCESS • SLIDE 21</span>
        </div>
        <h1 class="hero-headline">
          Connect with Leadership. <span class="serif-accent">Transparent &amp; Accessible.</span>
        </h1>
        <p class="hero-lead-text">
          Whether you are a corporate CSR committee reviewing statutory filings, a philanthropist exploring kitchen sponsorship, or a local volunteer, our doors and lines are open.
        </p>
      </div>
    </div>
  </section>

  <!-- Section 1: Headquarters & Direct Coordinates -->
  <section style="padding: 5rem 0; border-top: 1px solid var(--border-subtle); background: var(--bg-surface-1);">
    <div class="container">
      <div class="bento-grid">
        <!-- Direct Leadership Card -->
        <div class="bento-card bento-span-6" style="border: 1px solid var(--border-subtle); background: var(--bg-surface-2);">
          <span class="bento-num">FOUNDER &amp; DIRECTOR</span>
          <h2 style="font-size: 1.8rem; color: #FFFFFF; margin-top: 0.75rem;">Priyesh Garg</h2>
          <p style="color: var(--text-muted); font-size: 0.95rem; margin-top: 0.5rem; line-height: 1.6;">
            Director and authorized legal signatory of Sarwe Unnati Foundation under the Ministry of Corporate Affairs, Government of India.
          </p>

          <div style="margin-top: 2rem; display: flex; flex-direction: column; gap: 1rem;">
            <div style="display: flex; align-items: center; gap: 1rem;">
              <div style="width: 40px; height: 40px; border-radius: 8px; background: rgba(37,99,235,0.1); display: flex; align-items: center; justify-content: center; color: var(--primary-royal);">📞</div>
              <div>
                <div style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">Direct Phone / WhatsApp</div>
                <a href="tel:+919997426815" style="color: #FFFFFF; font-family: var(--font-mono); font-size: 1.05rem; font-weight: 600;">+91 99974 26815</a>
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: 1rem;">
              <div style="width: 40px; height: 40px; border-radius: 8px; background: rgba(37,99,235,0.1); display: flex; align-items: center; justify-content: center; color: var(--primary-royal);">✉️</div>
              <div>
                <div style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">Official Direct Email</div>
                <a href="mailto:priyesh.chanu@gmail.com" style="color: #FFFFFF; font-family: var(--font-mono); font-size: 1.05rem; font-weight: 600;">priyesh.chanu@gmail.com</a>
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: 1rem;">
              <div style="width: 40px; height: 40px; border-radius: 8px; background: rgba(37,99,235,0.1); display: flex; align-items: center; justify-content: center; color: var(--primary-royal);">🏢</div>
              <div>
                <div style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">Registered Address (RoC Kanpur)</div>
                <div style="color: #FFFFFF; font-size: 0.92rem; line-height: 1.5;">
                  House No. 119, Vaishali Vihar, Near Dharia Builder, Delhi Road, Saharanpur — 247001, Uttar Pradesh
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Statutory Identifiers Dossier -->
        <div class="bento-card bento-span-6" style="border: 1px solid var(--border-subtle); background: var(--bg-surface-2);">
          <span class="bento-num">LEGAL REPOSITORY</span>
          <h2 style="font-size: 1.8rem; color: #FFFFFF; margin-top: 0.75rem;">Statutory Dossier</h2>
          <p style="color: var(--text-muted); font-size: 0.95rem; margin-top: 0.5rem; line-height: 1.6;">
            Registered under Section 8 of the Companies Act, 2013 on August 14, 2018. All records verified with Central Board of Direct Taxes and RoC Kanpur.
          </p>

          <div style="margin-top: 1.5rem; display: grid; grid-template-columns: 1fr; gap: 0.75rem;">
            <div style="display: flex; justify-content: space-between; padding: 0.75rem 1rem; background: var(--bg-surface-1); border-radius: var(--radius-md);">
              <span style="color: var(--text-muted); font-size: 0.85rem;">Corporate Identity Number (CIN)</span>
              <span style="color: #FFF; font-family: var(--font-mono); font-size: 0.85rem; font-weight: 600;">U80902UP2018NPL106959</span>
            </div>

            <div style="display: flex; justify-content: space-between; padding: 0.75rem 1rem; background: var(--bg-surface-1); border-radius: var(--radius-md);">
              <span style="color: var(--text-muted); font-size: 0.85rem;">80G Tax Exemption URN</span>
              <span style="color: var(--primary-emerald); font-family: var(--font-mono); font-size: 0.85rem; font-weight: 600;">AAECH6219BF20261</span>
            </div>

            <div style="display: flex; justify-content: space-between; padding: 0.75rem 1rem; background: var(--bg-surface-1); border-radius: var(--radius-md);">
              <span style="color: var(--text-muted); font-size: 0.85rem;">12A Institutional URN</span>
              <span style="color: #FFF; font-family: var(--font-mono); font-size: 0.85rem; font-weight: 600;">AAECH6219BE20251</span>
            </div>

            <div style="display: flex; justify-content: space-between; padding: 0.75rem 1rem; background: var(--bg-surface-1); border-radius: var(--radius-md);">
              <span style="color: var(--text-muted); font-size: 0.85rem;">NITI Aayog NGO Darpan</span>
              <span style="color: #FFF; font-family: var(--font-mono); font-size: 0.85rem; font-weight: 600;">UP/2025/0710389</span>
            </div>

            <div style="display: flex; justify-content: space-between; padding: 0.75rem 1rem; background: var(--bg-surface-1); border-radius: var(--radius-md);">
              <span style="color: var(--text-muted); font-size: 0.85rem;">Canara Bank A/C Number</span>
              <span style="color: #FFF; font-family: var(--font-mono); font-size: 0.85rem; font-weight: 600;">2201201002013 (Court Rd, CNRB0002201)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 2: Structured Inquiry Form -->
  <section style="padding: 6rem 0; border-top: 1px solid var(--border-subtle);">
    <div class="container">
      <div style="max-width: 800px; margin: 0 auto;">
        <div class="section-badge">COMMUNICATION DESK</div>
        <h2 class="section-title">Direct Executive Inquiry Form</h2>
        <p class="section-subtitle">
          Whether inquiring about CSR tie-ups, scheduling a kitchen audit, or requesting our audited financials, submit your details below.
        </p>

        <div style="margin-top: 3.5rem; padding: 2.5rem; background: var(--bg-surface-1); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg);">
          <form id="contact-form" onsubmit="event.preventDefault(); showToast('Inquiry sent successfully! Director Priyesh Garg will respond within 24h.'); this.reset();">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.25rem;">
              <div>
                <label style="display: block; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.4rem;">Your Name *</label>
                <input type="text" required placeholder="e.g. Vikram Malhotra" style="width: 100%; padding: 0.75rem 1rem; background: var(--bg-surface-2); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); color: #FFF;">
              </div>

              <div>
                <label style="display: block; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.4rem;">Company / Organization Name</label>
                <input type="text" placeholder="e.g. Tata Steel CSR Foundation" style="width: 100%; padding: 0.75rem 1rem; background: var(--bg-surface-2); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); color: #FFF;">
              </div>

              <div>
                <label style="display: block; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.4rem;">Official Email Address *</label>
                <input type="email" required placeholder="vikram@company.com" style="width: 100%; padding: 0.75rem 1rem; background: var(--bg-surface-2); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); color: #FFF;">
              </div>

              <div>
                <label style="display: block; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.4rem;">Phone / WhatsApp *</label>
                <input type="tel" required placeholder="+91 98765 43210" style="width: 100%; padding: 0.75rem 1rem; background: var(--bg-surface-2); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); color: #FFF;">
              </div>

              <div style="grid-column: 1 / -1;">
                <label style="display: block; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.4rem;">Inquiry Classification *</label>
                <select required style="width: 100%; padding: 0.75rem 1rem; background: var(--bg-surface-2); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); color: #FFF;">
                  <option value="">Select purpose...</option>
                  <option value="csr">Corporate CSR Partnership (Schedule VII)</option>
                  <option value="kitchen-audit">Schedule Physical Kitchen Inspection / Food Audit</option>
                  <option value="philanthropy">Individual High-Value Donorship (80G Tax Exemption)</option>
                  <option value="surplus-food">Commercial Banquet / Cafeteria Surplus Recovery</option>
                  <option value="media">Media, Press &amp; Academic Research Inquiry</option>
                  <option value="general">General Foundation Inquiry</option>
                </select>
              </div>

              <div style="grid-column: 1 / -1;">
                <label style="display: block; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.4rem;">Detailed Message *</label>
                <textarea rows="4" required placeholder="Please outline your proposed alliance, timeline, or query..." style="width: 100%; padding: 0.75rem 1rem; background: var(--bg-surface-2); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); color: #FFF;"></textarea>
              </div>
            </div>

            <div style="margin-top: 1.5rem; text-align: right;">
              <button type="submit" class="btn-primary-glow" style="padding: 0.85rem 2.5rem;">Transmit Inquiry Directly to Director</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

${FOOTER_HTML}
</body>
</html>`;

// Write the 4 files
fs.writeFileSync(path.join(__dirname, '../impact.html'), impactHtml, 'utf8');
fs.writeFileSync(path.join(__dirname, '../donate.html'), donateHtml, 'utf8');
fs.writeFileSync(path.join(__dirname, '../volunteer.html'), volunteerHtml, 'utf8');
fs.writeFileSync(path.join(__dirname, '../contact.html'), contactHtml, 'utf8');

console.log('Successfully generated impact.html, donate.html, volunteer.html, and contact.html!');
