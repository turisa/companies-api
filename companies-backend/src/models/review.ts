import mongoose from 'mongoose';

import { ICompany } from './company';
import { IUser } from './user';

export interface IReview extends mongoose.Document {
  content: string;
  deleted: boolean;

  company: ICompany;
  user: IUser;
}

const reviewSchema = new mongoose.Schema({
  content: String,
  deleted: { type: Boolean, default: false },

  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

reviewSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();

    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Review: mongoose.Model<IReview> = mongoose.model('Review', reviewSchema);

export default Review;
