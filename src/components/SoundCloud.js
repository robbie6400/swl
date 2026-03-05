import React from 'react'

export default function SoundCloud() {
  return (
    <>
        <div className='soundcloud'>
            <h2>Check out some of my originals on Spotify!</h2>
            < br/>
            <iframe
                data-testid="embed-iframe"
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/artist/05MRJj8MEXMcX2xdrXS9W2?utm_source=generator"
                width="50%"
                height="470em"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify Player"
            ></iframe>
            {/* #9e0619 */}
        </div>
        <br /><br />
    </>
  )
}
