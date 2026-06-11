const fs = require('fs');

function main() {
  const html = fs.readFileSync('C:\\Users\\autiy\\.gemini\\antigravity\\brain\\a58e8323-826b-4986-9cff-a589fce419c9\\.system_generated\\steps\\229\\content.md', 'utf-8');
  
  // Find text around "Why Finance Aspirants"
  const vouchIndex = html.indexOf("Why Finance Aspirants");
  if (vouchIndex !== -1) {
    console.log("=== VOUCH FOR US SECTION ===");
    console.log(html.substring(vouchIndex - 500, vouchIndex + 2500).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').substring(0, 1000));
  }
  
  // Find text around "For Every Stage of Your Career"
  const stageIndex = html.indexOf("For Every Stage of Your Career");
  if (stageIndex !== -1) {
    console.log("\n=== FOR EVERY STAGE SECTION ===");
    console.log(html.substring(stageIndex - 500, stageIndex + 2500).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').substring(0, 1000));
  }
}

main();
