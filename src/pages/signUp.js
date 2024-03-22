import React, { useState } from "react";
import Button from "../components/button";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const initialState = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
export function SignUp({ setActive }) {
  const [state, setState] = useState(initialState);
  const { fullName, email, password, confirmPassword } = state;
  function handleChange(e) {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value });
  }
  const navigate = useNavigate();
  async function handleAuth(e) {
    e.preventDefault();
    if (password !== confirmPassword)
      return toast.error(`Password Don't Match`);
    if (email && fullName && password && confirmPassword) {
      try {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateProfile(user, { displayName: fullName });
        setActive("home");
        toast.success("Account Created Successfully");
        navigate("/");
      } catch (error) {
        toast.error(error.message);
      }
    } else {
      return toast.warn("All fields are required");
    }
  }

  return (
    <section className="auth-cont">
      <div className="auth-form-cont">
        <h3 className="auth-title">Sign Up</h3>
        <form className="signup-form auth-form" onSubmit={handleAuth}>
          <input
            name="fullName"
            type="text"
            className="fullName"
            placeholder="Full Name"
            onChange={handleChange}
            value={fullName}
          />
          <input
            name="email"
            type="email"
            className="email-input"
            placeholder="email"
            onChange={handleChange}
            value={email}
          />
          <input
            name="password"
            type="password"
            className="password"
            placeholder="Password"
            onChange={handleChange}
            value={password}
          />
          <input
            name="confirmPassword"
            type="password"
            className="confirm-password"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={confirmPassword}
          />
          <Button style={{ width: "100%", backgroundColor: "#FFD050" }}>
            Sign Up
          </Button>
          {/* <p className="forgot-password-btn">Forgot Password?</p>
          <div className="or-cont">
            <span className="or-line"></span>Or<span className="or-line"></span>
          </div>
          <Button type="submit">
            <span className="google-span">
              <img src="/images/google.svg" alt="google icon" />
              Login With Google
            </span>
          </Button> */}
        </form>
      </div>
    </section>
  );
}
