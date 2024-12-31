import React from "react";
import "animate.css/animate.min.css";
import { NavLink } from "react-router"; // Correct import
import BgImage from "/LoginBg.png"; // Importing image
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  return (
    <>
      <div className="animate__animated animate__backInDown">
        <div className="hero bg-slate-100 min-h-screen">
          <div className="hero-content flex flex-col lg:flex-row items-center justify-center w-full max-w-4xl">
            {/* Image box */}
            <div className="w-full h-full flex justify-center items-center bg-base-100 border border-gray-300 rounded-lg shadow-lg">
              <img
                src={BgImage}
                alt="Login Background"
                className="w-full max-h-[300px] lg:max-h-[600px] object-cover rounded-lg"
              />
            </div>

            {/* Form box */}
            <div className="w-full lg:h-[600px] bg-slate-300 border border-gray-300 rounded-lg shadow-2xl">
              <h1 className="text-4xl font-semibold text-center text-[#3ed268] p-5">
                Register
              </h1>
              <form className="card-body">
                <div className="form-control animate__animated animate__fadeInLeft animate__delay-1s">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control animate__animated animate__fadeInLeft animate__delay-2s">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>

                <div className="form-control mt-6 animate__animated animate__fadeInLeft animate__delay-3s">
                  <button className="btn btn-primary  w-full">Register</button>
                </div>
                <div className="text-center">
                  <p>Already registered? Then Login here</p>
                  <div className="animate__animated animate__tada animate__delay-4s">
                    <NavLink to="/login" className="text-blue-500">
                      Login{" "}
                    </NavLink>
                  </div>
                </div>
                <div className="flex flex-col gap-2 justify-center  ">
                  <p className="text-sm text-center font-normal">
                    Or, register with Google!
                  </p>
                  <div className=" flex justify-center">
                    <div className="flex gap-1 lg:gap-2 text-center align-middle justify-center bg-slate-100 w-44 p-2 lg:p-4 rounded-xl lg:rounded-3xl hover:bg-slate-400">
                      <FcGoogle className="min-h-5 min-w-5 lg:min-h-9 lg:min-w-9 mt-1 flex justify-center align-middle"></FcGoogle>
                      <div className="text-xl lg:text-3xl lg:mt-1 font-semibold text-gray-700">
                        Google
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
