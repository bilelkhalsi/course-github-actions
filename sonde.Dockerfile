FROM node:latest AS develop

WORKDIR /workspace
COPY . ./
RUN npm i \
    && npm run build:sonde 

FROM ghcr.io/puppeteer/puppeteer:19.4.1 AS release

USER root

ARG user=sondeu \
    group=sondeu \
    uid=1007 \
    gid=1007

RUN groupadd -g ${gid} ${group} \
    && useradd -u ${uid} -g ${group} -s /bin/sh -m ${user}

USER ${uid}:${gid}

WORKDIR /home/${user}

COPY --from=develop /workspace/dist ./dist/
COPY --from=develop /workspace/package.json ./

RUN npm i --omit=dev

CMD ["node", "./dist/apps/sonde/main.js"]  