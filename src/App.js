import React, {useState, Component} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HeadingText from "./HeadingText";
import Slideshow from "./Slideshow";
import ShowDates from "./ShowDates";
import YTvideos from "./YTvideos";
import SoundCloud from "./SoundCloud";
import EmailMe from "./EmailMe";
import Contact from "./Contact";
import Home from "./Home";
import Shows from "./Shows";
import './App.css';

function App() {
  return (
    <>
      <div className="Application">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/shows" element={<Shows/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App;
