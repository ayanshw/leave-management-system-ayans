import React from "react";
import RegisterFirstForm from "./RegisterFirstForm";




export default function Register() {
  return (
    <>
      <div className="modal fade" id="registerModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">REGISTER</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <RegisterFirstForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
