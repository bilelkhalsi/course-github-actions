FROM node:latest AS develop

WORKDIR /workspace
COPY . ./
RUN npm i 
RUN npm run build:sonde

FROM ghcr.io/puppeteer/puppeteer:19.4.1 AS release

ARG user=sondeu \
    group=sondeu \
    uid=1000 \
    gid=1000

RUN groupadd -g ${gid} ${group} \
    useradd -u ${uid} -g ${group} -s /bin/sh -m ${user}

COPY --from=develop /workspace/dist/apps/sonde /home/${user}/sonde

USER ${uid}:${gid}

CMD ["node", "./sonde/main.js"]  