import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Portfolio = () => {
    return (
        <div>
            <Link to="/">Back</Link>
            <h1 className="portfolio_heading">I'm the portfolio component!</h1>    
        </div>
    )
}

export default Portfolio