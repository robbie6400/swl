import React from 'react'
import Slideshow from "../components/Slideshow";
import ShowDates from "../components/ShowDates";
import YTvideos from "../components/YTvideos";
import SoundCloud from "../components/SoundCloud";
import Navbar1 from "../components/NavbarToShows";

export default function Home() {
  return (
    <div>
        <Slideshow />
        <ShowDates />
        <Navbar1 />
        <YTvideos />
        <SoundCloud />  
    </div>
  )
}
