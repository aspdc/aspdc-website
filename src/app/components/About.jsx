"use client"
import React from "react";
import {useState, useRef ,useEffect} from "react";
import { Poppins } from "next/font/google";

const poppins=Poppins({
    subsets: ['latin'],
    weight: ["400","500","600","700"],
})

export default function About(){
    const [check,setCheck]=useState(false) 

    // const myRef=useRef()
    // useEffect(()=>{
    //     const observer=new IntersectionObserver((entries)=>{
    //         const entry=entries[0]
    //         setCheck(entry.isIntersecting)
    //         console.log("about check",entry)
    //     })
    //     observer.observe(myRef.current)
    // },[])

    return(
        <div>
            <div className={`h-screen z-10 w-[50%] text-[120%] ${poppins.className} m-auto`}>
                <div className="about-us m-auto text-[330%] font-regular  w-fit mt-24">
                    About Us
                </div>
                <div className="mt-[5%]">
                    "Embrace the challenges as opportunities to learn, grow, and evolve. In every obstacle lies a chance to discover your strength and resilience."
                </div>
                <div className="mt-[1%]">
                Welcome to Club ASPD, where coding passion thrives! 🚀 We're a vibrant community of diverse coders—students to professionals—united by our love for technology. From hackathons to workshops, we're all about fostering creativity and continuous learning. Join us in crafting solutions, building dreams, and shaping the future of tech. Let's code together at {} 
                    <span className="font-bold">
                        ASPDC! 
                    </span>
                </div>
                <div className="text-center text-[330%] mt-[45%] font-poppins">
                    Meet The Team
                </div>
                <div className="w-[50%] m-auto"> 
                <hr />

                </div>
                <div className="text-center mt-[1%]">
                    Club ASPD
                </div>
            </div>
        </div>
        
    )
}