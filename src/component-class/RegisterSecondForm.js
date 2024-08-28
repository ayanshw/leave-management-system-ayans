import React, {useState} from 'react'
import axios from 'axios';


export default function RegisterSecondForm(props) {
    const [inputs,setInputs] = useState();
    
    const registerChangeHandler = (event) => {
        const name = event.target.name;
        let value = event.target.value;
        if(name=== "inputDob")
        {
            if(value.split("-")[0] > 2099){
                alert("Year should be less than 2099");
                value="";
            }

        }
        setInputs(values => ({...values, [name]: value}))
        setInputs(values => ({...values, inputEmail: document.getElementById("inputEmail").value}));
    }

    const dBRegistrationHandler = (e) => {
         e.preventDefault();
    //    console.log(inputs);
        //write code to send data to database
        //dont make it static
        //input validation
        //dont be lazy/overconfident/dummy
        if(inputs.inputName === undefined || inputs.inputName === ""|| inputs.inputPassword === undefined || inputs.inputPassword === ""|| inputs.passwordCheck === undefined || inputs.passwordCheck === ""|| inputs.role === undefined || inputs.role === "")
        {
            alert("Please enter your name");
            return;
        }
        
        if(inputs.inputPassword===inputs.passwordCheck)
        {
             axios.post('http://localhost:8086/api/emp/save', {
                email: inputs.inputEmail,
                employeename: inputs.inputName,
                role: inputs.role,
                password: inputs.inputPassword,
            })
            .then(response => {
                if(response.status===200)
                axios.post(`http://localhost:8086/api/emp/empByEmail/${inputs.inputEmail}`)
                .then(response => {
                    var empid = response.data.employeeid;
                    axios.post(`http://localhost:8086/api/emp/leave_type/save`,{
                        lvt_id: empid,
                        casual_leave: 14,
                        medical_leave:14,
                        earned_leave:14,
                    })
                    .then(response => {
                        if(response.status===200)
                        {
                            alert("Registration Successful");
                            window.location.reload();
                        }
                        else
                        alert("Registration Failed due to "+response.status+" error");
                    })
                })
            }
            )
            .catch(error => {
                console.log(error);
                alert("Registration Failed due to "+error+" error");
            })
            }
            else
            {
                alert("Passwords Don't Match!!!");
            }
        }
   
    
    return (
        <>
            <form id="secondregistraionform" onSubmit={dBRegistrationHandler} className='mb-3'>
                <div className="">
                    <label htmlFor="inputEmail" className="form-label">Email address</label>
                    <input type="email" name='inputEmail' className="form-control" value={document.getElementById("registeremailcheck").value} id="inputEmail" disabled/>
                </div>
                <div className="">
                    <label htmlFor="inputName" className="form-label">Name</label>
                    <input type="text" name='inputName' className="form-control" id="inputName" onChange={registerChangeHandler}/>
                </div>
                {/* <div className="">
                <label htmlFor="inputGender" className="form-label">Gender</label>
                </div>
                <div className="form-check d-flex ms-4 mb-2">
                    <input className="form-check-input" type="radio" id="gendermale" name="gender" value="male" onChange={registerChangeHandler}/>
                    <label className="form-check-label ps-2" htmlFor="gendermale">Male</label>
                    <input className="form-check-input ms-3" type="radio" id="genderfemale" name="gender" value="female" onChange={registerChangeHandler}/>
                    <label className="form-check-label ps-2" htmlFor="genderfemale">Female</label><br />
                </div> */}
                <div className="">
                <label htmlFor="inputRole" className="form-label">Role</label>
                </div>
                <div className="form-check d-flex ms-4 mb-2">
                    <input className="form-check-input" type="radio" id="roleUser" name="role" value="user" onChange={registerChangeHandler}/>
                    <label className="form-check-label ps-2" htmlFor="roleUser">User</label>
                    <input className="form-check-input ms-3" type="radio" id="roleAdmin" name="role" value="admin" onChange={registerChangeHandler}/>
                    <label className="form-check-label ps-2" htmlFor="genderfemale">Admin</label><br />
                </div>
                {/* <div className="">
                    <label htmlFor="inputPhone" className="form-label">Phone</label>
                    <input type="number" className="form-control" name='inputPhone' id="inputPhone" onChange={registerChangeHandler}/>
                </div>
                <div className="">
                    <label htmlFor="inputDob" className="form-label">Date of Birth</label>
                    <input type="date" className="form-control" name='inputDob' id="inputDob" onChange={registerChangeHandler}/>
                </div> */}
                <div className="">
                    <label htmlFor="inputPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword" name='inputPassword' onChange={registerChangeHandler}/>
                </div>
                <div className="">
                    <label htmlFor="passwordCheck" className="form-label"> Confirm Password</label>
                    <input type="password" className="form-control" name='passwordCheck' id="passwordCheck" onChange={registerChangeHandler}/>
                </div>
            </form>
        </>
    )
}
