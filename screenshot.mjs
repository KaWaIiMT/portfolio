const { chromium } = require("playwright-core");

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });

  await page.goto("http://localhost:3001", { waitUntil: "networkidle" });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: "D:/_College/保研/作品集/screenshot-home.png", fullPage: false });
  console.log("Homepage screenshot saved");

  await page.goto("http://localhost:3001/projects/code-ascension", { waitUntil: "networkidle" });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: "D:/_College/保研/作品集/screenshot-project.png", fullPage: false });
  console.log("Project detail screenshot saved");

  await page.goto("http://localhost:3001/about", { waitUntil: "networkidle" });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: "D:/_College/保研/作品集/screenshot-about.png", fullPage: false });
  console.log("About page screenshot saved");

  const errors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });

  await browser.close();
  console.log("Done. Console errors:", errors.length > 0 ? errors : "none");
})();
