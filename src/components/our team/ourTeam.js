import React from "react";
import classes from "./ourTeam.module.css";
import Header from "../../components/nav-header/nav our team";
import CEOimg from "../../assets/CEOimg.svg";
import MDimg from "../../assets/MDimg.svg";
import Footer from "../Footer/Footer";
import background from "../../assets/nav menu/background.svg";

const ourTeam = () => {
  return (
    <div className={classes.majorcontainer} style={{backgroundImage: `url(${background})` ,}}>
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
            <h5 className={classes.post2}>
            Over 50 years in design, material characterisation, quality control and software development.
            </h5>
          </div>
          <div>
            <p>
              Er. V. P. Bansal
            </p>
            <h5 className={classes.post1}>
              BE (Civil), MBA
            </h5>
            <h5 className={classes.post2}>
            Over 45 years in construction, maintenance and repairs of highways, supervision and quality assurance work.
            </h5>
          </div>
          <div>
            <p>
              Er. S. K. Agarwal
            </p>
            <h5 className={classes.post1}>
            BE (Civil)
            </h5>
            <h5 className={classes.post2}>
            Over 45 years in construction, maintenance and repairs of building and highways, contract management.
            </h5>
          </div>
          <div>
            <p>
              Er. H. P. Gupta
            </p>
            <h5 className={classes.post1}>
              BE (Civil)  
            </h5>
            <h5 className={classes.post2}>
            Over 40 years in design of roads, quantity surveying, supervision and quality control of the highways.
            </h5>
          </div>
          <div>
            <p>
              Dr. R. K. Goel
            </p>
            <h5 className={classes.post1}>
              BE (Civil), ME(Structures), PhD
            </h5>
            <h5 className={classes.post2}>
            Over 30 years in design of structures, condition assessment of distressed structures, strengthening of structures and green structures.
            </h5>
          </div>
          <div>
            <p>
              Er. Jasvir Singh
            </p>
            <h5 className={classes.post1}>
              BE (Civil), ME(Soil)
            </h5>
            <h5 className={classes.post2}>
            Over 25 years in soil investigations, surveying, piling and related works.
            </h5>
          </div>
          <div>
            <p>
            Er. Vikas C Jaiswal
            </p>
            <h5 className={classes.post1}>
              BE (Civil), MBA
            </h5>
            <h5 className={classes.post2}>
            Over 28 years in strengthening of structures and green engineering in air, water and energy.
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
