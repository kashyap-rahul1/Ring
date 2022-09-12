import React from "react";
import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    let user = localStorage.getItem("user");
    let pass = localStorage.getItem("pass");
    if (email === user && password === pass) {
      localStorage.setItem("flag", "true");
      console.log("valid credentials");
      navigate("./entries");
    } else {
      console.log("Invalid credentials");
      alert("Invalid credentials");
    }
  };
  return (
    <>
      <div className="main">
        <div className="container  d-flex justify-content-center align-item-center">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <b>Email address</b>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                <b>Password</b>
              </label>
              <input
                type="text"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <button type="submit" className="btn btn-primary" onClick={login}>
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
