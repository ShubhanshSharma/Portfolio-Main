
// import './Home.css';
import BigName from '../BigName/BigName';
import HomeImage from '../HomeImage/HomeImage';
import Navbar from '../Navbar/Navbar';
import CurrentTime from '../Time/Time';
import React, { useRef } from "react";
import AnimatedCursor from "react-animated-cursor";


function Landing() {


  return (
    <div className="Landing relative align-middle bg-[#FAF9F6] w-full flex min-h-screen">
      

      <div className='CURSOR_SCALE_UP custom absolute top-20 left-[100px]'>
        <CurrentTime />
      </div>

      <div className=' LANDING_TEXT pointer-events-none flex flex-col justify-end gap-20 w-auto top-[180px] h-[400px] absolute left-[220px]'>
        {/* <BigName /> */}
        <div className=' relative w-[270px] font-light text-left'>
          Developer and designer working 
          independently as a creative crafting
          immersive website from India
        </div>

        <p className=' relative w-[90px] font-light text-left'>Based In 
          Indore, India</p>

      </div>


      <div className=' absolute right-[220px] top-[180px]'>
        <HomeImage />
      </div>
    </div>
  );
}

export default Landing;
