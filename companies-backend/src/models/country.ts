import mongoose from 'mongoose';

const countrySchema = new mongoose.Schema({
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

const Country = mongoose.model('Country', countrySchema);

module.exports = Country;
