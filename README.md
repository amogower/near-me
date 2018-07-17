# Near Me

## Introduction

This application is made up of:

- A Node.js server backend that acts as the broker between the Foursquare API and the frontend
- A Node.js server-side rendered frontend application

Each server is launched in a Docker container.

## Instructions

To get this app started:

- Ensure you have Docker installed
- Copy `.env.template` to `.env` and add your Foursquare App Client ID and Client Secret
- Run `docker-compose up -d` from the root directory
- Go to [http://localhost](http://localhost) to see the live app
