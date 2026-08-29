# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

This is a Docker CLI tutorial series written for Khmer-speaking web developers, structured as a single long-form `README.md` (English) mirrored by `README_KM.md` (Khmer). It is documentation, not an application — there is no build system, test suite, linter, or CI for the repo itself. The `api/`, `cambodia-website/`, and `multi-container-project/` directories are small runnable example projects that the tutorial text walks through and references by name.

## Structure

- `README.md` — the canonical tutorial content, organized into numbered "Part N: Title" sections (currently Parts 1–12 of a planned 20-part series plus bonus topics). Each part has a matching Table of Contents entry with an anchor link at the top of the file. This is the file that gets updated for new parts/issues.
- `README_KM.md` — an older, unstructured Khmer-language draft that predates the Part-based series and is **not** kept in sync with `README.md` (it has no "Part N" sections at all). Past PRs for new parts (e.g. Part 7) only touch `README.md`; don't assume changes need mirroring here unless explicitly asked.
- `_thumbnail_doc/` — PNG/JPG images embedded in the README via relative paths (e.g. `![...](./_thumbnail_doc/what-docker-solves.png)`). Image filenames are referenced directly in the markdown, so renaming an image requires updating both READMEs.
- `api/` — the Express app built in "Part 7: Building a Node.js App". Minimal Node/Express app (`app.js`) with its own `Dockerfile`, `.dockerignore`, `package.json`. Used purely as tutorial example code walked through in the README, not a maintained service.
- `cambodia-website/` — a static HTML/CSS/JS site (used in earlier/other parts as a Dockerize-a-static-site example) with its own `Dockerfile` (`FROM nginx:latest`, serves static files via nginx).
- `multi-container-project/` — the multi-service app built in "Part 11: Multi-Container Project": a React/Vite `frontend/` and a NestJS `backend/` (each with its own `Dockerfile`), wired to `postgres` and `redis` official images via a single `docker-compose.yml` at its root. The backend exposes `/health`, `/db-check`, `/cache-check` to demonstrate real Postgres/Redis connectivity; the frontend just calls `/health`. Keep it deliberately minimal — it's a teaching example, not a production scaffold (that's Part 20's job).

## Working conventions

- The README follows a consistent per-part pattern: a numbered `## Part N: Title` heading, `###` subsections matching the ToC, explanatory prose, then runnable `bash`/`dockerfile` fenced code blocks demonstrating the commands discussed. Follow this exact pattern when adding a new part or subsection, including adding the corresponding ToC entry with a matching anchor slug.
- Code examples in the README are meant to be copy-pasteable and correct — verify Docker/Dockerfile syntax mentally (or by running it) before adding it, since readers will run these commands as-is.
- When a part introduces or modifies example code (like `api/` in Part 7), the README's prose and code blocks should stay consistent with the actual files in that directory.
- Branches for new parts follow the pattern `part-N/ms-<issue-number>-<slug>` (e.g. `part-8/ms-43-docker-volumes`), matching the GitHub issue tracking that part.

## Running the example projects

`api/` (Express app):
```bash
cd api
docker build -t express-app:v1 .
docker run -d --name my-express-container -p 3000:3000 express-app:v1
curl http://localhost:3000
```

`cambodia-website/` (static site via nginx):
```bash
cd cambodia-website
docker build -t cambodia-website .
docker run -d --name cambodia-site -p 8080:80 cambodia-website
```

`multi-container-project/` (React/Vite + NestJS + PostgreSQL + Redis via Compose):
```bash
cd multi-container-project
cp .env.example .env
docker compose up --build
curl http://localhost:3000/health
```
