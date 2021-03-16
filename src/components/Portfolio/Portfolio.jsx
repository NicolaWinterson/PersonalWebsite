import React from "react";
import Navbar from "../Navigation/Navbar"

import PortfolioItem from "./PortfolioItem"

import "./styles.css";

const Portfolio = () => {
    return (
        <div className="portfolio__container">
            <Navbar className="portfolio__container--top"/>
            <div className="portfolio__container--center">
                <h1 className="portfolio__heading">Responsive design written in HTML, CSS, React, Javascript:</h1>
                <div className="flexparent">
                    <PortfolioItem imgsrc="../Screenshot_Calculator_App.png" alt="Calculator App" link="https://eager-jennings-bd5ba1.netlify.app/" />
                    <PortfolioItem imgsrc="../Screenshot_2020-10-21-React-Weather-App.png" alt="Weather app API call" link="https://dmgnc.csb.app/" />
                    <PortfolioItem imgsrc="../Screenshot_2020-10-21-React-Game-App.png" alt="Tic Tac Toe w/ hooks" link="https://xmjpj.csb.app/" />
                    <PortfolioItem imgsrc="../Screenshot_Recipe_API_App.png" alt="Receipt search API call" link="https://recipesearchappreact.netlify.app/" />
                    <PortfolioItem imgsrc="https://image.freepik.com/free-vector/purple-coming-soon-neon-icon-vector_53876-77843.jpg" alt="Folkets Pops6" link="https://folketspops.se/" />
                    <PortfolioItem imgsrc="https://image.freepik.com/free-vector/purple-coming-soon-neon-icon-vector_53876-77843.jpg" alt="To do list" link="https://codepen.io/nicolawinterson/pen/xxbZqEq" />
                </div>
            </div>
            <footer className="portfolio__container--bottom" />
        </div>
    )
}

export default Portfolio