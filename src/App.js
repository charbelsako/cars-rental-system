import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AuthContext from "./context/auth";
import CarDetails from "./components/CarDetails";
import PrivateRoute from "./components/PrivateRoute";
import CardViewAndFilter from "./components/CardViewAndFilter";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    // NOTE: hackish
    if (localStorage.getItem("token")) {
      setAuthenticated(true);
    }
  }, []);

  return (
    <div className="App text-center">
      <Router>
        <AuthContext.Provider
          value={{
            setAuthenticated: setAuthenticated,
            authenticated: authenticated,
            setName: setName,
            name: name,
          }}>
          <Header />
          <div className="container">
            <Switch>
              <PrivateRoute path="/" exact component={CardViewAndFilter} />

              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
              {/* NOTE: Should be a private route */}
              <Route path="/car/:id">
                <CarDetails />
              </Route>
            </Switch>
          </div>
        </AuthContext.Provider>
      </Router>
    </div>
  );
}

export default App;
