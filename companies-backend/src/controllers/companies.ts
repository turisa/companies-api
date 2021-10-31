import express from 'express';

import Company from '../models/country';

const companiesRouter = express.Router();

companiesRouter.get('/', async (request, response) => {
  const name = request.query.name;
  const filterQuery = name ? { name: { $regex: name, $options: 'i' } } : {};

  const companies = await Company.find(filterQuery)
    .populate('managers', {
      name: 1,
      description: 1,
    })
    .populate('jobs', {
      name: 1,
      description: 1,
    });

  response.json(companies);
});

companiesRouter.get('/:id', async (request, response) => {
  const id = request.params.id;

  const companies = await Company.findById(id)
    .populate('managers', {
      name: 1,
      description: 1,
    })
    .populate('jobs', {
      name: 1,
      description: 1,
    });

  response.json(companies);
});

export default companiesRouter;
