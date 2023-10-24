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
        <div className="home p-0 m-0 h-screen bg-black " >
            <div className="bg-[#4D2E00] opacity-50">
                <img src="https://i.ibb.co/gDc2wCw/Coding.jpg" className='w-full h-screen object-cover m-0 p-0 opacity-70' alt=""/>
            </div>
            <div className="absolute top-0 w-[75%] left-[12%] ">
                <div className={"w-fit m-auto"}>
                    <Navbar/>
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
                    <div className="font-poppins font-regular mt-[20%] text-[120%] -translate-y-[100%]  ">
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