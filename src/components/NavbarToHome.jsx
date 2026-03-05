import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import '../css/Navbar.css';

function NavbarToHome() {

  return (
    <nav>
        <ul>
            <li>
                <h3>----------------------------------------</h3>
                <Link target="_blank" to="/"><b>BACK TO MAIN</b></Link>
                <h3>----------------------------------------</h3>
            </li>
        </ul>
    </nav>
  );
}

export default NavbarToHome;

<Link target="_blank" to="/shows"><b>SEE ALL SHOWS</b></Link>