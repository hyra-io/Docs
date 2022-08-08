---
sidebar_position: 100
---

# Self-hosting
The proxy is entirely open-source and the code is available to browse and clone [on GitHub](https://github.com/hyra-io/Discord-Webhook-Proxy).

The proxy is designed for a multi-server architecture as Hyra scales its services horizontally. To allow multi-server operation, we use a MongoDb database to store information across all servers. You could host your own free MongoDb instance on Atlas or maintain your own instance of MongoDb.

## Prerequisites
- Node.js (v16+)
- Mongo DB
- Typescript
- NPM

## Installation
1. Clone to the [repo](https://github.com/hyra-io/Discord-Webhook-Proxy).
2. Install the dependencies using NPM
3. Build the project using `npm run build`
4. Run the server using `npm run start`

:::info

We use pm2 to manage our processes in production. You can very quickly get an instance running using

```sh
npm run pm2
```

:::

We would advise running the service behind a reverse proxy like nginx, HAProxy or Caddy.