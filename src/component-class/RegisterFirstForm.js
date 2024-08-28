import React, { useState } from 'react'
import RegisterSecondForm from './RegisterSecondForm';
import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RegisterFirstForm() {
    const [secondform, setsecondform] = useState(false);
    const [emaildata, setemaildata] = useState('');
    const matchemail = async (emaildata) => {
        if(!(emaildata===''||emaildata===null||emaildata===undefined)){
          try {
            const response = await axios.post(`http://localhost:8086/api/emp/empByEmail/${emaildata}`);
            // console.log(response.data.email);
            if (response.data.employeeid !== null && response.data.employeeid !== undefined && response.data.employee !== "") {
              return true;
            } else {
              return false;
            }
          } catch (error) {
            return false;
          }
        };
        }
      
      const firstcheckhandler = async (e) => {
        e.preventDefault();
        // const emaildata = /* get email data */;
        const emailExists = await matchemail(emaildata);
        if (emailExists) {
            alert("Email Already Used!!!");
        } else {
          document.getElementById('warningtext').hidden = true;
          document.getElementById('firstregisterform').hidden = true;
          setsecondform(true);
        }
      };
      const registerFirstChange = (e) => {
        setemaildata(e.target.value);
        }
    return (
        <>
        {/* <ToastContainer></ToastContainer> */}
            <form id='firstregisterform' onSubmit={firstcheckhandler}>
                <div className="mb-3">
                    <label htmlFor="registeremailcheck" className="form-label">Email address</label>
                    <input type="email" className="form-control" name='registeremailcheck' id="registeremailcheck" onChange={registerFirstChange}/>
                    <div id="emailHelp" hidden={true} className="form-text" >
                        <p className="text-danger" id='warningtext' hidden>Email already used</p>
                    </div>
                </div>
            </form>

            {secondform && <RegisterSecondForm email={emaildata}/>}

            <div className="modal-footer py-0 pt-1 ">
              <button type="submit" className="btn btn-danger" form={`${!secondform?"firstregisterform":"secondregistraionform"}`} >{`${!secondform?"Check E-Mail":"Register"}`}</button>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </>
    )
}
