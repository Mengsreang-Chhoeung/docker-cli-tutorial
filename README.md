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
