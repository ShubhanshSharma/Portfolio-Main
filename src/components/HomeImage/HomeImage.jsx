import './HomeImage.css';
import React, { useEffect } from "react";
import Tilt from 'react-parallax-tilt';
import gsap from "gsap";



export default function HomeImage(){

    useEffect(() => {
        gsap.fromTo('.HOME_IMAGE',{
            opacity: 1,
            yPercent: -100,
            scale: 1
        },{
            opacity: 1,
            yPercent: 0,
            scale: 1,
            duration: 2,
            delay: 2,
            ease: "expo.out",
        })
        const tl = gsap.timeline({                
            scrollTrigger:{
                trigger: '.HOME_IMAGE_CONTAINER',
                start: 'center center',
                end: '130% center',
                toggleActions: 'play none none reverse',
                scrub: 1,
                markers: false
            },
            
        })

        tl.fromTo('.HOME_IMAGE',{
            y: 0,

        },{
            y: 60,
            ease: 'power1'
        })
    })

    return(

        <Tilt tiltReverse={false}>
        <div className='HOME_IMAGE_CONTAINER relative overflow-hidden w-[400px]'>
            <img className="HOME_IMAGE " width={'500px'} src='https://imgur.com/arNqmj9.jpg' alt="" />
        </div>
        </Tilt>
    )
}