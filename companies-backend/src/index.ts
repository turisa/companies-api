import dotenv from 'dotenv';
import http from 'http';
import mongoose from 'mongoose';

import app from './app';

dotenv.config();

const { PORT, MONGODB_URI } = process.env;

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log(`Connected to MongoDB`);
  })
  .catch(() => {
    console.log('Failed to connect');
  });

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
