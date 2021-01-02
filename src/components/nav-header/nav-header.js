import React from "react";
import Logo from "../../assets/Logo.svg";
import Bar from "../../assets/Hamburger-1.png";
import {Link} from "react-router-dom";
import classes from "./nav-header.module.css";

const Header = () => {
    return(
        <div className={classes.mainContainer}>
            <div className={classes.logoContainer}>
                <img alt="logo" src={Logo} className={classes.logo} />
            </div>
            <div className={classes.navMenuContainer}>
                <img alt="bar"  src={Bar} />
                <ul>
                    <li><Link to="/">About us</Link></li>
                    <li><Link href="#specs">Specialisations</Link></li>
                    <li><Link href="#">Works</Link></li>
                    <li><Link to="/Ourteam">Our team</Link></li>
                    <li><Link to="/ContactUs">Contact us</Link></li>
                </ul>
            </div>
        </div>
    )
};

export default Header;
