import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import PortfolioItem from "./PortfolioItem"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Portfolio = () => {
    return (
        <div className="portfolio__container">
            <nav className="portfolio__container--top">
                <ul className="navbar">
                    <li className="navbar--push">
                        <Link to="/cv">CV</Link>
                    </li>
                    <li>
                        <Link className="navbar--active" to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li><Link className="portfolio__nav" to="/"><ArrowBackIosIcon /></Link>  </li>
                </ul>
            </nav>
            <div className="portfolio__container--center"><h1 className="portfolio__heading">I'm the portfolio component!</h1></div>
            <div className="portfolio__container--bottom">bottom
                <div className="flexparent">
                    <PortfolioItem imgsrc="https://getuikit.com/v2/docs/images/placeholder_600x400.svg" alt="Folkets Pops1" link="https://folketspops.se/" />
                    <PortfolioItem imgsrc="https://getuikit.com/v2/docs/images/placeholder_600x400.svg" alt="To do list" link="https://codepen.io/nicolawinterson/pen/xxbZqEq" />
                    <PortfolioItem imgsrc="https://getuikit.com/v2/docs/images/placeholder_600x400.svg" alt="Tic Tac Toe w/ hooks" link="https://codesandbox.io/s/tick-tack-toe-whooks-v1-xmjpj" />
                    <PortfolioItem imgsrc="https://getuikit.com/v2/docs/images/placeholder_600x400.svg" alt="Receipt search API call" link="https://recipesearchappreact.netlify.app/" />
                    <PortfolioItem imgsrc="https://getuikit.com/v2/docs/images/placeholder_600x400.svg" alt="Weather app API call" link="https://codesandbox.io/s/weather-api-app-v6-dmgnc/" />
                    <PortfolioItem imgsrc="https://getuikit.com/v2/docs/images/placeholder_600x400.svg" alt="Folkets Pops6" link="https://folketspops.se/" />
                </div>
            </div>
        </div>
    )
}

export default Portfolio