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
              Dr. Y. P. Gupta
            </p>
            <h5 className={classes.post1}>
              BE (Civil), ME (Earthquake), PhD
            </h5>
          </div>
          <div>
            <p>
              Er. V. P. Bansal
            </p>
            <h5 className={classes.post1}>
              BE (Civil), MBA
            </h5>
          </div>
          <div>
            <p>
              Er. S. K. Agarwal
            </p>
            <h5 className={classes.post1}>
            BE (Civil)
            </h5>
          </div>
          <div>
            <p>
              Er. H. P. Gupta
            </p>
            <h5 className={classes.post1}>
              BE (Civil)  
            </h5>
          </div>
          <div>
            <p>
              Dr. R. K. Goel
            </p>
            <h5 className={classes.post1}>
              BE (Civil), ME(Structures), PhD
            </h5>
          </div>
          <div>
            <p>
              Er. Jasvir Singh
            </p>
            <h5 className={classes.post1}>
              BE (Civil), ME(Soil)
            </h5>
          </div>
          <div>
            <p>
            Er. Vikas C Jaiswal
            </p>
            <h5 className={classes.post1}>
              BE (Civil), MBA
            </h5>
          </div>
          <div style={{boxShadow: 'none',}}>
            <p>
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
