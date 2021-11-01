import { useEffect, useState } from 'react';

import Country from '../types/Country';
import countriesService from '../services/countriesService';

const Countries = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    countriesService.getAll().then((result) => setCountries(result));
  }, []);

  return (
    <div>
      {countries.map((country) => (
        <p>{country.name}</p>
      ))}
    </div>
  );
};

export default Countries;
