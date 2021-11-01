import Company from './Company';

export default interface Country {
  id: string;
  name: string;
  companies: Company[];
}
