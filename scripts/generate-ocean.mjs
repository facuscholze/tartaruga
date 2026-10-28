import fs from 'node:fs'
import path from 'node:path'

const sampleRate = 22050
const seconds = 6
const n = sampleRate * seconds
const pcm = new Int16Array(n)
let brown = 0
for (let i = 0; i < n; i++) {
  const white = Math.random() * 2 - 1
  brown = (brown + 0.015 * white) / 1.015
  const t = i / sampleRate
  const swell = 0.65 + 0.35 * Math.sin(t * 0.35 * Math.PI * 2)
  const wash = 0.12 * Math.sin(t * 0.9 * Math.PI * 2 + brown * 4)
  let v = (brown * 4.2 + wash) * swell * 0.32
  const fade = Math.min(1, i / (sampleRate * 0.4), (n - i) / (sampleRate * 0.4))
  v *= fade
  pcm[i] = Math.max(-1, Math.min(1, v)) * 32767
}

const dataSize = pcm.length * 2
const buf = Buffer.alloc(44 + dataSize)
buf.write('RIFF', 0)
buf.writeUInt32LE(36 + dataSize, 4)
buf.write('WAVE', 8)
buf.write('fmt ', 12)
buf.writeUInt32LE(16, 16)
buf.writeUInt16LE(1, 20)
buf.writeUInt16LE(1, 22)
buf.writeUInt32LE(sampleRate, 24)
buf.writeUInt32LE(sampleRate * 2, 28)
buf.writeUInt16LE(2, 32)
buf.writeUInt16LE(16, 34)
buf.write('data', 36)
buf.writeUInt32LE(dataSize, 40)
for (let i = 0; i < pcm.length; i++) buf.writeInt16LE(pcm[i], 44 + i * 2)

const out = path.resolve('public/sounds/olas.wav')
fs.mkdirSync(path.dirname(out), { recursive: true })
fs.writeFileSync(out, buf)
console.log('olas.wav', buf.length)
