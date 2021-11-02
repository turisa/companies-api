import { useState, useEffect } from 'react';

import Manager from '../types/Manager';
import managersService from '../services/managersService';
import { useHistory } from 'react-router';

const Managers = () => {
  const [managers, setManagers] = useState<Manager[]>([]);
  const history = useHistory();

  useEffect(() => {
    managersService.getAll().then((result) => setManagers(result));
  }, []);

  const viewDetails = (id: string) => {
    history.push(`managers/${id}`);
  };

  return (
    <div className="flex flex-col items-center gap-y-2 pt-24">
      {managers.map((manager) => (
        <div
          onClick={() => viewDetails(manager.id)}
          className="grid grid-cols-2 w-8/12 xl:w-1/3 p-3 bg-white shadow-sm max-h-32 transition ease-linear duration-100 hover:shadow-md"
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
