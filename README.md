# Node Proxy

This project is a simple proxy server built with Express and `http-proxy-middleware`. It forwards all incoming requests to [JSONPlaceholder](https://jsonplaceholder.typicode.com) and listens on **port 8888** by default.

## Installation

```bash
npm install
```

## Development

Start the proxy in development mode:

```bash
npm run dev
```

## Build

Compile the TypeScript source:

```bash
npm run build
```

## Start

Run the compiled server:

```bash
npm start
```

The proxy will launch on `http://localhost:8888` and forward API calls to `https://jsonplaceholder.typicode.com`.
