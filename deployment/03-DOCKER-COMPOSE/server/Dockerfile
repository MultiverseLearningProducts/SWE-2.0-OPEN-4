# this will be downloaded and cached locally
# it’s important to use an image name 
# docker will be able to recognize
FROM node:18-alpine

# first path is the path outside the image (the files that we should copy in). We’re telling docker to use everything from this current directory.
# second path is inside the image (where the files should be stored. Detached from your own file system.)
# it’s a good idea to make the second path some subfolder to make it clear where we are working.
COPY . /app

# a little like `cd` in unix
WORKDIR /app

RUN apk add --update python3 make g++\
   && rm -rf /var/cache/apk/*

# tell docker to install npm packages
RUN npm install

# note that the `expose` instruction does not actually publish the port.
# We publish in another step: When running the container, use the -p flag on docker run (more later)
EXPOSE 3000

# typically used to run our “start” command
CMD [ "npm", "start" ]