import QRCode from 'qrcode';
import fs from 'node:fs';
import path from 'node:path';

const url = process.argv[2] || process.env.SITE_URL;
if (!url) {
  console.error('Usage: node scripts/make-qr.mjs <final-site-url>');
  console.error('   or: SITE_URL=https://example.com node scripts/make-qr.mjs');
  process.exit(1);
}

const outDir = path.resolve('public', 'qr');
fs.mkdirSync(outDir, { recursive: true });

const options = {
  errorCorrectionLevel: 'H',
  margin: 2,
  color: { dark: '#5C3A5E', light: '#FFF9F4' },
  width: 1024,
};

await QRCode.toFile(path.join(outDir, 'qr.svg'), url, { ...options, type: 'svg' });
await QRCode.toFile(path.join(outDir, 'qr.png'), url, { ...options, type: 'png' });

console.log('Generated QR code for:', url);
console.log('Outputs:', path.join(outDir, 'qr.svg'), path.join(outDir, 'qr.png'));
console.log('Verify by scanning on a real device before printing.');
