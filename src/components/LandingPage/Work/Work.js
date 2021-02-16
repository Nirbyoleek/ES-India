import React from "react";
import img1 from "../../../assets/Works/img1.jpg";
import img2 from "../../../assets/Works/img2.jpg";
import img3 from "../../../assets/Works/img3.jpg";
import img4 from "../../../assets/Works/img4.jpg";
import img5 from "../../../assets/Works/img5.jpg";
import img6 from "../../../assets/Works/img6.jpg";

import { Fade } from "react-awesome-reveal";

import classes from "./Work.module.css";
import { useState } from "react";

const Work = () => {
  return (
    <div className={classes.Container} id="works">
      <div className={classes.Work}>
        <h5>Works</h5>
        <div className={classes.work_box}>
          <div>
            <Fade direction={"left"} triggerOnce={true}>
              <img src={img1} alt=""></img>
            </Fade>
          </div>
          <Fade direction={"right"} triggerOnce={true}>
            <div>
              <h5 style={{ marginLeft: "25px", marginRight: "none" }}>
                Assessment and Retrofitting
              </h5>
              <div id={classes.line}></div>
              <div class={classes.pointContainerC} id="DD1">
                <p 
                  className={classes.knowMore}
                  style={{"paddingLeft":"0px",}}
                  onClick={()=>
                    {
                      document.getElementById("DD1").classList.remove(classes.pointContainerO);
                      document.getElementById("DD1").classList.add(classes.pointContainerC);
                    }}>
                  hide
                </p>
                <ul>
                  <li>Condition Assessment and Strengthening measures for Old Production Unit Building of ITC,</li>
                  <li>Meerut Road, Ghaziabad</li>
                  <li>Health assessment of multi-storeyed buildings of INMANTECH, Ghaziabad</li>
                  <li>Health assessment of under-construction multi-storeyed buildings of Luxe Paradize, Agra</li>
                  <li>Rehabilitation and retrofitting of multi-storeyed structure of IDPL, Rishikesh</li>
                  <li>Rehabilitation of Central School complex at Hindon Air Field, Ghaziabad</li>
                  <li>Rehabilitation of handling structure of Baildila Iron Ore Project, MP</li>
                  <li>Rehabilitation of multi-storeyed building of IFFCO Headquarter, New Delhi</li>
                  <li>Rehabilitation of multi-storeyed buildings of Ryan International School, Faridabad</li>
                  <li>Rehabilitation of multi-storeyed Jammu Interstate Bus Terminus, Jammu</li>
                  <li>Rehabilitation of transmission complex of Indian Army, Meerut</li>
                  <li>Rehabilitation of turbine testing laboratory building of BHEL, Hardwar</li>
                  <li>Repair and rehabilitation of BM Institute, Ahmedabad</li>
                  <li>Repair and rehabilitation of Calico Milling, Ahmedabad</li>
                  <li>Repair and rehabilitation of Indira Gandhi Indoor Stadium, New Delhi</li>
                  <li>Repair and rehabilitation of main building of Indian Institute of Technology, Roorkee</li>
                  <li>Repair and rehabilitation of multi-storeyed buildings of American Embassy, New Delhi</li>
                  <li>Repair and rehabilitation of multi-storeyed GDA Housing Societies, Ghaziabad</li>
                  <li>Repair and rehabilitation of RCC structure of generation unit of Khatima Power Station</li>
                  <li>Retrofitting of building of International Tobacco Company, Ghaziabad</li>
                  <li>Design and execution of Anti-blast walls for American Embassy, New Delhi</li>
                </ul>
              </div>
              <p 
                className={classes.knowMore}
                onClick={()=>
                  {
                    document.getElementById("DD1").classList.remove(classes.pointContainerC);
                    document.getElementById("DD1").classList.add(classes.pointContainerO);
                  }}>
                know more
              </p>
            </div>
          </Fade>
        </div>
        <div className={classes.work_box}>
          <div>
            <Fade direction={"left"} triggerOnce={true}>
              <img src={img2} alt=""></img>
            </Fade>
          </div>
          <Fade direction={"right"} triggerOnce={true}>
            <div>
              <h5 style={{ marginLeft: "25px", marginRight: "none" }}>
                Rehabilitation
              </h5>
              <div id={classes.line}></div>
              <div class={classes.pointContainerC} id="DD2">
                <p 
                  className={classes.knowMore}
                  style={{"paddingLeft":"0px",}} 
                  onClick={()=>
                    {
                      document.getElementById("DD2").classList.remove(classes.pointContainerO);
                      document.getElementById("DD2").classList.add(classes.pointContainerC);
                    }}>
                  hide
                </p>
                <ul>
                  <li>Assessment of Fire Damaged building of M/s K.K. Kapoor Hosiery, Ludhiana, Punjab</li>
                  <li>Assessment of Fire Damaged building of Rajan Vinayak & Rakesh Kumar in Ludhiana, Punjab</li>
                  <li>Strengthening measures for fire damaged building of M/s Bludip Paints and Chemicals, Ghaziabad</li>
                  <li>Damage assessment and strengthening measures for fire affected buildings of Palm Green Hotel and Resorts, Bakoli, Karnal road, Delhi</li>
                </ul>
              </div>
              <p 
                className={classes.knowMore}
                onClick={()=>
                  {
                    document.getElementById("DD2").classList.remove(classes.pointContainerC);
                    document.getElementById("DD2").classList.add(classes.pointContainerO);
                  }}>
                know more
              </p>
            </div>
          </Fade>
        </div>
        <div className={classes.work_box}>
          <div>
            <Fade direction={"left"} triggerOnce={true}>
              <img src={img3} alt=""></img>
            </Fade>
          </div>
          <Fade direction={"right"} triggerOnce={true}>
            <div>
              <h5 style={{ marginLeft: "25px", marginRight: "none" }}>
                Strengthening
              </h5>
              <div id={classes.line}></div>
              <div class={classes.pointContainerC} id="DD3">
                <p 
                  className={classes.knowMore}
                  style={{"paddingLeft":"0px",}} 
                  onClick={()=>
                    {
                      document.getElementById("DD3").classList.remove(classes.pointContainerO);
                      document.getElementById("DD3").classList.add(classes.pointContainerC);
                    }}>
                  hide
                </p>
                <ul>
                  <li>Seismic vulnerability assessment of existing office premises of UNICEF at Lucknow, Patna and Guwahati and suggestions for strengthening measures</li>
                  <li>Condition assessment and suggestions for strengthening measures for multi-storeyed buildings of Ryan International School, Sector-21B, Faridabad, Haryana; Sector-39, Noida;</li>
                  <li>Mayur Vihar, Delhi; Sector-25, Rohini, New Delhi; and Vasant Kunj, New Delhi Retrofitting of building of IVPS school Noida for vertical extension</li>
                  <li>Strengthening measures for Janak Setu, Delhi</li>    
                  <li>Strengthening measures for old Nizamuddin bridge, New Delhi</li>    
                  <li>Strengthening measures for old Wazirabad bridge, New Delhi</li>    
                  <li>Structural design and drawings for addition of one lane in existing bridge in Bullandsahar, UP</li>    
                </ul>
              </div>
              <p 
                className={classes.knowMore}
                onClick={()=>
                  {
                    document.getElementById("DD3").classList.remove(classes.pointContainerC);
                    document.getElementById("DD3").classList.add(classes.pointContainerO);
                  }}>
                know more
              </p>
            </div>
          </Fade>
        </div>
        <div className={classes.work_box}>
          <div>
            <Fade direction={"left"} triggerOnce={true}>
              <img src={img4} alt=""></img>
            </Fade>
          </div>
          <Fade direction={"right"} triggerOnce={true}>
            <div>
              <h5 style={{ marginLeft: "25px", marginRight: "none" }}>
                Repairing and Rehabilitation
              </h5>
              <div id={classes.line}></div>
              <div class={classes.pointContainerC} id="DD4">
                <p 
                  className={classes.knowMore}
                  style={{"paddingLeft":"0px",}} 
                  onClick={()=>
                    {
                      document.getElementById("DD4").classList.remove(classes.pointContainerO);
                      document.getElementById("DD4").classList.add(classes.pointContainerC);
                    }}>
                  hide
                </p>
                <ul>
                  <li>Rehabilitation and retrofitting of multi-storeyed structure of IDPL, Rishikesh</li>
                  <li>Rehabilitation of Central School complex at Hindon Air Field, Ghaziabad</li>
                  <li>Rehabilitation of handling structure of Baildila Iron Ore Project, MP</li>
                  <li>Rehabilitation of multi-storeyed building of IFFCO Headquarter, New Delhi</li>
                  <li>Rehabilitation of multi-storeyed buildings of Ryan International School, Faridabad</li>
                  <li>Rehabilitation of multi-storeyed Jammu Interstate Bus Terminus, Jammu</li>
                  <li>Rehabilitation of transmission complex of Indian Army, Meerut</li>
                  <li>Rehabilitation of turbine testing laboratory building of BHEL, Hardwar</li>
                  <li>Repair and rehabilitation of BM Institute, Ahmedabad</li>
                  <li>Repair and rehabilitation of Calico Milling, Ahmedabad</li>
                  <li>Repair and rehabilitation of Indira Gandhi Indoor Stadium, New Delhi</li>
                  <li>Repair and rehabilitation of main building of Indian Institute of Technology, Roorkee</li>
                  <li>Repair and rehabilitation of multi-storeyed buildings of American Embassy, New Delhi</li>
                  <li>Repair and rehabilitation of multi-storeyed GDA Housing Societies, Ghaziabad</li>
                  <li>Repair and rehabilitation of RCC structure of generation unit of Khatima Power Station</li>                  
                </ul>
              </div>
              <p 
                className={classes.knowMore}
                onClick={()=>
                  {
                    document.getElementById("DD4").classList.remove(classes.pointContainerC);
                    document.getElementById("DD4").classList.add(classes.pointContainerO);
                  }}>
                know more
              </p>
            </div>
          </Fade>
        </div>
        <div className={classes.work_box}>
          <div>
            <Fade direction={"left"} triggerOnce={true}>
              <img src={img5} alt=""></img>
            </Fade>
          </div>
          <Fade direction={"right"} triggerOnce={true}>
            <div>
              <h5 style={{ marginLeft: "25px", marginRight: "none" }}>
                Heritage
                <br />
                Structures
              </h5>
              <div id={classes.line}></div>
              <div class={classes.pointContainerC} id="DD5">
                <p
                  className={classes.knowMore} 
                  style={{"paddingLeft":"0px",}} 
                  onClick={()=>
                    {
                      document.getElementById("DD5").classList.remove(classes.pointContainerO);
                      document.getElementById("DD5").classList.add(classes.pointContainerC);
                    }}>
                  hide
                </p>
                <ul>
                  <li>Strengthening measures for St. James Church, Kashmiri Gate, New Delhi</li> 
                  <li>Structural repair measures for mosque at Aden, Yemen.</li> 
                </ul>
              </div>
              <p 
                className={classes.knowMore}
                onClick={()=>
                  {
                    document.getElementById("DD5").classList.remove(classes.pointContainerC);
                    document.getElementById("DD5").classList.add(classes.pointContainerO);
                  }}>
                know more
              </p>
            </div>
          </Fade>
        </div>
        <div className={classes.work_box}>
          <div>
            <Fade direction={"left"} triggerOnce={true}>
              <img src={img6} alt=""></img>
            </Fade>
          </div>
          <Fade direction={"right"} triggerOnce={true}>
            <div>
              <h5 style={{ marginLeft: "25px", marginRight: "none" }}>
                Miscellaneous
              </h5>
              <div id={classes.line}></div>
              <div class={classes.pointContainerC} id="DD6">
                <p
                  className={classes.knowMore} 
                  style={{"paddingLeft":"0px",}} 
                  onClick={()=>
                    {
                      document.getElementById("DD6").classList.remove(classes.pointContainerO);
                      document.getElementById("DD6").classList.add(classes.pointContainerC);
                    }}>
                  hide
                </p>
                <ul>
                  <li>Structural design and drawings for addition/alteration in existing four storeyed building at Main Market, Greater Kailash-II, New Delhi</li>
                  <li>Proof Checking of design and drawings of several structures including buildings; bridges;towers; and advertisement structures</li>
                  <li>Structural design and drawings for 80 Number Residential Houses and Community Centre (PMAY) at Rampura, Kasba Baran Bahar, Pragana Baran, Bullandsahar</li>
                  <li>Structural design and drawings for extension of existing office building of District Magistrate, Bullandsahar</li>
                  <li>Structural design and supervision of GB Pant Institute of Social Sciences, Allahabad</li>
                  <li>Structural design and supervision of multi-storeyed dental college building at Aurangabad, Maharashtra.</li>
                  <li>Structural design and supervision of multi-storeyed Design Centre building at Motilal Nehru Regional Engineering College, Allahabad</li>
                  <li>Structural design and supervision of multi-storeyed Hostel building for BIET, Jhansi</li>
                  <li>Structural Design of elevated as well underground water tanks of different capacities</li>
                  <li>Structural Design of Lighting Tower at Indira Gandhi stadium at New Delhi</li>
                  <li>Structural design of multi-storied residential buildings consisting of half brick thick load bearing walls for Reserve Bank of India, Kanpur</li>
                  <li>Structural design and drawings for advertisement structures over DND flyway, Delhi</li>
                </ul>
              </div>
              <p 
                className={classes.knowMore}
                onClick={()=>
                  {
                    document.getElementById("DD6").classList.remove(classes.pointContainerC);
                    document.getElementById("DD6").classList.add(classes.pointContainerO);
                  }}>
                know more
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};
export default Work;
