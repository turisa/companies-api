import express from 'express';

import Manager from '../models/manager';

const managersRouter = express.Router();

managersRouter.get('/', async (request, response) => {
  const name = request.query.name;

  const filterQuery = name
    ? { name: { $regex: name as string, $options: 'i' } }
    : {};

  const managers = await Manager.find(filterQuery).populate('companies', {
    name: 1,
    description: 1,
  });

  response.json(managers);
});

managersRouter.get('/:id', async (request, response, next) => {
  const id = request.params.id;

  try {
    const managers = await Manager.findById(id).populate('companies', {
      name: 1,
      description: 1,
    });

    response.json(managers);
  } catch (error) {
    next(error);
  }
});

export default managersRouter;
