import express from 'express';
import morgan from 'morgan';
import http from 'http';
import jsonwebtoken from 'jsonwebtoken';

interface IncomingMessageWithBody extends http.IncomingMessage {
  body: string;
}

morgan.token('body', (request: IncomingMessageWithBody) => {
  return JSON.stringify(request.body);
});

export const requestLogger = morgan(
  ':method :url :status :res[content-length] - :response-time ms'
);

export const tokenVerifier = (
  request: express.Request,
  response: express.Response,
  next: express.NextFunction
) => {
  const authorization = request.get('authorization');

  const token =
    authorization && authorization.toLowerCase().startsWith('bearer ')
      ? authorization.substring(7)
      : null;

  const decodedToken = token
    ? jsonwebtoken.verify(token, process.env.SECRET)
    : null;

  if (!token || !decodedToken) {
    return response.status(401).json({
      error: 'Token missing or invalid',
    });
  }

  request.token = decodedToken as { id: string };

  next();
};

export const errorHandler = (
  error: any,
  request: express.Request,
  response: express.Response,
  next: express.NextFunction
) => {
  console.log(error); // for now

  next(error);
};
