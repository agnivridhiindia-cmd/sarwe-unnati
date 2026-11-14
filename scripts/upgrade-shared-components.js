const fs = require('fs');
const path = require('path');

const pages = [
  { file: 'index.html', key: 'home' },
  { file: 'about.html', key: 'about' },
  { file: 'programs.html', key: 'programs' },
  { file: 'impact.html', key: 'impact' },
  { file: 'donate.html', key: 'donate' },
  { file: 'volunteer.html', key: 'volunteer' },
  { file: 'contact.html', key: 'contact' }
];

function generateHeader(activeKey) {
  return `  <!-- Modern Floating Header -->
  <header class="site-header" id="site-header">
    <div class="header-inner">
      <a href="index.html" class="brand-identity" aria-label="Sarwe Unnati Foundation Home">
        <div class="brand-emblem-icon">
          <svg width="22" height="22" viewBox="0 0 100 100" fill="none">
            <polygon points="50,6 88,24 88,76 50,94 12,76 12,24" fill="#1C1917" stroke="#EA580C" stroke-width="6"/>
            <path d="M50 22 L74 48 L50 74 L26 48 Z" fill="url(#brandGold)"/>
            <circle cx="50" cy="48" r="7" fill="#1C1917"/>
            <defs>
              <linearGradient id="brandGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#F59E0B"/>
                <stop offset="100%" stop-color="#EA580C"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div class="brand-text-block">
          <span class="brand-main-name">Sarwe Unnati</span>
          <span class="brand-sub-badge">FOOD RELIEF MISSION</span>
        </div>
      </a>

      <!-- Desktop Navigation Links -->
      <nav class="nav-links-desktop" aria-label="Main Navigation">
        <a href="index.html" class="nav-item-link${activeKey === 'home' ? ' active' : ''}">Home</a>
        <a href="about.html" class="nav-item-link${activeKey === 'about' ? ' active' : ''}">About Us</a>
        <a href="programs.html" class="nav-item-link${activeKey === 'programs' ? ' active' : ''}">Relief Model</a>
        <a href="impact.html" class="nav-item-link${activeKey === 'impact' ? ' active' : ''}">Impact &amp; Budget</a>
        <a href="volunteer.html" class="nav-item-link${activeKey === 'volunteer' ? ' active' : ''}">Volunteer</a>
        <a href="contact.html" class="nav-item-link${activeKey === 'contact' ? ' active' : ''}">Contact</a>
      </nav>

      <!-- Header CTAs -->
      <div class="header-actions">
        <a href="donate.html" class="btn-header-donate">
          <span>CSR [80G] Donate</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </a>
        <button type="button" class="mobile-menu-toggle" id="mobile-drawer-toggle" aria-label="Toggle navigation menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  </header>`;
}

function generateDrawer(activeKey) {
  return `  <!-- Mobile Off-Canvas Drawer -->
  <div class="mobile-nav-drawer" id="mobile-nav-drawer" aria-label="Mobile Navigation">
    <div class="drawer-header">
      <div class="brand-identity">
        <div class="brand-emblem-icon">
          <svg width="20" height="20" viewBox="0 0 100 100" fill="none">
            <polygon points="50,6 88,24 88,76 50,94 12,76 12,24" fill="#1C1917" stroke="#EA580C" stroke-width="6"/>
            <path d="M50 22 L74 48 L50 74 L26 48 Z" fill="url(#brandGoldDrawer)"/>
            <circle cx="50" cy="48" r="7" fill="#1C1917"/>
            <defs>
              <linearGradient id="brandGoldDrawer" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#F59E0B"/>
                <stop offset="100%" stop-color="#EA580C"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div class="brand-text-block">
          <span class="brand-main-name" style="color: #FFFFFF;">Sarwe Unnati</span>
          <span class="brand-sub-badge">FOOD RELIEF MISSION</span>
        </div>
      </div>
      <button type="button" class="drawer-close-btn" id="drawer-close-btn" aria-label="Close menu">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
    </div>

    <div class="drawer-links-list">
      <a href="index.html" class="drawer-link${activeKey === 'home' ? ' active' : ''}">Flagship Overview</a>
      <a href="about.html" class="drawer-link${activeKey === 'about' ? ' active' : ''}">Institutional Charter</a>
      <a href="programs.html" class="drawer-link${activeKey === 'programs' ? ' active' : ''}">Food Relief Model</a>
      <a href="impact.html" class="drawer-link${activeKey === 'impact' ? ' active' : ''}">Impact &amp; Budget</a>
      <a href="donate.html" class="drawer-link${activeKey === 'donate' ? ' active' : ''}">CSR Alliances &amp; 80G Donate</a>
      <a href="volunteer.html" class="drawer-link${activeKey === 'volunteer' ? ' active' : ''}">Volunteer Ground Cadre</a>
      <a href="contact.html" class="drawer-link${activeKey === 'contact' ? ' active' : ''}">Founder &amp; Headquarters</a>
    </div>

    <div>
      <a href="donate.html#bank-wire" class="btn-primary-glow" style="width: 100%;">
        Direct Canara Bank Wire [80G]
      </a>
      <div style="font-family: var(--font-mono); font-size: 0.72rem; color: #A8A29E; text-align: center; margin-top: 1rem;">
        CIN: U80902UP2018NPL106959 | 80G URN: AAECH6219BF20261
      </div>
    </div>
  </div>`;
}

function generateFooter() {
  return `  <!-- =========================================================================
       FOOTER (COMPREHENSIVE STATUTORY & DISCLOSURES)
       ========================================================================= -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-top-grid">
        <!-- Col 1 -->
        <div>
          <div class="brand-identity">
            <div class="brand-emblem-icon">
              <svg width="20" height="20" viewBox="0 0 100 100" fill="none">
                <polygon points="50,6 88,24 88,76 50,94 12,76 12,24" fill="#1C1917" stroke="#EA580C" stroke-width="6"/>
                <path d="M50 22 L74 48 L50 74 L26 48 Z" fill="url(#brandGoldFooter)"/>
                <circle cx="50" cy="48" r="7" fill="#1C1917"/>
                <defs>
                  <linearGradient id="brandGoldFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#F59E0B"/>
                    <stop offset="100%" stop-color="#EA580C"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="brand-text-block">
              <span class="brand-main-name" style="color: #FFFFFF;">Sarwe Unnati</span>
              <span class="brand-sub-badge">FOOD RELIEF MISSION</span>
            </div>
          </div>
          <p class="footer-brand-summary">
            A government-certified Section 8 non-profit company dedicated to providing and distributing food to people facing hunger. Transparent governance, FSSAI hygiene, and 50% 80G tax deductions.
          </p>
          <span class="footer-legal-badge-pill">CIN: U80902UP2018NPL106959</span>
        </div>

        <!-- Col 2 -->
        <div>
          <div class="footer-col-title">Navigation</div>
          <ul class="footer-links-col">
            <li><a href="index.html">Flagship Home</a></li>
            <li><a href="about.html">About Foundation</a></li>
            <li><a href="programs.html">Food Relief Model</a></li>
            <li><a href="impact.html">Impact &amp; ₹2 Cr Budget</a></li>
            <li><a href="volunteer.html">Volunteer Cadre</a></li>
            <li><a href="contact.html">Contact Founder</a></li>
          </ul>
        </div>

        <!-- Col 3 -->
        <div>
          <div class="footer-col-title">Governance</div>
          <ul class="footer-links-col">
            <li><a href="about.html#governance">Board Oversight</a></li>
            <li><a href="impact.html#budget-allocation">Itemized Allocation</a></li>
            <li><a href="impact.html#risk-matrix">Risk Mitigation</a></li>
            <li><a href="donate.html#csr-tiers">CSR Schedule VII</a></li>
            <li><a href="donate.html#bank-wire">Canara Bank Wire</a></li>
          </ul>
        </div>

        <!-- Col 4 -->
        <div>
          <div class="footer-col-title">Headquarters</div>
          <p style="font-size: 0.9rem; color: #A8A29E; line-height: 1.6; margin-bottom: 1rem;">
            House No. 119, Vaishali Vihar, Near Dharia Builder, Delhi Road, Saharanpur — 247001, Uttar Pradesh, India
          </p>
          <div style="font-family: var(--font-mono); font-size: 0.82rem; color: #E2E8F0; display: flex; flex-direction: column; gap: 0.4rem;">
            <span>Director: Priyesh Garg</span>
            <span>Email: priyesh.chanu@gmail.com</span>
            <span>Direct: +91 99974 26815</span>
          </div>
        </div>
      </div>

      <div class="footer-bottom-bar">
        <div>
          © 2018–2026 SARWE UNNATI FOUNDATION. All Rights Reserved. Incorporated under Section 8 of the Companies Act, 2013.
        </div>
        <div style="font-family: var(--font-mono); font-size: 0.75rem;">
          12A URN: AAECH6219BE20251 | 80G URN: AAECH6219BF20261
        </div>
      </div>
    </div>
  </footer>`;
}

for (const p of pages) {
  let content = fs.readFileSync(p.file, 'utf8');

  // Replace Header
  content = content.replace(/<!--\s*(?:Modern Floating Header|Header)[\s\S]*?<\/header>/i, generateHeader(p.key));
  if (!content.includes('class="site-header"')) {
    // If not matched by comment, replace directly
    content = content.replace(/<header[\s\S]*?<\/header>/, generateHeader(p.key));
  }

  // Replace Drawer
  content = content.replace(/<!--\s*Mobile Off-Canvas Drawer[\s\S]*?<div class="mobile-nav-drawer"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/i, generateDrawer(p.key));
  if (!content.includes('id="drawer-close-btn"')) {
    // Fallback replace
    content = content.replace(/<div class="mobile-nav-drawer"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/, generateDrawer(p.key));
  }

  // Replace Footer
  content = content.replace(/<!--\s*={5,}\s*FOOTER[\s\S]*?<\/footer>/i, generateFooter());
  if (!content.includes('© 2018–2026 SARWE UNNATI FOUNDATION')) {
    content = content.replace(/<footer[\s\S]*?<\/footer>/, generateFooter());
  }

  fs.writeFileSync(p.file, content, 'utf8');
  console.log(`Updated shared components for ${p.file}`);
}
