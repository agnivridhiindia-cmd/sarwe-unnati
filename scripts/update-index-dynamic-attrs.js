const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// 1. Add float-slow to hero-eyebrow-pill
html = html.replace(
  '<div class="hero-eyebrow-pill">',
  '<div class="hero-eyebrow-pill float-slow">'
);

// 2. Add spotlight-card and data-counter to hero-telemetry-hud
const oldTelemetryHud = `          <!-- Glass Telemetry HUD -->
          <div class="hero-telemetry-hud">
            <div class="telemetry-card">
              <span class="telemetry-val emerald">3,00,000</span>
              <span class="telemetry-label">Annual Meals Target</span>
            </div>
            <div class="telemetry-card">
              <span class="telemetry-val">₹66.67</span>
              <span class="telemetry-label">Unit Program Cost</span>
            </div>
            <div class="telemetry-card">
              <span class="telemetry-val amber">100%</span>
              <span class="telemetry-label">Direct Bank Wire</span>
            </div>
          </div>`;

const newTelemetryHud = `          <!-- Glass Telemetry HUD -->
          <div class="hero-telemetry-hud">
            <div class="telemetry-card spotlight-card">
              <span class="telemetry-val emerald" data-counter="300000">3,00,000</span>
              <span class="telemetry-label">Annual Meals Target</span>
            </div>
            <div class="telemetry-card spotlight-card">
              <span class="telemetry-val" data-counter="66" data-prefix="₹" data-suffix=".67">₹66.67</span>
              <span class="telemetry-label">Unit Program Cost</span>
            </div>
            <div class="telemetry-card spotlight-card">
              <span class="telemetry-val amber" data-counter="100" data-suffix="%">100%</span>
              <span class="telemetry-label">Direct Bank Wire</span>
            </div>
          </div>`;

html = html.replace(oldTelemetryHud, newTelemetryHud);

// 3. Make problem cards and bento cards spotlight-ready
html = html.replace(/class="challenge-row-card"/g, 'class="challenge-row-card spotlight-card"');
html = html.replace(/class="particular-item"/g, 'class="particular-item spotlight-card"');
html = html.replace(/class="csr-tier-card"/g, 'class="csr-tier-card spotlight-card"');
html = html.replace(/class="roadmap-phase-card"/g, 'class="roadmap-phase-card spotlight-card"');

fs.writeFileSync(indexPath, html, 'utf8');
console.log('Successfully applied dynamic attributes to index.html!');
