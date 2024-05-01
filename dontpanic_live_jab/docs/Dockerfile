FROM ubuntu:20.04 AS swagger

RUN /bin/sh -c "apt update && apt upgrade -y && apt install -y curl &&\
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - &&\
    apt-get install -y nodejs"

FROM swagger

WORKDIR /src

COPY package*.json ./

RUN ["npm", "install"]

COPY docs.js ./

COPY swagger.json ./

CMD ["npm", "start"]

EXPOSE 8085
