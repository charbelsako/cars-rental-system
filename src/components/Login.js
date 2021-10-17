import axios from "axios";
import React, { useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import AuthContext from "../context/auth";
import { validateEmail } from "./utils";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { setAuthenticated, authenticated, setName } = useContext(AuthContext);

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const login = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email");
      return false;
    }

    if (email === "" || password === "") {
      setError("Please fill email and password");
      return false;
    }

    try {
      const loginResult = await axios.post("https://reqres.in/api/login", {
        username: email,
        password: password,
      });
      localStorage.setItem("token", loginResult.data.token);
      setError("");
      // redirect to landing page
      setName(email);
      setAuthenticated(true);
    } catch (e) {
      console.log(e.message);
      if (e.response) {
        if (e.response.data) {
          setError(e.response.data.error);
        }
      }
    }
  };

  return (
    <div>
      {authenticated ? <Redirect to="dashboard" /> : null}
      <form action="" onSubmit={login}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={onEmailChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={onPasswordChange}
          />
        </div>
        <div className="mb-3">
          Don't have an account?
          <Link to="signup"> Signup</Link>
        </div>
        <div className="mb-3">
          <p className="alert-danger">{error}</p>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
