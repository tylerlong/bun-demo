# RingCentral WebHook Receiver

This is a server side application to receive RingCentral WebHook notifications.

Please note that: it's for **testing** only, not for production, since there is no security built-in.

## How to deploy this project for free

Create a new account on [render.com](https://render.com/) if you haven't done so.

Log into [render.com dashboard](https://dashboard.render.com/) and create a new "Web Service".

For "Source Code", select the "Public Git Repository" tab and paste "https://github.com/tylerlong/rc-webhook-recevier", click "Connect ->" button.

For "Language", select "Node".

For "Build Command", enter "bun install".

For "Start Command", enter "bun src/index.ts".

For "Instance Type", select "Free".

Click the "Deploy Web Service" button.
