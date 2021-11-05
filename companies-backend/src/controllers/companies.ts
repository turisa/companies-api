import express from 'express';
import User from '../models/user';

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
    });

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
    });

  response.json(companies);
});

companiesRouter.post('/:id/reviews', async (request, response) => {
  const companyId = request.params.id;

  const content: string = request.body.content;
  const userId: string = request.token.id;

  const company = await Company.findById(companyId);
  const user = await User.findById(userId);

  const review = {
    content,
    user,
  };

  company.reviews = company.reviews.concat(review);

  company.save();
});

export default companiesRouter;
