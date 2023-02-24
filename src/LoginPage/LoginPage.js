import React from "react";
import  "./LoginPage.css";
function LoginPage(){
    return(
    <div className="Login">
        <div className="facebook">
            <div className="facebooktext">
                facebook
            </div>
            <div className="title">
                Facebook helps you connect and share<br></br> with the people in your life
            </div>

        </div>
        <div className="logincontainer">
            <div className="logindetail">
               <input type="email" placeholder="Email Address or Phone Number"/> 
               <br></br>
               <input type="password" placeholder="Password"/>
               <br></br>  
               <button className="btn">
                     Login
                </button> 
            </div>
            <div className="forget">
                <a href="forget">Forgotten Password?</a>
                <br></br>
            </div>
            <div className="create">
                <br></br>
                <button className="btns">
                    Create New Account
                </button>
                <p></p>
                <br></br>
                <div className="page">
                    <a href="createpage">Create a Page  </a> for a celebrity, brand or business.
                </div>
            </div>

        </div>
    </div>
    )
}
export default LoginPage