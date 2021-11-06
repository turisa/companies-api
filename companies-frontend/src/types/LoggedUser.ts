import User from './User';

export default interface LoggedUser extends User {
  token: string;
}
