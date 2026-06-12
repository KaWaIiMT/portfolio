const { chromium } = require('playwright-core');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });

  // Homepage
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'D:/_College/保研/作品集/screenshot-home.png', fullPage: false });
  console.log('✅ Homepage');

  // Project detail
  await page.goto('http://localhost:3000/projects/code-ascension', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'D:/_College/保研/作品集/screenshot-project.png', fullPage: false });
  console.log('✅ Project detail');

  // About
  await page.goto('http://localhost:3000/about', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'D:/_College/保研/作品集/screenshot-about.png', fullPage: false });
  console.log('✅ About');

  // Check for console errors
  page.on('console', msg => { if (msg.type() === 'error') console.log('CONSOLE ERROR:', msg.text()); });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  const errors = [];
  page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });

  await browser.close();
  console.log('Done. Errors:', errors.length > 0 ? errors : 'none');
})();
