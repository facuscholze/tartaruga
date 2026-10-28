import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { colors } from './colors'

const here = dirname(fileURLToPath(import.meta.url))

describe('brand tokens', () => {
  it('navy canónico de la marca', () => {
    expect(colors.navy.toLowerCase()).toBe('#16213f')
  })

  it('tokens.css declara los mismos hex', () => {
    const css = readFileSync(resolve(here, '../styles/tokens.css'), 'utf8')
    expect(css.toLowerCase()).toContain('#16213f')
    expect(css.toLowerCase()).toContain('#e85d04')
    expect(css.toLowerCase()).toContain('#2d6a4f')
    expect(css.toLowerCase()).toContain('#e6ccb2')
  })
})
