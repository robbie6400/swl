import React from 'react'
import '../css/Contact.css';
import { SocialIcon } from 'react-social-icons';

export default function SocialMediaIcons() {
  return (
    <>
      <div>
        <SocialIcon url="https://music.apple.com/us/artist/skyler-whitfield/1686979315" target="_blank" network="itunes" bgColor="#f94c57" fgColor="white" />
        <SocialIcon url="https://open.spotify.com/artist/05MRJj8MEXMcX2xdrXS9W2" target="_blank" network="spotify" bgColor="#1DB954" fgColor="white"/>
        <SocialIcon url="https://www.soundcloud.com/user-238870048/" target="_blank" network="soundcloud" bgColor="#ff7700" fgColor="white" />
        <SocialIcon url="https://www.youtube.com/channel/UC2PDKc7mezW8bSkvv0NiyKQ/" target="_blank" network="youtube" bgColor="#ff0000" fgColor="white"/>
        <SocialIcon url="https://www.facebook.com/SkylerWhitfieldLive/" target="_blank" network="facebook" bgColor="#1877F2" fgColor="white"/>
        <SocialIcon url="https://account.venmo.com/u/skylerwhitfieldlive" target="_blank" network="vimeo" bgColor="#008CFF" fgColor="white"label="Venmo"/>
        <SocialIcon url="https://cash.app/$skylerwhitfieldlive" target="_blank" network="sharethis" bgColor="#00CF31" fgColor="white" label="Cashapp"/>
      </div>
      <br />
    </>
  )
}

