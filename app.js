"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_proxy_middleware_1 = require("http-proxy-middleware");
var app = (0, express_1.default)();
var PORT = 8888;
var API_SERVICE_URL = "https://jsonplaceholder.typicode.com";
app.use((0, http_proxy_middleware_1.createProxyMiddleware)({
    target: API_SERVICE_URL,
    changeOrigin: true,
}));
app.listen(PORT, function () {
    console.log("Starting Proxy at http://localhost:".concat(PORT));
});
