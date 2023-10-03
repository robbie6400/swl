import React, {useState, Component} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Shows from "./pages/Shows";
import ShowSubmit from "./pages/ShowSubmit";
import './css/App.css';

function App() {
  return (
    <div className="Application">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/shows" element={<Shows/>} />
              <Route path="/ShowSubmit" element={<ShowSubmit/>} />
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;
