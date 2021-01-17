import React from "react";
import classes from "./contactUs.module.css";
import Header from "../nav-header/nav contact";
import Footer from "../Footer/Footer";
import background from "../../assets/backgroundContactUs.svg";
import { Helmet } from "react-helmet";
import { FiArrowUp } from "react-icons/fi";

const contactUs = () => {
  return (
    <div id="top" className={classes.majorContainer} style={{backgroundImage: `url(${background})` ,}}>
      <Helmet>
        <title>Contact Us | Expert AE Solutions</title>
      </Helmet>
      <Header />
      <div className={classes.TopButton}>
        <a
          href="#top"
          style={{ textDecoration: "none", color: "#747474" }}
        >
          <FiArrowUp style={{ fontSize: "40px" }}></FiArrowUp>
        </a>
      </div>
      <center>
        <div class={classes.formContainer}>
          <h2>Contact Us</h2>
          <hr color="black" className={classes.borderBelow} />
          <form>
            <table className={classes.ContactForm}>
              <tr>
                <td>
                  <center>
                    <div>
                      <p>Name</p>
                      <input type="text" className={classes.input} />
                    </div>
                  </center>
                </td>
              </tr>
              <tr>
                <td>
                  <center>
                    <div>
                      <p>Contact #</p>
                      <input type="text" className={classes.input} />
                    </div>
                  </center>
                </td>
              </tr>
              <tr>
                <td>
                  <center>
                    <div>
                      <p>E-mail</p>
                      <input type="text" className={classes.input} />
                    </div>
                  </center>
                </td>
              </tr>
              <tr>
                <td>
                  <center>
                    <div>
                      <p>Inquiry</p>
                      <input type="text" className={classes.input} />
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
      </center>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default contactUs;
