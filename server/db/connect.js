import { MongoClient, ServerApiVersion } from "mongodb";
import { mongodb as mongodbConfig } from '../config.js';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(mongodbConfig.uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export default async function run() {
  try {
    // Connect the client to the server
    await client.connect();

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    return client.db();
  } catch (e) {
    console.log('MongoDB Connection Error: ', e)
  }
}

export async function closeConnection() {
  await client.close();
}
