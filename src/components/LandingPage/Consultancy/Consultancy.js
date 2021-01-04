import React from "react";
import build1 from "../../../assets/build1.svg";
import build2 from "../../../assets/build2.svg";
import classes from "./Consultancy.module.css";

const Consultancy = () => {
  return (
    <div>
      <div className={classes.Container}>
        <div className={classes.headingStyle}>
          <div className={classes.headingLine}></div>
          <p>Areas Of Consultancy</p>
        </div>
        <div className={classes.Section}>
          <div className={classes.Content}>
            <img src={build1} alt="" />
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div className={classes.Content}>
            <img src={build2} alt="" />
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div className={classes.Content}>
            <img src={build1} alt="" />
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div className={classes.Content}>
            <img src={build2} alt="" />
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div className={classes.Content}>
            <img src={build1} alt="" />
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div className={classes.Content}>
            <img src={build2} alt="" />
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div className={classes.Content}>
            <img src={build1} alt="" />
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div className={classes.Content}>
            <img src={build2} alt="" />
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div className={classes.Content}>
            <img src={build1} alt="" />
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div className={classes.Content}>
            <img src={build2} alt="" />
            <p>Lorem ipsum dolor sit.</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default Consultancy;
