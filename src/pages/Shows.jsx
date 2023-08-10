import React from 'react'
import HeadingText from '../components/HeadingText';
import EmailMe from '../components/EmailMe';
import Contact from '../components/Contact';
import Navbar2 from "../components/NavbarToHome";
import AllShows from '../components/AllShows';
import AlbumRelease from '../components/AlbumRelease';


export default function Shows() {
  return (
    <div>
        <AlbumRelease/>
        <div>
            <h4>
              <a href="https://www.facebook.com/SkylerWhitfieldLive/" target="_blank" rel="noopener noreferrer">FACEBOOK</a> : 
              <a href="https://www.youtube.com/channel/UC2PDKc7mezW8bSkvv0NiyKQ/" target="_blank" rel="noopener noreferrer">YOUTUBE</a> : 
              <a href="https://account.venmo.com/u/skylerwhitfieldlive" target="_blank" rel="noopener noreferrer">VENMO</a> : 
              <a href="https://www.soundcloud.com/user-238870048/" target="_blank" rel="noopener noreferrer">SOUNDCLOUD</a> 
            </h4>
        </div>
        <HeadingText />
        <Navbar2 />
        <AllShows />
        <br /><br /><br />
        <EmailMe />
        <Contact />
    </div>
  )
}
