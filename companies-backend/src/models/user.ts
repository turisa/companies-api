import mongoose from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';

import { ICompany } from './company';

export interface IUser extends mongoose.Document {
  username: string;
  name: string;
  passwordHash: string;

  reviews: {
    content: string;
    company: ICompany;
  };
}

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, minlength: 3 },
  name: String,
  passwordHash: String,

  companyReviews: [
    {
      content: {
        type: String,
      },
    },
    {
      company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    },
  ],
});

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();

    delete returnedObject._id;
    delete returnedObject.__v;

    delete returnedObject.passwordHash;
  },
});

userSchema.plugin(mongooseUniqueValidator);

const User: mongoose.Model<IUser> = mongoose.model('User', userSchema);

export default User;
