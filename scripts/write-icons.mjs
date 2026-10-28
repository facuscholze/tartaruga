import zlib from 'node:zlib'
import fs from 'node:fs'
import path from 'node:path'

function crc32(buf) {
  let c = ~0
  for (const b of buf) {
    c ^= b
    for (let i = 0; i < 8; i++) c = (c >>> 1) ^ (0xedb88320 & -(c & 1))
  }
  return ~c >>> 0
}

function chunk(type, data) {
  const t = Buffer.from(type)
  const len = Buffer.alloc(4)
  len.writeUInt32BE(data.length)
  const crcSrc = Buffer.concat([t, data])
  const crc = Buffer.alloc(4)
  crc.writeUInt32BE(crc32(crcSrc))
  return Buffer.concat([len, t, data, crc])
}

function png(size, paint) {
  const raw = Buffer.alloc((size * 4 + 1) * size)
  for (let y = 0; y < size; y++) {
    const row = y * (size * 4 + 1)
    raw[row] = 0
    for (let x = 0; x < size; x++) {
      const [r, g, b, a] = paint(x, y, size)
      const i = row + 1 + x * 4
      raw[i] = r
      raw[i + 1] = g
      raw[i + 2] = b
      raw[i + 3] = a
    }
  }
  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(size, 0)
  ihdr.writeUInt32BE(size, 4)
  ihdr[8] = 8
  ihdr[9] = 6
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])
  return Buffer.concat([
    sig,
    chunk('IHDR', ihdr),
    chunk('IDAT', zlib.deflateSync(raw)),
    chunk('IEND', Buffer.alloc(0)),
  ])
}

function turtleIcon(size) {
  return png(size, (x, y, s) => {
    const nx = (x + 0.5) / s
    const ny = (y + 0.5) / s
    const dx = nx - 0.5
    const dy = ny - 0.5
    const r = Math.hypot(dx, dy)
    if (r > 0.48) return [0, 0, 0, 0]
    if (r > 0.44) return [247, 241, 232, 255]
    const inShell = (dx * dx) / 0.07 + ((dy - 0.02) * (dy - 0.02)) / 0.09 < 1
    const head = Math.hypot(dx - 0.02, dy + 0.28) < 0.07
    const fl = Math.hypot(dx + 0.28, dy + 0.05) < 0.08
    const fr = Math.hypot(dx - 0.28, dy + 0.05) < 0.08
    const bl = Math.hypot(dx + 0.22, dy - 0.22) < 0.07
    const br = Math.hypot(dx - 0.22, dy - 0.22) < 0.07
    if (inShell || head || fl || fr || bl || br) return [247, 241, 232, 255]
    return [22, 33, 63, 255]
  })
}

const dir = path.resolve('public/icons')
fs.mkdirSync(dir, { recursive: true })
fs.writeFileSync(path.join(dir, 'icon-192.png'), turtleIcon(192))
fs.writeFileSync(path.join(dir, 'icon-512.png'), turtleIcon(512))
console.log('icons written')
