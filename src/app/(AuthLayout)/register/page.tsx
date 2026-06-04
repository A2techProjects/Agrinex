"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
} from "lucide-react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { FcGoogle } from "react-icons/fc";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface Errors {
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const [showPassword, setShowPassword] =
    useState<boolean>(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Errors>({
    password: "",
    confirmPassword: "",
  });

  // PASSWORD VALIDATION
  const validatePassword = (
    password: string
  ): boolean => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#^()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

    return regex.test(password);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // PASSWORD CHECK
    if (name === "password") {
      if (!validatePassword(value)) {
        setErrors((prev) => ({
          ...prev,
          password:
            "Must contain uppercase, lowercase, number, special character and be at least 8 characters.",
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          password: "",
        }));
      }

      if (
        formData.confirmPassword &&
        value !== formData.confirmPassword
      ) {
        setErrors((prev) => ({
          ...prev,
          confirmPassword:
            "Passwords do not match.",
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          confirmPassword: "",
        }));
      }
    }

    // CONFIRM PASSWORD CHECK
    if (name === "confirmPassword") {
      if (value !== formData.password) {
        setErrors((prev) => ({
          ...prev,
          confirmPassword:
            "Passwords do not match.",
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          confirmPassword: "",
        }));
      }
    }
  };

  const handleSubmit = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!validatePassword(formData.password)) {
      setErrors((prev) => ({
        ...prev,
        password:
          "Must contain uppercase, lowercase, number, special character and be at least 8 characters.",
      }));
      return;
    }

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword:
          "Passwords do not match.",
      }));
      return;
    }

    console.log("Submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2">
        
        {/* LEFT SIDE */}
        <div className="px-7 py-8 md:px-10 md:py-10 flex flex-col justify-center">
          
          {/* CUSTOM LOGO */}
          <Link href="/">
            <Logo textColor="#000" size={48}/>
          </Link>

          {/* HEADING */}
          <div className="my-6">
            <h2 className="text-4xl md:text-5xl leading-tight font-cottorway text-gray-900">
              Create your account!
            </h2>

            <p className="text-gray-500 mt-2 text-sm md:text-base">
              Manage crops, soil and yields in one place.
            </p>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            
            {/* NAMES */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* FIRST NAME */}
              <div>
                <label className="block mb-2 text-sm font-cottorway font-semibold text-gray-800">
                  First Name
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    name="firstName"
                    placeholder="Your first name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full h-12 rounded-xl border border-gray-200 pl-12 pr-4 outline-none focus:border-primary transition"
                  />
                </div>
              </div>

              {/* LAST NAME */}
              <div>
                <label className="block mb-2 text-sm font-cottorway font-semibold text-gray-800">
                  Last Name
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    name="lastName"
                    placeholder="Your last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full h-12 rounded-xl border border-gray-200 pl-12 pr-4 outline-none focus:border-primary transition"
                  />
                </div>
              </div>
            </div>

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

              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password}
                </p>
              )}
            </div>

            {/* CONFIRM PASSWORD */}
            <div>
              <label className="block mb-2 text-sm font-cottorway font-semibold text-gray-800">
                Confirm Password
              </label>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={
                    formData.confirmPassword
                  }
                  onChange={handleChange}
                  required
                  className="w-full h-12 rounded-xl border border-gray-200 pl-12 pr-14 outline-none focus:border-primary transition"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>
              </div>

              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* SIGN UP BUTTON */}
            <button
              type="submit"
              className="w-full h-12 rounded-xl bg-linear-to-t from-black to-gray-600 text-white font-medium hover:opacity-95 cursor-pointer transition"
            >
              Create Account
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
                Register With Google
              </span>
            </button>

            {/* LOGIN LINK */}
            <p className="text-center text-sm text-gray-500 pt-1">
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:underline font-semibold">Login</Link>
            </p>
          </form>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Agriculture"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;