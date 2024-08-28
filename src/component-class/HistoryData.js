import React from 'react'

export default function HistoryData(props) {
  return (
    <>
      <tr key={props.serial} className={`table-${(props.status?"warning":(props.reject?"success":"danger"))}`}>
        <td><strong>{props.serial}</strong></td>
        <td>{props.leavetype}</td>
        <td className='text-truncate' style={{ maxWidth: 150 }}>{props.reason}</td>
        <td>{props.dateapplied}</td>
        <td>{props.noofdays}</td>
        <td>{`${(props.status?"Pending":(props.reject?"Approved":"Rejected"))}`}</td>
      </tr>
    </>
  )
}