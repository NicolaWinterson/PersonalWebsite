import React from "react";
import {
    Link
  } from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import AlternateEmail from '@material-ui/icons/AlternateEmail'
import "./styles.css";

const Contact = () => {

    const sayHowdy = () => {
        alert('Howdy');
    }

    return (
        <div className="contact__container">
            <nav className="contact__container--top">
                <ul className="navbar">
                    <li className="navbar--push">
                        <Link to="/cv">CV</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                    <Link className="navbar--active" to="/contact">Contact</Link>
                    </li>
                    <li><Link className="portfolio__nav" to="/"><ArrowBackIosIcon /></Link>  </li>
                </ul>
            </nav>
            <div className="contact__container--center">
                <h1>SAY HELLO</h1>
                <h2>What do you need help with? Have a project or an idea you'd like to collaborate on? Let’s talk about it.</h2>
                <form className="contact__container--form">
                    <input className="contact__container--formInput" type="text" placeholder="Your name" />
                    <input className="contact__container--formInput" type="email" placeholder="Your email" />
                    <input className="contact__container--formInput-large" type="text" placeholder="Your message" />
                    <button className="contact__container--submit" onClick={sayHowdy}>Submit</button>
                </form>
            </div>
            <div className="contact__container--bottom">
                <h1>Contact</h1>
                <Link><AlternateEmail /></Link>      
            </div>
        </div>  
    )
}

export default Contact;