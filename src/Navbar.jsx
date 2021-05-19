import React from "react";
import logo from "../src/images/logo.png";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-12 ">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <Link class="navbar-brand" to="/">
                  <img src= { logo } width="50" height="50" alt="logo" />
                </Link>
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
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link
                        activeClassName="menu_active"
                        exact
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/about"
                      >
                        About
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/services"
                      >
                        Work
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/contact"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
