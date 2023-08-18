import React from 'react'
import Navbar2 from "../components/NavbarToHome";
import CallShowsByMonths from '../components/CallShowsByMonths';

export default function Shows() {
  return (
    <div>
        
        <Navbar2 />
        <CallShowsByMonths startMonth={1} endMonth={12} />
    </div>
  )
}
