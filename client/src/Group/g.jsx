import React from "react";

const CreateGroup = () => {
  return (
    <>
      <section className="border-4 border-green-500 bg-slate-100 m-2 p-2 flex flex-col max-w-[1024px] mx-auto">
        {/* Header */}
        <div>
          <h1 className="text-2xl lg:text-5xl p-2 lg:p-5 font-bold text-green-500 text-center">
            Group Creation
          </h1>
        </div>

        {/* form */}
        <form className="p-2  -red-500 grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-5">
          {/* Group info */}
          <div className="p-2 lg:p-5 rounded-xl lg:rounded-3xl shadow-xl lg:shadow-xl bg-green-100  -blue-500">
            <h2 className="text-xl lg:text-2xl font-semibold p-1">
              Group Information
            </h2>
            <div className="card-body">
              {/* Group name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Group name</span>
                </label>
                <input
                  type="text"
                  placeholder="group name"
                  className="input input-ed"
                  required
                />
              </div>

              {/* Group details */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Group details</span>
                </label>
                <input
                  type="text"
                  placeholder="give the details about this group"
                  className="input input-ed"
                  required
                />
              </div>

              {/* Group member number */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Group member</span>
                </label>
                <input
                  type="number"
                  placeholder="set how many members can join"
                  className="input input-ed"
                  required
                />
              </div>
            </div>
          </div>

          {/* Plan details */}
          <div className="p-2 lg:p-5 rounded-xl lg:rounded-3xl shadow-xl lg:shadow-xl bg-green-100  -indigo-500">
            <h2 className="text-xl lg:text-2xl font-semibold p-1">
              Plan details
            </h2>

            <div className="card-body">
              {/* DPS type */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">DPS type</span>
                </label>
                <input
                  type="text"
                  placeholder="group name"
                  className="input input-ed"
                  required
                />
              </div>

              {/* Time period */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Time period</span>
                </label>
                <input
                  type="number"
                  placeholder=""
                  className="input input-ed"
                  required
                />
              </div>

              {/* Amount to invest */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Amount</span>
                </label>
                <input
                  type="number"
                  placeholder="set how much can be invested"
                  className="input input-ed"
                  required
                />
              </div>

              {/* Start time */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Start time</span>
                </label>
                <input
                  type="date"
                  placeholder="set how much can be invested"
                  className="input input-ed"
                  required
                />
              </div>
            </div>
          </div>

          {/* Payment methods */}
          <div className="p-2 lg:p-5 rounded-xl lg:rounded-3xl shadow-xl lg:shadow-xl bg-green-100  -indigo-500">
            <h2 className="text-xl lg:text-2xl font-semibold p-1">
              Payment methods
            </h2>

            <div className="card-body">
              {/* Bkash */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Bkash number</span>
                </label>
                <input
                  type="number"
                  placeholder="bkash"
                  className="input input-ed"
                  required
                />
              </div>

              {/* Nagad */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Nagad number</span>
                </label>
                <input
                  type="number"
                  placeholder="nagad"
                  className="input input-ed"
                  required
                />
              </div>

              {/* Rocket  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rocket number</span>
                </label>
                <input
                  type="number"
                  placeholder="rocket"
                  className="input input-ed"
                  required
                />
              </div>
            </div>
          </div>

          {/* Regulations */}
          <div className="p-2 lg:p-5 rounded-xl lg:rounded-3xl shadow-xl lg:shadow-xl bg-green-100  -indigo-500">
            <h2 className="text-xl lg:text-2xl font-semibold p-1">
              Regulations
            </h2>

            <div className="card-body">
              {/* Goal */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Goal</span>
                </label>
                <input
                  type="text"
                  placeholder="state your goal"
                  className="input input-ed"
                  required
                />
              </div>

              {/* Rules */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rules</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your rules"
                  className="input input-ed"
                  required
                />
              </div>
            </div>
          </div>


        </form>

        {/* Button */}
        <div className="flex w-full justify-center p-3">
        <button className="bg-green-300 p-5 rounded-xl shadow-lg text-xl lg:text-2xl font-semibold lg:w-4/12 w-6/12 hover:bg-green-700 text-green-900 hover:text-white text-center">Create Group</button>
        </div>
      </section>
    </>
  );
};

export default CreateGroup;
