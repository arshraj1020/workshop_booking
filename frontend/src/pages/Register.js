import React, { useState } from "react";
import "./Register.css";

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>

      {/* Form */}
      <div className="container">
        <div className="register-card">

          <h2>Coordinator Registration</h2>

          {/* Account Info */}
          <h4>Account Information</h4>

          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email Address" />

          <div className="row">
            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />
              <span onClick={() => setShowPassword(!showPassword)}>👁️</span>
            </div>

            <input type="password" placeholder="Confirm Password" />
          </div>

          {/* Personal Info */}
          <h4>Personal Information</h4>

          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Phone Number" />

          {/* Professional */}
          <h4>Professional Details</h4>

          <input type="text" placeholder="Institute" />
          <input type="text" placeholder="Department" />

          <div className="row">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
          </div>

          <select>
            <option>How did you hear about us?</option>
            <option>FOSSEE Website</option>
            <option>Friends</option>
            <option>College</option>
          </select>

          <button className="register-btn">
            Complete Registration
          </button>

        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        Developed by FOSSEE group, IIT Bombay
      </div>
    </div>
  );
}

export default Register;