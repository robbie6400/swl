import React from 'react'
import '../css/EmailMe.css';

export default function EmailMe() {
  return (
    <>    
        <div className="yellowBox">
            <h2>Send me an email:</h2>
            <form action="mailto:skyler.greensboro@gmail.com" method="post" encType="text/plain">
                <input type="text" name="Message from fan: " size="50" />
                <input type="reset" value="Clear" />
                <input type="submit" value="Book Now" />
            </form>
            <br />
        </div>
    </>
  )
}
