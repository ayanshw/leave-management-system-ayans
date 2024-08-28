import React from "react";
// import Cookies from "js-cookie";
import PropTypes from "prop-types";

export default function NavBar(props) {
  if (props.name !== "") {
    const logoutHandler = () => {
      window.localStorage.clear();
      window.sessionStorage.clear();
      window.location.reload();
    };
    return (
      <>
        <nav className="navbar navbar-expand bg-dark">
          <div className="container-fluid">
            <div className="navbar-brand">
              <strong className="text-light">Employee Leave Management System</strong>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
              <span className="navbar-text mx-3">
                <strong className="text-light">Hello, {props.name}</strong>
              </span>
              <span className="navbar-text mx-3 ms-4">
                <button type="button" className="btn btn-outline-danger" onClick={logoutHandler}>
                  LOG OUT
                </button>
              </span>
            </div>
          </div>
        </nav>
      </>
    );
  } else {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <div className="navbar-brand">
              <strong className="text-light">Employee Leave Management System</strong>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
              <span className="navbar-text mx-3">
                <button
                  type="button"
                  className="btn btn-success"
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                >
                  Login
                </button>
              </span>
              <span className="navbar-text me-3">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#registerModal"
                >
                  Register
                </button>
              </span>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
NavBar.propTypes = {
  name: PropTypes.string.isRequired,
};
