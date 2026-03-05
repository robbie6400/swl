import React from 'react'
import Slideshow from "../components/Slideshow";
import CallShowsByMonths from "../components/CallShowsByMonths";
import YTvideos from "../components/YTvideos";
import SoundCloud from "../components/SoundCloud";
import Navbar1 from "../components/NavbarToShows";
import ShowDates30 from '../components/ShowDates30';


export default function Home() {

  const current = new Date();
  const currMonth = current.getMonth();

  return (
    <div>
        <Slideshow />
        <ShowDates30 />
        {/* <CallShowsByMonths startMonth={currMonth+1} endMonth={currMonth+2} /> */}
        <Navbar1 />
        <YTvideos />
        <SoundCloud />
    </div>
  )
}
