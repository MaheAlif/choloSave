import React, { useContext, useState } from "react";
import "animate.css/animate.min.css";
import { NavLink, useNavigate } from "react-router"; // Corrected import
import Swal from "sweetalert2";
import BgImage from "/LoginBg.png";
import { userContext } from "./Provider/ContextProvider"; // Import userContext

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { setUser } = useContext(userContext); // Access setUser from context
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch(
        "http://localhost/CholoSave_Backend/api/login.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful:", data);
        Swal.fire({
          title: "Success!",
          text: "Logged in successfully!",
          icon: "success",
          confirmButtonText: "Continue",
        });

        setUser(data); // Save user data in context
        navigate("/"); // Redirect to the homepage
      } else {
        console.error("Login failed:", data);
        setErrorMessage(data.message || "Failed to login. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
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
            <h1 className="text-4xl font-semibold text-center text-green-500 p-5">
              Login
            </h1>
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

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
                  {isLoading ? "Logging in..." : "Login"}
                </button>
              </div>

              <div className="text-center">
                <p>Havent registered yet?</p>
                <NavLink to="/register" className="text-blue-500">
                  Register
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
