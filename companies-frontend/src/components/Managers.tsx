import { useEffect, useState } from 'react';
import managersService from '../services/managersService';
import Manager from '../types/Manager';

const Managers = () => {
  const [managers, setManagers] = useState<Manager[]>([]);

  useEffect(() => {
    managersService.getAll().then((result) => setManagers(result));
  }, []);

  return (
    <div>
      <h2>Managers</h2>
      {managers.map((manager) => (
        <p>{manager.name}</p>
      ))}
    </div>
  );
};

export default Managers;
