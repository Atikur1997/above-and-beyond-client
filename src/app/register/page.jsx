"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { useAuthContext } from "./../context/AuthContext";
import { updateProfile } from "firebase/auth";

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { user, registerUser, setUser } = useAuthContext();
  const password = watch("password");

  const handleRegister = (data) => {
    const { name, email, password } = data;

    // Register user with Firebase
    registerUser(email, password)
      .then((userCredential) => {
        const currentUser = userCredential.user;
        console.log(currentUser);

        // Update displayName
        updateProfile(currentUser, { displayName: name })
          .then(() => {
            console.log("Display name updated:", currentUser.displayName);
            // Update context state
            setUser({ ...currentUser });
          })
          .catch((error) => {
            console.error("Error updating display name:", error);
          });
      })
      .catch((error) => {
        console.error("Registration error:", error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e] px-4 relative overflow-hidden">
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
        <motion.h1
          className="text-4xl font-extrabold text-white text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Create Account ✨
        </motion.h1>

        <p className="text-gray-300 text-center mb-6 text-sm">
          Join us today! Already have an account?{" "}
          <Link href="/login" className="text-purple-400 hover:underline">
            Login
          </Link>
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
          {/* Name */}
          <div className="flex flex-col space-y-1">
            <label className="text-gray-200 text-sm font-medium">Name</label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              placeholder="Enter your name"
              className="input w-full h-14 bg-white/20 text-white border-white/30 rounded-xl px-4 focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col space-y-1">
            <label className="text-gray-200 text-sm font-medium">Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Invalid email address",
                },
              })}
              type="email"
              placeholder="Enter your email"
              className="input w-full h-14 bg-white/20 text-white border-white/30 rounded-xl px-4 focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col space-y-1">
            <label className="text-gray-200 text-sm font-medium">
              Password
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              type="password"
              placeholder="Enter password"
              className="input w-full h-14 bg-white/20 text-white border-white/30 rounded-xl px-4 focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col space-y-1">
            <label className="text-gray-200 text-sm font-medium">
              Confirm Password
            </label>
            <input
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              type="password"
              placeholder="Confirm password"
              className="input w-full h-14 bg-white/20 text-white border-white/30 rounded-xl px-4 focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn bg-purple-600 hover:bg-purple-700 text-white w-full h-14 rounded-xl shadow-lg mt-2"
          >
            Register
          </motion.button>
        </form>

        {/* Google Register */}
        <button className="btn btn-outline w-full mt-5 rounded-2xl text-white hover:text-black flex items-center justify-center gap-2">
          <FcGoogle className="w-6 h-6" /> Register with Google
        </button>

        {/* Already have account */}
        <p className="text-gray-400 text-center text-sm mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-purple-400 hover:underline">
            Login here
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
