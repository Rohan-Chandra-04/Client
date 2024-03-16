import React from "react";
import { useRef } from "react";
import './shopkeeperhomepage.css';
import { useNavigate } from 'react-router-dom';


function ProfileSubWrap(props) {
    if(props.isVisible) {
        return (
            <>
                <div className="shopkeeper-profile-subwrap" id="submenu">
                    <h4 className="sk-profile-subwrap-option">Profile</h4>
                    <h4 className="sk-profile-subwrap-option">Settings</h4>
                    <h4 className="sk-profile-subwrap-option">Help</h4>
                </div>
            </>
        );
    }
}

function ShopKeeperNavbar(props) {

    const navigate = useNavigate();

    const [subWrap, setSubWrap] = React.useState(false);

    return(
        <>
            <div className="shopkeepernavbar">
                <div className="shopkeeper-logo" onClick={() => navigate("/")}></div>
                <h1 className="shopkeeper-logo-header">GoLocal</h1>
                <div className="shopkeeper-chats"></div>
                <div className="shopkeeper-comments"></div>
                <div className="shopkeeper-profile" onClick={() => setSubWrap(!subWrap)}></div>
                <ProfileSubWrap isVisible={subWrap}/>
                <div className="shopkeeper-logout"></div>
            </div>
        </>
    );

}

function Shop(props) {

    return (
        <>
            <li className="shopkeeper-shop">
                <p>{props.shop}</p>
                <div className="shop-edit-btn"></div>
            </li>
        </>
    );
}


function ShopKeeperHome() {

    const [shops, setShopList] = React.useState(['Shop1']);
    const [search, setSearch] = React.useState('');

    function ShopList() {

        const listItems = shops.filter((item) => {
            return search.toLowerCase() === '' ? item : item.toLowerCase().includes(search);
        }).map(shop => <Shop shop={shop} />)
        return <ul className="shopkeeper-shopcards">{listItems}</ul>
    }

    function addShop() {
        if(shops.length < 8) {
            let shopCopy = [...shops];
            shopCopy.push('Shop'+(shops.length+1));
            setShopList(shopCopy);
            console.log('shop added!');
        }
    }

    return (
    <>
        <div className="shopkeeperhome-container">
            <ShopKeeperNavbar />
            <h1 className="shopkeeperhome-h1">Welcome Back ShopKeeper 👋</h1>
            <h3 className="shopkeeperhome-h3">Your Shops</h3>
            <div className="shopkeeperhome-search">
                <input className="shopkeeperhome-searchbar" placeholder="Search Shops" onChange={(e) => setSearch(e.target.value)}></input>
                <button className="shopkeeperhome-searchbtn">🔎</button>
                <select className="shopkeeperhome-filterbtn">
                    <option value="" disabled selected>Filter By</option>
                </select>
                <button className="shopkeeperhome-addshop" onClick={addShop}>Add Shop + </button>
            </div>
            <ShopList shops={shops} />
            <a className="shopkeeper-moreshops" href="">{'> '}Load More Shops</a>
        </div>
    </>
    );
}

export default ShopKeeperHome;
