import React from "react";
import Intro from "../intro/intro";
import AboutUs from "../AboutUs/AboutUs";
import classes from "./mainPage.module.css";
import Consultancy from "../Consultancy/Consultancy";
import Spec from "../Specializations/Specializations";
import OurClients from "../OurClients/OurClients";

const MainPage = () => {
  return (
    <div className={classes.majorContainer}>
      <div>
        <Intro />
      </div>
      <div>
        <AboutUs />
      </div>
      <div>
        <Spec />
      </div>
      <div>
        <Consultancy />
      </div>
      <div>
        <OurClients />
      </div>
    </div>
  );
};

export default MainPage;
