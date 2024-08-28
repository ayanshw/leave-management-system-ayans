import React from 'react';
import LeaveGrantData from './LeaveGrantData';
// import { dataArray } from './AdminData';
import axios from 'axios';
import { useEffect, useState } from 'react';


export default function LeaveGrant() {
  const [dataset, setdataset] = useState([]);

  useEffect(() => {
    axios.post("http://localhost:8086/api/emp/leave_history/alllvh")
      .then(response => {
        var temp = response.data;
        temp.sort((a, b) => (a.lvh_id < b.lvh_id) ? 1 : -1);
        setdataset(temp);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <div className="header mt-5 d-flex justify-content-center">
        <h1>GRANT LEAVES</h1>
      </div>
      <div className="container d-flex justify-content-between">
        <div className='flex-fill'></div>
        <div className='mt-4 flex-fill'>
          {dataset && (
            <table className="table" id='tablebody'>
              <thead>
                <tr>
                  <th scope="col">Employee ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Leave Type</th>
                  <th scope="col">Reason</th>
                  <th scope="col">Date Applied</th>
                  <th scope="col">No. of Days</th>
                  <th scope="col">Grant or Reject the Leave</th>
                </tr>
              </thead>
              <tbody className='table-group-divider'>
                {dataset.map((pdleavesdata) => (
                  pdleavesdata.status && (<LeaveGrantData
                    key={pdleavesdata.lvh_id}
                    leave_id={pdleavesdata.lvh_id}
                    id={pdleavesdata.lvt_lvh_fk}
                    leavetype={pdleavesdata.leavetype}
                    reason={pdleavesdata.leavereason}
                    dateapplied={pdleavesdata.leaveappdate}
                    noofdays={pdleavesdata.leaved}
                    statusflag={pdleavesdata.status}
                    acrejflag={pdleavesdata.acrejflag}
                  />)
                ))}
              </tbody>
            </table>
          )}
        </div>
        <div className='flex-fill'></div>
      </div>
    </>
  );
}
