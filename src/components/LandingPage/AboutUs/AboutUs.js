import React from "react";

import classes1 from "./AboutUs.module.css";
import { Media } from "reactstrap";


import classes from "../../our team/ourTeam.module.css";
import CEOimg from "../../../assets/CEOimg.svg";
import MDimg from "../../../assets/MDimg.svg";
import { FiArrowUp } from "react-icons/fi";
import { BsFillXCircleFill } from "react-icons/bs";

const AboutUs = () => {
  return (
    <div className={classes1.AboutUs} id="abt">
      {/*<div className={classes.scrollspy}> 
        <div>
          <a href="#abt">click me!</a>
        </div>
  </div>*/}
      <center>
        <h2>About Us</h2>
      </center>
      <Media className={classes1.Info}>
        We are a young firm of Engineers and Architects with a vast and
        diversified experience in the areas of Designing, Planning and
        Coordinating Civil engineering, Architecture and allied fields. The firm
        has grown into a reputed consultancy firm and offers inter-disciplinary
        services. The firm has continued to imbibe the vision of “Safe, Durable
        and Economical Structures” from its ambitious, industrious and tenacious
        partners. At present, the firm functions with multi-discipline and
        experienced experts, well qualified staff and other professionals.
      </Media>
      <div className={classes.TopButton}>
        <a
          href="#top"
          style={{ textDecoration: "none", color: "#747474" }}
        >
          <FiArrowUp style={{ fontSize: "40px" }}></FiArrowUp>
        </a>
      </div>
      <div className={classes.bioCore} id="bio">

        <p id="bioMD"> 
        <b>Managing Director</b>
        <BsFillXCircleFill className={classes.closeicon} style={{ fontSize: "20px",float: "right",}} 
          onClick={
            ()=>{
              document.getElementById('bio').style.height="0vh";
              document.getElementById('bio').style.transitionDelay="0.4s";
              document.getElementById('bioMD').style.opacity="0";
              document.getElementById('bioCEO').style.opacity="0";
              document.getElementById('bioMD').style.zIndex="1";
              document.getElementById('bioCEO').style.zIndex="1";
            }
          }
        ></BsFillXCircleFill>
        <br/>
        Dr. Jai Prakash, born in 1942, obtained Bachelor of Civil Engineering in 1967 and Master in Structural Engineering in 1975 from Motilal Nehru Regional Engineering College, Allahabad and Ph.D in Structural Engineering from Indian Institute of Technology, Kanpur in 1981. He has 50 years of experience at Motilal Nehru Regional Engineering College, Allahabad (as Lecturer, Reader and Professor) from 1967 to 2002, Kumaon Engineering College, Dwarahat, Uttarakhand (as Principal) from 2000 to 2002, GLA Institute of Technology & Management, Mathura (as Director from 2002 to 2007 and as Director General from 2007 to 2010); GLA University, Mathura (as Vice-Chancellor) from 2010 to 2013. Since 2014, he is advisor to several Engineering Colleges.
        <br/>
        He has done lot of works as a Structural Engineer. Some of the works include Multi-storeyed buildings of INMANTECH, Ghaziabad; Multi-storeyed buildings of Luxe Paradize, Agra; Building of IVPS school Noida for vertical extension; Old Nizamuddin bridge, New Delhi; Old Wazirabad bridge, New Delhi; G.B. Pant Institute of Social Sciences Allahabad; Multi-storeyed dental college building at Aurangabad, Maharashtra.; Multi-storeyed Hostel building for BIET, Jhansi; Overhead water tanks of different capacities varying from 3000 KL to 250 KL; Lighting Tower at Indira Gandhi stadium at New Delhi for ASIAD 1982; Multi-storied residential buildings for Reserve Bank of India, Kanpur; Mosque at Aden, Yemen; Intake structures of Ramnagar Powerhouse, Kalagarh; Industrial Estate at Motilal Nehru Regional Engineering College, Allahabad; School building for ITI Naini, Allahabad, etc.
        <br/>
        <center>
          <button className={classes.close}
                  onClick={
                    ()=>{
                      document.getElementById('bio').style.height="0vh";
                      document.getElementById('bio').style.transitionDelay="0.4s";
                      document.getElementById('bioMD').style.opacity="0";
                      document.getElementById('bioCEO').style.opacity="0";
                      document.getElementById('bioMD').style.zIndex="1";
                      document.getElementById('bioCEO').style.zIndex="1";
                    }
                  }
          >
            Close
          </button>
        </center>
        </p>

        <p id="bioCEO">
        <b>Chief Executive Officer</b>
        <BsFillXCircleFill className={classes.closeicon}  style={{ fontSize: "20px",float: "right", }}
          onClick={
            ()=>{
              document.getElementById('bio').style.height="0vh";
              document.getElementById('bio').style.transitionDelay="0.4s";
              document.getElementById('bioMD').style.opacity="0";
              document.getElementById('bioCEO').style.opacity="0";              
              document.getElementById('bioMD').style.zIndex="1";
              document.getElementById('bioCEO').style.zIndex="1";
            }
          }
        ></BsFillXCircleFill>
        <br/>
        Er. PC Sharma, born in 1940, has done Civil Engineering in 1958 from Roorkee, Uttarakahand. He has worked at Bhilai Steel Plant, Bhilai during 1958—1960; Central Building Research Institute, Roorkee during 1960—1965; Structural Engineering Research Centre, Roorkee during 1965‑1989; and Structural Engineering Research Centre, Ghaziabad during 1989‑2000. Presently, he is Chief Editor for two journals, New Building and Construction World and the MGS Modern Green Structures and Architecture‑Interior and Design, published from New Delhi.
        
        He has vast experience in repair, rehabilitation and retrofitting of Masonry and Concrete structures, Concrete technology, Research and Development, etc. He is consultant to Civil Engineering Industry for repair, rehabilitation and retrofitting of structures. Some of the works carried out by him include UNICEF projects on Design and training of ferrocement water reservoir structures and rain-water harvesting in North Kachar district‑Assam, Indore‑MP, Portblair Andaman & Nicobar, Ranikhet, UP, entire State of Himachal Pradesh; National Drinking water mission projects at SERC Ghaziabad; Multi-storeyed buildings of American Embassy, New Delhi; International Tobacco Company, Ghaziabad; IVPS school Noida for vertical extension; Multi-storeyed structure of IDPL Rishikesh; Multi‑storeyed buildings of Ryan International School, Faridabad; Central School complex at Hindon Air Field, Ghaziabad; Handling structure of Baildila Iron Ore Project, MP; Main dam and tunnels of Tala HEP, Bhutan; Multi‑storeyed building of IFFCO Headquarter, New Delhi; Multi‑storeyed building of CRRI, New Delhi; Hudco Place New Delhi‑Ansal Plaza basement parking; Bank building of Dharmarth Trust, Jammu; Rohtak Medical college & Hospital building, Rohtak; Laboratory building of Bureau of Indian Standards, Sahibabad, UP; Multi-storeyed Jammu Inter‑state Bus Terminus, Jammu; Old Indraprastha Power House, New Delhi Transmission complex of Indian Army, Meerut; Turbine testing laboratory building of BHEL, Hardwar; BM Institute, Ahmedabad; Calico Milling, Ahmedabad; Fire damaged structures of Narora Atomic Power Plant; Bailadia Iron Ore Project, MP; Multi‑storeyed GDA Housing Societies, Ghaziabad; Indira Gandhi Indoor Stadium, New Delhi; Main building of IIT Roorkee; Masonry arch bridge over Yamuna Canal , Bhallabhgarh; RCC structure of generation unit of Khatima Power Station; Janak Setu, Delhi; Old Nizamuddin bridge, New Delhi; Old Wazirabad bridge, New Delhi; St. James Church, Kashmiri Gate, New Delhi, etc.
      
        He has several patents and books (Do it yourself books on Ferrocement; and Rain water harvesting techniques for drinking purpose) to his credit. He was a Member, Expert committee, appointed by CPWD (Govt. of India) for preparation of CPWD Handbook on Repair and rehabilitation of RCC structures, published by CPWD, New Delhi in 2002 and 2011; and Member, Editorial committee of the above book. He was a visiting faculty at Asian Institute of Technology, Bangkok, Thailand.
        <br/>
        <center>
          <button className={classes.close}
                  onClick={
                    ()=>{
                      document.getElementById('bio').style.height="0vh";
                      document.getElementById('bio').style.transitionDelay="0.4s";
                      document.getElementById('bioMD').style.opacity="0";
                      document.getElementById('bioCEO').style.opacity="0";
                      document.getElementById('bioMD').style.zIndex="1";
                      document.getElementById('bioCEO').style.zIndex="1";
                    }
                  }
          >
            Close
          </button>
        </center>
        </p>
        
      </div>
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
                <img alt="img" id="CEO" src={CEOimg} 
                    onClick={ 
                    ()=>{
                      document.getElementById('bio').style.height="70vh";
                      document.getElementById('bio').style.transitionDelay="0s";
                      document.getElementById('bioCEO').style.opacity="1";
                      document.getElementById('bioCEO').style.zIndex="4";
                      document.getElementById('bioMD').style.zIndex="1";
                      } 
                    }
                />
              </center>
              <center>
                <p className={classes.name}>
                  Er. P. C <b>Sharma</b>
                </p>
                <p className={classes.post}>Chief Executive Officer</p>
                <p  onClick={ 
                    ()=>{
                      document.getElementById('bio').style.height="70vh";
                      document.getElementById('bio').style.transitionDelay="0s";
                      document.getElementById('bioCEO').style.opacity="1";
                      document.getElementById('bioCEO').style.zIndex="4";
                      document.getElementById('bioMD').style.zIndex="1";
                      } 
                    } style={{cursor:"pointer",}}>know more</p>
              </center>
            </td>
            <td className={classes.imgAdjustL}>
              <center>
                <img alt="img" id="MD" src={MDimg} 
                     onClick={ 
                       ()=>{
                        document.getElementById('bio').style.height="70vh";
                        document.getElementById('bio').style.transitionDelay="0s";
                        document.getElementById('bioMD').style.opacity="1";
                        document.getElementById('bioMD').style.zIndex="4";
                        document.getElementById('bioCEO').style.zIndex="1";
                        } 
                    } 
                />
              </center>
              <center>
                <p className={classes.name}>
                  Dr. Jay <b>Prakash</b>
                </p>
                <p className={classes.post}>Managing Director</p>
                <p  onClick={ 
                    ()=>{
                      document.getElementById('bio').style.height="70vh";
                        document.getElementById('bio').style.transitionDelay="0s";
                        document.getElementById('bioMD').style.opacity="1";
                        document.getElementById('bioMD').style.zIndex="4";
                        document.getElementById('bioCEO').style.zIndex="1";
                      } 
                    } style={{cursor:"pointer",}}>know more</p>
              </center>
            </td>
          </tr>
        </table>
        </center>
    </div>
  );
};
export default AboutUs;
