
import IntroPage from '../InroPage/IntroPage';
import Marquee from '../Marquee/Marquee';
import SelectedWork from '../Selected Work/SelectedWork';
import React, { useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Landing from '../Landing/Landing';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {

  useEffect(() =>{
    const revealElements = document.querySelectorAll('.reveal');

  revealElements.forEach(element => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: false,
        toggleActions: 'play none none reverse',
        markers: false,
      }
    });

    tl.fromTo(element, {
      yPercent: 100,
      opacity: 0.2,
    }, {
      yPercent: 0,
      opacity: 1,
      duration: 1,
      stagger: true,
      ease: 'power2.out'
    });

  });

  },[])
  return (
    <div id='home' className="home bg-[#FAF9F6] relative flex flex-col items-center min-h-screen scroll-smooth overflow-x-clip">



        <Landing />

      <div  className=' relative '>
        <Marquee />
      </div>
      <div id='about' className=' relative mt-28'>
        <IntroPage />
      </div>
      <div id='work' className='SELECTED_WORK_REVEAL relative'>
        <SelectedWork />
      </div>

      <div id='contact' className=' relative'>
        <Footer />
      </div>

      
    </div>
  );
}

