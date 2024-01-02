import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/homepage';
import UserLogin from './Pages/User_Pages/Login/login';
import ShopKeeperLogin from './Pages/ShopKeeper_Pages/Login/login'
import UserSignUp from './Pages/User_Pages/SignUp/signup';
import ShopKeeperSignUp from './Pages/ShopKeeper_Pages/SignUp/signup'
import AdminLogin from './Pages/Admin_Pages/Login/login'
import UserHome from './Pages/User_Pages/Home/userhome'
import './App.css';

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
        </Routes>
      </Router>

    </div>
  );
}

export default App;

