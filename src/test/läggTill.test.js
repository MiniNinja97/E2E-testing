import { test, expect } from '@playwright/test'

test.describe('Kollar så man kan lägga till en ny bok med text-input', () => {
  test.beforeEach(async ({ page }) => {
	await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/')

   
  })

test('Kollar så man kan fylla i en titel', async ({ page }) => {


    //gå till sidan där man lägger till en ny bok
	await page.getByTestId('add-book').click();
    
	//hittar rätt inputfält
	await page.getByTestId('add-input-title').fill('Sagan om de två tornen');
    await page.getByTestId('add-input-author').fill('J.R.R Tolkien');
     
	 //fyller i rätt inputfält
     await expect(page.getByTestId('add-input-title')).toHaveValue('Sagan om de två tornen');
     await expect(page.getByTestId('add-input-author')).toHaveValue('J.R.R Tolkien');
      

	  //klickar på lägg till knappen 
	  await page.getByRole('Button', {name: 'Lägg till ny bok'}).click()


})
})