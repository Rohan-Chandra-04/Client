import React from "react";
import './landing_page.css';
import {Link} from 'react-router-dom';


function Landingpage(){
    return (
        <div className="landingpage">
            <div className="header">
                <div className="logo">
                    <h1>GoLocal</h1>
                </div>
                    <ol className="nav">
                        <li><Link to='/contact' className="links">Contact</Link></li>
                        <li><Link to='/help' className="links">Help</Link></li>
                    </ol>
                    </div>

                    <div className="landingpagecontents">
                        <div className="info">
                            <div className="infocontents">
                                
                                <img src="https://imgs.search.brave.com/jxzdgCGHs-5It0RQ6CcgBBXJ4F4SPvUdQyqCgGXDAH8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9keW5h/bWljLmJyYW5kY3Jv/d2QuY29tL2Fzc2V0/L2xvZ28vNWU0MWUw/MDgtZTNjMC00MmNk/LTllZDQtMmZjMTMx/NTRmMTZlL2xvZ28t/c2VhcmNoLWdyaWQt/MXg_bG9nb1RlbXBs/YXRlVmVyc2lvbj0x/JnY9NjM3NjgzODY0/NTQxNzMwMDAw.jpeg" alt="logo of the app"></img>
                                
                                
                                <p>Order your favorite products from your nearest stores!</p>
                                  
                                </div>
                

                        </div>


                        <div className="signinoptions">
                        <div className="signincard">
                        <div className=" card">
                              <div className="c1">
                                <p>Existing User?</p>
                            <button><Link to='/userlogin' className="loginlinks">SignIn as user</Link></button>
                            </div>
                            <div className="c1">
                            <p>New User?</p>
                            <button><Link to='/userlogin' className="loginlinks">SignUp as user</Link></button>
                        </div>

                        </div>

                        <div className="card">
                        <div className="c1">
                            <p>Existing Shopkeeper?</p>
                            <button><Link to='/shopkeeperloginlogin' className="loginlinks">SignIn as Shopkeeper</Link></button>
                            </div>
                            <div className="c1">
                                <p>New Shopkeeper?</p>
                            <button><Link to='/shopkeeperlogin' className="loginlinks">SignUp as Shopkeeper</Link></button>
                            </div>

                        </div>

                        <div className="card">
                        <div className="c1">
                            <p>Existing Admin?</p>
                             <button><Link to='/adminlogin' className="loginlinks">SignIn as Admin</Link></button>
                             </div>
                             <div className="c1">
                                <p>New Admin?</p>
                             <button><Link to='/adminlogin' className="loginlinks">SignUp as Admin</Link></button>
                             </div>

                        </div>

                        </div>

                        </div>
                    </div>


            



            
        </div>
    )
}

export default Landingpage;