import React, { useState } from "react";
import axios from 'axios'

export default function ForgotPasswordData() {
  const [verify, setVerify] = useState(false);
  const [inputs, setInputs] = useState();

  const matchemail = async (emaildata) => {
    try {
      const response = await axios.post(`http://localhost:8086/api/emp/empByEmail/${emaildata}`);
      // console.log(response.data.email);
      if (response.data.employeeid !== null && response.data.employeeid !== undefined && response.data.employee !== "") {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  };
  const datacatch = async (email) => {
    return axios.post(`http://localhost:8086/api/emp/empByEmail/${email}`)
      .then(async res1 => {
        var dataset = {
          employeeid: res1.data.employeeid,
          employeename: res1.data.employeename,
          role: res1.data.role
        }
        return dataset;
      })
  }
  const forgetPasswordHandler = async (e) => {
    if (!verify) {
      e.preventDefault();
      document.getElementById("forgottenEmail").disabled = true;
      document.getElementById("forgotpasswdsubmit").innerHTML =
        "Change Password";
      const emailExists = await matchemail(inputs.forgottenEmail);
      if (emailExists) {
        setVerify(true);
      }
      else {
        alert("E-Mail doesn't Exist");
      }
    } else {
      if (inputs.updatedPassword === inputs.passwordVerify) {
        e.preventDefault();
        // console.log(inputs);
        const data = await datacatch(inputs.forgottenEmail);
        await axios.put("http://localhost:8086/api/emp/update", {
          employeeid: data.employeeid,
          employeename: data.employeename,
          email: inputs.forgottenEmail,
          password: inputs.updatedPassword,
          role: data.role
        })
        alert("Password Change Successfully!!!");
        window.location.reload();
      }
      else {
        alert("Password doesn't match!!!");
      }
    }
  };
  const forgotdatahandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  return (
    <>
      <form id="forgotPasswordForm" onSubmit={forgetPasswordHandler}>
        <div className="mb-3">
          <label htmlFor="forgottenEmail" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="forgottenEmail"
            id="forgottenEmail"
            aria-describedby="emailHelp"
            onChange={forgotdatahandler}
          />
          {verify && (
            <>
              <label htmlFor="updatedPassword" className="form-label">
                Enter New Password
              </label>
              <input
                type="password"
                className="form-control"
                id="updatedPassword"
                name="updatedPassword"
                onChange={forgotdatahandler}
              />
              <label htmlFor="passwordVerify" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="passwordVerify"
                name="passwordVerify"
                onChange={forgotdatahandler}
              />
            </>
          )}
        </div>
      </form>
    </>
  );
}
