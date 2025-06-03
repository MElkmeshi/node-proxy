import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
const app = express();
const PORT = 8888;
const API_SERVICE_URL = "https://jsonplaceholder.typicode.com";

app.use(
  createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
  })
);
app.listen(PORT, () => {
  console.log(`Starting Proxy at http://localhost:${PORT}`);
});
