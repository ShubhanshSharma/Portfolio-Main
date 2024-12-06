import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";




export default function Marquee(){

    const firstText = useRef(null);
    const secondText = useRef(null);
    const slider = useRef(null);
    let xPercent = 0;
    let direction = 1;
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        requestAnimationFrame(animation);

        gsap.to(slider.current,{
            scrollTrigger:{
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                scrub: 1,
                onUpdate: e => direction = e.direction * -1
            },
            x: '-=500px',
        })
    },[]);

    const animation = () => {
        if(xPercent <= -100){
            xPercent = 0;
        }
        if(xPercent >0){
            xPercent = -100;
        }
        gsap.set(firstText.current,{xPercent: xPercent});
        gsap.set(secondText.current,{xPercent: xPercent});
        xPercent += 0.07 *direction;
        requestAnimationFrame(animation);
    }

    return(
        <div className="sliderContainer relative w-screen h-fit">
            <div ref={slider} className="slider relative w-max text-[140px] text-[#faf9f6] mix-blend-difference flex flex-row">
                <p ref={firstText}><span className=" font-extrabold text-[#05E5BF]">~MERN</span> Developer ~ M.Tech-<span className=" font-extrabold text-[rgb(255,20,55)]">IT</span> </p>
                <p ref={secondText}><span className=" font-extrabold text-[#05E5BF]">~MERN</span> Developer ~ M.Tech-<span className=" font-extrabold text-[rgb(255,20,55)]">IT</span> </p>
            </div>
        </div>
    )
}