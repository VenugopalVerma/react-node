import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    const logout = () => {
      localStorage.removeItem("usertoken");
    };
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {localStorage.getItem("usertoken") ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/dashboard">Dashboard</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" onClick={logout} to="/">
                      Logout
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/" >
                    Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup" >
                    Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Navbar);
