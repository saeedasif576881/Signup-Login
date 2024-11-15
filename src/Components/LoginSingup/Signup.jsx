import React, { useState } from "react";
import "./styles.css";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import passward_icon from "../Assets/password.png";
const Signup = () => {
  const [action, setAction] = useState("Login");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="person" />
            <input type="text" placeholder="Name" />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="email" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={passward_icon} alt="passward" />
          <input type="passward" placeholder="Passward" />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot-pas">
          Forgot Passward? <span>Click Here!</span>
        </div>
      )}

      <div className="submit-cont">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default Signup;
