import React from "react";
import Header from "../../nav-header/nav-header";
import classes from "./introStyle.module.css";
import "./intro.css";
import Building from "../../../assets/BuildingForIntro.svg";
import man from "../../../assets/Image2Intro.svg";
import line from "../../../assets/line.svg";
import Carousel from "./carousel";

const Intro = () => {
  return (
    <div className={classes.main}>
      <Header />
      <div className={classes.introPart1}>
        <div className={classes.HeadingDesign}>
          <p className={classes.backgroundText}>
            We are
            <br />
            EXPERT
            <br />
            AE SOLUTIONS
          </p>
          <p className={classes.frontText}>
            We are
            <br />
            EXPERT
            <br />
            AE SOLUTIONS
          </p>
          <div className={classes.buttonContainer}>
            <a href="#abt" className="button">
              Know More
            </a>
          </div>
        </div>
        <div className={classes.buildingImageContainer}>
          <img src={Building} />
        </div>
      </div>
      <div className={classes.introPart2}>
        <div className={classes.workIntro}>
          <p>
            The best AE consultancy services! With a track record of satisfied
            clients and on-time work completion, you would definitely want us to
            be your consultant.
          </p>
          <br />
          <p>
            The firm has continued to imbibe the vision of “Safe, Durable and
            Economical Structures” from its ambitious, industrious and tenacious
            partners. At present, the firm functions with multi-discipline and
            experienced experts, well qualified staff and other professionals.
          </p>
        </div>
        <div className={classes.ManImageContainer}>
          <img src={man} />
          <div></div>
        </div>
      </div>
      <div className={classes.introPart3}>
        <div className={classes.carousel}>
          <Carousel />
        </div>
        <div className={classes.introLastText}>
          <p>We Design For You</p>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
