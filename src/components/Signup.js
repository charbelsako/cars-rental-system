import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import AuthContext from "../context/auth";
import { validateEmail } from "./utils";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { authenticated, setAuthenticated } = useContext(AuthContext);

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const signup = async (e) => {
    e.preventDefault();

    const match = validateEmail(email);
    if (!match) {
      setError("Please enter a valid email");
      return false;
    }

    if (email === "" || password === "" || name === "") {
      setError("Please fill all fields");
      return false;
    }

    if (password !== confirmPassword) {
      setError("passwords don't match");
      return false;
    }

    try {
      const loginResult = await axios.post("https://reqres.in/api/login", {
        username: email,
        password: password,
      });
      console.log(loginResult);
      setError("");
      // redirect to landing page
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
      <form action="" onSubmit={signup}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={onNameChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
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
          <label htmlFor="exampleInputPassword1" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={confirmPassword}
            onChange={onConfirmPasswordChange}
          />
        </div>
        <div className="mb-3">
          Already have an account?
          <Link to="login">Login</Link>
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
