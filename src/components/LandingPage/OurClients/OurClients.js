import React from "react";
import classes from "./OurClients.module.css";
import ITC from "../../../assets/Clients/ITC.jpg";
import BHEL from "../../../assets/Clients/BHEL.svg";
import GPI from "../../../assets/Clients/GPI.svg";
import BANK from "../../../assets/Clients/BANK.svg";
import MNNIT from "../../../assets/Clients/MNNIT.svg";
import QDA from "../../../assets/Clients/QDA.svg";
import USA from "../../../assets/Clients/USA.svg";
import Client1 from "../../../assets/Clients/client.svg";
import Client2 from "../../../assets/Clients/CLIENT 2.svg";
import Iffco from "../../../assets/Clients/IFFCO.jpg";
import Indus from "../../../assets/Clients/Indus.png";
import Iti from "../../../assets/Clients/ITI.png";
import Pwd from "../../../assets/Clients/PWD.png";
import Ryan from "../../../assets/Clients/RYAN.jpg";
import Survey from "../../../assets/Clients/Survey.jpg";
import ASHOK from "../../../assets/Clients/ASHOK.png";
import BIET from "../../../assets/Clients/BIET.png";
import BM from "../../../assets/Clients/BM.png";
import ELEC from "../../../assets/Clients/ELEC.jpg";
import GB from "../../../assets/Clients/GB.jpg";
import Khurja from "../../../assets/Clients/Khurja.png";
import KK from "../../../assets/Clients/KK.png";
import MOTILAL from "../../../assets/Clients/MOTILAL.png";
import PEDVAK from "../../../assets/Clients/PEDVAK.jpg";
import UPJAL from "../../../assets/Clients/UPJAL.jpg";
import UPRAJ from "../../../assets/Clients/UPRAJ.jpg";

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
          <div className={classes.Content}>
            <img className={classes.Image} src={ASHOK} alt="" />
          </div>
        </div>{" "}
        <div className={classes.Section}>
          <div className={classes.Content}>
            <img className={classes.Image} src={Iti} alt="" />
          </div>
          <div className={classes.Content}>
            <img className={classes.Image} src={BIET} alt="" />
          </div>{" "}
          <div className={classes.Content}>
            <img className={classes.Image} src={Iffco} alt="" />
          </div>{" "}
          <div className={classes.Content}>
            <img className={classes.Image} src={Ryan} alt="" />
          </div>
        </div>{" "}
        <div className={classes.Section}>
          <div className={classes.Content}>
            <img className={classes.Image} src={Pwd} alt="" />
          </div>{" "}
          <div className={classes.Content}>
            <img className={classes.Image} src={BM} alt="" />
          </div>
          <div className={classes.Content}>
            <img className={classes.Image} src={Indus} alt="" />
          </div>{" "}
          <div className={classes.Content}>
            <img className={classes.Image} src={Survey} alt="" />
          </div>
        </div>{" "}
        <div className={classes.Section}>
          <div className={classes.Content}>
            <img className={classes.Image} src={USA} alt="" />
          </div>{" "}
          <div className={classes.Content}>
            <img className={classes.Image} src={MOTILAL} alt="" />
          </div>
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
            <img className={classes.Image} src={ELEC} alt="" />
          </div>
          <div className={classes.Content}>
            <img className={classes.Image} src={BANK} alt="" />
          </div>{" "}
          <div className={classes.Content}>
            <img className={classes.Image} src={MNNIT} alt="" />
          </div>{" "}
        </div>
        <div className={classes.Section}>
          <div className={classes.Content}>
            <img className={classes.Image} src={PEDVAK} alt="" />
          </div>{" "}
          <div className={classes.Content}>
            <img className={classes.Image} src={UPRAJ} alt="" />
          </div>
          <div className={classes.Content}>
            <img className={classes.Image} src={UPJAL} alt="" />
          </div>{" "}
          <div className={classes.Content}>
            <img className={classes.Image} src={GB} alt="" />
          </div>{" "}
        </div>
      </div>
    </div>
  );
};
export default OurClients;
