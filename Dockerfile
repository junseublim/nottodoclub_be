# Use the official Node.js 18 Alpine image as the base image
FROM node:18-alpine

# Set the working directory within the container
WORKDIR /app

# Copy package.json and package-lock.json separately to leverage Docker caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Expose the port that your application listens on
EXPOSE 3000

# Specify the command to run your application
CMD ["npm", "run", "start"]
