import { useEffect, useRef, useState } from "react";
import MagneticHover from "../MagneticHover";



export default function Footer(){

    const hatRef = useRef(null);
    
   

    return(
        <>
        <div className=" w-screen h-[95dvh] relative text-white bg-[#0E0E0D] ">

            <div className=" relative flex flex-col  w-fit text-left ml-[35px] pt-[70px]">
                <p className=" relative opacity-60 text-[50px]">Interested in working with me?</p>
                <p className=" relative text-[50px] w-[700px] leading-[58px] mt-[25px]">Together, we hold the power to build the world we envision</p>
                
                <p className="-text-semibold  relative opacity-70 font-light mt-[160px]">send a message</p>
                <MagneticHover>
                    <a href='mailto:shubhanshsharma030604@gmail.com' 
                    className="-text-semibold  relative font-light w-min">shubhanshsharma030604@gmail.com</a>
                </MagneticHover>
            </div>

            <div className=" absolute  top-[80px] z-10 right-[60px] flex-col text-left">
                <p className=" opacity-70">22° 40' 52.1" N / 75° 50'12.1" E</p>
                <p className="-text-semibold ">Remote from INDIA</p>
            </div>

            <div className=" absolute right-[200px] z-10 top-[300px] text-left flex flex-col font-extralight gap-4">
                <a className=" group relative w-fit flex gap-2 items-baseline flex-row h-fit overflow-clip"
                    >
                    <svg className=" group-hover:rotate-[40deg] duration-500 relative" width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g style={{mixBlendMode: 'difference'}}>
                            <path d="M9.64714 1.17975C9.6288 0.954586 9.35655 0.793016 9.03905 0.818874L3.86513 1.24026C3.54764 1.26612 3.30512 1.46961 3.32346 1.69478C3.3418 1.91994 3.61404 2.08152 3.93154 2.05566L8.53058 1.68109L8.79622 4.94268C8.81456 5.16785 9.08681 5.32942 9.4043 5.30356C9.7218 5.2777 9.96432 5.07421 9.94598 4.84904L9.64714 1.17975ZM1.42998 8.25518L9.50224 1.48175L8.64228 0.971393L0.570019 7.74482L1.42998 8.25518Z" fill="white"/>
                        </g>
                    </svg>
                    <span>Linkedin</span>
                </a>

                <a className=" group relative w-fit flex gap-2 items-baseline flex-row h-fit overflow-clip"
                    >
                    <svg className=" group-hover:rotate-[40deg] duration-500 relative" width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g style={{mixBlendMode: 'difference'}}>
                            <path d="M9.64714 1.17975C9.6288 0.954586 9.35655 0.793016 9.03905 0.818874L3.86513 1.24026C3.54764 1.26612 3.30512 1.46961 3.32346 1.69478C3.3418 1.91994 3.61404 2.08152 3.93154 2.05566L8.53058 1.68109L8.79622 4.94268C8.81456 5.16785 9.08681 5.32942 9.4043 5.30356C9.7218 5.2777 9.96432 5.07421 9.94598 4.84904L9.64714 1.17975ZM1.42998 8.25518L9.50224 1.48175L8.64228 0.971393L0.570019 7.74482L1.42998 8.25518Z" fill="white"/>
                        </g>
                    </svg>
                    <span>Github</span>
                </a>

                <a className=" group relative w-fit flex gap-2 items-baseline flex-row h-fit overflow-clip"
                    >
                    <svg className=" group-hover:rotate-[40deg] duration-500 relative" width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g style={{mixBlendMode: 'difference'}}>
                            <path d="M9.64714 1.17975C9.6288 0.954586 9.35655 0.793016 9.03905 0.818874L3.86513 1.24026C3.54764 1.26612 3.30512 1.46961 3.32346 1.69478C3.3418 1.91994 3.61404 2.08152 3.93154 2.05566L8.53058 1.68109L8.79622 4.94268C8.81456 5.16785 9.08681 5.32942 9.4043 5.30356C9.7218 5.2777 9.96432 5.07421 9.94598 4.84904L9.64714 1.17975ZM1.42998 8.25518L9.50224 1.48175L8.64228 0.971393L0.570019 7.74482L1.42998 8.25518Z" fill="white"/>
                        </g>
                    </svg>
                    <span>Twitter</span>
                </a>

                <a className=" group relative w-fit flex gap-2 items-baseline flex-row h-fit overflow-clip"
                    >
                    <svg className=" group-hover:rotate-[40deg] duration-500 relative" width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g style={{mixBlendMode: 'difference'}}>
                            <path d="M9.64714 1.17975C9.6288 0.954586 9.35655 0.793016 9.03905 0.818874L3.86513 1.24026C3.54764 1.26612 3.30512 1.46961 3.32346 1.69478C3.3418 1.91994 3.61404 2.08152 3.93154 2.05566L8.53058 1.68109L8.79622 4.94268C8.81456 5.16785 9.08681 5.32942 9.4043 5.30356C9.7218 5.2777 9.96432 5.07421 9.94598 4.84904L9.64714 1.17975ZM1.42998 8.25518L9.50224 1.48175L8.64228 0.971393L0.570019 7.74482L1.42998 8.25518Z" fill="white"/>
                        </g>
                    </svg>
                    <span>Instagram</span>
                </a>
            </div>

            

            <div className=" absolute bottom-1 text-[12px] w-full flex flex-row justify-between items-baseline font-extralight pl-[35px] pr-[120px]">
                <span className=" flex items-baseline gap-1">Copyrights 
                    <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.5 0C4.4122 0 3.34884 0.26392 2.44437 0.758387C1.5399 1.25285 0.834947 1.95566 0.418665 2.77792C0.00238306 3.60019 -0.106535 4.50499 0.105683 5.37791C0.317902 6.25082 0.841726 7.05264 1.61091 7.68198C2.3801 8.31131 3.36011 8.7399 4.427 8.91353C5.4939 9.08716 6.59977 8.99805 7.60476 8.65746C8.60975 8.31686 9.46874 7.74009 10.0731 7.00006C10.6774 6.26004 11 5.39001 11 4.5C10.9985 3.30691 10.4185 2.16305 9.38739 1.31941C8.35627 0.47577 6.95822 0.00125992 5.5 0ZM5.5 8.30769C4.57956 8.30769 3.67978 8.08437 2.91446 7.66598C2.14914 7.24758 1.55265 6.6529 1.20041 5.95714C0.84817 5.26137 0.756009 4.49578 0.935578 3.75716C1.11515 3.01854 1.55838 2.34007 2.20924 1.80755C2.86009 1.27504 3.68932 0.912392 4.59208 0.765471C5.49484 0.618551 6.43057 0.693956 7.28095 0.982151C8.13133 1.27035 8.85816 1.75839 9.36953 2.38456C9.8809 3.01073 10.1538 3.74691 10.1538 4.5C10.1524 5.50951 9.66168 6.47735 8.78922 7.19118C7.91676 7.90501 6.73385 8.30655 5.5 8.30769ZM3.80769 4.5C3.80769 4.79061 3.91945 5.07385 4.12713 5.3096C4.33481 5.54535 4.62789 5.72166 4.96485 5.81356C5.30181 5.90546 5.66556 5.90828 6.00459 5.82163C6.34362 5.73498 6.64074 5.56325 6.85385 5.33077C6.92124 5.25732 7.02153 5.20879 7.13266 5.19585C7.24379 5.18291 7.35665 5.20661 7.44642 5.26175C7.53618 5.31689 7.5955 5.39895 7.61132 5.48988C7.62714 5.5808 7.59816 5.67314 7.53077 5.74658C7.21103 6.09521 6.76533 6.35269 6.25681 6.48257C5.74829 6.61245 5.20272 6.60814 4.69735 6.47026C4.19199 6.33237 3.75245 6.06789 3.44099 5.71429C3.12953 5.36068 2.96194 4.93586 2.96194 4.5C2.96194 4.06414 3.12953 3.63932 3.44099 3.28571C3.75245 2.9321 4.19199 2.66763 4.69735 2.52974C5.20272 2.39186 5.74829 2.38755 6.25681 2.51743C6.76533 2.64731 7.21103 2.90479 7.53077 3.25341C7.56414 3.28978 7.58843 3.33117 7.60225 3.37521C7.61607 3.41926 7.61915 3.4651 7.61132 3.51012C7.60349 3.55514 7.58489 3.59846 7.5566 3.6376C7.52831 3.67674 7.49087 3.71094 7.44642 3.73824C7.40197 3.76555 7.35139 3.78542 7.29755 3.79673C7.24372 3.80804 7.18769 3.81056 7.13266 3.80415C7.07764 3.79774 7.02469 3.78253 6.97685 3.75938C6.92902 3.73623 6.88722 3.7056 6.85385 3.66923C6.64074 3.43674 6.34362 3.26501 6.00459 3.17837C5.66556 3.09172 5.30181 3.09454 4.96485 3.18644C4.62789 3.27834 4.33481 3.45465 4.12713 3.6904C3.91945 3.92615 3.80769 4.20939 3.80769 4.5Z" fill="white"/>
                    </svg>
                    2024 ALL RIGHTS RESERVED</span>
                <span>Design & Development by @Shubhansh_Sharma</span>
                <span>shubhanshsharma030604@gmail.com</span>
            </div>
        </div>
        </>
    )
}