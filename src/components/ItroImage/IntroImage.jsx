import './IntroImage.css';
import Image from '../../Assets/intro image.jpg';
import Noise from '../../Assets/Noise.svg';
import MagneticHover from '../MagneticHover';
import arrow from '../../Assets/arrow.svg';
import { lazy, useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function IntroImage(){


    
    const imgRef = useRef(null);

    useEffect(() => {
        let tl = gsap.timeline({
            scrollTrigger:{
                trigger: imgRef.current,
                start: '0% center',
                end: '60% center',
                toggleActions: 'play none none reverse',
                scrub: false,
                markers: false
            },
        })
        tl.fromTo(imgRef.current, {
            xPercent: -100,
            yPercent: -50,
            opacity: 0,
            rotate: 90,
        },{
            xPercent: 0,
            yPercent: 0,
            rotate: 0,
            opacity: 1,
            duration: 3,
            ease: "elastic.out(1,0.5)",

        }, 0)
    },[])

    return(
        <div className='relative flex flex-col w-fit'>
            <div ref={imgRef} className='INTRO_IMAGE_CONTAINER relative h-[480px] w-[405px] mx-3 bg-no-repeat overflow-hidden'>
                <img src={Image} alt="image" className='INTRO_IMAGE relative rounded-[52px]'/>
                <img src={Noise} className=' rounded-[52px] absolute top-0 bottom-0 left-0 right-0' />
            </div>

            <MagneticHover >
            <a href='mailto:shubhanshsharma030604@gmail.com' className='reveal group absolute font-light w-[286px]  px-8 py-4 rounded-[37px] -top-16 left-[60px]'>
                Open to New Opportunities
                <img src={arrow} alt='arrow' loading={lazy} className='absolute group-hover:rotate-[40deg] duration-500 w-4 mix-blend-difference right-[16px] top-[23px] ' />
            </a>
            </MagneticHover>
        </div>
    )
}