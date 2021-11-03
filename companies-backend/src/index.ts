import dotenv from 'dotenv';
import http from 'http';
import mongoose from 'mongoose';

import app from './app';
import { clearDb, populateDb } from './utils/db_helper';

dotenv.config();

const MONGODB_URI = 'mongodb://username:password@mongo:27017/database';
const PORT = 4000;

const connectToDb = async () => {
  try {
    console.log(`Connecting to ${MONGODB_URI}`);
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to db');

    console.log('Clearing db');
    await clearDb();

    console.log('Populating db');
    await populateDb();
  } catch (error) {
    console.log('Failed to connect');
    console.log('abcd');
    console.log(error.message);
  }
};

connectToDb().then(() => {
  const server = http.createServer(app);
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
