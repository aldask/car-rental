import React from 'react';
import "../src/styles/Global/global-style.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Vehicles from "./pages/Vehicles";
import OurTeam from "./pages/OurTeam";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/vehicles' element={<Vehicles />} />
        <Route path='/ourteam' element={<OurTeam />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
