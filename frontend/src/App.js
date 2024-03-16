import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './Pages/Landing_Page/landing_page';
import Contact from './Pages/Contact_page/contact';
import Help from './Pages/help_page/help';
import UserLogin from './Pages/User_Pages/Login/login';
import ShopKeeperLogin from './Pages/ShopKeeper_Pages/Login/login';
import AdminLogin from './Pages/Admin_Pages/Login/login';
import Home from './Pages/Home_Page/home';
// import Profile from './Pages/Profile_Page/profile';
import ShopLanding from './Pages/ShopKeeper_Pages/Login/shop_landing page/shop_landing';
import UserHome from './Pages/User_Pages/Home/userhome';
import ShopKeeperHome from './Pages/ShopKeeper_Pages/Home/shopkeeperhomepage';

import AdminHome from './Pages/Admin_Pages/Home/admin-page';
import './App.css';
=======

import Comments from './Pages/ShopKeeper_Pages/Login/shop_landing page/comments';
import ShopPage from './Pages/ShopKeeper_Pages/Login/shop_landing page/shop_landing';
import UserSignUp from './Pages/User_Pages/SignUp/signup';
import Shopkeeper_Signup from './Pages/User_Pages/SignUp/signup';

=======
import Demo from './Pages/Demo/demo';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/UserLogin" element={<UserLogin />} />
          <Route path="/ShopKeeperLogin" element={<ShopKeeperLogin />} />
          <Route path="/UserSignUp" element={<UserSignUp />} />
          <Route path="/ShopKeeperSignUp" element={<ShopKeeperSignUp />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/UserHomePage" element={<UserHome />} />
          <Route path="/ShopKeeperHomePage" element={<ShopKeeperHome />} />
          <Route path="/AdminHomePage" element={<AdminHome />} />
=======
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/shopkeeperlogin" element={<ShopKeeperLogin />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/shoplanding" element={<ShopLanding />} />
          <Route path='/userHome' element={<UserHome />} />
          <Route path='/shopKeeperHome' element={<ShopKeeperHome />} />
          <Route path='/comments' element={<Comments />} />
          <Route path='/shop_landing_page' element={<ShopPage />} />
          <Route path='/user_signup_page' element={<UserSignUp />} />
          <Route path='/shopkeeper_signup_page' element={<Shopkeeper_Signup />} />
=======

          <Route path='demo' element={<Demo />} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
