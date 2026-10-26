import { describe, expect, it } from 'vitest'
import es from './es.json'
import en from './en.json'
import pt from './pt.json'

function keys(obj: unknown, prefix = ''): string[] {
  if (obj === null || typeof obj !== 'object') return [prefix.replace(/\.$/, '')]
  return Object.entries(obj as Record<string, unknown>).flatMap(([k, v]) =>
    keys(v, `${prefix}${k}.`),
  )
}

describe('i18n', () => {
  it('ES, EN y PT tienen las mismas claves', () => {
    const a = keys(es).sort()
    expect(keys(en).sort()).toEqual(a)
    expect(keys(pt).sort()).toEqual(a)
  })
})
