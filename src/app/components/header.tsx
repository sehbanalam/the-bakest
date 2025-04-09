'use client';
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 w-full shadow-md z-50">
      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        {/* Left Section */}
        <div className="hidden md:flex space-x-2">
          <a className="header-links">Cakes</a>
          <a className="header-links">Pastries</a>
          <a className="header-links">Savories</a>
          <a className="header-links">Drinks</a>
        </div>

        {/* Center Section */}
        <div className="flex justify-center">
          <Image
            src="/logo-white-transparent.png"
            alt="The bakest logo"
            width={100}
            height={24}
            priority
          />
        </div>

        {/* Right Section */}
        <div className="hidden md:flex space-x-2 items-center">
          <a className="header-links">About</a>
          <a className="header-links">Locate</a>
          <a className="header-links">Contact</a>
          <a className="header-button">Order Now</a>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden flex items-center text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden shadow-md">
          <div className="flex flex-col items-center space-y-4 py-4">
            <a className="header-links">Cakes</a>
            <a className="header-links">Pastries</a>
            <a className="header-links">Savories</a>
            <a className="header-links">About</a>
            <a className="header-links">Contact</a>
            <a className="header-button">Order Now</a>
          </div>
        </div>
      )}
    </header>
  );
}