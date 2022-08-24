import React from 'react'
import Slideshow from "../components/Slideshow";
import ShowDates from "../components/ShowDates";
import YTvideos from "../components/YTvideos";
import SoundCloud from "../components/SoundCloud";
import HeadingText from '../components/HeadingText';
import EmailMe from '../components/EmailMe';
import Contact from '../components/Contact';
import Navbar1 from "../components/NavbarToShows";

export default function Home() {
  return (
    <div>
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
