import React from "react";
import P1 from "/visionP1.png";
import P2 from "/visionP2.png";
import P3 from "/visionP3.png";
import VisionLogo from "/visionLogo.png";

const Vision = () => {
  return (
    <>
      <div
        id="vision"
        className="mb-10 border-purple-500 min-h-[500px] bg-gradient-to-r from-indigo-900 via-purple-500 to-pink-500 bg-opacity-5"
        style={{
          backgroundImage: {},
        }}
      >
        <div className="flex justify-center lg:p-2 w-full ">
          <div className="flex flex-col w-9/12  lg:p-10  lg:flex-row-reverse gap-2 lg:gap-5 justify-center align-middle glass rounded-2xl">
            <div className="lg:w-1/2 p-3 lg:ml-32 border-pink-400 flex flex-col gap-3 justify-center align-middle">
              <h1 className="text-2xl lg:text-8xl font-bold text-white">
                Our Vision
              </h1>
              <p className="text-sm lg:text-xl text-white font-normal">
                Our vision is to foster collaborative financial growth by
                enabling groups to save, invest, and achieve shared goals
                through transparency, innovation, and trust.
              </p>
              <div className="flex lg:justify-start"></div>
            </div>

            <div className="lg:w-1/2 relative  border-pink-400">
              {/* Image section */}
              <div className="   min-h-full w-full  flex gap-3 lg:flex-row text-center justify-center align-middle">
                <img className="max-h-[300px] lg:max-h-[400px] max-w-[300px]" src={P1} alt="" />
                <div className="flex flex-col gap-2">
                  <img
                    className="min-h-[150px] lg:min-h-[200px] lg:max-w-[300px]"
                    src={P2}
                    alt=""
                  />
                  <img
                    className="min-h-[150px] lg:min-h-[200px] lg:max-w-[300px]"
                    src={P3}
                    alt=""
                  />
                </div>
              </div>

              {/* Side panel */}
              <div className="lg:absolute relative    border border-yellow-300 bottom-0 lg:left-32 flex bg-[#8AEDFF] p-3 gap-2 rounded-lg justify-center align-middle">
                <img className="mt-2 ml-2" src={VisionLogo} alt="" />
                <p className="text-xs">
                  We believe in the power of community-driven savings and smart
                  investments, creating opportunities for everyone to grow
                  financially together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vision;
