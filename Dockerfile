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

# Exposing server port
ENV PORT=3000
EXPOSE 3000
CMD ["npm", "run", "start"]
