# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy the client app and its packages
COPY . .

# Install dependencies and build
RUN npm install
RUN npm run build

# Production stage
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"] 