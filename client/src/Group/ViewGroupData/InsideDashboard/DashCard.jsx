import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";

const DashCard = () => {
  return (
    <>
      <section className="p-4 bg-white rounded-lg shadow-xl">
        <div className="flex justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-2">Total Savings</h2>
          </div>
          <div>
            <p className="text-xl text-gray-600 font-semibold">
              45620<span className="text-green-500">$</span>
            </p>
          </div>
        </div>
        <p className="text-gray-600 flex gap-1 align-middle">
          <FaArrowTrendUp className="mt-1"></FaArrowTrendUp>
          <span className="text-green-500">12.5%</span> growth this month
        </p>
      </section>
    </>
  );
};

export default DashCard;
