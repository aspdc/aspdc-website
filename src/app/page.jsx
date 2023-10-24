"use client"
import About from "./components/About"
import Hero from "./components/Hero"
import Team from "./components/Team"
import Footer from "./components/Footer"

import { useRef,useEffect, useState } from "react"
import { Poppins } from "next/font/google";
export const poppins=Poppins({
    subsets: ['latin'],
    weight: ["300"],
})
export default function Home() {

    useEffect(() => {
        localStorage.getItem('currentPage') 
    }, [])

    return(
        <div className="h-full">
            <Hero/>
            <About/>
            <Team/>

        </div>
    )
}