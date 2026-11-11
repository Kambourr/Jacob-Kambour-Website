import { chromium } from 'playwright-core';
import fs from 'node:fs';
const [base, out] = process.argv.slice(2);
const browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true, args: ['--use-angle=metal'] });
const page = await browser.newPage({ viewport: { width: 1440, height: 920 }, deviceScaleFactor: 2 });
const settle = (ms = 3500) => page.waitForTimeout(ms);
await page.goto(base, { waitUntil: 'networkidle' });
await page.evaluate(() => window.dce.ready);
await settle();
const hideChrome = () => page.addStyleTag({ content: '#topbar,#panel,.maplibregl-ctrl,.maplibregl-ctrl-attrib,#hover-tip{visibility:hidden!important}' });
// US overview: zoom on the continental US
await page.mouse.move(330, 415);
for (let i = 0; i < 6; i++) { await page.mouse.wheel(0, -240); await page.waitForTimeout(350); }
await settle(5000);
const tag = await hideChrome();

await tag.evaluate(n => n.remove());
// 94402
await page.evaluate(() => window.dce.selectZip('94402'));
await page.waitForSelector('#panel[data-state="ready"]');
await settle(5000);
await page.screenshot({ path: `${out}/dashboard-94402.png` });
const boxes = await page.evaluate(() => {
  const p = document.getElementById('panel').getBoundingClientRect();
  const rel = el => { const r = el.getBoundingClientRect(); return { x: r.left - p.left, y: r.top - p.top, w: r.width, h: r.height }; };
  const hs = Array.from(document.querySelectorAll('#panel h2'));
  const byText = t => hs.find(h => h.textContent.trim().toLowerCase().startsWith(t));
  return {
    panel: { x: p.left, y: p.top, w: p.width, h: p.height },
    hero: rel(document.querySelector('#panel .hero')),
    driversHead: rel(byText('cost drivers')),
    lenses: rel(document.querySelector('#panel .lenses')),
    cashHead: rel(byText('cash flow')),
    scenarios: rel(document.querySelector('#panel .scenarios')),
    scenHead: rel(byText('low')),
    tornadoHead: rel(byText('npv tornado')),
    drivers: Array.from(document.querySelectorAll('#panel .driver')).map(rel),
    radius: getComputedStyle(document.getElementById('panel')).borderRadius,
  };
});
fs.writeFileSync(`${out}/panel-boxes.json`, JSON.stringify(boxes, null, 2));
const pb = boxes.panel;
// panel cutout down to just above the tornado heading
await page.screenshot({ path: `${out}/panel-94402.png`, clip: { x: pb.x, y: pb.y, width: pb.w, height: boxes.tornadoHead.y - 8 } });
// bay map clean plate (zoom out one notch around 94402)
await page.mouse.move(80, 600);
const tag2 = await hideChrome();
await settle(1500);
await page.screenshot({ path: `${out}/bay-map-94402.png` });
await page.mouse.move(700, 450);
await page.mouse.wheel(0, 300); await page.mouse.move(80, 600); await settle(4000);
await page.screenshot({ path: `${out}/bay-map-94402-wide.png` });
await tag2.evaluate(n => n.remove());
await page.evaluate(() => window.dce.compareZips('94402', '78701'));
await page.waitForSelector('#panel[data-state="ready"]');
await settle(4000);
await page.screenshot({ path: `${out}/compare-94402-78701.png` });
await browser.close();
