import './IntroPage.css';
import HeadingBig from "../Heading";
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import IntroImage from '../ItroImage/IntroImage';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function IntroPage(){

    const [IntroParaHover, setIntroParaHover] = useState(false);

    useEffect(() => {
        gsap.to('.BLUR',{
            opacity: IntroParaHover? 0.1 : 1,
            duration: 0.5,
            ease: 'power2.inOut'
        })
    },[IntroParaHover])


    return(
        <div className="relative flex flex-col w-screen h-[150dvh]">
            
            <div className=" relative h-fit w-fit ml-32 mt-16">
                <HeadingBig content='Intro' size={144} width='auto' />
            </div>

            {/* BIG PARA IN INTRO SECTION */}
            <div className='relative mt-[180px]  ml-[810px] w-[500px] flex flex-col justify-between text-left'>
                <div className="INTRO_PARA_CONTAINER reveal relative text-[42px] pb-[0px] font-light  leading-10"
                    onMouseEnter={() => setIntroParaHover(true)} onMouseLeave={() => setIntroParaHover(false)}   >
                    <span className='INTRO_RED_TEXT'>MERN </span>
                    <span className='BLUR'>Stack </span>Developer
                    <span className='BLUR'> with </span>Designing <span className='BLUR'>skills crafting immersive digital experiences that combine </span>
                    User-<span className='INTRO_RED_TEXT'>X</span><span className='BLUR'> and </span>Functionality
                </div>

                
                <div className=' reveal relative text-left font-light w-[300px] mt-[40px]'>
                    Initially starting as MERN stack Developer and transitioning to creative developer helps me create visually aesthetic and modern websites
                </div>

                <div className='reveal relative text-left font-light  w-[300px] mt-[40px]'>
                    Currently available for Freelance Projects
                </div>
            </div>

            {/* Intro Image */}
            <div  className=' relative w-min ml-[124px] top-[-394px]'
                onMouseEnter={() => setIntroParaHover(true)} onMouseLeave={() => setIntroParaHover(false)}  >
                <IntroImage />
            </div>
        </div>
    )
}