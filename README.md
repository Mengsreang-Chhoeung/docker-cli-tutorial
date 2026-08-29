# Docker CLI Tutorial

## Table of Contents

- [Part 1: What is Docker?](#part-1-what-is-docker)
  - [1. The Problem Before Docker](#1-the-problem-before-docker)
  - [2. What Docker Solves](#2-what-docker-solves)
  - [3. Virtual Machines vs. Containers](#3-virtual-machines-vs-containers)
  - [4. Core Concepts: Image vs. Container](#4-core-concepts-image-vs-container)
  - [5. Real-World Use Cases](#5-real-world-use-cases)
  - [6. Install Docker Desktop](#6-install-docker-desktop)
  - [7. Verify Installation](#7-verify-installation)
- [Part 2: Docker Fundamentals](#part-2-docker-fundamentals)
  - [1. Docker Architecture & Docker Engine](#1-docker-architecture--docker-engine)
  - [2. Images vs. Containers](#2-images-vs-containers)
  - [3. Registries & Docker Hub](#3-registries--docker-hub)
  - [4. Persisting Data with Volumes](#4-persisting-data-with-volumes)
  - [5. Docker Networks](#5-docker-networks)
  - [6. Basic Docker Workflow](#6-basic-docker-workflow)
- [Part 3: Your First Container](#part-3-your-first-container)
  - [1. Run Hello World](#1-run-hello-world)
  - [2. Pull an Image Explicitly](#2-pull-an-image-explicitly)
  - [3. Run an Ubuntu Container & Interactive Mode](#3-run-an-ubuntu-container--interactive-mode)
  - [4. Detached Mode (`-d`)](#4-detached-mode--d)
  - [5. Naming Containers (`--name`)](#5-naming-containers---name)
  - [6. Removing Containers](#6-removing-containers)
  - [7. Removing Images](#7-removing-images)
- [Part 4: Essential Docker Commands](#part-4-essential-docker-commands)
  - [1. Inspection & Monitoring Commands](#1-inspection--monitoring-commands)
  - [2. Image Management Commands](#2-image-management-commands)
  - [3. Execution & Lifecycle Commands](#3-execution--lifecycle-commands)
  - [4. Maintenance & Garbage Collection](#4-maintenance--garbage-collection)
- [Part 5: Docker Images](#part-5-docker-images)
  - [1. What is an Image?](#1-what-is-an-image)
  - [2. Image Layers & Caching](#2-image-layers--caching)
  - [3. Image Tags](#3-image-tags)
  - [4. The `latest` Tag (and Why to Avoid It)](#4-the-latest-tag-and-why-to-avoid-it)
  - [5. Pulling Specific Versions](#5-pulling-specific-versions)
  - [6. Image Size Optimization](#6-image-size-optimization)
  - [7. Best Practices Summary](#7-best-practices-summary)
- [Part 6: Dockerfile](#part-6-dockerfile)
  - [1. What is a Dockerfile?](#1-what-is-a-dockerfile)
  - [2. Core Dockerfile Instructions](#2-core-dockerfile-instructions)
  - [3. Putting It Together: Example Dockerfile](#3-putting-it-together-example-dockerfile)
  - [4. Building and Running a Custom Image](#4-building-and-running-a-custom-image)
- [Part 7: Building a Node.js App](#part-7-building-a-nodejs-app)
  - [1. Create Express App](#1-create-express-app)
  - [2. Dockerfile & `.dockerignore`](#2-dockerfile--dockerignore)
  - [3. Build Image](#3-build-image)
  - [4. Run Container](#4-run-container)
  - [5. Test API](#5-test-api)
  - [6. Common Mistakes to Avoid](#6-common-mistakes-to-avoid)
- [Part 8: Docker Volumes](#part-8-docker-volumes)
  - [1. Why Volumes Matter](#1-why-volumes-matter)
  - [2. Bind Mount](#2-bind-mount)
  - [3. Named Volume](#3-named-volume)
  - [4. Anonymous Volume](#4-anonymous-volume)
  - [5. Data Persistence](#5-data-persistence)
  - [6. Backup a Volume](#6-backup-a-volume)
  - [7. Restore a Volume](#7-restore-a-volume)
- [Part 9: Docker Networking](#part-9-docker-networking)
  - [1. Bridge Network](#1-bridge-network)
  - [2. Host Network](#2-host-network)
  - [3. None Network](#3-none-network)
  - [4. Custom Network](#4-custom-network)
  - [5. Connect Multiple Containers](#5-connect-multiple-containers)
  - [6. DNS Inside Docker](#6-dns-inside-docker)
- [Part 10: Docker Compose](#part-10-docker-compose)
  - [1. Why Compose?](#1-why-compose)
  - [2. `docker-compose.yml`](#2-docker-composeyml)
  - [3. Services](#3-services)
  - [4. Networks](#4-networks)
  - [5. Volumes](#5-volumes)
  - [6. Environment Variables](#6-environment-variables)
  - [7. Build Multiple Services](#7-build-multiple-services)
  - [8. Start Everything with One Command](#8-start-everything-with-one-command)
- [Part 11: Multi-Container Project](#part-11-multi-container-project)
  - [1. Project Overview](#1-project-overview)
  - [2. Backend: NestJS + PostgreSQL + Redis](#2-backend-nestjs--postgresql--redis)
  - [3. Frontend: React/Vite](#3-frontend-reactvite)
  - [4. Compose: Wiring It All Together](#4-compose-wiring-it-all-together)
  - [5. Networks](#5-networks)
  - [6. Environment Variables](#6-environment-variables)
  - [7. Dependencies (Startup Order)](#7-dependencies-startup-order)
  - [8. Persistent Data](#8-persistent-data)
  - [9. Run It](#9-run-it)

---

## Part 1: What is Docker?

### 1. The Problem Before Docker

Before containerization, developers and operations teams frequently ran into the "It works on my machine!" syndrome.

- **Environment Drift**: A project might work perfectly on a developer’s macOS or Windows laptop, but fail on an Ubuntu production server due to differences in OS versions, system libraries, or installed dependencies.

- **Complex Onboarding**: Setting up a new team member's machine meant installing databases, runtimes, and background tools manually—a process prone to human error and time-wasting troubleshooting.

### 2. What Docker Solves

![What Docker Solves](./_thumbnail_doc/what-docker-solves.png)

Docker solves environment inconsistencies by packaging an application along with **all of its dependencies, configurations, and libraries** into a standardized unit called a **container**.

- **Portability**: If it runs in a Docker container on your machine, it will run identically on any server, cloud provider, or teammate's machine.

- **Isolation**: Containers run in isolated environments on the host system, ensuring applications don't conflict with one another (e.g., running Node.js v16 and Node.js v20 side-by-side).

### 3. Virtual Machines vs. Containers

| Feature            | Virtual Machines (VMs)              | Docker Containers                          |
| ------------------ | ----------------------------------- | ------------------------------------------ |
| **Architecture**   | Includes full Guest OS + Hypervisor | **Shares Host OS Kernel**                  |
| **Size**           | **Gigabytes (GBs)**                 | **Megabytes (MBs)**                        |
| **Boot Time**      | **Minutes**                         | **Seconds or milliseconds**                |
| **Resource Usage** | Heavy (CPU/RAM hardware allocation) | **Lightweight (uses resources on demand)** |

### 4. Core Concepts: Image vs. Container

![Image vs Container](./_thumbnail_doc/image-vs-container.png)

- **Docker Image**: A read-only blueprint or template containing application code, libraries, runtime, and environment variables. _(Think of it like a class in programming or a blueprint for a house)_.

- **Docker Container**: A lightweight, runnable instance of an Image. _(Think of it like an object instantiated from a class or the actual built house)_.

### 5. Real-World Use Cases

- **Microservices**: Running multiple independent services (API, frontend, caching, database) isolated from each other.

- **CI/CD Pipelines**: Running automated tests in reproducible, clean environments that spin up and destroy instantly.

- **Local Development**: Running local instances of databases (e.g., PostgreSQL, Redis) without installing them directly onto your operating system.

### 6. Install Docker Desktop

Download and install [Docker Desktop](https://www.docker.com/products/docker-desktop/) for your operating system (Windows, Mac, or Linux).

### 7. Verify Installation

Open your terminal or command prompt and verify the installation:

```bash
# Check Docker CLI version
docker --version

# Verify the Docker Engine is running by starting a test container
docker run hello-world
```

If successful, Docker will download the `hello-world` image from Docker Hub and display a confirmation message indicating your installation is working properly.

## Part 2: Docker Fundamentals

### 1. Docker Architecture & Docker Engine

Docker uses a client-server model. The command-line interface communicates with the background daemon through a REST API over a Unix socket or network interface.

![Docker Architecture & Docker Engine](./_thumbnail_doc/docker-architecture-docker-engine.png)

- **Docker CLI (`docker`)**: The terminal tool you interact with to issue commands.

- **Docker Daemon (`dockerd`)**: The primary host service that listens for API requests and manages Docker objects.

- **containerd & runc**: The underlying container runtimes. `containerd` handles image management and lifecycle execution, while `runc` interacts directly with Linux kernel primitives (**Namespaces** for isolation and **Cgroups** for resource limits).

### 2. Images vs. Containers

To understand Docker objects, think of an **Image** as a class definition and a **Container** as an active instance of that class.

![Image vs Container](./_thumbnail_doc/image-vs-container-2.png)

- **Images (Read-Only)**: Immutable, layered blueprints consisting of a base OS layer, dependencies, and application code.

- **Containers (Read-Write)**: Ephemeral execution environments. When a container starts, Docker adds a thin **Writable Layer** on top of the image stack using a unified filesystem (like OverlayFS).

### 3. Registries & Docker Hub

A **Docker Registry** is a centralized storage and distribution system for Docker images.

```
          docker push                        docker pull
Developer ------------>  DOCKER REGISTRY   ------------> Production / Teammate
                         (e.g., Docker Hub)
```

- **Docker Hub**: The default public registry hosted by Docker Inc., containing thousands of official, verified base images (e.g., `postgres`, `nginx`, `node`, `redis`).

- **Private Registries**: Enterprise environments often host private registries on AWS ECR, GitHub Container Registry (GHCR), or Azure Container Registry (ACR) to secure proprietary application images.

### 4. Persisting Data with Volumes

By default, data inside a container is ephemeral—if the container is deleted, its writable layer and data disappear. Docker provides **Volumes** and **Bind Mounts** to persist data outside the container lifecycle.

| Storage Type     | Managed By    | Path on Host                         | Primary Use Case                          |
| ---------------- | ------------- | ------------------------------------ | ----------------------------------------- |
| **Named Volume** | Docker Engine | Managed folder inside Docker storage | Databases, persistent state (Recommended) |
| **Bind Mount**   | User          | Anywhere on the host filesystem      | Live development (hot reloading)          |

```bash
# Create and run a Postgres container with a named volume
docker volume create postgres_data

docker run -d \
  --name my-db \
  -v postgres_data:/var/lib/postgresql/data \
  postgres:16
```

### 5. Docker Networks

Containers run isolated from the host network by default. Docker uses network drivers to enable communication between containers and external resources.

- **Bridge (Default)**: Creates a private internal network on the host. Containers on the same bridge network can communicate with each other using container names as hostnames.

- **Host**: Removes network isolation between the container and the Docker host (the container shares the host's network interfaces directly).

- **None**: Disables all networking for complete isolation.

```bash
# Create a custom bridge network
docker network create app-net

# Run containers on the same network so they can communicate
docker run -d --name redis-cache --network app-net redis
docker run -d --name web-api --network app-net -p 8080:8080 my-web-api
```

### 6. Basic Docker Workflow

The day-to-day developer workflow follows three core commands: **Build**, **Run**, and **Manage**.

```
[ Dockerfile ] --( docker build )--> [ Docker Image ] --( docker run )--> [ Active Container ]
```

#### Essential Commands Cheat Sheet

```bash
# 1. Pull an image from Docker Hub
docker pull nginx:alpine

# 2. Run a container in detached mode (-d) with port mapping (-p host:container)
docker run -d --name web-server -p 80:80 nginx:alpine

# 3. List running containers
docker ps

# 4. View container logs
docker logs -f web-server

# 5. Execute an interactive shell inside a running container
docker exec -it web-server sh

# 6. Stop and remove a container
docker stop web-server
docker rm web-server
```

## Part 3: Your First Container

Now that we understand Docker's architecture and core concepts, it's time to get hands-on with CLI commands. In this section, you'll run your first containers, learn execution modes, and manage system resources.

### 1. Run Hello World

The classic entry point to verify your Docker installation and understand the default pull-and-run behavior:

```bash
docker run hello-world
```

#### What happens under the hood?

- Docker checks if the `hello-world` image exists locally.

- If not found, it automatically pulls the image from Docker Hub.

- It creates a new container, executes the script inside, prints the output to your terminal, and then exits.

### 2. Pull an Image Explicitly

While `docker run` automatically pulls missing images, you can pre-fetch images using `docker pull`. This is useful when preparing deployment scripts or caching images ahead of time.

```bash
# Pull the official NGINX image without running it
docker pull nginx:alpine

# List locally downloaded images
docker images
```

### 3. Run an Ubuntu Container & Interactive Mode

By default, containers exit immediately if they don't have an active background process. To interact with an operating system container like Ubuntu, you must attach an interactive terminal session.

```bash
# Run Ubuntu with Interactive (-i) and TTY (-t) flags
docker run -it ubuntu bash
```

- `-i` (Interactive): Keeps `STDIN` open so you can pass input commands.

- `-t` (TTY): Allocates a pseudo-terminal, giving you a proper command prompt.

Once inside, you are running commands inside the isolated Ubuntu container:

```bash
# Example commands inside the container
root@a1b2c3d4e5f6:/# cat /etc/os-release
root@a1b2c3d4e5f6:/# exit
```

### 4. Detached Mode (`-d`)

For long-running services (like web servers or databases), you don't want the container attached to your current terminal session. **Detached mode** runs the container in the background.

```bash
# Run NGINX in detached mode
docker run -d nginx

# Check running containers
docker ps
```

To view what's happening inside a detached container:

```bash
# View container logs (use -f to stream/follow logs)
docker logs -f <CONTAINER_ID>
```

### 5. Naming Containers (`--name`)

By default, Docker assigns random generated names (e.g., `focused_curie`, `eager_hopper`). Assigning explicit names makes managing containers significantly easier in scripts and CLI commands.

```bash
# Run a named NGINX container
docker run -d --name my-web-server -p 8080:80 nginx

# Stop and check status using the custom name
docker stop my-web-server
```

### 6. Removing Containers

When a container stops, it is not deleted automatically; it remains on disk in a stopped state.

```bash
# List all containers (including stopped ones)
docker ps -a

# Remove a specific stopped container
docker rm my-web-server

# Force remove a currently running container (-f)
docker rm -f my-web-server

# Clean up all stopped containers at once
docker container prune
```

**Tip**: You can use the `--rm` flag with `docker run` to automatically remove a container as soon as it exits (great for temporary tasks or scripts):

```bash
docker run --rm ubuntu echo "Temporary task completed!"
```

### 7. Removing Images

To free up disk space on your host machine, you can clean up unused base images.

```bash
# List all local images
docker images

# Remove an image by ID or Tag (must remove dependent containers first)
docker rmi nginx:latest

# Remove all unused/dangling images
docker image prune -a
```

### Summary Cheat Sheet

| Task                       | Command                               |
| -------------------------- | ------------------------------------- |
| **Pull image**             | `docker pull <image>`                 |
| **Run interactively**      | `docker run -it <image> bash`         |
| **Run in background**      | `docker run -d --name <name> <image>` |
| **View active containers** | `docker ps`                           |
| **View all containers**    | `docker ps -a`                        |
| **Stop container**         | `docker stop <name_or_id>`            |
| **Delete container**       | `docker rm <name_or_id>`              |
| **Delete image**           | `docker rmi <image_or_id>`            |

## Part 4: Essential Docker Commands

Mastering Docker comes down to understanding a core set of CLI commands. This reference guide breaks down the essential commands every developer needs for inspecting, executing, managing, and maintaining Docker containers and system resources.

### 1. Inspection & Monitoring Commands

- `docker ps`
  Lists active and running containers on your system.

  ```bash
  # List only currently running containers
  docker ps

  # List all containers (running, stopped, and exited)
  docker ps -a

  # Show only container IDs (useful for scripts/automation)
  docker ps -q
  ```

- `docker images`
  Lists all Docker images stored locally on your machine.

  ```bash
  # View all local images with tags and sizes
  docker images
  ```

- `docker logs`
  Fetches stdout/stderr logs from a specific container. Critical for debugging background processes.

  ```bash
  # Fetch current logs
  docker logs <container_name_or_id>

  # Stream/follow logs in real-time
  docker logs -f <container_name_or_id>

  # View the last 50 log entries
  docker logs --tail 50 <container_name_or_id>
  ```

- `docker inspect`
  Returns detailed low-level internal configurations and metadata (IP address, volume mounts, network settings, environment variables) in JSON format.

  ```bash
  # Inspect complete container configuration
  docker inspect <container_name_or_id>

  # Extract specific metadata using formatting (e.g., retrieve IP address)
  docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' <container_name>
  ```

### 2. Image Management Commands

- `docker pull`
  Downloads a Docker image from a remote registry (like Docker Hub) without instantiating a container.

  ```bash
  # Pull a specific image tag
  docker pull postgres:16-alpine
  ```

- `docker rmi`
  Removes one or more local Docker images from your system.

  ```bash
  # Remove an image by tag or ID
  docker rmi postgres:16-alpine

  # Force removal of an image in use by a stopped container
  docker rmi -f <image_id>
  ```

### 3. Execution & Lifecycle Commands

- `docker run`
  Creates and starts a new container from an image. Combines `docker create` and `docker start`.

  ```bash
  # Common pattern: run detached (-d), named (--name), with port mapping (-p host:container)
  docker run -d --name my-redis -p 6379:6379 redis:alpine
  ```

- `docker exec`
  Executes a new command inside an already running container.

  ```bash
  # Open an interactive shell inside a running container
  docker exec -it my-redis sh

  # Run a single non-interactive command inside a container
  docker exec my-redis redis-cli ping
  ```

- `docker stop`
  Gracefully stops a running container by sending a `SIGTERM` signal, followed by `SIGKILL` if it doesn't stop within the timeout period.

  ```bash
  # Stop a running container
  docker stop <container_name_or_id>
  ```

- `docker start`
  Starts one or more stopped containers without re-creating them.

  ```bash
  # Restart a previously stopped container
  docker start <container_name_or_id>
  ```

- `docker restart`
  Stops and immediately restarts a running or stopped container.

  ```bash
  # Restart a container
  docker restart <container_name_or_id>
  ```

- `docker rm`
  Removes stopped containers from disk.

  ```bash
  # Remove a stopped container
  docker rm <container_name_or_id>

  # Force remove a currently running container (-f)
  docker rm -f <container_name_or_id>
  ```

### 4. Maintenance & Garbage Collection

- `docker system prune`
  Frees up disk space by removing all stopped containers, unused networks, dangling images, and build caches in one command.

  ```bash
  # Clean up unused Docker resources
  docker system prune

  # Comprehensive deep clean (removes all unused images and persistent volumes)
  docker system prune -a --volumes
  ```

### Command Summary Quick Reference

| Command               | Purpose                              |
| --------------------- | ------------------------------------ |
| `docker ps`           | List containers                      |
| `docker images`       | List local images                    |
| `docker pull`         | Fetch an image from registry         |
| `docker run`          | Create and start a container         |
| `docker exec`         | Execute command in running container |
| `docker logs`         | Print container logs                 |
| `docker inspect`      | Output low-level JSON details        |
| `docker stop`         | Gracefully stop container            |
| `docker start`        | Start stopped container              |
| `docker restart`      | Stop and restart container           |
| `docker rm`           | Delete stopped container             |
| `docker rmi`          | Delete local image                   |
| `docker system prune` | Remove unused/dangling resources     |

## Part 5: Docker Images

Understanding Docker Images is fundamental to packaging applications efficiently. In this section, we'll dive deep into what images actually are under the hood, how layer caching works, how to manage image tagging effectively, and strategies for keeping image sizes small.

### 1. What is an Image?

A **Docker Image** is a lightweight, standalone, executable package that includes everything needed to run a piece of software: application code, runtime, system tools, libraries, and settings.

Images are **immutable** (read-only) templates used to instantiate Docker containers. When a container runs, Docker adds a thin writable layer on top of the image layers.

### 2. Image Layers & Caching

Docker images are composed of stacked, read-only layers. Each instruction in a `Dockerfile` (e.g., `FROM`, `RUN`, `COPY`) creates a new layer.

```
+-------------------------------------------------------+
|  Writable Container Layer                             | <-- Added when container starts
+-------------------------------------------------------+
|  Layer 4: CMD ["node", "server.js"]                   |
|  Layer 3: COPY . .                                    |
|  Layer 2: RUN npm install                             |
|  Layer 1: FROM node:20-alpine                         |
+-------------------------------------------------------+
```

#### Layer Caching

Docker reuses layers from previous builds if the instructions and files haven't changed.

- **Cache Hits:** Unchanged steps are reused instantly, making builds fast.

- **Cache Invalidation:** If a layer changes (e.g., updated source code in `COPY`), that layer and all subsequent layers are rebuilt from scratch.

### 3. Image Tags

Tags act as aliases or pointers to specific image versions. The full reference for an image follows this naming structure:

```
[registry_url]/[repository]/[image_name]:[tag]
```

Examples:

- `postgres:16-alpine` (Official image from Docker Hub with specific version and OS variant)
- `ghcr.io/my-org/my-app:v1.2.0` (Image stored on GitHub Container Registry)

### 4. The `latest` Tag (and Why to Avoid It)

If you pull or build an image without specifying a tag (e.g., `docker pull node`), Docker automatically appends `:latest`.

> **Warning:** The `:latest` tag does not mean "the guaranteed newest release." It is simply a default label applied by image maintainers. Using `:latest` in production can lead to unexpected breakages because the underlying image version can change without notice.

### 5. Pulling Specific Versions

Always pin explicit version tags to ensure consistent, reproducible environments across development, testing, and production.

```bash
# Bad practice (unpredictable behavior over time)
docker pull postgres

# Good practice (explicit major version and minimal base OS)
docker pull postgres:16-alpine
```

### 6. Image Size Optimization

Large images take longer to download, consume unnecessary disk space, and increase the attack surface for security vulnerabilities.

#### Key Optimization Strategies:

1. **Use Minimal Base Images**: Choose minimal distributions like **Alpine Linux** (`alpine`) or slim images (`node:20-slim`) instead of full Linux distributions (`ubuntu`).

2. **Combine `RUN` Commands**: Combine shell commands into a single `RUN` instruction to minimize the total layer count.

3. **Utilize `.dockerignore`**: Exclude non-essential files (e.g., `.git`, `node_modules`, build logs) from the build context.

4. **Leverage Multi-Stage Builds**: Build dependencies in a temporary stage and copy only compiled artifacts into a lightweight final runtime image.

### 7. Best Practices Summary

- **Pin Specific Version Tags**: Never rely on `:latest` in production deployment scripts.

- **Order Dockerfile Instructions Wisely**: Place infrequently changed instructions (like dependency installations) before frequently changing instructions (like application source code copy) to maximize build caching.

- **Keep Images Minimal**: Exclude build tools, documentation, and source code from final production images.

- **Scan Images for Vulnerabilities**: Periodically audit images using security scanners like `docker scout` or `trivy`.

## Part 6: Dockerfile

A **Dockerfile** is the foundational building block for creating custom Docker images. In this section, we'll break down what a Dockerfile is, explore essential instructions, contrast similar commands (like `COPY` vs `ADD` and `CMD` vs `ENTRYPOINT`), and demonstrate how to build and run custom images.

### 1. What is a Dockerfile?

A **Dockerfile** is a text document containing a sequential list of instructions that Docker executes to assemble a custom image. It automates the entire image creation process, ensuring builds are reproducible and version-controlled.

### 2. Core Dockerfile Instructions

- `FROM`
  Sets the base image for subsequent instructions. Every valid Dockerfile must start with a `FROM` instruction.

  ```dockerfile
  FROM node:20-alpine
  ```

- `WORKDIR`
  Sets the working directory inside the container for any subsequent `RUN`, `CMD`, `ENTRYPOINT`, `COPY`, or `ADD` instructions. If the directory doesn't exist, Docker creates it automatically.

  ```dockerfile
  WORKDIR /app
  ```

- `COPY` vs `ADD`
  Both instructions transfer files from the `host machine` into the `container image`, but they have distinct differences:
  - `COPY`: Copies local files and directories from the `build context` into the image. **(Recommended for almost all use cases)**.

  - `ADD`: Includes extra features like auto-extracting local tar archives (`.tar.gz`) and fetching files directly from remote URLs.

  ```dockerfile
  # Standard file copy (Best Practice)
  COPY package.json package-lock.json ./

  # Auto-extracting a local tar archive
  ADD archive.tar.gz /extracted-files/
  ```

- `RUN`
  Executes commands during the build phase to install packages, create files, or set up dependencies. Each `RUN` instruction creates a new read-only image layer.

  ```dockerfile
  # Chain commands with && to reduce image layer count
  RUN apt-get update && apt-get install -y \
      curl \
      git \
      && rm -rf /var/lib/apt/lists/*
  ```

- `ENV` vs `ARG`
  Both define variables during the image lifecycle, but they operate at different stages:

  | Instruction | Scope           | Persistence              | Example Use Case                       |
  | ----------- | --------------- | ------------------------ | -------------------------------------- |
  | `ARG`       | Build time only | Not available in running | Passing version tags, build flags      |
  | `ENV`       | Build time &    | Persists inside running  | Database host, application environment |

  ```dockerfile
  # Available only during 'docker build'
  ARG BUILD_VERSION=1.0.0

  # Persists in the container at runtime
  ENV NODE_ENV=production
  ENV PORT=3000
  ```

- `EXPOSE`
  Informs Docker that the container listens on specific network ports at runtime. **Note**: `EXPOSE` acts as documentation between the image creator and user—it does not actually publish the port on the host.

  ```dockerfile
  EXPOSE 3000
  ```

- `CMD` vs `ENTRYPOINT`
  Both specify the command executed when a container starts, but they behave differently when overridden:
  - `CMD`: Sets default arguments or commands that can be **easily overridden** from the command line.
  - `ENTRYPOINT`: Configures a container to run as an executable. Command-line arguments passed to `docker run` are appended to `ENTRYPOINT` rather than replacing it.

  ```dockerfile
  # CMD example: easily overridden by passing a command to 'docker run'
  CMD ["node", "server.js"]

  # ENTRYPOINT + CMD pattern: ENTRYPOINT sets fixed executable, CMD sets default argument
  ENTRYPOINT ["node"]
  CMD ["server.js"]
  ```

### 3. Putting It Together: Example Dockerfile

Here is a complete, production-ready Dockerfile for a Node.js application:

```dockerfile
# 1. Base image
FROM node:20-alpine

# 2. Build-time argument and runtime environment
ARG BUILD_DATE
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
```

### 4. Building and Running a Custom Image

#### Build the Image (`docker build`)

Use `docker build` with the `-t` (tag) flag to name your image, pointing to the build context directory (usually `.`):

```bash
# Build image tagged 'my-app:v1' using current directory context
docker build -t my-app:v1 .

# Build passing a build argument
docker build --build-arg BUILD_DATE=$(date -u +'%Y-%m-%dT%H:%M:%SZ') -t my-app:v1 .
```

#### Run the Custom Container (`docker run`)

Instantiate a container from your newly built custom image:

```bash
# Run detached, map host port 8080 to container port 3000
docker run -d --name my-running-app -p 8080:3000 my-app:v1
```

## Part 7: Building a Node.js App

Now that we understand Dockerfiles and core image commands, let's put theory into practice by containerizing a lightweight Node.js Express application from scratch.

### 1. Create Express App

Start by initializing a basic Express web application.

Create `package.json`:

```json
{
  "name": "docker-node-express",
  "version": "1.0.0",
  "description": "Express app containerized with Docker",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.19.2"
  }
}
```

Create `index.js`:

```javascript
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Hello from inside the Docker container!",
    timestamp: new Date().toISOString(),
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
```

### 2. Dockerfile & `.dockerignore`

Create a `.dockerignore` file in the project root to prevent copying local node modules and build artifacts into the build context:

Create `.dockerignore`:

```
node_modules
npm-debug.log
.git
.gitignore
README.md
```

Create `Dockerfile`:

```dockerfile
# 1. Use lightweight LTS base image
FROM node:20-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy package definitions first to utilize layer caching
COPY package*.json ./

# 4. Install production dependencies
RUN npm ci --only=production

# 5. Copy remaining application code
COPY . .

# 6. Expose port 3000
EXPOSE 3000

# 7. Define entry point command
CMD ["npm", "start"]
```

### 3. Build Image

Build your Docker image and tag it as `express-app:v1`:

```bash
docker build -t express-app:v1 .
```

To verify the image was created:

```bash
docker images express-app:v1
```

### 4. Run Container

Run the newly built container in detached mode (`-d`), mapping port `3000` on your host to port `3000` inside the container:

```bash
docker run -d \
  --name my-express-container \
  -p 3000:3000 \
  express-app:v1
```

Verify it is running:

```bash
docker ps -f name=my-express-container
```

### 5. Test API

You can test the containerized endpoint using `curl` or your browser:

```bash
# Test primary endpoint
curl http://localhost:3000

# Expected Response:
# {"status":"success","message":"Hello from inside the Docker container!","timestamp":"..."}

# Test health check endpoint
curl http://localhost:3000/health

# Expected Response:
# {"status":"UP"}
```

### 6. Common Mistakes to Avoid

- **Binding Express to `127.0.0.1` (localhost) instead of `0.0.0.0`**: Inside a container, `localhost` refers only to the container's internal loopback interface. If Express listens on `127.0.0.1`, external traffic forwarded by Docker won't reach it. Always bind to `0.0.0.0`.

- **Forgetting `.dockerignore`**: Omitting `.dockerignore` causes your local `node_modules/` folder to overwrite container dependencies, which can lead to platform mismatch bugs (e.g., native binaries compiled on macOS failing on Linux Alpine).

- **Copying code before running `npm install`**: Copying `COPY . .` before `RUN npm install` invalidates the layer cache on every single code edit, forcing `npm install` to re-run on every build.

- **Running as root user**: By default, Docker containers run as `root`. For production environments, switch to a non-root user (e.g., adding `USER node` before `CMD` in your Dockerfile) to improve security.

## Part 8: Docker Volumes

Containers are designed to be ephemeral—when a container is removed, any data written to its writable layer disappears with it. This section covers Docker's storage mechanisms for persisting data beyond a container's lifecycle, and how to back it up and restore it.

### 1. Why Volumes Matter

By default, all files created inside a container are stored in that container's thin writable layer:

- **Data is lost on removal**: If you `docker rm` a container, its writable layer—and any data in it—is deleted permanently.

- **Data can't be easily shared**: Files inside a container's writable layer aren't accessible to other containers or the host without extra tooling.

- **Performance overhead**: Writing large amounts of data into the writable layer is less efficient than writing to a Volume, which bypasses the storage driver entirely.

Docker solves these problems with three storage mechanisms: **Bind Mounts**, **Named Volumes**, and **Anonymous Volumes**.

### 2. Bind Mount

A **Bind Mount** maps a specific file or directory on the **host machine** directly into the container. The host is fully responsible for managing the path—Docker just links to it.

```bash
# Mount the current host directory (./app) into /app inside the container
docker run -d \
  --name dev-container \
  -v $(pwd)/app:/app \
  node:20-alpine

# Equivalent using the more explicit --mount syntax
docker run -d \
  --name dev-container \
  --mount type=bind,source=$(pwd)/app,target=/app \
  node:20-alpine
```

- **Best for**: Local development, where you want source code changes on your host to instantly reflect inside a running container (hot reloading).

- **Caveat**: The host path must already exist and is tightly coupled to your local machine's file structure, which makes Bind Mounts less portable across environments.

### 3. Named Volume

A **Named Volume** is storage that Docker creates and fully manages inside its own storage area on the host (typically under `/var/lib/docker/volumes/` on Linux). You reference it by name rather than a host path.

```bash
# Create a named volume explicitly
docker volume create postgres_data

# Run a container using the named volume
docker run -d \
  --name my-db \
  -v postgres_data:/var/lib/postgresql/data \
  postgres:16-alpine

# List all volumes
docker volume ls

# Inspect a volume (shows its actual location on the host)
docker volume inspect postgres_data
```

- **Best for**: Databases and any persistent application state (recommended over Bind Mounts for production).

- **Advantage**: Docker manages the lifecycle and location, making Named Volumes portable across hosts and easy to back up, migrate, or share between containers.

### 4. Anonymous Volume

An **Anonymous Volume** is created automatically when a container specifies a mount path without naming a source. Docker assigns it a random hash as an identifier instead of a human-readable name.

```bash
# No source specified before the colon -> Docker creates an anonymous volume
docker run -d --name my-app -v /app/data node:20-alpine
```

- **Behavior**: Functions identically to a Named Volume, but because it has no memorable name, it's easy to lose track of.

- **Caveat**: Anonymous Volumes are **not** removed automatically when their container is removed (unless you use `docker rm -v`), which commonly leads to orphaned volumes cluttering disk space. Prefer Named Volumes when data needs to persist and be found again later.

### 5. Data Persistence

Because Named Volumes exist independently of any single container, the same volume can be reattached to a brand-new container after the original is deleted—the data survives.

```bash
# Run a container, write data, then remove the container (data persists in the volume)
docker run -d --name db-v1 -v postgres_data:/var/lib/postgresql/data postgres:16-alpine
docker rm -f db-v1

# Attach the SAME volume to a fresh container—the data is still there
docker run -d --name db-v2 -v postgres_data:/var/lib/postgresql/data postgres:16-alpine
```

This decouples your data's lifecycle from any individual container's lifecycle, which is essential for safely recreating containers during updates or redeployments.

### 6. Backup a Volume

To back up a Named Volume, run a temporary container that mounts the volume alongside a host directory, then archive the volume's contents into a `.tar.gz` file on the host.

```bash
# Back up the "postgres_data" volume into a tarball on the host's current directory
docker run --rm \
  -v postgres_data:/volume-data \
  -v $(pwd):/backup \
  alpine \
  tar czf /backup/postgres_data_backup.tar.gz -C /volume-data .
```

- `-v postgres_data:/volume-data`: Mounts the volume you want to back up (read-only in spirit, though not enforced here).

- `-v $(pwd):/backup`: Mounts the current host directory so the backup file lands where you can access it.

- `--rm`: Automatically removes the temporary helper container once the backup completes.

### 7. Restore a Volume

To restore, create (or reuse) a target volume, then extract the backup tarball back into it using the same temporary-container pattern.

```bash
# Ensure the target volume exists
docker volume create postgres_data_restored

# Extract the backup archive into the volume
docker run --rm \
  -v postgres_data_restored:/volume-data \
  -v $(pwd):/backup \
  alpine \
  tar xzf /backup/postgres_data_backup.tar.gz -C /volume-data

# Attach the restored volume to a new container to verify
docker run -d \
  --name db-restored \
  -v postgres_data_restored:/var/lib/postgresql/data \
  postgres:16-alpine
```

### Summary Cheat Sheet

| Task                       | Command                                            |
| -------------------------- | --------------------------------------------------- |
| **Create named volume**    | `docker volume create <name>`                      |
| **List volumes**           | `docker volume ls`                                 |
| **Inspect volume**         | `docker volume inspect <name>`                     |
| **Remove volume**          | `docker volume rm <name>`                          |
| **Remove unused volumes**  | `docker volume prune`                              |
| **Bind mount**             | `docker run -v <host_path>:<container_path> ...`   |
| **Named volume mount**     | `docker run -v <volume_name>:<container_path> ...` |
| **Anonymous volume**       | `docker run -v <container_path> ...`               |

## Part 9: Docker Networking

By default, containers are isolated from the host and from each other. Docker Networking controls how containers communicate—with the outside world, with the host, and with one another. This section covers the built-in network drivers, how to create your own network, and how containers find each other by name.

### 1. Bridge Network

**Bridge** is Docker's default network driver. When the Docker daemon starts, it creates a virtual bridge (`docker0` on Linux) on the host, and every container that doesn't specify a network is attached to it.

```bash
# List existing networks (note the default "bridge" network)
docker network list

# Run a container without specifying --network -> it joins the default bridge
docker run -d --name web nginx:alpine

# Inspect the default bridge network to see attached containers and subnet
docker network inspect bridge
```

- **Isolation**: Containers on the default bridge network can reach each other and the outside world, but are not reachable from the host or other networks unless ports are published with `-p`.

- **Caveat**: Containers on the **default** bridge network can only reach each other by IP address—not by container name. Use a **Custom Network** (below) if you need name-based DNS resolution.

### 2. Host Network

The **Host** network driver removes network isolation between the container and the Docker host entirely—the container shares the host's network stack directly.

```bash
# Run NGINX using the host's network directly (Linux only)
docker run -d --name web --network host nginx:alpine

# No -p flag is needed or possible: the container binds directly to the host's ports
curl http://localhost:80
```

- **Best for**: Performance-sensitive workloads that want to avoid Docker's network address translation (NAT) overhead.

- **Caveat**: Port mapping (`-p`) has no effect and is unnecessary since there's no network isolation to bridge—the container's ports **are** the host's ports, so port conflicts with other services on the host are possible. Not supported on Docker Desktop for Mac/Windows in the same way as on Linux.

### 3. None Network

The **None** driver disables networking entirely. The container gets its own network namespace but no network interfaces are configured beyond a loopback.

```bash
# Run a container with no network access at all
docker run -d --name isolated-task --network none alpine sleep 3600
```

- **Best for**: Running fully isolated batch jobs or security-sensitive tasks that should have zero network access.

### 4. Custom Network

Creating your own **bridge** network is the recommended approach for multi-container applications, because Docker provides automatic DNS resolution by container name on any user-defined network (unlike the default bridge).

```bash
# Create a custom bridge network
docker network create app-net

# Inspect it
docker network inspect app-net

# Run containers attached to the custom network
docker run -d --name redis-cache --network app-net redis:alpine
docker run -d --name web-api --network app-net -p 8080:8080 my-web-api

# Remove a network (must have no containers attached)
docker network rm app-net

# Remove all unused networks
docker network prune
```

### 5. Connect Multiple Containers

Multiple containers can share a network to communicate, and an already-running container can be attached to additional networks after the fact.

```bash
# Attach an already-running container to another network
docker network connect app-net web-api

# Detach a container from a network
docker network disconnect app-net web-api

# Run a Postgres database and an API on the same custom network
docker network create backend-net
docker run -d --name db --network backend-net -e POSTGRES_PASSWORD=secret postgres:16-alpine
docker run -d --name api --network backend-net -p 3000:3000 -e DB_HOST=db my-api
```

Inside the `api` container, the application can connect to the database using the hostname `db`—Docker resolves it to the container's internal IP automatically.

### 6. DNS Inside Docker

On any user-defined (custom) network, Docker runs an embedded DNS server that resolves container names to their internal IP addresses—no manual `/etc/hosts` editing required.

```bash
# From inside "web-api" (on app-net), ping "redis-cache" by name
docker exec -it web-api ping redis-cache

# Look up the resolved IP for a container name
docker exec -it web-api getent hosts redis-cache
```

- **Name resolution scope**: Only containers on the **same custom network** can resolve each other by name. Containers on the default bridge network cannot.

- **`--network-alias`**: Assigns additional DNS names to a container on a given network, useful for giving a service multiple aliases (e.g., `db` and `primary-db`).

  ```bash
  docker run -d --name postgres-1 --network backend-net --network-alias db postgres:16-alpine
  ```

### Summary Cheat Sheet

| Task                          | Command                                              |
| ------------------------------ | ----------------------------------------------------- |
| **List networks**              | `docker network ls`                                  |
| **Create custom network**      | `docker network create <name>`                       |
| **Inspect network**            | `docker network inspect <name>`                      |
| **Remove network**             | `docker network rm <name>`                           |
| **Remove unused networks**     | `docker network prune`                               |
| **Run on custom network**      | `docker run --network <name> ...`                    |
| **Connect running container**  | `docker network connect <network> <container>`       |
| **Disconnect container**       | `docker network disconnect <network> <container>`    |
| **Run with no networking**     | `docker run --network none ...`                      |
| **Run with host networking**   | `docker run --network host ...`                      |

## Part 10: Docker Compose

Real applications rarely run as a single container—they're made up of a web server, an API, a database, a cache, and more. Manually running each with `docker run` and wiring up networks and volumes by hand doesn't scale. **Docker Compose** solves this by letting you define a whole multi-container application declaratively in one file.

### 1. Why Compose?

Compose replaces long sequences of `docker network create`, `docker volume create`, and `docker run` commands with a single declarative YAML file and a single command.

- **Declarative**: The entire application stack (services, networks, volumes, environment variables) is described in one version-controlled file instead of scattered shell commands.

- **Reproducible**: Anyone on the team can spin up the exact same multi-container environment with one command.

- **Automatic networking**: Compose creates a dedicated network for your project by default, and every service can reach every other service by its service name (same DNS resolution as a custom network from [Part 9](#part-9-docker-networking)).

### 2. `docker-compose.yml`

A Compose file is a YAML document, conventionally named `docker-compose.yml`, placed at the root of your project. It defines `services`, and optionally `networks` and `volumes`.

```yaml
# docker-compose.yml
services:
  web:
    image: nginx:alpine
    ports:
      - "8080:80"
```

```bash
# Start the stack defined in docker-compose.yml (in the current directory)
docker compose up

# Stop and remove containers, networks created by "up"
docker compose down
```

> **Note**: Modern Docker ships Compose as a CLI plugin (`docker compose`, no hyphen). The older standalone `docker-compose` binary still works the same way but is being phased out.

### 3. Services

Each entry under `services` describes one container—its image (or build instructions), ports, dependencies, and configuration. `depends_on` controls startup order between services.

```yaml
services:
  api:
    image: my-api:v1
    ports:
      - "3000:3000"
    depends_on:
      - db

  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_PASSWORD: secret
```

- **`depends_on`** controls **start order** only—it does not wait for the database to be ready to accept connections. For true readiness checks, pair it with a `healthcheck` (covered in [Part 18: Docker Compose in Production](#part-18-docker-compose-in-production)).

### 4. Networks

By default, Compose creates a single project-scoped bridge network and attaches every service to it automatically—no manual `docker network create` needed. Services reach each other using their service name as the hostname.

```yaml
services:
  api:
    image: my-api:v1
    networks:
      - backend

  db:
    image: postgres:16-alpine
    networks:
      - backend

networks:
  backend:
    driver: bridge
```

Inside the `api` container, connecting to `db:5432` resolves automatically to the database container's internal IP.

### 5. Volumes

Named volumes can be declared once at the top level under `volumes` and then referenced by any service, giving you the same data-persistence benefits covered in [Part 8](#part-8-docker-volumes).

```yaml
services:
  db:
    image: postgres:16-alpine
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

```bash
# List volumes created by Compose (prefixed with the project name)
docker volume ls
```

### 6. Environment Variables

Services can receive configuration through `environment` (inline key/value pairs) or `env_file` (load from a `.env`-style file), keeping secrets and per-environment config out of the image itself.

```yaml
services:
  api:
    image: my-api:v1
    environment:
      NODE_ENV: production
      DB_HOST: db
    env_file:
      - .env
```

Compose also automatically reads a `.env` file in the project root to substitute `${VARIABLE}` placeholders directly inside `docker-compose.yml` itself:

```yaml
services:
  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_PASSWORD: ${DB_PASSWORD}
```

(Full coverage of `.env` files and secrets management is in [Part 12: Environment Variables](#part-12-environment-variables).)

### 7. Build Multiple Services

Instead of `image`, a service can use `build` to build a custom image from a local `Dockerfile`—Compose builds each service's image and wires them together in one step.

```yaml
services:
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    ports:
      - "5173:5173"

  api:
    build: ./api
    ports:
      - "3000:3000"
    depends_on:
      - db

  db:
    image: postgres:16-alpine
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

```bash
# Build (or rebuild) images for all services that define "build"
docker compose build

# Force a rebuild without using the layer cache
docker compose build --no-cache
```

### 8. Start Everything with One Command

`docker compose up` builds (if needed), creates the network and volumes, and starts every service in dependency order—all from one command.

```bash
# Build images and start all services in the foreground
docker compose up --build

# Start all services in detached mode
docker compose up -d

# View aggregated logs from all services
docker compose logs -f

# List running services for this project
docker compose ps

# Stop all services without removing containers/networks
docker compose stop

# Stop and remove containers, networks (add -v to also remove volumes)
docker compose down -v
```

### Summary Cheat Sheet

| Task                              | Command                              |
| ---------------------------------- | ------------------------------------- |
| **Start stack (foreground)**       | `docker compose up`                  |
| **Start stack (detached)**         | `docker compose up -d`               |
| **Build images**                   | `docker compose build`               |
| **Build and start**                | `docker compose up --build`          |
| **List running services**          | `docker compose ps`                  |
| **View logs**                      | `docker compose logs -f`             |
| **Stop services**                  | `docker compose stop`                |
| **Stop and remove everything**     | `docker compose down`                |
| **Stop and remove incl. volumes**  | `docker compose down -v`             |

## Part 11: Multi-Container Project

Time to combine everything from Parts 8–10 into a real multi-container application. The full project lives in [`multi-container-project/`](./multi-container-project) and is composed of four services: a **React/Vite** frontend, a **NestJS** backend, a **PostgreSQL** database, and a **Redis** cache—all orchestrated with a single `docker-compose.yml`.

### 1. Project Overview

```
multi-container-project/
├── docker-compose.yml
├── .env.example
├── frontend/          # React (Vite) - talks to the backend API
│   ├── Dockerfile
│   ├── package.json
│   └── src/
└── backend/            # NestJS - exposes /health, /db-check, /cache-check
    ├── Dockerfile
    ├── package.json
    └── src/
```

- **Frontend** fetches `/health` from the backend on load and renders the response.
- **Backend** exposes three endpoints: `/health` (liveness), `/db-check` (round-trips a query to PostgreSQL), and `/cache-check` (reads/writes a key in Redis).
- **PostgreSQL** and **Redis** run as their own services using official images—no custom Dockerfile needed for either.

### 2. Backend: NestJS + PostgreSQL + Redis

The backend ([`backend/src/app.service.ts`](./multi-container-project/backend/src/app.service.ts)) opens a `pg.Pool` for PostgreSQL and an `ioredis` client for Redis, both configured entirely from environment variables so the same code runs unmodified across environments:

```typescript
this.pool = new Pool({
  host: this.config.get("DB_HOST", "db"),
  port: Number(this.config.get("DB_PORT", "5432")),
  user: this.config.get("DB_USER", "postgres"),
  password: this.config.get("DB_PASSWORD", "postgres"),
  database: this.config.get("DB_NAME", "app_db"),
});

this.redis = new Redis({
  host: this.config.get("REDIS_HOST", "redis"),
  port: Number(this.config.get("REDIS_PORT", "6379")),
});
```

Notice the hosts are `db` and `redis`—the **service names** from `docker-compose.yml`, resolved automatically by Docker's embedded DNS (see [Part 9, section 6](#6-dns-inside-docker)).

```dockerfile
# backend/Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start:dev"]
```

### 3. Frontend: React/Vite

The frontend ([`frontend/src/App.jsx`](./multi-container-project/frontend/src/App.jsx)) reads the backend's URL from a Vite environment variable and calls its `/health` endpoint:

```jsx
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

useEffect(() => {
  fetch(`${API_URL}/health`)
    .then((res) => res.json())
    .then(setHealth);
}, []);
```

```dockerfile
# frontend/Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]
```

### 4. Compose: Wiring It All Together

All four services are defined in [`docker-compose.yml`](./multi-container-project/docker-compose.yml). `frontend` and `backend` use `build` (custom Dockerfiles); `db` and `redis` use official `image`s directly:

```yaml
services:
  frontend:
    build: ./frontend
    ports:
      - "5173:5173"
    environment:
      VITE_API_URL: http://localhost:3000
    depends_on:
      - backend

  backend:
    build: ./backend
    ports:
      - "3000:3000"
    environment:
      DB_HOST: db
      REDIS_HOST: redis
    depends_on:
      - db
      - redis

  db:
    image: postgres:16-alpine
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
    volumes:
      - redis_data:/data
```

### 5. Networks

No network is explicitly created by hand—Compose gives every service in the file a shared `app-net` bridge network, so `frontend`, `backend`, `db`, and `redis` can all resolve each other by service name (recap: [Part 10, section 4](#4-networks)).

```yaml
networks:
  app-net:
    driver: bridge
```

### 6. Environment Variables

Database credentials are pulled from a `.env` file at the project root (never committed—only [`.env.example`](./multi-container-project/.env.example) is), with sane defaults inline via `${VAR:-default}` syntax:

```yaml
environment:
  DB_USER: ${DB_USER:-postgres}
  DB_PASSWORD: ${DB_PASSWORD:-postgres}
  DB_NAME: ${DB_NAME:-app_db}
```

Copy the example file before first run:

```bash
cp .env.example .env
```

### 7. Dependencies (Startup Order)

`depends_on` chains the startup order: `frontend` waits on `backend`, and `backend` waits on `db` and `redis`. As covered in [Part 10, section 3](#3-services), this only controls **start order**, not readiness—the backend's `pg.Pool` and `ioredis` client both retry/queue connections internally, so brief startup races are handled gracefully here.

### 8. Persistent Data

Both stateful services mount a named volume so data survives `docker compose down` (without `-v`):

```yaml
volumes:
  postgres_data: # PostgreSQL data directory
  redis_data: # Redis RDB/AOF persistence directory
```

This is the same pattern from [Part 8: Docker Volumes](#part-8-docker-volumes)—the volumes are managed by Docker and can be backed up/restored exactly as described there.

### 9. Run It

```bash
cd multi-container-project
cp .env.example .env

# Build images and start every service
docker compose up --build

# Frontend:  http://localhost:5173
# Backend:   http://localhost:3000/health
#            http://localhost:3000/db-check
#            http://localhost:3000/cache-check

# Tear down (add -v to also delete the Postgres/Redis volumes)
docker compose down
```
