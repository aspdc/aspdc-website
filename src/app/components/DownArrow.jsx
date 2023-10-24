"use client"
import SingleArrow from "./SingleArrow"

export default function DownArrow(){
    return(
        <div className="flex-col gap-12 m-auto w-fit mt-[50%] animate-bounce opacity-25 hover:cursor-pointer">
            <div className="translate-y-6">
                <SingleArrow/>
            </div>
            <SingleArrow/>
            <div className="-translate-y-6">
                <SingleArrow/>
            </div>
        
        </div>
    )
}