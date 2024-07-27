import './HomeImage.css';
import React, { useEffect } from "react";
import Tilt from 'react-parallax-tilt';
import gsap from "gsap";



export default function HomeImage(){

    useEffect(() => {
        gsap.fromTo('.HOME_IMAGE_CONTAINER',{
            opacity: 0,
            yPercent: -30,
            scale: 1.3
        },{
            opacity: 1,
            yPercent: 0,
            scale: 1,
            duration: 2,
            delay: 2,
            ease: "expo.out",
        })

        // let homeImageLoad = gsap.timeline();

        // homeImageLoad.from('.HOME_IMAGE_CONTAINER',{
        //     yPercent: -100,
        // })
    })

    return(

        <Tilt tiltReverse={true}>
        <div className='HOME_IMAGE_CONTAINER relative w-fit overflow-clip'>
            <img className="HOME_IMAGE rounded-2xl w-[400px]" src='https://imgur.com/arNqmj9.jpg' alt="" />
        </div>
        </Tilt>
    )
}