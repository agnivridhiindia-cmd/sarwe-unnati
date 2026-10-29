const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const dir = path.join(__dirname, 'docs', 'FOUDATION DOCUMENTS');
const outDir = path.join(__dirname, 'extracted_info');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function run() {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.toLowerCase().endsWith('.pdf')) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      console.log(`Processing ${file} (${Math.round(stat.size / 1024)} KB)...`);
      
      try {
        const buffer = fs.readFileSync(fullPath);
        const p = new PDFParse({ data: buffer });
        await p.load();
        const textResult = await p.getText();
        await p.destroy();
        
        const outFileName = file.replace(/\.pdf$/i, '.txt');
        fs.writeFileSync(path.join(outDir, outFileName), textResult.text, 'utf-8');
        console.log(`Saved ${outFileName} (${textResult.text.length} chars)`);
      } catch (err) {
        console.error(`Error processing ${file}:`, err.message);
      }
    }
  }
}

run();
