import Company from './Company';

export default interface Manager {
  id: string;
  name: string;
  description: string;
  companies: Company[];
}
