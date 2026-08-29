# 1. Base image
FROM node:20-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy dependency definitions first (for layer caching)
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy remaining application code
COPY . .

# 6. Expose Vite dev server port
EXPOSE 5173

# 7. Run the Vite dev server
CMD ["npm", "run", "dev"]
