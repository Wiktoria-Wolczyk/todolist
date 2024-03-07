import React from "react";
import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  return (
    <main className="pageBackground">
      <div className="loginContainer">
        <span className="loginText">Login</span>
        <div className="divForLabelUsername">
          <label for="userName" className="username-password-class-text">
            Username
          </label>
        </div>
        <input type="text" className="inputUsername"></input>
        <div className="divForLabelUserpassword">
          <label for="userPassword" className="username-password-class-text">
            Password
          </label>
        </div>
        <input type="text" className="inputUserpassword"></input>
        <div className="divForForgotpassword">
          <span className="forgotPassword">Forgot password?</span>
        </div>
        <button
          className="loginButton"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          LOGIN
        </button>
        <div className="signUpUsingFbXGoogleContainer"></div>
        <div className="signUpUsingSignUp">
          <span className="textOrSignUpUsing">Or Sign Up Using</span>
          <span className="textSignUp" onClick={() => navigate("/register")}>
            SIGN UP
          </span>
        </div>
      </div>
    </main>
  );
};

export default Auth;
