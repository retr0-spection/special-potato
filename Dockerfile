# Use an official Node runtime as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json files into the container
COPY package*.json ./

# Install dependencies
RUN npm install



# Copy the remaining application code into the container
COPY . .

#Build
RUN npm run build

RUN npm install -g serve

# Exposing server port
ENV PORT=80
EXPOSE 80
CMD ["serve", "-s", "build"]
