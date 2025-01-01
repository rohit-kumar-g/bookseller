# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application into the container
COPY . .

# Build the Vite project
RUN npm run build

# Expose the port that the Vite project will run on
EXPOSE 4173

# Use a lightweight HTTP server to serve the built files
# Install serve globally
RUN npm install -g serve

# Set the default command to serve the application
CMD ["serve", "-s", "dist"]
