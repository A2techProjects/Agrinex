"use client";

import Link from "next/link";
import { Leaf } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

import Button from "@/components/shared/Button";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <section className="p-2">
      <footer className="relative overflow-hidden rounded-2xl bg-[#0B2D00] px-6 py-12 md:pt-24 text-white">
        {/* Top */}
        <div className="grid gap-14 lg:grid-cols-[1.3fr_0.7fr_0.7fr_0.7fr]">
          {/* Left */}
          <div>
            {/* Logo */}
            <Logo size={56}/>

            {/* Text */}
            <p className="mt-6 max-w-md text-[17px] leading-9 text-white/75">
              AgriNex empowers farmers with
              innovative solutions, sustainable
              practices, and expert support for
              long-term agricultural growth.
            </p>

            {/* Button */}
            <Button className="mt-6 bg-soft-white">
              Get Started
            </Button>
          </div>

          {/* Navigation Area */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-3">
            {/* Nav */}
            <div>
              <h3 className="font-marble text-2xl font-semibold">
                Navigations
              </h3>

              <div className="mt-6 flex flex-col gap-5 text-white/75 [&_a]:hover:underline [&_a]:hover:text-white">
                <Link href="#">Our Product</Link>
                <Link href="#">Home</Link>
                <Link href="#">Production</Link>
                <Link href="#">Testimonials</Link>
              </div>
            </div>

            {/* Service */}
            <div>
              <h3 className="font-marble text-2xl font-semibold">
                Service
              </h3>

              <div className="mt-6 flex flex-col gap-5 text-white/75 [&_a]:hover:underline [&_a]:hover:text-white">
                <Link href="#">Our Product</Link>
                <Link href="#">Home</Link>
                <Link href="#">Production</Link>
                <Link href="#">Testimonials</Link>
              </div>
            </div>

          {/* Address */}
          <div>
            <h3 className="font-marble text-2xl font-semibold">
              Address
            </h3>

            <p className="mt-6 leading-9 text-white/75">
              123 Agargaon Taal Tola Building,
              Building No.01246
            </p>
          </div>
        </div>
          </div>


        {/* Divider */}
        <div className="my-12 h-px w-full bg-white/20" />

        {/* Bottom */}
        <div className="flex flex-col gap-4 md:gap-10 md:flex-row md:items-center md:justify-between">
          <p className="text-white/70">
            &copy;Copyright AgriNex {new Date().getFullYear()}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-white/70 [&_a]:hover:underline [&_a]:hover:text-white">
            <Link href="#">Privacy Policy</Link>

            <Link href="#">Terms of Use</Link>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 transition hover:bg-white hover:text-black">
              <FaFacebookF size={16} />
            </button>

            <button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 transition hover:bg-white hover:text-black">
              <FaInstagram size={16} />
            </button>

            <button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 transition hover:bg-white hover:text-black">
              <FaXTwitter size={16} />
            </button>
          </div>
        </div>

        {/* Huge Text */}
        <div className="mt-16 hidden md:flex items-center justify-center">
          <h1
            className="
              whitespace-nowrap
              text-center
              font-marble
              font-medium
              leading-[0.9]
              tracking-[-0.04em]
              text-white
              select-none
            "
            style={{
              fontSize: "clamp(5rem, 18vw, 18rem)",
            }}
          >
            AgriNex
          </h1>
        </div>
      </footer>
    </section>
  );
}