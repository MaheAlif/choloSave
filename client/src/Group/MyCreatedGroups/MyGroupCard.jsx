import React from "react";
import { NavLink } from "react-router"; // Corrected import for NavLink

const MyGroupCard = ({ group }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-3 bg-slate-100 p-2 rounded-xl border-2 border-gray-400">
      {/* Group Image Placeholder (Optional) */}
      <div className="border w-3/12 border-green-500 rounded-xl p-1 flex items-center justify-center">
        <img
          className="min-w-full max-h-32 object-cover rounded-lg"
          src={group.image || "https://img.freepik.com/free-vector/finance-financial-performance-concept-illustration_53876-40450.jpg?semt=ais_hybrid"} // Default image if none provided
          alt={group.group_name}
        />
      </div>

      {/* Group Info */}
      <div className="w-7/12 bg-slate-200 p-2 lg:p-5 rounded-lg">
        {/* Group Name */}
        <h1 className="text-2xl lg:text-3xl font-bold text-green-600">
          {group.group_name}
        </h1>
        <p className="text-sm text-gray-800">DPS Type: {group.dps_type}</p>
        <p className="text-sm text-gray-800">
          Installment Amount: {group.installment} BDT
        </p>
      </div>

      {/* Group Details & Action */}
      <div className="w-3/12 flex flex-col gap-3 bg-slate-200 rounded-lg p-5">
        <p className="text-sm">
          <span className="font-semibold">Members:</span> {group.members_count}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Role:</span>{" "}
          {group.is_admin ? "Admin" : "Member"}
        </p>
        <div className="flex justify-center">
          <NavLink
            to={`/groupDashboard/${group.group_id}`}
            className="p-3 w-6/12 text-center text-bold bg-green-400 rounded-lg hover:bg-green-700 hover:text-white"
          >
            View
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MyGroupCard;
