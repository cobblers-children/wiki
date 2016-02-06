FROM node:5.4.1

RUN mkdir /root/api
WORKDIR /root/api

# Get node_modules built
COPY package.json .
RUN npm install

# Copy app
COPY . .

EXPOSE 3000
CMD ["./server.js"]
