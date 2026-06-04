"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { FcGoogle } from "react-icons/fc";

interface FormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

const Login = () => {
  const [showPassword, setShowPassword] =
    useState<boolean>(false);

  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, checked } =
      e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };

  const handleSubmit = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    console.log("Login Data:", formData);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2">
        
        {/* LEFT SIDE IMAGE */}
        <div className="hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1701665836468-4346c4d0d574?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Agriculture"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="px-7 py-8 md:px-10 md:py-10 flex flex-col justify-center">
          
          {/* CUSTOM LOGO */}
          <Link href="/">
            <Logo textColor="#000" size={48}/>
          </Link>

          {/* HEADING */}
          <div className="my-6">
            <h2 className="text-4xl md:text-5xl leading-tight font-cottorway text-gray-900">
              Welcome Back!
            </h2>

            <p className="text-gray-500 mt-2 text-sm md:text-base">
              Login to continue managing your crops and farm activities.
            </p>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            
            {/* EMAIL */}
            <div>
              <label className="block mb-2 text-sm font-cottorway font-semibold text-gray-800">
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full h-12 rounded-xl border border-gray-200 pl-12 pr-4 outline-none focus:border-primary transition"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block mb-2 text-sm font-cottorway font-semibold text-gray-800">
                Password
              </label>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full h-12 rounded-xl border border-gray-200 pl-12 pr-14 outline-none focus:border-primary transition"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>
              </div>
            </div>

            {/* REMEMBER ME + FORGOT PASSWORD */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-gray-300 accent-green-600"
                />

                Remember Me
              </label>

              <Link href="/forgot-password" className="text-primary text-sm hover:underline">Forgot Password?</Link>
            </div>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="w-full h-12 rounded-xl bg-linear-to-t from-black to-gray-600 text-white font-medium hover:opacity-95 cursor-pointer transition"
            >
              Login
            </button>

            {/* DIVIDER */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-[1px] bg-gray-200"></div>

              <span className="text-xs text-gray-400">
                OR
              </span>

              <div className="flex-1 h-[1px] bg-gray-200"></div>
            </div>

            {/* GOOGLE LOGIN */}
            <button
              type="button"
              className="w-full h-12 rounded-xl border border-gray-200 flex items-center justify-center gap-3 hover:bg-gray-100 cursor-pointer transition"
            >
              <FcGoogle size={26}/>

              <span className="text-sm font-medium text-gray-700">
                Login with Google
              </span>
            </button>

            {/* REGISTER LINK */}
            <p className="text-center text-sm text-gray-500 pt-1">
              Haven&apos;t an account?{" "}
              <Link href="/register" className="text-primary hover:underline font-semibold">Register</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;