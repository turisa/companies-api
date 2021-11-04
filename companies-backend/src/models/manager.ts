import mongoose from 'mongoose';
import { ICompany } from './company';

export interface IManager extends mongoose.Document {
  name: string;
  description: string;

  companies: ICompany[];
}

const managerSchema = new mongoose.Schema({
  name: String,
  description: String,

  companies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Company',
    },
  ],
});

managerSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();

    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Manager: mongoose.Model<IManager> = mongoose.model(
  'Manager',
  managerSchema
);

export default Manager;
