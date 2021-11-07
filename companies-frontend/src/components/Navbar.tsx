import { Link, useRouteMatch } from 'react-router-dom';
import { useHistory } from 'react-router';

const Navbar = ({
  token,
  setToken,
}: {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  const history = useHistory();

  const links = [
    {
      to: '/companies',
      match: useRouteMatch('/companies'),
      content: 'Companies',
    },
    {
      to: '/countries',
      match: useRouteMatch('/countries'),
      content: 'Countries',
    },
    {
      to: '/jobs',
      match: useRouteMatch('/jobs'),
      content: 'Jobs',
    },
    {
      to: '/managers',
      match: useRouteMatch('/managers'),
      content: 'Managers',
    },
  ];

  const logout = () => {
    setToken(null);
    window.localStorage.removeItem('loggedCompanyAPIUser');
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-indigo-500 p-6 shadow-lg w-screen xl:pl-48 xl:pr-48">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          Companies API
        </span>
      </div>
      {token ? (
        <div className="w-full md:block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            {links.map((link) => (
              <Link key={link.to} to={link.to}>
                <p
                  id="companies"
                  className={`block mt-4 lg:inline-block lg:mt-0 mr-4 ${
                    link.match
                      ? 'text-white'
                      : 'text-indigo-200 hover:text-white'
                  }`}
                >
                  {link.content}
                </p>
              </Link>
            ))}
          </div>
          <div>
            <button
              onClick={logout}
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white transition ease-linear duration-100 hover:border-transparent hover:text-teal-500 hover:bg-white hover:text-indigo-500 mt-4 lg:mt-0"
            >
              Log out
            </button>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
