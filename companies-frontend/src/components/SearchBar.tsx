import React, { useState } from 'react';

const SearchBar = ({
  onSubmit,
}: {
  onSubmit: (searchInput: string) => void;
}) => {
  const [input, setInput] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit(input);
  };

  return (
    <div className="flex rounded-sm items-center w-full xl:w-8/12 bg-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 ml-2 mr-2 text-gray-400 justify-start"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <form onSubmit={handleSubmit} className="flex flex-grow">
        <input
          onChange={handleInputChange}
          className="flex-grow mr-1 p-1 text-gray-400 rounded-md bg-white outline-none"
          type="text"
          value={input}
        ></input>
        <button
          type="submit"
          className="py-1 px-5 float-right rounded-sm bg-green-400 text-white shadow-sm"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
