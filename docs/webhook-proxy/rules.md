---
sidebar_position: 3
---

# Service Rules
To offer a "fair share" service without noisy neighbours we have a few rules you must follow. These rules ensure that the service is not overutilized or abused.

## You must

- **Be cautious of the amount of requests you make to the service** - This means that you must think about how many requests implementing a call would make, accounting for all of your games running servers.
- **Aim to comply with ratelimits** - This service is not a vacuum for all of your requests, be mindful of the amount of requests you are sending in relation to the ratelimits.
- **Bundle requests where possible** - For example, if you are sending an order log for a cafe game, you should bundle the order line items into one embed payload, instead of several separate requests.
- **Validate your requests before sending them** - Check that your requests are valid JSON and all fields and values are properly populated.

## Forbidden uses 

To prevent abuse and spam, we do not allow use of the service for the following:

- **Chat logging** - Any form of chat or communication logging
- **Error logging** - Any form of error or exception logging is not permitted. You should use a purpose built error logging service instead
- **Transaction logs** - Any form of transaction or payment logging is not permitted. This includes gamepass purchases, in-game purchases.
- **Player join/leaves** - Any form of player entrance/exit logs for your servers are strictly prohibited. However, for Admin join/leaves we do allow them as long as they are in compliance with the ratelimits.
- **Password Phishing or any other form of phishing** - Any form of password phishing or other form of phishing is not permitted and against Roblox & Discord's policies.
- **Feedback/Bug Reports/Call an Admin GUIs without debounce** - All "feedback-style" forms must be debounced. This means players must not be able to repeatedly submit a form without a delay. The debounce *must* be applied server side. Client debounces are not suitable protection.
