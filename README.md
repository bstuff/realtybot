# Realty bot

This is a reduced version of telegram bot. It basically interacts with user commands in telegram and can open a web page with lead form right inside messenger. You can read about it [here](https://core.telegram.org/bots/webapps).

It uses remix as a server and is packed into docker container which is deployed on [Fly.io](https://fly.io).

## Demo video

https://github.com/bstuff/realtybot/assets/11030417/743cfafc-5435-4e83-90b3-3c41b1b7f1af

## Getting started

1) `npm install`
2) create and fill .env file (you will need postgres to start.)
3) `npm run prisma -- migrate dev`
4) `npm run tunnel` - to make your port available on internet. (Check https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/tunnel-guide/)
5) `npm run build:remix`
6) `npm run dev`
7) `POST` with a secret to ./app/routes/tg-webhook/set-webhook.ts to automatically setup your bot webhook
