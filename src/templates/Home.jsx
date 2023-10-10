import Navbar from "../components/Navbar"
import About from "../components/About"
import Hero from "../components/Hero"
import Team from "../components/Team"
import Footer from "../components/Footer"
import { useRef,useEffect, useState } from "react"

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