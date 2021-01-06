import React from "react";
import classes from "./contactUs.module.css";
import Header from "../nav-header/nav contact";
import Footer from "../Footer/Footer";
import background from "../../assets/backgroundContactUs.svg";

const contactUs = () => {
  return (
    <div className={classes.majorContainer} style={{backgroundImage: `url(${background})` ,}}>
      <Header />
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
