import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Slideshow.css";
import skyler1 from "./images/skyler.jpg"
import skyler2 from "./images/skyler1.png"
import skyler3 from "./images/skyler2.jpg"
import skyler4 from "./images/skyler3.jpg"
import skyler5 from "./images/skyler4.jpg"

const fadeImages = [
  skyler1,
  skyler2,
  skyler3,
  skyler4,
  skyler5
];

export default function Slideshow() {
  return (
    <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <img src={fadeImages[0]} width="700" height="450" />
        </div>
        <div className="each-fade">
          <img src={fadeImages[3]} width="300" height="450" />
        </div>
        <div className="each-fade">
          <img src={fadeImages[1]} width="450" height="450"/>
        </div>
        <div className="each-fade">
          <img src={fadeImages[4]} width="300" height="450" />
        </div>
        <div className="each-fade">
          <img src={fadeImages[2]} width="700" height="450" />
        </div>
      </Fade>
    </div>
  );
}
