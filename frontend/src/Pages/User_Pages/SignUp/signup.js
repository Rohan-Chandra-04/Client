import React from "react";
import './signup.css';


function Details(props) {

    if(props.type === null) {
        props.type = "text";
    }

    return(
        <div>
            <label className="signup-label">{props.label}</label><br></br>
            <input type={props.type} className="signup-textarea"></input>
        </div>
    );
}

function UserSignUp(){
    return (
        <>
        <div className = "signup-container">
            <div className = "signup-box">
                <h1 className="signup-h1">Customer?</h1>
                <p className="signup-p">Sign Up here!</p>
                <Details label="Name" />
                <Details label="Email" />
                <Details label="Ph No." />
                <Details label="Password" type="password"/>
                <button className="signup" >Sign Up</button>
            </div>
            <div className="signup-art"></div>
        </div>
        </>
    )
}

export default UserSignUp;



