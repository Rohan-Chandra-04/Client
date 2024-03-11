import React from "react";
import './login.css';
import { useNavigate } from "react-router-dom";


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

    const navigate = useNavigate();

    return (
        <>
        <div className = "adlogin-container">
            <div className="adlogin-box">
                <h1 className="adlogin-h1">Hello Admin!</h1>
                <p className="adlogin-p">Login here!</p>
                <Details label="Email" />
                <Details label="Password" type="password"/>
                <button className="ad-signin" onClick={() => navigate("/AdminHomePage")}>Sign In</button>
            </div>
            <div className="adlogin-art"></div>
        </div>
        </>
    )
}

export default Login;