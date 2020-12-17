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
            </div>
        </div>
    )
};

export default Header;