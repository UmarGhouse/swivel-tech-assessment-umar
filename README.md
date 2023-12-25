## Getting Started

Install dependencies for both the server and client projects:

```bash
npm install

cd ./client && npm install
```

Start a [MongoDB Server](https://www.mongodb.com/docs/manual/installation/) in order to allow database connections.

If needed, seed the database with initial data:

```bash
npm run seed
```

Finally, run the development server:

```bash
npm run dev
```

This command will run both the server and client using the `concurrently` package.

Open [https://localhost:3000](https://localhost:3000) with your browser to see the result. Note that we are using Next.js's experimental SSL feature.
