import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [showMsg, setShowMsg] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Show message only if exists
  useEffect(() => {
    if (location.state?.message) {
      setShowMsg(true);

      const timer = setTimeout(() => {
        setShowMsg(false);
      }, 3000);

      return () => clearTimeout(timer); // cleanup
    }
  }, [location.state]);

  return (
    <div>
      <div className="container">
        <div className="login-card">

          {/* ✅ SUCCESS MESSAGE */}
          {showMsg && location.state?.message && (
            <div className="success-msg">
              {location.state.message}
            </div>
          )}

          <h2>Welcome Back 👋</h2>
          <p>Login to continue to FOSSEE Workshops</p>

          {/* Username */}
          <input type="text" placeholder="Username" />

          {/* Password */}
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              👁️
            </span>
          </div>

          {/* Login Button */}
          <button>Sign In</button>

          {/* Register */}
          <p
            className="link"
            onClick={() => navigate("/register")}
          >
            Create a new account
          </p>

          {/* Forgot Password */}
          <p
            className="link"
            onClick={() => navigate("/forgot-password")}
          >
            Forgot your password?
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;