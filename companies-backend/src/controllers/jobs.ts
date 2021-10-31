import express from 'express';

import Job from '../models/job';

const jobsRouter = express.Router();

jobsRouter.get('/', async (request, response) => {
  const name = request.query.name;
  const queryFilter = name ? { name: { $regex: name, $options: 'i' } } : {};

  const jobs = await Job.find(queryFilter).populate('company', {
    name: 1,
    suffix: 1,
    description: 1,
  });

  response.json(jobs);
});

jobsRouter.get('/:id', async (request, response) => {
  const id = request.params.id;

  const job = await Job.findById(id).populate('company', {
    name: 1,
    suffix: 1,
    description: 1,
  });

  response.json(job);
});
