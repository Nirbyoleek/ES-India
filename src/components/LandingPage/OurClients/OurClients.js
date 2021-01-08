import React from "react";
import classes from "./OurClients.module.css";
import ITC from "../../../assets/Clients/ITC.svg";
import BHEL from "../../../assets/Clients/BHEL.svg";
import GPI from "../../../assets/Clients/GPI.svg";
import BANK from "../../../assets/Clients/BANK.svg";
import MNNIT from "../../../assets/Clients/MNNIT.svg";
import QDA from "../../../assets/Clients/QDA.svg";
import USA from "../../../assets/Clients/USA.svg";
import Client1 from "../../../assets/Clients/client.svg";
import Client2 from "../../../assets/Clients/CLIENT 2.svg";

const OurClients = () => {
  return (
    <div>
      <div className={classes.Container}>
        <div className={classes.Clients} id="clients">
          <h2>Our Clients</h2>
        </div>
        <div className={classes.Section}>
          <div className={classes.Content}>
            <img className={classes.Image} src={ITC} alt="" />
          </div>{" "}
          <div className={classes.Content}>
            <img className={classes.Image} src={BHEL} alt="" />
          </div>{" "}
          <div className={classes.Content}>
            <img className={classes.Image} src={GPI} alt="" />
          </div>
        </div>{" "}
        <div className={classes.Section}>
          <div className={classes.Content}>
            <img className={classes.Image} src={USA} alt="" />
          </div>{" "}
          <div className={classes.Content}>
            <img className={classes.Image} src={QDA} alt="" />
          </div>{" "}
          <div className={classes.Content}>
            <img className={classes.Image} src={Client1} alt="" />
          </div>
        </div>{" "}
        <div className={classes.Section}>
          <div className={classes.Content}>
            <img className={classes.Image} src={Client2} alt="" />
          </div>{" "}
          <div className={classes.Content}>
            <img className={classes.Image} src={BANK} alt="" />
          </div>{" "}
          <div className={classes.Content}>
            <img className={classes.Image} src={MNNIT} alt="" />
          </div>{" "}
        </div>
      </div>
    </div>
  );
};
export default OurClients;
