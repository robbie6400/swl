import React from 'react'
import Slideshow from "../components/Slideshow";
import ShowDates from "../components/ShowDates";
import YTvideos from "../components/YTvideos";
import SoundCloud from "../components/SoundCloud";
import HeadingText from '../components/HeadingText';
import EmailMe from '../components/EmailMe';
import Contact from '../components/Contact';
import Navbar1 from "../components/NavbarToShows";
import AlbumRelease from '../components/AlbumRelease';

export default function Home() {
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
        <Slideshow />
        <ShowDates />
        <Navbar1 />
        <YTvideos />
        <SoundCloud />
        <EmailMe />
        <Contact />
    </div>
  )
}
