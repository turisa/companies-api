import express from 'express';

import Manager from '../models/manager';

const managerRouter = express.Router();

managerRouter.get('/', async (request, response) => {
  const name = request.query.name;
  const filterQuery = name ? { name: { $regex: name, $options: 'i' } } : {};

  const managers = await Manager.find(filterQuery).populate('companies', {
    name: 1,
    suffix: 1,
    description: 1,
  });

  response.json(managers);
});

managerRouter.get('/:id', async (request, response) => {
  const id = request.params.id;

  const managers = await Manager.findById(id).populate('companies', {
    name: 1,
    suffix: 1,
    description: 1,
  });

  response.json(managers);
});

export default managerRouter;
