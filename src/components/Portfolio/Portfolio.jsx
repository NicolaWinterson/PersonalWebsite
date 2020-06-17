import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import PortfolioItem from "./PortfolioItem"
import { yellow } from "@material-ui/core/colors";

const Portfolio = () => {
    return (
        <div className="portfolio__container">
            <nav className="portfolio__container--top">
                <Link className="portfolio__nav" to="/">Back</Link>  
            </nav>
            <div className="portfolio__container--center"><h1 className="portfolio__heading">I'm the portfolio component!</h1></div>
            <div className="portfolio__container--bottom">bottom
                <div className="flexparent">
                    <PortfolioItem imgsrc="https://getuikit.com/v2/docs/images/placeholder_600x400.svg" alt="Folkets Pops1" link="https://folketspops.se/" />
                    <PortfolioItem imgsrc="https://getuikit.com/v2/docs/images/placeholder_600x400.svg" alt="Folkets Pops2" link="https://folketspops.se/" />
                    <PortfolioItem imgsrc="https://getuikit.com/v2/docs/images/placeholder_600x400.svg" alt="Folkets Pops3" link="https://folketspops.se/" />
                    <PortfolioItem imgsrc="https://getuikit.com/v2/docs/images/placeholder_600x400.svg" alt="Folkets Pops4" link="https://folketspops.se/" />
                    <PortfolioItem imgsrc="https://getuikit.com/v2/docs/images/placeholder_600x400.svg" alt="Folkets Pops5" link="https://folketspops.se/" />
                    <PortfolioItem imgsrc="https://getuikit.com/v2/docs/images/placeholder_600x400.svg" alt="Folkets Pops6" link="https://folketspops.se/" />
                    <PortfolioItem imgsrc="https://getuikit.com/v2/docs/images/placeholder_600x400.svg" alt="Folkets Pops" link="https://folketspops.se/" />
                </div>   
            </div>
        </div>
    )
}

export default Portfolio