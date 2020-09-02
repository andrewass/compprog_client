FROM node:14.9.0-alpine3.10

#Setting the working directory for the instructions
WORKDIR /app

#Copy package.json to current working directory
COPY package.json ./

#Install app dependencies
RUN npm install

#Copy src folder to current working directory
COPY . ./

#Start the app
CMD ["npm","start"]