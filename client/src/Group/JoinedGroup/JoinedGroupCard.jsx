import React from "react";

const JoinedGroupCard = ({ group }) => {
  return (
    <>
      <div
        key={group.group_id}
        className="flex flex-col lg:flex-row gap-3 bg-slate-100 p-2 rounded-xl border-2 border-gray-400"
      >
        {/* Group Image Placeholder */}
        <div className="border w-3/12 border-green-500 rounded-xl p-1 flex items-center justify-center">
          <img
            className="min-w-full max-h-32 object-cover rounded-lg"
            src="https://img.freepik.com/free-vector/finance-financial-performance-concept-illustration_53876-40450.jpg"
            alt={group.group_name}
          />
        </div>

        {/* Group Info */}
        <div className="w-7/12 bg-slate-200 p-2 lg:p-5 rounded-lg">
          <h1 className="text-2xl lg:text-3xl font-bold text-green-600">
            {group.group_name}
          </h1>
          <p className="text-sm text-gray-800">Description : {group.description}</p>
        </div>

        {/* Group Details & Join Button */}
        <div className="w-3/12 flex flex-col gap-3 bg-slate-200 rounded-lg p-5">
          <p className="text-sm text-gray-800">DPS Type: {group.dps_type}</p>
          <p>Installment: {group.installment} BDT</p>
          <p>Members: {group.members_count}</p>
          <div className="flex justify-center">
            <button className="p-3 w-6/12 text-bold bg-green-400 rounded-lg hover:bg-green-700 hover:text-white">
              Join
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinedGroupCard;
