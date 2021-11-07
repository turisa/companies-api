import express from 'express';
import User from '../models/user';
import Company from '../models/company';
import Review from '../models/review';

const reviewsRouter = express.Router();

reviewsRouter.post('/', async (request, response) => {
  const { content, companyId } = request.body;
  const userId = request.token.id;

  const user = await User.findById(userId);
  const company = await Company.findById(companyId);

  if (!company) {
    return response.status(404).end();
  }

  const reviewObject = {
    content,
  };

  const review = new Review(reviewObject);

  review.company = company;
  review.user = user;

  const createdReview = await review.save();
  const result = await createdReview.populate('user');

  await Company.findByIdAndUpdate(companyId, { $push: { reviews: review } });

  console.log(result);
  response.status(201).json(result);
});

reviewsRouter.put('/:id', async (request, response) => {
  const reviewId = request.params.id;
  const userId = request.token.id;

  const review = await Review.findById(reviewId);

  if (review.deleted) {
    return response.status(404).end();
  }

  if (review.user.id.toString('hex') !== userId) {
    return response.status(401).json({
      error: 'User is not the owner',
    });
  }

  const newContent: string = request.body.content;
  review.content = newContent;

  const result = await review.save();

  response.status(200).json(result);
});

reviewsRouter.delete('/:id', async (request, response) => {
  const reviewId = request.params.id;
  const userId = request.token.id;

  const review = await Review.findById(reviewId);

  if (review)
    if (review.user.id.toString('hex') !== userId) {
      return response.status(401).json({
        error: 'User is not the owner',
      });
    }

  review.deleted = true;
  await review.save();

  return response.status(204).end();
});

export default reviewsRouter;
