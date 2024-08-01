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

        const context = gsap.context(() => {
            const tl = gsap.timeline({                
                scrollTrigger:{
                    trigger: NameText.current,
                    start: 'top 180px',
                    end: '140% top',
                    scrub: 0,
                    markers: false
                },
                
            })

            tl.fromTo(word1.current,{y: 20}, {y: -60}, 0);
            tl.fromTo(word2.current,{y: 20}, {y: -60}, 0);
        })

        let tl2 = gsap.timeline();
        tl2.fromTo('.word', {
            yPercent: 100,
            
        },
        {
            yPercent: 0,
            opacity:1,
            duration: 1,
            ease: "elastic.out(1,0.75)",
            stagger:{
                each:0.1
            },
            delay:1
        })

        
    },[])


    return(
        <div ref={NameText} className="relative flex flex-row gap-11 w-fit">
            <div ref={word1} className='BIG_NAME  h-fit tracking-tighter z-10 text-[109px] font-normal relative flex flex-row '>
                {
                    'Shubhansh'.split('').map((word) => {
                        return word === '' ? <div className='word'>&nbsp;</div> : <div className='word'>{word}</div>
                    })
                }
            </div>
            <div ref={word2} className='BIG_NAME  h-fit tracking-tighter z-10 text-[109px] font-normal  relative flex flex-row '>
                {
                    'Sharma'.split('').map((word) => {
                        return word === '' ? <div className='word'>&nbsp;</div> : <div className='word'>{word}</div>
                    })
                }
            </div>
        </div>
    )
}