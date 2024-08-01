import { useEffect, useState } from 'react';
import './Navbar.css';
import {gsap, Power2} from 'gsap';

export default function Navbar(){

    const [navAnimaion, setNavAnimation] = useState([true,true,true]);




    useEffect(() => {
        
        gsap.to('.NAV_BUTTON_MOVE_RIGHT0, .NAV_BUTTON_MOVE_RIGHT1, .NAV_BUTTON_MOVE_RIGHT2',{
            xPercent: -100,
            duration: 0.01
        }
    )
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
        <div className="FIRA relative  w-[350px] flex flex-row group  justify-between" >

            <div className='NAV_BUTTONS CURSOR_SCALE_DOWN relative w-fit px-3 py-1 overflow-clip ' 
            onMouseEnter={() => handleButtonHover(0)} 
            onMouseLeave={() => handleButtonHover(0)}>
                <span>About Me</span>
                <div className='NAV_BUTTON_MOVE_RIGHT0 h-0 w-full border-b-[1px] border-black absolute left-0  bottom-0 rounded-full'></div>
                {/* <div className='NAV_BUTTON_MOVE_DOWN0 w-0 h-[70%] border-r-[1px] border-black absolute left-0 bottom-0 rounded-full '></div> */}
            </div>

            <div className='NAV_BUTTONS CURSOR_SCALE_DOWN relative w-fit px-3 py-1 overflow-clip ' 
            onMouseEnter={() => handleButtonHover(1)} 
            onMouseLeave={() => handleButtonHover(1)}>
                <span>Work</span>
                <div className='NAV_BUTTON_MOVE_RIGHT1 h-0 w-full border-b-[1px] border-black absolute left-0  bottom-0 rounded-full'></div>
            </div>

            <div className='NAV_BUTTONS CURSOR_SCALE_DOWN relative w-fit px-3 py-1 overflow-clip ' 
            onMouseEnter={() => handleButtonHover(2)} 
            onMouseLeave={() => handleButtonHover(2)}>
                <span>Contact</span>
                <div className='NAV_BUTTON_MOVE_RIGHT2 h-0 w-full border-b-[1px] border-black absolute left-0  bottom-0 rounded-full'></div>
            </div>

        </div>
    )
}