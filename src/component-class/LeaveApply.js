import React from 'react'
import {useEffect} from 'react'
// import { leavesData } from './MainData'
import LeaveApplyForm from './LeaveApplyForm'
import axios from 'axios'


function data1(){
  axios.post(`http://localhost:8086/api/emp/leave_type/lvtById/${window.localStorage.getItem('userId')}`)
  .then(response => {
    var casl=response.data.casual_leave;
    document.getElementById('casualleaveihtml2').innerHTML=casl;
    var medl=response.data.medical_leave;
    document.getElementById('medicalleaveihtml2').innerHTML=medl;
    var ernl=response.data.earned_leave;
    document.getElementById('earnedleaveihtml2').innerHTML=ernl;
    // console.log(casl,medl,ernl);
  })
}

export default function LeaveApply() {
  useEffect(()=>{
    data1();
  })
  return (
    <>
    <div className="header mt-5 d-flex justify-content-center">
      <h1>APPLY FOR LEAVE</h1>
    </div>
    <div className="container d-flex mt-4 justify-content-evenly align-items-start">
      <div className="remaining flex-fill">
      <ul className="list-group  flex-fill">
  <li className="list-group-item list-group-item-primary d-flex justify-content-between align-items-center">
    Casual Leave
    <span className="badge bg-primary rounded-pill" id='casualleaveihtml2'></span>
  </li>
  <li className="list-group-item list-group-item-danger d-flex justify-content-between align-items-center ">
    Medical Leave
    <span className="badge bg-danger rounded-pill" id='medicalleaveihtml2'></span>
  </li>
  <li className="list-group-item list-group-item-success d-flex justify-content-between align-items-center ">
    Earned Leave
    <span className="badge bg-success rounded-pill" id='earnedleaveihtml2'></span>
  </li>
</ul>
      </div>
      <LeaveApplyForm />
    </div>
    
    </>
  )
}
