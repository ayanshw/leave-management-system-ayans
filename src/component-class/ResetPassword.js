import React, {useState} from 'react'
import ResetPasswordData from './ResetPasswordData'
import { passwordReset } from './AdminData'

const dataarr=passwordReset



export default function ResetPassword() {

  const [inputs, setInputs] = useState()

  const passwordChangeHandler = (e) => {
    //write the code to change the password
    //dont make it static
    //update the database
    e.preventDefault()
    alert(inputs.employeeIdentificationField+" "+inputs.resetPasswordInput+" "+inputs.passwordinputConfirm)
  }
  
  const passwordResetChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
    let a=document.getElementById('employeeIdentificationField').value;
    setInputs(values => ({...values, employeeIdentificationField: a}))
  }
  return (
    <>
      <div className="modal fade" id="passwordResetModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="resetPasswordLabel"> </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form id="passwdchangeform" onSubmit={passwordChangeHandler}>
                <input type="text" name='employeeIdentificationField' id='employeeIdentificationField'  hidden onChange={passwordChangeHandler}/>
                <div className="mb-2">
                  <label htmlFor="resetPasswordInput" className="form-label">Password</label>
                  <input type="password" className="form-control" name='resetPasswordInput' id="resetPasswordInput" onChange={passwordResetChangeHandler}/>
                </div>
                <div className="mb-2">
                  <label htmlFor="passwordInputConfirm" className="form-label">Confirm Password</label>
                  <input type="password" className="form-control" name='passwordinputConfirm' id="passwordInputConfirm" onChange={passwordResetChangeHandler}/>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-success" form='passwdchangeform'>Submit</button>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      <div className="header mt-5 d-flex justify-content-center">
        <h1>PASSWORD CHANGE REQUESTS</h1>
      </div>
      <div className="container d-flex justify-content-between">
        <div className='flex-fill'></div>
        <div className='mt-4 flex-fill'>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Employee ID</th>
                <th scope="col">Name</th>
                <th scope="col" className='d-flex justify-content-center'>Click to change</th>
              </tr>
            </thead>
            <tbody className='table-group-divider'>
             {dataarr.map((employeedata) => {return <ResetPasswordData id={employeedata.id} name={employeedata.name} />})}
            </tbody>
          </table>
        </div>
        <div className='flex-fill'></div>
      </div>
    </>
  )
}
