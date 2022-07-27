import React from 'react'
import HeadingText from './HeadingText';
import EmailMe from './EmailMe';
import Contact from './Contact';
import Navbar2 from "./NavbarToHome";
import AllShows from './AllShows';


export default function Shows() {
  return (
    <div>
        <HeadingText />
        <Navbar2 />
        <AllShows />
        <br /><br /><br />
        <EmailMe />
        <Contact />
    </div>
  )
}
