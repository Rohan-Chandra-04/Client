import React from "react";
import './userhome.css';
import { useNavigate } from 'react-router-dom';



function UserProfileSubWrap(props) {
    if(props.isVisible) {
        return (
            <>
                <div className="user-profile-subwrap" id="submenu">
                    <h4 className="user-profile-subwrap-option">Profile</h4>
                    <h4 className="user-profile-subwrap-option">Settings</h4>
                    <h4 className="user-profile-subwrap-option">Help</h4>
                </div>
            </>
        );
    }
}

function UserNavbar() {

    const navigate = useNavigate();

    const [subWrap, setSubWrap] = React.useState(false);

    return(
        <>
            <div className="usernavbar">
                <div className="logo" onClick={() => navigate("/")}></div>
                <h1 className="logo-header">GoLocal</h1>
                <div className="user-chats"></div>
                <div className="user-comments"></div>
                <div className="user-profile" onClick={() => setSubWrap(!subWrap)}></div>
                <UserProfileSubWrap isVisible={subWrap} />
                <div className="user-logout"></div>
            </div>
        </>
    );

}


function UserHome() {

    const shops = ['Shop1', 'Shop2', 'Shop3', 'Shop4', 'Shop5', 'Shop6', 'Shop7', 'Shop8'];

    const [search, setSearch] = React.useState('');

    function ShopList() {

        const listItems = shops.filter((item) => {
            return search.toLowerCase() === '' ? item : item.toLowerCase().includes(search);
        }).map(shop => <li className="shop">{shop}</li>)
        return <ul className="shopcards">{listItems}</ul>
    }

    return (
    <>
        <div className="userhome-container">
            <UserNavbar />
            <h1 className="userhome-h1">Welcome Back Roti 👋</h1>
            <h3 className="userhome-h3">Shops</h3>
            <div className="userhome-search">
                <input className="userhome-searchbar" placeholder="Search Shops" onChange={(e) => setSearch(e.target.value)}></input>
                <button className="userhome-searchbtn">🔎</button>
                <select className="userhome-filterbtn">
                    <option value="" disabled selected>Filter By</option>
                </select>
            </div>
            <ShopList shops={shops} />
            <a className="moreshops" href="">{'> '}Load More Shops</a>
        </div>
    </>
    );
}

export default UserHome;
