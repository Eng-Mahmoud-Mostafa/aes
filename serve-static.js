const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = Number(process.env.PORT || 4173);

function contentType(file) {
  if (file.endsWith(".html")) return "text/html; charset=utf-8";
  if (file.endsWith(".css")) return "text/css; charset=utf-8";
  if (file.endsWith(".js")) return "application/javascript; charset=utf-8";
  if (file.endsWith(".png")) return "image/png";
  if (file.endsWith(".jpg") || file.endsWith(".jpeg")) return "image/jpeg";
  if (file.endsWith(".webp")) return "image/webp";
  if (file.endsWith(".xml")) return "application/xml; charset=utf-8";
  if (file.endsWith(".txt")) return "text/plain; charset=utf-8";
  return "application/octet-stream";
}

const server = http.createServer((req, res) => {
  const requestUrl = new URL(req.url, `http://localhost:${port}`);
  let filePath = path.join(root, decodeURIComponent(requestUrl.pathname));

  if (requestUrl.pathname.endsWith("/")) filePath = path.join(filePath, "index.html");
  if (!path.extname(filePath)) filePath = path.join(filePath, "index.html");

  if (!filePath.startsWith(root)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }

    res.writeHead(200, { "content-type": contentType(filePath) });
    res.end(data);
  });
});

server.listen(port, "127.0.0.1", () => {
  console.log(`AES Egypt site running at http://127.0.0.1:${port}/en/`);
});
