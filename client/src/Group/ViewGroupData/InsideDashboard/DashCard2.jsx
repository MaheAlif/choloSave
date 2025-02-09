import React from "react";
import { FaPersonArrowUpFromLine } from "react-icons/fa6";

const DashCard2 = () => {
  return (
    <>
      <section className="p-4 bg-white rounded-lg shadow-xl">
        <div className="flex justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-2">Total Members</h2>
          </div>
          <div>
            <p className="text-xl text-gray-600 font-semibold">
              43<span className="text-green-500"></span>
            </p>
          </div>
        </div>
        <p className="text-gray-600 flex gap-1 align-middle">
          <FaPersonArrowUpFromLine className="mt-1"></FaPersonArrowUpFromLine>
          <span className="text-green-500">+2</span> new members this month
        </p>
      </section>
    </>
  );
};

export default DashCard2;
