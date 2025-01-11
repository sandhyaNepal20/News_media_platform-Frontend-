import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#101F3F]">
      <div className="flex w-full max-w-screen-lg">
        {/* Left Side: Logo */}
        <div className="flex-1 flex justify-center items-center">
          <img src="src/assets/logo.png" alt="Logo" className="w-200" />
        </div>

        {/* Right Side: Form */}
        <div className="flex-1 flex justify-center">
          <form className="bg-[#101F3F] p-6 rounded-lg shadow-xl w-full max-w-sm">
            {/* Email Field */}
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="name@gmail.com"
                required
              />
            </div>

            {/* Password Field */}
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center mb-5">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              />
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-white"
              >
                Remember me
              </label>
            </div>

            {/* Login Button */}
            <div className="mt-5 text-center">
              <button
                type="submit"
                className="text-black bg-blue-700 hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 text-center"
              >
                Login
              </button>
            </div>

            <div className="mt-4 text-center">
              <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
                Don't have an account? SignUp
              </a>
            </div>

            {/* Forgot Password Link */}
            <div className="mt-4 text-center">
              <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
                Forgot password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
