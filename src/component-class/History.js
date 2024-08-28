import React from 'react'
import HistoryData from './HistoryData'
// import  {historyData} from './MainData'
import {useEffect,useState} from 'react'
import axios from 'axios'

// const histarr = historyData

export default function History() {
  const [dataset, setdataset] = useState([]);

  useEffect(() => {
    axios.post("http://localhost:8086/api/emp/leave_history/alllvh")
      .then(response => {
        // setdataset(response.data);
        var temp = response.data;
        temp.sort((a, b) => (a.lvh_id < b.lvh_id) ? 1 : -1);
        setdataset(temp);
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <>
      <div className="header mt-5 d-flex justify-content-center">
        <h1>HISTORY</h1>
      </div>
      <div className="container d-flex justify-content-between">
        <div className='flex-fill'></div>
        <div className='mt-4 flex-fill'>
          <table className="table table-bordered border-secondary" width="400px">
            <thead>
              <tr>
                <th scope="col">Leave Applicaion No.</th>
                <th scope="col">Leave Type</th>
                <th scope="col">Reason</th>
                <th scope="col">Leave Start Date</th>
                <th scope="col">No. of Days</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody className='table-group-divider'>
              {/* {histarr.map((histdata) => { return <HistoryData key={histdata.serial} serial={histdata.serial} leavetype={histdata.leavetype} reason={histdata.reason} dateapplied={histdata.dateapplied} noofdays={histdata.noofdays} status={histdata.status} reject={histdata.reject} /> })} */}
              {dataset.map((pdleavesdata) => (
                  (pdleavesdata.lvt_lvh_fk===parseInt(window.localStorage.getItem('userId'))) && (<HistoryData
                    key={pdleavesdata.lvh_id}
                    serial={pdleavesdata.lvh_id}
                    id={pdleavesdata.lvt_lvh_fk}
                    leavetype={pdleavesdata.leavetype}
                    reason={pdleavesdata.leavereason}
                    dateapplied={pdleavesdata.leaveappdate}
                    noofdays={pdleavesdata.leaved}
                    status={pdleavesdata.status}
                    reject={pdleavesdata.acrejflag}
                  />)
                ))}
            </tbody>
          </table>
        </div>
        <div className='flex-fill'></div>
      </div>
    </>
  )
}
