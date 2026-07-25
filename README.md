# Docker CLI Tutorial

## Part 1: What is Docker?

### 1. The Problem Before Docker

Before containerization, developers and operations teams frequently ran into the "It works on my machine!" syndrome.

- **Environment Drift**: A project might work perfectly on a developer’s macOS or Windows laptop, but fail on an Ubuntu production server due to differences in OS versions, system libraries, or installed dependencies.

- **Complex Onboarding**: Setting up a new team member's machine meant installing databases, runtimes, and background tools manually—a process prone to human error and time-wasting troubleshooting.

### 2. What Docker Solves

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

```
+-------------------------------------------------------------------+
|                           DOCKER CLIENT                           |
|                    (docker run, docker build, etc.)               |
+-------------------------------------------------------------------+
                                  |
                                  v  (REST API)
+-------------------------------------------------------------------+
|                           DOCKER ENGINE                           |
|  +-------------------------------------------------------------+  |
|  | Daemon (dockerd)                                            |  |
|  | - Listens for API requests                                  |  |
|  | - Manages Images, Volumes, Networks                         |  |
|  +-------------------------------------------------------------+  |
|  | High-Level Runtime (containerd)                             |  |
|  | - Handles image pulling, storage, container supervision     |  |
|  +-------------------------------------------------------------+  |
|  | Low-Level Runtime (runc)                                    |  |
|  | - Interacts with Linux kernel (Namespaces & Cgroups)         |  |
|  +-------------------------------------------------------------+  |
+-------------------------------------------------------------------+
```

- **Docker CLI (`docker`)**: The terminal tool you interact with to issue commands.

- **Docker Daemon (`dockerd`)**: The primary host service that listens for API requests and manages Docker objects.

- **containerd & runc**: The underlying container runtimes. `containerd` handles image management and lifecycle execution, while `runc` interacts directly with Linux kernel primitives (**Namespaces** for isolation and **Cgroups** for resource limits).

### 2. Images vs. Containers

To understand Docker objects, think of an **Image** as a class definition and a **Container** as an active instance of that class.

```
Docker Image (Read-Only)               Docker Container (Runnable)
+----------------------------+          +----------------------------+
|  Writable Container Layer  |          |  Writable Container Layer  | <-- (Added at runtime)
+----------------------------+          +----------------------------+
|  App Code / Build Artifacts|          |  App Code / Build Artifacts|
+----------------------------+   ===>   +----------------------------+
|  Node.js / Python Runtime  |          |  Node.js / Python Runtime  |
+----------------------------+          +----------------------------+
|  Base OS (e.g., Ubuntu)    |          |  Base OS (e.g., Ubuntu)    |
+----------------------------+          +----------------------------+
```

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
docker image prune
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
