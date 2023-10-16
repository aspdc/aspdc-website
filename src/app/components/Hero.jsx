"use client"

import React,{useEffect,useState,useRef} from 'react'
import Navbar from "../components/Navbar"


export default function Hero() {
    const [navbar,setNavbar]=useState("w-fit ")
    const [check,setCheck]=useState(false)

    const myRef=useRef()
    useEffect(()=>{
        const observer=new IntersectionObserver((entries)=>{
            const entry=entries[0]
            setCheck(entry.isIntersecting)
            console.log(entry)

        })
        observer.observe(myRef.current)
    },[])
    useEffect(()=>{
        check ? 
        setNavbar("-translate-y-10") : setNavbar("w-fit m-auto")
    },[check])

    const scrollToAboutUs=()=>{
        myRef.current.scrollIntoView({behavior:'smooth'})
    }

    
    return(
        <div className="home p-0 m-0 h-screen bg-black " >
            <div className="bg-[#4D2E00] opacity-50">
                <img src="https://i.ibb.co/gDc2wCw/Coding.jpg" className='w-full h-screen object-cover m-0 p-0 opacity-70' alt=""/>
            </div>
            <div className="absolute top-0 w-[75%] left-[12%] ">
                <div className={navbar}>
                    <Navbar/>
                </div>
                <div className="w-fit mt-[7%] m-auto flex-col text-white text-center translate-y-[13%] delay-500">
                    <div className="text-[1000%] text-[#00CA08] m-auto animate-pulse">
                        {"</>"}
                    </div>
                    <div className="-translate-y-[35%]">
                        <div className="font-katibeh text-[200%] opacity-70">
                            Coding Club
                        </div>
                        <div className="w-[40%] m-auto">
                            <hr />
                        </div>
                        <div className="text-[150%] font-thin ">
                            ASPDC
                        </div>
                    </div>
                    <div className="font-poppins mt-[20%] text-[20px] -translate-y-[100%]">
                        Where Passion meets Programming
                    </div>
                    <div onClick={scrollToAboutUs} className="flex-col gap-12 m-auto w-fit mt-[50%] animate-bounce opacity-25 hover:cursor-pointer">
                        <div className="text-[30px] top-8 font-light w-min m-auto ">
                            <div className="flex translate-y-6">
                                <div className="-rotate-[25deg]">
                                    \
                                </div>  
                                <div className="translate-x-3 rotate-[25deg]">
                                    /
                                </div>
                            </div>
                        </div>
                        <div className="text-[30px] flex top-8 font-light  w-min m-auto">
                            <div className="-rotate-[25deg]">
                                \
                            </div>  
                            <div className="translate-x-3 rotate-[25deg]">
                                /
                            </div>
                        </div>
                        <div className="text-[30px] flex top-8 font-light  w-min m-auto">
                            <div className="flex -translate-y-6">

                                <div className="-rotate-[25deg]">
                                    \
                                </div>  
                                <div className="translate-x-3 rotate-[25deg]">
                                    /
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-1 h-screen z-0 float opacity-0' ref={myRef}>
                <hr />

            </div>
        </div>
    )
    }