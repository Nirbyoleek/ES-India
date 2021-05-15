import React from "react";
import Heritage from "../../../assets/Types of Structures/heritage.jpg";
import Airport from "../../../assets/Types of Structures/airport.jpg";
import Jetty from "../../../assets/Types of Structures/jetty.jpg";
import Bridge from "../../../assets/Types of Structures/bridge.jpg";
import Building from "../../../assets/Types of Structures/building.jpg";
import Urban from "../../../assets/Types of Structures/buildings.jpg";
import Highway from "../../../assets/Types of Structures/highway.jpg";
import Dam from "../../../assets/Types of Structures/dam.jpg";
import classes from "./Specializations.module.css";

const Spec = () => {
  return (
    <div>
      <div className={classes.Container}>
        <div className={classes.headingStyle}>
          <p>Types Of Structures</p>
          <div className={classes.headingLine}></div>
        </div>
        <p id={classes.Head}>
          The firm offers services to all types of structures including the
          following:
        </p>
        <div className={classes.Section}>
          <div className={classes.leftSec1}>
            <img src={Building} alt="" />
          </div>
          <div className={classes.rightSec1}>
            <h5>Buildings</h5>
            <p></p>
          </div>
        </div>
        <div className={classes.Section}>
          <div className={classes.leftSec2}>
            <h5>Highways</h5>
            <p></p>
          </div>
          <div className={classes.rightSec2}>
            <img src={Highway} alt="" />
          </div>
        </div>
        <div className={classes.Section}>
          <div className={classes.leftSec1}>
            <img src={Urban} alt="" />
          </div>
          <div className={classes.rightSec1}>
            <h5>Urban Infrastructure</h5>
            <p></p>
          </div>
        </div>
        <div className={classes.Section}>
          <div className={classes.leftSec2}>
            <h5>Water Structures</h5>
            <p></p>
          </div>
          <div className={classes.rightSec2}>
            <img src={Dam} alt="water" />
          </div>
        </div>{" "}
        <div className={classes.Section}>
          <div className={classes.leftSec1}>
            <img src={Bridge} alt="water" />
          </div>
          <div className={classes.rightSec1}>
            <h5>Bridges</h5>
            <p></p>
          </div>
        </div>
        <div className={classes.Section}>
          <div className={classes.leftSec2}>
            <h5>Airports</h5>
            <p></p>
          </div>
          <div className={classes.rightSec2}>
            <img src={Airport} alt="" />
          </div>
        </div>
        <div className={classes.Section}>
          <div className={classes.leftSec1}>
            <img src={Jetty} alt="" />
          </div>
          <div className={classes.rightSec1}>
            <h5>Jetties</h5>
            <p></p>
          </div>
        </div>
        <div className={classes.Section}>
          <div className={classes.leftSec2}>
            <h5>Heritage Structures</h5>
            <p></p>
          </div>
          <div className={classes.rightSec2}>
            <img src={Heritage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Spec;
