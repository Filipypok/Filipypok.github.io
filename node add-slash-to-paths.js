const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/(href|src)="(?!https?:|#|tel:|mailto:|\/)([^"]+)"/g, '$1="/$2"');
  fs.writeFileSync(filePath, content, 'utf8');
}

function walk(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.html')) {
      processFile(fullPath);
    }
  });
}

walk('./'); // Запустить из корня проекта