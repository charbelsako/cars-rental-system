import React, { useContext } from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import AuthContext from "../context/auth";

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  const { authenticated } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={props =>
        authenticated === true ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default withRouter(PrivateRoute);
