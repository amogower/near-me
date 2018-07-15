FROM node:10.1.0-alpine as builder
WORKDIR /home
COPY package.json ./
COPY yarn.lock ./
ARG env=production
ENV NODE_ENV=${env}
RUN yarn install
COPY . .
RUN yarn build
FROM node:10.1.0-alpine
WORKDIR /home
COPY --from=builder /home /home
ARG env=production
CMD ["node", "index.js"]
