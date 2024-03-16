import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'
import { useNavigate } from 'react-router-dom';

function LoginSubWrap(props) {

    const navigate = useNavigate();

    if(props.isVisible) {
        return (
            <>
                <div className="login-subwrap" id="submenu">
                    <h4 className="login-subwrap-option" onClick={() => navigate("/UserLogin")}>User Login</h4>
                    <h4 className="login-subwrap-option"  onClick={() => navigate("/ShopKeeperLogin")}>Shopkeeper Login</h4>
                    <h4 className="login-subwrap-option"  onClick={() => navigate("/AdminLogin")}>Admin Login</h4>
                </div>
            </>
        );
    }
}

export default function Navbar() {
    

    const [subWrap, setSubWrap] = React.useState(false);

    return(
        <>
        <div className="navbar">
            <div className="nav-logo"></div>
            <button className="login-btn" onClick={() => setSubWrap(!subWrap)}>Login</button>
            <LoginSubWrap isVisible={subWrap}/>
        </div>
        </>
    );
}