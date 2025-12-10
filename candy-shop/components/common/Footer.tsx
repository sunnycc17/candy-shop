"use client";

import Link from "next/link";
import type { FC, ReactElement } from "react";

type NavLink = {
  label: string;
  href?: string;
  icon?: FC;
};

const TikTokIconSvg: FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M12 2c.57 2.4 2.27 4.3 4.8 4.7v3.1c-1.19-.13-2.3-.52-3.32-1.13v6.15c0 2.87-2.33 5.2-5.2 5.2S3.08 17.7 3.08 14.83c0-2.72 2.07-4.97 4.72-5.18v3.12c-.9.2-1.56 1-1.56 1.95 0 1.1.88 1.98 1.98 1.98s1.98-.88 1.98-1.98V2H12Z" />
  </svg>
);

const TwitterIconSvg: FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M3 3h6.6l4.3 5.7L17.7 3H21l-6.9 9 6.9 9h-6.6l-4.4-6L6.3 21H3l7-9L3 3Z" />
  </svg>
);

const InstagramIconSvg: FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7Zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10Zm-5 4.5c-2.5 0-4.5 2-4.5 4.5S9.5 17.5 12 17.5 16.5 15.5 16.5 13 14.5 8.5 12 8.5Zm0 2c1.4 0 2.5 1.1 2.5 2.5S13.4 15.5 12 15.5 9.5 14.4 9.5 13 10.6 10.5 12 10.5ZM17 6.5c0 .6-.5 1-1 1s-1-.4-1-1 .5-1 1-1 1 .5 1 1Z" />
  </svg>
);

export default function Footer(): ReactElement {
  const socialItems: NavLink[] = [
    { label: "TikTok", icon: TikTokIconSvg },
    { label: "Twitter", icon: TwitterIconSvg },
    { label: "Instagram", icon: InstagramIconSvg },
  ];

  const infoLinks: NavLink[] = [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "FAQs", href: "/faq" },
  ];

  const moreLinks: NavLink[] = [
    { label: "Events", href: "/events" },
    { label: "Jobs", href: "/jobs" },
  ];

  return (
    <footer className="footer font-sans bg-linear-to-b from-red-900 via-rose-800 to-red-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Socials */}
        <div className="flex flex-col space-y-3">
          <h1 className="uppercase tracking-wide font-semibold text-lg border-b-4 border-white/20 pb-1 w-max">
            Follow Us
          </h1>

          {socialItems.map(({ label, icon: Icon }) => (
            <span
              key={label}
              className="transition duration-300 cursor-pointer font-medium px-2 py-1 rounded hover:bg-rose-400/60"
            >
              <span className="inline-flex items-center gap-2 transition-transform hover:translate-x-2">
                {Icon && <Icon />}
                {label}
              </span>
            </span>
          ))}
        </div>

        {/* Information */}
        <div className="flex flex-col space-y-3">
          <h2 className="uppercase tracking-wide font-semibold text-lg border-b-4 border-white/20 pb-1 w-max">
            Information
          </h2>

          {infoLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href!}
              className="transition duration-300 cursor-pointer font-medium px-2 py-1 rounded hover:bg-rose-400/60"
            >
              <span className="inline-block transition-transform hover:translate-x-2">
                {label}
              </span>
            </Link>
          ))}
        </div>

        {/* More */}
        <div className="flex flex-col space-y-3">
          <h3 className="uppercase tracking-wide font-semibold text-lg border-b-4 border-white/20 pb-1 w-max">
            More Sweetness
          </h3>

          {moreLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href!}
              className="transition duration-300 cursor-pointer font-medium px-2 py-1 rounded hover:bg-rose-400/60"
            >
              <span className="inline-block transition-transform hover:translate-x-2">
                {label}
              </span>
            </Link>
          ))}

          <span className="italic text-white/70 mt-2 max-w-xs font-light leading-relaxed">
            “Life is sweeter with sprinkles on top!”
          </span>
        </div>
      </div>

      <div className="mt-6 border-t border-white/20">
        <p className="py-2 text-sm text-center text-white/80 italic">
          © 2025 Sunny Delights |{" "}
          <span className="font-serif text-white/90 not-italic">
            All rights reserved.
          </span>
        </p>
      </div>
    </footer>
  );
}
