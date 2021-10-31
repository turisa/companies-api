import dotenv from 'dotenv';
import http from 'http';
import mongoose from 'mongoose';

import app from './app';
import { clearDb, populateDb } from './utils/db_helper';

dotenv.config();

const { PORT, MONGODB_URI } = process.env;

const connectToDb = async () => {
  await mongoose.connect(MONGODB_URI);

  await clearDb();
  await populateDb();
};

connectToDb().then(() => {
  const server = http.createServer(app);
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
