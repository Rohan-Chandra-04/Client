import React from "react";
import './login.css';


function Details(props) {

    if(props.type === null) {
        props.type = "text";
    }

    return(
        <div>
            <label className="shoplogin-label">{props.label}</label><br></br>
            <input type={props.type} className="shoplogin-textarea"></input>
        </div>
    );
}

function Login(){
    return (
        <>
        <div className = "shoplogin-container">
            <div className="shoplogin-box">
                <h1 className="shoplogin-h1">Hello ShopKeeper!</h1>
                <p className="shoplogin-p">Login here!</p>
                <Details label="Email" />
                <Details label="Password" type="password"/>
                <button className="shop-signin" >Sign In</button>
                <div className="shop-signup-link">Are you new? <a href="https://www.youtube.com/" target="_blank">Register here</a></div>
            </div>
        </div>
        </>
    )
}

export default Login;