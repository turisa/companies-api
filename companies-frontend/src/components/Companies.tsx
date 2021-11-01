import { useEffect, useState } from 'react';

import Company from '../types/Company';

import companiesService from '../services/companiesService';

const Companies = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  useEffect(() => {
    companiesService.getAll().then((companies) => setCompanies(companies));
  }, []);

  return (
    <div>
      {companies.map((company) => (
        <p>{company.name}</p>
      ))}
    </div>
  );
};

export default Companies;
