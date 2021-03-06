import cors from 'cors';
import express from 'express';

import loginRouter from './controllers/login';
import reviewsRouter from './controllers/reviews';
import usersRouter from './controllers/users';
import companiesRouter from './controllers/companies';
import countriesRouter from './controllers/countries';
import jobsRouter from './controllers/jobs';
import managersRouter from './controllers/managers';

import { requestLogger, tokenVerifier, errorHandler } from './utils/middleware';

require('express-async-errors');

const app = express();

app.use(cors());
app.use(express.json());

app.use(requestLogger);

app.use('/api/login', loginRouter);
app.use('/api/users', usersRouter);
app.use('/api/reviews', tokenVerifier, reviewsRouter);
app.use('/api/companies', tokenVerifier, companiesRouter);
app.use('/api/countries', tokenVerifier, countriesRouter);
app.use('/api/jobs', tokenVerifier, jobsRouter);
app.use('/api/managers', tokenVerifier, managersRouter);

app.use(errorHandler);

export default app;
