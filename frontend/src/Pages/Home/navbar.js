import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'

export default function Navbar() {
    return(
        <>
        <div className="navbar">
            <Link to="/" className="link"> Home </Link>
            <br></br>
            <Link to="/UserLogin" className="link"> UserLogin </Link>
            <Link to="/ShopKeeperLogin" className="link"> ShopKeeperLogin </Link>
            <Link to="/AdminLogin" className="link"> AdminLogin </Link>
        </div>
        </>
    );
}