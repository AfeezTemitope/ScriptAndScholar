# Use a Node.js runtime as the base image  
FROM node:18-alpine AS builder  

# Set the working directory in the container  
WORKDIR /app  

# Copy package.json and package-lock.json to the working directory  
COPY package*.json ./  

# Install dependencies  
RUN npm install  

# Copy the rest of the application code to the working directory  
COPY . .  

# Build the React application  
RUN npm run build  

# Stage 2: Serve the application using a lightweight server (e.g., nginx)  
FROM nginx:alpine  

# Copy the built React application from the builder stage  
COPY --from=builder /app/dist /usr/share/nginx/html  

# Copy the nginx configuration file (optional, see below)  
COPY nginx.conf /etc/nginx/conf.d/default.conf  

# Expose port 80 (or the port you configure nginx to listen on)  
EXPOSE 80  

# Command to start nginx  
CMD ["nginx", "-g", "daemon off;"]  