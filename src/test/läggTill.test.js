import { test, expect } from '@playwright/test'

test.describe('Kollar så man kan lägga till en ny bok med text-input', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/')
  })

  test('Kollar så man kan fylla i en titel och att boken hamnar i katalogen', async ({ page }) => {
    
    await page.getByTestId('add-book').click()

    
    await page.getByTestId('add-input-title').fill('Sagan om de två tornen')
    await page.getByTestId('add-input-author').fill('J.R.R Tolkien')

   
    await expect(page.getByTestId('add-input-title')).toHaveValue('Sagan om de två tornen')
    await expect(page.getByTestId('add-input-author')).toHaveValue('J.R.R Tolkien')

   
    await page.getByRole('button', { name: 'Lägg till ny bok' }).click()

    
    await page.getByRole('button', { name: 'Katalog' }).click()

    
    await expect(page.getByText('Sagan om de två tornen')).toBeVisible()
    await expect(page.getByText('J.R.R Tolkien')).toBeVisible()
  })
})