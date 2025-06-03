import React from "react";
import {Outlet} from "react-router-dom";
import HeadingText from '../components/HeadingText';
import EmailMe from '../components/EmailMe';
import Contact from '../components/Contact';
import SocialMediaIconsShort from '../components/SocialMediaIconsShort';

const Layout = () => {
  return (
    <>    
      <SocialMediaIconsShort />
      <h1>Skyler Whitfield Live</h1>
      <HeadingText />
      <Outlet />
      <EmailMe />
      <Contact />
    </>
  );
};

export default Layout;