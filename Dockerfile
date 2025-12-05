# Use a Node.js base image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Install Angular CLI globally (if needed for ng serve)
RUN npm install -g @angular/cli

# Expose the port where your Angular app will run
EXPOSE 4200

# Command to run the Angular application
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
