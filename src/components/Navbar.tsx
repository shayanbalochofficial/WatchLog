import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  //
  return (
    <nav className="w-full bg-transparent text-white">
      {/* Maiin Nav */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo here */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <span className="text-lg font-semibold">
              <span className="text-[#8a7968]">Watch</span>Log
            </span>
          </Link>
        </div>

        {/* Links */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li>
            <Link
              href="/"
              className="hover:text-[#dcc9b6] hover:border-b-2 hover:border-[#dcc9b6] transition-all duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/About"
              className="hover:text-[#dcc9b6] hover:border-b-2 hover:border-[#dcc9b6] transition-all duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/blogs"
              className="hover:text-[#dcc9b6] hover:border-b-2 hover:border-[#dcc9b6] transition-all duration-200"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-[#dcc9b6] hover:border-b-2 hover:border-[#dcc9b6] transition-all duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Subcribe button */}
        <Link
          href="/contact"
          className="hidden md:block px-4 py-2 border border-[#8a7968] text-[#8a7986] rounded-full hover:bg-[#8a7986] hover:text-white transition-all duration-200"
        >
          Subscribe
        </Link>

        {/* Hamburger menu */}
        <button
          type="button"
          className="md:hidden text-white"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-labelledby="menu-title"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <title id="menu-title"></title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu links */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-[#1f1f1f] text-white w-full py-4`}
      >
        <ul className="text-center">
          <li>
            <Link
              href="/"
              className="block py-2 hover:bg-[#8a7968] transition-all"
            >
              Home{" "}
            </Link>
          </li>
          <li>
            <Link href="/About" className=""></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

// Senorita, u r a cheater
