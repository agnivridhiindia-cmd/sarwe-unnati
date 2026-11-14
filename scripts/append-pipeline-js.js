const fs = require('fs');
const path = require('path');

const jsPath = path.join(__dirname, '../js/main.js');
let mainJs = fs.readFileSync(jsPath, 'utf8');

// Add to DOMContentLoaded
mainJs = mainJs.replace(
  '  setupInteractiveTilt();\n});',
  '  setupInteractiveTilt();\n  setupOperatingModelPipeline();\n});'
);

// Append function definition
const pipelineFunction = `
/**
 * 5-PILLAR OPERATING ARCHITECTURE PIPELINE
 * Provides interactive tab navigation, keyboard controls, and arrow stepper
 */
function setupOperatingModelPipeline() {
  const navButtons = document.querySelectorAll('.pipeline-nav-btn');
  const panels = document.querySelectorAll('.pillar-panel-view');
  if (!navButtons.length || !panels.length) return;

  function switchPillar(targetIndex) {
    // targetIndex is 1-based (1 to 5)
    navButtons.forEach(btn => {
      const idx = parseInt(btn.getAttribute('data-pillar'), 10);
      const isMatch = idx === targetIndex;
      btn.classList.toggle('active', isMatch);
      btn.setAttribute('aria-selected', isMatch ? 'true' : 'false');
    });

    panels.forEach(panel => {
      const panelId = panel.id;
      const isMatch = panelId === \`pillar-panel-\${targetIndex}\`;
      panel.classList.toggle('active', isMatch);
    });
  }

  // Click on pipeline nav buttons
  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = parseInt(btn.getAttribute('data-pillar'), 10);
      switchPillar(target);
    });

    // Keyboard support
    btn.addEventListener('keydown', (e) => {
      const current = parseInt(btn.getAttribute('data-pillar'), 10);
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        const next = current === 5 ? 1 : current + 1;
        switchPillar(next);
        const nextBtn = document.querySelector(\`.pipeline-nav-btn[data-pillar="\${next}"]\`);
        if (nextBtn) nextBtn.focus();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const prev = current === 1 ? 5 : current - 1;
        switchPillar(prev);
        const prevBtn = document.querySelector(\`.pipeline-nav-btn[data-pillar="\${prev}"]\`);
        if (prevBtn) prevBtn.focus();
      }
    });
  });

  // Next and Prev stepper arrows inside each panel
  document.querySelectorAll('.pillar-arrow-btn').forEach(arrowBtn => {
    arrowBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = parseInt(arrowBtn.getAttribute('data-target'), 10);
      if (target >= 1 && target <= 5) {
        switchPillar(target);
      }
    });
  });
}
`;

mainJs += '\n' + pipelineFunction;
fs.writeFileSync(jsPath, mainJs, 'utf8');
console.log('Successfully updated js/main.js with setupOperatingModelPipeline');
