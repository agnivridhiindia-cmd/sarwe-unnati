const fs = require('fs');

const pages = [
  'index.html',
  'about.html',
  'programs.html',
  'impact.html',
  'donate.html',
  'volunteer.html',
  'contact.html'
];

pages.forEach(file => {
  let html = fs.readFileSync(file, 'utf8');

  // 1. Favicon in <head>
  // Replace existing favicon links or add if missing
  const favTag = '<link rel="icon" type="image/png" href="assets/images/favicon.png">\n  <link rel="apple-touch-icon" href="assets/images/favicon.png">';
  if (html.includes('<link rel="icon"')) {
    html = html.replace(/<link[^>]*rel="(?:icon|shortcut icon|apple-touch-icon)"[^>]*>/gi, '');
  }
  html = html.replace('</head>', `  ${favTag}\n</head>`);

  // 2. Header Brand Mark
  // In index.html and donate.html: class="brand-identity"
  if (file === 'index.html' || file === 'donate.html') {
    html = html.replace(
      /<a href="index\.html" class="brand-identity"[^>]*>[\s\S]*?<\/div>\s*<\/div>\s*<\/a>/,
      `<a href="index.html" class="brand-identity" aria-label="Sarwe Unnati Foundation Home">
        <div class="brand-emblem-icon">
          <img src="assets/images/logo-emblem-circle.png" alt="Sarwe Unnati Foundation Logo" class="brand-logo-img">
        </div>
        <div class="brand-text-block">
          <span class="brand-main-name">SARWE UNNATI</span>
          <span class="brand-sub-badge">FOUNDATION • ESTD. 2018</span>
        </div>
      </a>`
    );
  } else {
    // In about.html, programs.html, impact.html, volunteer.html, contact.html
    html = html.replace(
      /<a href="index\.html" class="header-brand"[^>]*>[\s\S]*?<\/div>\s*<\/a>/,
      `<a href="index.html" class="header-brand" aria-label="Sarwe Unnati Foundation Home">
        <span class="brand-emblem-seal">
          <img src="assets/images/logo-emblem-circle.png" alt="Sarwe Unnati Foundation Logo" class="brand-logo-img">
        </span>
        <div class="brand-text-col">
          <span class="brand-main-title">SARWE UNNATI</span>
          <span class="brand-sub-tag">FOUNDATION • ESTD. 2018</span>
        </div>
      </a>`
    );
  }

  // 3. Mobile Nav Drawer Header
  if (file === 'index.html' || file === 'donate.html') {
    html = html.replace(
      /<div class="drawer-header">\s*<div class="brand-identity">[\s\S]*?<\/div>\s*<\/div>\s*<button/,
      `<div class="drawer-header">
      <div class="brand-identity">
        <div class="brand-emblem-icon">
          <img src="assets/images/logo-emblem-circle.png" alt="Sarwe Unnati Foundation Logo" class="brand-logo-img">
        </div>
        <div class="brand-text-block">
          <span class="brand-main-name" style="color: #FFFFFF;">SARWE UNNATI</span>
          <span class="brand-sub-badge" style="color: #4ADE80;">ESTD. 14 AUG 2018 • SEC. 8 NGO</span>
        </div>
      </div>
      <button`
    );
  } else {
    html = html.replace(
      /<div class="drawer-header">\s*<div class="brand-text-col">[\s\S]*?<\/div>\s*<button/,
      `<div class="drawer-header">
      <div class="header-brand" style="display: flex; align-items: center; gap: 0.75rem;">
        <span class="brand-emblem-seal" style="width: 38px; height: 38px;">
          <img src="assets/images/logo-emblem-circle.png" alt="Sarwe Unnati Foundation Logo" class="brand-logo-img">
        </span>
        <div class="brand-text-col">
          <span class="brand-main-title" style="color: #FFFFFF;">SARWE UNNATI</span>
          <span class="brand-sub-tag" style="color: #4ADE80;">ESTD. 14 AUG 2018 • SEC. 8 NGO</span>
        </div>
      </div>
      <button`
    );
  }

  // 4. Footer Brand
  if (file === 'index.html' || file === 'donate.html') {
    html = html.replace(
      /<div class="brand-identity">\s*<div class="brand-emblem-icon">[\s\S]*?<\/div>\s*<\/div>/,
      `<div class="brand-identity footer-brand">
            <div class="brand-emblem-icon">
              <img src="assets/images/logo-emblem-circle.png" alt="Sarwe Unnati Foundation Logo" class="brand-logo-img">
            </div>
            <div class="brand-text-block">
              <span class="brand-main-name" style="color: #FFFFFF;">SARWE UNNATI</span>
              <span class="brand-sub-badge" style="color: #4ADE80;">FOUNDATION • ESTD. 2018</span>
            </div>
          </div>`
    );
  } else {
    // Other subpages footer
    html = html.replace(
      /<span class="brand-main-name"[^>]*>SARWE UNNATI FOUNDATION<\/span>/,
      `<div class="header-brand footer-brand" style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
            <span class="brand-emblem-seal" style="width: 42px; height: 42px;">
              <img src="assets/images/logo-emblem-circle.png" alt="Sarwe Unnati Foundation Logo" class="brand-logo-img">
            </span>
            <div class="brand-text-col">
              <span class="brand-main-name" style="color: #FFFFFF; font-size: 1.15rem;">SARWE UNNATI FOUNDATION</span>
              <span class="brand-sub-tag" style="color: #4ADE80;">ESTABLISHED 14 AUGUST 2018</span>
            </div>
          </div>`
    );
  }

  // 5. Special in index.html: charter seal
  if (file === 'index.html') {
    html = html.replace(
      /<div class="seal-icon-box" aria-hidden="true">[\s\S]*?<\/div>/,
      `<div class="seal-icon-box" aria-hidden="true" style="padding: 0; background: #000; border: 1.5px solid #10B981; border-radius: 50%; overflow: hidden; width: 44px; height: 44px; display: flex; align-items: center; justify-content: center;">
              <img src="assets/images/logo-emblem-circle.png" alt="Sarwe Unnati Foundation Seal" style="width: 100%; height: 100%; object-fit: cover;">
            </div>`
    );
  }

  fs.writeFileSync(file, html, 'utf8');
  console.log(`Updated brand logos in ${file}`);
});
