import Country from '../types/Country';

const Countries = ({ countries }: { countries: Country[] }) => {
  return (
    <div className="flex flex-col items-center gap-y-2 pt-24">
      {countries.map((country) => (
        <div
          className="grid grid-cols-2 w-8/12 xl:w-3/12 p-3 bg-white shadow-sm max-h-32 transition ease-linear duration-100 hover:shadow-md"
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
