"use client";
export const dynamic = "force-dynamic";

import React from "react";
import { useForm } from "react-hook-form";
import { useAuthContext } from "../context/AuthContext";
import Link from "next/link";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
export default function Page() {
  const { register, handleSubmit } = useForm();
  const { LogInUser } = useAuthContext();

  const handleLogin = (data) => {
    LogInUser(data.email, data.password).then(() => {});
  };

  return (
    <div className="min-h-screen w-full relative flex items-center justify-center bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e] overflow-hidden px-4">
      {/* Floating gradient circles */}
      <motion.div
        className="absolute w-96 h-96 bg-pink-500 rounded-full blur-[140px] top-10 left-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-purple-600 rounded-full blur-[140px] bottom-10 right-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
      />

      {/* Glassmorphic Card */}
      <motion.div
        className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl z-10"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Title */}
        <motion.h1
          className="text-4xl font-extrabold text-white text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Welcome Back 👋
        </motion.h1>

        <p className="text-gray-300 text-center mb-6 text-sm">
          Log in to continue. Don’t have an account?{" "}
          <Link href="/register" className="text-purple-400 hover:underline">
            Register
          </Link>
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
          {/* Email */}
          <div className="flex flex-col space-y-1">
            <label className="text-gray-200 text-sm font-medium">Email</label>
            <input
              {...register("email")}
              type="email"
              className="input w-full h-14 bg-white/20 text-white border-white/30 rounded-xl px-4 focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col space-y-1">
            <label className="text-gray-200 text-sm font-medium">
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              className="input w-full h-14 bg-white/20 text-white border-white/30 rounded-xl px-4 focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
              placeholder="Enter your password"
            />
          </div>

          {/* Forgot password */}
          <div className="text-right -mt-2">
            <a className="text-gray-300 text-sm hover:text-purple-300 cursor-pointer">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn bg-purple-600 hover:bg-purple-700 text-white w-full h-14 rounded-xl shadow-lg mt-2"
          >
            Login
          </motion.button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-white/20" />
          <span className="px-2 text-gray-300 text-sm">Or login with</span>
          <hr className="flex-grow border-white/20" />
        </div>

        {/* Social Buttons */}
        <div className="flex flex-col gap-3">
          {/* Google */}
          <p className="btn btn-outline text-white hover:text-black">
            <FcGoogle /> Login with Google
          </p>
        </div>

        <p className="text-gray-400 text-center text-sm mt-4">
          Don't have an account?{" "}
          <Link href="/register" className="text-purple-400 hover:underline">
            Register here
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
