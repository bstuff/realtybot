FROM node:18-alpine as builder

WORKDIR /app
COPY ./ ./

RUN npm ci

ENV NODE_ENV=production
RUN npm run build


FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/prisma /app/prisma
COPY --from=builder /app/build /app/build
COPY --from=builder /app/public /app/public
COPY ./package*.json ./
COPY ./.env ./

RUN npm ci --omit=dev

CMD ["npm", "start"]
