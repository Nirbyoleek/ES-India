import React from "react";
import classes from "./ourTeam.module.css";
import Header from "../../components/nav-header/nav-header.js";
import CEOimg from "../../assets/CEOimg.svg";
import MDimg from "../../assets/MDimg.svg";
import Footer from "../Footer/Footer";

const ourTeam = () => {
  return (
    <div className={classes.majorcontainer}>
      <Header />
      <center>
        <table className={classes.Members}>
          <tr>
            <td colSpan="2">
              <center>
                <h2>Our Management</h2>
              </center>
            </td>
          </tr>
          <tr>
            <td className={classes.imgAdjustR}>
              <center>
                <img alt="img" src={MDimg} />
              </center>
              <center>
                <p className={classes.name}>
                  Dr. Jay <b>Prakash</b>
                </p>
                <p className={classes.post}>Managing Director</p>
              </center>
            </td>
            <td className={classes.imgAdjustL}>
              <center>
                <img alt="img" src={CEOimg} />
              </center>
              <center>
                <p className={classes.name}>
                  Dr. P. C <b>Sharma</b>
                </p>
                <p className={classes.post}>Cheif Executive Officer</p>
              </center>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <center>
                <h2 style={{ marginBottom: "21px" }}>Senior Experts</h2>
              </center>
            </td>
          </tr>
        </table>
      </center>
      <center>
        <div className={classes.otherMembers}>
          <div>
            <p>
              Lorem <b>Ipsum</b>
            </p>
          </div>
          <div>
            <p>
              Insert <b>Names</b>
            </p>
          </div>
          <div>
            <p>
              Lorem <b>Ipsum</b>
            </p>
          </div>
          <div>
            <p>
              Insert <b>Names</b>
            </p>
          </div>
          <div>
            <p>
              Lorem <b>Ipsum</b>
            </p>
          </div>
          <div>
            <p>
              Insert <b>Names</b>
            </p>
          </div>
          <div>
            <p>
              Lorem <b>Ipsum</b>
            </p>
          </div>
          <div>
            <p>
              Insert <b>Names</b>
            </p>
          </div>
        </div>
      </center>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ourTeam;
