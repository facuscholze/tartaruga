import { expect, test } from '@playwright/test'

test('carga la marca y las secciones principales', async ({ page }) => {
  await page.goto('./')
  const skip = page.getByRole('button', { name: /saltar|skip/i })
  if (await skip.isVisible().catch(() => false)) await skip.click()
  await expect(page.getByRole('heading', { name: /faro|lighthouse|farol/i })).toBeVisible({
    timeout: 15_000,
  })
  await expect(page.getByRole('link', { name: /reservar|book/i }).first()).toBeVisible()
  await expect(page.locator('#lugar')).toBeAttached()
  await expect(page.locator('#carta')).toBeAttached()
  await expect(page.locator('#reservas')).toBeAttached()
})

test('el formulario de reserva es por pasos', async ({ page }) => {
  await page.goto('./#reservas')
  const skip = page.getByRole('button', { name: /saltar|skip/i })
  if (await skip.isVisible().catch(() => false)) await skip.click()
  const form = page.locator('#reservas form')
  await expect(form).toBeVisible({ timeout: 10_000 })
  await form.locator('input[name="date"]').fill('2026-12-24')
  await form.getByRole('button', { name: /siguiente|next|seguinte/i }).click()
  await expect(form.locator('input[name="name"]')).toBeVisible()
})

test('cambia de idioma', async ({ page }) => {
  await page.goto('./')
  const skip = page.getByRole('button', { name: /saltar|skip/i })
  if (await skip.isVisible().catch(() => false)) await skip.click()
  await page.getByRole('button', { name: /^en$/i }).click()
  await expect(page.getByRole('heading', { name: /lighthouse/i }).first()).toBeVisible()
})
