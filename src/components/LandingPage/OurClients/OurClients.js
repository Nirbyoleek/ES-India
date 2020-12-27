import React from "react";
import classes from "./OurClients.module.css";
import client1 from "../../../assets/client1.svg";
import client2 from "../../../assets/client2.svg";
import client3 from "../../../assets/client3.svg";

const OurClients = () => {
  return (
    <div>
      <div className={classes.Container}>
        <h2>Our Clients</h2>
        <div className={classes.Section}>
          <div className={classes.Content}>
            <img src={client1} alt="" />
          </div>{" "}
          <div className={classes.Content}>
            <img src={client2} alt="" />
          </div>{" "}
          <div className={classes.Content}>
            <img src={client3} alt="" />
          </div>
        </div>{" "}
        <div className={classes.Section}>
          <div className={classes.Content}>
            <img src={client1} alt="" />
          </div>{" "}
          <div className={classes.Content}>
            <img src={client2} alt="" />
          </div>{" "}
          <div className={classes.Content}>
            <img src={client3} alt="" />
          </div>
        </div>{" "}
        <div className={classes.Section}>
          <div className={classes.Content}>
            <img src={client1} alt="" />
          </div>{" "}
          <div className={classes.Content}>
            <img src={client2} alt="" />
          </div>{" "}
          <div className={classes.Content}>
            <img src={client3} alt="" />
          </div>
        </div>{" "}
      </div>
    </div>
  );
};
export default OurClients;
