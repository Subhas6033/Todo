import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Button, Input } from "../index";

const Signup = () => {
  const { register, handleSubmit, reset } = useForm();
  const submitHandeler = async (data) => {
    try {
      await axios.post("TODO: my API endpoint goes here", {
        fullName: data.fullName,
        email: data.email,
        number: data.number,
        profileImage: data.profileImage,
        password: data.password,
      });
      reset();
      console.log("Successfully regestired", data);
    } catch (error) {
      console.log("Error while signup!!", error);
    }
  };

  return (
    <div className="min-h-fit flex justify-center items-center bg-slate-500 px-4 py-10">
      <form
        onSubmit={handleSubmit(submitHandeler)}
        className="w-full max-w-md bg-slate-900 rounded-xl shadow-lg p-8 space-y-5"
      >
        <h2 className="text-3xl font-bold text-white text-center">
          Create Account
        </h2>

        {/* Name */}
        <div className="space-y-1">
          <Input
            {...register("fullName")}
            id="name"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-600 bg-slate-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        {/* Email */}
        <div className="space-y-1">
          <Input
            {...register("email")}
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-600 bg-slate-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        {/* Number */}
        <div className="space-y-1">
          <Input
            {...register("number")}
            id="number"
            type="number"
            placeholder="Enter your mobile number"
            className="w-full px-4 py-2 border border-gray-600 bg-slate-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        {/* Profile Image */}
        <div className="space-y-1">
          <label className="text-sm text-gray-300" htmlFor="file">
            Profile Image
          </label>
          <Input
            {...register("profileImage")}
            id="file"
            type="file"
            className="w-full file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-amber-400 file:text-white hover:file:bg-amber-500"
          />
        </div>

        {/* Password */}
        <div className="space-y-1">
          <Input
            {...register("password")}
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-600 bg-slate-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        {/* Submit Button */}
        <Button
          children="Sign Up"
          className="w-full bg-amber-400 hover:bg-amber-500 text-black font-semibold py-2 rounded-lg transition duration-200 hover:cursor-pointer"
        />
        <p className="text-center">
          Already Have account?{" "}
          <Button className="px-3 py-2 ml-2">
            <Link to={"/login"}>login</Link>
          </Button>{" "}
        </p>
      </form>
    </div>
  );
};

export default Signup;
