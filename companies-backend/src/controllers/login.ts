import bcrypt from 'bcrypt';
import express, { response } from 'express';
import jsonwebtoken from 'jsonwebtoken';

import User from '../models/user';

const loginRouter = express.Router();

loginRouter.post('/', async (request, response) => {
  const body = request.body;

  if (!body || !body.username || !body.password) {
    return response.status(400).json({ error: 'Username or password missing' });
  }

  const user = await User.findOne({ username: body.username });
  const passwordCorrect = user
    ? await bcrypt.compare(body.password, user.passwordHash)
    : false;

  if (!user || !passwordCorrect) {
    return response.status(401).json({ error: 'Invalid username or password' });
  }

  const userForToken = {
    username: body.username,
    id: user._id,
  };

  const token = jsonwebtoken.sign(userForToken, process.env.SECRET, {
    expiresIn: 60 * 60,
  });

  response
    .status(200)
    .send({ token, username: body.username, name: user.name });
});

export default loginRouter;
