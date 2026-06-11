const fs = require('fs');

function main() {
  const html = fs.readFileSync('C:\\Users\\autiy\\.gemini\\antigravity\\brain\\a58e8323-826b-4986-9cff-a589fce419c9\\.system_generated\\steps\\229\\content.md', 'utf-8');
  
  // Let's search for heading tags
  const h2Matches = html.match(/<h2[^>]*>([\s\S]*?)<\/h2>/gi) || [];
  const h3Matches = html.match(/<h3[^>]*>([\s\S]*?)<\/h3>/gi) || [];
  
  console.log("=== H2 HEADINGS ===");
  h2Matches.slice(0, 20).forEach(m => console.log(m.replace(/<[^>]*>/g, '').trim()));
  
  console.log("\n=== H3 HEADINGS ===");
  h3Matches.slice(0, 20).forEach(m => console.log(m.replace(/<[^>]*>/g, '').trim()));
}

main();
