import React, { useContext, useState } from "react";
import "animate.css/animate.min.css";
import { NavLink, useNavigate } from "react-router"; // Correct import
import BgImage from "/LoginBg.png"; // Importing image
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { userContext } from "./Provider/ContextProvider";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Getting context from contextProvider to set current user
  const { setUser } = useContext(userContext);

  // setting up navigation for after registration done!!!
  const navigate = useNavigate();

  // console.log(
  //   "Inside register : ",
  //   name,
  //   " => ",
  //   phoneNumber,
  //   " => ",
  //   email,
  //   " => ",
  //   password
  // );

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    // Sending user data to database
    try {
      const response = await fetch(
        "http://localhost/CholoSave_Backend/api/register.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            phone_number: phoneNumber.toString(),
            password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log("Registration successful:", data);
        Swal.fire({
          title: "Success!",
          text: "Registered successfully!",
          icon: "success",
          confirmButtonText: "Continue",
        });

        setUser(data); // Save user data in context
        navigate("/login"); // Redirect to the homepage
      } else {
        console.log("Registration failed:", data);
        setErrorMessage(
          data.message || "Failed to register. Please try again."
        );
      }
    } catch (error) {
      console.error("Error during register:", error);
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="animate__animated animate__backInDown">
        <div className="hero bg-slate-100 min-h-screen">
          <div className="hero-content min-h-full flex flex-col lg:flex-row items-center justify-center w-full max-w-4xl">
            {/* Image box */}
            <div className="w-full h-full flex justify-center items-center bg-base-100 border border-gray-300 rounded-lg shadow-lg">
              <img
                src={BgImage}
                alt="Login Background"
                className="w-full max-h-[300px] lg:min-h-[800px] object-cover rounded-lg"
              />
            </div>

            {/* Form box */}
            <div className="w-full lg:h-[800px] bg-slate-300 border border-gray-300 rounded-lg shadow-2xl">
              <h1 className="text-4xl font-semibold text-center text-[#3ed268] p-5">
                Register
              </h1>
              <form className="card-body" onSubmit={handleRegister}>
                <div className="form-control animate__animated animate__fadeInLeft animate__delay-1s">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                    required
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <div className="form-control animate__animated animate__fadeInLeft animate__delay-1s">
                  <label className="label">
                    <span className="label-text">Phone number</span>
                  </label>
                  <input
                    type="number"
                    placeholder="phone number"
                    className="input input-bordered"
                    required
                    onChange={(event) => setPhoneNumber(event.target.value)}
                  />
                </div>
                <div className="form-control animate__animated animate__fadeInLeft animate__delay-1s">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                    onChange={(event) => setEmail(event.target.value)}
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
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>

                <div className="form-control mt-6 animate__animated animate__fadeInLeft animate__delay-3s">
                  {errorMessage && (
                    <div className="text-red-500 text-center my-2">
                      {errorMessage}
                    </div>
                  )}

                  <div className="form-control mt-6">
                    <button
                      type="submit"
                      className={`btn btn-primary w-full ${
                        isLoading ? "btn-disabled" : ""
                      }`}
                    >
                      {isLoading ? "Registerring in..." : "Register"}
                    </button>
                  </div>
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
