import './App.css';
import Home from './components/Landing/Landing';
import React, { useEffect } from "react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import HomePage from './components/Home/Home';
gsap.registerPlugin(ScrollTrigger);

function App() {

  return (
    <div className="App bg-[#FAF9F6] relative flex flex-col min-h-screen scroll-smooth overflow-x-clip">

      <HomePage />

      
    </div>
  );
}

export default App;
