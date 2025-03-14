"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for menu toggle
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80  text-white py-4 px-4 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Image
          src="/JetsetGo.svg"
          width={80}
          height={80}
          alt="Logo of the website."
        />
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-md">
          <li className="hover:text-gray-400 cursor-pointer">Product</li>
          <li className="hover:text-gray-400 cursor-pointer">Services</li>
          <li className="hover:text-gray-400 cursor-pointer">Our Fleet</li>
          <li className="hover:text-gray-400 cursor-pointer">News & Media</li>
          <li className="hover:text-gray-400 cursor-pointer">Membership</li>
        </ul>

        {/* Register Button */}
        <button className="hidden md:block bg-gradient-to-br from-[#7CC1DC] to-[#223D39] text-white px-8 py-3 rounded-full register_button_drop_shadow cursor-pointer">
          Register
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-5 mt-4 py-4">
          <li className="hover:text-gray-400 cursor-pointer">Product</li>
          <li className="hover:text-gray-400 cursor-pointer">Services</li>
          <li className="hover:text-gray-400 cursor-pointer">Our Fleet</li>
          <li className="hover:text-gray-400 cursor-pointer">News & Media</li>
          <li className="hover:text-gray-400 cursor-pointer">Membership</li>
          <button className="bg-gradient-to-tl from-[#0D1222] to-[#4E6E8E] text-white px-5 py-2 rounded-full register_button_drop_shadow cursor-pointer">
            Register
          </button>
        </ul>
      )}
    </nav>
  );
}
