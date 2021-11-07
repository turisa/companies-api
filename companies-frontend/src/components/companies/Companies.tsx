import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

import Company from '../../types/Company';
import companiesService from '../../services/companies';
import SearchBar from '../shared/SearchBar';

const Companies = ({ token }: { token: string }) => {
  const [companies, setCompanies] = useState<Company[]>([]);

  const history = useHistory();

  const searchCompanies = (searchInput: string) => {
    companiesService
      .getAll(token, { name: searchInput })
      .then((result: Company[]) => {
        setCompanies(result);
      });
  };

  const viewDetails = (id: string) => {
    history.push(`companies/${id}`);
  };

  useEffect(() => {
    companiesService.getAll(token).then((result: Company[]) => {
      setCompanies(result);
    });
  }, []);

  return (
    <div className="flex flex-col items-center gap-y-2 mt-3">
      <SearchBar onSubmit={searchCompanies} />

      {companies.map((company) => (
        <div
          onClick={() => viewDetails(company.id)}
          className="grid grid-cols-4 w-full xl:w-8/12 p-3 bg-white shadow-sm max-h-32 transition ease-linear duration-100 hover:shadow-md"
          key={company.id}
        >
          <h2 className="text-gray-500">{company.name}</h2>
          <div>
            <p className="text-gray-400 text-sm">
              {company.managers.length} managers
            </p>
          </div>
          <div className="text-gray-400 text-sm">
            {company.jobs.length} jobs available
          </div>
          <div className="text-gray-400 text-sm">{company.country.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Companies;
