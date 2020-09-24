import React from "react";
import {
    Link
} from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import MenuIcon from '@material-ui/icons/Menu';
import socialMediaDatas from "./SocialMediaData";
import SocialMediaIcons from "./SocialMediaIcons"
import "./styles.css";

const Contact = () => {

    const sayHowdy = () => {
        alert('Howdy');
    }

    return (
        <div className="contact__container">
            <nav className="contact__container--top">
                <ul className="navbar">
                    <li><Link to="/"><ArrowBackIosIcon /></Link>  </li>
                    <li><Link to="/cv">CV</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link className="navbar--active" to="/contact">Contact</Link></li>
                    <li className="contact_navbar--mobile-icon"><MenuIcon onClick={sayHowdy} /></li>
                </ul>
            </nav>
            <div className="contact__container--center">
                <h1>SAY HELLO</h1>
                <h2>What do you need help with? Have a project or an idea you'd like to collaborate on? Let’s talk about it.</h2>
                <form className="contact__container--form">
                    <label>Enter your name:</label>
                    <input className="contact__container--formInput" type="text" placeholder="Dirk Gently" />
                    <label>Enter your email:</label>
                    <input className="contact__container--formInput" type="email" placeholder="dirk@holisticdetectiveagency.gov" />
                    <label>Enter your query:</label>
                    <textarea className="contact__container--formInput-large" name="text" rows="2" cols="20" placeholder="“Let's think the unthinkable, let's do the undoable. Let us prepare to grapple with the ineffable itself, and see if we may not eff it after all.”" ></textarea>
                    <input className="contact__container--submit" type="submit" value="Submit" onClick={sayHowdy} />
                </form>
                <div>
                    <h1>Contact</h1>
                    <h2>Alternativly, find me on the various social channels below:</h2>
                    <div className="contact__container--flexparent">
                        {socialMediaDatas.map(item => (
                            <SocialMediaIcons {...item} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="contact__container--bottom">


            </div>
        </div>
    )
}

export default Contact;