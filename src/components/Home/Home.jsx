import React from "react";
import MenuIcon from '@material-ui/icons/Menu';
import {
    Link
} from "react-router-dom";
import "./styles.css";

const Home = () => {

    /* const [isMenuOpen, setIsMenuOpen] = useState(false); */

    return (
        <div className="home__container">
            <nav className="home__container--top">
                {/* <MenuIcon 
                    className="home_navbar--mobile-icon" 
                    isMenuOpen={isMenuOpen}
                    onClick={() => setIsMenuOpen(!isMenuOpen)} /> */}
                <ul className="navbar">
                    <li>NLW</li>
                    <li className="navbar--push">
                        <Link to="/cv">CV</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <div className="home__container--center">
                <h1 className="home_heading">Hej and welcome</h1>
            </div>
            <footer className="home__container--bottom"></footer>
        </div>
    )
}

export default Home