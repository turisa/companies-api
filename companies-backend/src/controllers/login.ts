import bcrypt from 'bcrypt';
import express from 'express';
import jsonwebtoken from 'jsonwebtoken';

import User from '../models/user';
const loginRouter = express.Router();

loginRouter.post('/', async (request, response) => {
  const body = request.body;

  const user = await User.findOne({ username: body.username });
  const passwordCorrect = user
    ? await bcrypt.compare(body.password, user.passwordHash)
    : false;

  if (!user || !passwordCorrect) {
    return response.status(401).json({ error: 'invalid username or password' });
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

module.exports = loginRouter;
