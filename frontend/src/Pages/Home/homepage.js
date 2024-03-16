import Navbar from "./navbar"
import './homepage.css'

export default function Home() {
    return (<>
        <Navbar />
        <div className="home-container">
            
            <h1 className="homepage-h1">Welcome to GoLocal!</h1>
            <p className="homepage-p">Welcome to GoLocal, your go-to hub for college essentials! 
            Find everything from textbooks to dorm decor in one convenient place. With easy navigation 
            and doorstep delivery, shopping for your academic journey has never been easier. Say goodbye to 
            long lines and crowded stores – GoLocal has you covered with competitive prices and top-notch service.</p>
            <button className="join-btn">Join Now!</button>
        </div>
        
        <footer>GoLocal | Designed by IEEE</footer>
        </>
    );
}