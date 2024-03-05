import Navbar from "./navbar"
import './homepage.css'

export default function Home() {
    return (
        <div className="home-container">
            <Navbar />
            <h1 className="homepage-h1">Welcome to GoLocal!</h1>
        </div>
    );
}