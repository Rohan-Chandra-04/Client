import React from "react";
import './admin-page.css';
import { useNavigate } from 'react-router-dom';

function ProfileSubWrap(props) {
    if(props.isVisible) {
        return (
            <div className="admin-profile-subwrap" id="submenu">
                <h4 className="admin-profile-subwrap-option">Profile</h4>
                <h4 className="admin-profile-subwrap-option">Settings</h4>
                <h4 className="admin-profile-subwrap-option">Help</h4>
            </div>
        );
    }
}

function AdminNavbar(props) {
    const navigate = useNavigate();
    const [subWrap, setSubWrap] = React.useState(false);

    return(
        <div className="admin-navbar">
            <div className="admin-logo" onClick={() => navigate("/")}></div>
            <h1 className="admin-logo-header">GoLocal</h1>
            <div className="admin-chats"></div>
            <div className="admin-comments"></div>
            <div className="admin-profile" onClick={() => setSubWrap(!subWrap)}></div>
            <ProfileSubWrap isVisible={subWrap}/>
            <div className="admin-logout"></div>
        </div>
    );
}

function Shop(props) {
    return (
        <li className="admin-shop">
            <p>{props.shop}</p>
            <div className="admin-shop-edit-btn"></div>
        </li>
    );
}

function Prod(props) {
    return (
        <li className="admin-shop">
            <p>{props.prod}</p>
            <div className="admin-shop-edit-btn"></div>
        </li>
    );
}

function ShopSection() {
    const [shops, setShopList] = React.useState(['Shop1']);
    const [search, setSearch] = React.useState('');

    function addShop() {
        if(shops.length < 8) {
            let shopCopy = [...shops];
            shopCopy.push('Shop'+(shops.length+1));
            setShopList(shopCopy);
            console.log('shop added!');
        }
    }

    const filteredShops = shops.filter((item) => {
        return search === '' || item.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <div>
            <h3 className="admin-home-h3">The Shops</h3>
            <div className="admin-home-search">
                <input
                    className="admin-home-searchbar"
                    placeholder="Search Shops"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className="admin-home-searchbtn">🔎</button>
                <select className="admin-home-filterbtn">
                    <option value="" disabled selected>Filter By</option>
                </select>
                <button className="admin-home-addshop" onClick={addShop}>Add Shop + </button>
            </div>
            <ul className="admin-shopcards">
                {filteredShops.map(shop => <Shop key={shop} shop={shop} />)}
            </ul>
            <a className="admin-moreshops" href="">{'> '}Load More Shops</a>
        </div>
    );
}

function ProfileSection() {
    const [prods, setProdList] = React.useState(['Prod1']);
    const [search, setSearch] = React.useState('');

    function addProd() {
        if(prods.length < 8) {
            let prodCopy = [...prods];
            prodCopy.push('Prod'+(prods.length+1));
            setProdList(prodCopy);
            console.log('shop added!');
        }
    }

    const filteredProds = prods.filter((item) => {
        return search === '' || item.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <div>
            <h3 className="admin-home-h3">The Products</h3>
            <div className="admin-home-search">
                <input
                    className="admin-home-searchbar"
                    placeholder="Search Shops"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className="admin-home-searchbtn">🔎</button>
                <select className="admin-home-filterbtn">
                    <option value="" disabled selected>Filter By</option>
                </select>
                <button className="admin-home-addshop" onClick={addProd}>Add Product + </button>
            </div>
            <ul className="admin-shopcards">
                {filteredProds.map(prod => <Prod key={prod} prod={prod} />)}
            </ul>
            <a className="admin-moreshops" href="">{'> '}Load More Products</a>
        </div>
    );
}

function AdminHome() {
    
    const [section, setSection] = React.useState(0);
    function Section() {
        if(section === 0) {
            return(<>
                <ShopSection />
            </>);
        } else {
            return(<>
                <ProfileSection />
            </>);
        }
    }
    return (
        <div className="admin-home-container">
            <AdminNavbar />
            <h1 className="admin-home-h1">Welcome Back Admin! 🕵️</h1>
            <div className="admin-sections">
                <button className="admin-shops-btn" onClick={() => setSection(0)}>Shops</button>
                <button className="admin-prods-btn"onClick={() => setSection(1)}>Products</button>
            </div>
            <Section />
        </div>
    );
}

export default AdminHome;
