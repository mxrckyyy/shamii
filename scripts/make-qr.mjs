import QRCode from 'qrcode';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Resvg } from '@resvg/resvg-js';

const url = process.argv[2] || process.env.SITE_URL || 'https://shamii-woad.vercel.app/';
if (!url) {
  console.error('Usage: node scripts/make-qr.mjs <final-site-url>');
  console.error('   or: SITE_URL=https://example.com node scripts/make-qr.mjs');
  process.exit(1);
}

const outDir = path.resolve('public', 'qr');
fs.mkdirSync(outDir, { recursive: true });

// Romantic theme colors
const dark = '#7A2E4D';   // deep rose / burgundy (QR modules)
const light = '#FFF9F4';  // warm cream (background)
const labelBg = '#FFFFFF'; // center label background
const labelText = '#4A1F35'; // dark burgundy text

const qrOpts = {
  errorCorrectionLevel: 'H',
  margin: 4,
  color: { dark, light },
  width: 1024,
};

// Generate the QR matrix data for a reliable, real QR code (not an image)
const qrData = QRCode.create(url, { errorCorrectionLevel: 'H' });
const size = qrData.modules.size;
const totalSize = size + qrOpts.margin * 2;

// Base SVG from the qrcode library (crisp, vector modules)
const baseSvg = await QRCode.toString(url, { ...qrOpts, type: 'svg' });

// Embed the Cormorant Garamond font so the standalone SVG renders elegantly
// even when the font is not installed on the viewer's system.
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fontPath = path.resolve(
  __dirname,
  '..',
  'node_modules',
  '@fontsource',
  'cormorant-garamond',
  'files',
  'cormorant-garamond-latin-600-normal.woff2'
);
const fontBase64 = fs.readFileSync(fontPath).toString('base64');

// Center label: small rounded rectangle with "MiiMii"
const labelWidth = 12;
const labelHeight = 5;
const labelX = (totalSize - labelWidth) / 2;
const labelY = (totalSize - labelHeight) / 2;

const centerLabel = `
<defs>
  <style type="text/css"><![CDATA[
    @font-face {
      font-family: 'Cormorant Garamond';
      src: url('data:font/woff2;base64,${fontBase64}') format('woff2');
      font-weight: 600;
      font-style: normal;
    }
  ]]></style>
</defs>
<g id="center-label">
  <rect x="${labelX}" y="${labelY}" width="${labelWidth}" height="${labelHeight}" rx="1.2"
        fill="${labelBg}" stroke="${dark}" stroke-width="0.15" />
  <text x="${totalSize / 2}" y="${totalSize / 2}" text-anchor="middle" dominant-baseline="middle"
        font-family="'Cormorant Garamond', Georgia, serif" font-size="2.6" font-weight="600"
        fill="${labelText}">MiiMii</text>
</g>
`;

const svg = baseSvg.includes('</svg>\n')
  ? baseSvg.replace('</svg>\n', centerLabel + '</svg>\n')
  : baseSvg.replace('</svg>', centerLabel + '</svg>');

const svgPath = path.join(outDir, 'qr.svg');
fs.writeFileSync(svgPath, svg);

// Render a high-resolution PNG from the SVG (same QR, same center label)
const pngPath = path.join(outDir, 'qr.png');
const resvg = new Resvg(svg, {
  fitTo: { mode: 'width', value: qrOpts.width },
  font: {
    fontFiles: [fontPath],
    defaultFontFamily: 'Cormorant Garamond',
  },
});
const rendered = resvg.render();
fs.writeFileSync(pngPath, rendered.asPng());

console.log('Generated QR code for:', url);
console.log('Outputs:', svgPath, pngPath);
console.log('QR modules:', size, 'x', size, '| total with quiet zone:', totalSize, 'x', totalSize);
console.log('Verify by decoding the generated image before printing.');