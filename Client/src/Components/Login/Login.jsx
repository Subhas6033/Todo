import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Button, Input } from "../index";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();

  const submitHandeler = async (data) => {
    try {
      await axios.post("TODO: my api endpoint goes here ", {
        fullName: data.fullName,
        email: data.email,
        password: data.password,
      });
        reset();
        console.log("Successfully logged in!!", data)
    } catch (error) {
      console.log("Error while login!!", error);
    }
  };

  return (
    <div className="min-h-fit flex justify-center items-center bg-slate-500 px-4 py-10">
      <form
        onSubmit={handleSubmit(submitHandeler)}
        className="w-full max-w-md bg-slate-900 rounded-xl shadow-lg p-8 space-y-5"
      >
        <h2 className="text-3xl font-bold text-white text-center">
          Welcome Back
        </h2>

        {/* Name */}
        <div className="space-y-1">
          <Input
            {...register("fullName")}
            id="name"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-600 bg-slate-800 text-white rounded-lg focus:ring-2 focus:ring-amber-400"
          />
        </div>

        {/* Email */}
        <div className="space-y-1">
          <Input
            {...register("email")}
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-600 bg-slate-800 text-white rounded-lg focus:ring-2 focus:ring-amber-400"
          />
        </div>

        {/* Number */}
        <div className="space-y-1">
          <Input
            {...register("number")}
            id="number"
            type="number"
            placeholder="Enter your mobile number"
            className="w-full px-4 py-2 border border-gray-600 bg-slate-800 text-white rounded-lg focus:ring-2 focus:ring-amber-400"
          />
        </div>

        {/* Password */}
        <div className="space-y-1">
          <Input
            {...register("password")}
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-600 bg-slate-800 text-white rounded-lg focus:ring-2 focus:ring-amber-400"
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-amber-400 hover:bg-amber-500 text-black font-semibold py-2 rounded-lg transition duration-200 hover:cursor-pointer"
        >
          Login
        </Button>

        <p className="text-center text-white">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-amber-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
