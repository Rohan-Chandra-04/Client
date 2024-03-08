import React from "react";
import './login.css';
import { Link, useNavigate } from "react-router-dom";


function Details(props) {

    if(props.type === null) {
        props.type = "text";
    }

    return(
        <div>
            <label className="login-label">{props.label}</label><br></br>
            <input type={props.type} className="login-textarea"></input>
        </div>
    );
}


function Login(){

    const navigate = useNavigate();

    return (
        <>
        <div className = "login-container">
            <div className="login-box">
                <h1 className="login-h1">Hello Customer!</h1>
                <p className="login-p">Login here!</p>
                <Details label="Email" />
                <Details label="Password" type="password"/>
                <button className="signin" onClick={() => navigate("/UserHome")}>Sign In</button>
                <div className="signup-link">Are you new? <Link to="/UserSignUp">Register Here!</Link></div>
            </div>
            <div className="login-art"></div>
        </div>
        </>
    )
}

export default Login;