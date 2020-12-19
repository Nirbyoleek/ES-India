import React from "react";
import Logo from '../../assets/Logo.svg';
import Bar from '../../assets/Hamburger-1.png';
import classes from "./nav-header.module.css";

const Header = () => {
    return(
        <div className={classes.mainContainer}>
            <div className={classes.logoContainer}>
                <img src={Logo} className={classes.logo} />
            </div>
            <div className={classes.navMenuContainer}>
                <img src={Bar} />
                <ul>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Specialisations</a></li>
                    <li><a href="#">Works</a></li>
                    <li><a href="#">Our team</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
            </div>
        </div>
    )
};

export default Header;