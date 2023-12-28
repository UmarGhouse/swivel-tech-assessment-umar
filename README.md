# Stack

This project uses:
- Next.js v14.0
- React v18
- TailwindCSS v3.3
- Express v4.18
- MongoDB [Node Driver v6.3]

# Getting Started

### 1. Install dependencies for the server:

```bash
npm install
```

In a separate terminal window, install dependencies for the frontend:

```bash
cd ./client
npm install
```

### 2. Start a [MongoDB Server](https://www.mongodb.com/docs/manual/installation/) in order to allow database connections.

### 3. If needed, seed the database with initial data:

```bash
npm run seed
```
> _Note that the `id` attribute on the seed data has been removed in favor of MongoDB's `_id` property_

### 4. Finally, run the development server:

```bash
npm run dev
```

This command will run both the server and client using the [`concurrently`](https://github.com/open-cli-tools/concurrently) package.

Open [https://localhost:3000](https://localhost:3000) with your browser to see the result. Note that we are using Next.js's experimental SSL feature.

# Testing

Tests are available in the:
- Client app (Next.js) using Jest + React Testing Library.
- Server app (Express.js) using [Node-Tap](https://node-tap.org/)

To run all tests concurrently in the same terminal window, you can run:

```bash
npm run test
```

Alternatively, you can run just the server tests with:

```bash
npm run test-server
```

And you can run just the client tests with either:

```bash
npm run test-client

# OR
cd ./client
npm run test
```

> _The [`cross-env`](https://github.com/kentcdodds/cross-env) package is used to allow "POSIX-like" commands to set environment variables in npm scripts in a cross-platform manner_
