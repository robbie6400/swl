import React from 'react'
import Navbar2 from "../components/NavbarToHome";
import CallShowsByMonths from '../components/CallShowsByMonths';
import ShowDates from '../components/ShowDates';

export default function Shows() {
  return (
    <div>
        
        <Navbar2 />
        <ShowDates />
        {/* <CallShowsByMonths startMonth={1} endMonth={12} /> */}
    </div>
  )
}
