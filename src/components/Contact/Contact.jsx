import React from "react";
import socialMediaDatas from "./SocialMediaData";
import SocialMediaIcons from "./SocialMediaIcons";
import Navbar from "../Navigation/Navbar";
import "./styles.css";

const Contact = () => {

    const sayHowdy = () => {
        alert('Howdy');
    }

    return (
        <div className="contact__container">
            <Navbar className="contact__container--top"/>
            <div className="contact__container--center">
                <h1>SAY HOWDY</h1>
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
            <footer className="contact__container--bottom"></footer>
        </div>
    )
}

export default Contact;