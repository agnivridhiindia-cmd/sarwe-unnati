const fs = require('fs');

let css = fs.readFileSync('css/style.css', 'utf8');

const darkPipelineCss = `
/* Dark section distribution blueprint styles */
#distribution-strategy {
  background: #0B1120 !important;
}

#distribution-strategy .section-title {
  color: #FFFFFF !important;
}

#distribution-strategy .section-desc {
  color: #94A3B8 !important;
}

.pipeline-card {
  background: #1C1917 !important;
  border: 1.5px solid rgba(255, 255, 255, 0.12) !important;
  border-radius: 20px;
  padding: 2.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease;
  position: relative;
  box-shadow: 0 16px 36px -10px rgba(0, 0, 0, 0.6) !important;
}

.pipeline-card:hover {
  transform: translateY(-5px);
  border-color: #EA580C !important;
  box-shadow: 0 20px 45px -10px rgba(234, 88, 12, 0.25) !important;
}

.pipeline-card.featured-phase {
  border: 2px solid #EA580C !important;
  background: linear-gradient(165deg, #1C1917 0%, #292524 100%) !important;
  box-shadow: 0 25px 60px -15px rgba(234, 88, 12, 0.3) !important;
}

.pipeline-title {
  font-family: var(--font-heading);
  font-size: 1.35rem;
  font-weight: 800;
  color: #FFFFFF !important;
  margin-bottom: 0.75rem;
}

.pipeline-desc {
  font-size: 0.92rem;
  line-height: 1.65;
  color: #CBD5E1 !important;
  margin-bottom: 1.5rem;
}

.pipeline-metrics-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  border-top: 1px dashed rgba(255, 255, 255, 0.15) !important;
  padding-top: 1.25rem;
}

.pipeline-metrics-list li {
  font-size: 0.88rem;
  color: #E2E8F0 !important;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
`;

css += '\n' + darkPipelineCss;
fs.writeFileSync('css/style.css', css, 'utf8');
console.log('Successfully updated pipeline styling for high contrast in css/style.css');
