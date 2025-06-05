import { test, expect } from '@playwright/test'

test.describe('Navigeringen', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/')
  })

  test('Kollar att titeln "Läslistan" visas', async ({ page }) => {
    await expect(page).toHaveTitle('Läslistan')
  })

  test('Kollar att knapparna "Katalog", "Lägg till bok" och "Mina böcker" finns', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Katalog' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Lägg till bok' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Mina böcker' })).toBeVisible()
  })

  test('Klickar på "Lägg till bok" och kollar att formuläret visas', async ({ page }) => {
    await page.getByRole('button', { name: 'Lägg till bok' }).click()

    await expect(page.getByTestId('add-input-title')).toBeVisible()
  })

  test('Klickar på "Mina böcker" och kollar att text om favoriter visas', async ({ page }) => {
    await page.getByRole('button', { name: 'Mina böcker' }).click()

    await expect(page.getByText('När du valt, kommer dina favoritböcker att visas här')).toBeVisible()
  })

  test('Klickar på "Katalog" och kollar att boklistan visas', async ({ page }) => {
	//måste byta vy först för att "Katalog-knappen" ska gå att klicka på
    await page.getByRole('button', { name: 'Lägg till bok' }).click()

    await page.getByRole('button', { name: 'Katalog' }).click()
    await expect(page.getByText('Hur man tappar bort sin TV-fjärr 10 gånger om dagen')).toBeVisible()
  })
})

