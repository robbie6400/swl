import React, { useEffect, useState } from 'react';


export default function ShowDates({shows}) {
  const current = new Date();
  const currMonth = current.getMonth();
  const currDay = current.getDate();
  console.log(currDay);

  useEffect(() => {
    // Load the Bandsintown script
    const script = document.createElement('script');
    script.src = 'https://widgetv3.bandsintown.com/main.min.js';
    script.charset = 'utf-8';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className='showDatesTile'>
      <a 
        className="bit-widget-initializer"
        data-artist-name="id_15550492"
        data-events-to-display=""
        data-background-color="rgba(0,0,0,1)"
        data-separator-color="rgba(158,6,25,1)"
        data-text-color="rgba(253,253,253,1)"
        data-font="Arial"
        data-auto-style="true"
        data-button-label-capitalization="uppercase"
        data-header-capitalization="uppercase"
        data-location-capitalization="capitalize"
        data-venue-capitalization="uppercase"
        data-display-local-dates="true"
        data-local-dates-position="aboveUpcoming"
        data-display-past-dates="true"
        data-display-details="false"
        data-display-lineup="false"
        data-display-start-time="true"
        data-social-share-icon="false"
        data-display-limit="300"
        data-date-format="dddd, MMMM Do, YYYY"
        data-date-orientation="horizontal"
        data-date-border-color="#4A4A4A"
        data-date-border-width="1px"
        data-date-capitalization="capitalize"
        data-date-border-radius="10px"
        data-event-ticket-cta-size="medium"
        data-event-custom-ticket-text=""
        data-event-ticket-text="TICKETS"
        data-event-ticket-icon="false"
        data-event-ticket-cta-text-color="rgba(255,255,255,1)"
        data-event-ticket-cta-bg-color="rgba(74,74,74,1)"
        data-event-ticket-cta-border-color="rgba(74,74,74,1)"
        data-event-ticket-cta-border-width="0px"
        data-event-ticket-cta-border-radius="2px"
        data-sold-out-button-text-color="rgba(255,255,255,1)"
        data-sold-out-button-background-color="rgba(74,74,74,1)"
        data-sold-out-button-border-color="rgba(74,74,74,1)"
        data-sold-out-button-clickable="true"
        data-event-rsvp-position="hidden"
        data-event-rsvp-cta-size="medium"
        data-event-rsvp-only-show-icon="false"
        data-event-rsvp-text="RSVP"
        data-event-rsvp-icon="false"
        data-event-rsvp-cta-text-color="rgba(74,74,74,1)"
        data-event-rsvp-cta-bg-color="rgba(255,255,255,1)"
        data-event-rsvp-cta-border-color="rgba(74,74,74,1)"
        data-event-rsvp-cta-border-width="1px"
        data-event-rsvp-cta-border-radius="2px"
        data-follow-section-position="top"
        data-follow-section-alignment="center"
        data-follow-section-header-text="Get updates on new shows, new music, and more"
        data-follow-section-cta-size="medium"
        data-follow-section-cta-text="FOLLOW"
        data-follow-section-cta-icon="false"
        data-follow-section-cta-text-color="rgba(255,255,255,1)"
        data-follow-section-cta-bg-color="rgba(74,74,74,1)"
        data-follow-section-cta-border-color="rgba(74,74,74,1)"
        data-follow-section-cta-border-width="0px"
        data-follow-section-cta-border-radius="2px"
        data-play-my-city-position="bottom"
        data-play-my-city-alignment="center"
        data-play-my-city-header-text="Don't see a show near you?"
        data-play-my-city-cta-size="medium"
        data-play-my-city-cta-text="REQUEST A SHOW"
        data-play-my-city-cta-icon="false"
        data-play-my-city-cta-text-color="rgba(255,255,255,1)"
        data-play-my-city-cta-bg-color="rgba(74,74,74,1)"
        data-play-my-city-cta-border-color="rgba(74,74,74,1)"
        data-play-my-city-cta-border-width="0px"
        data-play-my-city-cta-border-radius="2px"
        data-optin-font=""
        data-optin-text-color=""
        data-optin-bg-color=""
        data-optin-cta-text-color=""
        data-optin-cta-bg-color=""
        data-optin-cta-border-width=""
        data-optin-cta-border-radius=""
        data-optin-cta-border-color=""
        data-language="en"
        data-layout-breakpoint="900"
        data-app-id="6e4679e5b2e492ff8f07b3e62cf54681"
        data-affil-code=""
        data-bit-logo-position="bottomRight"
        data-bit-logo-color="rgb(0, 0, 0)"
      ></a>
    </div>
  )
}