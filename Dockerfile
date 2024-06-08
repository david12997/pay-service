# We use a base node js image
FROM node:18-alpine as builder

# install typescript and ts-node globally
RUN npm install -g typescript ts-node

# we define the working directory for backend
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files for backend and frontend
COPY package*.json ./
COPY frontend/package*.json ./frontend/

# install all backend dependencies
RUN npm install

# install all frontend dependencies
WORKDIR /usr/src/app/frontend
RUN npm install

# we copy the rest of the files
WORKDIR /usr/src/app
COPY . .

# Build the backend
RUN npm run build:backend

# Build the frontend
WORKDIR /usr/src/app/frontend
RUN npm run build

# We use a new image for production
FROM node:18-alpine as production

#  we copy the files from the builder image
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/frontend/dist ./frontend/dist
COPY package*.json ./

# we install only the production dependencies
RUN npm install --only=production

#  we expose the port 3001
EXPOSE 3001

# we run the server
CMD ["node", "dist/server.js"]