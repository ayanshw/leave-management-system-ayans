import React, { useEffect, useState } from "react";
import axios from "axios"

export default function LeaveGrantData(props) {
  const pdleaves  = props;
  const [leavedata, setleavedata] = useState({});
  const [employeeName, setEmployeeName] = useState("");

  const allowGrant = async () => {
    await axios.post(`http://localhost:8086/api/emp/leave_type/lvtById/${pdleaves.id}`)
      .then(async response1 => {
         setleavedata(response1.data);
        console.log(response1.data);
        console.log(leavedata);
        switch(pdleaves.leavetype)
        {
          case 'casual':
            var updatedLeaves = {
              lvt_id: pdleaves.id,
              casual_leave: response1.data.casual_leave - pdleaves.noofdays,
              medical_leave: response1.data.medical_leave,
              earned_leave: response1.data.earned_leave
            };
            break;
            case 'medical':
             updatedLeaves = {
              lvt_id: pdleaves.id,
              casual_leave: response1.data.casual_leave ,
              medical_leave: response1.data.medical_leave- pdleaves.noofdays,
              earned_leave: response1.data.earned_leave
            };
            break;
            case 'earned':
             updatedLeaves = {
              lvt_id: pdleaves.id,
              casual_leave: response1.data.casual_leave,
              medical_leave: response1.data.medical_leave,
              earned_leave: response1.data.earned_leave - pdleaves.noofdays
            };
            break;
            default:
              break;
        }
        console.log(updatedLeaves);
        await axios.put("http://localhost:8086/api/emp/leave_type/update", updatedLeaves)
          .then(async response => {
            if (response.status === 200) {
              const updatedLeaveHistory = {
                lvh_id: pdleaves.leave_id,
                leavetype: pdleaves.leavetype,
                leavereason: pdleaves.reason,
                leaveappdate: pdleaves.dateapplied,
                leaved: pdleaves.noofdays,
                lvt_lvh_fk: pdleaves.id,
                status: false,
                acrejflag: true
              };
              await axios.put("http://localhost:8086/api/emp/leave_history/update", updatedLeaveHistory)
                .then(res => {
                  if (res.status === 200) {
                    // alert(`Leave Granted to ${employeeName} Successful`);
                    window.sessionStorage.setItem('toastflag',true);
                    window.sessionStorage.setItem('toasttype','info');
                    window.sessionStorage.setItem('toastmsg',`Leave Grant to ${employeeName} Successfully`);
                    window.sessionStorage.setItem('redirect','leavegrant');
                  }
                  else{
                    window.sessionStorage.setItem('toastflag',true);
                    window.sessionStorage.setItem('toasttype','error');
                    window.sessionStorage.setItem('toastmsg',"Leave Application failed due to Error: "+res.status);
                    window.sessionStorage.setItem('redirect','leavegrant');
                  }
                })
            }
          })
      })
      // .then(async () => {
        
      // })
    // alert(`${pdleaves.id} ${pdleaves.leave_id} leave granted`);
    window.location.reload();
  };

  const rejectGrant = () => {
    const updatedLeaveHistory = {
      lvh_id: pdleaves.leave_id,
      leavetype: pdleaves.leavetype,
      leavereason: pdleaves.reason,
      leaveappdate: pdleaves.dateapplied,
      leaved: pdleaves.noofdays,
      lvt_lvh_fk: pdleaves.id,
      status: false,
      acrejflag: false
    };
    axios.put("http://localhost:8086/api/emp/leave_history/update", updatedLeaveHistory)
      .then(response => {
        if (response.status === 200) {
          // alert(`Leave Rejected ${employeeName} Successful`);
          // console.log('this is runnig=ng')
        }
        else
        {
          window.sessionStorage.setItem('toastflag',true);
          window.sessionStorage.setItem('toasttype','error');
          window.sessionStorage.setItem('toastmsg',`Leave Rejection failed due to Error ${response.status}`);
        }
      })
      window.sessionStorage.setItem('toastflag',true);
      window.sessionStorage.setItem('toasttype','info');
      window.sessionStorage.setItem('toastmsg',`Leave Rejection to ${employeeName} Successfully`);
      window.sessionStorage.setItem('redirect','leavegrant');
    // alert(`${pdleaves.id} leave rejected`);
    window.location.reload();
  };

  useEffect(() => {
    axios.post(`http://localhost:8086/api/emp/empById/${pdleaves.id}`)
      .then(response => setEmployeeName(response.data.employeename))
  }, [pdleaves.id])
  return (

    <>
      <tr key={pdleaves.id}>
        <td>{pdleaves.id}</td>
        <td>{employeeName}</td>
        <td>{pdleaves.leavetype}</td>
        <td className="text-truncate" style={{ maxWidth: 150 }}>
          {pdleaves.reason}
        </td>
        <td>{pdleaves.dateapplied}</td>
        <td>{pdleaves.noofdays}</td>
        <td className=" d-flex justify-content-evenly">
          {" "}
          <button className="btn btn-success" onClick={allowGrant}>
            Grant
          </button>{" "}
          <button className="btn btn-danger" onClick={rejectGrant}>
            Reject
          </button>{" "}
        </td>
      </tr>
    </>
  );
}
