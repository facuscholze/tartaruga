import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TurtleLogo } from './TurtleLogo'

describe('TurtleLogo', () => {
  it('expone un título accesible', () => {
    const { getByRole } = render(<TurtleLogo />)
    expect(getByRole('img', { name: /tartaruga/i })).toBeInTheDocument()
  })

  it('puede ser decorativa', () => {
    const { container } = render(<TurtleLogo decorative />)
    expect(container.querySelector('svg')?.getAttribute('aria-hidden')).toBe('true')
  })
})
