// src/Contact.js
import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import bootstrap from 'bootstrap';
import styles from './inqwell.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class Signup extends Component {
    state = {  } 
    render() { 
        return (
            <html>
    <head>
        <title>Inqwell - Signup</title>
    </head>

      <header>
        <div className="top_nav">
            <div className="top_nav_space"></div>
            <div className="top_nav_logo"><span  className="top_nav_logo_text">Inqwell</span></div>
            <button className="signin_button signin_button_text">
              Sign in
            </button>
        </div>
        </header>

    {/* Left Nav */}
     <nav>
        <div classNameName="left_nav">
            <div className="left_nav_menu_bt"></div>
            <div className="left_nav_menu">
              <div className="left_nav_icon_menu"></div>
        </div>
            <div className="left_nav_icons">
              <div className="left_nav_icons_home">
                <div className="left_nav_icons_home_">
                </div>
              </div>
              <div className="left_nav_icons_create">
                <div className="left_nav_icons_create_"></div>
              </div>
              <div className="left_nav_icons_fonts">
                <div className="left_nav_icons_fonts_"></div>
              </div>
              <div className="left_nav_icons_trash">
                <div className="left_nav_icons_trash_"></div>
              </div>
            </div>
            <div className="left_nav_icons_signin">
              <div className="left_nav_icons_signin_"></div>
            </div>
        </div>
    </nav>
    
        <div className="container-lg signup_popup_page1">
          <div className="signup_popup_page1_title">
            <span className="signup_popup_page1_title_1">Create your account</span>
            <span className="signup_popup_page1_title_2">Let's get started!</span>
          </div>
          {/* <div className="e92_22751"></div>
          <span className="e92_22752">User’s Names </span>
          <span className="e92_22753">Full Name</span>
          <div className="e92_22754"></div>
          <span className="e92_22755">Name</span>
          <span className="e92_22756">Last Name</span>
          <div className="e92_22757"></div>
          <span className="e92_22758">user@gmail.com </span>
          <span className="e92_22759">Email</span>
          <div className="e92_22760"></div>
          <span className="e92_22761">1 + (123) 456-7890</span>
          <span className="e92_22762">Phone Number</span>
          <div className="e92_22763"></div>
          <span className="e92_22764">Enter Password</span>
          <span className="e92_22765">Password</span>
          <div className="e92_22766"></div>
          <span className="e92_22767">Confirm Password</span>
          <span className="e92_22768">Confirm Password</span>
          <span className="e92_22769">Date of Birth</span>
          <div className="e92_22770"></div>
          <span className="e92_22771">Month</span>
          <span className="e92_22772">01</span>
          <div className="e92_22773"></div>
          <span className="e92_22774">Day</span>
          <span className="e92_22775">01</span>
          <div className="e92_22776"></div>
          <span className="e92_22777">Year</span>
          <span className="e92_22778">1970</span>
          <div className="e92_22779">
          <div className="e92_22780"></div>
            <span className="e92_22781">next</span>
          </div>
          <div className="e92_22782"></div> */}
          <div>
            <form className='formPage'>
              <div className='col-md-6'> Test</div>
              <div className='col-md-6'>Test</div>
            </form>
          </div>
        </div>
    </html>
        );
    }
}
 
export default Signup;
