import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleForm = () => {
    setIsSignup((prev) => !prev);
  };

  return (
    <div className="container"> {/* New parent div */}
      <div className="main">
        <div className={`signup ${isSignup ? "active" : ""}`}>
          <h1 onClick={toggleForm}>Signup</h1>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Signup</button>
        </div>
        <div className={`login ${!isSignup ? "active" : ""}`}>
          <h1 onClick={toggleForm}>Login</h1>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
