import React from "react";
import Carousel from "./Carousel";

import classes from "./Work.module.css";

const Work = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.Work}>
        <div className={classes.Carousel}>
          <Carousel />
        </div>
        <h2 className={classes.Text}>Our Work</h2>
        <div className={classes.Carousel}>
          <Carousel />
        </div>
      </div>
    </div>
  );
};
export default Work;
