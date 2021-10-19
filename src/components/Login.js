import axios from "axios";
import React, { useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import AuthContext from "../context/auth";
import { validateEmail } from "./utils";
import { Formik } from "formik";

const Login = props => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { setAuthenticated, authenticated, setName } = useContext(AuthContext);

  const login = async (email, password) => {
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
    <div className="row justify-content-center">
      <div className="col-12 col-md-6">
        {authenticated ? <Redirect to="/" /> : null}
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(true);
            await login(values.email, values.password);
            setSubmitting(false);
          }}
          validate={values => {
            const errors = {};

            if (!values.email) {
              errors.email = "Please enter your email";
            } else {
              if (!validateEmail(values.email)) {
                errors.email = "Please enter a valid email";
              }
            }

            if (!values.password) {
              errors.password = "Please enter your password";
            }

            return errors;
          }}>
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form action="" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  value={values.email}
                  onChange={handleChange}
                />
                <div className="my-2">
                  <p className="alert-danger">{errors.email}</p>
                </div>
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                />
                <div className="my-2">
                  <p className="alert-danger">{errors.password}</p>
                </div>
              </div>
              <div className="mb-3">
                Don't have an account?
                <Link to="signup"> Signup</Link>
              </div>
              <div className="mb-3">
                <p className="alert-danger">{error}</p>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
