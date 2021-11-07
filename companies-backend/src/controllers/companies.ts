import express from 'express';
import mongoose from 'mongoose';

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

companiesRouter.get('/:id', async (request, response, next) => {
  const id = request.params.id;

  try {
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
      .populate({ path: 'reviews', match: { deleted: false } });

    response.json(companies);
  } catch (error) {
    next(error);
  }
});

export default companiesRouter;
