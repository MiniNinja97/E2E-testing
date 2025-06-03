
// import { test, expect } from '@playwright/test'



// test.describe('Katalogsidan, klicka på gilla markeringen för att lägga till och ta bort böcker från min lista', () => {
  
//   // Körs innan varje test
//   test.beforeEach(async ({ page }) => {
//     await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/')
//   })

//   test('Kollar om man kan gilla eller ogilla en bok från Katalog-sidan', async ({page})=> {
//     const heart = page.locator('[data-testid="star-Hur man tappar bort TV-fjärr 10 gånger om dagen"]')

//     await heart.click()
//     await expect(heart).toHaveClass(/selected/)

//     await heart.click()
//     await expect(heart).not.toHaveClass(/selected/)
//   })

 
// })

import { test, expect } from '@playwright/test'

test.describe('Gilla/ogilla första boken i katalogen', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/')

   
  })

 test('Gilla och ogilla första boken', async ({ page }) => {
  const title = 'Hur man tappar bort sin TV-fjärr 10 gånger om dagen'
  const heart = page.locator(`[data-testid="star-${title}"]`)

  // Klicka för att gilla
  await heart.click()
  await expect(heart).toHaveClass(/selected/)

  // Klicka igen för att ogilla
  await heart.click()
  await expect(heart).not.toHaveClass(/selected/)
})
})
