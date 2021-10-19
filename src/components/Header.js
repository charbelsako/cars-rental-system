import React, { useContext } from "react";
import image from "../assets/bootstrap.png";
import { Link } from "react-router-dom";
import AuthContext from "../context/auth";

const Header = () => {
  const { authenticated, setAuthenticated, setName, name } = useContext(AuthContext);

  const logout = () => {
    // a bit hack-ish but it works
    const reply = window.confirm("are you sure you want to log out?");
    if (reply) {
      localStorage.removeItem("token");
      setAuthenticated(false);
      setName("");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <img
          src={image}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#!">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Link
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#!"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#!">
                Action
              </a>
              <a className="dropdown-item" href="#!">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#!">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#!">
              Disabled
            </a>
          </li>
        </ul>
        {/* Add the login button and logout */}
        {authenticated ? (
          <>
            <p className="m-2">{name}</p>
            <button onClick={logout} className="btn btn-danger">
              Logout
            </button>
          </>
        ) : (
          <React.Fragment>
            <Link to="login" className="btn btn-primary mx-2">
              Login
            </Link>
            <Link to="signup" className="btn btn-secondary">
              Signup
            </Link>
          </React.Fragment>
        )}
      </div>
    </nav>
  );
};

export default Header;
