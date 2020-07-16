import React from "react";
import {
    Link
  } from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import AlternateEmail from '@material-ui/icons/AlternateEmail'
import "./styles.css";

const Contact = () => {
    return (
        <div className="contact__container">
            <nav className="contact__container--top">
                <Link className="portfolio__nav" to="/"><ArrowBackIosIcon /></Link>  
            </nav>
            <div className="contact__container--center">
                <h1>SAY HELLO</h1>
            </div>
            <div className="contact__container--bottom">
                <h1>Contact</h1>
                <Link><AlternateEmail /></Link>      
            </div>
        </div>  
    )
}

export default Contact;