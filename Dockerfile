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

# Expose port 3000 to the outside world
EXPOSE 3000

# Start the React development server
CMD ["npm", "start"]
