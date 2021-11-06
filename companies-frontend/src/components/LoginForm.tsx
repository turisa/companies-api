import React from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import loginService from '../services/login';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const credentials = { username, password };

    try {
      const user = await loginService.login(credentials);
      console.log(user);

      window.localStorage.setItem('loggedUser', JSON.stringify(user));

      history.push('/');
    } catch (error) {
      console.log(error); // todo
    }
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div className="flex justify-center h-screen items-center border-2">
      <div className="flex w-auto shadow-lg p-6 justify-center bg-white rounded-sm">
        <div className="flex flex-col">
          <div className="flex justify-start">
            <p className="text-2xl text-gray-600 font-bold text-center ">
              Log in
            </p>
          </div>
          <form className="flex flex-col mt-1" onSubmit={handleLogin}>
            <div className="flex flex-col mt-3 justify-start">
              <input
                placeholder="Username"
                className="p-1 rounded-sm bg-gray-100"
                type="text"
                name="username"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div className="flex flex-col pt-3 w-64">
              <input
                className="p-1 rounded-sm bg-gray-100"
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <button
              className="mt-6 p-1 bg-indigo-400 text-white rounded-sm"
              type="submit"
            >
              Submit
            </button>
          </form>
          <div className="flex justify-center">
            <Link to="/signup">
              <p className="text-sm pt-1 underline">Sign up</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
