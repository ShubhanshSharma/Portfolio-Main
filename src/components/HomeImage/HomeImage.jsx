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

        // let homeImageLoad = gsap.timeline();

        // homeImageLoad.from('.HOME_IMAGE_CONTAINER',{
        //     yPercent: -100,
        // })
    })

    return(

        <Tilt tiltReverse={false}>
        <div className='HOME_IMAGE_CONTAINER relative aspect-square overflow-hidden w-[400px]'>
            <img className="HOME_IMAGE  w-[400px] object-cover" src='https://imgur.com/arNqmj9.jpg' alt="" />
        </div>
        </Tilt>
    )
}