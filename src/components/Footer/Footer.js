import React from "react";
import classes from "./Footer.module.css";
import Logo from "../../assets/Logo.svg";
const Footer = () => {
  return (
    <div>
      <div className={classes.Footer}>
        <img className={classes.Logo} src={Logo} alt="Logo" />
        <div className={classes.Content}>
          <span>Copyright</span>
          <span>
            <i class="far fa-copyright"></i>
          </span>
          <span>2020 ES India Inc.</span>
          <p className={classes.Contact}>
            <i class="fas fa-envelope-square"></i>:
            <span>solutionbyexpert@gmail.com</span>
          </p>
          <p className={classes.Contact}>
            <i class="fas fa-phone-square-alt"></i>
            <span>:+91-9810285722</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
