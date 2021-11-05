import mongoose from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';

export interface IUser extends mongoose.Document {
  username: string;
  name: string;
  passwordHash: string;
}

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, minlength: 3 },
  name: String,
  passwordHash: String,
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
