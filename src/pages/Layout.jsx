import React from "react";
import {Outlet} from "react-router-dom";
import HeadingText from '../components/HeadingText';
import EmailMe from '../components/EmailMe';
import Contact from '../components/Contact';
import AlbumRelease from '../components/AlbumRelease';
import SocialMediaIconsShort from '../components/SocialMediaIconsShort';

const Layout = () => {
  return (
    <>    
      <AlbumRelease />
      <HeadingText />
      <SocialMediaIconsShort />
      <Outlet />
      <EmailMe />
      <Contact />
    </>
  );
};

export default Layout;