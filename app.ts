import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

export function createApp() {
  const app = express();
  const API_SERVICE_URL =
    process.env.API_SERVICE_URL ?? "https://jsonplaceholder.typicode.com";

  app.use(
    createProxyMiddleware({
      target: API_SERVICE_URL,
      changeOrigin: true,
    })
  );

  return app;
}

if (import.meta.main) {
  const PORT = Number(process.env.PORT ?? 8888);
  const app = createApp();
  app.listen(PORT, () => {
    console.log(`Starting Proxy at http://localhost:${PORT}`);
  });
}
