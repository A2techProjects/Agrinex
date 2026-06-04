"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import Logo from "@/components/Logo";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState<boolean>(true);
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(0);
  const pathName = usePathname();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = (): void => {
      const currentScrollY = window.scrollY;

      // Existing blur logic
      setScrolled(currentScrollY > 80);

      // Detect scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    const handleResize = (): void => {
      setWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return (): void => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section
        className={clsx(
          "fixed w-full px-4 pb-4 xl:px-8 z-20 transition-all duration-300",
          showNavbar
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0",
          width < 1280 && (pathName !== "/" || scrolled) &&
          "bg-black/70 backdrop-blur-md shadow-lg",
        )}
      >
        <nav
          className={clsx(
            "mt-4 w-full h-16 flex items-center justify-between text-white px-4 transition-all duration-300",
             width > 1280 && (pathName !== "/" || scrolled) &&
               "bg-black/70 backdrop-blur-md rounded-full shadow-lg"
          )}
        >
          <Link href="/" className="flex items-center justify-center gap-2">
            <Logo size={38} />
          </Link>

          <ul className="hidden xl:flex items-center justify-center font-medium text-lg [&_a]:hover:bg-white [&_a]:hover:text-black [&_a]:px-4 [&_a]:py-1 [&_a]:rounded-full">
            <li>
              <Link href="#">Services</Link>
            </li>
            <li>
              <Link href="#">Marketplace</Link>
            </li>
            <li>
              <Link href="#">Testimonials</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>

          <div className="hidden xl:flex">
            <Link href="/login" className="px-6 py-2 rounded-full text-center bg-white text-black uppercase">
              Login
            </Link>
          </div>

          <button
            onClick={(): void => setMobileMenu(true)}
            className="xl:hidden"
            aria-label="Open Menu"
          >
            <Menu size={32} />
          </button>
        </nav>
      </section>

      <div
        className={clsx(
          "fixed inset-0 z-50 xl:hidden transition-all duration-300",
          mobileMenu
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={(): void => setMobileMenu(false)}
        />

        <div className="relative w-full h-full p-2">
          <div className="w-full h-full bg-black/60 text-white rounded-[2rem] px-6 py-4 flex flex-col">
            <div className="flex items-center justify-between mt-[0.3rem]">
              <Link href="/" className="flex items-center gap-2">
                <Logo size={38} />
              </Link>

              <button
                onClick={(): void => setMobileMenu(false)}
                aria-label="Close Menu"
              >
                <X size={32} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center gap-6 mt-10">
              {[
                "Services",
                "Marketplace",
                "Testimonials",
                "About",
                "Contact",
              ].map((item: string) => (
                <Link
                  key={item}
                  href="#"
                  className="text-5xl font-semibold tracking-tight"
                  onClick={(): void => setMobileMenu(false)}
                >
                  {item}
                </Link>
              ))}
            </div>

            <Link href="/login" className="px-6 py-2 rounded-full text-center bg-white text-black uppercase">
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}