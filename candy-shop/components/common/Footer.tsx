"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer letters font-sans ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Socials */}
        <div className="flex flex-col space-y-2">
          <h1 className="uppercase font-extrabold border-b-4 border-pink-300 w-max pb-1 tracking-wide text-lg">
            Follow Us
          </h1>

          {[
            { label: "TikTok", icon: "ri-tiktok-fill" },
            { label: "Twitter", icon: "ri-twitter-x-fill" },
            { label: "Instagram", icon: "ri-instagram-fill" },
          ].map((item) => (
            <span
              key={item.label}
              className="transition duration-300 cursor-pointer font-medium px-2 py-1 rounded hover:bg-rose-400/60"
            >
              <span className="inline-block transition-transform hover:translate-x-2">
                <i className={item.icon}></i> {item.label}
              </span>
            </span>
          ))}
        </div>

        {/* Navigation – Information */}
        <div className="flex flex-col space-y-2">
          <h2 className="uppercase font-extrabold border-b-4 border-pink-300 w-max pb-1 tracking-wide text-lg">
            Information
          </h2>

          {[
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
            { label: "FAQs", href: "/faq" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition duration-300 cursor-pointer font-medium px-2 py-1 rounded hover:bg-rose-400/60"
            >
              <span className="inline-block transition-transform hover:translate-x-2">
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Navigation – More */}
        <div className="flex flex-col space-y-2">
          <h3 className="uppercase font-extrabold border-b-4 border-pink-300 w-max pb-1 tracking-wide text-lg">
            More Sweetness
          </h3>

          {[
            { label: "Events", href: "/events" },
            { label: "Jobs", href: "/jobs" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition duration-300 cursor-pointer font-medium px-2 py-1 rounded hover:bg-rose-400/60"
            >
              <span className="inline-block transition-transform hover:translate-x-2">
                {item.label}
              </span>
            </Link>
          ))}

          <span className="italic text-pink-100 mt-2 max-w-xs font-light">
            “Life is sweeter with sprinkles on top!” 🍬
          </span>
        </div>
      </div>

      <div className="mt-6 border-t border-white/20">
        <p className="py-2 text-sm text-center px-4 sm:px-6 lg:px-8">
          <span className="text-white italic">© 2025 Sunny Delights |</span>{" "}
          <span className="font-serif text-white">All rights reserved.</span>
        </p>
      </div>
    </footer>
  );
}
