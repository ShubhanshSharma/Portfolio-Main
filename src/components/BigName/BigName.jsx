import './BigName.css';
import { useEffect, useRef} from "react";
import {gsap,} from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function BigName(){

  const NameText = useRef(null);
  const word2 = useRef(null);
  const word1 = useRef(null);



    useEffect(() => {

        const tl = gsap.timeline({                
            scrollTrigger:{
                trigger: NameText.current,
                start: 'top 140px',
                end: '70% 140px',
                toggleActions: 'play none none reverse',
                scrub: 1,
                markers: false
            },
            
        })

        tl.to(NameText.current,{
            scale: 0.3,
            duration: 1,
            ease: 'power1.inOut',
            top: '40px',
            left: window.innerWidth<1200? '0' :'-20%',
        })

        let tl2 = gsap.timeline();
        tl2.fromTo('.word', {
            xPercent: 100,
            opacity: 0,
        },
        {
            xPercent: 0,
            opacity:1,
            duration: 1,
            ease: 'power2.out',
            stagger:{
                each:0.08
            },
            delay:1
        })

        
    },[])


    return(
        <a href='#home' ref={NameText} className="absolute top-[260px] z-10  left-[100px] font-bold flex  flex-row gap-11 w-fit">
            <div ref={word1} className='BIG_NAME  h-fit tracking-tighter text-[109px] relative flex flex-row '>
                {
                    '~Shubhansh'.split('').map((word) => {
                        return word === '' ? <div className='word'>&nbsp;</div> : <div className='word  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent'>{word}</div>
                    })
                }
            </div>
            <div ref={word2} className='BIG_NAME  h-fit tracking-tighter text-[109px]  relative flex flex-row '>
                {
                    'Sharma'.split('').map((word) => {
                        return word === '' ? <div className='word'>&nbsp;</div> : <div className='word hidden xl:block bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent'>{word}</div>
                    })
                }
            </div>
        </a>
    )
}