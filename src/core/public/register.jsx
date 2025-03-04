import React from "react";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useRegisterUser } from "./query";

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const saveApi = useRegisterUser();

  const submit = (data) => {
    const formData = new FormData();
    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("password", data.password);

    console.log("Form Data before sending:", Object.fromEntries(formData.entries()));

    saveApi.mutate(data, {
      onSuccess: () => {
        alert("Registration successful!");
      },
      onError: (error) => {
        console.error("Error Response:", error.response?.data);
        alert(`Error: ${error.response?.data?.message || "Something went wrong"}`);
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
            className="w-[200px] sm:w-[250px] md:w-[300px]" // Responsive logo size
          />
        </div>

        {/* Right Side: Form */}
        <div onSubmit={handleSubmit(submit)} className="flex-1 flex justify-center">
          <form className="bg-[#101F3F] p-6 rounded-lg shadow-xl w-full max-w-md h-[400px] mt-10 shadow-[10px_8px_4px_0px_rgba(255, 253, 231, 0.8)]">
            {/* Name Field */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-white"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow-sm bg-gray-300 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter your FullName"
                required {...register("fullName", { required: "Full Name is required" })} />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-300 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="name@gmail.com"
                required {...register("email", { required: "Email is required" })} />
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="shadow-sm bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required {...register("password", { required: "Password is required" })} />
            </div>

            {/* Confirm Password Field */}
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block mb-2 text-sm font-medium text-white"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="shadow-sm bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              // required
              />
            </div>

            {/* Register Button */}
            <div className="mt-4 text-center">
              <button
                type="submit"
                className="text-black bg-white hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 text-center border-2 border-transparent hover:border-black"
              >
                Register
                {saveApi.isLoading}
              </button>
            </div>

            <div className="mt-4 text-center">
              <a href="#" className="text-sm font-medium text-white">
                Already have an account?
              </a>
              <Link to="/login" className="text-sm font-medium text-white hover:underline">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
