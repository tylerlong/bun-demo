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

## Important URLs

You will be able to find the public URL of your deployed web serice on the top left of the page. It is of format `https://<name-of-your-deployment>.onrender.com`.

The URL for webhook is: `https://<name-of-your-deployment>.onrender.com/webhook/`

The URL to view received notifications is `https://<name-of-your-deployment>.onrender.com/read/`

## Create WebHook

https://developers.ringcentral.com/api-reference/Subscriptions/createSubscription

Don't forget to use `https://<name-of-your-deployment>.onrender.com/webhook/` as WebHook URL.

## Check notifications

Go to `https://<name-of-your-deployment>.onrender.com/read/`.

Please note that, only the latest 100 notifications are shown.

## Limitation

> Your free instance will spin down with inactivity, which can delay requests by 50 seconds or more.

So before you test, you need to access `https://<name-of-your-deployment>.onrender.com/read/` to activate your app.
