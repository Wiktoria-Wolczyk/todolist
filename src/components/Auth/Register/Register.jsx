import React from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <main className="pageBackground">
      <div className="loginContainer">
        <span className="loginText">Sign up</span>
        <div className="divForLabelUsername">
          <label for="userName" className="username-password-class-text">
            Username
          </label>
        </div>
        <div className="divForLabelUsername">
          <label for="email" className="username-password-class-text">
            Email
          </label>
        </div>
        <input type="text" className="inputUsername"></input>
        <div className="divForLabelUserpassword">
          <label for="userPassword" className="username-password-class-text">
            Password
          </label>
        </div>
        <input type="text" className="inputUserpassword"></input>
        <button className="loginButton">Sign up</button>
        <div className="signUpUsingFbXGoogleContainer"></div>
        <div className="signUpUsingSignUp">
          <span className="textSignUp" onClick={() => navigate(-1)}>
            SIGN IN
          </span>
        </div>
      </div>
    </main>
  );
};

export default Register;
