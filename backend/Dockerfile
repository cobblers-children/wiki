FROM node:5.4.1

RUN apt-get update && apt-get install -y netcat

RUN mkdir /root/api
WORKDIR /root/api

# Get node_modules built
COPY package.json .
RUN npm install

# Copy app
COPY . .

EXPOSE 3000
CMD ["./startup.sh"]
