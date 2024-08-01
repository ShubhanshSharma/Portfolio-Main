
import IntroPage from '../InroPage/IntroPage';
import Marquee from '../Marquee/Marquee';
import SelectedWork from '../Selected Work/SelectedWork';
import React, { useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Landing from '../Landing/Landing';
import Footer from '../Footer/Footer';
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
    <div className="home bg-[#FAF9F6] relative flex flex-col min-h-screen scroll-smooth overflow-x-clip">

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
      <div className=' relative'>
        <Landing />
      </div>

      <div className=' relative '>
        <Marquee />
      </div>
      <div className=' relative mt-28'>
        <IntroPage />
      </div>
      <div className='SELECTED_WORK_REVEAL relative'>
        <SelectedWork />
      </div>

      <div className=' relative'>
        <Footer />
      </div>

      
    </div>
  );
}

