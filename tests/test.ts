import { expect, test } from '@playwright/test';

test('succeeds', async ({ page }) => {
  await page.goto('/');
  expect(true).toBeTruthy();
});
