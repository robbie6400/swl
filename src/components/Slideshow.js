import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import skyler from "../images/skyler.jpg"
import skyler1 from "../images/skyler1.jpg"
import skyler2 from "../images/skyler2.jpg"
import skyler3 from "../images/skyler3.jpg"
import skyler4 from "../images/skyler4.jpg"
import skyler5 from "../images/skyler5.jpg"
import skyler6 from "../images/skyler6.jpg"

const fadeImages = [
  skyler,
  skyler1,
  skyler2,
  skyler3,
  skyler4,
  skyler5,
  skyler6
];

export default function Slideshow() {
  return (
    <div className="slide-container" height="450px">
      <Fade>
        <div className="each-fade">
          <img src={fadeImages[6]} width="40%" height="40%" alt="skylerLiveImg1"/>
        </div>
        <div className="each-fade">
          <img src={fadeImages[2]} width="17.77%" height="18%" alt="skylerLiveImg2"/>
        </div>
        <div className="each-fade">
          <img src={fadeImages[1]} width="47%" height="47%" alt="skylerLiveImg3"/>
        </div>
        <div className="each-fade">
          <img src={fadeImages[4]} width="17.77%" height="18%" alt="skylerLiveImg4"/>
        </div> 
        <div className="each-fade">
          <img src={fadeImages[5]} width="40%" height="40%" alt="skylerLiveImg5"/>
        </div>
      </Fade>
        <br />
    </div>
  );
}
