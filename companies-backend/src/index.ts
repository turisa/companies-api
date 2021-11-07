import http from 'http';
import mongoose from 'mongoose';

//import dotenv from 'dotenv'; // rm
//dotenv.config(); // rm

import app from './app';
import { clearDb, populateDb } from './utils/db_helper';

const { MONGODB_URL, PORT } = process.env;

const connectToDb = async () => {
  try {
    console.log(`Connecting to ${MONGODB_URL}`);

    await mongoose.connect(MONGODB_URL);

    console.log('Connected to db');
    console.log('Clearing db');

    await clearDb();

    console.log('Populating db');

    await populateDb();
  } catch (error) {
    console.log('Failed to connect');

    console.log(error.message);
  }
};

connectToDb().then(() => {
  const server = http.createServer(app);
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
