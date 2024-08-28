import React from "react";
import LoginForm from "./LoginForm";
import ForgotPasswordData from "./ForgotPasswordData";


const forgotpasswdhandler = (e) => {
  document.getElementById("loginCloseButton").click();
  document.getElementById("forgotPasswordButton").click();
};

export default function Login() {
  return (

    <>

       <button type="button" className="btn btn-primary" data-bs-toggle="modal" id="forgotPasswordButton" data-bs-target="#forgotPasswordModal" hidden>
        modal
      </button> 
       <div className="modal fade" id="forgotPasswordModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">FORGOT PASSWORD??</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <ForgotPasswordData/>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" form="forgotPasswordForm" id="forgotpasswdsubmit" className="btn btn-warning">Verify</button>
            </div>
          </div>
        </div>
      </div> 
      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                LOGIN
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* FORM */}
              <LoginForm />
              <div className="modal-footer ">
                 <div className="forgot ">
                  <button type="button" className="btn btn-outline-warning" onClick={forgotpasswdhandler}>Forgot Password??</button>
                </div> 
                <div className="submit ">
                  <button
                    type="submit"
                    className="btn btn-success"
                    form="loginform"
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    id="loginCloseButton"
                    className="btn btn-danger ms-3"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

