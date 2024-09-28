import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

try {
  let client;
  if (process.env.MONGO_URI) {
    client = await mongoose.connect(process.env.MONGO_URI);
  } else {
    const mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    client = await mongoose.connect(mongoUri);
  }
  console.log(`Connected to MongoDB @ ${client.connection.host}`);
} catch (error) {
  console.log(error.stack);
  process.exit(1);
}
