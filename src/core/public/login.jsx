import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUser } from "./query";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const loginApi = useLoginUser();
  const navigate = useNavigate();

  const submit = (data) => {
    console.log(data);
    loginApi.mutate(data, {
      onSuccess: (res) => {
        alert("Login successful!");
        console.log("Login Response:", res);

        // Store login state
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userData", JSON.stringify(res.data.user));

        // Dispatch event to update Navbar dynamically
        window.dispatchEvent(new Event("storage"));

        navigate("/");
      },
      onError: (error) => {
        console.error("Login Error:", error.response?.data);
        alert(`Error: ${error.response?.data?.message || "Invalid credentials"}`);
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#101F3F]">
      <div className="flex w-full max-w-screen-lg">
        {/* Left Side: Logo */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src="src/assets/logo.png"
            alt="Logo"
            className="w-[200px] sm:w-[250px] md:w-[300px]"
          />
        </div>

        {/* Right Side: Form */}
        <div onSubmit={handleSubmit(submit)} className="flex-1 flex justify-center">
          <form className="bg-[#101F3F] p-6 rounded-lg shadow-xl w-full max-w-md h-[400px] mt-10 shadow-[10px_8px_4px_0px_rgba(255, 253, 231, 0.8)]">
            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email</label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-300 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="name@gmail.com"
                required {...register("email", { required: "Email is required" })}
              />
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
              <input
                type="password"
                id="password"
                className="shadow-sm bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required {...register("password", { required: "Password is required" })}
              />
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center mb-4">
              <input type="checkbox" id="remember" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" />
              <label htmlFor="remember" className="ml-2 text-sm font-medium text-white">Remember me</label>
            </div>

            {/* Login Button */}
            <div className="mt-4 text-center">
              <button type="submit" className="text-black bg-white hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 text-center border-2 border-transparent hover:border-black">
                Login
                {loginApi.isLoading}
              </button>
            </div>

            <div className="mt-4 text-center">
              <a href="#" className="text-sm font-medium text-white">Don't have an account? </a>
              <Link to="/register" className="text-sm font-medium text-white hover:underline">SignUp</Link>
            </div>

            {/* Forgot Password Link */}
            <div className="mt-4 text-center">
              <a href="#" className="text-sm font-medium text-white hover:underline">Forgot password?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
