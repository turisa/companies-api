import Country from '../types/Country';

const Countries = ({ countries }: { countries: Country[] }) => {
  return (
    <div className="flex flex-col gap-y-2 pt-24">
      {countries.map((country) => (
        <div
          className="ml-48 mr-48 p-3 bg-white shadow-lg max-h-32"
          key={country.id}
        >
          <h2 className="font-bold text-gray-500">{country.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Countries;
