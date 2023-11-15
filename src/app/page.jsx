"use client"
import Hero from "./components/Home/hero/Hero"
import Team from "./components/Home/team/Team"

import { Poppins,Dosis } from "next/font/google";
export const poppins=Poppins({
    subsets: ['latin'],
    weight: ["400"],
})

export const dosis = Dosis({ subsets: ['latin'] })

export default function Home() {
    return(
        <div className="w-[100%] p-0">
            <Hero/>
            <Team/>

        </div>
    )
}