import { test, expect } from '@playwright/test'

test.describe('Navigeringen', () => {
  
  // Körs innan varje test
  test.beforeEach(async ({ page }) => {
    await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/')
  })

  
  test('Kollar att titeln "Läslistan" visas', async ({ page }) => {
    await expect(page).toHaveTitle('Läslistan')
  })

  
  test('Kollar att förstasidan visar knapparna "Katalog", "Lägg till bok" och "Mina Böcker"', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Katalog' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Lägg till bok' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Mina Böcker' })).toBeVisible()
  })

  
  test('Kollar att man kan klicka på "Lägg till bok"', async ({ page }) => {
    await page.getByRole('button', { name: 'Lägg till bok' }).click()
    
   
    
    
  })

  test('Kollar att man kan klicka på "Mina böcker" ', async({page}) => {
    await page.getByRole('button', {name: 'Mina böcker'}).click()
    
  })
})