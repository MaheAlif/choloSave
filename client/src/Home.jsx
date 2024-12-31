import React from "react";
import HomeBg from "/HomeBg.png";
import HomeBg2 from "/HomeBg2.jpg";
import { NavLink } from "react-router";

const Home = () => {
  return (
    <>
      <div
        id="home"
        className="py-3  border-purple-500 min-h-[500px] bg-gradient-to-r from-indigo-900 via-purple-500 to-pink-500 bg-opacity-5 "
        style={{
          backgroundImage: { HomeBg2 },
        }}
      >
        <div className="flex justify-center">
        <div className="flex flex-col p-2 lg:p-10  lg:flex-row gap-2 lg:gap-5 justify-center glass rounded-2xl w-9/12">
          <div className="lg:w-1/2 p-3 lg:ml-32  border-pink-400 flex flex-col gap-3 justify-center align-middle">
            <h1 className="text-2xl lg:text-8xl font-bold text-white">
              <span className="text-blue-500">Cholo</span>Save
            </h1>
            <p className="text-sm lg:text-xl text-white font-normal">
              Empowering groups to save, invest, and achieve shared financial
              goals seamlessly
            </p>
            <div className="flex lg:justify-start">
              <NavLink to="register" className="btn btn-outline btn-info">
                Register
              </NavLink>
            </div>
          </div>

          <div className="lg:w-1/2 border-pink-400  min-h-full flex lg:flex-col text-center justify-center align-middle">
            <img className="max-h-[300px] max-w-[300px]" src={HomeBg} alt="" />
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Home;
