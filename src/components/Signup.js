import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import AuthContext from "../context/auth";
import { validateEmail } from "./utils";
import { Formik } from "formik";

const Login = () => {
  const [error, setError] = useState("");

  const {
    authenticated,
    setAuthenticated,
    setName: setGlobalName,
  } = useContext(AuthContext);

  const signup = async (name, email, password) => {
    console.log(name, email, password);
    try {
      const signupResult = await axios.post("https://reqres.in/api/register", {
        name: name,
        username: email,
        password: password,
      });
      localStorage.setItem("token", signupResult.data.token);
      setGlobalName(name);
      setError("");
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
      <div className="col-6">
        {authenticated ? <Redirect to="/" /> : null}
        <Formik
          initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
          onSubmit={async ({ name, email, password }, { setSubmitting }) => {
            setSubmitting(true);
            await signup(name, email, password);
            setSubmitting(false);
          }}
          validate={values => {
            const errors = {};

            if (!values.email) {
              errors.email = "Please enter your email";
            } else {
              const match = validateEmail(values.email);
              if (!match) {
                errors.email = "Please enter a valid email";
              }
            }
            if (!values.name) {
              errors.name = "Please enter your name";
            }
            if (!values.password) {
              errors.password = "Please enter a password";
            }
            if (values.password !== values.confirmPassword) {
              errors.confirmPassword = "Passwords don't match";
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
            <form action="" onSubmit={signup}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={values.name}
                  onChange={handleChange}
                />

                <div className="my-2">
                  <p className="alert-danger">{errors.name}</p>
                </div>
              </div>
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
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                />
                <div className="my-2">
                  <p className="alert-danger">{errors.confirmPassword}</p>
                </div>
              </div>
              <div className="mb-3">
                Already have an account?
                <Link to="login">Login</Link>
              </div>
              <div className="mb-3">
                <p className="alert-danger">{error}</p>
              </div>
              <button
                onClick={handleSubmit}
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
