import { expect, test } from '@playwright/test'

test('carga la marca y las secciones principales', async ({ page }) => {
  await page.goto('./')
  await expect(page.getByRole('heading', { name: /faro|lighthouse|farol/i })).toBeVisible({
    timeout: 15_000,
  })
  await expect(page.getByRole('link', { name: /reservar|book/i }).first()).toBeVisible()
  await expect(page.locator('#lugar')).toBeAttached()
  await expect(page.locator('#carta')).toBeAttached()
  await expect(page.locator('#reservas')).toBeAttached()
})

test('el formulario de reserva exige datos', async ({ page }) => {
  await page.goto('./#reservas')
  const form = page.locator('#reservas form')
  await expect(form).toBeVisible()
  await form.locator('input[name="name"]').fill('')
  await form.getByRole('button', { name: /whatsapp/i }).click()
  await expect(form.locator('input[name="name"]')).toBeVisible()
})

test('cambia de idioma', async ({ page }) => {
  await page.goto('./')
  await page.getByRole('button', { name: /^en$/i }).click()
  await expect(page.getByRole('heading', { name: /lighthouse/i }).first()).toBeVisible()
})
