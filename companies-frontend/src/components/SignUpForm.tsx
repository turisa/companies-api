import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';

import usersService from '../services/users';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const userObject = { name, username, password };

    try {
      await usersService.create(userObject);

      history.push('/login');
    } catch (error) {
      console.log(error);
    }
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  return (
    <div className="flex flex-col justify-center h-screen items-center border-2">
      <div className="flex w-auto shadow-lg p-6 justify-center bg-white rounded-sm">
        <div className="flex flex-col">
          <div className="flex justify-start">
            <p className="text-2xl text-gray-600 font-bold text-center ">
              Sign up
            </p>
          </div>
          <form className="flex flex-col mt-1" onSubmit={handleSignup}>
            <div className="flex flex-col mt-3 justify-start">
              <input
                placeholder="Name"
                className="p-1 rounded-sm bg-gray-100"
                type="text"
                name="name"
                onChange={handleNameChange}
                value={name}
              />
            </div>
            <div className="flex flex-col mt-3 justify-start">
              <input
                placeholder="Username"
                className="p-1 rounded-sm bg-gray-100"
                type="text"
                name="username"
                onChange={handleUsernameChange}
                value={username}
              />
            </div>
            <div className="flex flex-col pt-3 w-64">
              <input
                className="p-1 rounded-sm bg-gray-100"
                placeholder="Password"
                type="password"
                name="password"
                onChange={handlePasswordChange}
                value={password}
              />
            </div>
            <button className="mt-6 p-1 bg-indigo-400 text-white rounded-sm">
              Submit
            </button>
          </form>
          <div className="flex justify-center">
            <Link to="/login">
              <p className="text-sm pt-1 underline">Log in</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
