import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeLinkId, setActiveLinkId] = useState<string>('companies');

  const handleLinkClick: React.MouseEventHandler<HTMLParagraphElement> = (
    event
  ) => {
    const target = event.target as HTMLElement;

    setActiveLinkId(target.id);
  };

  const getLinkStyle = (id: string) => {
    return activeLinkId !== id
      ? 'text-indigo-200 hover:text-white'
      : 'text-white';
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-indigo-500 p-6 shadow-lg fixed w-screen pl-48 pr-48">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
          />
        </svg>
        <span className="font-semibold text-xl tracking-tight">
          Companies API
        </span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link to="/companies">
            <p
              onClick={handleLinkClick}
              id="companies"
              className={`block mt-4 lg:inline-block lg:mt-0 ${getLinkStyle(
                'companies'
              )} mr-4`}
            >
              Companies
            </p>
          </Link>
          <Link to="/countries">
            <p
              onClick={handleLinkClick}
              id="countries"
              className={`block mt-4 lg:inline-block lg:mt-0 ${getLinkStyle(
                'countries'
              )} mr-4`}
            >
              Countries
            </p>
          </Link>
          <Link to="/jobs">
            <p
              onClick={handleLinkClick}
              id="jobs"
              className={`block mt-4 lg:inline-block lg:mt-0 ${getLinkStyle(
                'jobs'
              )} mr-4`}
            >
              Jobs
            </p>
          </Link>
          <Link to="/managers">
            <p
              onClick={handleLinkClick}
              id="managers"
              className={`block mt-4 lg:inline-block lg:mt-0 ${getLinkStyle(
                'managers'
              )} mr-4`}
            >
              Managers
            </p>
          </Link>
        </div>
        <div>
          <a
            href="#"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-indigo-500 hover:bg-white mt-4 lg:mt-0"
          >
            Log out
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
