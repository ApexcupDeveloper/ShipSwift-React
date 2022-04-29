# Use the official lightweight Node.js 12 image.
# https://hub.docker.com/_/node
FROM node:12-slim

# Create and change to the app directory.
WORKDIR /usr/src/app

ADD .env /usr/src/app/
# 4. Expose port defined in .env file
EXPOSE ${PORT}

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package.json /usr/src/app
# 3. Add the .env to the directory (We need those variables)
COPY ./dist /usr/src/app

# Copy local code to the container image.

# ADD .env /usr/src/app
# Install production dependencies.
RUN npm install --only=production



# Run the web service on container startup.
CMD [ "npm", "start" ]