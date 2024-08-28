import React, { useState } from "react";
import axios from 'axios'

export default function LeaveApplyForm() {
  const [inputs, setInputs] = useState();

  const leaveChangeHandler = (event) => {
    const name = event.target.name;
    let value = event.target.value;
    if(name === "startDate" || name === "endDate"){
        if(value.split("-")[0] > 2099){
        alert("Year should be less than 2099");
        value = () => {
          if (name === "startDate") {
            return inputs.startDate;
          } else {
            return inputs.endDate;
          }

        };
        }

    }
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const leaveApplicationHandler = (e) => {
    //write code to send data to database
    //dont make it static
    //input validation
    e.preventDefault();
    const date1 = new Date(inputs.startDate);
const date2 = new Date(inputs.endDate);

// Calculate the difference in milliseconds
const diffMs = date2 - date1;

// Convert milliseconds to days
const diffDays = diffMs / (1000 * 60 * 60 * 24);


    if(true)
    {
      axios.post('http://localhost:8086/api/emp/leave_history/save',{
      leavetype:inputs.leaveType,
      leavereason: inputs.leaveReason,
      leaveappdate: inputs.startDate,
      leaved: diffDays,
      lvt_lvh_fk: window.localStorage.getItem('userId'),
      status: true,
      acrejflag: false
    })
    .then(response=>{
      if(response.status===200)
      {
      }
      else
      {
        window.sessionStorage.setItem('toastflag',true);
        window.sessionStorage.setItem('toasttype','error');
        window.sessionStorage.setItem('toastmsg',"Leave Application failed due to Error"+response.status);
      }
    })
    window.sessionStorage.setItem('toastflag',true);
        window.sessionStorage.setItem('toasttype','success');
        window.sessionStorage.setItem('toastmsg',"Leave Applied Successfully");
        window.sessionStorage.setItem('redirect','history');
    window.location.reload();
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center flex-fill ">
      <form style={{ minWidth: 550 }} onSubmit={leaveApplicationHandler}>
        <select
          name="leaveType"
          id="leaveType"
          className="form-select mb-2"
          aria-label="Default select example"
          onChange={leaveChangeHandler}
        >
          <option>Select Type of Leave you want</option>
          <option value="casual">Casual Leave</option>
          <option value="medical">Medical Leave</option>
          <option value="earned">Earned Leave</option>
        </select>
        <div className="form-floating mb-2">
          <input
            type="date"
            className="form-control"
            name="startDate"
            id="startDate"
            min="01-01-2022" max="31-12-2099"
            placeholder="Start Date"
            onChange={leaveChangeHandler}
          />
          <label htmlFor="startDate">Start Date</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="date"
            className="form-control"
            name="endDate"
            id="endDate"
            min="01-01-2022" max="31-12-2099"
            placeholder="End Date"
            onChange={leaveChangeHandler}
          />
          <label htmlFor="endDate">End Date</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="textarea"
            className="form-control"
            name="leaveReason"
            id="leaveReason"
            placeholder="Reason"
            onChange={leaveChangeHandler}
          />
          <label htmlFor="leaveReason">Reason</label>
        </div>
        <button type="submit" className="btn btn-primary justify-content-end">
          Submit
        </button>
      </form>
    </div>
  );
}
