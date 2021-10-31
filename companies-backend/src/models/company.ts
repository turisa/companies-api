import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
  name: String,
  suffix: String,
  description: String,
  jobs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Job',
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

module.exports = Company;
