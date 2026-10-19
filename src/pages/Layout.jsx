import React from "react";
import {Outlet} from "react-router-dom";
import AlbumRelease from '../components/AlbumRelease';
import SocialMediaIconsShort from '../components/SocialMediaIconsShort';
import HeadingText from '../components/HeadingText';
import EmailMe from '../components/EmailMe';
import Contact from '../components/Contact';

const Layout = () => {
  return (
    <>    
      {/* <AlbumRelease/> */}
      <SocialMediaIconsShort />
      <HeadingText />
      <Outlet />
      <EmailMe />
      <Contact />
    </>
  );
};

export default Layout;