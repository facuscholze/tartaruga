import { expect, test } from '@playwright/test'

async function skipLoader(page: import('@playwright/test').Page) {
  const skip = page.getByRole('button', { name: /saltar|skip/i })
  if (await skip.isVisible().catch(() => false)) await skip.click()
}

test.describe('scroll suave', () => {
  test.use({ viewport: { width: 375, height: 812 } })

  test('un link interno no teletransporta', async ({ page }) => {
    await page.goto('./')
    await skipLoader(page)
    await expect(page.locator('#hero')).toBeVisible()
    await page.locator('a[href="#carta"]').first().click()
    await page.waitForTimeout(400)
    const y = await page.evaluate(() => window.scrollY)
    expect(y).toBeGreaterThan(80)
    await page.waitForFunction(() => window.location.hash === '#carta', null, { timeout: 4000 })
  })

  test('el sticky Reservar apunta a WhatsApp', async ({ page }) => {
    await page.goto('./')
    await skipLoader(page)
    const sticky = page.locator('a', { hasText: /^reservar$/i }).last()
    await expect(sticky).toBeVisible()
    await expect(sticky).toHaveAttribute('href', /wa\.me/)
  })
})

test.describe('scroll escritorio', () => {
  test.use({ viewport: { width: 1280, height: 800 } })

  test('llega a reservas pasando la zona fijada', async ({ page }) => {
    await page.goto('./')
    await skipLoader(page)
    await page.locator('a[href="#reservas"]').first().click()
    await page.waitForFunction(() => window.location.hash === '#reservas', null, { timeout: 5000 })
    const top = await page.locator('#reservas').evaluate((el) => el.getBoundingClientRect().top)
    expect(top).toBeLessThan(160)
  })
})
