import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import './Navbar.css';

function NavbarToShows() {

  return (
    <nav>
      <ul>
        <li>
            <h3>----------------------------------------</h3>
            <Link target="_blank" to="/shows"><b>SEE ALL SHOWS</b></Link>
            <h3>----------------------------------------</h3>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarToShows;