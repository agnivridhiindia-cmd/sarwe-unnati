const fs = require('fs');

const pages = [
  { file: 'index.html', active: 'index.html' },
  { file: 'about.html', active: 'about.html' },
  { file: 'programs.html', active: 'programs.html' },
  { file: 'impact.html', active: 'impact.html' },
  { file: 'volunteer.html', active: 'volunteer.html' },
  { file: 'contact.html', active: 'contact.html' },
  { file: 'donate.html', active: 'donate.html' }
];

function generateHeader(activeFile) {
  return `  <!-- Floating Frosted Navigation Header -->
  <header class="site-header" id="site-header">
    <div class="header-inner">
      <a href="index.html" class="header-brand" aria-label="Sarwe Unnati Foundation Home">
        <span class="brand-emblem-seal">
          <img src="assets/images/logo-emblem-circle.png" alt="Sarwe Unnati Foundation Logo" class="brand-logo-img">
        </span>
        <div class="brand-text-col">
          <span class="brand-main-title">SARWE UNNATI</span>
          <span class="brand-sub-tag">FOUNDATION • ESTD. 2018</span>
        </div>
      </a>

      <!-- Desktop Navigation Links -->
      <nav class="nav-desktop-links" aria-label="Main Navigation">
        <a href="index.html" class="nav-item${activeFile === 'index.html' ? ' active' : ''}">Home</a>
        <a href="about.html" class="nav-item${activeFile === 'about.html' ? ' active' : ''}">About Us</a>
        <a href="programs.html" class="nav-item${activeFile === 'programs.html' ? ' active' : ''}">Relief Model</a>
        <a href="impact.html" class="nav-item${activeFile === 'impact.html' ? ' active' : ''}">Impact &amp; Budget</a>
        <a href="volunteer.html" class="nav-item${activeFile === 'volunteer.html' ? ' active' : ''}">Volunteer</a>
        <a href="contact.html" class="nav-item${activeFile === 'contact.html' ? ' active' : ''}">Contact</a>
      </nav>

      <!-- Header CTAs -->
      <div class="header-cta-group">
        <a href="donate.html" class="btn-header-donate${activeFile === 'donate.html' ? ' active-donate' : ''}">
          <span>CSR [80G] Donate</span>
          <svg class="donate-btn-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </a>
        <button type="button" class="mobile-menu-toggle" id="mobile-drawer-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
          <span class="menu-bar"></span>
          <span class="menu-bar"></span>
          <span class="menu-bar"></span>
        </button>
      </div>
    </div>
  </header>`;
}

pages.forEach(({ file, active }) => {
  let content = fs.readFileSync(file, 'utf8');
  const headerRegex = /<!--.*?Navigation Header.*?-->[\s\S]*?<\/header>|<header class="site-header"[\s\S]*?<\/header>/i;
  
  if (headerRegex.test(content)) {
    content = content.replace(headerRegex, generateHeader(active));
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated header in ${file}`);
  } else {
    console.log(`Could not find header in ${file}`);
  }
});
