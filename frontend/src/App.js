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
import Demo from './Pages/Demo/demo';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
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

          <Route path='demo' element={<Demo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
