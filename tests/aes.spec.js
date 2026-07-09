const http = require("http");
const fs = require("fs");
const path = require("path");
const { test, expect } = require("@playwright/test");

const root = path.resolve(__dirname, "..");
let server;
let baseUrl;

function contentType(file) {
  if (file.endsWith(".html")) return "text/html; charset=utf-8";
  if (file.endsWith(".css")) return "text/css; charset=utf-8";
  if (file.endsWith(".js")) return "application/javascript; charset=utf-8";
  if (file.endsWith(".png")) return "image/png";
  if (file.endsWith(".jpg") || file.endsWith(".jpeg")) return "image/jpeg";
  if (file.endsWith(".xml")) return "application/xml; charset=utf-8";
  if (file.endsWith(".txt")) return "text/plain; charset=utf-8";
  return "application/octet-stream";
}

test.beforeAll(async () => {
  server = http.createServer((req, res) => {
    const url = new URL(req.url, "http://localhost");
    let filePath = path.join(root, decodeURIComponent(url.pathname));
    if (url.pathname.endsWith("/")) filePath = path.join(filePath, "index.html");
    if (!path.extname(filePath)) filePath = path.join(filePath, "index.html");
    if (!filePath.startsWith(root)) {
      res.writeHead(403);
      res.end("Forbidden");
      return;
    }
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end("Not found");
        return;
      }
      res.writeHead(200, { "content-type": contentType(filePath) });
      res.end(data);
    });
  });
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  baseUrl = `http://127.0.0.1:${server.address().port}`;
});

test.afterAll(async () => {
  await new Promise((resolve) => server.close(resolve));
});

test("English and Arabic home pages render with assets and correct direction", async ({ page }) => {
  const errors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  await page.goto(`${baseUrl}/en/`);
  await expect(page.getByRole("heading", { name: /Trusted Audit/ })).toBeVisible();
  await expect(page.locator(".trust-signal-grid")).toContainText("Confidential advisory process");
  await expect(page.locator(".trust-signal-grid")).toContainText("Audit, tax, accounting, and advisory under one firm");
  await expect(page.locator(".brand img")).toHaveJSProperty("complete", true);
  await expect(page.locator("html")).toHaveAttribute("dir", "ltr");
  await page.goto(`${baseUrl}/ar/`);
  await expect(page.getByRole("heading", { name: "خدمات تدقيق وضرائب ومحاسبة واستشارات أعمال موثوقة في مصر" })).toBeVisible();
  await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
  expect(errors).toEqual([]);
});

test("mobile navigation, FAQ accordion, and contact validation work", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`${baseUrl}/en/`);
  await page.getByRole("button", { name: "Open menu" }).click();
  await expect(page.locator(".main-nav")).toHaveClass(/is-open/);
  await page.goto(`${baseUrl}/en/faq/`);
  await page.locator("details").first().click();
  await expect(page.locator("details").first()).toHaveAttribute("open", "");
  await page.goto(`${baseUrl}/en/contact/`);
  await page.getByRole("button", { name: "Submit Request" }).click();
  await expect(page.locator(".form-message")).toContainText("Name");
  await expect(page.locator(".form-message")).toContainText("Email");
  await expect(page.locator(".form-message")).toContainText("Service Needed");
});

test("contact submit opens encoded WhatsApp message without changing page URL", async ({ page, context }) => {
  await page.goto(`${baseUrl}/en/contact/`);
  await page.locator('[name="name"]').fill("Mahmoud Mostafa");
  await page.locator('[name="email"]').fill("mahmoud@example.com");
  await page.locator('[name="phone"]').fill("+201001234567");
  await page.locator('[name="company"]').fill("AES Client");
  await page.locator('[name="service"]').selectOption({ label: "Tax & Legal Services" });
  await page.locator('[name="message"]').fill("I need a consultation about tax compliance in Egypt.");
  const before = page.url();
  const popupPromise = context.waitForEvent("page");
  await page.getByRole("button", { name: "Submit Request" }).click();
  const popup = await popupPromise;
  expect(page.url()).toBe(before);
  const popupUrl = decodeURIComponent(decodeURIComponent(popup.url())).replace(/\+/g, " ");
  expect(popupUrl).toContain("Name: Mahmoud Mostafa");
  expect(popupUrl).toContain("Service Needed: Tax & Legal Services");
});
