import React from 'react'
import Navbar2 from "../components/NavbarToHome";
import CallShowsByMonths from '../components/CallShowsByMonths';
import AllShows from '../components/AllShows';

export default function Shows() {
  return (
    <div>
        
        <Navbar2 />
        <AllShows />
        {/* <CallShowsByMonths startMonth={1} endMonth={12} /> */}
        <br /><br />
    </div>
  )
}
