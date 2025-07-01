// utils/mongodb.ts
import { MongoClient } from "mongodb";

if (!process.env.ATLAS_URI) {
  throw new Error("Please define the ATLAS_URI environment variable inside .env.local");
}

const uri = process.env.ATLAS_URI;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient>;
}

if (process.env.NODE_ENV === "development") {
  // In development, use a global variable so the client is cached across hot reloads
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, create a new client for each function call (or optimize differently)
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
