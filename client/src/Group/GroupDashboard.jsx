import React from "react";

const GroupDashboard = () => {
  return (
    <>
      <div className="flex bg-gray-200">
        {/* Sidebar / Aside Menu */}
        <aside className="w-64 bg-green-300 text-green-900 font-semibold flex flex-col">
          <div className="p-4 text-2xl font-bold border-b border-blue-700">
            Dashboard
          </div>
          <nav className="flex-1 p-4">
            <ul className="space-y-4">
              <li className="border-b-2 border-green-800">
                <a
                  href="#"
                  className="block py-2 px-3 rounded-lg hover:bg-green-700 hover:text-white transition duration-300"
                >
                  Home
                </a>
              </li>
              <li className="border-b-2 border-green-800">
                <a
                  href="#"
                  className="block py-2 px-3 rounded-lg hover:bg-green-700 hover:text-white transition duration-300"
                >
                  Emergency Loan Request
                </a>
              </li>
              <li className="border-b-2 border-green-800">
                <a
                  href="#"
                  className="block py-2 px-3 rounded-lg hover:bg-green-700 hover:text-white transition duration-300"
                >
                  Loan History
                </a>
              </li>
              
              <li className="border-b-2 border-green-800">
                <a
                  href="#"
                  className="block py-2 px-3 rounded-lg hover:bg-green-700 hover:text-white transition duration-300"
                >
                  Chats
                </a>
              </li>
              <li className="border-b-2 border-green-800">
                <a
                  href="#"
                  className="block py-2 px-3 rounded-lg hover:bg-green-700 hover:text-white transition duration-300"
                >
                  Members
                </a>
              </li>
              <li className="border-b-2 border-green-800">
                <a
                  href="#"
                  className="block py-2 px-3 rounded-lg hover:bg-green-700 hover:text-white transition duration-300"
                >
                  Payment
                </a>
              </li>
              <li className="border-b-2 border-green-800">
                <a
                  href="#"
                  className="block py-2 px-3 rounded-lg hover:bg-green-700 hover:text-white transition duration-300"
                >
                  Payment History
                </a>
              </li>
              <li className="border-b-2 border-green-800">
                <a
                  href="#"
                  className="block py-2 px-3 rounded-lg hover:bg-green-700 hover:text-white transition duration-300"
                >
                  Withdraw request
                </a>
              </li>
              <li className="border-b-2 border-green-800">
                <a
                  href="#"
                  className="block py-2 px-3 rounded-lg hover:bg-green-700 hover:text-white transition duration-300"
                >
                  Leave Request
                </a>
              </li>
              <li className="border-b-2 border-green-800">
                <a
                  href="#"
                  className="block py-2 px-3 rounded-lg hover:bg-green-700 hover:text-white transition duration-300"
                >
                  Analytics
                </a>
              </li>
              <li className="border-b-2 border-green-800">
                <a
                  href="#"
                  className="block py-2 px-3 rounded-lg hover:bg-green-700 hover:text-white transition duration-300"
                >
                  Users
                </a>
              </li>
              <li className="border-b-2 border-green-800">
                <a
                  href="#"
                  className="block py-2 px-3 rounded-lg hover:bg-green-700 hover:text-white transition duration-300"
                >
                  Settings
                </a>
              </li>
              <li className="border-b-2 border-green-800">
                <a
                  href="#"
                  className="block py-2 px-3 rounded-lg hover:bg-green-700 hover:text-white transition duration-300"
                >
                  Logout
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold mb-6">Welcome to the Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example Cards */}
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Card 1</h2>
              <p className="text-gray-600">This is a card description.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Card 2</h2>
              <p className="text-gray-600">This is a card description.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Card 3</h2>
              <p className="text-gray-600">This is a card description.</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default GroupDashboard;
