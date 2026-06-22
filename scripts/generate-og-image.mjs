// Rasterizes scripts/og-image.svg -> public/og-image.png (1200x630)
// Run: node scripts/generate-og-image.mjs
// Requires @resvg/resvg-js (install ad-hoc: npm i -D @resvg/resvg-js)
import { Resvg } from '@resvg/resvg-js'
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))
const svg = readFileSync(join(here, 'og-image.svg'), 'utf8')

const resvg = new Resvg(svg, {
  background: '#0d1a12',
  fitTo: { mode: 'width', value: 1200 },
  font: { loadSystemFonts: true },
})

const out = join(here, '..', 'public', 'og-image.png')
writeFileSync(out, resvg.render().asPng())
console.log('✓ og-image.png generated ->', out)
