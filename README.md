## Stack

This project uses:
- Next.js v14.0
- React v18
- TailwindCSS v3.3
- Express v4.18
- MongoDB [Node Driver v6.3]

## Getting Started

Install dependencies for the server:

```bash
npm install
```

In a separate terminal window, install dependencies for the frontend:

```bash
cd ./client
npm install
```

Start a [MongoDB Server](https://www.mongodb.com/docs/manual/installation/) in order to allow database connections.

If needed, seed the database with initial data:

```bash
npm run seed
```
> _Note that the `id` attribute on the seed data has been removed in favor of MongoDB's `_id` property_

Finally, run the development server:

```bash
npm run dev
```

This command will run both the server and client using the [`concurrently`](https://github.com/open-cli-tools/concurrently) package.

Open [https://localhost:3000](https://localhost:3000) with your browser to see the result. Note that we are using Next.js's experimental SSL feature.

## Testing

We have tests in the client app (Next.js) using Jest + React Testing Library. To run all tests, you can run:

```bash
npm run test
```

Alternatively, you can run:

```bash
cd ./client
npm run test
```
