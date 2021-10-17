import React from "react";

const AuthContext = React.createContext({
  authenticated: false,
  setAuthenticated: (auth) => {},
  name: "",
  setName: () => {},
});

export default AuthContext;
