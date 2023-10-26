"use client"

import React,{useEffect,useState,useRef} from 'react'
import Navbar from "../components/Navbar"
import DownArrow from './DownArrow'
import { useInView } from 'react-intersection-observer'

export default function Hero() {

    const myRef=useRef()
    const scrollToAboutUs=()=>{
        myRef.current?.scrollIntoView({behavior:'smooth'})
    }



    return(
        <div className="home p-0 h-screen bg-black m-auto " >
            {/* <div className="bg-[#4D2E00] opacity-50">
                <img src="https://i.ibb.co/gDc2wCw/Coding.jpg" className='object-fit m-0 p-0 opacity-70' alt=""/>
            </div> */}
            {/* <div className="bg-[url('https://i.ibb.co/gDc2wCw/Coding.jpg')] m-auto h-screen bg-transparent bg-cover bg-local bg-no-repeat"> */}
            <div className="bg-[url('../../public/assets/images/Coding-low-brightness.jpg')] m-auto h-screen bg-cover bg-fixed ">
                    <div className={"w-fit m-auto"}>
                        <Navbar 
                            textColour='text-gray-400'
                            hoverColour='text-white'
                            />
                    </div>
                    <div className="w-fit mt-[2%] m-auto flex-col text-white text-center translate-y-[13%] delay-500">
                        <div className="text-[1000%] text-[#00CA08] m-auto animate-pulse">
                            {"</>"}
                        </div>
                        <div className="-translate-y-[35%]">
                            <div className="font-katibeh text-[200%] opacity-70"  > 
                                Coding Club
                            </div>
                            <div className="w-[40%] m-auto">
                                <hr />
                            </div>
                            <div className="text-[150%] font-thin ">
                                ASPDC
                            </div>
                        </div>
                        <div className="font-poppins font-regular mt-[20%] text-[150%] -translate-y-[100%]  ">
                            Where Passion meets Programming
                        </div>
                        <div onClick={scrollToAboutUs} className='w-fit m-auto mt-[40%]' >
                            <DownArrow/>
                        </div>
                    </div>
            </div>
            <div className='mt-1 h-screen z-0 float opacity-0' ref={myRef}>
                <hr />

            </div>
        </div>
    )
    }