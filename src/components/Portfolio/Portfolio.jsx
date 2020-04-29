import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { yellow } from "@material-ui/core/colors";

const Portfolio = () => {
    return (
        <div className="portfolio__container">
            <nav className="portfolio__container--top">
                <Link className="portfolio__nav" to="/">Back</Link>  
            </nav>
            <div className="portfolio__container--center"><h1 className="portfolio__heading">I'm the portfolio component!</h1></div>
            <div className="portfolio__container--bottom">bottom
                <ul className="flexparent">
                    <li className="flexchild">1</li>
                    <li className="flexchild">2</li>
                    <li className="flexchild">3</li>
                    <li className="flexchild">4</li>
                    <li className="flexchild">5</li>
                    <li className="flexchild">6</li>
                </ul>
            </div>
        </div>
    )
}

export default Portfolio