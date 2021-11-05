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
  ':method :url :status :res[content-length] - :response-time ms :body'
);

export const tokenExtractor = (
  request: express.Request,
  response: express.Response,
  next: express.NextFunction
) => {
  const authorization = request.get('authorization');

  request.token =
    authorization && authorization.toLowerCase().startsWith('bearer ')
      ? authorization.substring(7)
      : null;

  next();
};

export const tokenValidator = (
  request: express.Request,
  response: express.Response,
  next: express.NextFunction
) => {
  const token = request.token;

  const decodedToken = token
    ? jsonwebtoken.verify(token, process.env.SECRET)
    : null;

  if (!token || !decodedToken) {
    return response.status(401).json({
      error: 'Token missing or invalid',
    });
  }

  next();
};
