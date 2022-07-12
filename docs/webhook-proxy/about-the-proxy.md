---
sidebar_position: 1
---

# About the proxy
Hyra's webhook proxy is a simple request forwarder for your Discord Webhooks. It is used to overcome the user-agent ban for Roblox servers.

The proxy is designed to automatically comply with Discord rate limits. The rate limits set by Discord are:

- 5 requests per second maximum
- 30 requests per 60 second window

Hyra will automatically throttle your requests to match Discord's rate limits. This means that you can send as many requests as you want, but Hyra will only successfully process the ones which are allowed.