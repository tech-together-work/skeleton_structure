FROM node:alpine

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the app directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose the port your application will listen on (adjust if needed)
EXPOSE 3000

# Define the command to run your application
CMD ["npm", "run", "dev"]
