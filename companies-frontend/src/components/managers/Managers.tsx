import { useState, useEffect } from 'react';

import Manager from '../../types/Manager';
import managersService from '../../services/managers';
import { useHistory } from 'react-router';
import SearchBar from '../shared/SearchBar';

const Managers = () => {
  const [managers, setManagers] = useState<Manager[]>([]);
  const history = useHistory();

  const searchJobs = (searchInput: string) => {
    managersService.getAll({ name: searchInput }).then((response) => {
      setManagers(response);
    });
  };

  const viewDetails = (id: string) => {
    history.push(`managers/${id}`);
  };

  useEffect(() => {
    managersService.getAll().then((result) => setManagers(result));
  }, []);

  return (
    <div className="flex flex-col items-center gap-y-2 pt-24">
      <SearchBar onSubmit={searchJobs} />
      {managers.map((manager) => (
        <div
          onClick={() => viewDetails(manager.id)}
          className="grid grid-cols-2 w-full xl:w-8/12 p-3 bg-white shadow-sm max-h-32 transition ease-linear duration-100 hover:shadow-md"
          key={manager.id}
        >
          <h2 className="text-gray-500">{manager.name}</h2>
          <div className="text-gray-400 text-sm">
            <p>{manager.companies.length} companies</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Managers;
