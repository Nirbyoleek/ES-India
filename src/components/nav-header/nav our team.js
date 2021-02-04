import React,{useState} from "react";
import Logo from "../../assets/Logo.svg";
//import Bar from "../../assets/Hamburger-1.png";
import {Link} from "react-router-dom";
import classes from "./nav-header.module.css";
import {Fade} from 'react-awesome-reveal';
import background from '../../assets/nav menu/background.svg';


const Header = () => {
    const [isActive, setActive] = useState(false);


    const toggleClass = () => {
    setActive(!isActive);
}
const [showMenu, setShowMenu] = useState(false);

let menu;


if(showMenu){
    menu = <div>
        <div className={classes.menu_div}>
        <Fade direction="right" style={{zIndex: "101"}} duration={1000}>
          <div style={{backgroundImage: `url(${background})`, height: '100vh'}}>
                <ul>
                    <li><Link style={{fontFamily: "Playfair Display",color: "#444444"}} to="/">Home</Link></li>
                    <li><Link style={{color: "#444444",fontFamily: "Playfair Display"}} to="/ourteam" onClick={() => setShowMenu(!showMenu)}>Our Team</Link></li>
                    <li><Link style={{color: "#444444",fontFamily: "Playfair Display"}} to="/contactus">Contact Us</Link></li>
                </ul>
                <p className={classes.subtext}>Copyright © 2020 Expert AE Solutions</p>
            </div>
            </Fade>
    </div>
    </div>
}

const [header, setHeader] = useState(false);


  window.addEventListener('scroll',
  (event)=>{
    console.log()
    if(window.scrollY >= 50){
      setHeader(true);
    }else{
      setHeader(false);
    }
  })




    return(
        <div className={header ? classes.mainContainerscroll : classes.mainContainer}>
            <div className={classes.logoContainer}>
                <img alt="logo" src={Logo} className={classes.logo} />
            </div>
            <div className={classes.navMenuContainer} onClick={() => setShowMenu(!showMenu)}>
                <div className={isActive ? classes.menu_btn+ ' ' + classes.open: classes.menu_btn} onClick={toggleClass}>
                    <div className={classes.menu_btn_ham}>
                    </div>
                </div>
                {/*<img alt="bar"  src={Bar} />*/}
                <ul style={{marginTop: "7%"}}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Ourteam">Our team</Link></li>
                    <li><Link to="/ContactUs">Contact us</Link></li>
                </ul>
            </div>
            {menu}
        </div>
    )
};

export default Header;
