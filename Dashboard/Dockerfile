# Use NodeJS base image from Docker Hub
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json before other files
# Utilize Docker cache to save re-installing dependencies if unchanged
COPY package.json package-lock.json ./

# Copy the rest of the application code
COPY . .

# Specify the command to run
ENTRYPOINT [ "sh", "docker-entrypoint.sh" ]