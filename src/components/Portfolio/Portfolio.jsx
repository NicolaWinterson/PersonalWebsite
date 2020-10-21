import React from "react";
import Navbar from "../Navigation/Navbar"

import PortfolioItem from "./PortfolioItem"

import "./styles.css";

const Portfolio = () => {
    return (
        <div className="portfolio__container">
            <Navbar className="portfolio__container--top"/>
            <div className="portfolio__container--center"><h1 className="portfolio__heading">I'm the portfolio component!</h1>
                <div className="flexparent">
                    <PortfolioItem imgsrc="https://getuikit.com/v2/docs/images/placeholder_600x400.svg" alt="Folkets Pops1" link="https://folketspops.se/" />
                    <PortfolioItem imgsrc="https://getuikit.com/v2/docs/images/placeholder_600x400.svg" alt="To do list" link="https://codepen.io/nicolawinterson/pen/xxbZqEq" />
                    <PortfolioItem imgsrc="https://getuikit.com/v2/docs/images/placeholder_600x400.svg" alt="Tic Tac Toe w/ hooks" link="https://codesandbox.io/s/tick-tack-toe-whooks-v1-xmjpj" />
                    <PortfolioItem imgsrc="../Screenshot_2020-10-21-React-Recipe-App.png" alt="Receipt search API call" link="https://recipesearchappreact.netlify.app/" />
                    <PortfolioItem imgsrc="../Screenshot_2020-10-21-React-Weather-App.png" alt="Weather app API call" link="https://codesandbox.io/s/weather-api-app-v6-dmgnc/" />
                    <PortfolioItem imgsrc="https://getuikit.com/v2/docs/images/placeholder_600x400.svg" alt="Folkets Pops6" link="https://folketspops.se/" />
                </div>
            </div>
            <footer className="portfolio__container--bottom" />
        </div>
    )
}

export default Portfolio