import Manager from '../types/Manager';

const Managers = ({ managers }: { managers: Manager[] }) => {
  return (
    <div className="flex flex-col gap-y-2 pt-24">
      {managers.map((manager) => (
        <div
          className="ml-48 mr-48 p-3 bg-white shadow-lg max-h-32"
          key={manager.id}
        >
          <h2 className="font-bold text-gray-500">{manager.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Managers;
