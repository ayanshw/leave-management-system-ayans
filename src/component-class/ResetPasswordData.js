import React from "react";

export default function ResetPasswordData(props) {
  const datahandler = () => {
    let a = document.getElementById("resetPasswordLabel");
    a.innerText = `Change Password for ${props.name}`;
    let b = document.getElementById("employeeIdentificationField");
    b.value = props.id;
  };
  return (
    <>
      <tr key={props.id}>
        <td className="">{props.id}</td>
        <td>{props.name}</td>
        <td className="d-flex justify-content-around">
          {" "}
          <button
            type="button"
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#passwordResetModal"
            onClick={datahandler}
          >
            Change
          </button>{" "}
        </td>
      </tr>
    </>
  );
}
