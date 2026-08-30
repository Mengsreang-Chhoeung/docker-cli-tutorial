# 1. Base image
FROM node:20-alpine

# 2. Build-time argument and runtime environment
ARG BUILD_DATE
LABEL org.opencontainers.image.created=$BUILD_DATE
ENV NODE_ENV=production

# 3. Set working directory
WORKDIR /app

# 4. Copy dependency definitions first (for layer caching)
COPY package*.json ./

# 5. Install dependencies
RUN npm ci --only=production

# 6. Copy application code
COPY . .

# 7. Document exposed port
EXPOSE 3000

# 8. Set default runtime command
CMD ["npm", "start"]
