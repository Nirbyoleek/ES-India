import React, { useState, useEffect } from "react";
import classes from "./contactUs.module.css";
import Header from "../nav-header/nav contact";
import Footer from "../Contact Us/ContactFooter";
import background from "../../assets/backgroundContactUs.svg";
import { Helmet } from "react-helmet";
import { FiArrowUp } from "react-icons/fi";
import { MdLocationOn } from "react-icons/all";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


 const schema = yup.object().shape({
    Name: yup.string().required(),
    contact_num: yup.string().required().length(10),
    Email: yup.string().required("please enter your email").email(),
    Inquiry: yup.string().required(),
  });

  const ContactUs = () => {
    const { register, handleSubmit, errors } = useForm({
      resolver: yupResolver(schema),
    });

    const onSubmit = (data) => console.log(data);
    console.log(errors);

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
            <form
              onSubmit={handleSubmit(onSubmit)}
              name="contact"
              method="POST"
              data-netlify="true"
              netlify
            >
              <input type="hidden" name="form-name" value="contact" />

              <table className={classes.ContactForm}>
                <tr>
                  <td>
                    <center>
                      <div>
                        <p>Name</p>

                        <input
                          type="text"
                          name="Name"
                          className={classes.input}
                          ref={register}
                        />
                        <p id={classes.val_msg}>{errors["Name"]?.message}</p>
                      </div>
                    </center>
                  </td>
                </tr>
                <tr>
                  <td>
                    <center>
                      <div>
                        <p>Contact #</p>

                        <input
                          type="number"
                          name="contact_num"
                          className={classes.input}
                          ref={register}
                        />
                        <p id={classes.val_msg}>
                          {errors["contact_num"]?.message}
                        </p>
                      </div>
                    </center>
                  </td>
                </tr>
                <tr>
                  <td>
                    <center>
                      <div>
                        <p>E-mail</p>

                        <input
                          type="text"
                          name="Email"
                          className={classes.input}
                          ref={register}
                        />
                        <p id={classes.val_msg}>{errors["Email"]?.message}</p>
                      </div>
                    </center>
                  </td>
                </tr>
                <tr>
                  <td>
                    <center>
                      <div>
                        <p>Inquiry</p>

                        <input
                          type="text"
                          name="Inquiry"
                          className={classes.input}
                          ref={register}
                        />
                        <p id={classes.val_msg}>{errors["Inquiry"]?.message}</p>
                      </div>
                    </center>
                  </td>
                </tr>
                <tr>
                  <td>
                    <center>
                      <div>
                        <button type="submit" className={classes.button}>
                          Submit
                        </button>
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
export default ContactUs;
