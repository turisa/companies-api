import mongoose from 'mongoose';
import { ICompany } from './company';

export interface ICountry extends mongoose.Document {
  name: string;

  companies: ICompany[];
}

export const countrySchema = new mongoose.Schema({
  name: String,
  companies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Company',
    },
  ],
});

countrySchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();

    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Country: mongoose.Model<ICountry> = mongoose.model(
  'Country',
  countrySchema
);

export default Country;
