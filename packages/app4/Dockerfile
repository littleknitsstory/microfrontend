FROM docker.io/library/node:19-alpine as intermediate
LABEL stage=intermediate

WORKDIR /tmp/build
ADD ./ /tmp/build
RUN npm install && npm run build

FROM docker.io/library/nginx:1.22-alpine

RUN rm -rf /usr/share/nginx/html/*
COPY --from=intermediate /tmp/build/dist/* /usr/share/nginx/html/
