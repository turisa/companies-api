import { useState, useEffect } from 'react';

import Country from '../../types/Country';
import countriesService from '../../services/countries';
import { useHistory } from 'react-router';
import SearchBar from '../shared/SearchBar';

const Countries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const history = useHistory();

  const searchCountries = (searchInput: string) => {
    const userJSON = window.localStorage.getItem('loggedUser');

    if (userJSON) {
      const user = JSON.parse(userJSON);
      const token = user.token;

      countriesService
        .getAll(token, { name: searchInput })
        .then((result: Country[]) => {
          setCountries(result);
        });
    }
  };

  const viewDetails = (id: string) => {
    history.push(`companies/${id}`);
  };

  useEffect(() => {
    const userJSON = window.localStorage.getItem('loggedUser');

    if (userJSON) {
      const user = JSON.parse(userJSON);
      const token = user.token;

      countriesService.getAll(token).then((result: Country[]) => {
        setCountries(result);
      });
    }
  }, []);

  return (
    <div className="flex flex-col items-center gap-y-2 pt-24">
      <SearchBar onSubmit={searchCountries} />
      {countries.map((country) => (
        <div
          onClick={() => viewDetails(country.id)}
          className="grid grid-cols-2  w-full xl:w-8/12 p-3 bg-white shadow-sm max-h-32 transition ease-linear duration-100 hover:shadow-md"
          key={country.id}
        >
          <h2 className="text-gray-500">{country.name}</h2>
          <div className="text-gray-400 text-sm">
            {country.companies.length} companies
          </div>
        </div>
      ))}
    </div>
  );
};

export default Countries;
