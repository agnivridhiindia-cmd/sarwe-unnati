const fs = require('fs');

let html = fs.readFileSync('volunteer.html', 'utf8');

// 1. Hero Palette
html = html.replace(
  /<div class="section-tag-badge" style="display: inline-flex; align-items: center; gap: 0\.5rem; margin-bottom: 1\.25rem;">[\s\S]*?<\/div>/,
  `<div class="section-tag-badge emerald" style="display: inline-flex; align-items: center; gap: 0.5rem; margin-bottom: 1.25rem;">
          <span class="ticker-dot">✦</span>
          COMMUNITY CADRE • FRONTLINE RELIEF
        </div>`
);

html = html.replace(
  /<span class="serif-accent" style="font-family: var\(--font-serif\); font-style: italic; color: #F59E0B; font-weight: 400;">Field Logistics Network\.<\/span>/,
  `<span class="serif-accent" style="font-family: var(--font-serif); font-style: italic; color: #34D399; font-weight: 400;">Field Logistics Network.</span>`
);

// 2. Section 2: Service Tracks (De-card into .editorial-divided-list)
const oldTracksRegex = /<section id="tracks"[\s\S]*?<\/section>/;
const newTracks = `<section id="tracks" style="padding: 6rem 0; background: #0B0F19; color: #FFFFFF; border-top: 1px solid rgba(255, 255, 255, 0.08); border-bottom: 1px solid rgba(255, 255, 255, 0.08);">
    <div class="container">
      <div style="max-width: 820px; margin-bottom: 4rem;">
        <span class="section-tag-badge sapphire">OPERATIONAL ROLES • 4 FIELD TRACKS</span>
        <h2 class="section-title" style="color: #FFFFFF;">
          Four Strategic <span class="serif-accent" style="font-family: var(--font-serif); font-style: italic; color: #38BDF8; font-weight: 400;">Service Tracks.</span>
        </h2>
        <p class="section-desc" style="color: #94A3B8;">
          Whether preparing early morning steam-kettles or mapping underserved settlements, our structured tracks provide safety, direction, and tangible community impact.
        </p>
      </div>

      <div class="editorial-divided-list" style="border-top-color: rgba(255, 255, 255, 0.12);">
        <div class="editorial-list-item" style="border-bottom-color: rgba(255, 255, 255, 0.12);">
          <div class="editorial-item-num saffron">T-01</div>
          <div class="editorial-item-header">
            <h3 class="editorial-item-title" style="color: #FFFFFF;">Central Kitchen Preparation</h3>
            <span class="editorial-item-tag" style="color: #FB923C;">Morning Shift • 06:00 AM — 10:30 AM</span>
          </div>
          <div class="editorial-item-body" style="color: #CBD5E1;">
            Assist chefs in grain sorting, washing fresh vegetables, operating steam cauldrons, and packaging compostable meal boxes with strict FSSAI hygiene at our central Saharanpur facility.
          </div>
        </div>

        <div class="editorial-list-item" style="border-bottom-color: rgba(255, 255, 255, 0.12);">
          <div class="editorial-item-num emerald">T-02</div>
          <div class="editorial-item-header">
            <h3 class="editorial-item-title" style="color: #FFFFFF;">Route Distribution Cadre</h3>
            <span class="editorial-item-tag" style="color: #34D399;">Midday Shift • 11:30 AM — 03:00 PM</span>
          </div>
          <div class="editorial-item-body" style="color: #CBD5E1;">
            Accompany insulated delivery vans along mapped urban distribution routes. Ensure orderly, respectful, and dignified meal service to laborers, night shelter residents, and seniors.
          </div>
        </div>

        <div class="editorial-list-item" style="border-bottom-color: rgba(255, 255, 255, 0.12);">
          <div class="editorial-item-num sapphire">T-03</div>
          <div class="editorial-item-header">
            <h3 class="editorial-item-title" style="color: #FFFFFF;">Surplus Food Rescue</h3>
            <span class="editorial-item-tag" style="color: #60A5FA;">Night Cadre • 08:30 PM — 11:30 PM</span>
          </div>
          <div class="editorial-item-body" style="color: #CBD5E1;">
            Respond to late-evening notifications from vetted banquets, marriage halls, and commercial catering partners. Verify safety temperature (>65°C), log weights, and transport surplus food safely.
          </div>
        </div>

        <div class="editorial-list-item" style="border-bottom-color: rgba(255, 255, 255, 0.12);">
          <div class="editorial-item-num amber">T-04</div>
          <div class="editorial-item-header">
            <h3 class="editorial-item-title" style="color: #FFFFFF;">Demographic Surveys &amp; GPS Mapping</h3>
            <span class="editorial-item-tag" style="color: #FCD34D;">Flexible Hours • Field Supervision Provided</span>
          </div>
          <div class="editorial-item-body" style="color: #CBD5E1;">
            Conduct dignified field surveys across informal settlements and laborer colonies. Identify emerging hunger hotspots, assess child malnutrition risks, and record route data for executive governance review.
          </div>
        </div>
      </div>
    </div>
  </section>`;

html = html.replace(oldTracksRegex, newTracks);

fs.writeFileSync('volunteer.html', html, 'utf8');
console.log('Successfully de-carded and modernized volunteer.html!');
