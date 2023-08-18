import React from "react";
import {Outlet} from "react-router-dom";
import HeadingText from '../components/HeadingText';
import EmailMe from '../components/EmailMe';
import Contact from '../components/Contact';
import AlbumRelease from '../components/AlbumRelease';
import SocialMediaIcons from '../components/SocialMediaIcons';

const Layout = () => {
  return (
    <>    
      <AlbumRelease />
      <HeadingText />
      <SocialMediaIcons />
      <Outlet />
      <EmailMe />
      <Contact />
    </>
  );
};

export default Layout;