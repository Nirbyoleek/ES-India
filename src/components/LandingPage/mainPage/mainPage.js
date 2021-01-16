import React from "react";
import Intro from "../intro/intro";
import AboutUs from "../AboutUs/AboutUs";
import classes from "./mainPage.module.css";
import Consultancy from "../Consultancy/Consultancy";
import Spec from "../Specializations/Specializations";
import OurClients from "../OurClients/OurClients";
import Work from "../Work/Work";
import Footer from "../../Footer/Footer";
import { Helmet } from "react-helmet";

const MainPage = () => {
  return (
    <div className={classes.majorContainer}>
      <Helmet>
        <title>ES India | Expert AE Solutions</title>
      </Helmet>
      <div>
        <Intro />
      </div>
      <div>
        <AboutUs />
      </div>
      <div>
        <Work />
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
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
