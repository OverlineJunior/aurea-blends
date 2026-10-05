// Gera public/og-image.jpg (1200×630) a partir do logo oficial.
// Utilitário one-off: rode `node scripts/generate-og.mjs` quando quiser regenerar.
// Não faz parte do build do site.
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const WIDTH = 1200;
const HEIGHT = 630;
const LOGO_SIZE = 520;

// --color-bg (#F7F0E7) em rgb, para não espalhar hex fora de tokens.css
const BACKGROUND = { r: 247, g: 240, b: 231 };

const logoPath = fileURLToPath(new URL('../src/assets/aurea-logo.jpg', import.meta.url));
const outputPath = fileURLToPath(new URL('../public/og-image.jpg', import.meta.url));

const logo = await sharp(logoPath).resize(LOGO_SIZE, LOGO_SIZE).toBuffer();

await sharp({
  create: {
    width: WIDTH,
    height: HEIGHT,
    channels: 3,
    background: BACKGROUND,
  },
})
  .composite([
    {
      input: logo,
      top: Math.round((HEIGHT - LOGO_SIZE) / 2),
      left: Math.round((WIDTH - LOGO_SIZE) / 2),
    },
  ])
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(outputPath);

console.log('✓ public/og-image.jpg gerada (1200×630)');