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
              <a href="https://account.venmo.com/u/skylerwhitfieldlive" target="_blank" rel="noopener noreferrer">VENMO</a> : 
              <a href="https://cash.app/$skylerwhitfieldlive/" target="_blank" rel="noopener noreferrer">CASHAPP</a> 
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
