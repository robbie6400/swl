import React from 'react'
import '../css/Contact.css';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

export default function Contact() {
  return (
    <>
        <h4>Contact: <br />
            (336)-509-2070 <br />
            skyler.greensboro@gmail.com <br /></h4>
            <div>
                <h4>
                  <ul>
                    <li>
                      <SocialIcon url="https://www.facebook.com/SkylerWhitfieldLive/" network="facebook" bgColor="#daa520" fgColor="#000000"/>
                    </li>
                    <li>
                      <SocialIcon url="https://www.youtube.com/channel/UC2PDKc7mezW8bSkvv0NiyKQ/" network="youtube" bgColor="#daa520" fgColor="#000000"/> 
                    </li>
                    <li>
                      <SocialIcon url="https://www.soundcloud.com/user-238870048/" network="soundcloud" bgColor="#daa520" fgColor="#000000"/>   
                    </li>
                    <li>
                      <SocialIcon url="https://venmo.com/u/skylerwhitfieldlive" network="vimeo" bgColor="#daa520" fgColor="#000000"/>  
                    </li>
                    <li>
                      <SocialIcon url="https://music.apple.com/us/artist/skyler-whitfield/1686979315" network="itunes" bgColor="#daa520" fgColor="#000000"/>  
                    </li>
                    <li>
                      <SocialIcon url="https://open.spotify.com/artist/05MRJj8MEXMcX2xdrXS9W2" network="spotify" bgColor="#daa520" fgColor="#000000"/>  
                    </li>


                  </ul>
                    


                    {/*<a href="https://www.facebook.com/SkylerWhitfieldLive/" target="_blank" rel="noopener noreferrer">FACEBOOK</a> :
                    <a href="https://www.youtube.com/channel/UC2PDKc7mezW8bSkvv0NiyKQ/" target="_blank" rel="noopener noreferrer">YOUTUBE</a> : 
                    <a href="https://www.soundcloud.com/user-238870048/" target="_blank" rel="noopener noreferrer">SOUNDCLOUD</a> */}
                </h4>
            </div>

        <h4>** I own all the rights to my music. Any monetary redistribution of intellectual property found on this page without credit and compensation to the original artist will receive legal action from the U.S. Copyright Office and their affiliates.**</h4>
    </>
  )
}
