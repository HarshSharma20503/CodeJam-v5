import React, { useState } from "react";

const Auth = () => {
  const [isLoginActive, setIsLoginActive] = useState(true);

  const handleSignupClick = (e) => {
    e.preventDefault();
    if (isLoginActive) {
      setIsLoginActive(false);
    }
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    if (!isLoginActive) {
      setIsLoginActive(true);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <div className="w-[350px] h-[500px] relative overflow-hidden bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] rounded-lg shadow-2xl md:w-[300px] md:h-[450px] sm:w-[260px] sm:h-[400px]">
        {/* Signup Form */}
        <div className="relative w-full h-full">
          <form onSubmit={handleSignupClick} className="w-full">
            <h1
              className={`text-white text-4xl font-bold text-center mt-14 mb-14 cursor-pointer transition-transform duration-500 md:text-3xl md:my-12 sm:text-2xl sm:my-10 ${
                !isLoginActive ? "scale-100" : "scale-60"
              }`}
            >
              Sign up
            </h1>
            <input
              type="text"
              placeholder="User name"
              className="w-3/5 h-10 bg-[#e0dede] mx-auto mb-5 px-3 block rounded-md outline-none md:w-4/5 sm:w-4/5"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-3/5 h-10 bg-[#e0dede] mx-auto mb-5 px-3 block rounded-md outline-none md:w-4/5 sm:w-4/5"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-3/5 h-10 bg-[#e0dede] mx-auto mb-5 px-3 block rounded-md outline-none md:w-4/5 sm:w-4/5"
            />
            <button className="w-3/5 h-10 mx-auto mt-5 block text-white bg-[#573b8a] font-bold text-base rounded-md transition-colors duration-200 hover:bg-[#6d44b8] md:w-4/5 sm:w-4/5">
              Sign up
            </button>
          </form>
        </div>

        {/* Login Form */}
        <div
          className={`absolute w-full h-[460px] bg-[#eee] rounded-[60%/10%] transition-transform duration-800 md:h-[420px] sm:h-[380px] ${
            isLoginActive ? "translate-y-[-180px]" : "translate-y-[-500px]"
          }`}
        >
          <form onSubmit={handleLoginClick}>
            <h1
              className={`text-[#573b8a] text-4xl font-bold text-center mt-14 mb-14 cursor-pointer transition-transform duration-500 md:text-3xl md:my-12 sm:text-2xl sm:my-10 ${
                isLoginActive ? "scale-60" : "scale-100"
              }`}
            >
              Login
            </h1>
            <input
              type="email"
              placeholder="Email"
              className="w-3/5 h-10 bg-[#e0dede] mx-auto mb-5 px-3 block rounded-md outline-none md:w-4/5 sm:w-4/5"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-3/5 h-10 bg-[#e0dede] mx-auto mb-5 px-3 block rounded-md outline-none md:w-4/5 sm:w-4/5"
            />
            <button className="w-3/5 h-10 mx-auto mt-5 block text-white bg-[#573b8a] font-bold text-base rounded-md transition-colors duration-200 hover:bg-[#6d44b8] md:w-4/5 sm:w-4/5">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
