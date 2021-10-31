import express from 'express';

import Country from '../models/country';

const countriesRouter = express.Router();

countriesRouter.get('/', async (request, response) => {
  const countries = await Country.find({}).populate('companies', {
    name: 1,
    suffix: 1,
    description: 1,
  });

  response.json(countries);
});

export default countriesRouter;
