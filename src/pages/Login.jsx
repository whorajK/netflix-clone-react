import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { logIn, user } = UserAuth();
  const navigate = useNavigate(); // helps in navigate through pages

  // Handles user sign ups
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/862cc171-8df5-418c-886f-2aaf767ae159/2e1414e3-cdae-473f-af07-31f9b74741f6/IN-en-20230130-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="/"
      />
      <div className=" bg-black/60 fixed top-0 left-0 w-full h-full"></div>

      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[550px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold">Sign In</h1>
            {error ? <p className="mt-2 p-3 bg-red-500">{error}</p> : null}
            <form className="w-full flex flex-col py-4" onSubmit={handleSubmit}>
              <input
                className="p-3 my-2 bg-gray-700 rounded"
                type="email"
                placeholder="email.."
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="p-3 my-2 bg-gray-700 rounded"
                type="password"
                placeholder="password.."
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="sumit"
                className="bg-red-600 py-3 my-6 rounded font-bold"
              >
                Sign In
              </button>

              <div className="flex justify-between items-center text-sm text-gray-600">
                <p>
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </p>
                <p>Need help?</p>
              </div>
              <p className="py-8">
                <span className="text-gray-600">New to Netflix?</span>{" "}
                <Link to="/signup">Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
