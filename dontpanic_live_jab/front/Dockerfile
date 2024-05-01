FROM ubuntu:20.04 AS mynode

RUN /bin/sh -c "apt update && apt upgrade -y && apt install -y curl &&\
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - &&\
    apt-get install -y nodejs"


FROM mynode

WORKDIR /src

COPY package*.json ./

RUN ["npm", "install"]

COPY ./jest.config.js ./index.html ./

COPY ./img/ ./img/
COPY ./css/ ./css/
COPY ./js/ ./js/

CMD ["npm", "start"]

EXPOSE 8080
