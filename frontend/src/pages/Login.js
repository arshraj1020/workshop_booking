import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <div className="container">
        <div className="login-card">

          <h2>Welcome Back 👋</h2>
          <p>Login to continue to FOSSEE Workshops</p>

          <input type="text" placeholder="Username" />

          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <span onClick={() => setShowPassword(!showPassword)}>👁️</span>
          </div>

          <button>Sign In</button>

          <p
            className="link"
            onClick={() => navigate("/register")}
          >
            Create a new account
          </p>

          <p className="link">Forgot your password?</p>

        </div>
      </div>
    </div>
  );
}

export default Login;