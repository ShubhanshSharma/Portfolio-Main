import { useEffect, useState } from 'react';
import './Navbar.css';
import {gsap, Power2} from 'gsap';
import BigName from '../BigName/BigName';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Navbar(){

    const [navAnimaion, setNavAnimation] = useState([true,true,true]);
    const [NavbarHover, setNavbarHover] = useState(true);

    useEffect(() => {

        if(window.scrollY > 300){
            gsap.to('.FIRA',{
                paddingBottom: NavbarHover? 8 : 50,
                duration: 0.5,
                ease: 'power2.inOut'
            })
        }
    },[NavbarHover])

    useEffect(() => {
        const navtl = gsap.timeline({
            scrollTrigger:{
                trigger: '.FIRA',
                start: '400px top',
                end: '400px top',
                toggleActions: 'play none none reverse',
                scrub: 1,
                markers: false
            },
        });

        
        navtl.to('.FIRA', {
            paddingBottom: 50,
            duration: 0.5,
            ease: 'power1.inOut'
        })

        gsap.to('.NAV_BUTTON_MOVE_RIGHT0, .NAV_BUTTON_MOVE_RIGHT1, .NAV_BUTTON_MOVE_RIGHT2',{
            xPercent: -100,
            duration: 0.01
        })

    },[])

    const handleButtonHover = (index) => {
        setNavAnimation((prevAnimation) => {
          const updatedAnimation = [...prevAnimation];
          updatedAnimation[index] = !prevAnimation[index];
          return updatedAnimation;
        });

        gsap.fromTo(`.NAV_BUTTON_MOVE_RIGHT${index}`,{
            xPercent: navAnimaion[index]? -100: 0
        },{
            xPercent: navAnimaion[index]?0: 100,
            duration: 1.5,
            ease: 'power4.out'
        })
    };
    



    return(
        <div style={{mixBlendMode:'difference'}} className="FIRA fixed h-[150px] rounded-full items-end mt-[-100px] z-[3] pb-2 w-11/12 flex flex-row group justify-end  gap-16 lg:px-32"
            onMouseEnter={() => setNavbarHover(true)} onMouseLeave={() => setNavbarHover(false)} >

            <a href='https://www.youtube.com/playlist?list=PLG3Op_4yeGuAVG9M8RGPxHNwaJT3U1V0E' className='NAV_BUTTONS CURSOR_SCALE_DOWN mix-blend-difference text-neutral-100 relative w-fit px-3 py-1 overflow-clip ' 
                onMouseEnter={() => handleButtonHover(0)} 
                onMouseLeave={() => handleButtonHover(0)}>
                <span>Data Science</span>
                <div className='NAV_BUTTON_MOVE_RIGHT0 h-0 w-full border-b-[1px] border-neutral-50 absolute left-0  bottom-0 rounded-full'></div>
                {/* <div className='NAV_BUTTON_MOVE_DOWN0 w-0 h-[70%] border-r-[1px] border-neutral-50 absolute left-0 bottom-0 rounded-full '></div> */}
            </a>

            <a href='#about' className='NAV_BUTTONS CURSOR_SCALE_DOWN mix-blend-difference text-neutral-100 relative w-fit px-3 py-1 overflow-clip ' 
            onMouseEnter={() => handleButtonHover(0)} 
            onMouseLeave={() => handleButtonHover(0)}>
                <span>About Me</span>
                <div className='NAV_BUTTON_MOVE_RIGHT0 h-0 w-full border-b-[1px] border-neutral-50 absolute left-0  bottom-0 rounded-full'></div>
                {/* <div className='NAV_BUTTON_MOVE_DOWN0 w-0 h-[70%] border-r-[1px] border-neutral-50 absolute left-0 bottom-0 rounded-full '></div> */}
            </a>

            <a href='#work' className='NAV_BUTTONS CURSOR_SCALE_DOWN mix-blend-difference text-neutral-100 relative w-fit px-3 py-1 overflow-clip ' 
            onMouseEnter={() => handleButtonHover(1)} 
            onMouseLeave={() => handleButtonHover(1)}>
                <span>Work</span>
                <div className='NAV_BUTTON_MOVE_RIGHT1 h-0 w-full border-b-[1px] border-neutral-50 absolute left-0  bottom-0 rounded-full'></div>
            </a>

            <a href='#contact' className='NAV_BUTTONS CURSOR_SCALE_DOWN mix-blend-difference text-neutral-100 relative w-fit px-3 py-1 overflow-clip ' 
            onMouseEnter={() => handleButtonHover(2)} 
            onMouseLeave={() => handleButtonHover(2)}>
                <span>Contact</span>
                <div className='NAV_BUTTON_MOVE_RIGHT2 h-0 w-full border-b-[1px] border-neutral-50 absolute left-0  bottom-0 rounded-full'></div>
            </a>

            <BigName />

        </div>
    )
}