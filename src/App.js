import "./App.css";
import NavBar from "./component-class/NavBar";
import BodyHandle from "./component-class/BodyHandle";
import Login from "./component-class/Login";
import Register from "./component-class/Register";
import FrontPageBody from "./component-class/FrontPageBody";
import NavBarBottom from "./component-class/NavBarBottom";
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import axios from "axios";
// import { useEffect } from "react";

// import Cookies from "js-cookie";

function App() {
  
  // async function digestMessage(message,algo) {
  //   const msgUint8 = new TextEncoder().encode(message); // encode as (utf-8) Uint8Array
  //   const hashBuffer = await crypto.subtle.digest(`${algo}`, msgUint8); // hash the message
  //   const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
  //   const hashHex = hashArray
  //     .map((b) => b.toString(16).padStart(2, "0"))
  //     .join(""); // convert bytes to hex string
  //   return hashHex;
  // }
  const isLoggedIn = cookieCheck();
  function cookieCheck() {
    var token= window.sessionStorage.getItem('sessionToken');
    if(token===null||token===undefined||token===""){
      return false;
    }
    else{
      return true;
    }
  }
//   if(token===null||token===undefined||token===""){
//     var refreshToken=window.localStorage.getItem('refreshToken');
//     var fingerprinttoken=window.localStorage.getItem('fingerprint');
//     if(refreshToken===null||refreshToken===undefined||refreshToken===""){
//       return false;
//     }
//     else{
//       axios.post(`http://localhost:8086/api/emp/empById/${window.localStorage.getItem('userId')}`)
//       .then(async response => {
//         var userId = response.data.employeeid;
//         const userName = response.data.employeename;
//         const email = response.data.email;
//         const refresh = await digestMessage(userId + email, "SHA-256").then((hash) => {return hash;});
// const fingerprint = await digestMessage(userId + userName + email, "SHA-512").then((hash) => {return hash;});

//       if(refresh===refreshToken && fingerprint===fingerprinttoken){
//         var sessionToken=digestMessage(userId,"SHA-256").then((hash) => {return hash;});
//         window.sessionStorage.setItem('sessionToken',sessionToken);
//         window.location.reload();
//         return true;
//       }
//       })
      
//     }
// //   }
//   else
//   {
//     return true;
//   }
//   }
  if (isLoggedIn) {

    const datain = {
      name: window.localStorage.getItem('name'),
      accessSpecifier: window.localStorage.getItem('accessSpecifier')
    }
    return (
      <>
      {/* <ToastContainer></ToastContainer> */}
        <NavBar name={datain.name} />
        <BodyHandle accessSpecifier={datain.accessSpecifier} />
        <NavBarBottom />
      </>
    );
  }
  else {
    return (
      <>
      {/* <ToastContainer></ToastContainer> */}
        {/* DONT MESS WITH THIS, if something doesn't work, it's your fault */}
        <NavBar name="" />
        <Login />
        <Register />
        <FrontPageBody />
        <NavBarBottom />
        
      </>
    );
  }
}

export default App;
