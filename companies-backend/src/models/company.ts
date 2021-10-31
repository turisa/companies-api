import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
  name: String,
  description: String,
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
});

companySchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();

    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Company = mongoose.model('Company', companySchema);

export default Company;
