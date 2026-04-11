import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username && password) {
      alert("Login successful 🚀");
    } else {
      alert("Enter credentials");
    }
  };

  return (
    <div className="login-page">

      {/* Navbar */}
      <div className="navbar">
        <h2>FOSSEE Workshops</h2>
        <span>Home</span>
      </div>

      {/* Login Card */}
      <div className="login-container">
        <div className="login-card">

          <h2 className="title">Welcome Back 👋</h2>
          <p className="subtitle">Login to continue to FOSSEE Workshops</p>

          <input
            type="text"
            placeholder="👤 Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="🔒 Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleLogin}>Sign In</button>

          <p className="link">Create a new account</p>
          <p className="link">Forgot your password?</p>

        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        Developed by FOSSEE group, IIT Bombay
      </div>

    </div>
  );
}

export default Login;
