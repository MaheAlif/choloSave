import React from "react";
import "animate.css/animate.min.css";
import { NavLink } from "react-router"; // Correct import
import BgImage from "/LoginBg.png"; // Importing image

const Login = () => {
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
                className="w-full max-h-[500px] object-cover rounded-lg"
              />
            </div>

            {/* Form box */}
            <div className="w-full h-[500px] bg-base-100 border border-gray-300 rounded-lg shadow-lg">
              <h1 className="text-4xl font-semibold text-center text-green-500 p-5">Login</h1>
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
                  <button className="btn btn-primary w-full">Login</button>
                </div>
                <div className="text-center">
                  <p>Havent registered yet?</p>
                  <div className="animate__animated animate__swing animate__delay-4s">
                    <NavLink to="/register" className="text-blue-500">
                      Register
                    </NavLink>
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

export default Login;
