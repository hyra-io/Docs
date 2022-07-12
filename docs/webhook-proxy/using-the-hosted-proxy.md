---
sidebar_position: 1
---

# Using the hosted proxy
Hyra offers a free, fully hosted version of the proxy. This means you don't need to do anything special to get it to work.

The hosted version also benefits from a 'rotating IP address' style system, as we have many public addresses attached to our proxy servers and these are rotated on each request to avoid cross-contamination of clients ratelimits. 

The hosted proxy is accessible at [hooks.hyra.io](https://hooks.hyra.io).

To use the proxy, you simply change `discord.com` (or `ptb.discord.com`/`canary.discord.com`) to `hooks.hyra.io` in your Discord Webhook URL. This will automatically forward your request to the hosted proxy.

### A further example

**Was:**
[https://discord.com/api/webhooks/1030302001/AisDPpdoAPpaPA](https://discord.com/api/webhooks/1030302001/AisDPpdoAPpaPA)

**Now:**
[https://hooks.hyra.io/api/webhooks/1030302001/AisDPpdoAPpaPA](https://hooks.hyra.io/api/webhooks/1030302001/AisDPpdoAPpaPA)