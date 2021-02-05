import React from "react";
import classes from "./ContactFooter.module.css";
import Logo from "../../assets/Logo.svg";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/all";
import { BiCopyright } from "react-icons/bi";
const Footer = () => {
  var d = new Date();
  var n = d.getFullYear();
  return (
    <div>
      <div className={classes.Footer}>
        <div className={classes.Contact2}>
          <div className={classes.AdContainer}>
            <MdEmail className={classes.Icons} />
            <div>solutionbyexpert@gmail.com</div>
          </div>
          <div className={classes.AdContainer}>
            <IoCall className={classes.Icons} />
            <div>+91-9810285722</div>
          </div>
        </div>
        <div className={classes.Contact1}>
          <div className={classes.Content}>
            <img className={classes.Logo} src={Logo} alt="Logo" />
          </div>
          <div className={classes.Content}>
            <div className={classes.Copyright1}>
              Copyright
              <BiCopyright className={classes.Copy} /> {n}
            </div>
            <div className={classes.Copyright2}> Expert AE Solutions</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
