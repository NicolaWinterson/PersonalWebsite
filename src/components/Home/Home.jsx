import React from "react";
import Navbar from "../Navigation/Navbar"
import "./styles.css";

const Home = () => {
    return (
        <div className="home__container">
            <Navbar className="home__container--top"/>
            <div className="home__container--center">
                <h1 className="home_heading">Hej and welcome</h1>
            </div>
            <footer className="home__container--bottom"></footer>
        </div>
    )
}

export default Home