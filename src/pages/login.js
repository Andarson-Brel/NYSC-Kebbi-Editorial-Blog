import React, { useState } from "react";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
const initialState = {
  email: "",
  password: "",
};
export function Login({ setActive }) {
  const [state, setState] = useState(initialState);
  const { email, password } = state;
  function handleChange(e) {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value });
  }
  const navigate = useNavigate();
  async function handleLogin(e) {
    e.preventDefault();
    // if (password) return toast.error(`Password Don't Match`);
    if (email && password) {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      console.log(user);
      setActive("home");
      toast.success("logged in");
    } else {
      return toast.warn("All fields are required");
    }
    navigate("/");
  }
  return (
    <section className="auth-cont">
      <div className="auth-form-cont">
        <h3 className="auth-title">Login</h3>
        <form className="signup-form auth-form" onSubmit={handleLogin}>
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
          <Button style={{ width: "100%", backgroundColor: "#FFD050" }}>
            Log In
          </Button>
          <p className="forgot-password-btn">Forgot Password?</p>
          <div className="or-cont">
            <span className="or-line"></span>Or<span className="or-line"></span>
          </div>
          <Button>
            <span className="google-span">
              <img src="/images/google.svg" alt="google icon" />
              Login With Google
            </span>
          </Button>
        </form>
      </div>
    </section>
  );
}
