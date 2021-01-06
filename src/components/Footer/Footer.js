import React from "react";
import classes from "./Footer.module.css";
import Logo from "../../assets/Logo.svg";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/all";
import { MdLocationOn } from "react-icons/md";
import { BiCopyright } from "react-icons/bi";
const Footer = () => {
  return (
    <div>
      <div className={classes.Footer}>
        <div className={classes.Contact2}>
          <p>
            <MdEmail className={classes.Icons} /> solutionbyexpert@gmail.com
          </p>
          <p>
            <IoCall className={classes.Icons} />
            +91-9810285722
          </p>
          <p>
            <MdLocationOn className={classes.Icons} />
            Noida Office: BG-06, Parsvnath Prestige Sector-93A, Noida, UP
            PIN-201304 India.
          </p>
          <p>
            <MdLocationOn className={classes.Icons} />
            Ghaziabad Office: II-F-163 Nehru Nagar Ghaziabad, UP PIN-201001
            India
          </p>
        </div>
        <div className={classes.Contact1}>
          <div className={classes.Content}>
            <img className={classes.Logo} src={Logo} alt="Logo" />
          </div>
          <div className={classes.Content}>
            <p>
              Copyright
              <BiCopyright className={classes.Copyright} />
              2020 Expert AE Solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
