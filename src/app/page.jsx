"use client"
import About from "./components/Home/about/About"
import Hero from "./components/Home/hero/Hero"
import Team from "./components/Home/team/Team"
import Footer from "./components/Footer"

import { useRef,useEffect, useState } from "react"
import { Poppins,Dosis } from "next/font/google";
export const poppins=Poppins({
    subsets: ['latin'],
    weight: ["300"],
})

export const dosis = Dosis({ subsets: ['latin'] })


export default function Home() {
    return(
        <div className="w-screen p-0">
            <Hero/>
            <Team/>

        </div>
    )
}