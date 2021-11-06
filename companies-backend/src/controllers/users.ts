import bcrypt from 'bcrypt';
import express from 'express';

import User from '../models/user';

const usersRouter = express.Router();

usersRouter.get('/:id', async (request, response) => {
  const userIdFromParams = request.params.id;
  const userId = request.token.id;

  if (userIdFromParams !== userId) {
    return response.status(401).end();
  }

  const user = await User.findById(userId);
  response.json(user);
});

usersRouter.post('/', async (request, response) => {
  const { username, name, password } = request.body;

  if (!username) {
    return response.status(400).json({
      error: 'Username is required',
    });
  }

  if (!name) {
    return response.status(400).json({
      error: 'Name is required',
    });
  }

  if (!password) {
    return response.status(400).json({
      error: 'Password is required',
    });
  }

  if (password.length < 3) {
    return response.status(400).json({
      error: 'Password must be at least 3 characters long',
    });
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  try {
    const user = new User({ username, name, passwordHash });

    const savedUser = await user.save();
    response.json(savedUser);
  } catch (error) {
    response.status(422).json({
      error: 'Username must be unique',
    });
  }
});

export default usersRouter;
