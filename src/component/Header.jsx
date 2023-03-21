import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-fluid  ">
      <div className="row">
        <div className="col-10 mx-auto">
          <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                 <strong style={{color:'blue'}}> ADITYA TECH </strong>
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
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
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0" >
                    <li className="nav-item">
                      <Link
                        className="nav-link  mb-2 header_links"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link mb-2  header_links"
                        to="/service"
                      >
                        service
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link mb-2  header_links" to="/about">
                        about
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link mb-2 header_links"
                        to="/contact"
                      >
                        contact
                      </Link>
                    </li>
                   
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
