"use client"

import {useRef,useEffect,useState } from "react"
import {AiFillFacebook,AiFillInstagram,AiOutlineTwitter} from "react-icons/ai"
import Link from "next/link"
import { useInView } from "react-intersection-observer"

export default function MemberCard(props){

    const [style,setStyle]=useState("flip-inner relative h-full duration-500 shadow-lg [transform-style:preserve-3d] ")
    const [card, inView] = useInView()
   
    useEffect(()=>{
        if(inView){
            setStyle("flip-inner relative shadow-sm duration-500 [transform:rotateY(180deg)] [transform-style:preserve-3d]")
        }
        else{
            setStyle("flip-inner relative shadow-sm duration-500 [transform:rotateY(0deg)] [transform-style:preserve-3d]")
        }
    },[inView])

    return(
        <div className="font-poppins h-72 w-72 ml-[26%] ">
            <div className="flip shadow-lg perspective[1000px] m-auto" >
                <div className={style} >
                    <div className="front [backface-visibility:hidden] h-full w-full">
                        
                    </div>

                    <div className="back flex flex-col hover:shadow-2xl justify-center items-center gap-2 h-fit w-96 text-center  bg-blue absolute [backface-visibility:hidden] [transform:rotateY(180deg)] " ref={card}>
                        <div>
                            <img src={props.img} className="rounded-full m-auto mt-12" alt="" />                    
                        </div>
                        <div className="opacity-60" >
                            <h1 className="text-2xl mt-[8%] font-bold">{props.name}</h1>
                            <p className="text-sm font-semibold">{props.position}</p>
                        </div>
                        <div className="flex h-12 gap-20 mt-[12%] opacity-50 ">
                            <Link href={props.contact}  >
                                <AiFillInstagram className="text-[190%] hover:text-pink-950"/>
                            </Link>
                            <Link href={props.facebook} >
                                <AiFillFacebook className="text-[190%] hover:text-[#000C36]"/>
                            </Link>
                            <Link href={props.email}>
                                <AiOutlineTwitter className="text-[190%] hover:text-[#000C36]"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}