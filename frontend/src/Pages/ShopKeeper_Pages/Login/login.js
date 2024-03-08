import React from "react";
import './login.css';
import { Link, useNavigate } from "react-router-dom";

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

    const navigate = useNavigate();

    return (
        <>
        <div className = "shoplogin-container">
            <div className="shoplogin-box">
                <h1 className="shoplogin-h1">Hello ShopKeeper!</h1>
                <p className="shoplogin-p">Login here!</p>
                <Details label="Email" />
                <Details label="Password" type="password"/>
                <button className="shop-signin" onClick={() => navigate("/ShopKeeperHome")} >Sign In</button>
                <div className="shop-signup-link">Are you new? <Link to="/ShopKeeperSignUp">Register Here!</Link></div>
            </div>
            <div className="shoplogin-art"></div>
        </div>
        </>
    )
}

export default Login;