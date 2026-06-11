const fs = require('fs');

function main() {
  const html = fs.readFileSync('C:\\Users\\autiy\\.gemini\\antigravity\\brain\\a58e8323-826b-4986-9cff-a589fce419c9\\.system_generated\\steps\\229\\content.md', 'utf-8');
  
  const target = "For Every Stage of Your Career";
  const index = html.indexOf(target);
  if (index !== -1) {
    // Print 15000 characters after target
    console.log(html.substring(index, index + 15000));
  }
}

main();
