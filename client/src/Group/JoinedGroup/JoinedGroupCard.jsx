import React from "react";
import { NavLink } from "react-router";

const JoinedGroupCard = ({ group }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-3 bg-slate-100 p-2 rounded-xl border-2 border-gray-400">
      {/* Group Image */}
      <div className="border w-3/12 border-green-500 rounded-xl p-1">
        <img
          className="min-w-full flex justify-center align-bottom"
          src={group.image}
          alt={group.name}
        />
      </div>

      {/* Group Info */}
      <div className="w-7/12 bg-slate-200 p-2 lg:p-5 rounded-lg">
        {/* Group Name */}
        <h1 className="text-2xl lg:text-3xl font-bold text-green-600">
          {group.name}
        </h1>
        <p className="text-xs lg:text-sm text-gray-800">{group.description}</p>
      </div>

      {/* Group Details & Action */}
      <div className="w-3/12 flex flex-col gap-3 bg-slate-200 rounded-lg p-5">
        <p>Installments: {group.installments} BDT</p>
        <p>Scheme: {group.scheme}</p>
        <p>Members: {group.members}</p>
        <div className="flex justify-center">
          <NavLink
            to={`/groupDashboard/${group.id}`}
            className="p-3 w-6/12 text-center text-bold bg-green-400 rounded-lg hover:bg-green-700 hover:text-white"
          >
            View
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default JoinedGroupCard;
