# Static Login Page (rucha - CI/CD practice)

This repository contains a minimal static login page (HTML/CSS/JS) that you can build and deploy using Docker. It's intended for CI/CD practice and demonstration purposes.

Features
- Responsive login form with client-side validation and demo authentication.
- Dashboard page (client-side session using localStorage).
- Dockerfile using nginx:alpine to serve the static site.
- docker-compose for local testing.
- Sample GitHub Actions workflow to build the Docker image.

Demo credentials (for local/testing only)
- username: `admin`
- password: `password`

Quick start — build and run with Docker
1. Build the image:
   docker build -t rucha-login .

2. Run the container:
   docker run --rm -p 8080:80 rucha-login

3. Open http://localhost:8080 in your browser.

Quick start — docker-compose
1. Start:
   docker compose up --build

2. Open http://localhost:8080

Notes
- This uses client-side authentication only for demo/CICD practice. Do not use this auth for production.
- The GitHub Actions workflow builds the Docker image (useful to test your CI pipeline). Customize `image name` and push settings if you want to push to a registry.