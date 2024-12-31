import React from "react";
import arrowBack from "./arrow-back.svg";
import items from "./items.png";
import removeRedEye from "./remove-red-eye.svg";
import "./style.css";

export const ScreenSignIn = () => {
  return (
    <main className="screen-sign-in">
    

      <section className="overlap">
        <div className="group">
          <h1 className="div">Get Started</h1>
          <img className="arrow-back" alt="Arrow back" src={arrowBack} />
        </div>
      </section>

      <p className="p">Please fill your details to login.</p>

      <form className="login" aria-label="Login form">
        <div className="email">
          <div className="username-email-wrapper">
            <input
              className="username-email"
              id="input-1"
              placeholder="Username/email"
              type="email"
              aria-label="Username or email"
            />
          </div>
        </div>

        <div className="password">
          <div className="overlap-2">
            <label className="label" htmlFor="input-1">
              Password
            </label>
            <img
              className="remove-red-eye"
              alt="Toggle password visibility"
              src={removeRedEye}
            />
          </div>
        </div>
      </form>

      <div className="get-started">
        <div className="overlap-group">
          <button className="text-wrapper" type="button">
            Get Started
          </button>
        </div>
      </div>

      <p className="text-wrapper-3">
        <a href="/forgot-password" className="forgot-password-link">
          forgot password?
        </a>
      </p>

      <footer className="navigation-bar">
        <img className="items" alt="Navigation items" src={items} />
      </footer>

      <p className="new-member-register">
        <span className="span">New member? </span>
        <a href="/register" className="text-wrapper-2">
          Register
        </a>
      </p>
    </main>
  );
};
