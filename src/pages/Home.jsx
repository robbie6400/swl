import React from 'react'
import Slideshow from "../components/Slideshow";
import ShowDates from "../components/ShowDates";
import YTvideos from "../components/YTvideos";
import Navbar1 from "../components/NavbarToShows";
import AlbumLink from '../components/AlbumLink';

export default function Home() {
  return (
    <div>
        <Slideshow />
        <ShowDates />
        <Navbar1 />
        <YTvideos />
        <AlbumLink /> <br />
    </div>
  )
}
