# 1. Base image
FROM node:20-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy dependency definitions first (for layer caching)
COPY package*.json ./

# 4. Install dependencies (including dev deps needed for Nest build/watch)
RUN npm install

# 5. Copy remaining application code
COPY . .

# 6. Expose API port
EXPOSE 3000

# 7. Run in watch mode for local development
CMD ["npm", "run", "start:dev"]
