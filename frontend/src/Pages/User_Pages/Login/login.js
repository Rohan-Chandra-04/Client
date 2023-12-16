import React from "react";
import './login.css';


function Details(props) {
    return(
        <div>
            <label>{props.label}</label><br></br>
            <input type="text" className="textarea"></input>
        </div>
    );
}

function Login(){
    return (
        <>
        <div className = "container">
            <div className="box">
                <h1>User Login</h1>
                <Details label="email" />
                <Details label="password" />
                <button className="submit" >Submit</button>
                <div className="signup">Are you new? <a href="https://www.youtube.com/" target="_blank">Register here</a></div>
            </div>
        </div>
        </>
    )
}

export default Login;