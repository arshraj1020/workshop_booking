import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [showMsg, setShowMsg] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  // Auto hide message after 3 sec
  useEffect(() => {
    if (location.state?.message) {
      setTimeout(() => setShowMsg(false), 3000);
    }
  }, [location.state]);

  return (
    <div>
      <div className="container">
        <div className="login-card">

          {/* ✅ SUCCESS MESSAGE */}
          {location.state?.message && showMsg && (
            <div className="success-msg">
              {location.state.message}
            </div>
          )}

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