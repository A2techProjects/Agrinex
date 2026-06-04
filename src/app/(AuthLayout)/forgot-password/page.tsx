"use client";

import React, {
  useState,
  ChangeEvent,
  FormEvent,
} from "react";
import { Mail } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/Logo";

interface FormData {
  email: string;
}

const ForgotPassword = () => {
  const [formData, setFormData] =
    useState<FormData>({
      email: "",
    });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    console.log(
      "Reset Password Request:",
      formData
    );
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl">
        <div className="px-7 py-8 md:px-10 md:py-10">
          
          {/* LOGO */}
          <Link href="/">
            <Logo
              textColor="#000"
              size={48}
            />
          </Link>

          {/* HEADING */}
          <div className="my-6">
            <h2 className="text-4xl md:text-5xl leading-tight font-cottorway text-gray-900">
              Forgot Password?
            </h2>

            <p className="text-gray-500 mt-2 text-sm md:text-base">
              Enter your email address and
              we&apos;ll send you a password
              reset link.
            </p>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
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

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="w-full h-12 rounded-xl bg-linear-to-t from-black to-gray-600 text-white font-medium hover:opacity-95 cursor-pointer transition"
            >
              Send Reset Link
            </button>

            {/* BACK TO LOGIN */}
            <p className="text-center text-sm text-gray-500">
              Remember your password?{" "}
              <Link
                href="/login"
                className="text-primary hover:underline font-semibold"
              >
                Back to Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;