import User from '../models/user';
import Company from '../models/company';
import Country, { ICountry } from '../models/country';
import Job from '../models/job';
import Manager from '../models/manager';

import companyObjects from '../utils/db_helper_data/companies';
import countryObjects from '../utils/db_helper_data/countries';
import jobObjects from '../utils/db_helper_data/jobs';
import managerObjects from '../utils/db_helper_data/managers';

export const clearDb = async () => {
  await User.deleteMany({});
  await Country.deleteMany({});
  await Company.deleteMany({});
  await Job.deleteMany({});
  await Manager.deleteMany({});
};

export const populateDb = async () => {
  const countries = countryObjects.map((countryObject) => {
    const country = new Country(countryObject);

    return country;
  });

  const companies = companyObjects.map((companyObject, companyIndex) => {
    companyObject.description += '.';
    const company = new Company(companyObject);

    const countryIndex = companyIndex % 10;
    company.country = countries[countryIndex];

    countries[countryIndex].companies =
      countries[countryIndex].companies.concat(company);

    return company;
  });

  const jobs = jobObjects.map((jobObject, jobIndex) => {
    const job = new Job(jobObject);

    const companyIndex = jobIndex % 100;
    job.company = companies[companyIndex];

    companies[companyIndex].jobs = companies[companyIndex].jobs.concat(job);

    return job;
  });

  const managers = managerObjects.map((managerObject, managerIndex) => {
    const manager = new Manager(managerObject);

    const companyIndex = managerIndex % 100;
    manager.companies = manager.companies.concat(companies[companyIndex]);

    companies[companyIndex].managers =
      companies[companyIndex].managers.concat(manager);

    return manager;
  });

  await Promise.all(countries.map((country) => country.save()));
  await Promise.all(companies.map((company) => company.save()));
  await Promise.all(jobs.map((job) => job.save()));
  await Promise.all(managers.map((manager) => manager.save()));
};
