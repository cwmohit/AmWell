import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
function Header() {
  return (
    <div className="container-fluid amwell-header">
      <div className="row">
        <div className="col-lg-11 mx-auto">
          <nav className="navbar navbar-expand-lg navbar-light">
            <NavLink
              to="/"
              className="navbar-brand font-weight-bold text-gray-b"
            >
              AMWELL
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <NavLink to="/" className="nav-link text-gray-b">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link text-gray-b">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link text-gray-b">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/register" className="nav-link text-gray-b">
                    Register
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
