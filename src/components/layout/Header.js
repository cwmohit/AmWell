import React from "react";
import "./index.css";
function Header() {
  return (
      <div className="container-fluid amwell-header">
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light">
              <a className="navbar-brand font-weight-bold text-gray-b" href="#">
                AMWELL
              </a>
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

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link text-gray-b" href="#">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-gray-b" href="#aboutId">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-gray-b" href="#Projects">
                      Login
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-gray-b" href="#Contact">
                      Register
                    </a>
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
