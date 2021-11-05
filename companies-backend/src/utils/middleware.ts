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
