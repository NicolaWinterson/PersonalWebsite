import React, { useState } from "react";
import MobileNavbar from "./MobileNavbar"
import BurgerIcon from "./BurgerIcon"
import MenuIcon from '@material-ui/icons/Menu';
import {
    Link
} from "react-router-dom";
import "./styles.css";

const Navbar = (props) => {
    const [open, setOpen] = useState(false);
    const [transform, setTransform] = useState(() => false);

    return (
        <nav>
            <BurgerIcon open={open} onClick={() => setOpen(!open)}/>
             {open ? <MobileNavbar /> : null}
            <ul className="navbar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cv">CV</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;