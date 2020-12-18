import React from "react";
import build1 from "../../../assets/build1.svg";
import build2 from "../../../assets/build2.svg";
import build3 from "../../../assets/build3.svg";
import classes from "./Specializations.module.css";

const Spec = () => {
  return (
    <div>
      <div className={classes.Container}>
        <h2>Structures</h2>
        <div className={classes.Section}>
          <div className={classes.leftSec1}>
            <img src={build1} alt="" />
          </div>
          <div className={classes.rightSec1}>
            <h5>Structure</h5>
            <p>Name</p>
          </div>
        </div>
        <div className={classes.Section}>
          <div className={classes.leftSec2}>
            <h5>Structure</h5>
            <p>Name</p>
          </div>
          <div className={classes.rightSec2}>
            <img src={build2} alt="" />
          </div>
        </div>
        <div className={classes.Section}>
          <div className={classes.leftSec1}>
            <img src={build3} alt="" />
          </div>
          <div className={classes.rightSec1}>
            <h5>Structure</h5>
            <p>Name</p>
          </div>
        </div>
        <div className={classes.Section}>
          <div className={classes.leftSec2}>
            <h5>Structure</h5>
            <p>Name</p>
          </div>
          <div className={classes.rightSec2}>
            <img src={build1} alt="" />
          </div>
        </div>{" "}
        <div className={classes.Section}>
          <div className={classes.leftSec1}>
            <img src={build3} alt="" />
          </div>
          <div className={classes.rightSec1}>
            <h5>Structure</h5>
            <p>Name</p>
          </div>
        </div>
        <div className={classes.Section}>
          <div className={classes.leftSec2}>
            <h5>Structure</h5>
            <p>Name</p>
          </div>
          <div className={classes.rightSec2}>
            <img src={build1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Spec;
