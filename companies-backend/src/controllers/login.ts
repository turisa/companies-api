import bcrypt from 'bcrypt';
import express from 'express';
import jsonwebtoken from 'jsonwebtoken';

import User from '../models/user';

const loginRouter = express.Router();

loginRouter.post('/', async (request, response) => {
  const { username, password } = request.body;

  if (!username || !password) {
    return response.status(400).json({ error: 'Username or password missing' });
  }

  const user = await User.findOne({ username });
  const passwordCorrect = user
    ? await bcrypt.compare(password, user.passwordHash)
    : false;

  if (!user || !passwordCorrect) {
    return response.status(401).json({ error: 'Invalid username or password' });
  }

  const userForToken = {
    username,
    id: user._id,
  };

  const token = jsonwebtoken.sign(userForToken, process.env.SECRET, {
    expiresIn: 60 * 60,
  });

  response.status(200).json({ token, username, id: user._id, name: user.name });
});

export default loginRouter;
