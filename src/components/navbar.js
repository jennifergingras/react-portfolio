import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
  <div>
    <div class="header-wrapper">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="index.html">
            <h3>Jennifer Gingras</h3>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          {/* <!-- Begin Menu --> */}
          <div class="collapse navbar-collapse menu justify-content-end" id="navbarNav">
            <ul class="navbar-nav tiny">
              <li class="nav-item nav-link">
                <Link
                  to="/design"
                  className={
                    window.location.pathname === "/design" || window.location.pathname === "/design"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Design
            </Link>
              </li>
              <li class="nav-item nav-link">
                <Link
                  to="/web"
                  className={
                    window.location.pathname === "/web" || window.location.pathname === "/web"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Web
            </Link>
              </li>
              <li class="nav-item nav-link">
                <Link
                  to="/about"
                  className={
                    window.location.pathname === "/about" || window.location.pathname === "/about"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  About
            </Link>
              </li>
            </ul>
          </div>
          {/* <!-- End Menu --> */}
        </nav>
      </div>
      {/* <!-- End Container --> */}
    </div>
  </div>
  )};

export default Navbar;