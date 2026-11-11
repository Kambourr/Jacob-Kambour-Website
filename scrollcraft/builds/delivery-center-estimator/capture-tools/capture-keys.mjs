import { chromium } from 'playwright-core';
const [base, out, keys, w = '1440', h = '920'] = process.argv.slice(2);
const browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true, args: ['--use-angle=metal'] });
const page = await browser.newPage({ viewport: { width: +w, height: +h }, deviceScaleFactor: 2 });
await page.goto(base, { waitUntil: 'networkidle' });
await page.evaluate(() => window.dce.ready);
await page.waitForTimeout(3000);
await page.focus('.maplibregl-canvas');
for (const k of keys.split(',')) { await page.keyboard.press(k); await page.waitForTimeout(700); }
await page.evaluate(() => document.activeElement && document.activeElement.blur());
await page.mouse.move(+w - 5, 5);
await page.waitForTimeout(6000);
await page.addStyleTag({ content: '#topbar,#panel,.maplibregl-ctrl,.maplibregl-ctrl-attrib,#hover-tip{visibility:hidden!important}' });
await page.waitForTimeout(400);
await page.screenshot({ path: out });
await browser.close();
