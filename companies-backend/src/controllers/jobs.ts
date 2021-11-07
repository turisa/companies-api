import express from 'express';

import Job from '../models/job';

const jobsRouter = express.Router();

jobsRouter.get('/', async (request, response) => {
  const name = request.query.name;

  const queryFilter = name
    ? { name: { $regex: name as string, $options: 'i' } }
    : {};

  const jobs = await Job.find(queryFilter).populate('company', {
    name: 1,
    description: 1,
  });

  response.json(jobs);
});

jobsRouter.get('/:id', async (request, response, next) => {
  const id = request.params.id;

  try {
    const job = await Job.findById(id).populate('company', {
      name: 1,
      description: 1,
    });

    response.json(job);
  } catch (error) {
    next(error);
  }
});

export default jobsRouter;
