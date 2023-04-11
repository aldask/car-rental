import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <header>
        <div className='headerSide1'>
          <a href='#'><img src='somerandompic.png' alt='logo'></img></a>
        </div>
        <div className='headerSide2'>
          <a href='home'>Home</a>
          <a href='home'>Home</a>
          <a href='home'>Home</a>
          <a href='home'>Home</a>
        </div>
      </header>
      <div className='mainContainer'>
        <div className='firstContainer'>
          <h1 className='welcomeHeader'>Welcome to TypeO</h1>
          <p className='welcomeText'>Lorem ipsum dolor sit amet, 
          consectetur adipisicing elit. Corporis nostrum deleniti asperiores 
          impedit! Ratione libero tempore magni facilis officiis cum odit laboriosam consectetur 
          illo accusantium iure quam maxime, non architecto!</p>
        </div>
      </div>
    </>
  );
}

export default App;
