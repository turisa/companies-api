import cors from 'cors';
import express from 'express';

import loginRouter from './controllers/login';
import usersRouter from './controllers/users';
import companiesRouter from './controllers/companies';
import countriesRouter from './controllers/countries';
import jobsRouter from './controllers/jobs';
import managersRouter from './controllers/managers';

import {
  requestLogger,
  tokenExtractor,
  tokenValidator,
} from './utils/middleware';

const app = express();

app.use(cors());
app.use(express.json());

app.use(requestLogger);

app.use('/api/login', loginRouter);
app.use('/api/users', usersRouter);
app.use('/api/companies', tokenExtractor, tokenValidator, companiesRouter);
app.use('/api/countries', tokenExtractor, tokenValidator, countriesRouter);
app.use('/api/jobs', tokenExtractor, tokenValidator, jobsRouter);
app.use('/api/managers', tokenExtractor, tokenValidator, managersRouter);

export default app;
