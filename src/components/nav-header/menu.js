import React from 'react';
import classes from './menu.module.css';
import {Link} from "react-router-dom";


const Menu = () => {
    return(
        <div>
            <div className={classes.menu_div}>
                <ul>
                <li></li>
                    <li>Specialisations</li>
                    <li>Works</li>
                    <li>Our Team</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    );
}

export default Menu;