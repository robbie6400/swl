import React from 'react'
import '../css/ContactShort.css';
import { SocialIcon } from 'react-social-icons';

export default function SocialMediaIconsShort() {
  return (
    <>
      <div className='containerHead'>
        <div className='container'>
          <SocialIcon url="https://account.venmo.com/u/skylerwhitfieldlive" target="_blank" network="vimeo" bgColor="yellow" label="Venmo" style={{ height: 25, width: 25 }} />
          <a href="https://account.venmo.com/u/skylerwhitfieldlive" target="_blank"> <h1>Venmo</h1> </a> 
        </div>
        <div className='container'>
          <SocialIcon url="https://cash.app/$skylerwhitfieldlive" target="_blank" network="sharethis" bgColor="yellow" label="Cashapp"  style={{ height: 25, width: 25 }} />
          <a href="https://account.venmo.com/u/skylerwhitfieldlive" target="_blank"> <h1>Cashapp</h1> </a> 
        </div>
      </div>
    </>
  )
}

