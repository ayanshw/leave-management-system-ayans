import React from 'react';
import { useEffect} from 'react';
// import { employeeData } from './MainData'
// import { leavesData } from './MainData'
// import Cookies from 'js-cookie';
import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  // const [emp,setemp]=useState();
  // const [leaves,setleaves]=useState();
  useEffect(()=>{
    data();
    data1();
  })
  var empid;
  var empname;
  var empemail;
  // var casl=14;
  // var medl=14;
  // var ernl=14;
function data(){
  axios.post(`http://localhost:8086/api/emp/empById/${window.localStorage.getItem('userId')}`)
  .then(response => {
    empid=response.data.employeeid;
    document.getElementById('empidtd').innerHTML=empid;
    empname=response.data.employeename;
    empemail=response.data.email;
    document.getElementById('empnametd').innerHTML=empname;
    document.getElementById('empemailtd').innerHTML=empemail;
    var emprole=response.data.role;
    document.getElementById('emproletd').innerHTML=emprole;
    // console.log(empid,empname,empemail);
  })
}
function data1(){
  axios.post(`http://localhost:8086/api/emp/leave_type/lvtById/${window.localStorage.getItem('userId')}`)
  .then(response => {
    var casl=response.data.casual_leave;
    document.getElementById('casualleaveihtml').innerHTML=casl;
    var medl=response.data.medical_leave;
    document.getElementById('medicalleaveihtml').innerHTML=medl;
    var ernl=response.data.earned_leave;
    document.getElementById('earnedleaveihtml').innerHTML=ernl;
    // console.log(casl,medl,ernl);
  })
}
  return (
    <>
      <div className="header mt-5 d-flex justify-content-center">
        <h1>HOME</h1>
      </div>
      <div className="container d-flex justify-content-between">
        <div className='flex-fill'></div>
        <div className='mt-4 flex-fill'>
          <table className="table table-striped-columns table-bordered border-secondary" width="400px">
            <tbody>
              <tr>
                <th scope="row">Name</th>
                <td id='empnametd'></td>
              </tr>
              <tr>
                <th scope="row">Employee ID</th>
                <td id='empidtd'></td>
              </tr>
              {/* <tr>
                <th scope="row">Gender</th>
                <td>{employee.gender}</td>
              </tr>
              <tr>
                <th scope="row">Date of Birth</th>
                <td>{employee.dob}</td>
  </tr>}*/}
              <tr>
                <th scope="row">Role</th>
                <td id='emproletd'></td>
              </tr> 
              <tr>
                <th scope="row">E-Mail</th>
                <td id='empemailtd'></td>
              </tr>
            </tbody>
          </table>
          <div className="header mt-4 d-flex justify-content-center">
            <h3>REMAINING LEAVES</h3>
          </div>
          <ul className="list-group mt-3 flex-fill">
            <li className="list-group-item list-group-item-primary d-flex justify-content-between align-items-center">
              Casual Leave
              <span className="badge bg-primary rounded-pill" id='casualleaveihtml'></span>
            </li>
            <li className="list-group-item list-group-item-danger d-flex justify-content-between align-items-center">
              Medical Leave
              <span className="badge bg-danger rounded-pill" id='medicalleaveihtml'></span>
            </li>
            <li className="list-group-item list-group-item-success d-flex justify-content-between align-items-center">
              Earned Leave
              <span className="badge bg-success rounded-pill" id='earnedleaveihtml'></span>
            </li>
          </ul>
        </div>
        <div className='flex-fill'></div>
      </div>


    </>
  )
}
