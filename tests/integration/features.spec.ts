import { test, expect } from '@playwright/test';

test('test clear button working', async ({ page }) => {
  // Go to /
  await page.goto('/');
  // Click textarea[name="strInput"]
  await page.locator('textarea[name="strInput"]').click();
  // Fill textarea[name="strInput"]
  await page.locator('textarea[name="strInput"]').fill('ddshdjhsdfesdfs');
  // Click input[type="reset"]
  await page.locator('input[type="reset"]').click();
  // After clear inner text must be blank
  const blankText = await page
    .locator('textarea[name="strInput"]')
    .inputValue();
  expect(blankText).toBe('');
});

test('test to uppercase option', async ({ page }) => {
  // Go to /
  await page.goto('/');

  // Click textarea[name="strInput"]
  await page.locator('textarea[name="strInput"]').click();

  // Fill textarea[name="strInput"]
  await page.locator('textarea[name="strInput"]').fill('xsajjdbsajcbaskj');

  // Check #toUppercase
  await page.locator('#toUppercase').check();

  // Click text=Submit
  await page.locator('text=Submit').click();

  // Assert  redirected to result page
  await expect(page).toHaveURL('/result');

  // Result string must be in uppercase
  const resultText = await page.locator('textarea#result').inputValue();
  expect(resultText).toBe('XSAJJDBSAJCBASKJ');
});

test('test to lowercase option', async ({ page }) => {
  // Go to /
  await page.goto('/');

  // Click textarea[name="strInput"]
  await page.locator('textarea[name="strInput"]').click();

  // Fill textarea[name="strInput"]
  await page.locator('textarea[name="strInput"]').fill('XSAJJDBSAJCBASKJ');

  // Check #toLowercase
  await page.locator('#toLowercase').check();

  // Click text=Submit
  await page.locator('text=Submit').click();

  // Assert  redirected to result page
  await expect(page).toHaveURL('/result');

  // Result string must be in lowercase
  const resultText = await page.locator('textarea#result').inputValue();
  expect(resultText).toBe('xsajjdbsajcbaskj');
});

test('test remove all space option', async ({ page }) => {
  // Go to /
  await page.goto('/');

  // Click textarea[name="strInput"]
  await page.locator('textarea[name="strInput"]').click();

  // Fill textarea[name="strInput"]
  await page
    .locator('textarea[name="strInput"]')
    .fill('dsgdfcds sdf dsf dsf d f fsdf asdffd');

  // Click div:has-text("Remove All Spaces") >> nth=3
  await page.locator('div:has-text("Remove All Spaces")').nth(3).click();

  // Click text=Submit
  await page.locator('text=Submit').click();

  // Assert  redirected to result page
  await expect(page).toHaveURL('/result');

  // Assert result string not containing any space
  const resultText = await page.locator('textarea#result').inputValue();
  expect(resultText).toBe('dsgdfcdssdfdsfdsfdffsdfasdffd');
});

test('test remove all commas option', async ({ page }) => {
  // Go to /
  await page.goto('/');

  // Click textarea[name="strInput"]
  await page.locator('textarea[name="strInput"]').click();

  // Fill textarea[name="strInput"]
  await page
    .locator('textarea[name="strInput"]')
    .fill('dsad,asd,sadas,d,as,dsad,d');

  // Click text=Remove All Commas
  await page.locator('text=Remove All Commas').click();

  // Click text=Submit
  await page.locator('text=Submit').click();

  // Assert result string not containing any comma
  const resultText = await page.locator('textarea#result').inputValue();
  expect(resultText).toBe('dsadasdsadasdasdsadd');

  // Assert  redirected to result page
  await expect(page).toHaveURL('/result');
});

test('test back button', async ({ page }) => {
  // Go to /
  await page.goto('/');

  // Click textarea[name="strInput"]
  await page.locator('textarea[name="strInput"]').click();

  // Fill textarea[name="strInput"]
  await page
    .locator('textarea[name="strInput"]')
    .fill('dsa    hDS/ A, dsad@#$dsf  dbf%^&');

  // Check #toUppercase
  await page.locator('#toUppercase').check();

  // Check input[name="removeAllSpaces"]
  await page.locator('input[name="removeAllSpaces"]').check();

  // Check input[name="removeAllCommas"]
  await page.locator('input[name="removeAllCommas"]').check();

  // Click text=Submit
  await page.locator('text=Submit').click();

  // Assert redirected to result page
  await expect(page).toHaveURL('/result');

  // Assert all selected option should refelect in result string
  const resultText = await page.locator('textarea#result').inputValue();
  expect(resultText).toBe('DSAHDS/ADSAD@#$DSFDBF%^&');

  // Click button:has-text("Back")
  await page.locator('button:has-text("Back")').click();

  // Assert  redirected back to home page
  await expect(page).toHaveURL('/');
});

test('test copy button', async ({ page }) => {
  // Go to /
  await page.goto('/');

  // Click textarea[name="strInput"]
  await page.locator('textarea[name="strInput"]').click();

  // Fill textarea[name="strInput"]
  await page
    .locator('textarea[name="strInput"]')
    .fill('asc@haACDsdhvd$%7fa*&Ssa$');

  // Check #toLowercase
  await page.locator('#toLowercase').check();

  // Check input[name="removeAllSpaces"]
  await page.locator('input[name="removeAllSpaces"]').check();

  // Check input[name="removeAllCommas"]
  await page.locator('input[name="removeAllCommas"]').check();

  // Click text=Submit
  await page.locator('text=Submit').click();

  // Assert redirected to result page
  await expect(page).toHaveURL('/result');

  // Assert result text copied to clipboard
  // TODO: complite it
  //   await test.step(
  //     'check result text copied to clipboad on clicking copy button',
  //     async () => {}
  //   );

  // Click button:has-text("Copy")
  await page.locator('button:has-text("Copy")').click();
});
