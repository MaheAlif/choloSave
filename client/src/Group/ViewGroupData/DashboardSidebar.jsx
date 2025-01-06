import React from "react";

const DashboardSidebar = () => {
  return (
    <>
      <aside className="min-w-64 bg-green-300 text-green-900 font-semibold flex flex-col">
        <div className="p-4 text-2xl font-bold border-b border-green-700">
          Dashboard
        </div>
        <nav className="flex-1 p-1">
          <ul className="space-y-4">
            <li className="border-b-2 border-green-800">
              <a
                href="#"
                className="block py-2 px-3  hover:bg-green-700 hover:text-white transition duration-300"
              >
                Home
              </a>
            </li>
            <li className="border-b-2 border-green-800">
              <a
                href="#"
                className="block py-2 px-3  hover:bg-green-700 hover:text-white transition duration-300"
              >
                Emergency Loan Request
              </a>
            </li>
            <li className="border-b-2 border-green-800">
              <a
                href="#"
                className="block py-2 px-3  hover:bg-green-700 hover:text-white transition duration-300"
              >
                Loan History
              </a>
            </li>

            <li className="border-b-2 border-green-800">
              <a
                href="#"
                className="block py-2 px-3  hover:bg-green-700 hover:text-white transition duration-300"
              >
                Chats
              </a>
            </li>
            <li className="border-b-2 border-green-800">
              <a
                href="#"
                className="block py-2 px-3  hover:bg-green-700 hover:text-white transition duration-300"
              >
                Members
              </a>
            </li>
            <li className="border-b-2 border-green-800">
              <a
                href="#"
                className="block py-2 px-3  hover:bg-green-700 hover:text-white transition duration-300"
              >
                Payment
              </a>
            </li>
            <li className="border-b-2 border-green-800">
              <a
                href="#"
                className="block py-2 px-3  hover:bg-green-700 hover:text-white transition duration-300"
              >
                Payment History
              </a>
            </li>
            <li className="border-b-2 border-green-800">
              <a
                href="#"
                className="block py-2 px-3  hover:bg-green-700 hover:text-white transition duration-300"
              >
                Withdraw request
              </a>
            </li>
            <li className="border-b-2 border-green-800">
              <a
                href="#"
                className="block py-2 px-3  hover:bg-pink-400 hover:text-white transition duration-300"
              >
                Leave Request
              </a>
            </li>
            <li className="border-b-2 border-green-800">
              <a
                href="#"
                className="block py-2 px-3  hover:bg-green-700 hover:text-white transition duration-300"
              >
                Analytics
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default DashboardSidebar;
