import './App.css';
import Home from './components/Landing/Landing';
import React, { useEffect } from "react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import HomePage from './components/Home/Home';
import AnimatedCursor from 'react-animated-cursor';
import Navbar from './components/Navbar/Navbar';
gsap.registerPlugin(ScrollTrigger);

function App() {

  return (
    <div className="App bg-[#FAF9F6] relative flex flex-col items-center min-h-screen scroll-smooth overflow-x-clip">

    <AnimatedCursor
        trailingSpeed={6}
        innerSize={6}
        outerSize={29}
        color='255,20,55'
        outerAlpha={1}
        innerScale={0.7}
        outerScale={0.2}
        outerStyle={{
          mixBlendMode: 'exclusion',
        }}  
        innerStyle={{
          mixBlendMode: 'exclusion'
        }}    
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
          '.CURSOR_SCALE_DOWN',
          {
            target: '.custom',
            options: {
              innerSize: 6,
              outerSize: 19,
              color: '255, 87,87',
              outerAlpha: 1,
              innerScale: 0.7,
              outerScale: 15
            }
          }
        ]}
      />
        
      <Navbar />


      <HomePage />

      
    </div>
  );
}

export default App;
