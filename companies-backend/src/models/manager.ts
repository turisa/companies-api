import mongoose from 'mongoose';

const managerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  description: String,
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
  },
});

managerSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();

    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Manager = mongoose.model('Manager', managerSchema);

export default Manager;
