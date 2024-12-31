import React from "react";

const MyGroups = () => {
  return (
    <>
      <section className="max-w-[1024px] mx-auto">
        <div>
          {/* Search */}
          <div className="flex justify-center gap-2 p-5">
            <div>
              <div>
                <input
                  className="input input-bordered join-item"
                  placeholder="Search"
                />
              </div>
            </div>
            <select className="select select-bordered join-item">
              <option disabled selected>
                Filter
              </option>
              <option>Sci-fi</option>
              <option>Drama</option>
              <option>Action</option>
            </select>
            <div className="indicator">
              <button className="bg-green-300 p-3 font-semibold rounded-lg hover:bg-green-700 hover:text-white">
                Search
              </button>
            </div>
          </div>

          {/* Groups */}
          <div className="flex flex-col gap-3">
            {/* Single group boiler plate */}
            <div className="flex flex-col lg:flex-row gap-3 bg-slate-100 p-2 rounded-xl border-2 border-gray-400">
              {/* group img */}
              <div className="border w-3/12 border-green-500 rounded-xl p-1">
                <img
                  className="min-w-full flex justify-center align-bottom"
                  src="https://img.freepik.com/free-vector/finance-financial-performance-concept-illustration_53876-40450.jpg"
                  alt=""
                />
              </div>
              {/* Group Info */}
              <div className="w-7/12 bg-slate-200 p-2 lg:p-5 rounded-lg">
                {/* Group name */}
                <h1 className="text-2xl lg:text-3xl font-bold text-green-600">Goal Settlers</h1>
                <p className="text-xs lg:text-sm text-gray-800">Our goal is to raise $10,000 in 30 days, with funds allocated to. Backers will receive tiered rewards, such as early access or exclusive merchandise. We’ll share our journey through engaging storytelling, visuals, and updates, using social media and community outreach to amplify our message. Transparency will be maintained throughout, ensuring backers see the impact of their contributions and receive their rewards on time.</p>
              </div>

              {/* Group inside info & join */}
              <div className="w-3/12 flex flex-col gap-3 bg-slate-200 rounded-lg p-5">
                <p className="text-">Installments : 500 BDT</p>
                <p>Scheme : Weekly</p>
                <p>Members : 32/50</p>
                <div className="flex justify-center">
                <button className="p-3 w-6/12 text-bold bg-green-400 rounded-lg hover:bg-green-700 hover:text-white">Join</button>
                </div>

              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-3 bg-slate-100 p-2 rounded-xl border-2 border-gray-400">
              {/* group img */}
              <div className="border w-3/12 border-green-500 rounded-xl p-1">
                <img
                  className="min-w-full flex justify-center align-bottom"
                  src="https://img.freepik.com/free-vector/finance-financial-performance-concept-illustration_53876-40450.jpg"
                  alt=""
                />
              </div>
              {/* Group Info */}
              <div className="w-7/12 bg-slate-200 p-2 lg:p-5 rounded-lg">
                {/* Group name */}
                <h1 className="text-2xl lg:text-3xl font-bold text-green-600">Goal Settlers</h1>
                <p className="text-xs lg:text-sm text-gray-800">Our goal is to raise $10,000 in 30 days, with funds allocated to. Backers will receive tiered rewards, such as early access or exclusive merchandise. We’ll share our journey through engaging storytelling, visuals, and updates, using social media and community outreach to amplify our message. Transparency will be maintained throughout, ensuring backers see the impact of their contributions and receive their rewards on time.</p>
              </div>

              {/* Group inside info & join */}
              <div className="w-3/12 flex flex-col gap-3 bg-slate-200 rounded-lg p-5">
                <p className="text-">Installments : 500 BDT</p>
                <p>Scheme : Weekly</p>
                <p>Members : 32/50</p>
                <div className="flex justify-center">
                <button className="p-3 w-6/12 text-bold bg-green-400 rounded-lg hover:bg-green-700 hover:text-white">Join</button>
                </div>

              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-3 bg-slate-100 p-2 rounded-xl border-2 border-gray-400">
              {/* group img */}
              <div className="border w-3/12 border-green-500 rounded-xl p-1">
                <img
                  className="min-w-full flex justify-center align-bottom"
                  src="https://img.freepik.com/free-vector/finance-financial-performance-concept-illustration_53876-40450.jpg"
                  alt=""
                />
              </div>
              {/* Group Info */}
              <div className="w-7/12 bg-slate-200 p-2 lg:p-5 rounded-lg">
                {/* Group name */}
                <h1 className="text-2xl lg:text-3xl font-bold text-green-600">Goal Settlers</h1>
                <p className="text-xs lg:text-sm text-gray-800">Our goal is to raise $10,000 in 30 days, with funds allocated to. Backers will receive tiered rewards, such as early access or exclusive merchandise. We’ll share our journey through engaging storytelling, visuals, and updates, using social media and community outreach to amplify our message. Transparency will be maintained throughout, ensuring backers see the impact of their contributions and receive their rewards on time.</p>
              </div>

              {/* Group inside info & join */}
              <div className="w-3/12 flex flex-col gap-3 bg-slate-200 rounded-lg p-5">
                <p className="text-">Installments : 500 BDT</p>
                <p>Scheme : Weekly</p>
                <p>Members : 32/50</p>
                <div className="flex justify-center">
                <button className="p-3 w-6/12 text-bold bg-green-400 rounded-lg hover:bg-green-700 hover:text-white">Join</button>
                </div>

              </div>
              
            </div>

            <div className="flex flex-col lg:flex-row gap-3 bg-slate-100 p-2 rounded-xl border-2 border-gray-400">
              {/* group img */}
              <div className="border w-3/12 border-green-500 rounded-xl p-1">
                <img
                  className="min-w-full flex justify-center align-bottom"
                  src="https://img.freepik.com/free-vector/finance-financial-performance-concept-illustration_53876-40450.jpg"
                  alt=""
                />
              </div>
              {/* Group Info */}
              <div className="w-7/12 bg-slate-200 p-2 lg:p-5 rounded-lg">
                {/* Group name */}
                <h1 className="text-2xl lg:text-3xl font-bold text-green-600">Goal Settlers</h1>
                <p className="text-xs lg:text-sm text-gray-800">Our goal is to raise $10,000 in 30 days, with funds allocated to. Backers will receive tiered rewards, such as early access or exclusive merchandise. We’ll share our journey through engaging storytelling, visuals, and updates, using social media and community outreach to amplify our message. Transparency will be maintained throughout, ensuring backers see the impact of their contributions and receive their rewards on time.</p>
              </div>

              {/* Group inside info & join */}
              <div className="w-3/12 flex flex-col gap-3 bg-slate-200 rounded-lg p-5">
                <p className="text-">Installments : 500 BDT</p>
                <p>Scheme : Weekly</p>
                <p>Members : 32/50</p>
                <div className="flex justify-center">
                <button className="p-3 w-6/12 text-bold bg-green-400 rounded-lg hover:bg-green-700 hover:text-white">Join</button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default MyGroups;
