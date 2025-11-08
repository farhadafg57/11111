# Use the official Node.js 18 image as the base image
FROM node:18-alpine as base

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install production dependencies
RUN npm ci --only=production

# Copy the standalone build output
COPY .next/standalone .
COPY .next/static .next/static
COPY public public

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["node", "server.js"]