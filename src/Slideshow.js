import React from 'react';
import './Slideshow.css';

export default function Slideshow() {
  return (
    <>
        <div className="slideshowContainer">
            <div className="mySlides fade"><img src="https://i.imgur.com/wskQd6U.jpg" style="width:54%;height:43%;" /></div>
            <div className="mySlides"><img src="https://i.imgur.com/A5BMoAS.jpg" style="width:26.5%;height:43%;" /></div>
            <div className="mySlides"><img src="https://i.imgur.com/ywRln8N.png" style="width:37%;height:43%;" /></div>
            <div className="mySlides"><img src="https://i.imgur.com/gOiAfBo.jpg" style="width:27%;height:43%;" /></div>
            <div className="mySlides"><img src="https://i.imgur.com/dKAYdQZ.jpg" style="width:54%;height:43%;" /></div>
        </div>    
    </>
  )
}




