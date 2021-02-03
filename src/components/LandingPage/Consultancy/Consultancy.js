import React from "react";
import sec1 from '../../../assets/consultancy/img.jpg';
import sec2 from '../../../assets/consultancy/img1.jpg';
import sec3 from '../../../assets/consultancy/img2.jpg';
import sec4 from '../../../assets/consultancy/img3.jpg';
import classes from "./Consultancy.module.css";
import {Fade} from 'react-awesome-reveal';

const Consultancy = () => {
  return (
    <div>
      <div className={classes.Container1}>
        <Fade>
        <div className={classes.headingStyle}>
          <div className={classes.headingLine}></div>
          <p>Areas Of Consultancy</p>
          </div>
          </Fade>
          <div className={classes.sec1}>
            <div className={classes.parent}>
              <Fade direction="left" triggerOnce={true}>
              <img src={sec1} alt="sec1"></img>
              </Fade>
            </div>
            <Fade direction="right">
            <div style={{}}>
              <p className={classes.service2}>Repair, Rehabilitation and Retrofitting</p>
              
              <p className={classes.service2}>Seismic Vulnerability Assessment</p>
              
              <p className={classes.service2}>Conservation of Heritage Structures</p>
              
              <p className={classes.service2}>Sustainable Eco-friendly Design</p>
            </div>
            </Fade>
        </div>
        <div className={classes.sec2}>
            <div>
              <p className={classes.service1}>Soil Testing and Foundation Design</p>
              <p className={classes.service1}>Energy Efficient Green Structures</p>
              <p className={classes.service1}>Structural Design & Detailing</p>
              <p className={classes.service1}>Structural Stability Certifications</p>
            </div>
            <div className={classes.parent}>
              <img src={sec2} alt="sec1"></img>
            </div>
        </div>
        <div className={classes.sec1}>
            <div className={classes.parent}>
              <img src={sec3} alt="sec1"></img>
            </div>
            <div style={{marginRight: "10%"}}>
              <p className={classes.service2}>Condition Assessment, Distress Diagnosis & Non-destructive Testing</p>
              <p className={classes.service2}>Project Management and Specialized Repair</p>
              <p className={classes.service2}>Third Party Quality Assurance and Auditing</p>
              <p className={classes.service2}>Tapping Solar Energy</p>
            </div>
        </div>
        <div className={classes.sec2}>
            <div>
              <p className={classes.service1}>Training and Knowledge Dissemination</p>
              <p className={classes.service1}>Health Monitoring</p>
              <p className={classes.service1}>Designing, Planning and Coordinating Architectural Services</p>
              <p className={classes.service1}>Performance Monitoring through Instrumentation</p>
            </div>
            <div className={classes.parent}>
              <img src={sec4} alt="sec1"></img>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Consultancy;
