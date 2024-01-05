import React from "react";
import './login.css';


function Details(props) {

    if(props.type === null) {
        props.type = "text";
    }

    return(
        <div>
            <label className="adlogin-label">{props.label}</label><br></br>
            <input type={props.type} className="adlogin-textarea"></input>
        </div>
    );
}

function Login(){
    return (
        <>
        <div className = "adlogin-container">
            <div className="adlogin-box">
                <h1 className="adlogin-h1">Hello Admin!</h1>
                <p className="adlogin-p">Login here!</p>
                <Details label="Email" />
                <Details label="Password" type="password"/>
                <button className="ad-signin" >Sign In</button>
            </div>
            <div className="adlogin-art"></div>
        </div>
        </>
    )
}

export default Login;