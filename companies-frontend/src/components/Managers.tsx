import Manager from '../types/Manager';

const Managers = ({ managers }: { managers: Manager[] }) => {
  return (
    <div className="flex flex-col items-center gap-y-2 pt-24">
      {managers.map((manager) => (
        <div
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
