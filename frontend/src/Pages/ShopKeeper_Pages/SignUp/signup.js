import React from "react";
import './signup.css';


function Details(props) {

    if(props.type === "dropdown") {
        return(
            <div className="addressbar">
                <label className="shopsignup-label">{props.label}</label>
                <select name="location" id="location" className="shopsignup-textarea">
                    <option value="amul">Amul</option>
                    <option value="nandhini">Nadhini</option>
                    <option value="suprabha">Suprabha</option>
                </select>
            </div>
        );
    }

    if(props.type === null) {
        props.type = "text";
    }

    return(
        <div>
            <label className="shopsignup-label">{props.label}</label><br></br>
            <input type={props.type} className="shopsignup-textarea"></input>
        </div>
    );
}

function SignUp(){
    return (
        <>
        <div className = "shopsignup-container">
            <div className = "shopsignup-box">
                <h1 className="shopsignup-h1">ShopKeeper?</h1>
                <p className="shopsignup-p">Sign Up here!</p>
                <Details label="Name" />
                <Details label="Shop Name" />
                <Details label="Address (test)" type="dropdown" />
                <Details label="Email" />
                <Details label="Ph No." />
                <Details label="Password" type="password" />
                <button className="shop-signup" >Sign Up</button>
            </div>
        </div>
        </>
    )
}

export default SignUp;



