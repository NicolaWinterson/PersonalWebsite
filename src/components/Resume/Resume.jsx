import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Resume = () => {
    return (
        <div>
            <Link to="/">Back</Link>
            <h1 className="Resume_heading">I'm the cv component!</h1>
        </div>
        
    )
}

export default Resume