# pull prebuilt image step
FROM node:19
# copy our current dir files into a directory in the container
COPY . /app
# navigate to that new directory in the container
WORKDIR /app
# run a command to install dependencies in the container
RUN npm install
# expose the port
EXPOSE 3000
# define a command that will be used to run when we boot up the container
CMD ["npm", "start"]