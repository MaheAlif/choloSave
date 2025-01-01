import React from "react";
import { NavLink } from "react-router";
import CholoSaveLogo from "/CholoSaveLogo4.png";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md z-50">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={CholoSaveLogo} // Replace with your logo URL
            alt="CholoSave"
            className="w-10 "
          />
          <NavLink to="" className="btn btn-ghost text-xl lg:text-3xl">
            CholoSave
          </NavLink>
        </div>

        <div className="flex mt-3 gap-10">
          {/* Navigation Links */}
          <div className="hidden md:flex justify-center align-middle space-x-8">
            <a
              href="#home"
              className="text-gray-600 mt-1 hover:text-black transition duration-300"
            >
              Home
            </a>
            <a
              href="#vision"
              className="text-gray-600 mt-1 hover:text-black transition duration-300"
            >
              Vision
            </a>
            <a
              href="#team"
              className="text-gray-600 mt-1 hover:text-black transition duration-300"
            >
              Expert Team
            </a>
            <a
              href="#contact"
              className="text-gray-600 mt-1 hover:text-black transition duration-300"
            >
              Contact Us
            </a>
          </div>

          {/* Login/Register Button */}
          <NavLink
            to="login"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Login/Register →
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
