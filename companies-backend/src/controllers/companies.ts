import express from 'express';
import Review from '../models/review';

import Company from '../models/company';

const companiesRouter = express.Router();

companiesRouter.get('/', async (request, response) => {
  const name = request.query.name;

  const filterQuery = name
    ? { name: { $regex: name as string, $options: 'i' } }
    : {};

  const companies = await Company.find(filterQuery)
    .populate('country', {
      name: 1,
    })
    .populate('managers', {
      name: 1,
      description: 1,
    })
    .populate('jobs', {
      name: 1,
      description: 1,
    })
    .populate({ path: 'reviews', match: { deleted: false } });

  response.json(companies);
});

companiesRouter.get('/:id', async (request, response) => {
  const id = request.params.id;

  const companies = await Company.findById(id)
    .populate('country', {
      name: 1,
    })
    .populate('managers', {
      name: 1,
      description: 1,
    })
    .populate('jobs', {
      name: 1,
      description: 1,
    })
    .populate('reviews', {
      content: 1,
    });

  response.json(companies);
});

export default companiesRouter;
