// Đóng gói font Be Vietnam Pro + Font Awesome vào www/ để app chạy không cần internet
const fs = require('fs'), path = require('path');
const fsrc = 'node_modules/@fontsource/be-vietnam-pro/files/';
fs.mkdirSync('www/fonts', { recursive: true });
let css = '', n = 0;
for (const f of fs.readdirSync(fsrc)) {
  const m = f.match(/^be-vietnam-pro-(latin|latin-ext|vietnamese)-(\d+)-normal\.woff2$/);
  if (!m) continue;
  fs.copyFileSync(fsrc + f, 'www/fonts/' + f);
  css += `@font-face{font-family:"Be Vietnam Pro";font-style:normal;font-display:swap;font-weight:${m[2]};src:url(fonts/${f}) format("woff2");}\n`;
  n++;
}
fs.writeFileSync('www/fonts.css', css);
const fa = 'node_modules/@fortawesome/fontawesome-free/';
fs.mkdirSync('www/vendor/fa', { recursive: true });
fs.cpSync(fa + 'css', 'www/vendor/fa/css', { recursive: true });
fs.cpSync(fa + 'webfonts', 'www/vendor/fa/webfonts', { recursive: true });
console.log('font faces:', n);
