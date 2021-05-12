import React from "react";
import classes from "./ourTeam.module.css";
import Header from "../../components/nav-header/nav our team";
import CEOimg from "../../assets/CEOimg.svg";
import MDimg from "../../assets/MDimg.svg";
import Footer from "../Footer/Footer";
import background from "../../assets/nav menu/background.svg";
import { Helmet } from "react-helmet";
import { FiArrowUp } from "react-icons/fi";
import { BsFillXCircleFill } from "react-icons/bs";

const ourTeam = () => {
  return (
    <div className={classes.majorcontainer} id="top" style={{backgroundImage: `url(${background})` ,}}>
      <Helmet>
        <title>Our Team | Expert AE Solutions</title>
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
        <table className={classes.Members}>
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
              Er. P. C Sharma
            </p>
            <h5 className={classes.post1}>
              Former Head, Material Sciences,<br/> CSIR-Structural Engineering Research Centre, Ghaziabad
            </h5>
            <h5 className={classes.post2}>
              Over 50 years in repair, rehabilitation and strengthening of structures, Use of Ferrocement, Rainwater harvesting, etc.
            </h5>
          </div>
          <div>
            <p>
              Dr. Jay Prakash
            </p>
            <h5 className={classes.post1}>
              BE (Civil), ME (Structures), Ph.D
            </h5>
            <h5 className={classes.post2}>
              Over 50 years in Earthquake Engineering, Earthquake Disaster Mitigation and Finite Element Application to Nonlinear Soil & Structural Dynamic Problems
            </h5>
          </div>
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
