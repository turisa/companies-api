import mongoose from 'mongoose';
import { ICompany } from './company';

export interface IJob extends mongoose.Document {
  name: string;
  description: string;

  company: ICompany;
}

const jobSchema = new mongoose.Schema({
  name: String,
  description: String,
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
  },
});

jobSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();

    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Job: mongoose.Model<IJob> = mongoose.model('Job', jobSchema);

export default Job;
