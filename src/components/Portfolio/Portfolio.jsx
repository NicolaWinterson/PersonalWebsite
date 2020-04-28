import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { yellow } from "@material-ui/core/colors";

const Portfolio = () => {
    return (
        <div style={styles.container}>
            <div style={styles.top}>
                <Link to="/">Back</Link>
                <h1>I'm the portfolio component!</h1>
            </div>
            <div style={styles.center}>center</div>
            <div style={styles.bottom}>bottom
                <div style={styles.bottomItem}>1
                    <div style={styles.bottomItemInner}>bt</div>
                </div>
                <div style={styles.bottomItem}>2
                    <div style={styles.bottomItemInner}>bt</div>
                </div>
                <div style={styles.bottomItem}>3
                    <div style={styles.bottomItemInner}>bt</div>
                </div>
                <div style={styles.bottomItem}>4
                    <div style={styles.bottomItemInner}>bt</div>
                </div>
            </div>
        </div>
    )
}

const styles = {
    container: {
        flex: 1,
    },
    top: {
        height: '45vh',
        backgroundColor: 'yellow',
    },
    center: {
        height: '10vh',
        backgroundColor: 'blue',
    },
    bottom: {
        height: '45vh',
        backgroundColor: 'pink',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: '5',
    },
    bottomItem: {
        width: '50vw',
        height: '50vh',
        padding: 5,
    },
    bottomItemInner: {
        flex: 1,
        backgroundColor: 'black',
    },
}

export default Portfolio