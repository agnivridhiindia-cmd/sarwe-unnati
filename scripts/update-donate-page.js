const fs = require('fs');

let html = fs.readFileSync('donate.html', 'utf8');

// Update featured tier styling to vibrant emerald/blue
html = html.replace(
  /<span class="tier-badge-chip orange-chip">SILVER ANNADAAN<\/span>/,
  '<span class="tier-badge-chip emerald-chip" style="background: rgba(16, 185, 129, 0.2); color: #34D399; border-color: rgba(16, 185, 129, 0.4);">SILVER ANNADAAN • CSR BENCHMARK</span>'
);

html = html.replace(
  /<div class="csr-price orange-price">₹54,795 <span style="font-size: 0\.95rem; font-weight: 500; color: #A8A29E;">\/ full day<\/span><\/div>/,
  '<div class="csr-price" style="color: #38BDF8;">₹54,795 <span style="font-size: 0.95rem; font-weight: 500; color: #94A3B8;">/ full day operations</span></div>'
);

html = html.replace(
  /<a href="#bank-wire" class="btn-primary-glow tier-btn orange-btn">[\s\S]*?<\/a>/,
  `<a href="#bank-wire" class="btn-primary-glow tier-btn" style="background: #2563EB; color: #FFFFFF !important;">
              <span>Sponsor Full Day Operations (₹54,795)</span>
              <span>→</span>
            </a>`
);

// Update section badges
html = html.replace(
  /<span class="section-tag-badge">CORPORATE ALLIANCES • SCHEDULE VII CSR<\/span>/,
  '<span class="section-tag-badge emerald">CORPORATE ALLIANCES • SCHEDULE VII CSR</span>'
);

html = html.replace(
  /<span class="section-tag-badge">INTERACTIVE IMPACT SIMULATOR<\/span>/,
  '<span class="section-tag-badge sapphire">INTERACTIVE IMPACT SIMULATOR</span>'
);

fs.writeFileSync('donate.html', html, 'utf8');
console.log('Successfully updated donate.html palette!');
