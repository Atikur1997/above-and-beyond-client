"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Register() {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      {/* Main Container Animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="hero"
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl font-bold">Create an Account</h1>
            <p className="py-6 max-w-md">
              Join us today and explore premium features with a seamless
              experience. Already have an account?
              <Link href="/login" className="link link-primary ml-1">
                Login
              </Link>
            </p>
          </motion.div>

          {/* Register Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="card bg-base-100 w-full max-w-sm shadow-2xl"
          >
            <div className="card-body">
              <fieldset className="fieldset space-y-2">
                {/* Name */}
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="Enter your name"
                />

                {/* Email */}
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input input-bordered"
                  placeholder="Enter your email"
                />

                {/* Password */}
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input input-bordered"
                  placeholder="Enter password"
                />

                {/* Confirm Password */}
                <label className="label">Confirm Password</label>
                <input
                  type="password"
                  className="input input-bordered"
                  placeholder="Confirm password"
                />

                {/* Submit Button */}
                <button className="btn btn-neutral mt-4 w-full">
                  Register
                </button>

                <div className="text-sm text-center mt-2">
                  Already have an account?{" "}
                  <Link href="/login" className="link link-primary">
                    Login
                  </Link>
                </div>
              </fieldset>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
