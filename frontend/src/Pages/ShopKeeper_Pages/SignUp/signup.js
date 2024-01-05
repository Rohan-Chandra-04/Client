import React from "react";
import './signup.css';

import { SearchBox } from '@mapbox/search-js-react';
import 'mapbox-gl/dist/mapbox-gl.css';

const token = "pk.eyJ1Ijoicm90aWJveSIsImEiOiJjbHFlNmE5ZzgwanR4MmtzNHR4dXN2MWhkIn0._QUODvJUzAKnNITpgz1-oQ"


function SearchBar() {
    const [value, setValue] = React.useState('');
    return (
        <div>
            <SearchBox accessToken={token} value = {value} />
        </div>
    );
}


function Details(props) {

    if(props.type === "searchbar") {
        return(
            <div>
                <label className="shopsignup-label">{props.label}</label><br></br>
                <SearchBar className="shopsignup-location"/>
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
                <Details label="Address" type="searchbar" />
                <Details label="Email" />
                <Details label="Ph No." />
                <Details label="Password" type="password" />
                <button className="shop-signup" >Sign Up</button>
            </div>
            <div className="shopsignup-art"></div>
        </div>
        </>
    )
}

export default SignUp;



