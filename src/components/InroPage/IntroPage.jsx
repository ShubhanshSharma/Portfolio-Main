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

    // useEffect(() => {
    //     let tl = gsap.timeline({
    //         scrollTrigger:{
    //             trigger: imgRef.current,
    //             start: 'bottom 90%',
    //             end: 'bottom 90%',
    //             toggleActions: 'play none none reverse ',
    //             scrub: false,
    //             markers: false
    //         },
    //     })
    //     tl.fromTo(imgRef.current, {
    //         xPercent: -100,
    //         yPercent: -50,
    //         opacity: 0,
    //         rotate: 90,
    //     },{
    //         xPercent: 0,
    //         yPercent: 0,
    //         rotate: 0,
    //         opacity: 1,
    //         duration: 1,
    //         ease: 'back.out(2)'
    //     }, 0)
    // },[])

    return(
        <div className="relative flex flex-col w-screen min-h-screen h-fit">
            
            <div className=" relative h-fit w-fit ml-32 mt-16">
                <HeadingBig content='Intro' size={144} width='auto' />
            </div>

            {/* BIG PARA IN INTRO SECTION */}
            <div className='relative mt-[0px]  ml-[810px] w-[500px] h-[500px]  flex flex-col justify-between text-left'>
                <div className="INTRO_PARA_CONTAINER relative text-[42px] pb-[0px] font-light  leading-10"
                    onMouseEnter={() => setIntroParaHover(true)} onMouseLeave={() => setIntroParaHover(false)}   >
                    <span className='INTRO_RED_TEXT'>MERN </span>
                    <span className='BLUR'>Stack </span>Developer
                    <span className='BLUR'> with </span>Designing <span className='BLUR'>skills crafting immersive digital experiences that combine </span>
                    User-<span className='INTRO_RED_TEXT'>X</span><span className='BLUR'> and </span>Functionality
                </div>

                
                <div className=' relative text-left font-light w-[300px]'>
                    Initially starting as MERN stack Developer and transitioning to creative developer helps me create visually aesthetic and modern websites
                </div>

                <div className=' relative text-left font-light  w-[300px]'>
                    Currently available for Freelance Projects
                </div>
            </div>

            {/* Intro Image */}
            <div  className=' relative w-min ml-[124px] mt-[-354px]'
                onMouseEnter={() => setIntroParaHover(true)} onMouseLeave={() => setIntroParaHover(false)}  >
                <IntroImage />
            </div>
        </div>
    )
}