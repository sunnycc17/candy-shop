"use client";

import React, { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { Sling as Hamburger } from "hamburger-react";

// Navigation items with hrefs and optional icons for mobile sidebar
interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 12l9-9 9 9v9a3 3 0 01-3 3H6a3 3 0 01-3-3v-9z"
        />
      </svg>
    ),
  },
  {
    label: "About",
    href: "/about",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"
        />
      </svg>
    ),
  },
  {
    label: "Contact",
    href: "/contact",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 12v.01M12 12v.01M8 12v.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z"
        />
      </svg>
    ),
  },
  {
    label: "FAQ",
    href: "/faq",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 10h.01M12 14h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z"
        />
      </svg>
    ),
  },
];

const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const cartCount = 0;

  const hamburgerPosition = "absolute top-6 right-4";

  return (
    <header className="fixed top-0 z-50 w-full">
      {/* Navbar */}
      <div className="backdrop-blur-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8 font-sans relative">
          {/* Logo */}
          <div className="flex items-center mr-12">
            <Link href="/" className="flex items-center gap-3">
              <h1 className="font-semibold italic tracking-wide text-xl sm:text-2xl text-white">
                Sweet Delights
              </h1>
            </Link>
          </div>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-6 ml-16">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white font-medium px-3 py-1 rounded-lg hover:bg-white/10 transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side: search + cart + hamburger */}
          <div className="flex items-center gap-6 ml-auto">
            {/* Search */}
            <div className="hidden sm:flex relative">
              <input
                type="text"
                placeholder="Search candies..."
                className="w-96 pl-12 pr-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white placeholder-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-rose-400 transition-shadow duration-300 shadow-sm hover:shadow-md"
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white pointer-events-none">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                  />
                </svg>
              </span>
            </div>

            {/* Cart */}
            <Link href="/pages/checkout" className="relative text-white">
              <i className="ri-shopping-basket-2-fill text-2xl"></i>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center bg-rose-500 text-white">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Hamburger */}
            <div className="lg:hidden">
              <Hamburger toggled={open} toggle={setOpen} size={24} />
            </div>
          </div>
        </nav>
      </div>

      {/* Overlay */}
      <div
        className={clsx(
          "fixed inset-0 bg-black/40 z-20 transition-opacity duration-500 lg:hidden",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onClick={() => setOpen(false)}
      />

      {/* Mobile sidebar */}
      <div
        className={clsx(
          "lg:hidden fixed top-0 right-0 h-full z-30 w-72 sm:max-w-sm overflow-hidden px-6 py-8 sidebar shadow-2xl transition-transform duration-500 ease-in-out rounded-l-4xl bg-linear-to-b from-red-900 via-rose-800 to-red-950",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Hamburger inside sidebar */}
        <div className={hamburgerPosition}>
          <Hamburger
            toggled={open}
            toggle={setOpen}
            size={28}
            duration={0.5}
            label="Close menu"
            color="#fff"
          />
        </div>

        <div className="flow-root mt-24">
          <div className="text-left">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => setOpen(false)}
                className={clsx(
                  "flex items-center gap-4 w-full px-6 py-5 text-lg sm:text-xl font-semibold text-white text-left rounded-xl transform transition duration-500",
                  open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
                )}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {item.icon && <span>{item.icon}</span>}
                {item.label}
                <div className="absolute left-6 bottom-0 h-px w-[calc(100%-2.5rem)] bg-white/20 rounded-full"></div>
              </button>
            ))}
          </div>
        </div>

        {/* Sidebar footer */}
        <div className="absolute bottom-6 left-6 text-white/70 text-sm sm:text-base">
          &copy; 2025 Sunny Delights
        </div>
      </div>
    </header>
  );
};

export default Header;
