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

countriesRouter.get('/:id', async (request, response) => {
  const id = request.params.id;

  const country = await Country.findById(id).populate('companies', {
    name: 1,
    description: 1,
  });

  response.json(country);
});

export default countriesRouter;
