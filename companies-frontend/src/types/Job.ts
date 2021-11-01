import Company from './Company';

export default interface Job {
  id: string;
  name: string;
  description: string;
  company: Company[];
}
