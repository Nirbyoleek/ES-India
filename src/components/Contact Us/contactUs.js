import React from "react";
import classes from "./contactUs.module.css";
import Header from "../nav-header/nav-header";

const contactUs = ()=>{
    return(
    <div className={classes.majorContainer}>
        <Header/>
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
        <center>
            <div className={classes.footer}>
                <p className={classes.left}>
                    We are always available on:
                <br/>
                    solutionbyexpert@gmail.com
                </p>
                <p className={classes.right}>
                    You can reach out to CEO:
                <br/>
                    Er. P.C Sharma
                <br/>
                    +91-9810285722
                </p>
            </div>            
        </center>
    </div>
    )
}

export default contactUs;