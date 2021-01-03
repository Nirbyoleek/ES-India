import React from "react";
import build1 from "../../../assets/build1.svg";
import build2 from "../../../assets/build2.svg";
import build3 from "../../../assets/build3.svg";
import classes from "./Specializations.module.css";

var names_right = [
  "Highways",
  "Water Retaining Structures",
  "Airports",
  "Heritage Structures",
];
var names_left = ["Buildings", "Urban Infrastructure", "Bridges", "Jetties"];

const Spec = () => {
  return (
    <div>
      <div className={classes.Container}>
        <div className={classes.Specialization} id="specs">
          <h2>Our Specializations</h2>
        </div>
        <div className={classes.headingStyle}>
          <p>Types Of Structures</p>
          <div className={classes.headingLine}></div>
        </div>
        <div className={classes.Section}>
          <div className={classes.leftSec1}>
            <img src={build1} alt="" />
          </div>
          <div className={classes.rightSec1}>
            <h5>Buildings</h5>
            <p>Name</p>
          </div>
        </div>
        <div className={classes.Section}>
          <div className={classes.leftSec2}>
            <h5>Highways</h5>
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
            <h5>Urban Infrastructure</h5>
            <p>Name</p>
          </div>
        </div>
        <div className={classes.Section}>
          <div className={classes.leftSec2}>
            <h5>Water Structures</h5>
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
            <h5>Bridges</h5>
            <p>Name</p>
          </div>
        </div>
        <div className={classes.Section}>
          <div className={classes.leftSec2}>
            <h5>Airports</h5>
            <p>Name</p>
          </div>
          <div className={classes.rightSec2}>
            <img src={build1} alt="" />
          </div>
        </div>
        <div className={classes.Section}>
          <div className={classes.leftSec1}>
            <img src={build3} alt="" />
          </div>
          <div className={classes.rightSec1}>
            <h5>Jetties</h5>
            <p>Name</p>
          </div>
        </div>
        <div className={classes.Section}>
          <div className={classes.leftSec2}>
            <h5>Heritage Structures</h5>
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
