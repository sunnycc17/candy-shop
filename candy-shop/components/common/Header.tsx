"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const cartCount = 0; // Replace with your cart state

  return (
    <header
      className="header fixed top-0 z-9999` magenta w-full border-b border-rose-400 backdrop-blur-sm"
      aria-label="Main site header"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8 font-sans">
        {/* Logo */}
        <div className="flex items-center">
          <Link id="logo" href="/" className="flex items-center gap-1 sm:gap-2">
            <h1 className="font-extrabold italic letters text-sm sm:text-xl uppercase tracking-wider">
              Sunny Delights
            </h1>
          </Link>
        </div>

        {/* Desktop Search */}
        <div className="hidden sm:flex flex-1 items-center justify-center mx-4 relative">
          <div className="relative w-full max-w-md">
            <label htmlFor="searchbox" className="sr-only">
              Search candies
            </label>
            <input
              id="searchbox"
              type="text"
              placeholder="Search candies..."
              className="w-full pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-white bg-rose-400/60 border border-white/10"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="h-5 w-5 text-white"
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
            </div>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 font-medium letters relative">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
            { href: "/faq", label: "FAQ" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative px-3 py-1"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-full h-1 bg-rose-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Cart + Mobile Hamburger */}
        <div className="flex items-center">
          <Link
            id="cart"
            href="/pages/checkout"
            className="relative mx-1 lg:ml-9 letters smooth-bounce"
          >
            <i className="ri-shopping-basket-2-fill text-xl sm:text-2xl"></i>
            <span className="absolute -top-1.5 -right-2.5 sm:-top-2 sm:-right-3.5 text-[0.55rem] sm:text-xs font-bold w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </Link>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-md p-1 text-white"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {open && (
        <aside
          className="fixed inset-y-0 right-0 w-3/4 magenta backdrop-blur-sm text-white flex flex-col h-screen overflow-hidden border-l border-rose-400 font-sans"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-end px-6 pt-6">
            <button
              type="button"
              className="rounded-md p-2.5"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Search */}
          <div className="mt-4 border-t border-white/20 pt-4 px-4">
            <label htmlFor="mobile-searchbox" className="sr-only">
              Search candies
            </label>
            <div className="relative">
              <input
                id="mobile-searchbox"
                type="text"
                placeholder="Search candies..."
                className="w-full pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 text-xs focus:ring-white text-white placeholder-white bg-rose-400/60 border border-white/10"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Mobile Links */}
          <nav className="mt-6 px-6 pb-6 flex flex-col justify-start space-y-3">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
              { href: "/faq", label: "FAQ" },
              { href: "/events", label: "Events" },
              { href: "/jobs", label: "Jobs" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 font-medium hover:bg-rose-400/60 rounded"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </aside>
      )}
    </header>
  );
}
