import './App.css';
import BigName from './components/BigName/BigName';
import Home from './components/Home/Home';
import HomeImage from './components/HomeImage/HomeImage';
import IntroPage from './components/InroPage/IntroPage';
import Marquee from './components/Marquee/Marquee';
import Navbar from './components/Navbar/Navbar';
import SelectedWork from './components/Selected Work/SelectedWork';
import CurrentTime from './components/Time/Time';
import React from "react";
import AnimatedCursor from "react-animated-cursor";


function App() {
  return (
    <div className="App bg-[#FAF9F6] relative flex flex-col min-h-screen scroll-smooth overflow-x-clip">

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
      <div className=''>
        <Home />
      </div>

      <div className=' relative '>
        <Marquee />
      </div>
      <div>
        <IntroPage />
      </div>
      <div className=' mt-28'>
        <SelectedWork />
      </div>
    </div>
  );
}

export default App;
