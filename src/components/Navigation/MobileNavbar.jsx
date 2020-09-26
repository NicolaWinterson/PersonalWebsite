import React, { useState } from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {
    Link
} from "react-router-dom";
import "./styles.css";

const MobileNavbar = () => {
    return (
        <ul className="navbar--mobile">
            <li><Link to="/cv">CV</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/"><ArrowBackIosIcon /></Link></li>
        </ul>
    )
}

export default MobileNavbar;