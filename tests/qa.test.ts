// QA Test Suite
import { test, expect } from '@playwright/test';

test.describe('Portfolio Website QA', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://staging.eltonjohnkyeremeh.com');
  });

  test('Navigation Menu', async ({ page }) => {
    // Check all navigation links
    const navLinks = ['About', 'Projects', 'Services', 'Contact'];
    for (const link of navLinks) {
      const element = await page.getByRole('link', { name: link });
      await expect(element).toBeVisible();
    }
  });

  test('Hero Section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Frontend Developer/i })).toBeVisible();
    await expect(page.getByText(/IT Consultant/i)).toBeVisible();
  });

  test('Projects Section', async ({ page }) => {
    await page.getByRole('link', { name: 'Projects' }).click();
    const projectCards = await page.$$('.project-card');
    expect(projectCards.length).toBeGreaterThan(0);
  });

  test('Contact Form', async ({ page }) => {
    await page.getByRole('link', { name: 'Contact' }).click();
    
    // Fill out contact form
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('textarea[name="message"]', 'Test message');
    
    // Submit form
    await page.click('button[type="submit"]');
    
    // Check for success message
    await expect(page.getByText(/Message sent successfully/i)).toBeVisible();
  });

  test('Dark Mode Toggle', async ({ page }) => {
    const html = page.locator('html');
    await page.click('[aria-label="Toggle dark mode"]');
    await expect(html).toHaveClass(/dark/);
  });

  test('Responsive Design', async ({ page }) => {
    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('nav')).toBeVisible();
    
    // Test tablet view
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.locator('nav')).toBeVisible();
    
    // Test desktop view
    await page.setViewportSize({ width: 1440, height: 900 });
    await expect(page.locator('nav')).toBeVisible();
  });

  test('Performance', async ({ page }) => {
    const timing = await page.evaluate(() => {
      return JSON.stringify(window.performance.timing);
    });
    
    const metrics = JSON.parse(timing);
    const loadTime = metrics.loadEventEnd - metrics.navigationStart;
    expect(loadTime).toBeLessThan(3000); // Load time should be less than 3 seconds
  });
});
