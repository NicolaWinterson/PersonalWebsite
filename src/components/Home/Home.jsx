import React from "react";
import {
    Link
  } from "react-router-dom";
import "./styles.css";

const Home = () => {
    return (
        <div className="home_background">
            <nav>
                <ul className="home_navbar">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/cv">C.V.</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                </ul>
            </nav>
            <h1 className="home_heading">Hej and welcome</h1>
        </div>  
    )
}

export default Home