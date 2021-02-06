import React from "react";
import img1 from "../../../assets/Works/img1.jpg";
import img2 from "../../../assets/Works/img2.jpg";
import img3 from "../../../assets/Works/img3.jpg";
import img4 from "../../../assets/Works/img4.jpg";
import img5 from "../../../assets/Works/img5.jpg";
import img6 from "../../../assets/Works/img6.jpg";

import { Fade } from "react-awesome-reveal";

import classes from "./Work.module.css";

const Work = () => {
  return (
    <div className={classes.Container} id="works">
      <div className={classes.Work}>
        <h5>Works</h5>
        <div className={classes.work_box}>
          <div>
            <Fade direction={"left"} triggerOnce={true}>
              <img src={img1} alt=""></img>
            </Fade>
          </div>
          <Fade direction={"right"} triggerOnce={true}>
            <div>
              <h5 style={{ marginLeft: "25px", marginRight: "none" }}>
                Assessment and Retrofitting
              </h5>
              <div id={classes.line}></div>
            </div>
          </Fade>
        </div>
        <div className={classes.work_box}>
          <div>
            <Fade direction={"left"} triggerOnce={true}>
              <img src={img2} alt=""></img>
            </Fade>
          </div>
          <Fade direction={"right"} triggerOnce={true}>
            <div>
              <h5 style={{ marginLeft: "25px", marginRight: "none" }}>
                Rehabilitation
              </h5>
              <div id={classes.line}></div>
            </div>
          </Fade>
        </div>
        <div className={classes.work_box}>
          <div>
            <Fade direction={"left"} triggerOnce={true}>
              <img src={img3} alt=""></img>
            </Fade>
          </div>
          <Fade direction={"right"} triggerOnce={true}>
            <div>
              <h5 style={{ marginLeft: "25px", marginRight: "none" }}>
                Strengthening
              </h5>
              <div id={classes.line}></div>
            </div>
          </Fade>
        </div>
        <div className={classes.work_box}>
          <div>
            <Fade direction={"left"} triggerOnce={true}>
              <img src={img4} alt=""></img>
            </Fade>
          </div>
          <Fade direction={"right"} triggerOnce={true}>
            <div>
              <h5 style={{ marginLeft: "25px", marginRight: "none" }}>
                Repairing and Rehabilitation
              </h5>
              <div id={classes.line}></div>
            </div>
          </Fade>
        </div>
        <div className={classes.work_box}>
          <div>
            <Fade direction={"left"} triggerOnce={true}>
              <img src={img5} alt=""></img>
            </Fade>
          </div>
          <Fade direction={"right"} triggerOnce={true}>
            <div>
              <h5 style={{ marginLeft: "25px", marginRight: "none" }}>
                Heritage
                <br />
                Structures
              </h5>
              <div id={classes.line}></div>
            </div>
          </Fade>
        </div>
        <div className={classes.work_box}>
          <div>
            <Fade direction={"left"} triggerOnce={true}>
              <img src={img6} alt=""></img>
            </Fade>
          </div>
          <Fade direction={"right"} triggerOnce={true}>
            <div>
              <h5 style={{ marginLeft: "25px", marginRight: "none" }}>
                Miscellaneous
              </h5>
              <div id={classes.line}></div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};
export default Work;
