import React from 'react'
import '../css/Contact.css';
import { SocialIcon } from 'react-social-icons';

export default function SocialMediaIcons() {
  return (
    <>
      <div>

        <SocialIcon url="https://music.apple.com/us/artist/skyler-whitfield/1686979315" target="_blank" network="itunes" bgColor="yellow" />
        <SocialIcon url="https://open.spotify.com/artist/05MRJj8MEXMcX2xdrXS9W2" target="_blank" network="spotify" bgColor="yellow" />
        <SocialIcon url="https://www.soundcloud.com/user-238870048/" target="_blank" network="soundcloud" bgColor="yellow" />
        <SocialIcon url="https://www.youtube.com/channel/UC2PDKc7mezW8bSkvv0NiyKQ/" target="_blank" network="youtube" bgColor="yellow" />
        <SocialIcon url="https://www.facebook.com/SkylerWhitfieldLive/" target="_blank" network="facebook" bgColor="yellow" />
        <SocialIcon url="https://account.venmo.com/u/skylerwhitfieldlive" target="_blank" network="vimeo" bgColor="yellow" label="Venmo"/>
        <SocialIcon url="https://account.venmo.com/u/skylerwhitfieldlive" target="_blank" network="sharethis" bgColor="yellow" label="Cashapp"/>

      </div>
      <br />
    </>
  )
}
