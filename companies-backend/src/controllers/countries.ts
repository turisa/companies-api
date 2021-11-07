import express from 'express';

import Country from '../models/country';

const countriesRouter = express.Router();

countriesRouter.get('/', async (request, response) => {
  const name = request.query.name;

  const filterQuery = name
    ? { name: { $regex: name as string, $options: 'i' } }
    : {};

  const countries = await Country.find(filterQuery).populate('companies', {
    name: 1,
    suffix: 1,
    description: 1,
  });

  response.json(countries);
});

countriesRouter.get('/:id', async (request, response, next) => {
  const id = request.params.id;

  try {
    const country = await Country.findById(id).populate('companies', {
      name: 1,
      description: 1,
    });

    response.json(country);
  } catch (error) {
    next(error);
  }
});

export default countriesRouter;
