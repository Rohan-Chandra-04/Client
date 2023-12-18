import UserLogin from './Pages/User_Pages/Login/login';
import ShopKeeperLogin from './Pages/ShopKeeper_Pages/Login/login';
import AdminLogin from './Pages/Admin_Pages/Login/login';
import './App.css';
import LandingPage from './Pages/Landing_Page/landing_page';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Contact from './Pages/Contact_page/contact';
import Help from './Pages/help_page/help';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element= { <LandingPage/>}/>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/help" element={<Help/>}/>
        <Route path="/userlogin" element={<UserLogin/>}/>
        <Route path="/shopkeeperlogin" element={<ShopKeeperLogin/>}/>
        <Route path="/adminlogin" element={<AdminLogin/>}/>
        

        
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;

