import Company from './Company';

export default interface Job {
  name: string;
  description: string;
  company: Company[];
}
