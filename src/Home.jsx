import React from 'react'
import Slideshow from "./Slideshow";
import ShowDates from "./ShowDates";
import YTvideos from "./YTvideos";
import SoundCloud from "./SoundCloud";
import HeadingText from './HeadingText';
import EmailMe from './EmailMe';
import Contact from './Contact';
import Navbar1 from "./NavbarToShows";

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
