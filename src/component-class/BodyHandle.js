import React, { useEffect } from "react";
import Body from "./Body";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function BodyHandle(props) {

  const redirect = () => {
    const redirflag = window.sessionStorage.getItem('redirect');
    if(redirflag!==null || redirflag!==undefined || redirflag!==''){
      if(redirflag==='history')
      {
        var tab=document.getElementById('contact-tab');
        var tabr=document.getElementById('home-tab');
        var tabpane=document.getElementById('contact-tab-pane');
        var tabpaner=document.getElementById('home-tab-pane');
        tabr.classList.remove('active');
        tabpaner.classList.remove('show');
        tabpaner.classList.remove('active');
        tab.classList.add('active');
        tabpane.classList.add('show');
        tabpane.classList.add('active'); 
      }
      if(redirflag==='leavegrant')
      {
         tab=document.getElementById('profile-tab');
         tabr=document.getElementById('home-tab');
         tabpane=document.getElementById('profile-tab-pane');
         tabpaner=document.getElementById('home-tab-pane');
        tabr.classList.remove('active');
        tabpaner.classList.remove('show');
        tabpaner.classList.remove('active');
        tab.classList.add('active');
        tabpane.classList.add('show');
        tabpane.classList.add('active'); 
      }
    }
  }
  useEffect(() => {
    redirect();
    var a = window.sessionStorage.getItem('toastflag');
    if (a) {
      var ttype = window.sessionStorage.getItem('toasttype');
      var tmsg = window.sessionStorage.getItem('toastmsg');
      switch (ttype) {
        case 'success':
          toast.success(tmsg, {
            position: toast.POSITION.TOP_CENTER,
          });
          break;
          case 'error':
          toast.error(tmsg, {
            position: toast.POSITION.TOP_CENTER,
          });
          break;
          case 'warn':
          toast.warn(tmsg, {
            position: toast.POSITION.TOP_CENTER,
          });
          break;
          case 'info':
          toast.info(tmsg, {
            position: toast.POSITION.TOP_CENTER,
          });
          break;
          default:
          toast.error("Error in toast", {
            position: toast.POSITION.TOP_CENTER,
          });
          break;
      }
    }
    // a && toast.success('Logged in successfully!', {
    //   position: toast.POSITION.TOP_CENTER,
    // });
    window.sessionStorage.removeItem('toastflag');
    window.sessionStorage.removeItem('toasttype');
    window.sessionStorage.removeItem('toastmsg');
    window.sessionStorage.removeItem('redirect');
  })
  
  if (props.accessSpecifier === "user") {
    
    return (
      <>
        <ToastContainer />
        <ul className="nav nav-tabs mt-3" id="myTab" role="tablist">
          <li className="nav-item mx-3" role="presentation">
            <button
              className="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home-tab-pane"
              type="button"
              role="tab"
              aria-controls="home-tab-pane"
              aria-selected="true"
            >
              Home
            </button>
          </li>
          <li className="nav-item mx-3" role="presentation">
            <button
              className="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile-tab-pane"
              type="button"
              role="tab"
              aria-controls="profile-tab-pane"
              aria-selected="false"
            >
              Leave Apply
            </button>
          </li>
          <li className="nav-item mx-3" role="presentation">
            <button
              className="nav-link"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact-tab-pane"
              type="button"
              role="tab"
              aria-controls="contact-tab-pane"
              aria-selected="false"
            >
              History
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home-tab-pane"
            role="tabpanel"
            aria-labelledby="home-tab"
            tabIndex="0"
          >
            <Body part='home' />
          </div>
          <div
            className="tab-pane fade"
            id="profile-tab-pane"
            role="tabpanel"
            aria-labelledby="profile-tab"
            tabIndex="0"
          >
            <Body part="leaveapply" />
          </div>
          <div
            className="tab-pane fade"
            id="contact-tab-pane"
            role="tabpanel"
            aria-labelledby="contact-tab"
            tabIndex="0"
          >
            <Body part="history" />
          </div>
        </div>
      </>
    );
  }
  else if (props.accessSpecifier === "admin") {
    return (
      <>
        <ToastContainer />
        <ul className="nav nav-tabs pt-3" id="myTab" role="tablist">
          <li className="nav-item mx-3" role="presentation">
            <button
              className="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home-tab-pane"
              type="button"
              role="tab"
              aria-controls="home-tab-pane"
              aria-selected="true"
            >
              Home
            </button>
          </li>
          <li className="nav-item mx-3" role="presentation">
            <button
              className="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile-tab-pane"
              type="button"
              role="tab"
              aria-controls="profile-tab-pane"
              aria-selected="false"
            >
              Leave Grant
            </button>
          </li>
          {/* <li className="nav-item mx-3" role="presentation">
              <button
                className="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact-tab-pane"
                type="button"
                role="tab"
                aria-controls="contact-tab-pane"
                aria-selected="false"
              >
                Password Reset
              </button>
            </li> */}
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home-tab-pane"
            role="tabpanel"
            aria-labelledby="home-tab"
            tabIndex="0"
          >
            <Body part='homeadmin' />
          </div>
          <div
            className="tab-pane fade"
            id="profile-tab-pane"
            role="tabpanel"
            aria-labelledby="profile-tab"
            tabIndex="0"
          >
            <Body part="leavegrant" />
          </div>
          {/* <div
              className="tab-pane fade"
              id="contact-tab-pane"
              role="tabpanel"
              aria-labelledby="contact-tab"
              tabIndex="0"
            >
              <Body part="resetpassword"/>
            </div> */}
        </div>
      </>
    );
  }
}
