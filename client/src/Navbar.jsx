import React, { useState } from "react";
import { NavLink } from "react-router";
import CholoSaveLogo from "/CholoSaveLogo4.png";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleMouseEnter = (item) => {
    setActiveItem(item);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <div className="flex items-center space-x-2">
          <img src={CholoSaveLogo} alt="CholoSave" className="w-10" />
          <NavLink to="" className="btn btn-ghost text-xl lg:text-3xl">
            CholoSave
          </NavLink>
        </div>

        <div className="flex mt-3 gap-10">
          <div className="hidden md:flex justify-center align-middle space-x-8">
            {/* Group */}
            <div
              onMouseEnter={() => handleMouseEnter("group")}
              className="relative z-10"
            >
              <button className="text-gray-600 mt-1 hover:text-black transition duration-300 flex items-center">
                Group
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {activeItem === "group" && (
                <div
                onMouseLeave={() => handleMouseEnter(null)}
                className="absolute left-0 mt-2 w-64 bg-white border shadow-lg rounded-lg">
                  <ul className="py-2">
                    <li>
                      <NavLink to="createGroup" className="block px-4 py-2 hover:bg-gray-100">
                        <div className="font-semibold bg-green-300 p-1 rounded-lg hover:bg-green-600 hover:text-white">
                          Create Group
                        </div>
                        <span className="text-sm text-gray-500">
                          Create your group to connect with people
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        <div className="font-semibold bg-green-300 p-1 rounded-lg hover:bg-green-600 hover:text-white">
                          View Groups
                        </div>
                        <span className="text-sm text-gray-500">
                          View details of your groups
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        <div className="font-semibold bg-green-300 p-1 rounded-lg hover:bg-green-600 hover:text-white">
                          My groups
                        </div>
                        <span className="text-sm text-gray-500">
                          See the details of your created groups
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Savings */}
            <div
              onMouseEnter={() => handleMouseEnter("savings")}
              className="relative z-10"
            >
              <button className="text-gray-600 mt-1 hover:text-black transition duration-300 flex items-center">
                Savings
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {activeItem === "savings" && (
                <div 
                onMouseLeave={() => handleMouseEnter(null)}
                className="absolute left-0 mt-2 w-64 bg-white border shadow-lg rounded-lg">
                  <ul className="py-2">
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        <div className="font-semibold bg-green-300 p-1 rounded-lg hover:bg-green-600 hover:text-white">
                          Withdrawls
                        </div>
                        <span className="text-sm text-gray-500">
                          See the details of your withdrawls
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        <div className="font-semibold bg-green-300 p-1 rounded-lg hover:bg-green-600 hover:text-white">
                          Contributions
                        </div>
                        <span className="text-sm text-gray-500">
                          See the details of your contributions
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Investments */}
            <div
              onMouseEnter={() => handleMouseEnter("investments")}
              className="relative z-10"
            >
              <button className="text-gray-600 mt-1 hover:text-black transition duration-300 flex items-center">
                Investments
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {activeItem === "investments" && (
                <div 
                onMouseLeave={() => handleMouseEnter(null)}
                className="absolute left-0 mt-2 w-64 bg-white border shadow-lg rounded-lg">
                  <ul className="py-2">
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        <div className="font-semibold bg-green-300 p-1 rounded-lg hover:bg-green-600 hover:text-white">
                          Dashboard
                        </div>
                        <span className="text-sm text-gray-500">
                          View the details of your investments
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        <div className="font-semibold bg-green-300 p-1 rounded-lg hover:bg-green-600 hover:text-white">
                          AI tips
                        </div>
                        <span className="text-sm text-gray-500">
                          Get specific tips based on your requirments
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Community */}
            <div
              onMouseEnter={() => handleMouseEnter("community")}
              className="relative z-10"
            >
              <button className="text-gray-600 mt-1 hover:text-black transition duration-300 flex items-center">
                Community
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {activeItem === "community" && (
                <div 
                onMouseLeave={() => handleMouseEnter(null)}
                className="absolute left-0 mt-2 w-64 bg-white border shadow-lg rounded-lg">
                  <ul className="py-2">
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        <div className="font-semibold bg-green-300 p-1 rounded-lg hover:bg-green-600 hover:text-white">
                          Leaderboard
                        </div>
                        <span className="text-sm text-gray-500">
                          View all the contributors
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        <div className="font-semibold bg-green-300 p-1 rounded-lg hover:bg-green-600 hover:text-white">
                          Forums
                        </div>
                        <span className="text-sm text-gray-500">
                          Get connected with other people in the community
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Avatar/Profile */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://avatars.githubusercontent.com/u/107747218?v=4"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
