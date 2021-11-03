import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import Country from '../types/Country';
import countriesService from '../services/countries';

const CountryDetail = () => {
  const [country, setCountry] = useState<Country>();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    countriesService.get(id).then((result) => {
      setCountry(result);
    });
  }, [id, country]);

  return country ? (
    <div className="flex w-screen justify-center">
      <div className="w-2/4 mt-24 bg-white px-3 pt-3 pb-6 h-full">
        <div className="flex justify-center">
          <div></div>
          <p className="text-xl text-gray-500 p-3">{country.name}</p>
        </div>

        <div className="flex flex-col bg-white">
          <div className="flex flex-col h-1/2">
            <p className="pl-3 pb-2 my-3 text-gray-500  border-gray-300 border-b-2">
              Companies
            </p>
            <div className="flex flex-col">
              {country.companies.map((company) => (
                <p className="text-sm px-3 py-1 text-gray-400">
                  {company.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default CountryDetail;
