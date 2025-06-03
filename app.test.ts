import { describe, beforeAll, afterAll, it, expect } from "bun:test";
import express from "express";
import { createApp } from "./app";

let targetServer: any;
let proxyServer: any;
let proxyPort: number;

beforeAll(() => {
  const target = express();
  target.get("/test", (_, res) => res.json({ message: "ok" }));
  targetServer = target.listen(0);
  const targetPort = (targetServer.address() as any).port;

  process.env.API_SERVICE_URL = `http://localhost:${targetPort}`;

  const proxy = createApp();
  proxyServer = proxy.listen(0);
  proxyPort = (proxyServer.address() as any).port;
});

afterAll(() => {
  targetServer?.close();
  proxyServer?.close();
});

describe("proxy server", () => {
  it("proxies requests", async () => {
    const res = await fetch(`http://localhost:${proxyPort}/test`);
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data).toEqual({ message: "ok" });
  });
});
