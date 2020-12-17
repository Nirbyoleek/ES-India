import React from 'react';
import Intro from '../intro/intro';
import AboutUs from '../AboutUs/AboutUs';
import classes from "./mainPage.module.css";

const MainPage = () => {
    return(
    <div className={classes.majorContainer} >
        <div><Intro /></div>
        <div><AboutUs/></div>
        
        
        
    </div>
    )
}

export default MainPage;