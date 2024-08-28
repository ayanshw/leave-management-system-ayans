import React from 'react'
import Home from './Home'
import LeaveApply from './LeaveApply'
import History from './History'
import HomeAdmin from './HomeAdmin'
import LeaveGrant from './LeaveGrant'
import ResetPassword from './ResetPassword'

function Body(props) {
  if(props.part==="home")
  {
    return (
      <Home/>
    )
  }
    else if(props.part==="leaveapply")
    {
      return (
        <LeaveApply/>
      )
    }
    else if(props.part==="history")
    {
      return (
        <History/>
      )
    }
    else if(props.part==="homeadmin")
    {
      return (
        <HomeAdmin/>
      )
    }
    else if(props.part==="leavegrant")
    {
      return (
        <LeaveGrant/>
      )
    }
    else if(props.part==="resetpassword")
    {
      return (
        <ResetPassword/>
      )
    }
    
}

export default Body
