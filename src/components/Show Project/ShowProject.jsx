import { lazy } from 'react';
import arrow from '../../Assets/arrow black.svg';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ShowProject(props){

    let side = props.side;
    let content = props.content;
    let git = props.git;
    let H1 = props.H1;
    let H2 = props.H2;
    let H1Font = props.H1Font;
    let H2Font = props.H2Font;
    let H1Color = props.H1Color;
    let H2Color = props.H2Color;
    let IMAGE = props.IMAGE;
    let height = props.height;
    let width = props.width

    const imgRef = useRef(null);
    const parallaxTrigger =useRef(null);
    const textRef =useRef(null);
    const headingRef =useRef(null);

    useEffect(() => {
        
            const tl = gsap.timeline({                
                scrollTrigger:{
                    trigger: imgRef.current,
                    start: 'top 90%',
                    end: 'bottom 90%',
                    toggleActions: 'play none none reverse ',
                    scrub: false,
                    markers: false
                },
                
            })

            tl.fromTo(imgRef.current, {
                xPercent: side=='right'? 100 : -100,
                scale: 0.6
            },{
                xPercent: 0,
                scale: 1,
                duration: 2,
                ease: 'power4.out',
            })

            const tl2 = gsap.timeline({                
                scrollTrigger:{
                    trigger: parallaxTrigger.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 0,
                    markers: false
                },
                
            })
            const tl3 = gsap.timeline({                
                scrollTrigger:{
                    trigger: textRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 0,
                    markers: false
                },
                
            })

            tl2.fromTo(headingRef.current,{y: 380, mixBlendMode: 'difference'}, {y: -60, mixBlendMode: 'difference'}, 0);
            tl3.fromTo(textRef.current,{y: 0}, {y: -220,});
        
    },[])

    if(side == 'right'){
        return(
            
            <div ref={parallaxTrigger} className=" relative flex flex-row-reverse items-center justify-between w-screen h-screen">

                {/* Image absolute */}
                <img loading={lazy} ref={imgRef} src={`${IMAGE}.jpg`} alt='pic' style={{height: `${height}px`}}
                    className=" rounded-3xl relative object-contain my-auto place-self-end"
                />
                <div ref={headingRef} className="absolute left-[120px] text-[142px] top-[100px] flex flex-row">
                    <div style={{fontWeight:`${H1Font}` , color:`#${H1Color}`, mixBlendMode:'difference'}}>{H1}</div>
                    <div style={{fontWeight:`${H2Font}` , color:`#${H2Color}`, mixBlendMode:'difference'}}>{H2}</div>
                </div>

                <div ref={textRef} className="WORK_TEXT absolute flex flex-col justify-between lg:left-[10vw] lg:mt-[40dvh]">                 

                    <p className=" w-[250px] text-[16px] mt-[100px] font-normal text-left">{content}</p>

                    <a href={git} target="_blank" className='group relative w-fit mt-12 flex flex-row gap-1 justify-between'>
                        <span>Visit</span>
                        <img loading={lazy} src={arrow}   className='relative  -mb-1  group-hover:rotate-[40deg] duration-500 w-4 ' />
                    </a>
                </div>
            </div>
        )
    }else{
        return(
            
            <div ref={parallaxTrigger} className=" relative flex flex-row items-center  w-screen h-screen">

                {/* Image absolute */}
                <img loading={lazy} ref={imgRef} src={`${IMAGE}.jpg`} alt='pic'  style={{height: `${height}px`}}
                    className=" rounded-3xl relative object-contain my-auto place-self-start"
                />

                <div ref={headingRef} className="absolute right-[120px] text-[142px]  flex flex-row top-[100px]">
                    <div style={{fontWeight:`${H1Font}` , color:`#${H1Color}`, mixBlendMode:'difference'}}>{H1}</div>
                    <div style={{fontWeight:`${H2Font}` , color:`#${H2Color}`, mixBlendMode:'difference'}}>{H2}</div>
                </div>

                <div ref={textRef} className="WORK_TEXT absolute flex flex-col justify-between lg:mt-[46dvh] right-[10vw] h-auto  gap-8">
                    
                    <p className=" relative w-[250px]  text-[16px] font-normal text-left">{content}</p>
                     
                    <a href={git} target="_blank" className='group relative w-fit flex flex-row gap-1 justify-between'>
                        <span>Visit</span>
                        <img loading={lazy} src={arrow}   className='relative -mb-1 text-black group-hover:rotate-[40deg] duration-500 w-4' />
                    </a>
                     
                </div>
            </div>
        )
    }
}