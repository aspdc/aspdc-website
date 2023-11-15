"use client"

import React,{useEffect,useState,useRef} from 'react'
import Navbar from "../../Navbar"
import DownArrow from './DownArrow'
import { useInView } from 'react-intersection-observer'
import About from '../about/About'

export default function Hero() {

    const myRef=useRef()
    const scrollToAboutUs=()=>{
        myRef.current?.scrollIntoView({behavior:'smooth'})
    }
    return(
        <div>
        <div>
        <div className="home p-0  h-screen bg-black" >
            <div className="m-auto h-full">
                    <div>
                        <Navbar 
                            textColour='text-gray-300'
                            hoverColour='text-black'
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

                        <div onClick={scrollToAboutUs} className='w-fit mt-[32%] m-auto' >
                            <DownArrow/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div ref={myRef}>
                <About/>
            </div> 
        </div>
    )
    }