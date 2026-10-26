import { expect, test } from '@playwright/test'

test('carga el nombre de la marca', async ({ page }) => {
  await page.goto('./')
  await expect(page.getByRole('heading', { name: /tartaruga/i })).toBeVisible()
})
