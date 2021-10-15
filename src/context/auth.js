import React from "react";

const AuthContext = React.createContext({
  authenticated: false,
  setAuthenticated: (auth) => {},
});

export default AuthContext;
