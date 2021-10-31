import dotenv from 'dotenv';
import http from 'http';
import mongoose from 'mongoose';

import app from './app';
import { clearDb, populateDb } from './utils/db_helper';

dotenv.config();

const { PORT, MONGODB_URI } = process.env;

const connectToDb = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to db');

    console.log('Clearing db');
    await clearDb();

    console.log('Populating db');
    await populateDb();
  } catch (error) {
    console.log('Failed to connect');
  }
};

connectToDb().then(() => {
  const server = http.createServer(app);
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
