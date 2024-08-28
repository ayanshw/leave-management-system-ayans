import React, {useState} from 'react'
import axios from 'axios';
import {toast,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
// import Cookies from 'js-cookie'


export default function LoginForm() {
    const [inputs,setInputs] = useState();
    
    const loginChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    async function digestMessage(message,algo) {
        const msgUint8 = new TextEncoder().encode(message); // encode as (utf-8) Uint8Array
        const hashBuffer = await crypto.subtle.digest(`${algo}`, msgUint8); // hash the message
        const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
        const hashHex = hashArray
          .map((b) => b.toString(16).padStart(2, "0"))
          .join(""); // convert bytes to hex string
        return hashHex;
      }
    const loginSubmitHandler = (event) => {
        //write code to send data to database
        //dont make it static
        //input validation
         event.preventDefault();
         axios.post('http://localhost:8086/api/emp/login', {
                email: inputs.loginInputEmail,
                password: inputs.loginInputPassword
         })
            .then(res => {
                if(res.data.status===true)
                {
                    // alert(res.data.message);
                    axios.post(`http://localhost:8086/api/emp/empByEmail/${inputs.loginInputEmail}`)
                    .then(response => {
                        const userId = response.data.employeeid;
                        const userName = response.data.employeename;
                        const role = response.data.role;
                        //console.log(userId,userName,role);
                        window.localStorage.setItem('userId', userId);
                        window.localStorage.setItem('name', userName);
                        // digestMessage(userId+inputs.loginInputEmail,"SHA-256").then((hash) => {window.localStorage.setItem('refreshToken', hash)});
                        digestMessage(userId,"SHA-256").then((hash) => {window.sessionStorage.setItem('sessionToken', hash)});
                        // digestMessage(userId+userName+inputs.loginInputEmail,"SHA-512").then((hash) => {window.localStorage.setItem('fingerprint', hash)});
                        window.localStorage.setItem('accessSpecifier', role);
                        // window.sessionStorage.setItem('sessionToken', userId);
                        window.sessionStorage.setItem('toastflag', true);
                        window.sessionStorage.setItem('toasttype', 'success');
                        window.sessionStorage.setItem('toastmsg', res.data.message);
                        window.location.reload();
                    })
                }
                else{
                    toast.error(`${res.data.message}`, {
                        position: toast.POSITION.TOP_CENTER,
                      });
                    // alert(res.data.message);
                }
            })
        }
           
    return (
        <>
        <ToastContainer></ToastContainer>
            <form id="loginform" onSubmit={loginSubmitHandler}>
                <div className="">
                    <label htmlFor="loginInputEmail" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="loginInputEmail"
                        name='loginInputEmail'
                        aria-describedby="emailHelp"
                        onChange={loginChangeHandler}
                    />
                    <div id="emailHelp" className="form-text">
                        We'll never share your Email. Check our Privacy Policy for
                        more details
                    </div>
                </div>
                <div className="mb-1">
                    <label htmlFor="loginInputPassword" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="loginInputPassword"
                        name='loginInputPassword'
                        onChange={loginChangeHandler}
                    />
                </div>
                <div className="mb-2 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="stayLoggedIn"
                        name='stayLoggedIn'
                        onChange={loginChangeHandler}
                        defaultChecked
                    />
                    <label className="form-check-label" htmlFor="stayLoggedIn">
                        Stay Signed In
                    </label>
                </div>
            </form>
        </>
    )
}
