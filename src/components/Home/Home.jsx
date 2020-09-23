import React, {useState} from "react";
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
            <nav className="home__container--top">
                <MenuIcon className="home_navbar--mobile-icon" onClick={sayHello} />
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
            <h1 className="home_heading">Hej and welcome</h1>
        </div>
    )
}

export default Home