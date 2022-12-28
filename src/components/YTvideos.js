import React from 'react'
import '../css/YTvideos.css';

export default function YTvideos() {
  return (
    <>
      <div className="youtubeVideos">
        <h2> Check out some of my past shows on YouTube ! </h2> 

        <iframe title="skylerPromo" width="40%" height="300px" src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FSkylerWhitfieldLive%2Fvideos%2F356016736269832%2F&show_text=false&width=560&t=0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <figcaption>Skyler Whitfield Live Promo Video</figcaption>
          <br /><br />
        <iframe title="skyJackPromo" width="40%" height="350px" src="https://www.youtube.com/embed/0yZR2CSM6_k" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <figcaption>Skyjack Duo Promo Video</figcaption>   
          <br /><br />
        <iframe title="skylerFiddleDuo" width="40%" height="350px"  src="https://www.youtube.com/embed/36AdzFE5HBA" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <figcaption>Skyler Whitfield & Chris Cary Promo Video</figcaption>
          <br /><br />
        <iframe title="skylerFaultLine" width="40%" height="350px" src="https://www.youtube.com/embed/vFe5fx0UeSw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <figcaption>Skyler Whitfield Live Fault Line Music Video</figcaption>
          <br></br>
      </div>
    </>
  )
}


