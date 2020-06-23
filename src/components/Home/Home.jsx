import React from "react";
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import MenuIcon from '@material-ui/icons/Menu';
import {
    Link
  } from "react-router-dom";
import "./styles.css";

const Home = () => {

    const sayHello = () => {
        alert('Hello!');
    }

    return (
        <div className="home__container">
            <nav>
                <ul className="home_navbar">
                    <li><SentimentSatisfiedAltIcon />NLW</li>
                    <li className="home_navbar--push">
                        <Link to="/cv">CV</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">PORTFOLIO</Link>
                    </li>
                </ul>
                <ul className="home_navbar--mobile">
                    <MenuIcon className="home_navbar--mobile-icon" onClick={sayHello}/>
                    <li className="home_navbar--mobile-li">
                        <Link to="/cv">CV</Link>
                    </li>
                    <li className="home_navbar--mobile-li">
                        <Link to="/portfolio">PORTFOLIO</Link>
                    </li>
                </ul>
            </nav>
            <h1 className="home_heading">Hej and welcome</h1>
        </div>  
    )
}

export default Home