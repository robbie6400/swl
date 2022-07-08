import React, {useState, Component} from "react";
import HeadingText from "./HeadingText";
import Slideshow from "./Slideshow";
import ShowDates from "./ShowDates";
import YTvideos from "./YTvideos";
import SoundCloud from "./SoundCloud";
import EmailMe from "./EmailMe";
import Contact from "./Contact";
import './App.css';

function App() {
  const [showsDef, setShows] = useState(["show 1", "show 2"])
  return (
    <>
      <div className="Application">
        <HeadingText />
        {/*<Slideshow />*/}
        <ShowDates shows={showsDef} />
        <YTvideos />
        <SoundCloud />
        <EmailMe />
        <Contact />
      </div>
    </>
  )
}

export default App;
