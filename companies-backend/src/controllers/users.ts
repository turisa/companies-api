import bcrypt from 'bcrypt';
import express from 'express';

import User from '../models/user';
const usersRouter = express.Router();

usersRouter.post('/', async (request, response) => {
  const { username, name, password } = request.body;

  if (password.length < 3) {
    return response.status(400).json({
      error: 'Password must be at least 3 characters long',
    });
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = new User({ username, name, passwordHash });

  const savedUser = await user.save();
  response.json(savedUser);
});

export default usersRouter;
