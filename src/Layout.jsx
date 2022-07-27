import React from "react";
import {Outlet} from "react-router-dom";
import Navbar1 from "./NavbarToShows";
import HeadingText from "./HeadingText";
import EmailMe from "./EmailMe";
import Contact from "./Contact";

const Layout = () => {
  return (
    <>    
      <Outlet />
    </>
  );
};

export default Layout;