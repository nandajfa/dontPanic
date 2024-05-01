FROM ubuntu:20.04 AS mynode

RUN /bin/sh -c "apt update && apt upgrade && apt install -y curl &&\
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - &&\
    apt-get install -y nodejs"


FROM mynode

WORKDIR /app

COPY package*.json ./

RUN ["npm", "install"]

COPY ./tests ./tests
COPY ./src ./src

CMD ["npm", "start"]

EXPOSE 8082
