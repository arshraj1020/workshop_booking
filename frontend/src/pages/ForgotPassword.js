import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleReset = () => {
    // later: connect Django API

    setMessage("Check your email to reset your password.");
  };

  return (
    <div className="container">
      <div className="login-card">

        <h2>Forgot Password?</h2>
        <p>
          Enter your registered email address and we'll send you instructions to
          reset your password
        </p>

        {message && (
          <div className="success-msg">
            {message}
          </div>
        )}

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="row">
          <button onClick={handleReset}>Send Reset Link</button>

          <button
            className="cancel-btn"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
}

export default ForgotPassword;