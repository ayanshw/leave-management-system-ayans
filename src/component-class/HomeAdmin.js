import React from 'react'
// import { adminData } from './AdminData'
// import { pendingLeaves } from './AdminData'
import axios from 'axios'
// import Cookies from 'js-cookie'
import { useEffect } from 'react'
// import { password } from './AdminData'

// to be added from database
// dont make it static

// const admindata = {
//   id: getdata.id,
//   name: getdata.name,
//   email: getdata.email,
//   role: getdata.role
//   //   id: 100001,
//   //   name: 'John Doe',
//   //   email: "ayanshw@outlook.com",
//   //   adminaccess: false
// }
// const pendingleaves = pendingLeaves
// const Password = password

export default function HomeAdmin() {
  function getdata(){
    axios.post(`http://localhost:8086/api/emp/empById/${window.localStorage.getItem('userId')}`)
      .then(response => {
        var a=response.data.employeeid;
      document.getElementById('empidadmintd').innerHTML= a;
      var b=response.data.employeename;
      document.getElementById('nameadmintd').innerHTML= b;
      var c=response.data.email;      
      var d=response.data.role;      

      document.getElementById('empemailadmintd').innerHTML= c;
      document.getElementById('emproleadmintd').innerHTML= d;
      // console.log(a,b,c);
      // const role= response.data.role;
      // return {id,name,email,role};
      })
  
  }

  useEffect(()=>{
    getdata();
  }
  );
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
                <td id='nameadmintd'></td>
              </tr>
              <tr>
                <th scope="row">Employee ID</th>
                <td id='empidadmintd'></td>
              </tr>
              {/* <tr>
                <th scope="row">Gender</th>
                <td>{admindata.gender}</td>
              </tr>
              <tr>
                <th scope="row">Date of Birth</th>
                <td>{admindata.dob}</td>
  </tr>*/}
              <tr>
                <th scope="row">Role</th>
                <td id='emproleadmintd'></td>
              </tr>
              <tr>
                <th scope="row">E-Mail</th>
                <td id='empemailadmintd'></td>
              </tr>
            </tbody>
          </table>
          {/* <div className="header mt-1 d-flex justify-content-center">
        <h3>Pending Leave Grants</h3>
      </div> */}
          {/* <ul className="list-group mt-2 flex-fill">
  <li className="list-group-item list-group-item-primary d-flex justify-content-between align-items-center">
    Casual Leave
    <span className="badge bg-primary rounded-pill">{pendingleaves.casual}</span>
  </li>
  <li className="list-group-item list-group-item-danger d-flex justify-content-between align-items-center">
    Medical Leave
    <span className="badge bg-danger rounded-pill">{pendingleaves.medical}</span>
  </li>
  <li className="list-group-item list-group-item-success d-flex justify-content-between align-items-center">
    Earned Leave
    <span className="badge bg-success rounded-pill">{pendingleaves.earned}</span>
  </li> */}
  {/* <li className="list-group-item list-group-item-info d-flex justify-content-between align-items-center">
    Password Change Requests
    <span className="badge bg-info rounded-pill">{Password.request}</span>
  </li> */}
{/* </ul> */}
        </div>
        <div className='flex-fill'></div>
      </div>
      

    </>
  )
}
