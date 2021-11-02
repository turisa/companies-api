import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

import Company from '../types/Company';
import companiesService from '../services/companiesService';
import SearchBar from './SearchBar';

const Companies = () => {
  const [companies, setCompanies] = useState<Company[]>([]);

  const history = useHistory();

  const viewDetails = (id: string) => {
    history.push(`companies/${id}`);
  };

  const searchCompanies = (searchInput: string) => {
    companiesService.getAll({ name: searchInput }).then((response) => {
      setCompanies(response);
    });
  };

  useEffect(() => {
    companiesService.getAll().then((result) => setCompanies(result));
  }, []);

  return (
    <div className="flex flex-col items-center gap-y-2 pt-24">
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
          <div className="flex items-center gap-x-1 text-  text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-red-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            {company.country.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Companies;
