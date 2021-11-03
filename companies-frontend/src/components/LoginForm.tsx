import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div className="flex justify-center h-screen items-center border-2">
      <div className="flex w-auto shadow-lg p-6 justify-center bg-white rounded-sm">
        <div className="flex flex-col">
          <div className="flex justify-start">
            <p className="text-2xl text-gray-600 font-bold text-center ">
              Log in
            </p>
          </div>
          <form className="flex flex-col mt-1">
            <div className="flex flex-col mt-3 justify-start">
              <input
                placeholder="Username"
                className="p-1 rounded-sm bg-gray-100"
                type="text"
                name="username"
              />
            </div>
            <div className="flex flex-col pt-3 w-64">
              <input
                className="p-1 rounded-sm bg-gray-100"
                placeholder="Password"
                type="password"
                name="password"
              />
            </div>
            <button className="mt-6 p-1 bg-indigo-400 text-white rounded-sm">
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
