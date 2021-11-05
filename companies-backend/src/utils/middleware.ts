import express from 'express';
import morgan from 'morgan';
import http from 'http';

interface IncomingMessageWithBody extends http.IncomingMessage {
  body: string;
}

export const requestLogger = () => {
  morgan.token('body', (request: IncomingMessageWithBody) => {
    return JSON.stringify(request.body);
  });

  return morgan(
    ':method :url :status :res[content-length] - :response-time ms :body'
  );
};

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
