import React from "react";
import classes from "./contactUs.module.css";
import Header from "../nav-header/nav contact";
import Footer from "../Contact Us/ContactFooter";
import background from "../../assets/backgroundContactUs.svg";
import { Helmet } from "react-helmet";
import { FiArrowUp } from "react-icons/fi";
import { MdLocationOn } from "react-icons/all";

const contactUs = () => {
  return (
    <div
      id="top"
      className={classes.majorContainer}
      style={{ backgroundImage: `url(${background})` }}
    >
      <Helmet>
        <title>Contact Us | Expert AE Solutions</title>
      </Helmet>
      <Header />
      <div className={classes.TopButton}>
        <a href="#top" style={{ textDecoration: "none", color: "#747474" }}>
          <FiArrowUp style={{ fontSize: "40px" }}></FiArrowUp>
        </a>
      </div>
      <center className={classes.Container}>
        <div class={classes.formContainer}>
          <h2>Contact Us</h2>
          <hr color="black" className={classes.borderBelow} />
          <form name="contact" method="POST" data-netlify="true">
            <table className={classes.ContactForm}>
              <tr>
                <td>
                  <center>
                    <div>
                      <p>Name</p>
                      <input type="text" name="name" className={classes.input} />
                    </div>
                  </center>
                </td>
              </tr>
              <tr>
                <td>
                  <center>
                    <div>
                      <p>Contact #</p>
                      <input type="text" name="contact #" className={classes.input} />
                    </div>
                  </center>
                </td>
              </tr>
              <tr>
                <td>
                  <center>
                    <div>
                      <p>E-mail</p>
                      <input type="text" name="E-mail" className={classes.input} />
                    </div>
                  </center>
                </td>
              </tr>
              <tr>
                <td>
                  <center>
                    <div>
                      <p>Inquiry</p>
                      <input type="text" name="Inquiry" className={classes.input} />
                    </div>
                  </center>
                </td>
              </tr>
              <tr>
                <td>
                  <center>
                    <div>
                      <input type="submit" className={classes.button} />
                    </div>
                  </center>
                </td>
              </tr>
            </table>
          </form>
        </div>
        <div className={classes.AdContainer}>
          <h2>Our Address</h2>
          <hr color="black" className={classes.borderBelow} />

          <div className={classes.Address}>
            <div className={classes.Icons}>
              <MdLocationOn />
            </div>
            <div>
              Noida Office: BG-06, Parsvnath Prestige Sector-93A, Noida, UP.
              PIN-201304 India.
            </div>
          </div>
          <div className={classes.Address}>
            <div className={classes.Icons}>
              <MdLocationOn />
            </div>
            <div>
              Ghaziabad Office: II-F-163 Nehru Nagar Ghaziabad, UP. PIN-201001
              India
            </div>
          </div>
        </div>
      </center>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default contactUs;
