import React from "react";
import Test from "../../../assets/Test.svg";
import classes from "./AboutUs.module.css";
import { Button, Media } from "reactstrap";

const AboutUs = () => {
  return (
    <div className={classes.AboutUs}>
      <center>
        <h2>About Us</h2>
      </center>
      <Media className={classes.Info}>
        We are a young firm of Engineers and Architects with a vast and
        diversified experience in the areas of Designing, Planning and
        Coordinating Civil engineering, Architecture and allied fields. The firm
        has grown into a reputed consultancy firm and offers inter-disciplinary
        services. The firm has continued to imbibe the vision of “Safe, Durable
        and Economical Structures” from its ambitious, industrious and tenacious
        partners. At present, the firm functions with multi-discipline and
        experienced experts, well qualified staff and other professionals.
      </Media>

      <img className={classes.Image} src={Test} alt="" />
    </div>
  );
};
export default AboutUs;
