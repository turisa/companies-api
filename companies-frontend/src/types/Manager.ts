import Company from './Company';

export default interface Manager {
  name: string;
  description: string;
  companies: Company[];
}
