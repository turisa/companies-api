import cors from 'cors';
import express from 'express';

import usersRouter from './controllers/users';
import companiesRouter from './controllers/companies';
import countriesRouter from './controllers/countries';
import jobsRouter from './controllers/jobs';
import managersRouter from './controllers/managers';

const app = express();

app.use(cors());

app.use('/api/users', usersRouter);
app.use('/api/companies', companiesRouter);
app.use('/api/countries', countriesRouter);
app.use('/api/jobs', jobsRouter);
app.use('/api/managers', managersRouter);

export default app;
