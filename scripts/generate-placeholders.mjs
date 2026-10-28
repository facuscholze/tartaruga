import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'

const dir = path.resolve('src/assets/images')
fs.mkdirSync(dir, { recursive: true })

function scene(file, w, h, c1, c2) {
  const out = path.join(dir, file)
  execSync(`convert -size ${w}x${h} gradient:'${c1}-${c2}' '${out}'`, { stdio: 'inherit' })
}

scene('hero-atardecer.png', 1600, 900, '#F4A261', '#16213F')
scene('fuego.png', 900, 1200, '#DC2F02', '#0B1020')
scene('plato-01.png', 800, 800, '#C45C26', '#16213F')
scene('plato-02.png', 800, 800, '#6F4E37', '#16213F')
scene('plato-03.png', 800, 800, '#87B8D9', '#16213F')
scene('deck.png', 1400, 900, '#6F4E37', '#1A140F')
scene('faro.png', 900, 1200, '#87B8D9', '#16213F')
scene('mascota.png', 1200, 900, '#2D6A4F', '#16213F')

execSync(
  `convert -size 1200x630 gradient:'#E85D04-#16213F' public/og.png`,
  { stdio: 'inherit' },
)

console.log('placeholders written')
