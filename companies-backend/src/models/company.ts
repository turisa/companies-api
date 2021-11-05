import mongoose from 'mongoose';

import { ICountry } from './country';
import { IJob } from './job';
import { IManager } from './manager';
import { IReview } from './review';

export interface ICompany extends mongoose.Document {
  name: string;
  description: string;

  country: ICountry;
  jobs: IJob[];
  managers: IManager[];
  reviews: IReview[];
}

const companySchema = new mongoose.Schema({
  name: String,
  description: String,

  country: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Country',
  },
  jobs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Job',
    },
  ],
  managers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Manager',
    },
  ],
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Review',
    },
  ],
});

companySchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();

    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Company: mongoose.Model<ICompany> = mongoose.model(
  'Company',
  companySchema
);

export default Company;
