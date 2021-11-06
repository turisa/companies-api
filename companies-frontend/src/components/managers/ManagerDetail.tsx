import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import Manager from '../../types/Manager';
import managersService from '../../services/managers';

const ManagerDetail = ({ token }: { token: string }) => {
  const [manager, setManager] = useState<Manager>();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    managersService.get(id, token).then((result: Manager) => {
      console.log(manager);
      setManager(result);
    });
  }, []);

  return manager ? (
    <div className="flex w-screen justify-center">
      <div className="w-2/4 mt-24 bg-white px-3 pt-3 pb-6 h-full">
        <div className="flex justify-center">
          <div></div>
          <p className="text-xl text-gray-500 p-3">{manager.name}</p>
        </div>
        <p className="text-sm px-3 text-gray-400">{manager.description}</p>
        <div className="flex flex-col bg-white">
          <div className="flex flex-col h-1/2">
            <p className="pl-3 pb-2 my-3 text-gray-500  border-gray-300 border-b-2">
              Companies
            </p>
            <div className="flex flex-col">
              {manager.companies.map((company) => (
                <p key={company.id} className="text-sm px-3 py-1 text-gray-400">
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

export default ManagerDetail;
