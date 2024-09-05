# Use a base image with Node.js for the front-end (Next.js)
FROM node:latest AS frontend

# Set working directory for the front-end
WORKDIR /app/frontend

# Copy package.json and package-lock.json to the working directory
COPY frontend/package*.json ./

# Install dependencies for the front-end
RUN npm install --force

# Copy the rest of the front-end files
COPY frontend/ .

# Build the front-end
RUN npm run build

# Use another base image with Python for the back-end (Flask)
FROM python:latest AS backend

# Set working directory for the back-end
WORKDIR /app/backend

# Copy requirements.txt to the working directory
COPY backend/requirements.txt ./

# Install Python dependencies for the back-end
RUN pip install -r requirements.txt

# Copy the rest of the back-end files
COPY backend/ .

# Use a MySQL base image
FROM mysql:latest AS database

# Set MySQL environment variables
ENV MYSQL_ROOT_PASSWORD="root"
ENV MYSQL_DATABASE="ver_tech_fellowship"
ENV MYSQL_USER="root"
ENV MYSQL_PASSWORD=""

# Copy MySQL initialization script
COPY DataBase/creation_tables.sql /docker-entrypoint-initdb.d/init.sql

# Use a final base image for the app
FROM node:latest

# Set working directory for the app
WORKDIR /app

# Copy built front-end files from the 'frontend' stage
COPY --from=frontend /app/frontend/ ./frontend

# Copy back-end files from the 'backend' stage
COPY --from=backend /app/backend ./backend

# Copy MySQL files from the 'database' stage
COPY --from=database /docker-entrypoint-initdb.d /docker-entrypoint-initdb.d

# Expose ports
EXPOSE 9000 5000 3306

# Define entrypoint command to start the app
CMD ["docker-compose", "up"]
